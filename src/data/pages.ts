import { amenities, hospitalRows, locationRows, property, reviews } from "./site";
import type { PageContent } from "./types";
import { arenaPhotoSection, arenaVideoSection } from "./arena-media";

const homeProofRo = [
  { value: "4 min", label: "până la metrou Piața Muncii" },
  { value: "14 min", label: "pe jos până la Arena Națională" },
  { value: "35 m2", label: "studio privat" },
  { value: "22-09", label: "ore de liniște" }
];

const homeProofEn = [
  { value: "4 min", label: "to Piața Muncii metro" },
  { value: "14 min", label: "walk to the National Arena" },
  { value: "35 m2", label: "private studio" },
  { value: "22-09", label: "quiet hours" }
];

export const pages: PageContent[] = [
  {
    path: "/",
    locale: "ro",
    translationPath: "/en/",
    title: "Serene Studio București - cazare lângă Piața Muncii",
    description:
      "Studio privat în București, la 4 minute de metrou Piața Muncii și aproape de Arena Națională. Chicinetă, terasă, Wi-Fi rapid, parcare și self check-in complet.",
    keyword: "Serene Studio Bucuresti, cazare Piata Muncii, cazare Arena Nationala",
    h1: "Serene Studio București",
    eyebrow: "Piața Muncii · Arena Națională · Sector 2",
    heroText:
      "Studio privat și liniștit în București, la 4 minute de metrou Piața Muncii și la aproximativ 14 minute pe jos de Arena Națională. Ai chicinetă, terasă, Wi-Fi rapid, parcare gratuită pe stradă și self check-in complet, cu cod pentru cutia de chei de la poartă după check-in-ul online.",
    heroImage: "bed",
    heroCtaReferer: "website_home_hero",
    secondaryHref: "/studio/",
    proof: homeProofRo,
    sections: [
      {
        title: "Serene Studio este pentru oaspeți care vor liniște",
        intro:
          "Serene Studio este potrivit pentru cupluri, călătorii business, participanți la evenimente pe Arena Națională și oaspeți care au nevoie de acces rapid la spitalele din zonă.",
        cards: [
          { title: "Pentru două persoane", text: "Studioul are un pat matrimonial și funcționează cel mai bine pentru unu sau doi adulți." },
          { title: "Pentru familii cu copil", text: "Copiii sunt acceptați, dar dorm cu părinții în același pat matrimonial; nu există pat suplimentar." },
          { title: "Pentru sosiri flexibile", text: "După rezervare completezi check-in-ul online. După completarea datelor necesare, primești codul de acces pentru cutia de chei de la poartă." }
        ],
        ctaReferer: "website_home_quiet"
      },
      {
        title: "Ce ai în studio",
        intro: "Ai întregul spațiu privat, cu facilități concrete pentru un sejur scurt sau de câteva zile.",
        bullets: amenities.ro,
        image: "overview"
      },
      {
        title: "Rezervi online, faci check-in online și intri singur",
        intro:
          "Rezervarea se face apăsând pe butonul Rezervă online; prețul și disponibilitatea se văd imediat pentru datele tale.",
        paragraphs: [
          "Apeși Rezervă online, alegi datele, verifici prețul și finalizezi rezervarea în pagina securizată.",
          "După confirmare primești detaliile rezervării și completezi check-in-ul online. După completarea datelor necesare, primești codul de acces pentru cutia de chei de la poartă. Nu facem rezervări telefonic — telefonul este doar pentru urgențe."
        ],
        ctaReferer: "website_home_booking_flow"
      },
      {
        title: "Ești aproape de Piața Muncii, Arena Națională și spitale",
        intro:
          "Adresa este Strada Alexandru Zagoritz 12, Sector 2, București, într-o zonă rezidențială liniștită, aproape de metrou și de traseele utile din estul orașului.",
        infographic: {
          variant: "distances",
          origin: "Serene Studio · Strada Alexandru Zagoritz 12, Sector 2, București",
          caption:
            "Distanțele sunt orientative pentru un mers pe jos relaxat. Verifică ruta în aplicația ta de navigație înainte de plecare.",
          distances: [
            { place: "Metrou Piața Muncii", detail: "Metrou către centru, Gara de Nord și Universitate", value: "~4 min pe jos", mode: "metro", lat: 44.4366, lon: 26.1364 },
            { place: "Arena Națională", detail: "Concerte, meciuri și evenimente mari", value: "~14 min pe jos", mode: "walk", lat: 44.4378, lon: 26.1521 },
            { place: "Metrou Iancului", detail: "Stație de metrou alternativă", value: "~1,1 km", mode: "metro", lat: 44.4434, lon: 26.1283 },
            { place: "Mega Mall", detail: "Cumpărături, restaurante și cinema", value: "~18-20 min pe jos", mode: "walk", lat: 44.4434, lon: 26.1500 },
            { place: "Parcul IOR / Alexandru Ioan Cuza", detail: "Plimbări și relaxare lângă lac", value: "~19 min pe jos", mode: "walk", lat: 44.4209, lon: 26.1652 }
          ]
        },
        ctaReferer: "website_home_location"
      },
      {
        title: "Vezi ora trenului pentru zborul tău",
        intro:
          "Planifică trenul aeroport pentru sosire sau plecare: introdu ora aterizării ori ora la care vrei să fii la aeroport și vezi 3 trenuri directe utile între Aeroport Henri Coandă și Gara de Nord.",
        variant: "airportTrainCta",
        cards: [
          {
            eyebrow: "Tren aeroport",
            href: "/blog/cum-ajungi-de-la-otopeni-la-piata-muncii/"
          }
        ]
      },
      {
        title: "Descoperă zona din jurul Serene Studio",
        intro:
          "Pagini dedicate pentru oaspeții care vin cu un scop clar - vizită la spital, eveniment la Arena Națională sau o ieșire la mall.",
        cards: [
          { eyebrow: "Spital de copii", title: "Cazare lângă Spitalul Gomoiu", text: "Studio privat la 180 m de Spitalul Clinic de Copii Dr. Victor Gomoiu (Bd. Basarabia 21) - 2 minute pe jos, se vede acoperișul. Pentru părinți și însoțitori.", href: "/cazare-langa-spitalul-gomoiu-bucuresti/" },
          { eyebrow: "Cardiologie", title: "Cazare lângă Spitalul Monza", text: "Studio privat în Sector 2, la ~2 km de Spitalul Monza (Str. Tony Bulandra 27). Pentru pacienți și aparținători.", href: "/cazare-langa-spitalul-monza-bucuresti/" },
          { eyebrow: "Concerte și meciuri", title: "Cazare lângă Arena Națională", text: "La ~14 minute pe jos de stadion. Self check-in, fără apeluri, ideal pentru concerte și meciuri.", href: "/cazare-langa-arena-nationala/" },
          { eyebrow: "Shopping și cinema", title: "Cazare lângă Mega Mall", text: "La ~18-20 min pe jos de Mega Mall și vecin cu Arena Națională. Pentru shopping, restaurante și cinema.", href: "/cazare-langa-mega-mall-bucuresti/" },
          { eyebrow: "Spitale în zona", title: "Cazare lângă spitalele din Sector 2", text: "Pagina-hub pentru aparținătorii care caută cazare în apropierea spitalelor importante din estul Bucureștiului.", href: "/cazare-langa-spitale-bucuresti/" }
        ]
      },
      {
        title: "Articole utile despre zona Serene Studio",
        intro:
          "Citește ghidul de zonă înainte să rezervi: trasee cu metroul, spitale apropiate, evenimente la stadion și obiective în raza de 3-5 km.",
        cards: [
          { eyebrow: "Aeroport Otopeni", title: "Cum ajungi de la Otopeni la Serene Studio", text: "Tren până la Gara de Nord, metrou până la Piața Muncii și 4 minute pe jos până la studio.", href: "/blog/cum-ajungi-de-la-otopeni-la-piata-muncii/" },
          { eyebrow: "Top 7 obiective", title: "Top obiective lângă Serene Studio (3-5 km)", text: "Spitale, mall-uri, stadioane, parcuri și Centrul Vechi - toate la câțiva kilometri de studio.", href: "/blog/obiective-langa-serene-studio-bucuresti-3-5-km/" },
          { eyebrow: "Self check-in", title: "Self check-in în București - cazare în studio privat", text: "Cum funcționează fluxul: rezervare online, check-in online cu ID și selfie, codul cutiei de chei în guidebook.", href: "/blog/self-check-in-bucuresti-cazare-studio-privat/" },
          { eyebrow: "Stadion", title: "Cazare lângă Stadionul Dinamo București", text: "La ~3 km de stadion. Cum ajungi cu mașina sau metroul și de ce contează o zonă rezidențială după meci.", href: "/blog/cazare-langa-stadionul-dinamo-bucuresti/" },
          { eyebrow: "Centrul Vechi", title: "Cum ajungi de la Serene Studio la Centrul Vechi cu metroul", text: "Ghid practic: metrou de la Piața Muncii până aproape de Lipscani în 20-25 minute, plus alternative cu taxi.", href: "/blog/cum-ajungi-de-la-serene-studio-la-centrul-vechi-bucuresti/" }
        ]
      },
      {
        title: "Recenzii reale",
        intro: "Feedback real de la oaspeții care au stat la Serene Studio.",
        cards: reviews.ro.map((review) => ({ title: review.name, text: review.quote })),
        variant: "reviews"
      }
    ],
    faq: [
      { q: "Cum verific prețul și disponibilitatea?", a: "Apasă butonul Rezervă online. Sistemul afișează datele disponibile și prețul pentru perioada aleasă." },
      { q: "Cum intru în studio?", a: "Unitatea este complet self-check-in. După check-in-ul online și completarea datelor necesare, primești codul de acces pentru cutia de chei de la poartă." },
      { q: "Pot rezerva telefonic?", a: "Nu facem rezervări telefonic. Disponibilitatea se verifică online, prin butonul Rezervă online. Telefonul este doar pentru urgențe; toate informațiile pentru sejur le găsești în guidebook, accesibil oricând prin același link folosit la check-in-ul online." },
      { q: "Ce acte sunt acceptate la check-in?", a: "Buletin sau pasaport pentru oaspeții din UE; doar pasaport pentru oaspeții non-UE. Niciun alt document nu este acceptat." },
      { q: "Copiii sunt acceptați?", a: "Da, copiii sunt acceptați, dar dorm cu părinții în același pat matrimonial; nu există pat suplimentar." },
      { q: "Există parcare?", a: "Parcarea este gratuită pe stradă. De obicei există locuri disponibile în apropiere, dar locul nu este rezervat nominal." },
      { q: "Pot fuma în interior?", a: "Nu. Fumatul este interzis în interior; se poate fuma doar în zona exterioară indicata." }
    ],
    gallery: true,
    finalCtaReferer: "website_home_final"
  },
  {
    path: "/en/",
    locale: "en",
    translationPath: "/",
    title: "Serene Studio Bucharest - accommodation near Piata Muncii",
    description:
      "Private studio in Bucharest, 4 minutes from Piata Muncii metro and close to the National Arena. Kitchenette, terrace, fast Wi-Fi, parking and full self check-in.",
    keyword: "Serene Studio Bucharest, Piata Muncii accommodation, National Arena accommodation",
    h1: "Serene Studio Bucharest",
    eyebrow: "Piata Muncii · National Arena · Sector 2",
    heroText:
      "A quiet private studio in Bucharest, about 4 minutes from Piata Muncii metro and about 14 minutes on foot from the National Arena. You have a kitchenette, terrace, fast Wi-Fi, free street parking and full self check-in with the key-box code after online check-in.",
    heroImage: "bed",
    heroCtaReferer: "website_en_home_hero",
    secondaryHref: "/en/studio/",
    proof: homeProofEn,
    sections: [
      {
        title: "Serene Studio is for guests who want a quiet stay",
        intro:
          "Serene Studio suits couples, business travelers, National Arena event guests and visitors who need quick access to nearby hospitals.",
        cards: [
          { title: "For two guests", text: "The studio has one double bed and works best for one or two adults." },
          { title: "For families with a child", text: "Children are allowed, but they sleep with parents in the same double bed; there is no extra bed." },
          { title: "For flexible arrivals", text: "After booking you complete online check-in. After the required details are completed, you receive the access code for the key box at the gate." }
        ],
        ctaReferer: "website_en_home_quiet"
      },
      {
        title: "What is included in the studio",
        intro: "You book the whole private space, with practical facilities for a short stay or a few days.",
        bullets: amenities.en,
        image: "overview"
      },
      {
        title: "Book online, check in online and enter independently",
        intro:
          "Bookings are made by clicking the Book online button; prices and availability are shown immediately for your selected dates.",
        paragraphs: [
          "Click Book online, choose your dates, check the price and complete the reservation on the secure booking page.",
          "After confirmation you receive the booking details and complete online check-in. After the required details are completed, you receive the access code for the key box at the gate. We do not take bookings by phone — the phone is for emergencies only."
        ],
        ctaReferer: "website_en_home_booking_flow"
      },
      {
        title: "Close to Piata Muncii, the National Arena and hospitals",
        intro:
          "The address is Strada Alexandru Zagoritz 12, Sector 2, Bucharest, in a quiet residential area close to metro and useful routes in eastern Bucharest.",
        infographic: {
          variant: "distances",
          origin: "Serene Studio · Strada Alexandru Zagoritz 12, Sector 2, Bucharest",
          caption:
            "Distances are indicative for a relaxed walk. Always check the route in your navigation app before leaving.",
          distances: [
            { place: "Piata Muncii metro", detail: "Metro to the city center, Gara de Nord and Universitate", value: "~4 min walk", mode: "metro", lat: 44.4366, lon: 26.1364 },
            { place: "National Arena", detail: "Concerts, matches and major events", value: "~14 min walk", mode: "walk", lat: 44.4378, lon: 26.1521 },
            { place: "Iancului metro", detail: "Alternative metro station", value: "~1.1 km", mode: "metro", lat: 44.4434, lon: 26.1283 },
            { place: "Mega Mall", detail: "Shopping, restaurants and cinema", value: "~18-20 min walk", mode: "walk", lat: 44.4434, lon: 26.1500 },
            { place: "IOR / Alexandru Ioan Cuza Park", detail: "Walks and lakeside relaxation", value: "metro, taxi or public transport", mode: "metro", lat: 44.4209, lon: 26.1652 }
          ]
        },
        ctaReferer: "website_en_home_location"
      },
      {
        title: "See the train time for your flight",
        intro:
          "Plan the airport train for arrival or departure: enter your landing time or the time you want to be at the airport and see 3 useful direct trains between Henri Coanda Airport and Gara de Nord.",
        variant: "airportTrainCta",
        cards: [
          {
            eyebrow: "Airport train",
            href: "/en/blog/how-to-get-from-otopeni-to-piata-muncii/"
          }
        ]
      },
      {
        title: "Discover the area around Serene Studio",
        intro:
          "Dedicated pages for guests with a clear purpose - a hospital visit, a National Arena event or a mall trip.",
        cards: [
          { eyebrow: "Children's hospital", title: "Stay near Gomoiu Children's Hospital", text: "Private studio 180 m from Dr. Victor Gomoiu Children's Clinical Hospital (Bd. Basarabia 21) - a 2-minute walk, the roof is visible. For parents and relatives.", href: "/en/accommodation-near-gomoiu-hospital-bucharest/" },
          { eyebrow: "Cardiology", title: "Stay near Monza Hospital", text: "Private studio in Sector 2, about 2 km from Monza Hospital (Str. Tony Bulandra 27). For patients and relatives.", href: "/en/accommodation-near-monza-hospital-bucharest/" },
          { eyebrow: "Concerts and matches", title: "Stay near the National Arena", text: "About 14 minutes on foot from the stadium. Self check-in, no calls, ideal for concerts and matches.", href: "/en/accommodation-near-national-arena/" },
          { eyebrow: "Shopping and cinema", title: "Stay near Mega Mall", text: "About 18-20 min on foot from Mega Mall, next to the National Arena. For shopping, restaurants and cinema.", href: "/en/accommodation-near-mega-mall-bucharest/" },
          { eyebrow: "Hospitals in the area", title: "Stay near Sector 2 hospitals", text: "Hub page for relatives looking for accommodation near major hospitals in eastern Bucharest.", href: "/en/accommodation-near-bucharest-hospitals/" }
        ]
      },
      {
        title: "Useful articles about the Serene Studio area",
        intro:
          "Read the area guide before booking: metro routes, nearby hospitals, stadium events and key places within 3-5 km.",
        cards: [
          { eyebrow: "Otopeni Airport", title: "How to get from Otopeni to Serene Studio", text: "Train to Gara de Nord, metro to Piata Muncii and a 4-minute walk to the studio.", href: "/en/blog/how-to-get-from-otopeni-to-piata-muncii/" },
          { eyebrow: "Top 7 places", title: "Top things to do near Serene Studio (3-5 km)", text: "Hospitals, malls, stadiums, parks and the Old Town - all within a few kilometers of the studio.", href: "/en/blog/things-to-do-near-serene-studio-bucharest-3-5-km/" },
          { eyebrow: "Self check-in", title: "Self check-in in Bucharest - private studio accommodation", text: "How the flow works: online booking, online check-in with ID and selfie, key-box code in the guidebook.", href: "/en/blog/self-check-in-bucharest-private-studio/" },
          { eyebrow: "Stadium", title: "Stay near Dinamo Stadium Bucharest", text: "About 3 km from the stadium. How to get there by car or metro and why a residential area helps after the match.", href: "/en/blog/accommodation-near-dinamo-stadium-bucharest/" },
          { eyebrow: "Old Town", title: "How to get from Serene Studio to the Old Town by metro", text: "Practical guide: metro from Piata Muncii toward Lipscani in 20-25 minutes, plus taxi alternatives.", href: "/en/blog/how-to-get-from-serene-studio-to-old-town-bucharest/" }
        ]
      },
      {
        title: "Real reviews",
        intro: "Genuine feedback from guests who have stayed at Serene Studio.",
        cards: reviews.en.map((review) => ({ title: review.name, text: review.quote })),
        variant: "reviews"
      }
    ],
    faq: [
      { q: "How do I check price and availability?", a: "Click the Book online button. The system shows available dates and the price for your stay." },
      { q: "How do I enter the studio?", a: "The unit is fully self check-in. After online check-in and completion of the required details, you receive the access code for the key box at the gate." },
      { q: "Can I book by phone?", a: "No. We do not take bookings by phone. Availability is checked online via the Book online button. The phone is for emergencies only; all stay information is in the guidebook, accessible any time through the same link used for online check-in." },
      { q: "Which documents are accepted at check-in?", a: "ID card or passport for EU guests; passport only for non-EU guests. No other document is accepted." },
      { q: "Are children allowed?", a: "Yes. Children are allowed, but they sleep with parents in the same double bed; there is no extra bed." },
      { q: "Is parking available?", a: "Parking is free on the street. Spaces are usually available nearby, but no parking spot is reserved by name." },
      { q: "Can I smoke inside?", a: "No. Smoking is not allowed inside; it is allowed only in the indicated outdoor area." }
    ],
    gallery: true,
    finalCtaReferer: "website_en_home_final"
  },
  {
    path: "/studio/",
    locale: "ro",
    translationPath: "/en/studio/",
    title: "Studio privat în București cu chicinetă și terasă - Serene Studio",
    description:
      "Vezi ce include Serene Studio București: pat matrimonial, chicinetă, baie modernă, terasă, Wi-Fi rapid, self check-in și parcare gratuită pe stradă.",
    keyword: "studio privat Bucuresti, chicineta, terasa, self check-in",
    h1: "Studio privat în București, cu chicinetă și terasă",
    eyebrow: "Spațiu privat · 35 m2 · Self check-in",
    heroText:
      "Serene Studio este un studio privat de aproximativ 35 m2, cu pat matrimonial, chicinetă, baie modernă, terasă și acces rapid la Piața Muncii.",
    heroImage: "terrace",
    heroCtaReferer: "website_studio_hero",
    secondaryHref: "/galerie/",
    secondaryLabel: "Vezi galeria",
    proof: homeProofRo,
    sections: [
      {
        title: "Ce include studioul?",
        intro: "Rezervi întregul studio, nu o cameră într-un apartament împărțit.",
        bullets: amenities.ro,
        image: "kitchen",
        ctaReferer: "website_studio_facilities"
      },
      {
        title: "Răspunsuri rapide despre spațiu",
        intro: "Acest tabel răspunde întrebărilor normale despre folosirea studioului.",
        table: {
          headers: ["Întrebare", "Răspuns scurt"],
          rows: [
            ["Este spațiul privat?", "Da, rezervi întregul studio."],
            ["Pot gati la aragaz sau plită?", "Nu. Nu există aragaz sau plită; există cuptor cu microunde, frigider, aparat de cafea și fierbător."],
            ["Pot lucra remote?", "Da, există Wi-Fi rapid și spațiu potrivit pentru laptop."],
            ["Pot fuma?", "Nu în interior; doar în zona exterioară indicata."],
            ["Copiii pot sta?", "Da, dar dorm cu părinții în același pat matrimonial."]
          ]
        }
      },
      {
        title: "Pentru cine este potrivit?",
        intro: "Studioul este potrivit pentru sejururi scurte, călătorii de business, evenimente la Arena Națională și vizite în zona Piața Muncii.",
        cards: [
          { title: "Cupluri", text: "Un singur pat matrimonial, spațiu privat și curte/terasă." },
          { title: "Business", text: "Wi-Fi rapid, self check-in și acces rapid la metrou." },
          { title: "Evenimente", text: "Arena Națională este la aproximativ 14 minute de mers pe jos." }
        ]
      }
    ],
    faq: [
      { q: "Există pat suplimentar?", a: "Nu. Există un singur pat matrimonial." },
      { q: "Există aragaz sau plită?", a: "Nu. Chicinetă are frigider, cuptor cu microunde, aparat de cafea și fierbător, dar nu are aragaz sau plită." },
      { q: "Primesc prosoape?", a: "Da, studioul include prosoape și articole de toaletă." }
    ],
    finalCtaReferer: "website_studio_final"
  },
  {
    path: "/en/studio/",
    locale: "en",
    translationPath: "/studio/",
    title: "Private studio in Bucharest with kitchenette and terrace - Serene Studio",
    description:
      "See what Serene Studio Bucharest includes: double bed, kitchenette, modern bathroom, terrace, fast Wi-Fi, self check-in and free street parking.",
    keyword: "private studio Bucharest, kitchenette, terrace, self check-in",
    h1: "Private studio in Bucharest with kitchenette and terrace",
    eyebrow: "Private space · 35 m2 · Self check-in",
    heroText:
      "Serene Studio is a private studio of about 35 m2, with double bed, kitchenette, modern bathroom, terrace and quick access to Piata Muncii.",
    heroImage: "terrace",
    heroCtaReferer: "website_en_studio_hero",
    secondaryHref: "/en/gallery/",
    secondaryLabel: "See gallery",
    proof: homeProofEn,
    sections: [
      {
        title: "What does the studio include?",
        intro: "You book the entire studio, not a room in a shared apartment.",
        bullets: amenities.en,
        image: "kitchen",
        ctaReferer: "website_en_studio_facilities"
      },
      {
        title: "Quick answers about the space",
        intro: "This table answers the usual questions about using the studio.",
        table: {
          headers: ["Question", "Short answer"],
          rows: [
            ["Is the space private?", "Yes, you book the whole studio."],
            ["Can I cook on a stove or hob?", "No. There is no stove or hob; there is a microwave, fridge, coffee maker and kettle."],
            ["Can I work remotely?", "Yes, there is fast Wi-Fi and laptop-friendly space."],
            ["Can I smoke?", "Not inside; only in the indicated outdoor area."],
            ["Can children stay?", "Yes, but they sleep with parents in the same double bed."]
          ]
        }
      },
      {
        title: "Who is it suitable for?",
        intro: "The studio suits short stays, business travel, National Arena events and visits in the Piata Muncii area.",
        cards: [
          { title: "Couples", text: "One double bed, private space and courtyard/terrace." },
          { title: "Business", text: "Fast Wi-Fi, self check-in and quick metro access." },
          { title: "Events", text: "The National Arena is about 14 minutes away on foot." }
        ]
      }
    ],
    faq: [
      { q: "Is there an extra bed?", a: "No. There is one double bed." },
      { q: "Is there a stove or hob?", a: "No. The kitchenette has a fridge, microwave, coffee maker and kettle, but no stove or hob." },
      { q: "Are towels included?", a: "Yes, towels and toiletries are included." }
    ],
    finalCtaReferer: "website_en_studio_final"
  },
  {
    path: "/galerie/",
    locale: "ro",
    translationPath: "/en/gallery/",
    title: "Galerie foto Serene Studio București",
    description: "Fotografii reale cu Serene Studio București: pat matrimonial, chicinetă, baie, terasă, interior și acces.",
    keyword: "galerie Serene Studio Bucuresti, poze studio Piata Muncii",
    h1: "Galerie foto Serene Studio",
    eyebrow: "Fotografii reale",
    heroText: "Vezi imagini reale cu studioul, chicinetă, baia, terasă și intrarea în Serene Studio București.",
    heroImage: "overview",
    heroCtaReferer: "website_gallery_hero",
    sections: [
      {
        title: "Ce trebuie sa observi în fotografii?",
        intro: "Fotografiile arată spațiul așa cum contează pentru rezervare: pat, chicinetă, baie, zona exterioară și acces.",
        bullets: ["Un singur pat matrimonial", "Chicinetă cu microunde, frigider, cafea și ceai", "Baie modernă cu duș", "Terasă/curte pentru relaxare", "Acces potrivit pentru self check-in"]
      }
    ],
    gallery: true,
    faq: [
      { q: "Fotografiile sunt reale?", a: "Da, fotografiile sunt descărcate de pe site-ul actual Serene Studio și optimizate pentru noul site." },
      { q: "Există mai multe camere?", a: "Nu. Serene Studio este un singur studio privat." }
    ],
    finalCtaReferer: "website_gallery_final"
  },
  {
    path: "/en/gallery/",
    locale: "en",
    translationPath: "/galerie/",
    title: "Serene Studio Bucharest photo gallery",
    description: "Real photos of Serene Studio Bucharest: double bed, kitchenette, bathroom, terrace, interior and access.",
    keyword: "Serene Studio Bucharest gallery, Piata Muncii studio photos",
    h1: "Serene Studio photo gallery",
    eyebrow: "Real photos",
    heroText: "See real images of the studio, kitchenette, bathroom, terrace and entrance at Serene Studio Bucharest.",
    heroImage: "overview",
    heroCtaReferer: "website_en_gallery_hero",
    sections: [
      {
        title: "What should you check in the photos?",
        intro: "The photos show the details that matter before booking: bed, kitchenette, bathroom, outdoor area and access.",
        bullets: ["One double bed", "Kitchenette with microwave, fridge, coffee and tea", "Modern bathroom with shower", "Terrace/courtyard for relaxing", "Access suitable for self check-in"]
      }
    ],
    gallery: true,
    faq: [
      { q: "Are the photos real?", a: "Yes, the photos come from the current Serene Studio website and are optimized for the new site." },
      { q: "Are there several rooms?", a: "No. Serene Studio is one private studio." }
    ],
    finalCtaReferer: "website_en_gallery_final"
  },
  {
    path: "/locatie/",
    locale: "ro",
    translationPath: "/en/location/",
    title: "Locația Serene Studio în București - Piața Muncii și Arena Națională",
    description:
      "Serene Studio este pe Strada Alexandru Zagoritz 12, Sector 2, la aproximativ 4 minute de metrou Piața Muncii și 14 minute pe jos de Arena Națională.",
    keyword: "locatie Serene Studio, Strada Alexandru Zagoritz 12, Piata Muncii",
    h1: "Locația Serene Studio în București",
    eyebrow: "Strada Alexandru Zagoritz 12",
    heroText:
      "Serene Studio se află pe Strada Alexandru Zagoritz 12, Sector 2, București, la aproximativ 4 minute de mers pe jos de stația de metrou Piața Muncii.",
    heroImage: "entrance",
    heroCtaReferer: "website_location_hero",
    proof: homeProofRo,
    sections: [
      {
        title: "Adresa și coordonate GPS",
        intro: `${property.address}. Coordonatele folosite pentru hartă sunt ${property.latitude}, ${property.longitude}; verifică ruta finală în aplicația de navigație.`,
        bullets: ["Zona rezidențială cu case și vile", "Acces rapid la metrou Piața Muncii", "Traseu simplu către Arena Națională", "Parcare gratuită pe stradă, de obicei disponibilă în apropiere"],
        ctaReferer: "website_location_address"
      },
      {
        title: "Distanțe utile din zonă",
        intro: "Timpii de mai jos sunt orientativi și trebuie verificați în ziua plecării, mai ales pentru trafic sau evenimente.",
        table: { headers: ["Loc", "De ce contează", "Timp / distanță de menționat"], rows: locationRows.ro }
      }
    ],
    maps: true,
    faq: [
      { q: "Unde este Serene Studio?", a: `Serene Studio este pe ${property.address}, aproape de metrou Piața Muncii.` },
      { q: "Cât este până la metrou?", a: "Stația Piața Muncii este la aproximativ 4 minute de mers pe jos." },
      { q: "Cât este până la Arena Națională?", a: "Arena Națională este la aproximativ 14 minute de mers pe jos, conform informațiilor existente pe platformele de rezervare." }
    ],
    finalCtaReferer: "website_location_final"
  },
  {
    path: "/en/location/",
    locale: "en",
    translationPath: "/locatie/",
    title: "Serene Studio location in Bucharest - Piata Muncii and National Arena",
    description:
      "Serene Studio is on Strada Alexandru Zagoritz 12, Sector 2, about 4 minutes from Piata Muncii metro and 14 minutes on foot from the National Arena.",
    keyword: "Serene Studio location, Strada Alexandru Zagoritz 12, Piata Muncii",
    h1: "Serene Studio location in Bucharest",
    eyebrow: "Strada Alexandru Zagoritz 12",
    heroText:
      "Serene Studio is located on Strada Alexandru Zagoritz 12, Sector 2, Bucharest, about 4 minutes on foot from Piata Muncii metro station.",
    heroImage: "entrance",
    heroCtaReferer: "website_en_location_hero",
    proof: homeProofEn,
    sections: [
      {
        title: "Address and GPS coordinates",
        intro: `${property.address}. The coordinates used for the map are ${property.latitude}, ${property.longitude}; check the final route in your navigation app.`,
        bullets: ["Residential area with houses and villas", "Fast access to Piata Muncii metro", "Simple route to the National Arena", "Free street parking, usually available nearby"],
        ctaReferer: "website_en_location_address"
      },
      {
        title: "Useful distances in the area",
        intro: "The times below are indicative and should be checked on the day of travel, especially for traffic or events.",
        table: { headers: ["Place", "Why it matters", "Time / distance"], rows: locationRows.en }
      }
    ],
    maps: true,
    faq: [
      { q: "Where is Serene Studio?", a: `Serene Studio is at ${property.address}, close to Piata Muncii metro.` },
      { q: "How far is the metro?", a: "Piata Muncii metro station is about 4 minutes away on foot." },
      { q: "How far is the National Arena?", a: "The National Arena is about 14 minutes away on foot, based on existing booking-platform information." }
    ],
    finalCtaReferer: "website_en_location_final"
  },
  {
    path: "/cazare-langa-arena-nationala/",
    locale: "ro",
    translationPath: "/en/accommodation-near-national-arena/",
    title: "Cazare lângă Arena Națională București - Serene Studio",
    description:
      "Serene Studio este cazare liniștită lângă Arena Națională, la aproximativ 14 minute pe jos de stadion și 4 minute de metrou Piața Muncii.",
    keyword: "cazare langa Arena Nationala, cazare stadion Bucuresti",
    h1: "Cazare lângă Arena Națională București",
    eyebrow: "Concerte · Meciuri · Evenimente",
    heroText:
      "Serene Studio este o opțiune liniștită de cazare lângă Arena Națională, la aproximativ 14 minute de mers pe jos de stadion și la 4 minute de metrou Piața Muncii.",
    heroImage: "arena",
    heroCtaReferer: "website_arena_page_hero",
    proof: homeProofRo,
    sections: [
      {
        title: "De ce sa alegi Serene Studio pentru un eveniment la Arena Națională?",
        intro: "Studioul este aproape de stadion, dar se află într-o zonă rezidențială mai liniștită decât străzile lipite de fluxul de eveniment.",
        bullets: ["Poți merge pe jos către stadion", "Ai self check-in complet după ora 14:00, cu cod pentru cutia de chei de la poartă după check-in-ul online", "Te intorci la un studio privat, nu la o cameră comună", "Rezervarea se face online, fără apel pentru disponibilitate"],
        ctaReferer: "website_arena_page_mid"
      },
      {
        title: "Pentru cine este potrivit?",
        intro: "Pagina este pentru oaspeți care caută cazare înainte sau după un concert, meci, eveniment sportiv ori eveniment corporate.",
        cards: [
          { title: "Cupluri", text: "Un pat matrimonial, baie privată și chicinetă." },
          { title: "O noapte după eveniment", text: "Self check-in și acces rapid la zona Piața Muncii." },
          { title: "Sejur scurt", text: "Wi-Fi, parcare pe stradă și transport public în apropiere." }
        ],
        image: "terrace"
      },
      arenaPhotoSection("ro"),
      arenaVideoSection("ro"),
      {
        title: "Vrei detalii despre traseul pe jos până la stadion?",
        intro: "Dacă vrei un ghid pas cu pas pentru drumul de la Serene Studio și Piața Muncii la Arena Națională (timpi reali, repere și tips pentru zile de eveniment), continuă cu articolul dedicat.",
        cards: [
          {
            eyebrow: "Ghid pe jos",
            title: "Traseu pe jos: Serene Studio → Arena Națională",
            text: "Timp real, puncte de reper și tips pentru zile de concert sau meci.",
            href: "/blog/traseu-pe-jos-serene-studio-arena-nationala/"
          }
        ]
      }
    ],
    faq: [
      { q: "Pot merge pe jos la Arena Națională?", a: "Da, Arena Națională este la aproximativ 14 minute de mers pe jos de Serene Studio." },
      { q: "Pot face check-in târziu după un concert?", a: "Da. După rezervare și check-in online, primești codul de acces pentru cutia de chei de la poartă după completarea datelor necesare." },
      { q: "Există parcare?", a: "Parcarea este gratuită pe stradă și de obicei există locuri în apropiere, dar nu este un loc rezervat." },
      { q: "Este potrivit pentru o noapte după eveniment?", a: "Da, este potrivit pentru o noapte sau un sejur scurt, mai ales dacă vrei acces pe jos la stadion." }
    ],
    finalCtaReferer: "website_arena_page_final"
  },
  {
    path: "/en/accommodation-near-national-arena/",
    locale: "en",
    translationPath: "/cazare-langa-arena-nationala/",
    title: "Accommodation near the National Arena Bucharest - Serene Studio",
    description:
      "Serene Studio is quiet accommodation near the National Arena, about 14 minutes on foot from the stadium and 4 minutes from Piata Muncii metro.",
    keyword: "accommodation near National Arena Bucharest, stadium accommodation",
    h1: "Accommodation near the National Arena Bucharest",
    eyebrow: "Concerts · Matches · Events",
    heroText:
      "Serene Studio is a quiet accommodation option near the National Arena, about 14 minutes on foot from the stadium and 4 minutes from Piata Muncii metro.",
    heroImage: "arena",
    heroCtaReferer: "website_en_arena_page_hero",
    proof: homeProofEn,
    sections: [
      {
        title: "Why choose Serene Studio for a National Arena event?",
        intro: "The studio is close to the stadium, while still being in a quieter residential area than streets directly attached to event traffic.",
        bullets: ["You can walk to the stadium", "Full self check-in after 14:00, with the key-box code after online check-in", "You return to a private studio, not a shared room", "Booking is online — we do not take bookings by phone"],
        ctaReferer: "website_en_arena_page_mid"
      },
      {
        title: "Who is it suitable for?",
        intro: "This page is for guests looking for accommodation before or after a concert, match, sports event or corporate event.",
        cards: [
          { title: "Couples", text: "One double bed, private bathroom and kitchenette." },
          { title: "One night after an event", text: "Self check-in and quick access to the Piata Muncii area." },
          { title: "Short stay", text: "Wi-Fi, street parking and public transport nearby." }
        ],
        image: "terrace"
      },
      arenaPhotoSection("en"),
      arenaVideoSection("en"),
      {
        title: "Want details about the walking route to the stadium?",
        intro: "If you want a step-by-step guide for the walk from Serene Studio and Piata Muncii to the National Arena (real times, landmarks and tips for event days), continue with the dedicated article.",
        cards: [
          {
            eyebrow: "Walking guide",
            title: "Walking route: Serene Studio → National Arena",
            text: "Real time, landmark points and tips for concert or match days.",
            href: "/en/blog/walking-route-serene-studio-national-arena/"
          }
        ]
      }
    ],
    faq: [
      { q: "Can I walk to the National Arena?", a: "Yes, the National Arena is about 14 minutes away on foot from Serene Studio." },
      { q: "Can I check in late after a concert?", a: "Yes. After booking and online check-in, you receive the access code for the key box at the gate once the required details are completed." },
      { q: "Is parking available?", a: "Parking is free on the street and usually available nearby, but no spot is reserved." },
      { q: "Is it suitable for one night after an event?", a: "Yes, it is suitable for one night or a short stay, especially if you want walking access to the stadium." }
    ],
    finalCtaReferer: "website_en_arena_page_final"
  },
  {
    path: "/cazare-langa-spitale-bucuresti/",
    locale: "ro",
    translationPath: "/en/accommodation-near-bucharest-hospitals/",
    title: "Cazare lângă spitale în București - Serene Studio",
    description:
      "Studio privat și liniștit în Sector 2, potrivit pentru aparținători sau oaspeți care au nevoie de cazare lângă spitalele din zona Piața Muncii - Mihai Bravu - Iancului.",
    keyword: "cazare langa spitale Bucuresti, cazare Victor Babes, cazare Monza",
    h1: "Cazare liniștită lângă spitale în București",
    eyebrow: "Sector 2 · Piața Muncii · Mihai Bravu",
    heroText:
      "Serene Studio este un studio privat și liniștit în Sector 2, potrivit pentru aparținători sau oaspeți care au nevoie de cazare aproape de spitalele din zona Piața Muncii - Mihai Bravu - Iancului.",
    heroImage: "overview",
    heroCtaReferer: "website_hospital_page_hero",
    proof: homeProofRo,
    sections: [
      {
        title: "Pentru ce situații este potrivit?",
        intro: "Studioul nu oferă servicii medicale, dar poate fi util pentru cazare privată, liniștită și ușor de rezervat online.",
        bullets: ["Aparținători care au nevoie de intimitate", "Oaspeți cu program variabil", "Sejururi de câteva zile cu chicinetă", "Acces rapid cu taxi, metrou sau transport public"],
        ctaReferer: "website_hospital_page_mid"
      },
      {
        title: "Spitale căutate în zonă",
        intro: "Distanțele exacte trebuie verificate în Google Maps în funcție de oră și traseu.",
        table: {
          headers: ["Spital", "De ce caută oamenii cazare aici", "Distanță / timp"],
          rows: hospitalRows.ro
        }
      },
      {
        title: "Ce ajuta într-un sejur medical sau pentru aparținători?",
        intro: "Serene Studio pune accent pe liniște, curățenie, intimitate și un flux de rezervare fără apeluri inutile.",
        cards: [
          { title: "Chicinetă", text: "Poți folosi frigiderul, cuptorul cu microunde, aparatul de cafea și fierbătorul; nu există aragaz sau plită." },
          { title: "Self check-in", text: "Poți ajunge după ora 14:00. După check-in-ul online și completarea datelor necesare, folosești codul pentru cutia de chei de la poartă." },
          { title: "Ore de liniște", text: "Intervalul 22:00-09:00 ajută la păstrarea unui mediu calm." }
        ],
        image: "kitchen"
      }
    ],
    faq: [
      { q: "Este Serene Studio potrivit pentru aparținători?", a: "Da, poate fi potrivit pentru aparținători care caută un studio privat și liniștit în Sector 2." },
      { q: "Pot face self check-in dacă ajung seara?", a: "Da, după rezervare completezi check-in-ul online, iar după completarea datelor necesare primești codul pentru cutia de chei de la poartă." },
      { q: "Am chicinetă pentru câteva zile?", a: "Da, există frigider, cuptor cu microunde, aparat de cafea și fierbător; nu există aragaz sau plită." },
      { q: "Pot rezerva online fără să sun?", a: "Da. Prețul și disponibilitatea se verifică online, apăsând pe butonul Rezervă online." }
    ],
    finalCtaReferer: "website_hospital_page_final"
  },
  {
    path: "/en/accommodation-near-bucharest-hospitals/",
    locale: "en",
    translationPath: "/cazare-langa-spitale-bucuresti/",
    title: "Accommodation near hospitals in Bucharest - Serene Studio",
    description:
      "Quiet private studio in Sector 2, suitable for relatives or guests who need accommodation near hospitals in the Piata Muncii - Mihai Bravu - Iancului area.",
    keyword: "accommodation near hospitals Bucharest, Victor Babes accommodation, Monza accommodation",
    h1: "Quiet accommodation near hospitals in Bucharest",
    eyebrow: "Sector 2 · Piata Muncii · Mihai Bravu",
    heroText:
      "Serene Studio is a quiet private studio in Sector 2, suitable for relatives or guests who need accommodation near hospitals in the Piata Muncii - Mihai Bravu - Iancului area.",
    heroImage: "overview",
    heroCtaReferer: "website_en_hospital_page_hero",
    proof: homeProofEn,
    sections: [
      {
        title: "What situations is it suitable for?",
        intro: "The studio does not provide medical services, but it can help with private, quiet accommodation that is easy to book online.",
        bullets: ["Relatives who need privacy", "Guests with variable schedules", "A few days with a kitchenette", "Quick access by taxi, metro or public transport"],
        ctaReferer: "website_en_hospital_page_mid"
      },
      {
        title: "Hospitals often searched in the area",
        intro: "Exact distances should be checked in Google Maps based on time and route.",
        table: {
          headers: ["Hospital", "Why people look for accommodation here", "Distance / time"],
          rows: hospitalRows.en
        }
      },
      {
        title: "What helps during a hospital-related stay?",
        intro: "Serene Studio focuses on quiet, cleanliness, privacy and a booking flow without unnecessary calls.",
        cards: [
          { title: "Kitchenette", text: "You can use the fridge, microwave, coffee maker and kettle; there is no stove or hob." },
          { title: "Self check-in", text: "You can arrive after 14:00. After online check-in and completion of the required details, you use the code for the key box at the gate." },
          { title: "Quiet hours", text: "The 22:00-09:00 interval helps preserve a calm environment." }
        ],
        image: "kitchen"
      }
    ],
    faq: [
      { q: "Is Serene Studio suitable for relatives?", a: "Yes, it can suit relatives looking for a quiet private studio in Sector 2." },
      { q: "Can I self check in if I arrive in the evening?", a: "Yes, after booking you complete online check-in, and after the required details are completed you receive the code for the key box at the gate." },
      { q: "Is there a kitchenette for a few days?", a: "Yes, there is a fridge, microwave, coffee maker and kettle; there is no stove or hob." },
      { q: "Can I book by phone?", a: "No. We do not take bookings by phone. Price and availability are checked online by clicking the Book online button. The phone is for emergencies only; all stay information is in the guidebook, accessible any time through the same link used for online check-in." }
    ],
    finalCtaReferer: "website_en_hospital_page_final"
  }
];

