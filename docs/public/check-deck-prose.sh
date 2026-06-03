#!/usr/bin/env bash
# Deck copy gate — patterns from phdPrograms/qualityFilter.yaml + no operator briefing on public HTML.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
FILES=("$ROOT/executive-summary.html" "$ROOT/figure-walkthrough.html")
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
check "word slice" '\bslice\b'
check "operator: who to talk" 'who to talk'
check "operator: slide refs" 'listed on slide|Panel map on slide|Links on the last slide|slide \d'
check "operator: Tonight/Offer" '<b>Tonight:</b>|<b>Offer:</b>|Send:'
check "operator: pitch script" 'Open with the Grand Central|matches their role|after the conversation|mid-pitch|conversation deck'
check "operator: after the panels" 'After the panels'

if [[ "$FAIL" -eq 0 ]]; then
  echo "OK: no flagged prose patterns."
else
  echo "Operator briefing belongs in docs/internal/executive-summary-briefing.html only."
  exit 1
fi
