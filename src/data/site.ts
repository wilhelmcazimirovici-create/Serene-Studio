export type Locale = "ro" | "en";

export const SITE_URL = "https://www.serenestudio.ro";

export const property = {
  name: "Serene Studio",
  fullName: "Serene Studio București",
  phone: "+40 733 737 363",
  phoneHref: "tel:+40733737363",
  email: "serenestudio.ro@gmail.com",
  address: "Strada Alexandru Zagoritz 12, Sector 2, București 021998",
  streetAddress: "Strada Alexandru Zagoritz 12",
  locality: "Bucuresti",
  region: "Bucuresti",
  postalCode: "021998",
  country: "RO",
  latitude: 44.4338629,
  longitude: 26.1408394,
  checkin: "14:00",
  checkout: "11:00",
  quietHours: "22:00-09:00",
  size: "35 m2",
  bookingPropertyId: "249069",
  keyAccess: "codul pentru cutia de chei de la poartă este disponibil după check-in online"
};

export function bookingUrl(referer: string, locale: Locale = "ro") {
  const url = new URL("https://beds24.com/booking.php");
  url.searchParams.set("propid", property.bookingPropertyId);
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
      ro: "Pat matrimonial alb în studioul privat Serene Studio București",
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
      ro: "Vedere de ansamblu Serene Studio București: pat, baie și chicinetă",
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
      ro: "Chicinetă Serene Studio cu chiuveta, frigider și cuptor cu microunde",
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
      ro: "Chicinetă Serene Studio cu intrare arcuită și lumina naturală",
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
      ro: "Terasă privată Serene Studio București cu plante și banca",
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
      ro: "Curte exterioară liniștită Serene Studio București",
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
      ro: "Poarta și intrarea în proprietatea Serene Studio București",
      en: "Property gate and entrance to Serene Studio Bucharest"
    },
    width: 1400,
    height: 1867
  },
  airportPlatform: {
    base: "gara-aeroport-otopeni-peron",
    avif: "/images/gara-aeroport-otopeni-peron.avif",
    webp: "/images/gara-aeroport-otopeni-peron.webp",
    alt: {
      ro: "Peronul Gării Aeroport Henri Coandă pentru trenul spre Gara de Nord București",
      en: "Henri Coanda Airport railway station platform for the train to Bucharest North"
    },
    width: 1200,
    height: 900
  },
  airportCanopy: {
    base: "gara-aeroport-otopeni-copertina",
    avif: "/images/gara-aeroport-otopeni-copertina.avif",
    webp: "/images/gara-aeroport-otopeni-copertina.webp",
    alt: {
      ro: "Copertina Gării Aeroport Henri Coandă și liniile trenului spre București Nord",
      en: "Henri Coanda Airport railway station canopy and train tracks toward Bucharest North"
    },
    width: 1200,
    height: 900
  },
  airportTrainInterior: {
    base: "tren-aeroport-gara-de-nord-interior",
    avif: "/images/tren-aeroport-gara-de-nord-interior.avif",
    webp: "/images/tren-aeroport-gara-de-nord-interior.webp",
    alt: {
      ro: "Interiorul trenului de la Aeroportul Otopeni către Gara de Nord București",
      en: "Interior of the train from Otopeni Airport to Bucharest North railway station"
    },
    width: 1200,
    height: 900
  },
  arena: {
    base: "arena-nationala-serene-studio",
    avif: "/images/arena-nationala-serene-studio.avif",
    webp: "/images/arena-nationala-serene-studio.webp",
    alt: {
      ro: "Arena Națională București la un eveniment - vedere de pe stadion",
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
      ro: "Arena Națională București vedere aeriană cu drona - exterior stadion",
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
      ro: "Arena Națională București interior cu drona - vedere peste teren și tribune",
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
      ro: "Tunelul de intrare al jucătorilor pe Arena Națională București",
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
      ro: "Băncile antrenorilor pe Arena Națională București - margine teren",
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
      ro: "Atmosfera la meciul naționalei României pe Arena Națională București",
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
      ro: "Vedere generală a Arenei Naționale București din interior, în zi de eveniment",
      en: "General view of the National Arena Bucharest interior on event day"
    },
    width: 1104,
    height: 816
  }
};

export const gallery = [
  { key: "bed", caption: { ro: "Pat matrimonial în studioul privat", en: "Double bed in the private studio" } },
  { key: "overview", caption: { ro: "Studio privat - vedere de ansamblu", en: "Private studio - overview" } },
  { key: "kitchen", caption: { ro: "Chicinetă cu chiuveta, frigider și microunde", en: "Kitchenette with sink, fridge and microwave" } },
  { key: "kitchenArch", caption: { ro: "Chicinetă cu intrare arcuită", en: "Kitchenette with arched entrance" } },
  { key: "terrace", caption: { ro: "Terasă privată cu plante și banca", en: "Private terrace with plants and bench" } },
  { key: "courtyard", caption: { ro: "Curte exterioară liniștită", en: "Quiet outdoor courtyard" } },
  { key: "entrance", caption: { ro: "Poarta și acces la proprietate", en: "Property gate and access" } }
] as const;