const operationalRo: PageContent[] = [
  {
    path: "/info/",
    locale: "ro",
    translationPath: "/en/info/",
    title: "Informații utile pentru cazarea la Serene Studio",
    description: "Check-in online, verificare ID, taxa de oraș, regulament, guidebook și self check-in pentru oaspeții Serene Studio București.",
    keyword: "informatii Serene Studio, check-in online, self check-in Bucuresti, verificare ID",
    h1: "Informații utile pentru cazarea la Serene Studio",
    eyebrow: "Rezervare / Check-in online / Self check-in",
    heroText: "Rezervi online apăsând pe butonul Rezervă online, apoi completezi check-in-ul online cu verificare ID, selfie, taxa de oraș și semnătură pe regulament. La final se deschide guidebook-ul cu instrucțiunile pentru self-check-in.",
    heroImage: "entrance",
    heroCtaReferer: "website_info_hero",
    sections: [
      {
        title: "Cum fac rezervarea?",
        intro: "Rezervarea se face apăsând pe butonul Rezervă online; prețul și disponibilitatea se văd imediat.",
        paragraphs: ["Apasă Rezervă online, alege datele și finalizează rezervarea în sistemul securizat. Nu facem rezervări telefonic — telefonul este doar pentru urgențe."],
        ctaReferer: "website_info_booking"
      },
      {
        title: "Cum funcționează check-in-ul online?",
        intro: "După rezervare primești linkul pentru check-in-ul online. Parcurgi pașii în ordine, fără să sari etape; dacă o etapă nu este finalizată corect, codul de acces nu devine disponibil.",
        cards: [
          { title: "Verificare act de identitate", text: "Fotografiezi actul: buletin sau pasaport pentru oaspeții din UE; doar pasaport pentru oaspeții non-UE. Nu se acceptă niciun alt document. Fotografia trebuie să fie clară și nealterată. Nerespectarea condițiilor duce la anularea rezervării fără ramburs." },
          { title: "Selfie pe loc", text: "După actul de identitate faci un selfie chiar în acel moment, într-un cadru bine luminat, să se vadă clar fața. Selfie-ul nu poate fi încărcat din galerie." },
          { title: "Taxa de oraș", text: "Taxa de oraș se achită online, în fluxul de check-in, conform tarifului în vigoare." },
          { title: "Regulamentul Serene Studio", text: "Citești și iei la cunoștință regulamentul, apoi semnezi direct pe ecranul telefonului." },
          { title: "Guidebook și self-check-in", text: "La final se deschide guidebook-ul cu instrucțiunile complete pentru self-check-in: cum găsești cutia de chei de la poartă, cum folosești codul și cum te orientezi în studio." }
        ]
      },
      {
        title: "Guidebook-ul rămâne mereu la indemana",
        intro: "Guidebook-ul se deschide oricând prin același link folosit la check-in-ul online, fără cont sau parolă suplimentară.",
        bullets: [
          "Conține instrucțiunile pentru self-check-in și codul cutiei de chei de la poarta",
          "Răspunde la majoritatea întrebărilor uzuale: Wi-Fi, AC, microunde, terasă, parcare, transport",
          "Te rugăm să-l citești înainte să suni - aproape toate răspunsurile sunt acolo",
          "Telefonul rămâne pentru urgențe reale sau situații care nu sunt acoperite în guidebook"
        ]
      },
      {
        title: "Acces și self check-in",
        intro: "Check-in-ul este după 14:00, check-out-ul până la 11:00. Accesul este complet self-check-in, cu codul pentru cutia de chei de la poartă disponibil după finalizarea check-in-ului online.",
        bullets: ["Check-in după 14:00", "Check-out până la 11:00", "Check-in online finalizat înainte de sosire", "Codul cutiei de chei devine disponibil după verificare ID, selfie, taxa de oraș și semnarea regulamentului", "Caută linkul de check-in și guidebook în emailul de confirmare înainte să contactezi personalul"]
      },
      {
        title: "Parcare, fumat, copii și animale",
        intro: "Parcarea este gratuită pe stradă, fumatul este interzis în interior, copiii sunt acceptați, iar animalele nu sunt acceptate.",
        table: {
          headers: ["Subiect", "Răspuns"],
          rows: [
            ["Parcare", "Gratuită pe stradă; de obicei există locuri în apropiere, dar nu sunt rezervate nominal."],
            ["Fumat", "Interzis în interior; doar în zona exterioară indicata."],
            ["Copii", "Acceptați, dar dorm cu părinții în patul matrimonial."],
            ["Animale", "Nu sunt acceptate."],
            ["Plată și anulare", "Rezervările se pot anula oricând, însă sumele achitate nu se rambursează."]
          ]
        }
      }
    ],
    faq: [
      { q: "La ce oră este check-in-ul?", a: "Check-in-ul este după ora 14:00." },
      { q: "La ce oră este check-out-ul?", a: "Check-out-ul este până la ora 11:00." },
      { q: "Ce acte sunt acceptate la check-in?", a: "Buletin sau pasaport pentru oaspeții din UE; doar pasaport pentru oaspeții non-UE. Niciun alt document nu este acceptat. Actul se fotografiaza în timpul check-in-ului online." },
      { q: "De ce trebuie să fac selfie?", a: "Selfie-ul confirmă că persoana care face check-in-ul corespunde cu actul de identitate. Trebuie făcut pe loc, într-un cadru luminat, să se vadă clar." },
      { q: "Ce se întâmplă dacă pozele nu sunt clare?", a: "Pozele care nu sunt clare sau apar alterate duc la anularea rezervării fără ramburs. Asigură-te că actul și selfie-ul sunt vizibile, fără filtre și fără editări." },
      { q: "Ce este taxa de oraș?", a: "Este taxa locală datorată pentru cazarea în București. Se achita în fluxul de check-in online, conform tarifului în vigoare." },
      { q: "De ce semnez regulamentul?", a: "Semnătura confirmă că ai citit și ai luat la cunoștință regulile interne (orele de liniște, fumat, animale, garanție). Se semneaza direct pe ecranul telefonului." },
      { q: "Ce este guidebook-ul și cum il deschid?", a: "Guidebook-ul conține instrucțiunile pentru self-check-in și răspunsurile la întrebările uzuale. Se deschide prin același link folosit la check-in-ul online și rămâne disponibil oricând pe parcursul sejurului." },
      { q: "Când sun pe telefon?", a: "Telefonul este doar pentru urgențe. Nu facem rezervări telefonic. Toate informațiile pentru sejur le găsești în guidebook, accesibil oricând prin același link folosit la check-in-ul online — te rugăm să-l citești înainte să suni." },
      { q: "Cum primesc codul cutiei de chei?", a: "Codul devine disponibil în guidebook după finalizarea check-in-ului online (verificare ID, selfie, taxa de oraș și semnătură pe regulament)." }
    ],
    finalCtaReferer: "website_info_final"
  },
  {
    path: "/reguli/",
    locale: "ro",
    translationPath: "/en/rules/",
    title: "Reguli de cazare la Serene Studio București",
    description: "Reguli Serene Studio: check-in după 14:00, check-out până la 11:00, fumat interzis, fără animale, ore de liniște și garanție până la 500 lei.",
    keyword: "reguli Serene Studio, fumat interzis, garantie daune",
    h1: "Reguli de cazare la Serene Studio",
    eyebrow: "Actualizat: 30 aprilie 2026",
    heroText: "Regulile sunt clare pentru a păstra studioul curat, liniștit și potrivit pentru următorii oaspeți.",
    heroImage: "terrace",
    heroCtaReferer: "website_rules_hero",
    sections: [
      {
        title: "Regulile principale",
        intro: "Check-in-ul este după 14:00, check-out-ul este până la 11:00, iar orele de liniște sunt 22:00-09:00.",
        bullets: [
          "Fumatul este interzis în interior.",
          "Fumatul este permis doar în curte sau zona indicata.",
          "Animalele de companie nu sunt acceptate.",
          "Copiii sunt acceptați, dar dorm cu părinții în patul matrimonial.",
          "Petrecerile și evenimentele private nu sunt permise.",
          "Vizitatorii neînregistrați nu sunt permiși.",
          "Numărul de oaspeți nu poate depăși rezervarea.",
          "Actul de identitate poate fi solicitat conform legislației."
        ]
      },
      {
        title: "Daune, fumat și garanție",
        intro: "Oaspeții răspund pentru daune, iar garanția poate ajunge până la 500 lei.",
        paragraphs: [
          "Dacă se fumează în interior, se poate reține întreaga sumă de garanție, deoarece mirosul și curățarea afectează următorii oaspeți.",
          "Rezervările se pot anula oricând, însă sumele achitate nu se rambursează. Plățile și anulările sunt gestionate prin sistemul de rezervare folosit."
        ]
      },
      {
        title: "Verificare la check-in și actele acceptate",
        intro: "Identitatea se verifică online, în fluxul de check-in. Regulile sunt simple, dar stricte.",
        bullets: [
          "Buletin sau pasaport pentru oaspeții din UE; doar pasaport pentru oaspeții non-UE",
          "Niciun alt act nu este acceptat",
          "Fotografia actului trebuie făcută pe loc, sa fie clară și nealterată",
          "Selfie-ul se face după act, într-un cadru luminat, să se vadă clar fața",
          "Pozele neclare sau alterate duc la anularea rezervării fără ramburs",
          "După verificare se achită taxa de oraș și se semnează regulamentul",
          "La final se deschide guidebook-ul cu instrucțiunile de self-check-in"
        ]
      }
    ],
    faq: [
      { q: "Pot fuma în studio?", a: "Nu. Fumatul în interior este interzis și poate duce la reținerea integrală a garanției." },
      { q: "Sunt acceptate animalele?", a: "Nu, animalele de companie nu sunt acceptate." },
      { q: "Pot face petrecere?", a: "Nu, petrecerile și evenimentele private nu sunt permise." },
      { q: "Ce acte sunt acceptate la check-in?", a: "Buletin sau pasaport pentru oaspeții din UE; doar pasaport pentru oaspeții non-UE. Niciun alt document nu este acceptat." },
      { q: "Ce se întâmplă dacă pozele de la verificare nu sunt clare?", a: "Pozele neclare sau alterate duc la anularea rezervării fără ramburs." }
    ],
    finalCtaReferer: "website_rules_final"
  },
  {
    path: "/contact/",
    locale: "ro",
    translationPath: "/en/contact/",
    title: "Contact Serene Studio București - rezervări online directe",
    description: "Pentru prețuri și disponibilitate la Serene Studio folosește butonul Rezervă online. Contact pentru urgențe: telefon și email confirmate.",
    keyword: "contact Serene Studio, rezervare Serene Studio, serenestudio.ro@gmail.com",
    h1: "Contact Serene Studio",
    eyebrow: "Rezervări online",
    heroText: "Pentru prețuri, disponibilitate și rezervări, folosește butonul Rezervă online; sistemul îți arată datele disponibile și confirmă rezervarea pe loc.",
    heroImage: "entrance",
    heroCtaReferer: "website_contact_hero",
    sections: [
      {
        title: "Rezervări online",
        intro: "Nu facem rezervări telefonic — telefonul este doar pentru urgențe.",
        paragraphs: ["Apasă Rezervă online, alege datele și verifică prețul direct în pagina securizată de rezervare."],
        ctaReferer: "website_contact_booking"
      },
      {
        title: "Ai rezervat deja?",
        intro: "Caută emailul de confirmare, linkul pentru check-in online și guidebook și detaliile pentru cutia de chei înainte să contactezi personalul.",
        bullets: ["Verifică inbox și spam", "Finalizează check-in-ul online (ID, selfie, taxa de oraș, semnătură regulament)", "Citește guidebook-ul - majoritatea răspunsurilor sunt acolo", "Verifică instrucțiunile și codul pentru cutia de chei de la poartă", "Contactează personalul doar pentru urgențe sau probleme care nu sunt acoperite în guidebook"]
      },
      {
        title: "Adresa și contact pentru urgențe",
        intro: `${property.address}. Telefon: ${property.phone}. Email: ${property.email}.`,
        table: {
          headers: ["Canal", "Folosește pentru"],
          rows: [
            ["Buton Rezervă online", "Prețuri, disponibilitate și rezervare online"],
            ["Guidebook (link primit la check-in)", "Instrucțiuni self-check-in și răspunsuri uzuale"],
            [property.phone, "Doar pentru urgențe — nu facem rezervări telefonic"],
            [property.email, "Mesaje care nu sunt urgențe"]
          ]
        }
      }
    ],
    maps: true,
    faq: [
      { q: "Pot trimite formular pentru disponibilitate?", a: "Nu este necesar. Disponibilitatea se verifică online apăsând pe butonul Rezervă online." },
      { q: "Unde găsesc răspunsurile uzuale?", a: "În guidebook, accesibil prin același link folosit la check-in-ul online. Aproape toate întrebările uzuale sunt acoperite acolo." },
      { q: "Care este emailul corect?", a: `Emailul corect este ${property.email}.` }
    ],
    finalCtaReferer: "website_contact_final"
  },
  {
    path: "/rezerva/",
    locale: "ro",
    translationPath: "/en/book/",
    title: "Rezervă Serene Studio online - prețuri în timp real",
    description: "Alege datele, verifică prețul și finalizează rezervarea Serene Studio direct, prin pagina noastră securizată.",
    keyword: "rezerva Serene Studio, rezervare online studio Bucuresti",
    h1: "Rezervă Serene Studio online",
    eyebrow: "Prețuri în timp real · Confirmare imediată",
    heroText: "Alege datele, verifică prețul și finalizează rezervarea direct, într-o pagina securizată.",
    heroImage: "bed",
    heroCtaReferer: "website_book_hero",
    sections: [
      {
        title: "Cum se împarte fluxul între rezervare și check-in online",
        intro: "Apasă butonul Rezervă online pentru a vedea prețul și disponibilitatea, apoi finalizezi rezervarea. După confirmare, completezi check-in-ul online pentru a primi codul de acces.",
        paragraphs: [
          "Prețul și disponibilitatea sunt afișate în timp real pentru datele tale, iar plata și confirmarea sunt procesate securizat.",
          "Accesul în unitate rămâne complet self-check-in. Codul pentru cutia de chei de la poartă devine disponibil în guidebook după finalizarea check-in-ului online (verificare ID, selfie, taxa de oraș și semnarea regulamentului)."
        ],
        ctaReferer: "website_book_page_box"
      }
    ],
    faq: [
      { q: "Cum vad prețul și disponibilitatea?", a: "Apasă butonul Rezervă online și alege datele. Prețul și disponibilitatea sunt afișate în timp real pentru perioada aleasa." },
      { q: "Pot vedea prețul înainte de plata?", a: "Da, alegi datele și vezi prețul înainte de finalizarea rezervării." },
      { q: "Primesc confirmare online?", a: "Da, confirmarea ajunge pe email imediat după finalizarea rezervării." },
      { q: "Unde fac check-in-ul online?", a: "După rezervare primești pe email linkul pentru check-in online. Codul cutiei de chei devine disponibil după verificarea ID, selfie, taxa de oraș și semnarea regulamentului." },
      { q: "Pot modifica datele?", a: "Modificările se gestionează conform regulilor afișate la rezervare; sumele achitate nu se rambursează." }
    ],
    finalCtaReferer: "website_book_final"
  },
  {
    path: "/politica-confidentialitate/",
    locale: "ro",
    translationPath: "/en/privacy-policy/",
    title: "Politică de confidențialitate - Serene Studio",
    description: "Politică de confidențialitate pentru serenestudio.ro, fluxul de rezervare online și check-in-ul online cu verificare ID.",
    keyword: "politica confidentialitate Serene Studio",
    h1: "Politică de confidențialitate",
    eyebrow: "Serene Studio",
    heroText: "Această pagină explică ce date pot fi prelucrate când folosești serenestudio.ro, când finalizezi o rezervare online și când completezi check-in-ul online.",
    heroCtaReferer: "website_privacy_hero",
    sections: [
      {
        title: "Ce date prelucrăm?",
        intro: "Site-ul nu folosește analytics la lansare. Rezervarea și check-in-ul online sunt operate prin furnizori specializați, conform termenilor afișați la finalizarea rezervării.",
        paragraphs: [
          "Când ne contactezi prin email sau telefon, putem prelucra datele pe care le transmiți voluntar.",
          "Când apesi Rezervă online, ajungi pe pagina securizată de rezervare, unde se aplică termenii și politica furnizorului care operează sistemul de rezervare.",
          "După rezervare, sunt prelucrate datele necesare pentru check-in-ul online: actul de identitate (buletin sau pasaport, conform reglementărilor UE/non-UE), selfie pentru verificare, taxa de oraș și semnătură digitală pe regulament. Datele se folosesc strict pentru identificare, raportare locală și acces self-check-in."
        ]
      },
      {
        title: "Contact pentru date personale",
        intro: `Pentru solicitări legate de date personale, folosește emailul ${property.email}.`
      }
    ],
    finalCtaReferer: "website_privacy_final"
  },
  {
    path: "/politica-cookies/",
    locale: "ro",
    translationPath: "/en/cookie-policy/",
    title: "Politică cookies - Serene Studio",
    description: "Politică cookies pentru serenestudio.ro. Site-ul este lansat fără analytics în prima versiune.",
    keyword: "politica cookies Serene Studio",
    h1: "Politică cookies",
    eyebrow: "Fără analytics la lansare",
    heroText: "În prima versiune, serenestudio.ro nu încarcă analytics sau instrumente de tracking externe.",
    heroCtaReferer: "website_cookies_hero",
    sections: [
      {
        title: "Ce cookies folosește site-ul?",
        intro: "Site-ul static folosește doar funcționalitate esențială pentru navigare.",
        paragraphs: ["Dacă la lansare se adaugă GA4, Clarity sau hărți embed, politica și bannerul de consimțământ trebuie activate înainte de publicare."]
      }
    ],
    finalCtaReferer: "website_cookies_final"
  }
];

