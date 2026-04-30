---
name: serene-studio-brand
description: Brand constants, content rules, color palette, and conversion logic specific to the Serene Studio Bucuresti website. Use whenever editing any frontend file, page template, layout, content string, JSON-LD, sitemap, or copy in this repo. Enforces the Romanian-first voice, the Beds24 booking-only conversion path, the cream + sage + terracotta palette, and the residential-quiet positioning. Combine with the global skills `modern-colors`, `liquid-glass-watermorphism`, `video-editing`, and `seo-aeo-geo-mobile` for technique; this skill provides the brand-specific values those techniques apply to.
---

# Serene Studio — brand & content contract

This skill is the durable contract for Serene Studio Bucuresti. It complements the global technique skills (`modern-colors`, `liquid-glass-watermorphism`, `video-editing`, `seo-aeo-geo-mobile`) with project-specific values they need to do their job here.

Read this **plus** the relevant global skill before editing.

## Brand constants — never invent these

| | |
|---|---|
| Name (canonical) | `Serene Studio Bucuresti` |
| Address | `Strada Alexandru Zagoritz 12, Sector 2, Bucuresti, 021998` |
| Phone | `+40 733 737 363` (emergencies + post-booking only — never primary CTA) |
| Email | `serenestudio.ro@gmail.com` |
| Check-in | `14:00` (self check-in with code) |
| Check-out | `11:00` |
| Beds24 booking URL | `https://beds24.com/booking.php?propid=249069&referer=BookingLink` |
| Children | not allowed |
| Pets | not allowed |
| Smoking | indoors: no; outdoor courtyard: yes |
| Surface area | ~35 m², 1 bedroom, 1 bath, kitchenette, terrace, parking |

If you find any of these values hardcoded in two places, that is a bug — there must be a single source of truth (typically `src/data/business.json` or similar).

## Voice and language

- Default language: **Romanian (ro-RO)**. Diacritics in display copy when feasible; ASCII fallback in identifiers / URLs / file names.
- Tone: calm, residential, premium-but-modest. Not luxury. Not corporate.
- Positioning words: `linistit`, `rezidential`, `self check-in`, `confirmat instant`, `aproape de Piata Muncii`.
- Avoid: `luxury`, `5-star`, `pasiune`, `experienta de neuitat`, generic stay-marketing fluff.

## Conversion logic (overrides defaults from `seo-aeo-geo-mobile`)

- Primary CTA on every page: `Rezerva acum` → Beds24 URL.
- Sticky bottom bar on mobile: `Rezerva acum`, glass surface, ≤ 56 px tall.
- **Never** use phone-as-CTA (`Suna pentru disponibilitate`). Phone is a footer/contact-page link only.
- **Never** push to Booking.com / Airbnb / Expedia from the site — direct booking is the entire point.
- FAQ must answer the questions that would otherwise generate calls (parking, pets, kids, check-in time, address, code delivery). Every answer in atomic `<h2>` + `<p>` form per `seo-aeo-geo-mobile`.

CTA wording approved:
- `Rezerva acum`
- `Verifica disponibilitatea`
- `Vezi pretul pentru datele tale`

CTA wording forbidden:
- `Contacteaza-ne pentru rezervare`
- `Suna pentru disponibilitate`
- `Pret la cerere`
- `Trimite-ne un mesaj`

### Phone policy — canonical phrasing

When copy needs to explain why the phone is not the booking channel, use these exact phrasings (never soft variants like "nu este nevoie sa suni" — they imply you *could* call to book):

RO:
- `Nu facem rezervari telefonic`
- `Telefonul este doar pentru urgente`
- `Toate informatiile pentru sejur le gasesti in guidebook, accesibil oricand prin acelasi link folosit la check-in-ul online`

EN:
- `We do not take bookings by phone`
- `The phone is for emergencies only`
- `All stay information is in the guidebook, accessible any time through the same link used for online check-in`

