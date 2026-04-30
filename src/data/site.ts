export type Locale = "ro" | "en";

export const SITE_URL = "https://www.serenestudio.ro";

export const property = {
  name: "Serene Studio",
  fullName: "Serene Studio Bucuresti",
  phone: "+40 733 737 363",
  phoneHref: "tel:+40733737363",
  email: "contact@serenestudio.ro",
  address: "Strada Alexandru Zagoritz 12, Sector 2, Bucuresti 021998",
  streetAddress: "Strada Alexandru Zagoritz 12",
  locality: "Bucuresti",
  region: "Bucuresti",
  postalCode: "021998",
  country: "RO",
  latitude: 44.4338629,
  longitude: 26.1408394,
  checkin: "14:00",
  checkout: "12:00",
  quietHours: "22:00-09:00",
  size: "35 m2",
  bookingPropertyId: "249069",
  keyAccess: "codul pentru cutia de chei de la poarta este disponibil dupa check-in online"
};

export function bookingUrl(referer: string, locale: Locale = "ro") {
  const url = new URL("/rezerva-online/", SITE_URL);
  url.searchParams.set("referer", referer);
  if (locale === "en") url.searchParams.set("lang", "en");
  return url.toString();
}

export const maps = {
  google:
    "https://www.google.com/maps/search/?api=1&query=44.4338629,26.1408394",
  apple: "https://maps.apple.com/?ll=44.4338629,26.1408394&q=Serene%20Studio",
  waze: "https://waze.com/ul?ll=44.4338629,26.1408394&navigate=yes",
  osm: "https://www.openstreetmap.org/?mlat=44.4338629&mlon=26.1408394#map=17/44.4338629/26.1408394"
};

