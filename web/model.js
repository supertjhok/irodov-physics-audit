export const verdictLabels = Object.freeze({
  agreement: 'Agreement',
  book_error: 'Printed error',
  independent_error: 'Independent-record error',
  interpretation: 'Convention or model difference',
  partial_agreement: 'Partial agreement',
  no_book_entry: 'No separately numbered answer',
});

export const findings = ['book_error', 'independent_error', 'interpretation', 'partial_agreement'];

export function routeFrom(search, catalog) {
  const params = new URLSearchParams(search);
  const view = params.get('view') === 'audit' ? 'audit' : 'solutions';
  const candidate = params.get('problem');
  const problem = Object.hasOwn(catalog.problem_chapters, candidate) ? candidate : '';
  const requestedChapter = params.get('chapter');
  const chapter = (view === 'solutions' && catalog.problem_chapters[problem]) ||
    (Object.hasOwn(catalog.chapters, requestedChapter) ? requestedChapter : '');
  const requestedVerdict = params.get('verdict');
  const verdict = requestedVerdict === 'all' || Object.hasOwn(verdictLabels, requestedVerdict) ? requestedVerdict : 'findings';
  return { view, problem, chapter, verdict, invalidProblem: candidate && !problem ? candidate : '' };
}

export function matchedNumbers(catalog, chapter, input, exactAcrossChapters = true) {
  const query = input.trim().replace(/^#\s*/, '').replace(/\s*\.\s*/g, '.');
  const ids = chapter ? catalog.chapters[chapter].problem_ids : Object.keys(catalog.problem_chapters);
  if (!query) return ids;
  if (Object.hasOwn(catalog.problem_chapters, query) && (exactAcrossChapters || ids.includes(query))) return [query];
  return ids.filter(id => query.includes('.') ? id.startsWith(query) : id.split('.')[1].startsWith(query));
}

export function auditMatches(catalog, entries, chapter, verdict, query) {
  return matchedNumbers(catalog, chapter, query, false).filter(id => {
    const result = entries[id]?.verdict;
    return Boolean(result) && (verdict === 'all' || (verdict === 'findings' ? findings.includes(result) : result === verdict));
  });
}
