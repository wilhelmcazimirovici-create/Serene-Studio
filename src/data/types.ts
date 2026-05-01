import type { Locale } from "./site";

export type Table = {
  headers: string[];
  rows: string[][];
};

export type Faq = {
  q: string;
  a: string;
};

export type InfographicStep = {
  number: string;
  title: string;
  text: string;
  icon?: string;
};

export type InfographicDistance = {
  place: string;
  detail: string;
  value: string;
  mode?: "walk" | "metro" | "drive" | "train";
  lat?: number;
  lon?: number;
  url?: string;
};

export type Infographic =
  | {
      variant: "steps";
      caption?: string;
      steps: InfographicStep[];
    }
  | {
      variant: "distances";
      caption?: string;
      origin?: string;
      distances: InfographicDistance[];
    };

export type SectionVideo = {
  base: string;
  poster: string;
  posterWebp?: string;
  durationSeconds: number;
  uploadDate: string;
  name: { ro: string; en: string };
  description: { ro: string; en: string };
  contentLocation?: {
    name: string;
    address?: string;
    lat?: number;
    lon?: number;
  };
  width: number;
  height: number;
};

export type GalleryImage = {
  key: string;
  caption: { ro: string; en: string };
};

export type HowTo = {
  name: string;
  description: string;
  totalTime?: string;
  steps: { name: string; text: string }[];
};

export type PageSection = {
  title: string;
  intro?: string;
  paragraphs?: string[];
  bullets?: string[];
  cards?: { title: string; text: string; href?: string; eyebrow?: string }[];
  table?: Table;
  image?: string;
  imageCaption?: string;
  infographic?: Infographic;
  video?: SectionVideo;
  videoGallery?: SectionVideo[];
  imageGallery?: GalleryImage[];
  ctaReferer?: string;
  variant?: "reviews" | "airportTrainCta";
};

export type PageContent = {
  path: string;
  locale: Locale;
  translationPath: string;
  title: string;
  description: string;
  keyword: string;
  h1: string;
  eyebrow?: string;
  heroText: string;
  heroImage?: string;
  heroCtaReferer: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  proof?: { value: string; label: string }[];
  sections: PageSection[];
  faq?: Faq[];
  gallery?: boolean;
  maps?: boolean;
  finalCtaReferer: string;
};

export type BlogPost = {
  slug: string;
  locale: Locale;
  translationSlug?: string;
  title: string;
  description: string;
  keyword: string;
  date: string;
  intro: string;
  sections: PageSection[];
  faq: Faq[];
  ctaReferer: string;
  howTo?: HowTo;
};