export const images = {
  bed: {
    base: "studio-privat-serene-studio",
    avif: "/images/studio-privat-serene-studio.avif",
    webp: "/images/studio-privat-serene-studio.webp",
    alt: {
      ro: "Pat matrimonial alb in studioul privat Serene Studio Bucuresti",
      en: "White double bed in the Serene Studio Bucharest private studio"
    },
    width: 1024,
    height: 771
  },
  overview: {
    base: "interior-serene-studio",
    avif: "/images/interior-serene-studio.avif",
    webp: "/images/interior-serene-studio.webp",
    alt: {
      ro: "Vedere de ansamblu Serene Studio Bucuresti: pat, baie si chicineta",
      en: "Serene Studio Bucharest overview: bed, bathroom and kitchenette"
    },
    width: 1600,
    height: 1204
  },
  kitchen: {
    base: "chicineta-serene-studio",
    avif: "/images/chicineta-serene-studio.avif",
    webp: "/images/chicineta-serene-studio.webp",
    alt: {
      ro: "Chicineta Serene Studio cu chiuveta, frigider si cuptor cu microunde",
      en: "Serene Studio kitchenette with sink, fridge and microwave"
    },
    width: 1400,
    height: 1054
  },
  kitchenArch: {
    base: "pat-matrimonial-serene-studio",
    avif: "/images/pat-matrimonial-serene-studio.avif",
    webp: "/images/pat-matrimonial-serene-studio.webp",
    alt: {
      ro: "Chicineta Serene Studio cu intrare arcuita si lumina naturala",
      en: "Serene Studio kitchenette with arched entrance and natural light"
    },
    width: 1600,
    height: 1204
  },
  terrace: {
    base: "terasa-serene-studio",
    avif: "/images/terasa-serene-studio.avif",
    webp: "/images/terasa-serene-studio.webp",
    alt: {
      ro: "Terasa privata Serene Studio Bucuresti cu plante si banca",
      en: "Private terrace at Serene Studio Bucharest with plants and bench"
    },
    width: 1400,
    height: 1054
  },
  courtyard: {
    base: "baie-serene-studio",
    avif: "/images/baie-serene-studio.avif",
    webp: "/images/baie-serene-studio.webp",
    alt: {
      ro: "Curte exterioara linistita Serene Studio Bucuresti",
      en: "Quiet outdoor courtyard at Serene Studio Bucharest"
    },
    width: 1400,
    height: 1054
  },
  entrance: {
    base: "intrare-serene-studio",
    avif: "/images/intrare-serene-studio.avif",
    webp: "/images/intrare-serene-studio.webp",
    alt: {
      ro: "Poarta si intrarea in proprietatea Serene Studio Bucuresti",
      en: "Property gate and entrance to Serene Studio Bucharest"
    },
    width: 1400,
    height: 1867
  },
  arena: {
    base: "arena-nationala-serene-studio",
    avif: "/images/arena-nationala-serene-studio.avif",
    webp: "/images/arena-nationala-serene-studio.webp",
    alt: {
      ro: "Arena Nationala Bucuresti la un eveniment - vedere de pe stadion",
      en: "National Arena Bucharest during an event - view from the stadium"
    },
    width: 1600,
    height: 1065
  },
  arenaExteriorDrona: {
    base: "arena-nationala-exterior-drona",
    avif: "/images/arena-nationala-exterior-drona.avif",
    webp: "/images/arena-nationala-exterior-drona.webp",
    alt: {
      ro: "Arena Nationala Bucuresti vedere aeriana cu drona - exterior stadion",
      en: "National Arena Bucharest aerial drone view - stadium exterior"
    },
    width: 1280,
    height: 720
  },
  arenaInteriorDrona: {
    base: "arena-nationala-interior-drona",
    avif: "/images/arena-nationala-interior-drona.avif",
    webp: "/images/arena-nationala-interior-drona.webp",
    alt: {
      ro: "Arena Nationala Bucuresti interior cu drona - vedere peste teren si tribune",
      en: "National Arena Bucharest interior drone view - pitch and stands"
    },
    width: 1264,
    height: 720
  },
  arenaIntrareTunel: {
    base: "arena-nationala-intrare-tunel",
    avif: "/images/arena-nationala-intrare-tunel.avif",
    webp: "/images/arena-nationala-intrare-tunel.webp",
    alt: {
      ro: "Tunelul de intrare al jucatorilor pe Arena Nationala Bucuresti",
      en: "Players' tunnel entrance at the National Arena Bucharest"
    },
    width: 1104,
    height: 816
  },
  arenaBancaAntrenori: {
    base: "arena-nationala-banca-antrenori",
    avif: "/images/arena-nationala-banca-antrenori.avif",
    webp: "/images/arena-nationala-banca-antrenori.webp",
    alt: {
      ro: "Bancile antrenorilor pe Arena Nationala Bucuresti - margine teren",
      en: "Coaches' benches at the National Arena Bucharest - pitch side"
    },
    width: 1168,
    height: 768
  },
  arenaMeciRomania: {
    base: "arena-nationala-meci-romania",
    avif: "/images/arena-nationala-meci-romania.avif",
    webp: "/images/arena-nationala-meci-romania.webp",
    alt: {
      ro: "Atmosfera la meciul nationalei Romaniei pe Arena Nationala Bucuresti",
      en: "Match-day atmosphere for Romania's national team at the National Arena Bucharest"
    },
    width: 1232,
    height: 736
  },
  arenaVedereStadion: {
    base: "arena-nationala-vedere-stadion",
    avif: "/images/arena-nationala-vedere-stadion.avif",
    webp: "/images/arena-nationala-vedere-stadion.webp",
    alt: {
      ro: "Vedere generala a Arenei Nationale Bucuresti din interior, in zi de eveniment",
      en: "General view of the National Arena Bucharest interior on event day"
    },
    width: 1104,
    height: 816
  }
};