export const nav = {
  ro: [
    { label: "Acasă", href: "/" },
    { label: "Studio", href: "/studio/" },
    { label: "Locație", href: "/locatie/" },
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
    reserve: "Rezervă online",
    checkAvailability: "Verifică disponibilitatea",
    seeStudio: "Vezi studioul",
    bookOnline: "Rezervă online - confirmare rapidă",
    menu: "Meniu",
    closeMenu: "Închide meniul",
    content: "Sari la conținut",
    finalTitle: "Verifică prețul pentru datele tale",
    finalText:
      "Prețurile și disponibilitatea se verifică direct, apăsând pe butonul Rezervă online. Nu facem rezervări telefonic — telefonul este doar pentru urgențe.",
    faqTitle: "Întrebări frecvente"
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
      "Prices and availability are checked directly by clicking the Book online button. We do not take bookings by phone — the phone is for emergencies only.",
    faqTitle: "Frequently asked questions"
  }
};

export const reviews = {
  ro: [
    {
      name: "Ingrid",
      quote:
        "Studio luminos, curat și confortabil, într-o zonă rezidențială liniștită, cu chicinetă și terasă exterioară privată."
    },
    {
      name: "Marian",
      quote: "Locație bună, curat și o surpriză plăcută în frigider."
    },
    {
      name: "Johannes",
      quote:
        "Gazdă prietenoasă, locație liniștită, conexiune rapidă de metrou către centru și saltea confortabilă."
    },
    {
      name: "Lucretia",
      quote:
        "Tot ce trebuie pentru un sejur scurt: zona liniștită de case, aproape de transport, curat și confortabil."
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
    "Pat matrimonial cu saltea confortabilă",
    "Chicinetă cu frigider, cuptor cu microunde, aparat de cafea și fierbător; nu există aragaz sau plită",
    "Baie modernă cu duș, prosoape și articole de toaletă",
    "Terasă/curte și loc de fumat doar în exterior",
    "Wi-Fi rapid, TV, aer condiționat și încălzire centrală",
    "Parcare gratuită pe stradă, de obicei disponibilă în apropiere",
    "Check-in online și self check-in cu cod pentru cutia de chei de la poartă, disponibil după completarea datelor necesare"
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
    ["Metrou Piața Muncii", "Acces rapid în București", "aprox. 4 minute pe jos"],
    ["Arena Națională", "Concerte, meciuri și evenimente", "aprox. 14 minute pe jos"],
    ["Metrou Iancului", "Transport alternativ", "aprox. 1,1 km"],
    ["Mega Mall", "Cumpărături, restaurante, cinema", "aprox. 18-20 minute pe jos, de verificat la plecare"],
    ["Parcul IOR / Alexandru Ioan Cuza", "Plimbare și relaxare", "acces rapid cu metrou, taxi sau transport public"],
    ["Centrul Vechi", "Restaurante și turism", "acces rapid cu metrou sau taxi"],
    ["Aeroportul Otopeni", "Sosiri internaționale", "tren până la Gara de Nord, apoi metrou/taxi"]
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

export const airportTrainRows = {
  ro: [
    ["01:52", "02:17", "25 min", "TFC RE 10102"],
    ["07:52", "08:17", "25 min", "TFC RE 10108"],
    ["11:12", "11:37", "25 min", "TFC RE 10112"],
    ["13:52", "14:17", "25 min", "TFC RE 10118"],
    ["21:12", "21:37", "25 min", "TFC RE 10120"],
    ["23:12", "23:37", "25 min", "TFC RE 10124"]
  ],
  en: [
    ["01:52", "02:17", "25 min", "TFC RE 10102"],
    ["07:52", "08:17", "25 min", "TFC RE 10108"],
    ["11:12", "11:37", "25 min", "TFC RE 10112"],
    ["13:52", "14:17", "25 min", "TFC RE 10118"],
    ["21:12", "21:37", "25 min", "TFC RE 10120"],
    ["23:12", "23:37", "25 min", "TFC RE 10124"]
  ]
};

export const hospitalRows = {
  ro: [
    ["Spitalul Clinic de Boli Infecțioase și Tropicale Dr. Victor Babeș", "Vizite, consultații, aparținători", "verifică traseul exact în Google Maps"],
    ["Spitalul Monza", "Cardiologie, intervenții și controale", "verifică traseul exact în Google Maps"],
    ["Spitalul Clinic Colentina", "Consultații și internări", "verifică traseul exact în Google Maps"],
    ["Institutul Național de Boli Infecțioase Prof. Dr. Matei Balș", "Consultații și internări boli infecțioase", "verifică traseul exact în Google Maps"]
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
