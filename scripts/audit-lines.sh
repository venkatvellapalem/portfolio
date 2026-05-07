#!/usr/bin/env bash
# Audit the codebase for visible-line patterns the redesign forbids.
# Run from repo root: bash scripts/audit-lines.sh
set -e
echo "== <hr> tags =="
grep -rni --include="*.tsx" --include="*.jsx" "<hr" app components || true
echo "== border-* utilities (review each) =="
grep -rnE --include="*.tsx" --include="*.jsx" "\bborder(-(t|b|l|r|x|y))?(-[0-9])?\b" app components || true
echo "== divide-* utilities =="
grep -rnE --include="*.tsx" --include="*.jsx" "\bdivide-(x|y)\b" app components || true
echo "== background grid/line patterns =="
grep -rnE --include="*.tsx" --include="*.css" "(bg-grid|bg-lines|grid-overlay|linear-gradient.*lines)" app components styles || true
echo "Done. Whitelist edges by adding the .keep-edge class."