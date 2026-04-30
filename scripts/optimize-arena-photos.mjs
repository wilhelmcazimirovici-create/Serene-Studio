import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { spawn } from "node:child_process";
import { join } from "node:path";

const root = process.cwd();
const sourceDir = join(root, "assets-source", "video", "Stadionul National Bucuresti");
const outputDir = join(root, "public", "images");
const tmpDir = join(root, "public", "images", "originals");

// Capture one frame per video at a chosen timestamp (different from poster middle).
// We then resize to 480/900/native-width AVIF + WebP for responsive delivery.
const items = [
  {
    file: "Arena Nationala Bucuresti.mp4",
    name: "arena-nationala-vedere-stadion",
    timestamp: "2.5",
    width: 1104
  },
  {
    file: "Arena Nationala Bucuresti -cu drona in exterior.mp4",
    name: "arena-nationala-exterior-drona",
    timestamp: "2.0",
    width: 1280
  },
  {
    file: "Arena Nationala Bucuresti -cu drona in interior.mp4",
    name: "arena-nationala-interior-drona",
    timestamp: "1.5",
    width: 1264
  },
  {
    file: "Arena Nationala -intrare.mp4",
    name: "arena-nationala-intrare-tunel",
    timestamp: "1.5",
    width: 1104
  },
  {
    file: "Arena Nationala -bancile antrenorilor.mp4",
    name: "arena-nationala-banca-antrenori",
    timestamp: "1.5",
    width: 1168
  },
  {
    file: "Arena Nationala Bucuresti -pe stadion la meciul cu Romania.mp4",
    name: "arena-nationala-meci-romania",
    timestamp: "2.0",
    width: 1232
  }
];

await mkdir(outputDir, { recursive: true });
await mkdir(tmpDir, { recursive: true });

function ffmpegExtract(input, timestamp, output) {
  return new Promise((resolve, reject) => {
    const proc = spawn("ffmpeg", [
      "-y",
      "-loglevel", "error",
      "-ss", String(timestamp),
      "-i", input,
      "-frames:v", "1",
      "-q:v", "2",
      output
    ]);
    proc.stderr.on("data", (chunk) => process.stderr.write(chunk));
    proc.on("error", reject);
    proc.on("close", (code) => (code === 0 ? resolve() : reject(new Error(`ffmpeg exited ${code}`))));
  });
}

for (const item of items) {
  const src = join(sourceDir, item.file);
  const original = join(tmpDir, `${item.name}-original.jpg`);
  console.log(`==> ${item.name}`);
  await ffmpegExtract(src, item.timestamp, original);

  const widths = [...new Set([480, 900, item.width].filter((width) => width <= item.width))];
  for (const width of widths) {
    const resized = sharp(original).rotate().resize({ width, withoutEnlargement: true });
    await resized.clone().webp({ quality: 80, effort: 5 }).toFile(join(outputDir, `${item.name}-${width}.webp`));
    await resized.clone().avif({ quality: 54, effort: 6 }).toFile(join(outputDir, `${item.name}-${width}.avif`));
  }
  const full = sharp(original).rotate().resize({ width: item.width, withoutEnlargement: true });
  await full.clone().webp({ quality: 80, effort: 5 }).toFile(join(outputDir, `${item.name}.webp`));
  await full.clone().avif({ quality: 54, effort: 6 }).toFile(join(outputDir, `${item.name}.avif`));
}

console.log("Arena photos optimized.");
