# GitHub Copilot — Serene Studio

**Read [../AGENTS.md](../AGENTS.md) for the full project rules and skill index.**

## Skill files to read on demand

Global skills (user-level, shared across all projects):

- Video / ffmpeg / hero loops → `C:\Users\Wilhelm\.claude\skills\video-editing\SKILL.md`
- Liquid glass / glassmorphism / watermorphism → `C:\Users\Wilhelm\.claude\skills\liquid-glass-watermorphism\SKILL.md`
- Colors / palette / OKLCH / dark mode → `C:\Users\Wilhelm\.claude\skills\modern-colors\SKILL.md`
- SEO / AEO / GEO / mobile-first / schema.org → `C:\Users\Wilhelm\.claude\skills\seo-aeo-geo-mobile\SKILL.md`

Project skill (this repo only):

- Brand constants, palette, NAP, conversion logic → [../.claude/skills/serene-studio-brand/SKILL.md](../.claude/skills/serene-studio-brand/SKILL.md)

For design/SEO/video tasks, read both the matching global skill **and** the project brand skill.

## Quick reminders that override Copilot defaults

- Romanian copy unless asked otherwise.
- Mobile-first; `Rezerva acum` CTA always above the fold on a 360 px viewport.
- Static Astro output — no SSR or API routes unless explicitly requested.
- Never use telephone as a primary CTA.
- Never autoplay video with sound; always include `muted`, `playsinline`, `poster`.