export const gallery = [
  { key: "bed", caption: { ro: "Pat matrimonial in studioul privat", en: "Double bed in the private studio" } },
  { key: "overview", caption: { ro: "Studio privat - vedere de ansamblu", en: "Private studio - overview" } },
  { key: "kitchen", caption: { ro: "Chicineta cu chiuveta, frigider si microunde", en: "Kitchenette with sink, fridge and microwave" } },
  { key: "kitchenArch", caption: { ro: "Chicineta cu intrare arcuita", en: "Kitchenette with arched entrance" } },
  { key: "terrace", caption: { ro: "Terasa privata cu plante si banca", en: "Private terrace with plants and bench" } },
  { key: "courtyard", caption: { ro: "Curte exterioara linistita", en: "Quiet outdoor courtyard" } },
  { key: "entrance", caption: { ro: "Poarta si acces la proprietate", en: "Property gate and access" } }
] as const;

export const nav = {
  ro: [
    { label: "Acasa", href: "/" },
    { label: "Studio", href: "/studio/" },
    { label: "Locatie", href: "/locatie/" },
    { label: "Galerie", href: "/galerie/" },
    { label: "Blog", href: "/blog/" },
    { label: "Info", href: "/info/" },
    { label: "Contact", href: "/contact/" }
  ],
  en: [
    { label: "Home", href: "/en/" },
    { label: "Studio", href: "/en/studio/" },
    { label: "Location", href: "/en/location/" },
    { label: "Gallery", href: "/en/gallery/" },
    { label: "Blog", href: "/en/blog/" },
    { label: "Info", href: "/en/info/" },
    { label: "Contact", href: "/en/contact/" }
  ]
};

export const labels = {
  ro: {
    reserve: "Rezerva online",
    checkAvailability: "Verifica disponibilitatea",
    seeStudio: "Vezi studioul",
    bookOnline: "Rezerva online - confirmare rapida",
    menu: "Meniu",
    closeMenu: "Inchide meniul",
    content: "Sari la continut",
    finalTitle: "Verifica pretul pentru datele tale",
    finalText:
      "Preturile si disponibilitatea se verifica direct, apasand pe butonul Rezerva online. Nu este nevoie sa suni pentru disponibilitate.",
    faqTitle: "Intrebari frecvente"
  },
  en: {
    reserve: "Book online",
    checkAvailability: "Check availability",
    seeStudio: "See the studio",
    bookOnline: "Book online - fast confirmation",
    menu: "Menu",
    closeMenu: "Close menu",
    content: "Skip to content",
    finalTitle: "Check the price for your dates",
    finalText:
      "Prices and availability are checked directly by clicking the Book online button. You do not need to call for availability.",
    faqTitle: "Frequently asked questions"
  }
};

export const reviews = {
  ro: [
    {
      name: "Ingrid",
      quote:
        "Studio luminos, curat si confortabil, intr-o zona rezidentiala linistita, cu chicineta si terasa exterioara privata."
    },
    {
      name: "Marian",
      quote: "Locatie buna, curat si o surpriza placuta in frigider."
    },
    {
      name: "Johannes",
      quote:
        "Gazda prietenoasa, locatie linistita, conexiune rapida de metrou catre centru si saltea confortabila."
    },
    {
      name: "Lucretia",
      quote:
        "Tot ce trebuie pentru un sejur scurt: zona linistita de case, aproape de transport, curat si confortabil."
    }
  ],
  en: [
    {
      name: "Ingrid",
      quote:
        "A bright, clean and comfortable studio in a quiet residential area, with kitchenette and private outdoor terrace."
    },
    {
      name: "Marian",
      quote: "Good location, clean, with a pleasant surprise in the fridge."
    },
    {
      name: "Johannes",
      quote:
        "Friendly host, quiet location, fast metro connection to the city center and a comfortable mattress."
    },
    {
      name: "Lucretia",
      quote:
        "Everything needed for a short stay: quiet house area, close to transport, clean and comfortable."
    }
  ]
};

