#!/usr/bin/env bash
# Deck copy gate — patterns from phdPrograms/qualityFilter.yaml (not_x_but_y, em dashes).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
FILES=("$ROOT/executive-summary.html" "$ROOT/figure-walkthrough.html")
# Prose checks only on HTML (ignore array.slice in .js)
FAIL=0

check() {
  local label="$1"
  local pattern="$2"
  if rg -n -i "$pattern" --glob '*.html' "${FILES[@]}" 2>/dev/null; then
    echo "FAIL: $label"
    FAIL=1
  fi
}

echo "Checking public slide decks…"
check "em dash" '—'
check "not just / not only" 'not (just|only)'
check "rather than" 'rather than'
check "instead of" 'instead of'
check "not the ceiling" 'not the ceiling'
check "not guessed" 'not guessed'
check "not mid-pitch" 'not mid-pitch'
check "word slice" '\bslice\b'
check "slide meta on title" 'Panel map on slide|Links on the last slide|Who to talk to after'

if [[ "$FAIL" -eq 0 ]]; then
  echo "OK: no flagged prose patterns."
else
  echo "See qualityFilter.yaml (phdPrograms repo) for replacements."
  exit 1
fi
