"""Look up a solution or audit result by problem number."""
import argparse
import json
from pathlib import Path


def load(path):
    return json.loads(Path(__file__).with_name(path.split("/")[0]).joinpath(*path.split("/")[1:]).read_text(encoding="utf-8"))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("problem_id", help="Problem number, for example 3.337")
    parser.add_argument("--audit", action="store_true", help="Show the published-answer comparison")
    args = parser.parse_args()
    chapter = load("index.json")["problem_chapters"].get(args.problem_id)
    if chapter is None:
        parser.error(f"unknown problem number {args.problem_id!r}")
    if args.audit:
        part = args.problem_id.split(".")[0]
        result = load(f"audit/{part}.json")[args.problem_id]
    else:
        result = next(row for row in load(f"chapters/{chapter}.json")["solutions"]
                      if row["problem_id"] == args.problem_id)
    print(json.dumps(result, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
