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
#
# Colour handling is not optional here. The Remotion master comes out as
# yuvj420p / full range with a BT.601 (bt470bg) matrix tag. Browsers ignore the
# full-range flag on H.264 and expand the picture as if it were 16-235, which
# pushes the product UI — 92% of its pixels sit above Y=235 — straight into
# clipped white: Chrome decoded the master's (247,244,239) page background as
# (255,255,250). So the web copy is converted to what every decoder assumes,
# BT.709 limited range, and tagged as such.
set -euo pipefail

SRC="${1:-$HOME/Downloads/Fiberarticle_Product_Demo.mp4}"
OUT="$(cd "$(dirname "$0")/.." && pwd)/public/hero"

[ -f "$SRC" ] || { echo "master not found: $SRC" >&2; exit 1; }
mkdir -p "$OUT"

echo "==> demo.mp4 (H.264 high, BT.709 limited range, faststart, no audio)"
ffmpeg -y -hide_banner -loglevel error -i "$SRC" \
  -vf "scale=in_color_matrix=bt470bg:out_color_matrix=bt709:in_range=full:out_range=limited" \
  -c:v libx264 -profile:v high -level 5.0 -preset slow -tune animation -crf 29 \
  -maxrate 6M -bufsize 12M \
  -pix_fmt yuv420p -color_range tv -colorspace bt709 -color_primaries bt709 -color_trc bt709 \
  -x264-params "colorprim=bt709:transfer=bt709:colormatrix=bt709:fullrange=off" \
  -g 150 -keyint_min 150 -sc_threshold 0 \
  -movflags +faststart -an "$OUT/demo.mp4"

echo "==> demo-poster.webp (first frame of the dashboard)"
ffmpeg -y -hide_banner -loglevel error -ss 1.2 -i "$SRC" -frames:v 1 \
  -c:v libwebp -quality 82 "$OUT/demo-poster.webp"

ls -lh "$OUT/demo.mp4" "$OUT/demo-poster.webp"