const operationalEn: PageContent[] = [
  {
    path: "/en/info/",
    locale: "en",
    translationPath: "/info/",
    title: "Useful information for your stay at Serene Studio",
    description: "Online check-in with ID verification, city tax, rules signature, guidebook and self check-in for Serene Studio Bucharest guests.",
    keyword: "Serene Studio information, online check-in, ID verification, self check-in Bucharest",
    h1: "Useful information for your stay at Serene Studio",
    eyebrow: "Booking / Online check-in / Self check-in",
    heroText: "Book online by clicking Book online, then complete online check-in with ID verification, selfie, city tax and signature on the house rules. At the end the guidebook opens with the self check-in instructions.",
    heroImage: "entrance",
    heroCtaReferer: "website_en_info_hero",
    sections: [
      {
        title: "How do I book?",
        intro: "Booking is made by clicking the Book online button; price and availability are shown immediately.",
        paragraphs: ["Click Book online, choose your dates and complete the booking in the secure system. We do not take bookings by phone — the phone is for emergencies only."],
        ctaReferer: "website_en_info_booking"
      },
      {
        title: "How does online check-in work?",
        intro: "After booking you receive the link for online check-in. Each step must be completed in order; if a step is not completed correctly, the access code does not become available.",
        cards: [
          { title: "Identity document verification", text: "Take a photo of your ID: ID card or passport for EU guests; passport only for non-EU guests. No other document is accepted. The photo must be clear and unaltered. Failing these conditions leads to cancellation of the booking with no refund." },
          { title: "Selfie on the spot", text: "Right after the ID, take a selfie at that moment, in well-lit conditions, with your face clearly visible. The selfie cannot be uploaded from the gallery." },
          { title: "City tax", text: "The city tax is paid online, in the check-in flow, at the rate in force." },
          { title: "House rules signature", text: "You read and acknowledge the rules, then sign directly on the phone screen." },
          { title: "Guidebook and self check-in", text: "At the end, the guidebook opens with full self check-in instructions: how to find the key box at the gate, how to use the code and how to find your way around the studio." }
        ]
      },
      {
        title: "The guidebook stays available at all times",
        intro: "The guidebook opens any time through the same link used for online check-in, with no extra account or password.",
        bullets: [
          "Contains the self check-in instructions and the key-box code at the gate",
          "Answers most everyday questions: Wi-Fi, AC, microwave, terrace, parking, transport",
          "Please read it before calling - almost every answer is in there",
          "The phone is for real emergencies or situations not covered by the guidebook"
        ]
      },
      {
        title: "Access and self check-in",
        intro: "Check-in is after 14:00 and check-out is by 11:00. Access is fully self check-in, with the key-box code available after online check-in is completed.",
        bullets: ["Check-in after 14:00", "Check-out by 11:00", "Online check-in completed before arrival", "Key-box code becomes available after ID verification, selfie, city tax and rules signature", "Look for the check-in link and guidebook in your confirmation email before contacting staff"]
      },
      {
        title: "Parking, smoking, children and pets",
        intro: "Parking is free on the street, smoking is not allowed inside, children are allowed and pets are not allowed.",
        table: {
          headers: ["Topic", "Answer"],
          rows: [
            ["Parking", "Free on the street; spaces are usually available nearby, but not reserved by name."],
            ["Smoking", "Not allowed inside; only in the indicated outdoor area."],
            ["Children", "Allowed, but they sleep with parents in the double bed."],
            ["Pets", "Not allowed."],
            ["Payment and cancellation", "Bookings can be cancelled at any time, but paid amounts are non-refundable."]
          ]
        }
      }
    ],
    faq: [
      { q: "What time is check-in?", a: "Check-in is after 14:00." },
      { q: "What time is check-out?", a: "Check-out is by 11:00." },
      { q: "Which documents are accepted at check-in?", a: "ID card or passport for EU guests; passport only for non-EU guests. No other document is accepted. The document is photographed during online check-in." },
      { q: "Why do I need to take a selfie?", a: "The selfie confirms that the person checking in matches the ID. It must be taken on the spot, in good light, with your face clearly visible." },
      { q: "What happens if my photos are unclear?", a: "Photos that are unclear or appear altered lead to cancellation of the booking with no refund. Make sure the document and selfie are visible, without filters or edits." },
      { q: "What is the city tax?", a: "It is the local tax owed for staying in Bucharest. It is paid online, during the check-in flow, at the rate in force." },
      { q: "Why do I sign the house rules?", a: "The signature confirms that you have read and acknowledged the internal rules (quiet hours, smoking, pets, deposit). It is signed directly on the phone screen." },
      { q: "What is the guidebook and how do I open it?", a: "The guidebook contains the self check-in instructions and answers to common questions. It opens through the same link used for online check-in and stays available at any time during your stay." },
      { q: "When should I call staff?", a: "The phone is for emergencies only. We do not take bookings by phone. All stay information is in the guidebook, accessible any time through the same link used for online check-in — please read it before calling." },
      { q: "How do I receive the key-box code?", a: "The code becomes available in the guidebook after online check-in is finalized (ID verification, selfie, city tax and rules signature)." }
    ],
    finalCtaReferer: "website_en_info_final"
  },
  {
    path: "/en/rules/",
    locale: "en",
    translationPath: "/reguli/",
    title: "Serene Studio Bucharest house rules",
    description: "Serene Studio rules: check-in after 14:00, check-out by 11:00, no indoor smoking, no pets, quiet hours and damage deposit up to 500 lei.",
    keyword: "Serene Studio rules, no smoking, damage deposit",
    h1: "House rules at Serene Studio",
    eyebrow: "Updated: 30 April 2026",
    heroText: "The rules keep the studio clean, quiet and ready for the next guests.",
    heroImage: "terrace",
    heroCtaReferer: "website_en_rules_hero",
    sections: [
      {
        title: "Main rules",
        intro: "Check-in is after 14:00, check-out is by 11:00, and quiet hours are 22:00-09:00.",
        bullets: [
          "Smoking is not allowed inside.",
          "Smoking is allowed only in the courtyard or indicated area.",
          "Pets are not allowed.",
          "Children are allowed, but they sleep with parents in the double bed.",
          "Parties and private events are not allowed.",
          "Unregistered visitors are not allowed.",
          "Guest count cannot exceed the booking.",
          "ID may be requested according to legal requirements."
        ]
      },
      {
        title: "Damage, smoking and deposit",
        intro: "Guests are responsible for damage, and the deposit may be up to 500 lei.",
        paragraphs: [
          "If smoking happens inside, the full deposit may be withheld because smell and cleaning affect the next guests.",
          "Bookings can be cancelled at any time, but paid amounts are non-refundable. Payments and cancellations are handled through the booking system used."
        ]
      },
      {
        title: "Check-in verification and accepted documents",
        intro: "Identity is verified online during check-in. The rules are simple but strict.",
        bullets: [
          "ID card or passport for EU guests; passport only for non-EU guests",
          "No other document is accepted",
          "The document photo must be taken on the spot, clear and unaltered",
          "A selfie is taken right after the document, in good light, with the face clearly visible",
          "Unclear or altered photos lead to cancellation of the booking with no refund",
          "After verification, the city tax is paid and the house rules are signed",
          "At the end, the guidebook opens with the self check-in instructions"
        ]
      }
    ],
    faq: [
      { q: "Can I smoke in the studio?", a: "No. Indoor smoking is prohibited and can lead to the full deposit being withheld." },
      { q: "Are pets accepted?", a: "No, pets are not accepted." },
      { q: "Can I host a party?", a: "No, parties and private events are not allowed." },
      { q: "Which documents are accepted at check-in?", a: "ID card or passport for EU guests; passport only for non-EU guests. No other document is accepted." },
      { q: "What happens if my verification photos are unclear?", a: "Unclear or altered photos lead to cancellation of the booking with no refund." }
    ],
    finalCtaReferer: "website_en_rules_final"
  },
  {
    path: "/en/contact/",
    locale: "en",
    translationPath: "/contact/",
    title: "Contact Serene Studio Bucharest - direct online bookings",
    description: "For Serene Studio prices and availability use the Book online button. Confirmed emergency contact: phone and email.",
    keyword: "contact Serene Studio, Serene Studio booking, serenestudio.ro@gmail.com",
    h1: "Contact Serene Studio",
    eyebrow: "Online bookings",
    heroText: "For prices, availability and bookings, use the Book online button; the system shows available dates and confirms the booking on the spot.",
    heroImage: "entrance",
    heroCtaReferer: "website_en_contact_hero",
    sections: [
      {
        title: "Online bookings",
        intro: "We do not take bookings by phone — the phone is for emergencies only.",
        paragraphs: ["Click Book online, choose dates and check the price directly on the secure booking page."],
        ctaReferer: "website_en_contact_booking"
      },
      {
        title: "Already booked?",
        intro: "Check your confirmation email, the link for online check-in and guidebook and the key-box details before contacting staff.",
        bullets: ["Check inbox and spam", "Complete online check-in (ID, selfie, city tax, rules signature)", "Read the guidebook - most answers are there", "Check the instructions and code for the key box at the gate", "Contact staff only for emergencies or situations not covered by the guidebook"]
      },
      {
        title: "Address and emergency contact",
        intro: `${property.address}. Phone: ${property.phone}. Email: ${property.email}.`,
        table: {
          headers: ["Channel", "Use for"],
          rows: [
            ["Book online button", "Prices, availability and online booking"],
            ["Guidebook (link sent at check-in)", "Self check-in instructions and everyday answers"],
            [property.phone, "Emergencies only — we do not take bookings by phone"],
            [property.email, "Non-urgent messages"]
          ]
        }
      }
    ],
    maps: true,
    faq: [
      { q: "Can I send a form for availability?", a: "It is not necessary. Availability is checked online by clicking the Book online button." },
      { q: "Where do I find everyday answers?", a: "In the guidebook, opened through the same link used for online check-in. Almost every common question is covered there." },
      { q: "What is the correct email?", a: `The correct email is ${property.email}.` }
    ],
    finalCtaReferer: "website_en_contact_final"
  },
  {
    path: "/en/book/",
    locale: "en",
    translationPath: "/rezerva/",
    title: "Book Serene Studio online - live prices",
    description: "Choose dates, check the price and complete your Serene Studio booking directly, on our secure page.",
    keyword: "book Serene Studio, online studio booking Bucharest",
    h1: "Book Serene Studio online",
    eyebrow: "Live prices · Instant confirmation",
    heroText: "Choose dates, check the price and complete your booking directly, on a secure page.",
    heroImage: "bed",
    heroCtaReferer: "website_en_book_hero",
    sections: [
      {
        title: "How the flow is split between booking and online check-in",
        intro: "Click Book online to see price and availability, then complete the booking. After confirmation you complete online check-in to receive the access code.",
        paragraphs: [
          "Price and availability are shown live for your dates, and payment and confirmation are processed securely.",
          "Access to the unit stays fully self check-in. The key-box code at the gate becomes available in the guidebook after online check-in is finalized (ID verification, selfie, city tax and rules signature)."
        ],
        ctaReferer: "website_en_book_page_box"
      }
    ],
    faq: [
      { q: "How do I see price and availability?", a: "Click the Book online button and choose your dates. Price and availability are shown live for the chosen period." },
      { q: "Can I see the price before payment?", a: "Yes, you choose dates and see the price before completing the booking." },
      { q: "Do I receive online confirmation?", a: "Yes, confirmation is emailed immediately after the booking is completed." },
      { q: "Where do I complete online check-in?", a: "After booking, you receive the link for online check-in by email. The key-box code becomes available after ID verification, selfie, city tax and rules signature." },
      { q: "Can I change the dates?", a: "Changes are handled according to the rules shown at booking; paid amounts are non-refundable." }
    ],
    finalCtaReferer: "website_en_book_final"
  },
  {
    path: "/en/privacy-policy/",
    locale: "en",
    translationPath: "/politica-confidentialitate/",
    title: "Privacy policy - Serene Studio",
    description: "Privacy policy for serenestudio.ro, the online booking flow and online check-in with ID verification.",
    keyword: "Serene Studio privacy policy",
    h1: "Privacy policy",
    eyebrow: "Serene Studio",
    heroText: "This page explains what data may be processed when you use serenestudio.ro, complete an online booking and complete online check-in.",
    heroCtaReferer: "website_en_privacy_hero",
    sections: [
      {
        title: "What data do we process?",
        intro: "The site does not use analytics at launch. Booking and online check-in are operated by specialized providers, under the terms displayed when you complete your booking.",
        paragraphs: [
          "When you contact us by email or phone, we may process the data you voluntarily send.",
          "When you click Book online, you reach the secure booking page, where the terms and policy of the provider operating the booking system apply.",
          "After booking, the data required for online check-in is processed: identity document (ID card or passport, in line with EU/non-EU rules), selfie for verification, city tax and digital signature on the house rules. The data is used strictly for identification, local reporting and self check-in access."
        ]
      },
      {
        title: "Privacy contact",
        intro: `For privacy requests, use ${property.email}.`
      }
    ],
    finalCtaReferer: "website_en_privacy_final"
  },
  {
    path: "/en/cookie-policy/",
    locale: "en",
    translationPath: "/politica-cookies/",
    title: "Cookie policy - Serene Studio",
    description: "Cookie policy for serenestudio.ro. The site launches without analytics in the first version.",
    keyword: "Serene Studio cookie policy",
    h1: "Cookie policy",
    eyebrow: "No analytics at launch",
    heroText: "In the first version, serenestudio.ro does not load analytics or external tracking tools.",
    heroCtaReferer: "website_en_cookies_hero",
    sections: [
      {
        title: "What cookies does the site use?",
        intro: "The static site uses only essential navigation functionality.",
        paragraphs: ["If GA4, Clarity or embedded maps are added at launch, this policy and a consent banner must be enabled before publication."]
      }
    ],
    finalCtaReferer: "website_en_cookies_final"
  }
];

