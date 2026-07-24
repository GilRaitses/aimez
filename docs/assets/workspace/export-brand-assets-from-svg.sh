#!/usr/bin/env bash
set -euo pipefail

DIR="$(cd "$(dirname "$0")" && pwd)"
BRAND="$DIR/brand"
FAVICONS="$(cd "$DIR/../favicons" && pwd)"
SOCIAL="$(cd "$DIR/../social" && pwd)"
DOCS="$(cd "$DIR/../.." && pwd)"

FAVICON_SVG="$BRAND/aimez-favicon-a-source.svg"
TOUCH_SVG="$BRAND/aimez-touch-icon-source.svg"
SOCIAL_SVG="$BRAND/aimez-social-preview-source.svg"

export_png() {
  local svg="$1"
  local width="$2"
  local out="$3"
  rsvg-convert -w "$width" -f png -o "$out" "$svg"
  echo "  $out (${width}px)"
}

echo "Exporting favicons from $FAVICON_SVG"
export_png "$FAVICON_SVG" 16  "$FAVICONS/favicon-16x16.png"
export_png "$FAVICON_SVG" 32  "$FAVICONS/favicon-32x32.png"
export_png "$FAVICON_SVG" 48  "$FAVICONS/favicon-48x48.png"
export_png "$FAVICON_SVG" 96  "$FAVICONS/favicon-96x96.png"

echo "Exporting touch / PWA icons from $TOUCH_SVG"
export_png "$TOUCH_SVG" 180 "$FAVICONS/apple-touch-icon.png"
export_png "$TOUCH_SVG" 192 "$FAVICONS/android-chrome-192x192.png"
export_png "$TOUCH_SVG" 512 "$FAVICONS/android-chrome-512x512.png"

echo "Building favicon.ico"
convert "$FAVICONS/favicon-16x16.png" "$FAVICONS/favicon-32x32.png" "$FAVICONS/favicon-48x48.png" "$FAVICONS/favicon.ico"
cp "$FAVICONS/favicon.ico" "$DOCS/favicon.ico"
cp "$FAVICONS/favicon-32x32.png" "$FAVICONS/favicon_source.png"

echo "Exporting contract icon aliases"
cp "$FAVICONS/android-chrome-192x192.png" "$FAVICONS/icon-192.png"
cp "$FAVICONS/android-chrome-512x512.png" "$FAVICONS/icon-512.png"
cp "$FAVICON_SVG" "$FAVICONS/favicon.svg"
# Prefer the deployed self-contained root favicon when present.
if [[ -f "$DOCS/favicon.svg" ]]; then
  cp "$DOCS/favicon.svg" "$FAVICONS/favicon.svg"
fi

echo "Exporting social preview from $SOCIAL_SVG"
SOCIAL_OUT="$SOCIAL/aimez_klosr_og_r20260724b.png"
export_png "$SOCIAL_SVG" 1200 "$SOCIAL_OUT"

python3 - <<PY
import json
from datetime import datetime, timezone
from pathlib import Path

manifest = {
    "faviconSource": "brand/aimez-favicon-a-source.svg",
    "touchIconSource": "brand/aimez-touch-icon-source.svg",
    "socialPreviewSource": "brand/aimez-social-preview-source.svg",
    "typography": "Newsreader 500",
    "outputs": {
        "favicons": [
            "docs/assets/favicons/favicon-16x16.png",
            "docs/assets/favicons/favicon-32x32.png",
            "docs/assets/favicons/favicon-48x48.png",
            "docs/assets/favicons/favicon-96x96.png",
            "docs/assets/favicons/apple-touch-icon.png",
            "docs/assets/favicons/android-chrome-192x192.png",
            "docs/assets/favicons/android-chrome-512x512.png",
            "docs/assets/favicons/icon-192.png",
            "docs/assets/favicons/icon-512.png",
            "docs/assets/favicons/favicon.svg",
            "docs/assets/favicons/favicon.ico",
            "docs/favicon.ico",
            "docs/favicon.svg",
        ],
        "social": ["docs/assets/social/aimez_klosr_og_r20260724b.png"],
    },
    "ogDimensions": {"width": 1200, "height": 630},
    "engine": "rsvg-convert + imagemagick",
    "bakedAt": datetime.now(timezone.utc).isoformat(),
}
Path("$BRAND/export-manifest.json").write_text(json.dumps(manifest, indent=2) + "\\n")
PY

echo "Done."

