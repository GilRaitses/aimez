#!/usr/bin/env bash
set -euo pipefail

DIR="$(cd "$(dirname "$0")" && pwd)"
EXPORTS="$DIR/exports"
SCALE="${1:-4}"
WIDTH=$((320 * SCALE))

mkdir -p "$EXPORTS"

WHITE_SVG="$DIR/aimez-workspace-logo-source.svg"
TRANSPARENT_SVG="$DIR/aimez-workspace-logo-source-transparent.svg"
OUT_WHITE="$EXPORTS/aimez-workspace-logo-from-svg@${SCALE}x.png"
OUT_TRANSPARENT="$EXPORTS/aimez-workspace-logo-from-svg-transparent@${SCALE}x.png"
OUT_CANONICAL="$(cd "$DIR/.." && pwd)/aimez-workspace-logo.png"

rsvg-convert -w "$WIDTH" -f png -o "$OUT_WHITE" "$WHITE_SVG"
rsvg-convert -w "$WIDTH" -f png -o "$OUT_TRANSPARENT" "$TRANSPARENT_SVG"
cp "$OUT_WHITE" "$OUT_CANONICAL"

python3 - <<PY
import json
from datetime import datetime, timezone
from pathlib import Path

scale = int("$SCALE")
manifest = {
    "sourceSvg": "aimez-workspace-logo-source.svg",
    "sourceSvgTransparent": "aimez-workspace-logo-source-transparent.svg",
    "outputWhite": Path("$OUT_WHITE").name,
    "outputTransparent": Path("$OUT_TRANSPARENT").name,
    "canonicalCopy": "docs/assets/aimez-workspace-logo.png",
    "cssWidth": 320,
    "cssHeight": 132,
    "scale": scale,
    "pixelWidth": 320 * scale,
    "pixelHeight": 132 * scale,
    "engine": "rsvg-convert",
    "bakedAt": datetime.now(timezone.utc).isoformat(),
}
Path("$EXPORTS/aimez-workspace-logo-from-svg@${SCALE}x.json").write_text(
    json.dumps(manifest, indent=2) + "\n"
)
PY

echo "Wrote $OUT_WHITE"
echo "Wrote $OUT_TRANSPARENT"
echo "Wrote $OUT_CANONICAL"