export const amenities = {
  ro: [
    "Studio privat de aproximativ 35 m2",
    "Pat matrimonial cu saltea confortabila",
    "Chicineta cu frigider, cuptor cu microunde, aparat de cafea si fierbator; nu exista aragaz sau plita",
    "Baie moderna cu dus, prosoape si articole de toaleta",
    "Terasa/curte si loc de fumat doar in exterior",
    "Wi-Fi rapid, TV, aer conditionat si incalzire centrala",
    "Parcare gratuita pe strada, de obicei disponibila in apropiere",
    "Check-in online si self check-in cu cod pentru cutia de chei de la poarta, disponibil dupa completarea datelor necesare"
  ],
  en: [
    "Private studio of about 35 m2",
    "Double bed with comfortable mattress",
    "Kitchenette with fridge, microwave, coffee maker and kettle; there is no stove or hob",
    "Modern bathroom with shower, towels and toiletries",
    "Terrace/courtyard and smoking area outside only",
    "Fast Wi-Fi, TV, air conditioning and central heating",
    "Free street parking, usually available nearby",
    "Online check-in and self check-in with the key-box access code, available after the required details are completed"
  ]
};

export const locationRows = {
  ro: [
    ["Metrou Piata Muncii", "Acces rapid in Bucuresti", "aprox. 4 minute pe jos"],
    ["Arena Nationala", "Concerte, meciuri si evenimente", "aprox. 14 minute pe jos"],
    ["Metrou Iancului", "Transport alternativ", "aprox. 1,1 km"],
    ["Mega Mall", "Cumparaturi, restaurante, cinema", "aprox. 18-20 minute pe jos, de verificat la plecare"],
    ["Parcul IOR / Alexandru Ioan Cuza", "Plimbare si relaxare", "acces rapid cu metrou, taxi sau transport public"],
    ["Centrul Vechi", "Restaurante si turism", "acces rapid cu metrou sau taxi"],
    ["Aeroportul Otopeni", "Sosiri internationale", "tren pana la Gara de Nord, apoi metrou/taxi"]
  ],
  en: [
    ["Piata Muncii metro", "Fast access across Bucharest", "about 4 minutes on foot"],
    ["National Arena", "Concerts, matches and events", "about 14 minutes on foot"],
    ["Iancului metro", "Alternative transport route", "about 1.1 km"],
    ["Mega Mall", "Shopping, restaurants, cinema", "about 18-20 minutes on foot, check before leaving"],
    ["IOR / Alexandru Ioan Cuza Park", "Walks and relaxation", "quick access by metro, taxi or public transport"],
    ["Old Town", "Restaurants and sightseeing", "fast access by metro or taxi"],
    ["Otopeni Airport", "International arrivals", "train to Gara de Nord, then metro/taxi"]
  ]
};

export const hospitalRows = {
  ro: [
    ["Spitalul Clinic de Boli Infectioase si Tropicale Dr. Victor Babes", "Vizite, consultatii, apartinatori", "verifica traseul exact in Google Maps"],
    ["Spitalul Monza", "Cardiologie, interventii si controale", "verifica traseul exact in Google Maps"],
    ["Spitalul Clinic Colentina", "Consultatii si internari", "verifica traseul exact in Google Maps"],
    ["Institutul National de Boli Infectioase Prof. Dr. Matei Bals", "Consultatii si internari boli infectioase", "verifica traseul exact in Google Maps"]
  ],
  en: [
    ["Dr. Victor Babes Clinical Hospital for Infectious and Tropical Diseases", "Visits, appointments and relatives", "check the exact route in Google Maps"],
    ["Monza Hospital", "Cardiology, procedures and check-ups", "check the exact route in Google Maps"],
    ["Colentina Clinical Hospital", "Appointments and admissions", "check the exact route in Google Maps"],
    ["Prof. Dr. Matei Bals National Institute", "Infectious disease appointments and admissions", "check the exact route in Google Maps"]
  ]
};

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}
