# Gemini Code Assist / Antigravity — Serene Studio styleguide

**Primary instructions: [../AGENTS.md](../AGENTS.md)** — read it before responding.

## Skills index

When the request involves the topic on the left, read the file on the right *before* generating.

Global skills (user-level, shared across all projects):

- Video editing / ffmpeg / hero loops / posters → `C:\Users\Wilhelm\.claude\skills\video-editing\SKILL.md`
- Liquid glass / glassmorphism / watermorphism → `C:\Users\Wilhelm\.claude\skills\liquid-glass-watermorphism\SKILL.md`
- Color palette / OKLCH / dark mode / gradients → `C:\Users\Wilhelm\.claude\skills\modern-colors\SKILL.md`
- SEO / AEO / GEO / mobile-first / schema.org → `C:\Users\Wilhelm\.claude\skills\seo-aeo-geo-mobile\SKILL.md`

Project skill (this repo only):

- Brand constants, palette, NAP, conversion logic → [../.claude/skills/serene-studio-brand/SKILL.md](../.claude/skills/serene-studio-brand/SKILL.md)

For design/SEO/video tasks, read the matching global skill **and** the project brand skill — global gives the technique, brand gives the values.

## Project-wide style rules

- Astro 6 static output. No SSR unless explicitly asked.
- Romanian-language copy by default.
- Mobile-first layouts. `Rezerva acum` CTA visible in the first viewport on a 360 px phone, plus sticky bottom bar.
- Use OKLCH for color tokens.
- All raster images run through `npm run optimize:images`. Prefer AVIF with WebP fallback.
- JSON-LD on every public page (`LodgingBusiness`, `FAQPage`, `BreadcrumbList` as applicable).
- WCAG AA body text minimum; AAA on the booking CTA.
- No telephone as a primary CTA. No autoplay with sound. No client-only rendering for booking-critical content.
