#!/usr/bin/env bash
# Encodes the Remotion master into the two web copies the hero <video> uses,
# plus the poster the fallback shows before the first frame decodes.
#
#   usage: bash scripts/encode-hero-demo.sh [path-to-master.mp4]
#
# The master is visually lossless (CRF 16) and far too heavy to ship. The web
# copy keeps the full 2560x1440 frame — the hero is a Retina laptop screen, so
# downscaling shows — but drops to ~1.5 Mbps, which faststart can begin playing
# on the first few hundred KB.
#
# H.264 only, deliberately. VP9/AV1 compress this better, but H.264 is the one
# codec with hardware decoding on every phone and laptop, and a 1440p loop that
# falls back to a software decoder is exactly the stutter this is meant to
# avoid. No audio track at all: the film is silent, and a missing track is one
# less thing for iOS autoplay to object to.
set -euo pipefail

SRC="${1:-$HOME/Downloads/Fiberarticle_Product_Demo.mp4}"
OUT="$(cd "$(dirname "$0")/.." && pwd)/public/hero"

[ -f "$SRC" ] || { echo "master not found: $SRC" >&2; exit 1; }
mkdir -p "$OUT"

echo "==> demo.mp4 (H.264 high, faststart, no audio)"
ffmpeg -y -hide_banner -loglevel error -i "$SRC" \
  -c:v libx264 -profile:v high -level 5.0 -preset slow -tune animation -crf 29 \
  -maxrate 6M -bufsize 12M \
  -pix_fmt yuv420p -g 150 -keyint_min 150 -sc_threshold 0 \
  -movflags +faststart -an "$OUT/demo.mp4"

echo "==> demo-poster.webp (first frame of the dashboard)"
ffmpeg -y -hide_banner -loglevel error -ss 1.2 -i "$SRC" -frames:v 1 \
  -c:v libwebp -quality 82 "$OUT/demo-poster.webp"

ls -lh "$OUT/demo.mp4" "$OUT/demo-poster.webp"
