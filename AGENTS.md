# AGENTS.md

Cross-tool instructions for any AI agent working in this repository — Claude Code, ChatGPT / OpenAI Codex, Gemini / Google Antigravity, Cursor, GitHub Copilot, Windsurf, Cline, Aider, or a human pasting context into a chat UI.

## Project

**Serene Studio Bucuresti** — single-unit short-stay rental near Piata Muncii (Sector 2). The website's job is to convert visitors into direct bookings via Beds24 and to answer routine questions on-site so the owner doesn't get phone calls.

- Stack: **Astro 6** (static output), Sharp for image optimization, Vercel hosting.
- Default content language: **Romanian (ro-RO)**. Multilingual-ready but not yet active.
- Full project brief: [BRIEF_AGENT_AI_SERENE_STUDIO.md](BRIEF_AGENT_AI_SERENE_STUDIO.md). Read it once before substantive work.
- Beds24 setup notes: [docs/BEDS24_SETUP.md](docs/BEDS24_SETUP.md).

## How to work here

- Output is **static** (`astro build`). No server-side runtime unless explicitly requested.
- **Mobile-first.** `Rezerva acum` CTA must be visible in the first viewport on a 360 px-wide phone. Sticky bottom bar with the same CTA on mobile.
- Romanian copy unless the task says otherwise.
- All images go through `npm run optimize:images` before commit. Never commit raw originals.
- Single source of truth for NAP (name / address / phone). Never duplicate values across files.
- Don't add telephone as a primary CTA. The site's purpose is to *replace* phone calls with online booking and FAQ answers.

## Skills — read the relevant file before generating

This project uses a **two-layer skill system**:

### Global skills (technique — usable across all projects)

These live at user level (`C:\Users\Wilhelm\.claude\skills\`) and are the canonical source. Claude Code picks them up automatically. Other tools should read the absolute paths below.

| When the task involves… | Read this file |
|---|---|
| Video — editing, compressing, ffmpeg, hero loops, posters, mp4/webm | `C:\Users\Wilhelm\.claude\skills\video-editing\SKILL.md` |
| UI surfaces — liquid glass, glassmorphism, watermorphism, frosted panels | `C:\Users\Wilhelm\.claude\skills\liquid-glass-watermorphism\SKILL.md` |
| Colors — palette, OKLCH tokens, dark mode, gradients, contrast audits | `C:\Users\Wilhelm\.claude\skills\modern-colors\SKILL.md` |
| Site logic — SEO, AEO, GEO, mobile-first, schema.org, Core Web Vitals | `C:\Users\Wilhelm\.claude\skills\seo-aeo-geo-mobile\SKILL.md` |

### Project skill (brand specifics — only this repo)

| When working on this project | Read |
|---|---|
| Brand constants, palette, voice, conversion logic, Beds24 URL, NAP | [.claude/skills/serene-studio-brand/SKILL.md](.claude/skills/serene-studio-brand/SKILL.md) |

**Rule:** for design/SEO/video tasks, read the matching global skill **plus** `serene-studio-brand` — global gives the technique, brand gives the values.

## Hard rules (apply to every change)

1. **Conversion comes first.** Don't push the booking CTA below the fold or behind interactions.
2. **No phone-as-CTA.** Replace `Suna pentru disponibilitate` with `Rezerva acum` linking to Beds24.
3. **No autoplay with sound.** Hero video is muted, looped, `playsinline`, with a poster.
4. **No client-only rendering for booking-relevant content.** Prices, hours, address, FAQ must be in the static HTML.
5. **Romanian-language UI** by default. English only on explicit request or `hreflang`-paired pages.
6. **Performance budget**: mobile LCP < 2.0 s, INP < 200 ms, CLS < 0.05, home page transfer ≤ 700 KB before lazy content.
7. **Accessibility**: WCAG AA minimum on body text, AAA on the booking CTA contrast.

## Repository commands

```bash
npm run dev               # local dev (Astro)
npm run build             # production build
npm run preview           # preview production build
npm run optimize:images   # required before committing media
```

## For agents without filesystem access

If you're a chat UI without filesystem access (browser ChatGPT / Gemini / Claude.ai), ask the user to paste:
1. This file.
2. The relevant global `SKILL.md` from `C:\Users\Wilhelm\.claude\skills\<topic>\`.
3. The project skill at `.claude/skills/serene-studio-brand/SKILL.md`.
