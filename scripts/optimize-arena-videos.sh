#!/usr/bin/env bash
set -euo pipefail

SRC_DIR="assets-source/video/Stadionul National Bucuresti"
OUT_DIR="public/video"

declare -a items=(
  "arena-nationala-vedere-generala|Arena Nationala Bucuresti.mp4"
  "arena-nationala-drona-exterior|Arena Nationala Bucuresti -cu drona in exterior.mp4"
  "arena-nationala-drona-interior|Arena Nationala Bucuresti -cu drona in interior.mp4"
  "arena-nationala-intrare|Arena Nationala -intrare.mp4"
  "arena-nationala-bancile-antrenorilor|Arena Nationala -bancile antrenorilor.mp4"
  "arena-nationala-meci-romania|Arena Nationala Bucuresti -pe stadion la meciul cu Romania.mp4"
)

for item in "${items[@]}"; do
  slug="${item%%|*}"
  file="${item#*|}"
  src="$SRC_DIR/$file"

  echo "==> $slug"

  ffmpeg -y -loglevel error -i "$src" -an \
    -vf "scale=960:-2,format=yuv420p" \
    -c:v libx264 -profile:v main -level 4.0 -preset slow -crf 26 \
    -movflags +faststart \
    "$OUT_DIR/$slug.mp4"

  ffmpeg -y -loglevel error -i "$src" -an \
    -vf "scale=960:-2" \
    -c:v libvpx-vp9 -b:v 0 -crf 34 -row-mt 1 -tile-columns 2 -threads 4 \
    -pix_fmt yuv420p \
    "$OUT_DIR/$slug.webm"

  duration=$(ffprobe -v error -show_entries format=duration -of default=nokey=1:noprint_wrappers=1 "$src")
  midpoint=$(awk "BEGIN { printf \"%.2f\", ${duration}/2 }")

  ffmpeg -y -loglevel error -ss "$midpoint" -i "$src" -frames:v 1 \
    -vf "scale=1400:-2" -q:v 4 \
    "$OUT_DIR/$slug-poster.jpg"

  ffmpeg -y -loglevel error -ss "$midpoint" -i "$src" -frames:v 1 \
    -vf "scale=1400:-2" -c:v libwebp -quality 82 \
    "$OUT_DIR/$slug-poster.webp"
done

echo "Done."