const nearbyRo: PageContent[] = [
  {
    path: "/cazare-langa-spitalul-gomoiu-bucuresti/",
    locale: "ro",
    translationPath: "/en/accommodation-near-gomoiu-hospital-bucharest/",
    title: "Cazare lângă Spitalul Gomoiu București - Serene Studio",
    description:
      "Studio privat în Sector 2 București, la 180 m (2 minute pe jos) de Spitalul Clinic de Copii Dr. Victor Gomoiu (Bd. Basarabia 21). Self check-in, chicinetă, baie privată și rezervare online directă - ideal pentru părinți și bunici care își însoțesc copilul la spital.",
    keyword: "cazare langa Spitalul Gomoiu Bucuresti, cazare parinti Spitalul de Copii Gomoiu, Bd. Basarabia 21 Sector 2",
    h1: "Cazare lângă Spitalul de Copii Dr. Victor Gomoiu în București",
    eyebrow: "Sector 2 · Bd. Basarabia 21 · Părinți și însoțitori",
    heroText:
      "Serene Studio este o cazare privată și liniștită în Sector 2 București, la doar 180 m de Spitalul Clinic de Copii Dr. Victor Gomoiu (Bulevardul Basarabia 21) - 2 minute pe jos și se vede acoperișul spitalului din zona studioului. Studio de aproximativ 35 m2, cu pat matrimonial, chicinetă, baie privată și self check-in după ora 14:00 pe baza codului din guidebook.",
    heroImage: "overview",
    heroCtaReferer: "website_gomoiu_hero",
    proof: [
      { value: "~180 m", label: "2 min pe jos până la Gomoiu" },
      { value: "35 m2", label: "studio privat" },
      { value: "Self check-in", label: "acces după 14:00" },
      { value: "22-09", label: "ore de liniște" }
    ],
    sections: [
      {
        title: "Pentru cine este potrivit Serene Studio când mergi la Spitalul Gomoiu",
        intro:
          "Spitalul Clinic de Copii Dr. Victor Gomoiu este un spital pediatric de referință în București, cu secții de chirurgie pediatrică, pediatrie, neurologie și terapie intensivă pentru copii. Familiile care însoțesc copilul au nevoie de cazare apropiată, liniștită și flexibilă.",
        cards: [
          { title: "Părinți care însoțesc copilul", text: "Studio privat unde te poți odihni între vizite, cu chicinetă pentru micul dejun, o cafea caldă dimineața și baie proprie - fără să împarți spațiul cu alți oaspeți." },
          { title: "Bunici și aparținători din afara orașului", text: "Sosiri și plecări flexibile, self check-in după ora 14:00, fără coadă la recepție. Dacă ajungi seara târziu, codul cutiei de chei te așteaptă în guidebook." },
          { title: "Familii la sejur medical de câteva zile", text: "Rezervi un singur loc privat la 2 minute pe jos de Spitalul Gomoiu, eviți drumurile lungi prin oraș și te concentrezi pe sănătatea copilului." }
        ],
        ctaReferer: "website_gomoiu_quiet"
      },
      {
        title: "Cum arată Spitalul Gomoiu București",
        intro:
          "Un scurt video al Spitalului Clinic de Copii Dr. Victor Gomoiu (Bulevardul Basarabia 21, Sector 2). Util pentru părinții care vin prima dată la programare și vor să recunoască clădirea și zona din jur.",
        video: {
          base: "spitalul-gomoiu-bucuresti",
          poster: "/video/spitalul-gomoiu-bucuresti-poster.jpg",
          posterWebp: "/video/spitalul-gomoiu-bucuresti-poster.webp",
          durationSeconds: 6,
          uploadDate: "2026-04-30",
          width: 960,
          height: 644,
          name: {
            ro: "Spitalul Clinic de Copii Dr. Victor Gomoiu - vedere exterioară",
            en: "Dr. Victor Gomoiu Children's Clinical Hospital - exterior view"
          },
          description: {
            ro: "Filmare scurtă cu Spitalul Clinic de Copii Dr. Victor Gomoiu, Bulevardul Basarabia 21, Sector 2 București - utilă pentru părinții care vin prima dată la spital cu copilul și pentru însoțitorii care caută cazare aproape, la Serene Studio.",
            en: "Short clip of the Dr. Victor Victor Gomoiu Children's Clinical Hospital at Bulevardul Basarabia 21, Sector 2 Bucharest - useful for parents arriving with their child for the first time and for relatives looking for nearby accommodation at Serene Studio."
          },
          contentLocation: {
            name: "Spitalul Clinic de Copii Dr. Victor Gomoiu",
            address: "Bulevardul Basarabia 21, Sector 2, București 022102",
            lat: 44.4393,
            lon: 26.1486
          }
        }
      },
      {
        title: "Distanțele utile din zonă",
        intro:
          "Adresa Serene Studio: Strada Alexandru Zagoritz 12, Sector 2, București. Spitalul Clinic de Copii Dr. Victor Gomoiu se află pe Bulevardul Basarabia 21, în același Sector 2 - la doar 180 m, 2 minute pe jos, iar acoperișul spitalului se vede direct din zona studioului.",
        infographic: {
          variant: "distances",
          origin: "Serene Studio · Strada Alexandru Zagoritz 12, Sector 2",
          caption:
            "Distanțele sunt orientative. Verifică întotdeauna ruta în aplicația ta de navigație înainte de plecare.",
          distances: [
            { place: "Spitalul Clinic de Copii Dr. Victor Gomoiu", detail: "Bd. Basarabia 21 - chirurgie pediatrică, pediatrie, ATI copii", value: "~180 m, 2 min pe jos", mode: "walk", lat: 44.4393, lon: 26.1486 },
            { place: "Ambulatoriul Gomoiu (Sector 3)", detail: "Strada Rodul Pamantului 2-4 - consultații ambulatorii", value: "~1,5 km, 6 min cu mașina", mode: "drive", lat: 44.4232, lon: 26.1843 },
            { place: "Spitalul Monza", detail: "Strada Tony Bulandra 27 - cardiologie, chirurgie", value: "~2 km", mode: "drive", lat: 44.4464, lon: 26.1379 },
            { place: "Metrou Piața Muncii", detail: "Metrou către centru și Gara de Nord", value: "~4 min pe jos", mode: "metro", lat: 44.4366, lon: 26.1364 },
            { place: "Farmacii non-stop", detail: "Pe Mihai Bravu și Bulevardul Basarabia", value: "1-5 min pe jos", mode: "walk" }
          ]
        },
        ctaReferer: "website_gomoiu_distances"
      },
      {
        title: "Ce face diferența când vii cu copilul la spital",
        intro:
          "Serene Studio nu este unitate medicală și nu oferă servicii de îngrijire. Ce oferă este un mediu privat, curat și predictibil, cu un flux de rezervare gândit pentru părinți stresați.",
        bullets: [
          "Studio privat de aproximativ 35 m2 - rezervi întregul spațiu, fără colocatari",
          "Chicinetă cu frigider, microunde, aparat de cafea și fierbător (fără aragaz/plită)",
          "Wi-Fi rapid pentru video-call cu familia rămasă acasă sau pentru telemedicină",
          "Self check-in după 14:00 cu cod pentru cutia de chei (disponibil după check-in-ul online)",
          "Ore de liniște 22:00-09:00 - somn liniștit pentru noaptea de dinainte de operație sau după o zi grea",
          "Parcare gratuită pe stradă, de obicei disponibilă în apropiere",
          "Acces rapid către metrou Piața Muncii (4 minute pe jos) - util pentru drumuri prin oraș"
        ],
        ctaReferer: "website_gomoiu_features"
      }
    ],
    faq: [
      { q: "Care este adresa Spitalului Gomoiu din București?", a: "Spitalul Clinic de Copii Dr. Victor Gomoiu are sediul principal pe Bulevardul Basarabia 21, Sector 2, București, cod poștal 022102. Ambulatoriul se află la Strada Rodul Pamantului 2-4, Sector 3." },
      { q: "Cat de aproape este Serene Studio de Spitalul Gomoiu?", a: "Serene Studio (Strada Alexandru Zagoritz 12, Sector 2) este la doar 180 m de Spitalul Gomoiu - aproximativ 2 minute pe jos. Acoperișul spitalului se vede direct din zona studioului, deci ajungi pe jos fără să ai nevoie de mașină sau taxi." },
      { q: "Pot face check-in târziu dacă ies târziu de la spital?", a: "Da. Self check-in-ul funcționează după ora 14:00, fără restricție de seară. Codul cutiei de chei este disponibil în guidebook după finalizarea check-in-ului online (ID, selfie, taxa de oraș, semnătură regulament)." },
      { q: "Este potrivit pentru părinți care își însoțesc copilul?", a: "Da. Studioul este privat, liniștit, cu chicinetă și baie proprie - ideal pentru părinți care dorm puțin, mănâncă pe fugă și vor intimitate după o zi grea la spital." },
      { q: "Pot rămâne mai multe nopti pentru un sejur medical pediatric?", a: "Da, sejururile de câteva nopți sunt complet acceptate. Chicineta ajută la masa rapidă fără să depinzi de restaurante." },
      { q: "Ce documente sunt acceptate la check-in?", a: "Buletin sau pasaport pentru oaspeții din UE; doar pasaport pentru oaspeții non-UE. Niciun alt document nu este acceptat." }
    ],
    finalCtaReferer: "website_gomoiu_final"
  },
  {
    path: "/cazare-langa-spitalul-monza-bucuresti/",
    locale: "ro",
    translationPath: "/en/accommodation-near-monza-hospital-bucharest/",
    title: "Cazare lângă Spitalul Monza București - Serene Studio",
    description:
      "Studio privat în Sector 2 București, la câteva minute de Spitalul Monza (cardiologie, chirurgie). Self check-in, chicinetă, baie privată și rezervare online directă, fără apeluri.",
    keyword: "cazare langa Spitalul Monza Bucuresti, cazare cardiologie Monza, studio apartinatori",
    h1: "Cazare lângă Spitalul Monza în București",
    eyebrow: "Sector 2 · Cardiologie · Aparținători",
    heroText:
      "Serene Studio este un studio privat de aproximativ 35 m2, în Sector 2 București, la câteva minute distanță de Spitalul Monza. Pat matrimonial, chicinetă, baie privată, terasă și self check-in cu cod pentru cutia de chei după check-in-ul online.",
    heroImage: "overview",
    heroCtaReferer: "website_monza_hero",
    proof: [
      { value: "~2 km", label: "până la Spitalul Monza" },
      { value: "35 m2", label: "studio privat" },
      { value: "Self check-in", label: "acces după 14:00" },
      { value: "22-09", label: "ore de liniște" }
    ],
    sections: [
      {
        title: "Pentru cine este potrivit Serene Studio înainte sau după o vizită la Monza?",
        intro:
          "Spitalul Monza este cunoscut pentru cardiologie, chirurgie și proceduri planificate. Oaspeții care se cazează la Serene Studio înainte sau după o intervenție caută liniște, intimitate și un flux de rezervare simplu.",
        cards: [
          { title: "Pacienți cu programare", text: "Studio privat la câteva minute de spital, ideal pentru noaptea dinaintea internării sau pentru recuperarea ambulatorie." },
          { title: "Aparținători cu vizite multiple", text: "Spațiu liniștit unde dormi bine între vizite, cu chicinetă pentru o masă rapidă fără să depinzi de restaurante." },
          { title: "Familii din afara Bucureștiului", text: "Eviți hotelurile zgomotoase și stai într-o zonă rezidențială calmă, foarte aproape de Monza și de Piața Muncii." }
        ],
        ctaReferer: "website_monza_audience"
      },
      {
        title: "Cum arată Spitalul Monza București",
        intro:
          "Un scurt video al Spitalului Monza București din Sector 2, ca să știi ce să cauți când ajungi pe Strada Tony Bulandra 27. Util pentru pacienți la prima vizită și aparținători care nu cunosc zona.",
        video: {
          base: "spitalul-monza-bucuresti",
          poster: "/video/spitalul-monza-bucuresti-poster.jpg",
          posterWebp: "/video/spitalul-monza-bucuresti-poster.webp",
          durationSeconds: 6,
          uploadDate: "2026-04-30",
          width: 960,
          height: 631,
          name: {
            ro: "Spitalul Monza București - vedere exterioară",
            en: "Monza Hospital Bucharest - exterior view"
          },
          description: {
            ro: "Filmare scurtă cu Spitalul Monza București din Sector 2, pentru pacienții care merg prima dată la programare și aparținătorii care caută cazare aproape - Serene Studio este la aproximativ 2 km distanță.",
            en: "Short clip of Monza Hospital Bucharest in Sector 2, useful for patients arriving for the first time and relatives looking for nearby accommodation - Serene Studio is about 2 km away."
          },
          contentLocation: {
            name: "Spitalul Monza București",
            address: "Strada Tony Bulandra 27, Sector 2, București",
            lat: 44.4464,
            lon: 26.1379
          }
        }
      },
      {
        title: "Distanțele utile din zonă",
        intro:
          "Adresa Serene Studio: Strada Alexandru Zagoritz 12, Sector 2, București. Spitalul Monza se află pe Strada Tony Bulandra 27, Sector 2 - tot în zona Piața Muncii / Mihai Bravu.",
        infographic: {
          variant: "distances",
          origin: "Serene Studio · Strada Alexandru Zagoritz 12, Sector 2",
          caption:
            "Distanțele sunt orientative pentru un drum cu mașină sau taxi. Verifică întotdeauna în Google Maps înainte de plecare, mai ales cu trafic.",
          distances: [
            { place: "Spitalul Monza", detail: "Strada Tony Bulandra 27, Sector 2 - cardiologie și chirurgie", value: "~2 km cu mașina", mode: "drive", lat: 44.4464, lon: 26.1379 },
            { place: "Metrou Piața Muncii", detail: "Metrou către centru, Gara de Nord și Universitate", value: "~4 min pe jos", mode: "metro", lat: 44.4366, lon: 26.1364 },
            { place: "Farmacii non-stop", detail: "Pe Mihai Bravu și în Piața Muncii", value: "1-5 min pe jos", mode: "walk" },
            { place: "Mega Mall", detail: "Restaurante, supermarket și cinema", value: "~18-20 min pe jos", mode: "walk", lat: 44.4434, lon: 26.1500 },
            { place: "Aeroportul Henri Coandă (Otopeni)", detail: "Sosiri internaționale, cu tren via Gara de Nord", value: "tren + metrou sau taxi", mode: "train", lat: 44.5711, lon: 26.085 }
          ]
        },
        ctaReferer: "website_monza_distances"
      },
      {
        title: "Ce primești la Serene Studio",
        intro:
          "Studioul este gândit pentru oaspeți care vor liniște, curățenie și un flux fără fricțiune. Self check-in și guidebook digital, fără apeluri pentru rezervare sau acces.",
        bullets: [
          "Studio privat de aproximativ 35 m2, doar pentru tine",
          "Pat matrimonial cu saltea confortabilă și lenjerie curată",
          "Baie modernă privată cu duș, prosoape și articole de toaletă",
          "Chicinetă cu frigider, microunde, aparat de cafea și fierbător",
          "Wi-Fi rapid, TV, aer condiționat și încălzire centrală",
          "Self check-in cu cod pentru cutia de chei de la poartă",
          "Guidebook digital cu instrucțiunile complete - aproape toate răspunsurile sunt acolo"
        ],
        ctaReferer: "website_monza_features",
        image: "kitchen"
      }
    ],
    faq: [
      { q: "Cât este de la Serene Studio la Spitalul Monza?", a: "Spitalul Monza se află pe Strada Tony Bulandra 27, la aproximativ 2 km de Serene Studio - câteva minute cu mașina sau taxi, în funcție de trafic. Verifică ruta în Google Maps." },
      { q: "Pot rezerva pentru noaptea dinaintea unei intervenții la Monza?", a: "Da, sejururile scurte sunt complet acceptate. Apeși butonul Rezervă online, alegi datele și finalizezi rezervarea direct — nu facem rezervări telefonic." },
      { q: "Pot intra târziu dacă am operație dimineața devreme?", a: "Da. Self check-in-ul funcționează fără restricție de oră după 14:00. Codul cutiei de chei devine disponibil în guidebook după finalizarea check-in-ului online." },
      { q: "Este potrivit pentru recuperare după o intervenție ambulatorie?", a: "Studioul este privat, liniștit și cu baie proprie - dar nu oferă servicii medicale. Pentru recuperări complexe consultă întotdeauna recomandarea medicului." },
      { q: "Pot anula dacă intervenția se reprogramează?", a: "Rezervările se pot anula oricând, însă sumele achitate nu se rambursează. Verifică regulile afișate la rezervare." }
    ],
    finalCtaReferer: "website_monza_final"
  },
  {
    path: "/cazare-langa-mega-mall-bucuresti/",
    locale: "ro",
    translationPath: "/en/accommodation-near-mega-mall-bucharest/",
    title: "Cazare lângă Mega Mall București - Serene Studio în Sector 2",
    description:
      "Studio privat în Sector 2 București, la 18-20 minute pe jos de Mega Mall, cu acces rapid la Arena Națională, Piața Muncii și centrul orașului. Self check-in și rezervare online directă.",
    keyword: "cazare langa Mega Mall Bucuresti, cazare Sector 2 mall, studio Piata Muncii",
    h1: "Cazare lângă Mega Mall în București",
    eyebrow: "Sector 2 · Shopping · Cinema · Restaurante",
    heroText:
      "Serene Studio este un studio privat în Sector 2 București, la 18-20 de minute pe jos de Mega Mall și la câteva minute de Piața Muncii. Ideal pentru oaspeți care vor shopping, cinema sau o pauză la cafea aproape de cazare.",
    heroImage: "overview",
    heroCtaReferer: "website_megamall_hero",
    proof: [
      { value: "~18-20 min", label: "pe jos până la Mega Mall" },
      { value: "~14 min", label: "pe jos până la Arena Națională" },
      { value: "~4 min", label: "până la metrou Piața Muncii" },
      { value: "Self check-in", label: "după ora 14:00" }
    ],
    sections: [
      {
        title: "De ce e bun Serene Studio pentru o vizită la Mega Mall?",
        intro:
          "Mega Mall este unul dintre cele mai mari mall-uri din București, cu peste 200 de magazine, restaurante, supermarket Cora și cinema Grand Cinema & More. Serene Studio este suficient de aproape să ajungi pe jos și suficient de retras să nu auzi traficul de seară.",
        cards: [
          { title: "Cupluri la o escapadă de weekend", text: "Studio privat cu pat matrimonial și baie proprie. Ieși la cumpărături sau cinema la Mega Mall și te întorci într-un loc liniștit." },
          { title: "Călătorii business", text: "Wi-Fi rapid, self check-in și acces rapid către metrou Piața Muncii. Mega Mall îți oferă opțiuni rapide pentru cină sau cumpărături de ultim moment." },
          { title: "Familii cu copil mai mare", text: "Copiii sunt acceptați, iar mall-ul are zone de joacă, restaurante și cinema. Studioul are un singur pat matrimonial, așa că rezervă pentru maxim 2 adulți + copil." }
        ],
        ctaReferer: "website_megamall_audience"
      },
      {
        title: "Distanțele utile din zonă",
        intro:
          "Mega Mall se află pe Bulevardul Pierre de Coubertin 3-5, în Sector 2 - aproape de Arena Națională. Serene Studio este la 18-20 de minute pe jos sau 5-7 minute cu mașina, în funcție de trafic.",
        infographic: {
          variant: "distances",
          origin: "Serene Studio · Strada Alexandru Zagoritz 12, Sector 2",
          caption:
            "Pe jos timpii sunt orientativi pentru un mers relaxat. Cu mașina, verifică traficul în aplicația ta de navigație.",
          distances: [
            { place: "Mega Mall", detail: "Bulevardul Pierre de Coubertin 3-5 - 200+ magazine, cinema, restaurante", value: "~18-20 min pe jos", mode: "walk", lat: 44.4434, lon: 26.1500 },
            { place: "Arena Națională", detail: "Concerte, meciuri și evenimente", value: "~14 min pe jos", mode: "walk", lat: 44.4378, lon: 26.1521 },
            { place: "Bucur Obor", detail: "Magazinul universal istoric din Sector 2", value: "~10 min pe jos", mode: "walk", lat: 44.4474, lon: 26.1284 },
            { place: "Metrou Piața Muncii", detail: "Metrou către centru și Gara de Nord", value: "~4 min pe jos", mode: "metro", lat: 44.4366, lon: 26.1364 },
            { place: "Centrul Vechi", detail: "Restaurante, baruri și turism", value: "metrou sau taxi", mode: "metro" }
          ]
        },
        ctaReferer: "website_megamall_distances"
      },
      {
        title: "Ce găsești la Mega Mall",
        intro:
          "Mega Mall combină shopping clasic cu divertisment - cinema, food court, supermarket Cora și peste 200 de magazine, inclusiv branduri internaționale.",
        bullets: [
          "Peste 200 de magazine: modă, sport, electronice, frumusețe",
          "Grand Cinema & More cu 14 săli, inclusiv VIP și IMAX",
          "Supermarket Cora deschis până seara târziu",
          "Food court cu 30+ restaurante și cafenele",
          "Zonă de joacă pentru copii la etajul superior",
          "Parcare subterană și la suprafață pentru vizitatori"
        ],
        ctaReferer: "website_megamall_inside",
        image: "kitchenArch"
      }
    ],
    faq: [
      { q: "Cât este de la Serene Studio la Mega Mall?", a: "Mega Mall este la aproximativ 18-20 de minute pe jos de Serene Studio sau 5-7 minute cu mașina/taxi. Adresa Mega Mall: Bulevardul Pierre de Coubertin 3-5, Sector 2, București." },
      { q: "Pot ajunge pe jos seara la Mega Mall?", a: "Da, traseul trece prin zone bine iluminate și circulate. Verifică orele de închidere ale magazinelor și cinematografului înainte să pleci." },
      { q: "Mega Mall este aproape și de Arena Națională?", a: "Da. Mega Mall și Arena Națională sunt vecine - dacă ai bilet la concert sau meci, poți combina shoppingul cu evenimentul." },
      { q: "Pot parca la Mega Mall dacă vin cu mașina?", a: "Da, Mega Mall are parcare proprie subterană și la suprafață. Dacă stai la Serene Studio și vrei să lași mașina pe stradă, parcarea pe stradă este gratuită în zonă, de obicei disponibilă în apropiere." },
      { q: "Mega Mall are supermarket?", a: "Da, Mega Mall găzduiește un supermarket Cora cu program până seara târziu - util dacă vrei să cumperi mâncare pentru chicineta din studio." }
    ],
    finalCtaReferer: "website_megamall_final"
  }
];

