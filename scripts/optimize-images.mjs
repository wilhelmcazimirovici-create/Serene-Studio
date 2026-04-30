import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const sourceDir = join(root, "public", "images", "originals");
const outputDir = join(root, "public", "images");

const images = [
  { source: "serene-studio-bed-original.jpg", name: "pat-matrimonial-serene-studio", width: 1600 },
  { source: "serene-studio-kitchen-original.jpg", name: "chicineta-serene-studio", width: 1400 },
  { source: "serene-studio-bathroom-original.jpg", name: "baie-serene-studio", width: 1400 },
  { source: "serene-studio-terrace-original.jpg", name: "terasa-serene-studio", width: 1400 },
  { source: "serene-studio-interior-original.jpg", name: "interior-serene-studio", width: 1600 },
  { source: "serene-studio-room-wide-original.jpg", name: "studio-privat-serene-studio", width: 1600 },
  { source: "serene-studio-exterior-original.jpg", name: "intrare-serene-studio", width: 1400 }
];

await mkdir(outputDir, { recursive: true });

for (const item of images) {
  const input = join(sourceDir, item.source);
  const widths = [...new Set([480, 900, item.width].filter((width) => width <= item.width))];
  for (const width of widths) {
    const resized = sharp(input).rotate().resize({ width, withoutEnlargement: true });
    await resized.clone().webp({ quality: 80, effort: 5 }).toFile(join(outputDir, `${item.name}-${width}.webp`));
    await resized.clone().avif({ quality: 54, effort: 6 }).toFile(join(outputDir, `${item.name}-${width}.avif`));
  }

  const full = sharp(input).rotate().resize({ width: item.width, withoutEnlargement: true });
  await full.clone().webp({ quality: 80, effort: 5 }).toFile(join(outputDir, `${item.name}.webp`));
  await full.clone().avif({ quality: 54, effort: 6 }).toFile(join(outputDir, `${item.name}.avif`));
}

await sharp(join(sourceDir, "serene-studio-bed-original.jpg"))
  .rotate()
  .resize(1200, 630, { fit: "cover", position: "center" })
  .webp({ quality: 84 })
  .toFile(join(outputDir, "og-serene-studio.webp"));

console.log("Images optimized.");
