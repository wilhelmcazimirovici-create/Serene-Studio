import type { Locale } from "./site";
import type { BlogPost } from "./types";

export const BLOG_CARD_IMAGE_WIDTH = 1200;
export const BLOG_CARD_IMAGE_HEIGHT = 760;

export type BlogCardVisual = {
  base: string;
  label: Record<Locale, string>;
  alt: Record<Locale, string>;
};

type BlogPostForCard = Pick<BlogPost, "slug" | "translationSlug">;

const visualsByCanonicalSlug: Record<string, BlogCardVisual> = {
  "traseu-pe-jos-serene-studio-arena-nationala": {
    base: "blog-card-arena-route",
    label: { ro: "Arena Nationala", en: "National Arena" },
    alt: {
      ro: "Ilustratie pentru traseul pe jos de la Serene Studio la Arena Nationala",
      en: "Illustration for the walking route from Serene Studio to the National Arena"
    }
  },
  "cazare-langa-spitalul-victor-babes-bucuresti": {
    base: "blog-card-victor-babes",
    label: { ro: "Ghid medical", en: "Medical guide" },
    alt: {
      ro: "Ilustratie cu spital si studio privat pentru cazare langa Spitalul Victor Babes",
      en: "Illustration with a hospital and private studio for accommodation near Victor Babes Hospital"
    }
  },
  "cazare-langa-spitalul-monza-bucuresti": {
    base: "blog-card-monza",
    label: { ro: "Spitalul Monza", en: "Monza Hospital" },
    alt: {
      ro: "Ilustratie cu simbol medical si pat pentru cazare langa Spitalul Monza",
      en: "Illustration with a medical symbol and bed for accommodation near Monza Hospital"
    }
  },
  "cazare-piata-muncii-bucuresti": {
    base: "blog-card-piata-muncii",
    label: { ro: "Piata Muncii", en: "Piata Muncii" },
    alt: {
      ro: "Ilustratie cu metrou si repere urbane pentru cazare la Piata Muncii",
      en: "Illustration with metro and city landmarks for accommodation in Piata Muncii"
    }
  },
  "cum-ajungi-de-la-otopeni-la-piata-muncii": {
    base: "blog-card-otopeni",
    label: { ro: "Aeroport Otopeni", en: "Otopeni Airport" },
    alt: {
      ro: "Ilustratie cu trenul de aeroport catre Serene Studio si Piata Muncii",
      en: "Illustration of the airport train toward Serene Studio and Piata Muncii"
    }
  },
  "cazare-langa-parcul-ior-bucuresti": {
    base: "blog-card-ior",
    label: { ro: "Parcul IOR", en: "IOR Park" },
    alt: {
      ro: "Ilustratie cu parc, lac si traseu urban pentru cazare langa Parcul IOR",
      en: "Illustration with park, lake and city route for accommodation near IOR Park"
    }
  },
  "cazare-sector-2-bucuresti-studio-privat": {
    base: "blog-card-sector-2",
    label: { ro: "Sector 2", en: "Sector 2" },
    alt: {
      ro: "Ilustratie cu studio privat si zona rezidentiala in Sector 2 Bucuresti",
      en: "Illustration with a private studio and residential area in Bucharest Sector 2"
    }
  },
  "cazare-langa-mega-mall-bucuresti": {
    base: "blog-card-mega-mall",
    label: { ro: "Mega Mall", en: "Mega Mall" },
    alt: {
      ro: "Ilustratie cu mall, cumparaturi si cazare aproape de Piata Muncii",
      en: "Illustration with mall, shopping and accommodation near Piata Muncii"
    }
  },
  "self-check-in-bucuresti-cazare-studio-privat": {
    base: "blog-card-self-checkin",
    label: { ro: "Self check-in", en: "Self check-in" },
    alt: {
      ro: "Ilustratie cu telefon, cod de acces si cutie de chei pentru self check-in",
      en: "Illustration with phone, access code and key box for self check-in"
    }
  },
  "cazare-cu-chicineta-bucuresti-piata-muncii": {
    base: "blog-card-kitchenette",
    label: { ro: "Chicineta", en: "Kitchenette" },
    alt: {
      ro: "Ilustratie cu chicineta, cafea si facilitati pentru sejur scurt",
      en: "Illustration with kitchenette, coffee and short-stay amenities"
    }
  },
  "cazare-langa-spitalul-copii-gomoiu-bucuresti": {
    base: "blog-card-gomoiu",
    label: { ro: "Spitalul Gomoiu", en: "Gomoiu Hospital" },
    alt: {
      ro: "Ilustratie pentru cazare langa Spitalul de Copii Dr. Victor Gomoiu",
      en: "Illustration for accommodation near Dr. Victor Gomoiu Children's Hospital"
    }
  },
  "cazare-langa-stadionul-dinamo-bucuresti": {
    base: "blog-card-dinamo",
    label: { ro: "Stadion", en: "Stadium" },
    alt: {
      ro: "Ilustratie cu stadion si nocturna pentru cazare langa Stadionul Dinamo",
      en: "Illustration with a stadium and floodlights for accommodation near Dinamo Stadium"
    }
  },
  "cazare-langa-spitalul-sf-pantelimon-bucuresti": {
    base: "blog-card-pantelimon",
    label: { ro: "Sf. Pantelimon", en: "Sf. Pantelimon" },
    alt: {
      ro: "Ilustratie cu spital de urgenta si studio privat pentru apartinatori",
      en: "Illustration with an emergency hospital and private studio for relatives"
    }
  },
  "cum-ajungi-de-la-serene-studio-la-centrul-vechi-bucuresti": {
    base: "blog-card-old-town",
    label: { ro: "Centrul Vechi", en: "Old Town" },
    alt: {
      ro: "Ilustratie cu metrou si cladiri vechi pentru traseul spre Centrul Vechi",
      en: "Illustration with metro and old buildings for the route to Bucharest Old Town"
    }
  },
  "obiective-langa-serene-studio-bucuresti-3-5-km": {
    base: "blog-card-top-obiective",
    label: { ro: "Ghid de zona", en: "Area guide" },
    alt: {
      ro: "Ilustratie cu harta, repere si obiective langa Serene Studio Bucuresti",
      en: "Illustration with map, landmarks and places near Serene Studio Bucharest"
    }
  }
};

