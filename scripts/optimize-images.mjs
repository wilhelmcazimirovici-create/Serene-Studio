import sharp from "sharp";
import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const sourceDir = join(root, "public", "images", "originals");
const airportSourceDir = join(root, "assets-source", "gara-aeroport");
const outputDir = join(root, "public", "images");
const blogCardWidth = 1200;
const blogCardHeight = 760;

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

const blogCards = [
  { name: "blog-card-arena-route", variant: "stadium", accent: "#d66f3f", secondary: "#6f8d65" },
  { name: "blog-card-victor-babes", variant: "hospital", accent: "#bf6b4d", secondary: "#7a9a76" },
  { name: "blog-card-monza", variant: "hospital-heart", accent: "#c86154", secondary: "#78956e" },
  { name: "blog-card-piata-muncii", variant: "metro", accent: "#cf7540", secondary: "#708f68" },
  { name: "blog-card-otopeni", variant: "airport", accent: "#c46d43", secondary: "#5f8f86" },
  { name: "blog-card-ior", variant: "park", accent: "#c87445", secondary: "#6f946a" },
  { name: "blog-card-sector-2", variant: "studio", accent: "#c86943", secondary: "#789069" },
  { name: "blog-card-mega-mall", variant: "mall", accent: "#cf7745", secondary: "#758d70" },
  { name: "blog-card-self-checkin", variant: "checkin", accent: "#c9673f", secondary: "#6f9369" },
  { name: "blog-card-kitchenette", variant: "kitchen", accent: "#c77543", secondary: "#759069" },
  { name: "blog-card-gomoiu", variant: "hospital-family", accent: "#bf7050", secondary: "#759a75" },
  { name: "blog-card-dinamo", variant: "stadium-night", accent: "#d16d45", secondary: "#667f6d" },
  { name: "blog-card-pantelimon", variant: "hospital-urgent", accent: "#c4624d", secondary: "#748f75" },
  { name: "blog-card-old-town", variant: "old-town", accent: "#c97443", secondary: "#6e8e75" },
  { name: "blog-card-top-obiective", variant: "map", accent: "#d17343", secondary: "#74946f" }
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

function blogCardMotif(item) {
  const a = item.accent;
  const s = item.secondary;
  const ink = "#332b24";
  const cream = "#fff7e8";
  const soft = "#f0dfc4";

  switch (item.variant) {
    case "airport":
      return `
        <path d="M258 494h684" stroke="${soft}" stroke-width="18" stroke-linecap="round"/>
        <path d="M330 458h396c55 0 100 34 118 82H294c6-46 15-82 36-82Z" fill="${cream}" stroke="${ink}" stroke-width="8"/>
        <path d="M402 458l54-82h174l96 82" fill="none" stroke="${ink}" stroke-width="8" stroke-linejoin="round"/>
        <path d="M426 396h182" stroke="${s}" stroke-width="12" stroke-linecap="round"/>
        <path d="M380 501h80m42 0h80m42 0h80" stroke="${s}" stroke-width="16" stroke-linecap="round"/>
        <circle cx="420" cy="550" r="22" fill="${ink}"/><circle cx="714" cy="550" r="22" fill="${ink}"/>
        <path d="M804 382c48-28 110-24 154 8" stroke="${a}" stroke-width="16" stroke-linecap="round"/>
        <path d="M825 422c30-16 71-14 102 4" stroke="${a}" stroke-width="10" stroke-linecap="round" opacity=".7"/>
      `;
    case "checkin":
      return `
        <rect x="264" y="276" width="274" height="346" rx="28" fill="${cream}" stroke="${ink}" stroke-width="8"/>
        <rect x="310" y="338" width="182" height="184" rx="20" fill="#f6ead8" stroke="${s}" stroke-width="8"/>
        <path d="M356 438l34 36 74-86" fill="none" stroke="${a}" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="650" y="258" width="220" height="364" rx="10" fill="#f7ead5" stroke="${ink}" stroke-width="8"/>
        <rect x="693" y="386" width="116" height="132" rx="16" fill="${cream}" stroke="${s}" stroke-width="8"/>
        <circle cx="752" cy="452" r="18" fill="${a}"/>
        <path d="M902 320h72v246h-72" fill="none" stroke="${ink}" stroke-width="8" stroke-linecap="round"/>
      `;
    case "hospital":
    case "hospital-heart":
    case "hospital-family":
    case "hospital-urgent":
      return `
        <rect x="256" y="294" width="330" height="268" rx="22" fill="${cream}" stroke="${ink}" stroke-width="8"/>
        <rect x="312" y="360" width="72" height="72" rx="12" fill="#f4e5cf"/>
        <rect x="452" y="360" width="72" height="72" rx="12" fill="#f4e5cf"/>
        <rect x="367" y="470" width="108" height="92" rx="14" fill="#ead8bf" stroke="${s}" stroke-width="7"/>
        <path d="M421 226v118M362 285h118" stroke="${a}" stroke-width="28" stroke-linecap="round"/>
        <rect x="674" y="365" width="228" height="136" rx="40" fill="#fff4df" stroke="${ink}" stroke-width="8"/>
        <path d="M710 431h158" stroke="${s}" stroke-width="22" stroke-linecap="round"/>
        ${
          item.variant === "hospital-heart"
            ? `<path d="M706 306c30-48 92-21 92 30 0-51 63-78 93-30 34 55-56 116-93 146-37-30-127-91-92-146Z" fill="${a}" opacity=".9"/>`
            : item.variant === "hospital-urgent"
              ? `<path d="M742 284h92l-36 76h72l-122 126 35-96h-68l27-106Z" fill="${a}"/>`
              : item.variant === "hospital-family"
                ? `<circle cx="744" cy="304" r="34" fill="${a}"/><circle cx="833" cy="322" r="26" fill="${s}"/><path d="M704 405c28-54 104-54 132 0" fill="none" stroke="${a}" stroke-width="18" stroke-linecap="round"/><path d="M804 415c20-34 74-34 94 0" fill="none" stroke="${s}" stroke-width="14" stroke-linecap="round"/>`
                : `<path d="M708 318c58-50 147-50 205 0" fill="none" stroke="${a}" stroke-width="16" stroke-linecap="round"/><path d="M742 356h137" stroke="${s}" stroke-width="14" stroke-linecap="round"/>`
        }
      `;
    case "kitchen":
      return `
        <rect x="258" y="394" width="666" height="154" rx="18" fill="${cream}" stroke="${ink}" stroke-width="8"/>
        <rect x="304" y="294" width="194" height="164" rx="20" fill="#f6ead8" stroke="${ink}" stroke-width="8"/>
        <rect x="544" y="312" width="186" height="146" rx="18" fill="#fff7e8" stroke="${s}" stroke-width="8"/>
        <rect x="576" y="350" width="78" height="48" rx="12" fill="#ead8bf"/>
        <path d="M774 345c58 0 96 42 84 92-10 42-48 74-93 74h-44c-18 0-32-14-32-32V345h85Z" fill="#fff4df" stroke="${ink}" stroke-width="8"/>
        <path d="M860 382h36c28 0 41 34 20 54-14 14-34 18-58 14" fill="none" stroke="${ink}" stroke-width="8"/>
        <path d="M338 346h104M338 390h104" stroke="${s}" stroke-width="10" stroke-linecap="round"/>
        <path d="M318 548h584" stroke="${a}" stroke-width="16" stroke-linecap="round"/>
      `;
    case "mall":
      return `
        <rect x="266" y="274" width="656" height="292" rx="26" fill="${cream}" stroke="${ink}" stroke-width="8"/>
        <path d="M266 354h656" stroke="${s}" stroke-width="16"/>
        <path d="M348 274v292M514 274v292M680 274v292M846 274v292" stroke="#ead8bf" stroke-width="8"/>
        <path d="M384 478h110l-14 88H398l-14-88Z" fill="${a}" opacity=".9"/>
        <path d="M410 478c4-48 58-48 62 0" fill="none" stroke="${ink}" stroke-width="8"/>
        <path d="M684 468h118l-16 98H700l-16-98Z" fill="${s}"/>
        <path d="M714 468c5-54 60-54 68 0" fill="none" stroke="${ink}" stroke-width="8"/>
      `;
    case "map":
      return `
        <path d="M288 520c112-126 228-40 306-152 74-106 196-104 318-36" fill="none" stroke="${s}" stroke-width="24" stroke-linecap="round" stroke-dasharray="2 42"/>
        <path d="M382 300c0-54 44-98 98-98s98 44 98 98c0 77-98 168-98 168s-98-91-98-168Z" fill="${a}" stroke="${ink}" stroke-width="8"/>
        <circle cx="480" cy="300" r="34" fill="${cream}"/>
        <path d="M712 238h150v156H712z" fill="${cream}" stroke="${ink}" stroke-width="8"/>
        <path d="M746 280h82M746 326h82" stroke="${s}" stroke-width="12" stroke-linecap="round"/>
        <path d="M692 512h218" stroke="${ink}" stroke-width="8" stroke-linecap="round"/>
        <circle cx="736" cy="494" r="38" fill="${s}"/><circle cx="862" cy="494" r="38" fill="${a}"/>
      `;
    case "metro":
      return `
        <rect x="292" y="320" width="616" height="196" rx="46" fill="${cream}" stroke="${ink}" stroke-width="8"/>
        <path d="M382 320v196M818 320v196" stroke="${s}" stroke-width="10"/>
        <path d="M438 382h132M630 382h132" stroke="${s}" stroke-width="16" stroke-linecap="round"/>
        <circle cx="412" cy="516" r="24" fill="${ink}"/><circle cx="788" cy="516" r="24" fill="${ink}"/>
        <path d="M300 574h600" stroke="${a}" stroke-width="18" stroke-linecap="round"/>
        <path d="M624 214c0-42 34-76 76-76s76 34 76 76-34 76-76 76-76-34-76-76Z" fill="${a}" opacity=".92"/>
        <path d="M676 238l26-58 26 58" fill="none" stroke="${cream}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
      `;
    case "old-town":
      return `
        <path d="M292 542h624" stroke="${ink}" stroke-width="8" stroke-linecap="round"/>
        <rect x="332" y="314" width="156" height="228" rx="14" fill="${cream}" stroke="${ink}" stroke-width="8"/>
        <rect x="522" y="250" width="188" height="292" rx="16" fill="#fff4df" stroke="${ink}" stroke-width="8"/>
        <rect x="746" y="348" width="136" height="194" rx="14" fill="${cream}" stroke="${ink}" stroke-width="8"/>
        <path d="M370 542V438c0-32 24-58 54-58s54 26 54 58v104" fill="#ead8bf"/>
        <path d="M566 542V414c0-36 28-66 62-66s62 30 62 66v128" fill="#ead8bf"/>
        <path d="M344 286h132M546 222h142M760 322h108" stroke="${a}" stroke-width="16" stroke-linecap="round"/>
        <path d="M300 608c126-66 326-66 610 0" fill="none" stroke="${s}" stroke-width="18" stroke-linecap="round"/>
      `;
    case "park":
      return `
        <path d="M262 530c132-72 276-74 424-8 90 40 166 36 252-18v102H262v-76Z" fill="#d9e7d0"/>
        <path d="M276 478c130-58 252-55 374 8 94 48 184 48 284-10" fill="none" stroke="${s}" stroke-width="24" stroke-linecap="round"/>
        <ellipse cx="654" cy="526" rx="222" ry="70" fill="#c7ddd7" opacity=".9"/>
        <path d="M364 382c0-54 44-98 98-98s98 44 98 98c0 77-98 156-98 156s-98-79-98-156Z" fill="${a}" stroke="${ink}" stroke-width="8"/>
        <circle cx="462" cy="382" r="32" fill="${cream}"/>
        <path d="M792 260v224" stroke="${ink}" stroke-width="12" stroke-linecap="round"/>
        <circle cx="792" cy="264" r="70" fill="${s}"/><circle cx="856" cy="318" r="58" fill="#8fb47c"/><circle cx="730" cy="328" r="56" fill="#9dbd8c"/>
      `;
    case "stadium-night":
      return `
        <path d="M276 456c58-112 190-176 326-176s268 64 326 176v116H276V456Z" fill="${cream}" stroke="${ink}" stroke-width="8"/>
        <ellipse cx="602" cy="492" rx="250" ry="82" fill="#d7e6cd" stroke="${s}" stroke-width="12"/>
        <path d="M408 456c42-34 112-54 194-54s152 20 194 54" fill="none" stroke="${a}" stroke-width="20" stroke-linecap="round"/>
        <path d="M330 286l-70-88M876 286l70-88" stroke="${ink}" stroke-width="10" stroke-linecap="round"/>
        <circle cx="258" cy="190" r="30" fill="${a}"/><circle cx="948" cy="190" r="30" fill="${a}"/>
        <path d="M356 548h492" stroke="${ink}" stroke-width="8" stroke-linecap="round"/>
      `;
    case "stadium":
      return `
        <ellipse cx="604" cy="428" rx="330" ry="188" fill="${cream}" stroke="${ink}" stroke-width="8"/>
        <ellipse cx="604" cy="438" rx="236" ry="112" fill="#dce8d0" stroke="${s}" stroke-width="14"/>
        <path d="M418 438h372M604 326v224" stroke="#f8f1e4" stroke-width="8"/>
        <path d="M346 426c56-98 154-148 258-148s202 50 258 148" fill="none" stroke="${a}" stroke-width="20" stroke-linecap="round"/>
        <path d="M320 582c142 42 430 42 568 0" fill="none" stroke="${ink}" stroke-width="8" stroke-linecap="round" opacity=".6"/>
      `;
    case "studio":
    default:
      return `
        <rect x="286" y="300" width="308" height="220" rx="24" fill="${cream}" stroke="${ink}" stroke-width="8"/>
        <path d="M330 460h226v60H330z" fill="#ead8bf"/>
        <path d="M344 390h128c38 0 70 31 70 70H344v-70Z" fill="#fff4df" stroke="${s}" stroke-width="8"/>
        <rect x="656" y="260" width="210" height="282" rx="18" fill="#fff4df" stroke="${ink}" stroke-width="8"/>
        <path d="M704 324h114M704 380h114M704 436h114" stroke="${s}" stroke-width="12" stroke-linecap="round"/>
        <path d="M884 476c44-52 44-120 0-172" fill="none" stroke="${a}" stroke-width="18" stroke-linecap="round"/>
        <path d="M260 584h680" stroke="${ink}" stroke-width="8" stroke-linecap="round" opacity=".45"/>
      `;
  }
}

function blogCardSvg(item) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${blogCardWidth}" height="${blogCardHeight}" viewBox="0 0 ${blogCardWidth} ${blogCardHeight}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#fff9ed"/>
          <stop offset=".58" stop-color="#f2ead8"/>
          <stop offset="1" stop-color="#dfe9d8"/>
        </linearGradient>
        <radialGradient id="warm" cx=".2" cy=".12" r=".7">
          <stop offset="0" stop-color="${item.accent}" stop-opacity=".32"/>
          <stop offset=".72" stop-color="${item.accent}" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="sage" cx=".86" cy=".82" r=".62">
          <stop offset="0" stop-color="${item.secondary}" stop-opacity=".34"/>
          <stop offset=".72" stop-color="${item.secondary}" stop-opacity="0"/>
        </radialGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="28" stdDeviation="26" flood-color="#4d3927" flood-opacity=".18"/>
        </filter>
      </defs>
      <rect width="1200" height="760" fill="url(#bg)"/>
      <rect width="1200" height="760" fill="url(#warm)"/>
      <rect width="1200" height="760" fill="url(#sage)"/>
      <path d="M90 168c202-88 360-104 536-44 144 49 280 48 456-50" fill="none" stroke="#fff6e8" stroke-width="34" stroke-linecap="round" opacity=".58"/>
      <path d="M118 620c198-68 346-60 502 18 156 78 300 66 474-42" fill="none" stroke="#f8ead3" stroke-width="28" stroke-linecap="round" opacity=".62"/>
      <circle cx="1026" cy="154" r="72" fill="#fff4dd" opacity=".86"/>
      <g filter="url(#shadow)">
        ${blogCardMotif(item)}
      </g>
    </svg>
  `;
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

for (const item of blogCards) {
  const input = Buffer.from(blogCardSvg(item));
  const widths = [480, 900, blogCardWidth];
  for (const width of widths) {
    const height = Math.round((blogCardHeight / blogCardWidth) * width);
    const resized = sharp(input).resize(width, height, { fit: "cover" });
    await resized.clone().webp({ quality: 82, effort: 5 }).toFile(join(outputDir, `${item.name}-${width}.webp`));
    await resized.clone().avif({ quality: 56, effort: 6 }).toFile(join(outputDir, `${item.name}-${width}.avif`));
  }

  const full = sharp(input).resize(blogCardWidth, blogCardHeight, { fit: "cover" });
  await full.clone().webp({ quality: 82, effort: 5 }).toFile(join(outputDir, `${item.name}.webp`));
  await full.clone().avif({ quality: 56, effort: 6 }).toFile(join(outputDir, `${item.name}.avif`));
}

await sharp(join(sourceDir, "serene-studio-bed-original.jpg"))
  .rotate()
  .resize(1200, 630, { fit: "cover", position: "center" })
  .webp({ quality: 84 })
  .toFile(join(outputDir, "og-serene-studio.webp"));

console.log("Images optimized.");
