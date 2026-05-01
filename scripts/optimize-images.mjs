import sharp from "sharp";
import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const sourceDir = join(root, "public", "images", "originals");
const airportSourceDir = join(root, "assets-source", "gara-aeroport");
const outputDir = join(root, "public", "images");

const images = [
  { source: "serene-studio-bed-original.jpg", name: "pat-matrimonial-serene-studio", width: 1600 },
  { source: "serene-studio-kitchen-original.jpg", name: "chicineta-serene-studio", width: 1400 },
  { source: "serene-studio-bathroom-original.jpg", name: "baie-serene-studio", width: 1400 },
  { source: "serene-studio-terrace-original.jpg", name: "terasa-serene-studio", width: 1400 },
  { source: "serene-studio-interior-original.jpg", name: "interior-serene-studio", width: 1600 },
  { source: "serene-studio-room-wide-original.jpg", name: "studio-privat-serene-studio", width: 1600 },
  { source: "serene-studio-exterior-original.jpg", name: "intrare-serene-studio", width: 1400 },
  {
    sourceDir: airportSourceDir,
    source: "20210415_173847.jpg",
    name: "gara-aeroport-otopeni-peron",
    width: 1200
  },
  {
    sourceDir: airportSourceDir,
    source: "20210415_173857.jpg",
    name: "gara-aeroport-otopeni-copertina",
    width: 1200
  },
  {
    sourceDir: airportSourceDir,
    source: "20210415_180556.jpg",
    name: "tren-aeroport-gara-de-nord-interior",
    width: 1200
  }
];

await mkdir(outputDir, { recursive: true });

function baseImage(input, item) {
  let pipeline = sharp(input).rotate();
  if (item.extract) pipeline = pipeline.extract(item.extract);
  return pipeline;
}

function resizeOptions(item, width) {
  if (!item.height) return { width, withoutEnlargement: true };
  return {
    width,
    height: Math.round((item.height / item.width) * width),
    fit: "cover",
    withoutEnlargement: true
  };
}

for (const item of images) {
  const input = join(item.sourceDir ?? sourceDir, item.source);
  if (!existsSync(input)) {
    console.warn(`Skipping missing source image: ${input}`);
    continue;
  }
  const widths = [...new Set([480, 900, item.width].filter((width) => width <= item.width))];
  for (const width of widths) {
    const resized = baseImage(input, item).resize(resizeOptions(item, width));
    await resized.clone().webp({ quality: 80, effort: 5 }).toFile(join(outputDir, `${item.name}-${width}.webp`));
    await resized.clone().avif({ quality: 54, effort: 6 }).toFile(join(outputDir, `${item.name}-${width}.avif`));
  }

  const full = baseImage(input, item).resize(resizeOptions(item, item.width));
  await full.clone().webp({ quality: 80, effort: 5 }).toFile(join(outputDir, `${item.name}.webp`));
  await full.clone().avif({ quality: 54, effort: 6 }).toFile(join(outputDir, `${item.name}.avif`));
}

await sharp(join(sourceDir, "serene-studio-bed-original.jpg"))
  .rotate()
  .resize(1200, 630, { fit: "cover", position: "center" })
  .webp({ quality: 84 })
  .toFile(join(outputDir, "og-serene-studio.webp"));

console.log("Images optimized.");