const nearbyEn: PageContent[] = [
  {
    path: "/en/accommodation-near-gomoiu-hospital-bucharest/",
    locale: "en",
    translationPath: "/cazare-langa-spitalul-gomoiu-bucuresti/",
    title: "Accommodation near Dr. Victor Gomoiu Children's Hospital Bucharest - Serene Studio",
    description:
      "Private studio in Sector 2 Bucharest, 180 m (a 2-minute walk) from Dr. Victor Gomoiu Children's Clinical Hospital (Bd. Basarabia 21). Self check-in, kitchenette, private bathroom - ideal for parents and relatives accompanying their child.",
    keyword: "accommodation near Gomoiu Hospital Bucharest, parents Gomoiu children's hospital, Bd. Basarabia 21",
    h1: "Accommodation near Dr. Victor Gomoiu Children's Hospital Bucharest",
    eyebrow: "Sector 2 · Bd. Basarabia 21 · Parents and relatives",
    heroText:
      "Serene Studio is a private, quiet studio in Sector 2 Bucharest, only 180 m from the Dr. Victor Gomoiu Children's Clinical Hospital (Bulevardul Basarabia 21) - a 2-minute walk, with the hospital roof visible from the studio area. About 35 m2 with double bed, kitchenette, private bathroom and self check-in after 14:00 via the code in your guidebook.",
    heroImage: "overview",
    heroCtaReferer: "website_en_gomoiu_hero",
    proof: [
      { value: "~180 m", label: "2 min walk to Gomoiu" },
      { value: "35 m2", label: "private studio" },
      { value: "Self check-in", label: "after 14:00" },
      { value: "22-09", label: "quiet hours" }
    ],
    sections: [
      {
        title: "Who fits Serene Studio when visiting Gomoiu Hospital",
        intro:
          "The Dr. Victor Gomoiu Children's Clinical Hospital is a leading pediatric hospital in Bucharest, with pediatric surgery, pediatrics, neurology and pediatric ICU. Families accompanying their child need accommodation that is close, quiet and flexible.",
        cards: [
          { title: "Parents accompanying their child", text: "A private studio to rest between visits, with a kitchenette for breakfast, warm morning coffee and your own bathroom - no shared spaces with other guests." },
          { title: "Grandparents and out-of-town relatives", text: "Flexible arrivals and departures, self check-in after 14:00, no reception queue. If you arrive late at night, the key-box code waits for you in the guidebook." },
          { title: "Multi-day pediatric stays", text: "One private base 2 minutes on foot from Gomoiu Hospital - skip long commutes across the city and focus on the child's care." }
        ],
        ctaReferer: "website_en_gomoiu_quiet"
      },
      {
        title: "What Gomoiu Hospital Bucharest looks like",
        intro:
          "A short clip of the Dr. Victor Gomoiu Children's Clinical Hospital (Bulevardul Basarabia 21, Sector 2). Useful for parents arriving with their child for the first time who want to recognize the building and surrounding area.",
        video: {
          base: "spitalul-gomoiu-bucuresti",
          poster: "/video/spitalul-gomoiu-bucuresti-poster.jpg",
          posterWebp: "/video/spitalul-gomoiu-bucuresti-poster.webp",
          durationSeconds: 6,
          uploadDate: "2026-04-30",
          width: 960,
          height: 644,
          name: {
            ro: "Spitalul Clinic de Copii Dr. Victor Gomoiu - vedere exterioară",
            en: "Dr. Victor Gomoiu Children's Clinical Hospital - exterior view"
          },
          description: {
            ro: "Filmare scurtă cu Spitalul Clinic de Copii Dr. Victor Gomoiu, Bulevardul Basarabia 21, Sector 2 București - utilă pentru părinții care vin prima dată la spital cu copilul și pentru însoțitorii care caută cazare aproape, la Serene Studio.",
            en: "Short clip of the Dr. Victor Gomoiu Children's Clinical Hospital at Bulevardul Basarabia 21, Sector 2 Bucharest - useful for parents arriving with their child for the first time and for relatives looking for nearby accommodation at Serene Studio."
          },
          contentLocation: {
            name: "Dr. Victor Gomoiu Children's Clinical Hospital",
            address: "Bulevardul Basarabia 21, Sector 2, Bucharest 022102",
            lat: 44.4393,
            lon: 26.1486
          }
        }
      },
      {
        title: "Useful distances from Serene Studio",
        intro:
          "Serene Studio: Strada Alexandru Zagoritz 12, Sector 2. The Dr. Victor Gomoiu Children's Clinical Hospital is at Bulevardul Basarabia 21, in the same Sector 2 - only 180 m away, a 2-minute walk, with the hospital roof visible from the studio area.",
        infographic: {
          variant: "distances",
          origin: "Serene Studio · Strada Alexandru Zagoritz 12, Sector 2",
          caption: "Distances are indicative. Always check the route in your navigation app before leaving.",
          distances: [
            { place: "Dr. Victor Gomoiu Children's Clinical Hospital", detail: "Bd. Basarabia 21 - pediatric surgery, pediatrics, ICU", value: "~180 m, 2 min walk", mode: "walk", lat: 44.4393, lon: 26.1486 },
            { place: "Gomoiu Outpatient Clinic (Sector 3)", detail: "Strada Rodul Pamantului 2-4 - outpatient consultations", value: "~1.5 km, 6 min by car", mode: "drive", lat: 44.4232, lon: 26.1843 },
            { place: "Monza Hospital", detail: "Strada Tony Bulandra 27 - cardiology, surgery", value: "~2 km", mode: "drive", lat: 44.4464, lon: 26.1379 },
            { place: "Piata Muncii metro", detail: "Metro to city center and Gara de Nord", value: "~4 min walk", mode: "metro", lat: 44.4366, lon: 26.1364 },
            { place: "24/7 pharmacies nearby", detail: "On Mihai Bravu and Bulevardul Basarabia", value: "1-5 min walk", mode: "walk" }
          ]
        },
        ctaReferer: "website_en_gomoiu_distances"
      },
      {
        title: "What makes the difference when you bring a child for treatment",
        intro:
          "Serene Studio is not a medical facility and provides no care services. What it offers is a private, clean and predictable environment with a booking flow built for stressed parents.",
        bullets: [
          "Private studio of about 35 m2 - book the entire space, no shared rooms",
          "Kitchenette with fridge, microwave, coffee maker and kettle (no stove or hob)",
          "Fast Wi-Fi for video calls home or telemedicine",
          "Self check-in after 14:00 with the key-box code (delivered after online check-in)",
          "Quiet hours 22:00-09:00 - proper sleep before surgery day or after a heavy hospital day",
          "Free street parking, usually available nearby",
          "Quick access to Piata Muncii metro (4 min walk) - useful for trips around the city"
        ],
        ctaReferer: "website_en_gomoiu_features"
      }
    ],
    faq: [
      { q: "What is the address of Gomoiu Hospital Bucharest?", a: "Dr. Victor Gomoiu Children's Clinical Hospital is at Bulevardul Basarabia 21, Sector 2, Bucharest, postal code 022102. The outpatient clinic is at Strada Rodul Pamantului 2-4, Sector 3." },
      { q: "How close is Serene Studio to Gomoiu Hospital?", a: "Serene Studio (Strada Alexandru Zagoritz 12, Sector 2) is only 180 m from Gomoiu Hospital - about a 2-minute walk. The hospital roof is visible from the studio area, so you reach it on foot, no car or taxi needed." },
      { q: "Can I check in late after long hospital hours?", a: "Yes. Self check-in works after 14:00 with no evening cut-off. The key-box code becomes available in your guidebook once online check-in is finalized (ID, selfie, city tax, rules signature)." },
      { q: "Is it suitable for parents accompanying their child?", a: "Yes. The studio is private, quiet, with a kitchenette and private bathroom - ideal for parents who sleep little, eat on the go and want privacy after a heavy hospital day." },
      { q: "Can I stay multiple nights for a pediatric stay?", a: "Yes, multi-night stays are fully accepted. The kitchenette helps with quick meals without depending on restaurants." },
      { q: "Which documents are accepted at check-in?", a: "ID card or passport for EU guests; passport only for non-EU guests. No other document is accepted." }
    ],
    finalCtaReferer: "website_en_gomoiu_final"
  },
  {
    path: "/en/accommodation-near-monza-hospital-bucharest/",
    locale: "en",
    translationPath: "/cazare-langa-spitalul-monza-bucuresti/",
    title: "Accommodation near Monza Hospital Bucharest - Serene Studio",
    description:
      "Private studio in Sector 2 Bucharest, minutes from Monza Hospital (cardiology, surgery). Self check-in, kitchenette, private bathroom and direct online booking, no calls.",
    keyword: "accommodation near Monza Hospital Bucharest, cardiology Bucharest stay",
    h1: "Accommodation near Monza Hospital in Bucharest",
    eyebrow: "Sector 2 · Cardiology · Relatives",
    heroText:
      "Serene Studio is a private, quiet studio of about 35 m2 in Sector 2 Bucharest, minutes from Monza Hospital. Double bed, kitchenette, private bathroom, terrace and self check-in with the key-box code from your online check-in.",
    heroImage: "overview",
    heroCtaReferer: "website_en_monza_hero",
    proof: [
      { value: "~2 km", label: "to Monza Hospital" },
      { value: "35 m2", label: "private studio" },
      { value: "Self check-in", label: "after 14:00" },
      { value: "22-09", label: "quiet hours" }
    ],
    sections: [
      {
        title: "Who fits Serene Studio before or after a Monza visit?",
        intro:
          "Monza Hospital is known for cardiology, surgery and planned procedures. Guests staying at Serene Studio around a Monza visit look for quiet, privacy and a simple booking flow.",
        cards: [
          { title: "Patients with appointments", text: "Private studio minutes from the hospital, ideal for the night before admission or for outpatient recovery." },
          { title: "Relatives with multiple visits", text: "A quiet space to sleep well between hospital trips, with a kitchenette for a quick meal without depending on restaurants." },
          { title: "Out-of-town families", text: "Skip noisy hotels and stay in a calm residential area, very close to Monza and Piata Muncii." }
        ],
        ctaReferer: "website_en_monza_audience"
      },
      {
        title: "What Monza Hospital Bucharest looks like",
        intro:
          "A short clip of Monza Hospital Bucharest in Sector 2 so you know what to look for when you arrive at Strada Tony Bulandra 27. Useful for first-time patients and relatives unfamiliar with the area.",
        video: {
          base: "spitalul-monza-bucuresti",
          poster: "/video/spitalul-monza-bucuresti-poster.jpg",
          posterWebp: "/video/spitalul-monza-bucuresti-poster.webp",
          durationSeconds: 6,
          uploadDate: "2026-04-30",
          width: 960,
          height: 631,
          name: {
            ro: "Spitalul Monza București - vedere exterioară",
            en: "Monza Hospital Bucharest - exterior view"
          },
          description: {
            ro: "Filmare scurtă cu Spitalul Monza București din Sector 2, pentru pacienții care merg prima dată la programare și aparținătorii care caută cazare aproape - Serene Studio este la aproximativ 2 km distanță.",
            en: "Short clip of Monza Hospital Bucharest in Sector 2, useful for patients arriving for the first time and relatives looking for nearby accommodation - Serene Studio is about 2 km away."
          },
          contentLocation: {
            name: "Monza Hospital Bucharest",
            address: "Strada Tony Bulandra 27, Sector 2, Bucharest",
            lat: 44.4464,
            lon: 26.1379
          }
        }
      },
      {
        title: "Useful distances from Serene Studio",
        intro:
          "Serene Studio: Strada Alexandru Zagoritz 12, Sector 2, Bucharest. Monza Hospital: Strada Tony Bulandra 27, Sector 2 - the same Piata Muncii / Mihai Bravu area.",
        infographic: {
          variant: "distances",
          origin: "Serene Studio · Strada Alexandru Zagoritz 12, Sector 2",
          caption: "Distances are indicative for a car or taxi ride. Always check Google Maps before leaving, especially with traffic.",
          distances: [
            { place: "Monza Hospital", detail: "Strada Tony Bulandra 27, Sector 2 - cardiology and surgery", value: "~2 km by car", mode: "drive", lat: 44.4464, lon: 26.1379 },
            { place: "Piata Muncii metro", detail: "Metro to city center, Gara de Nord and Universitate", value: "~4 min walk", mode: "metro", lat: 44.4366, lon: 26.1364 },
            { place: "24/7 pharmacies", detail: "On Mihai Bravu and around Piata Muncii", value: "1-5 min walk", mode: "walk" },
            { place: "Mega Mall", detail: "Restaurants, supermarket and cinema", value: "~18-20 min walk", mode: "walk", lat: 44.4434, lon: 26.1500 },
            { place: "Henri Coanda Airport (Otopeni)", detail: "International arrivals via train + Gara de Nord", value: "train + metro or taxi", mode: "train", lat: 44.5711, lon: 26.085 }
          ]
        },
        ctaReferer: "website_en_monza_distances"
      },
      {
        title: "What you get at Serene Studio",
        intro:
          "The studio is built for guests who want quiet, cleanliness and a friction-free flow. Self check-in and a digital guidebook, no calls for booking or access.",
        bullets: [
          "Private studio of about 35 m2, just for you",
          "Double bed with comfortable mattress and clean linen",
          "Modern private bathroom with shower, towels and toiletries",
          "Kitchenette with fridge, microwave, coffee maker and kettle",
          "Fast Wi-Fi, TV, air conditioning and central heating",
          "Self check-in with the key-box code at the gate",
          "Digital guidebook with full instructions - almost every answer is there"
        ],
        ctaReferer: "website_en_monza_features",
        image: "kitchen"
      }
    ],
    faq: [
      { q: "How far is Serene Studio from Monza Hospital?", a: "Monza Hospital is at Strada Tony Bulandra 27, about 2 km from Serene Studio - a few minutes by car or taxi depending on traffic. Check the route in Google Maps." },
      { q: "Can I book for the night before a Monza procedure?", a: "Yes, short stays are fully accepted. Click Book online, choose your dates and complete the booking directly, no phone call." },
      { q: "Can I check in late if I have early-morning surgery?", a: "Yes. Self check-in works without an evening cut-off after 14:00. The key-box code becomes available in your guidebook after the online check-in is finalized." },
      { q: "Is it suitable for outpatient recovery?", a: "The studio is private, quiet and has a private bathroom - but it offers no medical care. For complex recovery, always follow your doctor's recommendations." },
      { q: "Can I cancel if my procedure is rescheduled?", a: "Bookings can be cancelled at any time, but paid amounts are non-refundable. Check the rules shown at booking." }
    ],
    finalCtaReferer: "website_en_monza_final"
  },
  {
    path: "/en/accommodation-near-mega-mall-bucharest/",
    locale: "en",
    translationPath: "/cazare-langa-mega-mall-bucuresti/",
    title: "Accommodation near Mega Mall Bucharest - Serene Studio in Sector 2",
    description:
      "Private studio in Sector 2 Bucharest, 18-20 minutes on foot from Mega Mall, with quick access to the National Arena, Piata Muncii and the city center. Self check-in and direct online booking.",
    keyword: "accommodation near Mega Mall Bucharest, Sector 2 mall stay, Piata Muncii studio",
    h1: "Accommodation near Mega Mall in Bucharest",
    eyebrow: "Sector 2 · Shopping · Cinema · Restaurants",
    heroText:
      "Serene Studio is a private studio in Sector 2 Bucharest, 18-20 minutes on foot from Mega Mall and minutes from Piata Muncii. Ideal for guests who want shopping, cinema or coffee close to where they sleep.",
    heroImage: "overview",
    heroCtaReferer: "website_en_megamall_hero",
    proof: [
      { value: "~18-20 min", label: "on foot to Mega Mall" },
      { value: "~14 min", label: "on foot to the National Arena" },
      { value: "~4 min", label: "to Piata Muncii metro" },
      { value: "Self check-in", label: "after 14:00" }
    ],
    sections: [
      {
        title: "Why Serene Studio works for a Mega Mall visit",
        intro:
          "Mega Mall is one of Bucharest's largest malls - 200+ stores, restaurants, a Cora supermarket and Grand Cinema & More. Serene Studio is close enough to walk and quiet enough to sleep without traffic noise.",
        cards: [
          { title: "Couples on a weekend break", text: "Private studio with double bed and own bathroom. Shop or watch a movie at Mega Mall, then return to a calm space." },
          { title: "Business travelers", text: "Fast Wi-Fi, self check-in and quick access to Piata Muncii metro. Mega Mall offers fast options for dinner or last-minute shopping." },
          { title: "Families with an older child", text: "Children are allowed; the mall has play zones, restaurants and a cinema. The studio has one double bed - book for up to 2 adults + a child." }
        ],
        ctaReferer: "website_en_megamall_audience"
      },
      {
        title: "Useful distances from Serene Studio",
        intro:
          "Mega Mall is at Bulevardul Pierre de Coubertin 3-5, in Sector 2 - next to the National Arena. From Serene Studio, it's 18-20 minutes on foot or 5-7 minutes by car, depending on traffic.",
        infographic: {
          variant: "distances",
          origin: "Serene Studio · Strada Alexandru Zagoritz 12, Sector 2",
          caption: "On foot, times are indicative for a relaxed walk. By car, check traffic in your navigation app.",
          distances: [
            { place: "Mega Mall", detail: "Bulevardul Pierre de Coubertin 3-5 - 200+ stores, cinema, restaurants", value: "~18-20 min walk", mode: "walk", lat: 44.4434, lon: 26.1500 },
            { place: "National Arena", detail: "Concerts, matches and major events", value: "~14 min walk", mode: "walk", lat: 44.4378, lon: 26.1521 },
            { place: "Bucur Obor", detail: "Historic department store in Sector 2", value: "~10 min walk", mode: "walk", lat: 44.4474, lon: 26.1284 },
            { place: "Piata Muncii metro", detail: "Metro to city center and Gara de Nord", value: "~4 min walk", mode: "metro", lat: 44.4366, lon: 26.1364 },
            { place: "Old Town", detail: "Restaurants, bars and sightseeing", value: "metro or taxi", mode: "metro" }
          ]
        },
        ctaReferer: "website_en_megamall_distances"
      },
      {
        title: "What's inside Mega Mall",
        intro:
          "Mega Mall combines classic shopping with entertainment - cinema, food court, Cora supermarket and 200+ stores including international brands.",
        bullets: [
          "200+ stores: fashion, sports, electronics, beauty",
          "Grand Cinema & More with 14 screens, including VIP and IMAX",
          "Cora supermarket open until late in the evening",
          "Food court with 30+ restaurants and cafes",
          "Children's play area on the upper floor",
          "Underground and surface parking for visitors"
        ],
        ctaReferer: "website_en_megamall_inside",
        image: "kitchenArch"
      }
    ],
    faq: [
      { q: "How far is Serene Studio from Mega Mall?", a: "Mega Mall is about 18-20 minutes on foot from Serene Studio, or 5-7 minutes by car/taxi. Mega Mall address: Bulevardul Pierre de Coubertin 3-5, Sector 2, Bucharest." },
      { q: "Can I walk to Mega Mall in the evening?", a: "Yes, the route runs through well-lit, busy streets. Check the closing times of the stores and cinema before you leave." },
      { q: "Is Mega Mall close to the National Arena?", a: "Yes. Mega Mall and the National Arena are right next to each other - if you have a concert or match ticket, you can combine shopping with the event." },
      { q: "Can I park at Mega Mall if I arrive by car?", a: "Yes, Mega Mall has its own underground and surface parking. If you stay at Serene Studio and want to leave the car on the street, street parking is free in the area, usually available nearby." },
      { q: "Does Mega Mall have a supermarket?", a: "Yes, Mega Mall hosts a Cora supermarket open until late in the evening - useful for buying food for the kitchenette in your studio." }
    ],
    finalCtaReferer: "website_en_megamall_final"
  }
];

pages.push(...operationalRo, ...operationalEn, ...nearbyRo, ...nearbyEn);

export function getPage(path: string) {
  const page = pages.find((item) => item.path === path);
  if (!page) throw new Error(`Page not found: ${path}`);
  return page;
}