const canonicalSlugByAlias: Record<string, string> = {
  "walking-route-serene-studio-national-arena": "traseu-pe-jos-serene-studio-arena-nationala",
  "accommodation-near-victor-babes-hospital-bucharest": "cazare-langa-spitalul-victor-babes-bucuresti",
  "accommodation-near-monza-hospital-bucharest": "cazare-langa-spitalul-monza-bucuresti",
  "accommodation-piata-muncii-bucharest": "cazare-piata-muncii-bucuresti",
  "how-to-get-from-otopeni-to-piata-muncii": "cum-ajungi-de-la-otopeni-la-piata-muncii",
  "accommodation-near-ior-park-bucharest": "cazare-langa-parcul-ior-bucuresti",
  "sector-2-bucharest-private-studio-accommodation": "cazare-sector-2-bucuresti-studio-privat",
  "accommodation-near-mega-mall-bucharest": "cazare-langa-mega-mall-bucuresti",
  "self-check-in-bucharest-private-studio": "self-check-in-bucuresti-cazare-studio-privat",
  "accommodation-with-kitchenette-bucharest-piata-muncii": "cazare-cu-chicineta-bucuresti-piata-muncii",
  "accommodation-near-gomoiu-childrens-hospital-bucharest": "cazare-langa-spitalul-copii-gomoiu-bucuresti",
  "accommodation-near-dinamo-stadium-bucharest": "cazare-langa-stadionul-dinamo-bucuresti",
  "accommodation-near-sf-pantelimon-hospital-bucharest": "cazare-langa-spitalul-sf-pantelimon-bucuresti",
  "how-to-get-from-serene-studio-to-old-town-bucharest": "cum-ajungi-de-la-serene-studio-la-centrul-vechi-bucuresti",
  "things-to-do-near-serene-studio-bucharest-3-5-km": "obiective-langa-serene-studio-bucuresti-3-5-km"
};

const fallbackSlug = "cazare-sector-2-bucuresti-studio-privat";

function canonicalSlug(slug: string) {
  return canonicalSlugByAlias[slug] ?? slug;
}

function slugFromHref(href: string) {
  const cleanPath = href.split("#")[0].split("?")[0].replace(/\/$/, "");
  return cleanPath.split("/").filter(Boolean).at(-1) ?? "";
}

export function getBlogCardVisual(post: BlogPostForCard | string) {
  const slug = typeof post === "string" ? post : post.slug;
  const translationSlug = typeof post === "string" ? undefined : post.translationSlug;
  const canonical = canonicalSlug(slug);
  const translationCanonical = translationSlug ? canonicalSlug(translationSlug) : undefined;

  return (
    visualsByCanonicalSlug[canonical] ??
    (translationCanonical ? visualsByCanonicalSlug[translationCanonical] : undefined) ??
    visualsByCanonicalSlug[fallbackSlug]
  );
}

export function getBlogCardVisualByHref(href?: string) {
  if (!href) return null;
  const path = href.split("#")[0].split("?")[0];
  if (!path.startsWith("/blog/") && !path.startsWith("/en/blog/")) return null;
  const slug = slugFromHref(path);
  return slug ? getBlogCardVisual(slug) : null;
}
