import { auditMatches, findings, matchedNumbers, routeFrom, verdictLabels } from './model.js';

const $ = id => document.getElementById(id);
const reading = $('reading');
const numberInput = $('number');
const chapterSelect = $('chapter');
const verdictSelect = $('verdict');
const formatNumber = new Intl.NumberFormat('en').format;
const pageSize = 30;
const chapterCache = new Map();
let catalog;
let auditRequest;
let audit;
let state;
let renderVersion = 0;
let solutionLimit = pageSize;
let auditLimit = pageSize;

function el(tag, text = '', className = '') {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function url({ view, chapter, problem, verdict } = {}) {
  const params = new URLSearchParams();
  if (view === 'audit') params.set('view', view);
  if (chapter) params.set('chapter', chapter);
  if (problem) params.set('problem', problem);
  if (view === 'audit' && verdict && verdict !== 'findings') params.set('verdict', verdict);
  return params.size ? `./?${params}` : './';
}

function link(label, to, className = '') {
  const a = el('a', label, className);
  a.href = url(to);
  a.dataset.navigate = '';
  return a;
}

function chapterTitle(chapter) {
  return `${chapter} ${catalog.chapters[chapter].title}`;
}

async function fetchJson(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Could not load ${path} (HTTP ${response.status}).`);
  return response.json();
}

function loadChapter(chapter) {
  if (!chapterCache.has(chapter)) {
    chapterCache.set(chapter, fetchJson(`chapters/${chapter}.json`).catch(error => {
      chapterCache.delete(chapter);
      throw error;
    }));
  }
  return chapterCache.get(chapter);
}

function loadAudit() {
  auditRequest ??= Promise.all(Object.keys(catalog.parts).map(part => fetchJson(`audit/${part}.json`)))
    .then(parts => Object.assign({}, ...parts))
    .catch(error => {
      auditRequest = undefined;
      throw error;
    });
  return auditRequest;
}

function equation(tex, display = false) {
  const node = el(display ? 'div' : 'span', '', display ? 'math-display' : 'math-inline');
  const trimmed = tex.trim().replace(/^\$+|\$+$/g, '');
  if (window.katex) {
    window.katex.render(trimmed, node, { displayMode: display, output: 'htmlAndMathml', throwOnError: false, strict: 'ignore' });
  } else {
    node.textContent = trimmed;
  }
  return node;
}

function rich(text, className = '') {
  const p = el('p', '', className);
  let end = 0;
  for (const match of String(text).matchAll(/\$([^$\n]+)\$|\\\((.+?)\\\)/g)) {
    p.append(text.slice(end, match.index), equation(match[1] ?? match[2]));
    end = match.index + match[0].length;
  }
  p.append(text.slice(end));
  return p;
}

function section(title, className = '') {
  const node = el('section', '', className);
  node.append(el('h3', title));
  return node;
}

function badge(label, color = 'neutral') {
  return el('span', label, `badge ${color}`);
}

function verdictBadge(verdict) {
  const color = verdict.endsWith('_error') ? 'error' : verdict === 'agreement' ? 'good' : 'neutral';
  return badge(verdictLabels[verdict], color);
}

function titleBlock(title, subtitle = '') {
  const header = el('header', '', 'reading-top');
  if (subtitle) header.append(el('p', subtitle, 'reading-label'));
  const h = el('h2', title, 'reading-title');
  h.id = 'reading-heading';
  h.tabIndex = -1;
  header.append(h);
  return header;
}

function correction(amendment) {
  const node = section('Audit update', 'correction');
  node.append(rich(amendment.description));
  return node;
}

function details(label, lines) {
  const node = el('details', '', 'reading-detail');
  const list = el('ul');
  for (const line of lines) {
    const li = el('li');
    li.append(rich(line));
    list.append(li);
  }
  node.append(el('summary', label), list);
  return node;
}

function solutionPage(row) {
  const id = row.problem_id;
  const header = titleBlock(`Problem ${id}`, chapterTitle(row.chapter_id));
  const badges = el('div', '', 'badges');
  badges.append(badge(`${row.confidence.level} confidence`, row.confidence.level === 'high' ? 'good' : 'neutral'));
  if (row.status !== 'solved') badges.append(badge(row.status, 'error'));
  badges.append(link('Answer audit', { view: 'audit', problem: id }));
  header.append(badges);

  const body = el('div', '', 'reading-body');
  const statement = section('Problem statement', 'statement');
  for (const paragraph of row.problem_statement.split(/\n\s*\n/)) statement.append(rich(paragraph));
  const { printed_pages: pages, figure_ids: sourceFigures } = row.problem_source;
  const provenance = [];
  if (pages.length) provenance.push(`Book ${pages.length === 1 ? 'page' : 'pages'} ${pages.join(', ')}`);
  if (sourceFigures.length) provenance.push(`Source ${sourceFigures.length === 1 ? 'figure' : 'figures'} ${sourceFigures.join(', ')}`);
  if (row.covered_subparts) provenance.push(`Part ${row.covered_subparts.map(part => `(${part})`).join(', ')}`);
  if (provenance.length) statement.append(el('p', provenance.join(' · '), 'source'));
  body.append(statement);
  if (row.audit_amendment) body.append(correction(row.audit_amendment));

  const derivation = section('Worked solution');
  derivation.append(rich(row.method));
  const steps = el('ol', '', 'steps');
  for (const step of row.steps) {
    const li = el('li');
    li.append(rich(step.explanation));
    if (step.math_latex) li.append(equation(step.math_latex, true));
    steps.append(li);
  }
  derivation.append(steps);
  body.append(derivation);

  const answers = section('Results');
  for (const answer of row.answers) {
    const item = el('div', '', 'answer');
    item.append(el('h4', answer.label), equation(answer.expression_latex, true));
    if (answer.notes) item.append(rich(answer.notes));
    answers.append(item);
  }
  body.append(answers);

  if (row.figures?.length) {
    const figures = section('Solution figures', 'figures');
    for (const [index, path] of row.figures.entries()) {
      const art = el('img');
      art.src = path;
      art.alt = `Generated plot ${index + 1} for problem ${id}`;
      art.loading = 'lazy';
      figures.append(art);
    }
    body.append(figures);
  }
  if (row.assumptions.length) body.append(details('Assumptions', row.assumptions));
  const notes = [row.confidence.reason, ...row.checks, ...row.limitations].filter(Boolean);
  if (notes.length) body.append(details('Confidence, checks, and limitations', notes));

  const ids = catalog.chapters[row.chapter_id].problem_ids;
  const position = ids.indexOf(id);
  const pager = el('nav', '', 'pager');
  pager.setAttribute('aria-label', 'Problems in this chapter');
  const previous = ids[position - 1];
  const next = ids[position + 1];
  pager.append(previous ? link(`Previous · ${previous}`, { problem: previous }) : el('span'));
  if (next) pager.append(link(`Next · ${next}`, { problem: next }));
  body.append(pager);
  reading.replaceChildren(header, body);
}

function auditPage(id) {
  const entry = audit[id];
  const header = titleBlock(`Problem ${id}`, `Answer audit · ${chapterTitle(entry.chapter_id)}`);
  const actions = el('div', '', 'actions');
  actions.append(verdictBadge(entry.verdict), link('Read worked solution', { problem: id }),
    link('Browse findings', { ...state, problem: '' }));
  header.append(actions);
  const body = el('div', '', 'reading-body');
  if (entry.amendment) body.append(correction(entry.amendment));
  const prose = el('div', '', 'audit-prose');
  for (const [description, value] of [
    ['Published result', entry.published_result],
    ['Independent result', entry.independent_result],
    ['Comparison', entry.reasoning],
  ]) {
    if (!value) continue;
    const block = section(description);
    block.append(rich(value));
    prose.append(block);
  }
  if (!prose.childElementCount) prose.append(el('p', verdictLabels[entry.verdict]));
  body.append(prose);
  const citations = [];
  if (entry.printed_pages?.length) citations.push(`Answer page${entry.printed_pages.length === 1 ? '' : 's'} ${entry.printed_pages.join(', ')}`);
  if (entry.problem_printed_pages?.length) citations.push(`Problem page${entry.problem_printed_pages.length === 1 ? '' : 's'} ${entry.problem_printed_pages.join(', ')}`);
  if (entry.compared_subparts) citations.push(`Part ${entry.compared_subparts.map(part => `(${part})`).join(', ')}`);
  if (citations.length) body.append(el('p', citations.join(' · '), 'source'));
  reading.replaceChildren(header, body);
}

function getAuditIds() {
  return auditMatches(catalog, audit, state.chapter, state.verdict, numberInput.value);
}

function auditListPage() {
  const header = titleBlock('Audit findings');
  const compared = catalog.problem_count - (catalog.audit_counts.no_book_entry ?? 0);
  header.append(el('p', `${formatNumber(compared)} published entries compared with independent solutions.`, 'source'));
  const body = el('div', '', 'reading-body');
  const metrics = el('div', '', 'metrics');
  for (const verdict of findings) {
    const card = link('', { ...state, chapter: '', problem: '', verdict }, 'metric');
    card.append(el('strong', formatNumber(catalog.audit_counts[verdict])), el('span', verdictLabels[verdict]));
    if (state.verdict === verdict) card.setAttribute('aria-current', 'true');
    metrics.append(card);
  }
  body.append(metrics);
  const ids = getAuditIds();
  const heading = el('div', '', 'audit-header');
  const range = el('p', `${formatNumber(ids.length)} matching`);
  range.setAttribute('role', 'status');
  heading.append(el('h3', state.verdict === 'findings' || state.verdict === 'all' ? 'Comparisons' : verdictLabels[state.verdict]), range);
  body.append(heading);
  const list = el('ol', '', 'audit-list');
  for (const id of ids.slice(0, auditLimit)) {
    const entry = audit[id];
    const li = el('li');
    const a = link('', { ...state, problem: id });
    const row = el('div', '', 'audit-row-heading');
    row.append(el('span', `Problem ${id}`, 'audit-row-id'), verdictBadge(entry.verdict));
    a.append(row);
    if (entry.reasoning) a.append(el('p', entry.reasoning, 'audit-row-detail'));
    li.append(a);
    list.append(li);
  }
  if (ids.length) body.append(list);
  else body.append(el('p', 'No comparisons match these filters.'));
  if (ids.length > auditLimit) {
    const more = el('button', 'Show more findings', 'secondary-button');
    more.type = 'button';
    more.addEventListener('click', () => {
      const oldLimit = auditLimit;
      auditLimit += pageSize;
      auditListPage();
      reading.querySelectorAll('.audit-list a')[oldLimit]?.focus();
    });
    body.append(more);
  }
  reading.replaceChildren(header, body);
}

function renderSolutionList() {
  const ids = matchedNumbers(catalog, state.chapter, numberInput.value);
  $('result-count').textContent = `${formatNumber(ids.length)} matching`;
  const list = $('problem-list');
  const visible = ids.slice(0, solutionLimit);
  const active = state.problem || (!state.invalidProblem && !numberInput.value ? ids[0] : '');
  if (active && ids.includes(active) && !visible.includes(active)) visible.push(active);
  const items = visible.map(id => {
    const li = el('li');
    const a = link('', { problem: id });
    const title = catalog.chapters[catalog.problem_chapters[id]].title;
    a.append(el('span', id, 'problem-number'), el('span', title, 'result-chapter'));
    a.title = `${id} · ${title}`;
    if (id === active) a.setAttribute('aria-current', 'page');
    li.append(a);
    return li;
  });
  list.replaceChildren(...items);
  $('more-problems').hidden = ids.length <= solutionLimit;
}

function setBusy(text) {
  reading.setAttribute('aria-busy', 'true');
  const loading = el('p', text, 'placeholder');
  loading.setAttribute('role', 'status');
  reading.replaceChildren(loading);
}

function showError(error, retry) {
  reading.setAttribute('aria-busy', 'false');
  const header = titleBlock('Could not load the reading pane');
  const body = el('div', '', 'reading-body');
  const button = el('button', 'Try again', 'secondary-button');
  button.type = 'button';
  button.addEventListener('click', retry, { once: true });
  body.append(el('p', error.message), button);
  reading.replaceChildren(header, body);
}

async function render({ focus = false } = {}) {
  const version = ++renderVersion;
  const isAudit = state.view === 'audit';
  const activeTab = $(isAudit ? 'audit-tab' : 'solutions-tab');
  $('solutions-tab').removeAttribute('aria-current');
  $('audit-tab').removeAttribute('aria-current');
  activeTab.setAttribute('aria-current', 'page');
  $('filter-title').textContent = isAudit ? 'Filter the audit' : 'Find a problem';
  $('lookup').setAttribute('aria-label', $('filter-title').textContent);
  $('side-results').hidden = isAudit;
  $('verdict-field').hidden = !isAudit;
  chapterSelect.value = state.chapter;
  verdictSelect.value = state.verdict;
  if (!isAudit) renderSolutionList();
  setBusy(isAudit ? 'Loading audit findings…' : 'Loading the worked solution…');

  try {
    if (isAudit) {
      audit = await loadAudit();
      if (version !== renderVersion) return;
      if (state.problem) auditPage(state.problem);
      else auditListPage();
    } else if (state.invalidProblem) {
      reading.replaceChildren(titleBlock('Problem not found'),
        el('p', `There is no problem numbered ${state.invalidProblem}. Try the search or choose a chapter.`, 'placeholder'));
    } else {
      const id = state.problem || matchedNumbers(catalog, state.chapter, '')[0];
      const group = await loadChapter(catalog.problem_chapters[id]);
      if (version !== renderVersion) return;
      solutionPage(group.solutions.find(row => row.problem_id === id));
    }
    reading.setAttribute('aria-busy', 'false');
    if (focus) {
      $('reading-heading')?.focus({ preventScroll: true });
      reading.scrollIntoView({ block: 'start' });
    }
  } catch (error) {
    if (version === renderVersion) showError(error, () => render({ focus }));
  }
}

function openLocation({ focus = false } = {}) {
  state = routeFrom(location.search, catalog);
  numberInput.value = '';
  solutionLimit = pageSize;
  auditLimit = pageSize;
  $('result-scroll').scrollTop = 0;
  render({ focus });
}

function navigate(target, focus = false) {
  history.pushState(null, '', target);
  openLocation({ focus });
}

function bindControls() {
  for (const [part, title] of Object.entries(catalog.parts)) {
    const group = el('optgroup');
    group.label = `${part} ${title}`;
    for (const chapter of Object.keys(catalog.chapters).filter(id => id.startsWith(`${part}.`))) {
      group.append(new Option(chapterTitle(chapter), chapter));
    }
    chapterSelect.append(group);
  }
  verdictSelect.append(new Option('All findings', 'findings'), new Option('All comparisons', 'all'));
  for (const [verdict, label] of Object.entries(verdictLabels)) verdictSelect.append(new Option(label, verdict));
  $('site-counts').textContent = `${formatNumber(catalog.problem_count)} problems · ${catalog.chapter_count} chapters`;

  for (const id of ['solutions-tab', 'audit-tab']) $(id).dataset.navigate = '';
  document.addEventListener('click', event => {
    const anchor = event.target.closest('a[data-navigate]');
    if (!anchor || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigate(anchor.href, !anchor.closest('.masthead'));
  });
  window.addEventListener('popstate', () => openLocation());
  chapterSelect.addEventListener('change', () => {
    navigate(url({ ...state, chapter: chapterSelect.value, problem: '' }));
  });
  verdictSelect.addEventListener('change', () => {
    navigate(url({ ...state, verdict: verdictSelect.value, problem: '' }));
  });
  numberInput.addEventListener('input', () => {
    if (state.view === 'audit') {
      auditLimit = pageSize;
      if (audit) auditListPage();
    } else {
      solutionLimit = pageSize;
      $('result-scroll').scrollTop = 0;
      renderSolutionList();
    }
  });
  $('lookup').addEventListener('submit', event => {
    event.preventDefault();
    const isAudit = state.view === 'audit';
    const ids = isAudit ? (audit ? getAuditIds() : []) : matchedNumbers(catalog, state.chapter, numberInput.value);
    if (ids.length) navigate(url({ ...state, problem: ids[0] }), true);
  });
  $('more-problems').addEventListener('click', () => {
    const oldLimit = solutionLimit;
    solutionLimit += pageSize;
    renderSolutionList();
    $('problem-list').querySelectorAll('a')[oldLimit]?.focus();
  });
}

async function start() {
  try {
    catalog = await fetchJson('index.json');
    bindControls();
    openLocation();
  } catch (error) {
    showError(error, start);
  }
}

start();