Any FAQ entry about calling, any contact-page row labeling the phone, and any final-CTA explanatory paragraph must use these phrasings. Marketing card snippets like `fara apeluri` / `no calls` are still allowed as positive flow claims.

## Color palette (overrides generic from `modern-colors`)

```css
:root {
  /* Neutrals — warm cream, never pure white */
  --bg:        oklch(0.985 0.005 80);
  --surface:   oklch(0.97  0.008 75);
  --surface-2: oklch(0.94  0.012 75);
  --border:    oklch(0.90  0.012 75);
  --text:      oklch(0.22  0.015 60);
  --text-mute: oklch(0.50  0.015 60);

  /* Brand — sage / olive (residential, "tei", calm) */
  --brand:      oklch(0.62 0.06 140);
  --brand-ink:  oklch(0.32 0.05 140);
  --brand-soft: oklch(0.94 0.025 140);

  /* Accent — warm terracotta. ONE job: Rezerva acum */
  --accent:     oklch(0.68 0.14 50);
  --accent-ink: oklch(0.38 0.11 45);

  /* States */
  --success: oklch(0.65 0.13 155);
  --warn:    oklch(0.78 0.14 75);
  --danger:  oklch(0.58 0.18 25);
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg:        oklch(0.18 0.012 80);
    --surface:   oklch(0.22 0.012 80);
    --border:   oklch(0.30 0.014 80);
    --text:      oklch(0.95 0.008 80);
    --text-mute: oklch(0.72 0.012 80);
    --brand:     oklch(0.74 0.07 140);
    --brand-soft:oklch(0.28 0.04 140);
    --accent:    oklch(0.74 0.15 55);
  }
}
```

Why these choices:
- **Cream** instead of pure white — matches `linistit, rezidential, tei`. Pure white reads clinical.
- **Sage** brand — differentiates from generic hospitality blue and the Booking.com aesthetic.
- **Terracotta** accent — warm, unmissable on cream, AAA contrast on the booking button. Reserved for `Rezerva acum` only.

## UI surfaces (when to use which from `liquid-glass-watermorphism`)

- Sticky mobile `Rezerva acum` bar → liquid glass.
- Top nav over hero photo → liquid glass.
- Hero decorative blob behind the headline → watermorphism (sage/olive tonal gradient, not blue).
- Pricing / amenity / FAQ cards → solid `--surface`. Trust beats flair on these.

## Local entities to mention (per `seo-aeo-geo-mobile`)

These are the GEO tokens for the area. Use proper names with distance + time:
- `Piata Muncii` (4 minute pe jos pana la metrou)
- `Arena Nationala`
- `Mega Mall`
- `Parcul IOR`
- `Centrul Vechi`
- `Spitalul Sf. Pantelimon`, `Spitalul Floreasca` (relevant for medical-stay guests)

## JSON-LD seed (already correct values)

```json
{
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Serene Studio Bucuresti",
  "url": "https://serenestudio.ro/",
  "telephone": "+40733737363",
  "email": "serenestudio.ro@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Strada Alexandru Zagoritz 12",
    "addressLocality": "Bucuresti",
    "addressRegion": "Sector 2",
    "postalCode": "021998",
    "addressCountry": "RO"
  },
  "checkinTime": "14:00",
  "checkoutTime": "11:00",
  "petsAllowed": false,
  "smokingAllowed": false,
  "potentialAction": {
    "@type": "ReserveAction",
    "target": "https://beds24.com/booking.php?propid=249069&referer=BookingLink"
  }
}
```

## Files & commands specific to this repo

- Stack: Astro 6 (static), Sharp, Vercel.
- Image pipeline: `npm run optimize:images` (required before commit).
- Full brief: [BRIEF_AGENT_AI_SERENE_STUDIO.md](../../../BRIEF_AGENT_AI_SERENE_STUDIO.md).
- Beds24 setup notes: [docs/BEDS24_SETUP.md](../../../docs/BEDS24_SETUP.md).