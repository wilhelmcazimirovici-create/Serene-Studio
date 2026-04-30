import { amenities, hospitalRows, locationRows, property, reviews } from "./site";
import type { PageContent } from "./types";
import { arenaPhotoSection, arenaVideoSection } from "./arena-media";

const homeProofRo = [
  { value: "4 min", label: "pana la metrou Piata Muncii" },
  { value: "14 min", label: "pe jos pana la Arena Nationala" },
  { value: "35 m2", label: "studio privat" },
  { value: "22-09", label: "ore de liniste" }
];

const homeProofEn = [
  { value: "4 min", label: "to Piata Muncii metro" },
  { value: "14 min", label: "walk to the National Arena" },
  { value: "35 m2", label: "private studio" },
  { value: "22-09", label: "quiet hours" }
];

export const pages: PageContent[] = [
  {
    path: "/",
    locale: "ro",
    translationPath: "/en/",
    title: "Serene Studio Bucuresti - cazare langa Piata Muncii",
    description:
      "Studio privat in Bucuresti, la 4 minute de metrou Piata Muncii si aproape de Arena Nationala. Chicineta, terasa, Wi-Fi rapid, parcare si self check-in complet.",
    keyword: "Serene Studio Bucuresti, cazare Piata Muncii, cazare Arena Nationala",
    h1: "Serene Studio Bucuresti",
    eyebrow: "Piata Muncii · Arena Nationala · Sector 2",
    heroText:
      "Studio privat si linistit in Bucuresti, la 4 minute de metrou Piata Muncii si la aproximativ 14 minute pe jos de Arena Nationala. Ai chicineta, terasa, Wi-Fi rapid, parcare gratuita pe strada si self check-in complet, cu cod pentru cutia de chei de la poarta dupa check-in-ul online.",
    heroImage: "bed",
    heroCtaReferer: "website_home_hero",
    secondaryHref: "/studio/",
    proof: homeProofRo,
    sections: [
      {
        title: "Serene Studio este pentru oaspeti care vor liniste",
        intro:
          "Serene Studio este potrivit pentru cupluri, calatorii business, participanti la evenimente pe Arena Nationala si oaspeti care au nevoie de acces rapid la spitalele din zona.",
        cards: [
          { title: "Pentru doua persoane", text: "Studioul are un pat matrimonial si functioneaza cel mai bine pentru unu sau doi adulti." },
          { title: "Pentru familii cu copil", text: "Copiii sunt acceptati, dar dorm cu parintii in acelasi pat matrimonial; nu exista pat suplimentar." },
          { title: "Pentru sosiri flexibile", text: "Dupa rezervare completezi check-in-ul online. Dupa completarea datelor necesare, primesti codul de acces pentru cutia de chei de la poarta." }
        ],
        ctaReferer: "website_home_quiet"
      },
      {
        title: "Ce ai in studio",
        intro: "Ai intregul spatiu privat, cu facilitati concrete pentru un sejur scurt sau de cateva zile.",
        bullets: amenities.ro,
        image: "overview"
      },
      {
        title: "Rezervi online, faci check-in online si intri singur",
        intro:
          "Rezervarea se face apasand pe butonul Rezerva online; pretul si disponibilitatea se vad imediat pentru datele tale.",
        paragraphs: [
          "Apesi Rezerva online, alegi datele, verifici pretul si finalizezi rezervarea in pagina securizata.",
          "Dupa confirmare primesti detaliile rezervarii si completezi check-in-ul online. Dupa completarea datelor necesare, primesti codul de acces pentru cutia de chei de la poarta. Pentru disponibilitate nu este nevoie sa suni."
        ],
        ctaReferer: "website_home_booking_flow"
      },
      {
        title: "Esti aproape de Piata Muncii, Arena Nationala si spitale",
        intro:
          "Adresa este Strada Alexandru Zagoritz 12, Sector 2, Bucuresti, intr-o zona rezidentiala linistita, aproape de metrou si de traseele utile din estul orasului.",
        infographic: {
          variant: "distances",
          origin: "Serene Studio · Strada Alexandru Zagoritz 12, Sector 2, Bucuresti",
          caption:
            "Distantele sunt orientative pentru un mers pe jos relaxat. Verifica ruta in aplicatia ta de navigatie inainte de plecare.",
          distances: [
            { place: "Metrou Piata Muncii", detail: "Linia M1 catre centru, Gara de Nord si Universitate", value: "~4 min pe jos", mode: "metro", lat: 44.4366, lon: 26.1364 },
            { place: "Arena Nationala", detail: "Concerte, meciuri si evenimente mari", value: "~14 min pe jos", mode: "walk", lat: 44.4378, lon: 26.1521 },
            { place: "Metrou Iancului", detail: "Statie alternativa pe linia M1", value: "~1,1 km", mode: "metro", lat: 44.4434, lon: 26.1283 },
            { place: "Mega Mall", detail: "Cumparaturi, restaurante si cinema", value: "~18-20 min pe jos", mode: "walk", lat: 44.4434, lon: 26.1500 },
            { place: "Parcul IOR / Alexandru Ioan Cuza", detail: "Plimbari si relaxare langa lac", value: "metrou, taxi sau transport public", mode: "metro", lat: 44.4209, lon: 26.1652 }
          ]
        },
        ctaReferer: "website_home_location"
      },
      {
        title: "Descopera zona din jurul Serene Studio",
        intro:
          "Pagini dedicate pentru oaspetii care vin cu un scop clar - vizita la spital, eveniment la Arena Nationala sau o iesire la mall.",
        cards: [
          { eyebrow: "Spital de copii", title: "Cazare langa Spitalul Gomoiu", text: "Studio privat la ~1,5 km de Spitalul Clinic de Copii Dr. Victor Gomoiu (Bd. Basarabia 21). Pentru parinti si insotitori.", href: "/cazare-langa-spitalul-gomoiu-bucuresti/" },
          { eyebrow: "Cardiologie", title: "Cazare langa Spitalul Monza", text: "Studio privat in Sector 2, la ~2 km de Spitalul Monza (Str. Tony Bulandra 27). Pentru pacienti si apartinatori.", href: "/cazare-langa-spitalul-monza-bucuresti/" },
          { eyebrow: "Concerte si meciuri", title: "Cazare langa Arena Nationala", text: "La ~14 minute pe jos de stadion. Self check-in, fara apeluri, ideal pentru concerte si meciuri.", href: "/cazare-langa-arena-nationala/" },
          { eyebrow: "Shopping si cinema", title: "Cazare langa Mega Mall", text: "La ~18-20 min pe jos de Mega Mall si vecin cu Arena Nationala. Pentru shopping, restaurante si cinema.", href: "/cazare-langa-mega-mall-bucuresti/" },
          { eyebrow: "Spitale in zona", title: "Cazare langa spitalele din Sector 2", text: "Pagina-hub pentru apartinatorii care cauta cazare in apropierea spitalelor importante din estul Bucurestiului.", href: "/cazare-langa-spitale-bucuresti/" }
        ]
      },
      {
        title: "Articole utile despre zona Serene Studio",
        intro:
          "Citeste ghidul de zona inainte sa rezervi: trasee cu metroul, spitale apropiate, evenimente la stadion si obiective in raza de 3-5 km.",
        cards: [
          { eyebrow: "Top 7 obiective", title: "Top obiective langa Serene Studio (3-5 km)", text: "Spitale, mall-uri, stadioane, parcuri si Centrul Vechi - toate la cativa kilometri de studio.", href: "/blog/obiective-langa-serene-studio-bucuresti-3-5-km/" },
          { eyebrow: "Self check-in", title: "Self check-in in Bucuresti - cazare in studio privat", text: "Cum functioneaza fluxul: rezervare online, check-in online cu ID si selfie, codul cutiei de chei in guidebook.", href: "/blog/self-check-in-bucuresti-cazare-studio-privat/" },
          { eyebrow: "Stadion", title: "Cazare langa Stadionul Dinamo Bucuresti", text: "La ~3 km de stadion. Cum ajungi cu masina sau metroul si de ce conteaza o zona rezidentiala dupa meci.", href: "/blog/cazare-langa-stadionul-dinamo-bucuresti/" },
          { eyebrow: "Centrul Vechi", title: "Cum ajungi de la Serene Studio la Centrul Vechi cu metroul", text: "Ghid practic: traseu M1 de la Piata Muncii pana la Lipscani in 20-25 minute, plus alternative cu taxi.", href: "/blog/cum-ajungi-de-la-serene-studio-la-centrul-vechi-bucuresti/" }
        ]
      },
      {
        title: "Recenzii reale, fara scor static neverificat",
        intro:
          "Recenziile de mai jos provin din feedback existent; scorul actualizat trebuie verificat dinamic pe platformele de rezervare inainte de afisare.",
        cards: reviews.ro.map((review) => ({ title: review.name, text: review.quote })),
        variant: "reviews"
      }
    ],
    faq: [
      { q: "Cum verific pretul si disponibilitatea?", a: "Apasa butonul Rezerva online. Sistemul afiseaza datele disponibile si pretul pentru perioada aleasa." },
      { q: "Cum intru in studio?", a: "Unitatea este complet self-check-in. Dupa check-in-ul online si completarea datelor necesare, primesti codul de acces pentru cutia de chei de la poarta." },
      { q: "Pot suna pentru disponibilitate?", a: "Disponibilitatea se verifica online, prin butonul Rezerva online. Telefonul este pentru urgente sau clarificari dupa rezervare." },
      { q: "Ce acte sunt acceptate la check-in?", a: "Buletin sau pasaport pentru oaspetii din UE; doar pasaport pentru oaspetii non-UE. Niciun alt document nu este acceptat." },
      { q: "Copiii sunt acceptati?", a: "Da, copiii sunt acceptati, dar dorm cu parintii in acelasi pat matrimonial; nu exista pat suplimentar." },
      { q: "Exista parcare?", a: "Parcarea este gratuita pe strada. De obicei exista locuri disponibile in apropiere, dar locul nu este rezervat nominal." },
      { q: "Pot fuma in interior?", a: "Nu. Fumatul este interzis in interior; se poate fuma doar in zona exterioara indicata." }
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
          "After confirmation you receive the booking details and complete online check-in. After the required details are completed, you receive the access code for the key box at the gate. You do not need to call for availability."
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
            { place: "Piata Muncii metro", detail: "M1 line to the city center, Gara de Nord and Universitate", value: "~4 min walk", mode: "metro", lat: 44.4366, lon: 26.1364 },
            { place: "National Arena", detail: "Concerts, matches and major events", value: "~14 min walk", mode: "walk", lat: 44.4378, lon: 26.1521 },
            { place: "Iancului metro", detail: "Alternative station on the M1 line", value: "~1.1 km", mode: "metro", lat: 44.4434, lon: 26.1283 },
            { place: "Mega Mall", detail: "Shopping, restaurants and cinema", value: "~18-20 min walk", mode: "walk", lat: 44.4434, lon: 26.1500 },
            { place: "IOR / Alexandru Ioan Cuza Park", detail: "Walks and lakeside relaxation", value: "metro, taxi or public transport", mode: "metro", lat: 44.4209, lon: 26.1652 }
          ]
        },
        ctaReferer: "website_en_home_location"
      },
      {
        title: "Discover the area around Serene Studio",
        intro:
          "Dedicated pages for guests with a clear purpose - a hospital visit, a National Arena event or a mall trip.",
        cards: [
          { eyebrow: "Children's hospital", title: "Stay near Gomoiu Children's Hospital", text: "Private studio about 1.5 km from Dr. Victor Gomoiu Children's Clinical Hospital (Bd. Basarabia 21). For parents and relatives.", href: "/en/accommodation-near-gomoiu-hospital-bucharest/" },
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
          { eyebrow: "Top 7 places", title: "Top things to do near Serene Studio (3-5 km)", text: "Hospitals, malls, stadiums, parks and the Old Town - all within a few kilometers of the studio.", href: "/en/blog/things-to-do-near-serene-studio-bucharest-3-5-km/" },
          { eyebrow: "Self check-in", title: "Self check-in in Bucharest - private studio accommodation", text: "How the flow works: online booking, online check-in with ID and selfie, key-box code in the guidebook.", href: "/en/blog/self-check-in-bucharest-private-studio/" },
          { eyebrow: "Stadium", title: "Stay near Dinamo Stadium Bucharest", text: "About 3 km from the stadium. How to get there by car or metro and why a residential area helps after the match.", href: "/en/blog/accommodation-near-dinamo-stadium-bucharest/" },
          { eyebrow: "Old Town", title: "How to get from Serene Studio to the Old Town by metro", text: "Practical guide: M1 from Piata Muncii to Lipscani in 20-25 minutes, plus taxi alternatives.", href: "/en/blog/how-to-get-from-serene-studio-to-old-town-bucharest/" }
        ]
      },
      {
        title: "Real reviews without an unverified static score",
        intro:
          "The reviews below are based on existing guest feedback; the current score should be checked dynamically on booking platforms before display.",
        cards: reviews.en.map((review) => ({ title: review.name, text: review.quote })),
        variant: "reviews"
      }
    ],
    faq: [
      { q: "How do I check price and availability?", a: "Click the Book online button. The system shows available dates and the price for your stay." },
      { q: "How do I enter the studio?", a: "The unit is fully self check-in. After online check-in and completion of the required details, you receive the access code for the key box at the gate." },
      { q: "Should I call for availability?", a: "Availability is checked online via the Book online button. The phone is for emergencies or clarifications after booking." },
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
    title: "Studio privat in Bucuresti cu chicineta si terasa - Serene Studio",
    description:
      "Vezi ce include Serene Studio Bucuresti: pat matrimonial, chicineta, baie moderna, terasa, Wi-Fi rapid, self check-in si parcare gratuita pe strada.",
    keyword: "studio privat Bucuresti, chicineta, terasa, self check-in",
    h1: "Studio privat in Bucuresti, cu chicineta si terasa",
    eyebrow: "Spatiu privat · 35 m2 · Self check-in",
    heroText:
      "Serene Studio este un studio privat de aproximativ 35 m2, cu pat matrimonial, chicineta, baie moderna, terasa si acces rapid la Piata Muncii.",
    heroImage: "terrace",
    heroCtaReferer: "website_studio_hero",
    secondaryHref: "/galerie/",
    secondaryLabel: "Vezi galeria",
    proof: homeProofRo,
    sections: [
      {
        title: "Ce include studioul?",
        intro: "Rezervi intregul studio, nu o camera intr-un apartament impartit.",
        bullets: amenities.ro,
        image: "kitchen",
        ctaReferer: "website_studio_facilities"
      },
      {
        title: "Raspunsuri rapide despre spatiu",
        intro: "Acest tabel raspunde intrebarilor normale despre folosirea studioului.",
        table: {
          headers: ["Intrebare", "Raspuns scurt"],
          rows: [
            ["Este spatiul privat?", "Da, rezervi intregul studio."],
            ["Pot gati la aragaz sau plita?", "Nu. Nu exista aragaz sau plita; exista cuptor cu microunde, frigider, aparat de cafea si fierbator."],
            ["Pot lucra remote?", "Da, exista Wi-Fi rapid si spatiu potrivit pentru laptop."],
            ["Pot fuma?", "Nu in interior; doar in zona exterioara indicata."],
            ["Copiii pot sta?", "Da, dar dorm cu parintii in acelasi pat matrimonial."]
          ]
        }
      },
      {
        title: "Pentru cine este potrivit?",
        intro: "Studioul este potrivit pentru sejururi scurte, calatorii de business, evenimente la Arena Nationala si vizite in zona Piata Muncii.",
        cards: [
          { title: "Cupluri", text: "Un singur pat matrimonial, spatiu privat si curte/terasa." },
          { title: "Business", text: "Wi-Fi rapid, self check-in si acces rapid la metrou." },
          { title: "Evenimente", text: "Arena Nationala este la aproximativ 14 minute de mers pe jos." }
        ]
      }
    ],
    faq: [
      { q: "Exista pat suplimentar?", a: "Nu. Exista un singur pat matrimonial." },
      { q: "Exista aragaz sau plita?", a: "Nu. Chicineta are frigider, cuptor cu microunde, aparat de cafea si fierbator, dar nu are aragaz sau plita." },
      { q: "Primesc prosoape?", a: "Da, studioul include prosoape si articole de toaleta." }
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
    title: "Galerie foto Serene Studio Bucuresti",
    description: "Fotografii reale cu Serene Studio Bucuresti: pat matrimonial, chicineta, baie, terasa, interior si acces.",
    keyword: "galerie Serene Studio Bucuresti, poze studio Piata Muncii",
    h1: "Galerie foto Serene Studio",
    eyebrow: "Fotografii reale",
    heroText: "Vezi imagini reale cu studioul, chicineta, baia, terasa si intrarea in Serene Studio Bucuresti.",
    heroImage: "overview",
    heroCtaReferer: "website_gallery_hero",
    sections: [
      {
        title: "Ce trebuie sa observi in fotografii?",
        intro: "Fotografiile arata spatiul asa cum conteaza pentru rezervare: pat, chicineta, baie, zona exterioara si acces.",
        bullets: ["Un singur pat matrimonial", "Chicineta cu microunde, frigider, cafea si ceai", "Baie moderna cu dus", "Terasa/curte pentru relaxare", "Acces potrivit pentru self check-in"]
      }
    ],
    gallery: true,
    faq: [
      { q: "Fotografiile sunt reale?", a: "Da, fotografiile sunt descarcate de pe site-ul actual Serene Studio si optimizate pentru noul site." },
      { q: "Exista mai multe camere?", a: "Nu. Serene Studio este un singur studio privat." }
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
    title: "Locatia Serene Studio in Bucuresti - Piata Muncii si Arena Nationala",
    description:
      "Serene Studio este pe Strada Alexandru Zagoritz 12, Sector 2, la aproximativ 4 minute de metrou Piata Muncii si 14 minute pe jos de Arena Nationala.",
    keyword: "locatie Serene Studio, Strada Alexandru Zagoritz 12, Piata Muncii",
    h1: "Locatia Serene Studio in Bucuresti",
    eyebrow: "Strada Alexandru Zagoritz 12",
    heroText:
      "Serene Studio se afla pe Strada Alexandru Zagoritz 12, Sector 2, Bucuresti, la aproximativ 4 minute de mers pe jos de statia de metrou Piata Muncii.",
    heroImage: "entrance",
    heroCtaReferer: "website_location_hero",
    proof: homeProofRo,
    sections: [
      {
        title: "Adresa si coordonate GPS",
        intro: `${property.address}. Coordonatele folosite pentru harta sunt ${property.latitude}, ${property.longitude}; verifica ruta finala in aplicatia de navigatie.`,
        bullets: ["Zona rezidentiala cu case si vile", "Acces rapid la metrou Piata Muncii", "Traseu simplu catre Arena Nationala", "Parcare gratuita pe strada, de obicei disponibila in apropiere"],
        ctaReferer: "website_location_address"
      },
      {
        title: "Distante utile din zona",
        intro: "Timpii de mai jos sunt orientativi si trebuie verificati in ziua plecarii, mai ales pentru trafic sau evenimente.",
        table: { headers: ["Loc", "De ce conteaza", "Timp / distanta de mentionat"], rows: locationRows.ro }
      }
    ],
    maps: true,
    faq: [
      { q: "Unde este Serene Studio?", a: `Serene Studio este pe ${property.address}, aproape de metrou Piata Muncii.` },
      { q: "Cat este pana la metrou?", a: "Statia Piata Muncii este la aproximativ 4 minute de mers pe jos." },
      { q: "Cat este pana la Arena Nationala?", a: "Arena Nationala este la aproximativ 14 minute de mers pe jos, conform informatiilor existente pe platformele de rezervare." }
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
    title: "Cazare langa Arena Nationala Bucuresti - Serene Studio",
    description:
      "Serene Studio este cazare linistita langa Arena Nationala, la aproximativ 14 minute pe jos de stadion si 4 minute de metrou Piata Muncii.",
    keyword: "cazare langa Arena Nationala, cazare stadion Bucuresti",
    h1: "Cazare langa Arena Nationala Bucuresti",
    eyebrow: "Concerte · Meciuri · Evenimente",
    heroText:
      "Serene Studio este o optiune linistita de cazare langa Arena Nationala, la aproximativ 14 minute de mers pe jos de stadion si la 4 minute de metrou Piata Muncii.",
    heroImage: "arena",
    heroCtaReferer: "website_arena_page_hero",
    proof: homeProofRo,
    sections: [
      {
        title: "De ce sa alegi Serene Studio pentru un eveniment la Arena Nationala?",
        intro: "Studioul este aproape de stadion, dar se afla intr-o zona rezidentiala mai linistita decat strazile lipite de fluxul de eveniment.",
        bullets: ["Poti merge pe jos catre stadion", "Ai self check-in complet dupa ora 14:00, cu cod pentru cutia de chei de la poarta dupa check-in-ul online", "Te intorci la un studio privat, nu la o camera comuna", "Rezervarea se face online, fara apel pentru disponibilitate"],
        ctaReferer: "website_arena_page_mid"
      },
      {
        title: "Pentru cine este potrivit?",
        intro: "Pagina este pentru oaspeti care cauta cazare inainte sau dupa un concert, meci, eveniment sportiv ori eveniment corporate.",
        cards: [
          { title: "Cupluri", text: "Un pat matrimonial, baie privata si chicineta." },
          { title: "O noapte dupa eveniment", text: "Self check-in si acces rapid la zona Piata Muncii." },
          { title: "Sejur scurt", text: "Wi-Fi, parcare pe strada si transport public in apropiere." }
        ],
        image: "terrace"
      },
      arenaPhotoSection("ro"),
      arenaVideoSection("ro"),
      {
        title: "Vrei detalii despre traseul pe jos pana la stadion?",
        intro: "Daca vrei un ghid pas cu pas pentru drumul de la Serene Studio si Piata Muncii la Arena Nationala (timpi reali, repere si tips pentru zile de eveniment), continua cu articolul dedicat.",
        cards: [
          {
            eyebrow: "Ghid pe jos",
            title: "Traseu pe jos: Serene Studio → Arena Nationala",
            text: "Timp real, puncte de reper si tips pentru zile de concert sau meci.",
            href: "/blog/traseu-pe-jos-serene-studio-arena-nationala/"
          }
        ]
      }
    ],
    faq: [
      { q: "Pot merge pe jos la Arena Nationala?", a: "Da, Arena Nationala este la aproximativ 14 minute de mers pe jos de Serene Studio." },
      { q: "Pot face check-in tarziu dupa un concert?", a: "Da. Dupa rezervare si check-in online, primesti codul de acces pentru cutia de chei de la poarta dupa completarea datelor necesare." },
      { q: "Exista parcare?", a: "Parcarea este gratuita pe strada si de obicei exista locuri in apropiere, dar nu este un loc rezervat." },
      { q: "Este potrivit pentru o noapte dupa eveniment?", a: "Da, este potrivit pentru o noapte sau un sejur scurt, mai ales daca vrei acces pe jos la stadion." }
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
        bullets: ["You can walk to the stadium", "Full self check-in after 14:00, with the key-box code after online check-in", "You return to a private studio, not a shared room", "Booking is online, without calling for availability"],
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
    title: "Cazare langa spitale in Bucuresti - Serene Studio",
    description:
      "Studio privat si linistit in Sector 2, potrivit pentru apartinatori sau oaspeti care au nevoie de cazare langa spitalele din zona Piata Muncii - Mihai Bravu - Iancului.",
    keyword: "cazare langa spitale Bucuresti, cazare Victor Babes, cazare Monza",
    h1: "Cazare linistita langa spitale in Bucuresti",
    eyebrow: "Sector 2 · Piata Muncii · Mihai Bravu",
    heroText:
      "Serene Studio este un studio privat si linistit in Sector 2, potrivit pentru apartinatori sau oaspeti care au nevoie de cazare aproape de spitalele din zona Piata Muncii - Mihai Bravu - Iancului.",
    heroImage: "overview",
    heroCtaReferer: "website_hospital_page_hero",
    proof: homeProofRo,
    sections: [
      {
        title: "Pentru ce situatii este potrivit?",
        intro: "Studioul nu ofera servicii medicale, dar poate fi util pentru cazare privata, linistita si usor de rezervat online.",
        bullets: ["Apartinatori care au nevoie de intimitate", "Oaspeti cu program variabil", "Sejururi de cateva zile cu chicineta", "Acces rapid cu taxi, metrou sau transport public"],
        ctaReferer: "website_hospital_page_mid"
      },
      {
        title: "Spitale cautate in zona",
        intro: "Distantele exacte trebuie verificate in Google Maps in functie de ora si traseu.",
        table: {
          headers: ["Spital", "De ce cauta oamenii cazare aici", "Distanta / timp"],
          rows: hospitalRows.ro
        }
      },
      {
        title: "Ce ajuta intr-un sejur medical sau pentru apartinatori?",
        intro: "Serene Studio pune accent pe liniste, curatenie, intimitate si un flux de rezervare fara apeluri inutile.",
        cards: [
          { title: "Chicineta", text: "Poti folosi frigiderul, cuptorul cu microunde, aparatul de cafea si fierbatorul; nu exista aragaz sau plita." },
          { title: "Self check-in", text: "Poti ajunge dupa ora 14:00. Dupa check-in-ul online si completarea datelor necesare, folosesti codul pentru cutia de chei de la poarta." },
          { title: "Ore de liniste", text: "Intervalul 22:00-09:00 ajuta la pastrarea unui mediu calm." }
        ],
        image: "kitchen"
      }
    ],
    faq: [
      { q: "Este Serene Studio potrivit pentru apartinatori?", a: "Da, poate fi potrivit pentru apartinatori care cauta un studio privat si linistit in Sector 2." },
      { q: "Pot face self check-in daca ajung seara?", a: "Da, dupa rezervare completezi check-in-ul online, iar dupa completarea datelor necesare primesti codul pentru cutia de chei de la poarta." },
      { q: "Am chicineta pentru cateva zile?", a: "Da, exista frigider, cuptor cu microunde, aparat de cafea si fierbator; nu exista aragaz sau plita." },
      { q: "Pot rezerva online fara sa sun?", a: "Da. Pretul si disponibilitatea se verifica online, apasand pe butonul Rezerva online." }
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
      { q: "Can I book online without calling?", a: "Yes. Price and availability are checked online by clicking the Book online button." }
    ],
    finalCtaReferer: "website_en_hospital_page_final"
  }
];

const operationalRo: PageContent[] = [
  {
    path: "/info/",
    locale: "ro",
    translationPath: "/en/info/",
    title: "Informatii utile pentru cazarea la Serene Studio",
    description: "Check-in online, verificare ID, taxa de oras, regulament, guidebook si self check-in pentru oaspetii Serene Studio Bucuresti.",
    keyword: "informatii Serene Studio, check-in online, self check-in Bucuresti, verificare ID",
    h1: "Informatii utile pentru cazarea la Serene Studio",
    eyebrow: "Rezervare / Check-in online / Self check-in",
    heroText: "Rezervi online apasand pe butonul Rezerva online, apoi completezi check-in-ul online cu verificare ID, selfie, taxa de oras si semnatura pe regulament. La final se deschide guidebook-ul cu instructiunile pentru self-check-in.",
    heroImage: "entrance",
    heroCtaReferer: "website_info_hero",
    sections: [
      {
        title: "Cum fac rezervarea?",
        intro: "Rezervarea se face apasand pe butonul Rezerva online; pretul si disponibilitatea se vad imediat.",
        paragraphs: ["Apasa Rezerva online, alege datele si finalizeaza rezervarea in sistemul securizat. Pentru disponibilitate nu este nevoie de formular sau apel telefonic."],
        ctaReferer: "website_info_booking"
      },
      {
        title: "Cum functioneaza check-in-ul online?",
        intro: "Dupa rezervare primesti linkul pentru check-in-ul online. Parcurgi pasii in ordine, fara sari de etape; daca o etapa nu este finalizata corect, codul de acces nu devine disponibil.",
        cards: [
          { title: "Verificare act de identitate", text: "Fotografiezi actul: buletin sau pasaport pentru oaspetii din UE; doar pasaport pentru oaspetii non-UE. Nu se accepta niciun alt document. Fotografia trebuie sa fie clara si nealterata. Nerespectarea conditiilor duce la anularea rezervarii fara ramburs." },
          { title: "Selfie pe loc", text: "Dupa actul de identitate faci un selfie chiar in acel moment, intr-un cadru bine luminat, sa se vada clar fata. Selfie-ul nu poate fi incarcat din galerie." },
          { title: "Taxa de oras", text: "Taxa de oras se achita online, in fluxul de check-in, conform tarifului in vigoare." },
          { title: "Regulamentul Serene Studio", text: "Citesti si iei la cunostinta regulamentul, apoi semnezi direct pe ecranul telefonului." },
          { title: "Guidebook si self-check-in", text: "La final se deschide guidebook-ul cu instructiunile complete pentru self-check-in: cum gasesti cutia de chei de la poarta, cum folosesti codul si cum te orientezi in studio." }
        ]
      },
      {
        title: "Guidebook-ul ramane mereu la indemana",
        intro: "Guidebook-ul se deschide oricand prin acelasi link folosit la check-in-ul online, fara cont sau parola suplimentara.",
        bullets: [
          "Contine instructiunile pentru self-check-in si codul cutiei de chei de la poarta",
          "Raspunde la majoritatea intrebarilor uzuale: Wi-Fi, AC, microunde, terasa, parcare, transport",
          "Te rugam sa-l citesti inainte sa suni - aproape toate raspunsurile sunt acolo",
          "Telefonul ramane pentru urgente reale sau situatii care nu sunt acoperite in guidebook"
        ]
      },
      {
        title: "Acces si self check-in",
        intro: "Check-in-ul este dupa 14:00, check-out-ul pana la 12:00. Accesul este complet self-check-in, cu codul pentru cutia de chei de la poarta disponibil dupa finalizarea check-in-ului online.",
        bullets: ["Check-in dupa 14:00", "Check-out pana la 12:00", "Check-in online finalizat inainte de sosire", "Codul cutiei de chei devine disponibil dupa verificare ID, selfie, taxa de oras si semnarea regulamentului", "Cauta linkul de check-in si guidebook in emailul de confirmare inainte sa contactezi personalul"]
      },
      {
        title: "Parcare, fumat, copii si animale",
        intro: "Parcarea este gratuita pe strada, fumatul este interzis in interior, copiii sunt acceptati, iar animalele nu sunt acceptate.",
        table: {
          headers: ["Subiect", "Raspuns"],
          rows: [
            ["Parcare", "Gratuita pe strada; de obicei exista locuri in apropiere, dar nu sunt rezervate nominal."],
            ["Fumat", "Interzis in interior; doar in zona exterioara indicata."],
            ["Copii", "Acceptati, dar dorm cu parintii in patul matrimonial."],
            ["Animale", "Nu sunt acceptate."],
            ["Plata si anulare", "Rezervarile se pot anula oricand, insa sumele achitate nu se ramburseaza."]
          ]
        }
      }
    ],
    faq: [
      { q: "La ce ora este check-in-ul?", a: "Check-in-ul este dupa ora 14:00." },
      { q: "La ce ora este check-out-ul?", a: "Check-out-ul este pana la ora 12:00." },
      { q: "Ce acte sunt acceptate la check-in?", a: "Buletin sau pasaport pentru oaspetii din UE; doar pasaport pentru oaspetii non-UE. Niciun alt document nu este acceptat. Actul se fotografiaza in timpul check-in-ului online." },
      { q: "De ce trebuie sa fac selfie?", a: "Selfie-ul confirma ca persoana care face check-in-ul corespunde cu actul de identitate. Trebuie facut pe loc, intr-un cadru luminat, sa se vada clar." },
      { q: "Ce se intampla daca pozele nu sunt clare?", a: "Pozele care nu sunt clare sau apar alterate duc la anularea rezervarii fara ramburs. Asigura-te ca actul si selfie-ul sunt vizibile, fara filtre si fara editari." },
      { q: "Ce este taxa de oras?", a: "Este taxa locala datorata pentru cazarea in Bucuresti. Se achita in fluxul de check-in online, conform tarifului in vigoare." },
      { q: "De ce semnez regulamentul?", a: "Semnatura confirma ca ai citit si ai luat la cunostinta regulile interne (orele de liniste, fumat, animale, garantie). Se semneaza direct pe ecranul telefonului." },
      { q: "Ce este guidebook-ul si cum il deschid?", a: "Guidebook-ul contine instructiunile pentru self-check-in si raspunsurile la intrebarile uzuale. Se deschide prin acelasi link folosit la check-in-ul online si ramane disponibil oricand pe parcursul sejurului." },
      { q: "Cand sun pe telefon?", a: "Te rugam sa citesti guidebook-ul inainte sa suni - aproape toate raspunsurile sunt acolo. Telefonul este pentru urgente sau situatii care nu sunt acoperite in guidebook." },
      { q: "Cum primesc codul cutiei de chei?", a: "Codul devine disponibil in guidebook dupa finalizarea check-in-ului online (verificare ID, selfie, taxa de oras si semnatura pe regulament)." }
    ],
    finalCtaReferer: "website_info_final"
  },
  {
    path: "/reguli/",
    locale: "ro",
    translationPath: "/en/rules/",
    title: "Reguli de cazare la Serene Studio Bucuresti",
    description: "Reguli Serene Studio: check-in dupa 14:00, check-out pana la 12:00, fumat interzis, fara animale, ore de liniste si garantie pana la 500 lei.",
    keyword: "reguli Serene Studio, fumat interzis, garantie daune",
    h1: "Reguli de cazare la Serene Studio",
    eyebrow: "Actualizat: 30 aprilie 2026",
    heroText: "Regulile sunt clare pentru a pastra studioul curat, linistit si potrivit pentru urmatorii oaspeti.",
    heroImage: "terrace",
    heroCtaReferer: "website_rules_hero",
    sections: [
      {
        title: "Regulile principale",
        intro: "Check-in-ul este dupa 14:00, check-out-ul este pana la 12:00, iar orele de liniste sunt 22:00-09:00.",
        bullets: [
          "Fumatul este interzis in interior.",
          "Fumatul este permis doar in curte sau zona indicata.",
          "Animalele de companie nu sunt acceptate.",
          "Copiii sunt acceptati, dar dorm cu parintii in patul matrimonial.",
          "Petrecerile si evenimentele private nu sunt permise.",
          "Vizitatorii neinregistrati nu sunt permisi.",
          "Numarul de oaspeti nu poate depasi rezervarea.",
          "Actul de identitate poate fi solicitat conform legislatiei."
        ]
      },
      {
        title: "Daune, fumat si garantie",
        intro: "Oaspetii raspund pentru daune, iar garantia poate ajunge pana la 500 lei.",
        paragraphs: [
          "Daca se fumeaza in interior, se poate retine intreaga suma de garantie, deoarece mirosul si curatarea afecteaza urmatorii oaspeti.",
          "Rezervarile se pot anula oricand, insa sumele achitate nu se ramburseaza. Platile si anularile sunt gestionate prin sistemul de rezervare folosit."
        ]
      },
      {
        title: "Verificare la check-in si actele acceptate",
        intro: "Identitatea se verifica online, in fluxul de check-in. Regulile sunt simple, dar stricte.",
        bullets: [
          "Buletin sau pasaport pentru oaspetii din UE; doar pasaport pentru oaspetii non-UE",
          "Niciun alt act nu este acceptat",
          "Fotografia actului trebuie facuta pe loc, sa fie clara si nealterata",
          "Selfie-ul se face dupa act, intr-un cadru luminat, sa se vada clar fata",
          "Pozele neclare sau alterate duc la anularea rezervarii fara ramburs",
          "Dupa verificare se achita taxa de oras si se semneaza regulamentul",
          "La final se deschide guidebook-ul cu instructiunile de self-check-in"
        ]
      }
    ],
    faq: [
      { q: "Pot fuma in studio?", a: "Nu. Fumatul in interior este interzis si poate duce la retinerea integrala a garantiei." },
      { q: "Sunt acceptate animalele?", a: "Nu, animalele de companie nu sunt acceptate." },
      { q: "Pot face petrecere?", a: "Nu, petrecerile si evenimentele private nu sunt permise." },
      { q: "Ce acte sunt acceptate la check-in?", a: "Buletin sau pasaport pentru oaspetii din UE; doar pasaport pentru oaspetii non-UE. Niciun alt document nu este acceptat." },
      { q: "Ce se intampla daca pozele de la verificare nu sunt clare?", a: "Pozele neclare sau alterate duc la anularea rezervarii fara ramburs." }
    ],
    finalCtaReferer: "website_rules_final"
  },
  {
    path: "/contact/",
    locale: "ro",
    translationPath: "/en/contact/",
    title: "Contact Serene Studio Bucuresti - rezervari online directe",
    description: "Pentru preturi si disponibilitate la Serene Studio foloseste butonul Rezerva online. Contact pentru urgente: telefon si email confirmate.",
    keyword: "contact Serene Studio, rezervare Serene Studio, contact@serenestudio.ro",
    h1: "Contact Serene Studio",
    eyebrow: "Rezervari online",
    heroText: "Pentru preturi, disponibilitate si rezervari, foloseste butonul Rezerva online; sistemul iti arata datele disponibile si confirma rezervarea pe loc.",
    heroImage: "entrance",
    heroCtaReferer: "website_contact_hero",
    sections: [
      {
        title: "Rezervari online",
        intro: "Nu este nevoie sa suni pentru disponibilitate.",
        paragraphs: ["Apasa Rezerva online, alege datele si verifica pretul direct in pagina securizata de rezervare."],
        ctaReferer: "website_contact_booking"
      },
      {
        title: "Ai rezervat deja?",
        intro: "Cauta emailul de confirmare, linkul pentru check-in online si guidebook si detaliile pentru cutia de chei inainte sa contactezi personalul.",
        bullets: ["Verifica inbox si spam", "Finalizeaza check-in-ul online (ID, selfie, taxa de oras, semnatura regulament)", "Citeste guidebook-ul - majoritatea raspunsurilor sunt acolo", "Verifica instructiunile si codul pentru cutia de chei de la poarta", "Contacteaza personalul doar pentru urgente sau probleme care nu sunt acoperite in guidebook"]
      },
      {
        title: "Adresa si contact pentru urgente",
        intro: `${property.address}. Telefon: ${property.phone}. Email: ${property.email}.`,
        table: {
          headers: ["Canal", "Foloseste pentru"],
          rows: [
            ["Buton Rezerva online", "Preturi, disponibilitate si rezervare online"],
            ["Guidebook (link primit la check-in)", "Instructiuni self-check-in si raspunsuri uzuale"],
            [property.phone, "Urgente sau clarificari dupa rezervare"],
            [property.email, "Mesaje care nu sunt urgente"]
          ]
        }
      }
    ],
    maps: true,
    faq: [
      { q: "Pot trimite formular pentru disponibilitate?", a: "Nu este necesar. Disponibilitatea se verifica online apasand pe butonul Rezerva online." },
      { q: "Unde gasesc raspunsurile uzuale?", a: "In guidebook, accesibil prin acelasi link folosit la check-in-ul online. Aproape toate intrebarile uzuale sunt acoperite acolo." },
      { q: "Care este emailul corect?", a: `Emailul corect este ${property.email}.` }
    ],
    finalCtaReferer: "website_contact_final"
  },
  {
    path: "/rezerva/",
    locale: "ro",
    translationPath: "/en/book/",
    title: "Rezerva Serene Studio online - preturi in timp real",
    description: "Alege datele, verifica pretul si finalizeaza rezervarea Serene Studio direct, prin pagina noastra securizata.",
    keyword: "rezerva Serene Studio, rezervare online studio Bucuresti",
    h1: "Rezerva Serene Studio online",
    eyebrow: "Preturi in timp real · Confirmare imediata",
    heroText: "Alege datele, verifica pretul si finalizeaza rezervarea direct, intr-o pagina securizata.",
    heroImage: "bed",
    heroCtaReferer: "website_book_hero",
    sections: [
      {
        title: "Cum se imparte fluxul intre rezervare si check-in online",
        intro: "Apasa butonul Rezerva online pentru a vedea pretul si disponibilitatea, apoi finalizezi rezervarea. Dupa confirmare, completezi check-in-ul online pentru a primi codul de acces.",
        paragraphs: [
          "Pretul si disponibilitatea sunt afisate in timp real pentru datele tale, iar plata si confirmarea sunt procesate securizat.",
          "Accesul in unitate ramane complet self-check-in. Codul pentru cutia de chei de la poarta devine disponibil in guidebook dupa finalizarea check-in-ului online (verificare ID, selfie, taxa de oras si semnarea regulamentului)."
        ],
        ctaReferer: "website_book_page_box"
      }
    ],
    faq: [
      { q: "Cum vad pretul si disponibilitatea?", a: "Apasa butonul Rezerva online si alege datele. Pretul si disponibilitatea sunt afisate in timp real pentru perioada aleasa." },
      { q: "Pot vedea pretul inainte de plata?", a: "Da, alegi datele si vezi pretul inainte de finalizarea rezervarii." },
      { q: "Primesc confirmare online?", a: "Da, confirmarea ajunge pe email imediat dupa finalizarea rezervarii." },
      { q: "Unde fac check-in-ul online?", a: "Dupa rezervare primesti pe email linkul pentru check-in online. Codul cutiei de chei devine disponibil dupa verificarea ID, selfie, taxa de oras si semnarea regulamentului." },
      { q: "Pot modifica datele?", a: "Modificarile se gestioneaza conform regulilor afisate la rezervare; sumele achitate nu se ramburseaza." }
    ],
    finalCtaReferer: "website_book_final"
  },
  {
    path: "/politica-confidentialitate/",
    locale: "ro",
    translationPath: "/en/privacy-policy/",
    title: "Politica de confidentialitate - Serene Studio",
    description: "Politica de confidentialitate pentru serenestudio.ro, fluxul de rezervare online si check-in-ul online cu verificare ID.",
    keyword: "politica confidentialitate Serene Studio",
    h1: "Politica de confidentialitate",
    eyebrow: "Serene Studio",
    heroText: "Aceasta pagina explica ce date pot fi prelucrate cand folosesti serenestudio.ro, cand finalizezi o rezervare online si cand completezi check-in-ul online.",
    heroCtaReferer: "website_privacy_hero",
    sections: [
      {
        title: "Ce date prelucram?",
        intro: "Site-ul nu foloseste analytics la lansare. Rezervarea si check-in-ul online sunt operate prin furnizori specializati, conform termenilor afisati la finalizarea rezervarii.",
        paragraphs: [
          "Cand ne contactezi prin email sau telefon, putem prelucra datele pe care le transmiti voluntar.",
          "Cand apesi Rezerva online, ajungi pe pagina securizata de rezervare, unde se aplica termenii si politica furnizorului care opereaza sistemul de rezervare.",
          "Dupa rezervare, sunt prelucrate datele necesare pentru check-in-ul online: actul de identitate (buletin sau pasaport, conform reglementarilor UE/non-UE), selfie pentru verificare, taxa de oras si semnatura digitala pe regulament. Datele se folosesc strict pentru identificare, raportare locala si acces self-check-in."
        ]
      },
      {
        title: "Contact pentru date personale",
        intro: `Pentru solicitari legate de date personale, foloseste emailul ${property.email}.`
      }
    ],
    finalCtaReferer: "website_privacy_final"
  },
  {
    path: "/politica-cookies/",
    locale: "ro",
    translationPath: "/en/cookie-policy/",
    title: "Politica cookies - Serene Studio",
    description: "Politica cookies pentru serenestudio.ro. Site-ul este lansat fara analytics in prima versiune.",
    keyword: "politica cookies Serene Studio",
    h1: "Politica cookies",
    eyebrow: "Fara analytics la lansare",
    heroText: "In prima versiune, serenestudio.ro nu incarca analytics sau instrumente de tracking externe.",
    heroCtaReferer: "website_cookies_hero",
    sections: [
      {
        title: "Ce cookies foloseste site-ul?",
        intro: "Site-ul static foloseste doar functionalitate esentiala pentru navigare.",
        paragraphs: ["Daca la lansare se adauga GA4, Clarity sau harti embed, politica si bannerul de consimtamant trebuie activate inainte de publicare."]
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
        paragraphs: ["Click Book online, choose your dates and complete the booking in the secure system. There is no need for a form or phone call for availability."],
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
        intro: "Check-in is after 14:00 and check-out is by 12:00. Access is fully self check-in, with the key-box code available after online check-in is completed.",
        bullets: ["Check-in after 14:00", "Check-out by 12:00", "Online check-in completed before arrival", "Key-box code becomes available after ID verification, selfie, city tax and rules signature", "Look for the check-in link and guidebook in your confirmation email before contacting staff"]
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
      { q: "What time is check-out?", a: "Check-out is by 12:00." },
      { q: "Which documents are accepted at check-in?", a: "ID card or passport for EU guests; passport only for non-EU guests. No other document is accepted. The document is photographed during online check-in." },
      { q: "Why do I need to take a selfie?", a: "The selfie confirms that the person checking in matches the ID. It must be taken on the spot, in good light, with your face clearly visible." },
      { q: "What happens if my photos are unclear?", a: "Photos that are unclear or appear altered lead to cancellation of the booking with no refund. Make sure the document and selfie are visible, without filters or edits." },
      { q: "What is the city tax?", a: "It is the local tax owed for staying in Bucharest. It is paid online, during the check-in flow, at the rate in force." },
      { q: "Why do I sign the house rules?", a: "The signature confirms that you have read and acknowledged the internal rules (quiet hours, smoking, pets, deposit). It is signed directly on the phone screen." },
      { q: "What is the guidebook and how do I open it?", a: "The guidebook contains the self check-in instructions and answers to common questions. It opens through the same link used for online check-in and stays available at any time during your stay." },
      { q: "When should I call staff?", a: "Please read the guidebook before calling - almost every answer is in there. The phone is for emergencies or situations not covered by the guidebook." },
      { q: "How do I receive the key-box code?", a: "The code becomes available in the guidebook after online check-in is finalized (ID verification, selfie, city tax and rules signature)." }
    ],
    finalCtaReferer: "website_en_info_final"
  },
  {
    path: "/en/rules/",
    locale: "en",
    translationPath: "/reguli/",
    title: "Serene Studio Bucharest house rules",
    description: "Serene Studio rules: check-in after 14:00, check-out by 12:00, no indoor smoking, no pets, quiet hours and damage deposit up to 500 lei.",
    keyword: "Serene Studio rules, no smoking, damage deposit",
    h1: "House rules at Serene Studio",
    eyebrow: "Updated: 30 April 2026",
    heroText: "The rules keep the studio clean, quiet and ready for the next guests.",
    heroImage: "terrace",
    heroCtaReferer: "website_en_rules_hero",
    sections: [
      {
        title: "Main rules",
        intro: "Check-in is after 14:00, check-out is by 12:00, and quiet hours are 22:00-09:00.",
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
    keyword: "contact Serene Studio, Serene Studio booking, contact@serenestudio.ro",
    h1: "Contact Serene Studio",
    eyebrow: "Online bookings",
    heroText: "For prices, availability and bookings, use the Book online button; the system shows available dates and confirms the booking on the spot.",
    heroImage: "entrance",
    heroCtaReferer: "website_en_contact_hero",
    sections: [
      {
        title: "Online bookings",
        intro: "You do not need to call for availability.",
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
            [property.phone, "Emergencies or clarifications after booking"],
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
    title: "Cazare langa Spitalul Gomoiu Bucuresti - Serene Studio",
    description:
      "Studio privat in Sector 2 Bucuresti, la cateva minute de Spitalul Clinic de Copii Dr. Victor Gomoiu (Bd. Basarabia 21). Self check-in, chicineta, baie privata si rezervare online directa - ideal pentru parinti si bunici care isi insotesc copilul la spital.",
    keyword: "cazare langa Spitalul Gomoiu Bucuresti, cazare parinti Spitalul de Copii Gomoiu, Bd. Basarabia 21 Sector 2",
    h1: "Cazare langa Spitalul de Copii Dr. Victor Gomoiu in Bucuresti",
    eyebrow: "Sector 2 · Bd. Basarabia 21 · Parinti si insotitori",
    heroText:
      "Serene Studio este o cazare privata si linistita in Sector 2 Bucuresti, la aproximativ 1,5 km de Spitalul Clinic de Copii Dr. Victor Gomoiu (Bulevardul Basarabia 21). Studio de aproximativ 35 m2, cu pat matrimonial, chicineta, baie privata si self check-in dupa ora 14:00 pe baza codului din guidebook.",
    heroImage: "overview",
    heroCtaReferer: "website_gomoiu_hero",
    proof: [
      { value: "~1,5 km", label: "pana la Spitalul Gomoiu" },
      { value: "35 m2", label: "studio privat" },
      { value: "Self check-in", label: "acces dupa 14:00" },
      { value: "22-09", label: "ore de liniste" }
    ],
    sections: [
      {
        title: "Pentru cine este potrivit Serene Studio cand mergi la Spitalul Gomoiu",
        intro:
          "Spitalul Clinic de Copii Dr. Victor Gomoiu este un spital pediatric de referinta in Bucuresti, cu sectii de chirurgie pediatrica, pediatrie, neurologie si terapie intensiva pentru copii. Familiile care insotesc copilul au nevoie de cazare apropiata, linistita si flexibila.",
        cards: [
          { title: "Parinti care insotesc copilul", text: "Studio privat unde te poti odihni intre vizite, cu chicineta pentru micul dejun, o cafea calda dimineata si baie proprie - fara sa imparti spatiul cu alti oaspeti." },
          { title: "Bunici si apartinatori din afara orasului", text: "Sosiri si plecari flexibile, self check-in dupa ora 14:00, fara coada la receptie. Daca ajungi seara tarziu, codul cutiei de chei te asteapta in guidebook." },
          { title: "Familii la sejur medical de cateva zile", text: "Rezervi un singur loc privat la 4 minute de metroul Piata Muncii, eviti drumurile lungi prin oras si te concentrezi pe sanatatea copilului." }
        ],
        ctaReferer: "website_gomoiu_quiet"
      },
      {
        title: "Cum arata Spitalul Gomoiu Bucuresti",
        intro:
          "Un scurt video al Spitalului Clinic de Copii Dr. Victor Gomoiu (Bulevardul Basarabia 21, Sector 2). Util pentru parintii care vin prima data la programare si vor sa recunoasca cladirea si zona din jur.",
        video: {
          base: "spitalul-gomoiu-bucuresti",
          poster: "/video/spitalul-gomoiu-bucuresti-poster.jpg",
          posterWebp: "/video/spitalul-gomoiu-bucuresti-poster.webp",
          durationSeconds: 6,
          uploadDate: "2026-04-30",
          width: 960,
          height: 644,
          name: {
            ro: "Spitalul Clinic de Copii Dr. Victor Gomoiu - vedere exterioara",
            en: "Dr. Victor Gomoiu Children's Clinical Hospital - exterior view"
          },
          description: {
            ro: "Filmare scurta cu Spitalul Clinic de Copii Dr. Victor Gomoiu, Bulevardul Basarabia 21, Sector 2 Bucuresti - utila pentru parintii care vin prima data la spital cu copilul si pentru insotitorii care cauta cazare aproape, la Serene Studio.",
            en: "Short clip of the Dr. Victor Victor Gomoiu Children's Clinical Hospital at Bulevardul Basarabia 21, Sector 2 Bucharest - useful for parents arriving with their child for the first time and for relatives looking for nearby accommodation at Serene Studio."
          },
          contentLocation: {
            name: "Spitalul Clinic de Copii Dr. Victor Gomoiu",
            address: "Bulevardul Basarabia 21, Sector 2, Bucuresti 022102",
            lat: 44.4393,
            lon: 26.1486
          }
        }
      },
      {
        title: "Distantele utile din zona",
        intro:
          "Adresa Serene Studio: Strada Alexandru Zagoritz 12, Sector 2, Bucuresti. Spitalul Clinic de Copii Dr. Victor Gomoiu se afla pe Bulevardul Basarabia 21, in acelasi Sector 2 - foarte aproape, pe ruta catre Arena Nationala.",
        infographic: {
          variant: "distances",
          origin: "Serene Studio · Strada Alexandru Zagoritz 12, Sector 2",
          caption:
            "Distantele sunt orientative. Verifica intotdeauna ruta in aplicatia ta de navigatie inainte de plecare.",
          distances: [
            { place: "Spitalul Clinic de Copii Dr. Victor Gomoiu", detail: "Bd. Basarabia 21 - chirurgie pediatrica, pediatrie, ATI copii", value: "~1,5 km", mode: "drive", lat: 44.4393, lon: 26.1486 },
            { place: "Ambulatoriul Gomoiu (Sector 3)", detail: "Strada Rodul Pamantului 2-4 - consultatii ambulatorii", value: "~6 km cu masina", mode: "drive", lat: 44.4232, lon: 26.1843 },
            { place: "Spitalul Monza", detail: "Strada Tony Bulandra 27 - cardiologie, chirurgie", value: "~2 km", mode: "drive", lat: 44.4464, lon: 26.1379 },
            { place: "Metrou Piata Muncii", detail: "Linia M1 catre centru si Gara de Nord", value: "~4 min pe jos", mode: "metro", lat: 44.4366, lon: 26.1364 },
            { place: "Farmacii non-stop", detail: "Pe Mihai Bravu si Bulevardul Basarabia", value: "1-5 min pe jos", mode: "walk" }
          ]
        },
        ctaReferer: "website_gomoiu_distances"
      },
      {
        title: "Ce face diferenta cand vii cu copilul la spital",
        intro:
          "Serene Studio nu este unitate medicala si nu ofera servicii de ingrijire. Ce ofera este un mediu privat, curat si predictibil, cu un flux de rezervare gandit pentru parinti stresati.",
        bullets: [
          "Studio privat de aproximativ 35 m2 - rezervi intregul spatiu, fara colocatari",
          "Chicineta cu frigider, microunde, aparat de cafea si fierbator (fara aragaz/plita)",
          "Wi-Fi rapid pentru video-call cu familia ramasa acasa sau pentru telemedicina",
          "Self check-in dupa 14:00 cu cod pentru cutia de chei (disponibil dupa check-in-ul online)",
          "Ore de liniste 22:00-09:00 - somn linistit pentru noaptea de dinainte de operatie sau dupa o zi grea",
          "Parcare gratuita pe strada, de obicei disponibila in apropiere",
          "Acces rapid catre metrou Piata Muncii (4 minute pe jos) - util pentru drumuri prin oras"
        ],
        ctaReferer: "website_gomoiu_features"
      }
    ],
    faq: [
      { q: "Care este adresa Spitalului Gomoiu din Bucuresti?", a: "Spitalul Clinic de Copii Dr. Victor Gomoiu are sediul principal pe Bulevardul Basarabia 21, Sector 2, Bucuresti, cod postal 022102. Ambulatoriul se afla la Strada Rodul Pamantului 2-4, Sector 3." },
      { q: "Cat de aproape este Serene Studio de Spitalul Gomoiu?", a: "Serene Studio (Strada Alexandru Zagoritz 12, Sector 2) este la aproximativ 1,5 km de Spitalul Gomoiu - cateva minute cu masina sau taxi. Verifica ruta exacta in Google Maps inainte de plecare." },
      { q: "Pot face check-in tarziu daca ies tarziu de la spital?", a: "Da. Self check-in-ul functioneaza dupa ora 14:00, fara restrictie de seara. Codul cutiei de chei este disponibil in guidebook dupa finalizarea check-in-ului online (ID, selfie, taxa de oras, semnatura regulament)." },
      { q: "Este potrivit pentru parinti care isi insotesc copilul?", a: "Da. Studioul este privat, linistit, cu chicineta si baie proprie - ideal pentru parinti care dorm putin, mananca pe fuga si vor intimitate dupa o zi grea la spital." },
      { q: "Pot ramane mai multe nopti pentru un sejur medical pediatric?", a: "Da, sejururile de cateva nopti sunt complet acceptate. Chicineta ajuta la masa rapida fara sa depinzi de restaurante." },
      { q: "Ce documente sunt acceptate la check-in?", a: "Buletin sau pasaport pentru oaspetii din UE; doar pasaport pentru oaspetii non-UE. Niciun alt document nu este acceptat." }
    ],
    finalCtaReferer: "website_gomoiu_final"
  },
  {
    path: "/cazare-langa-spitalul-monza-bucuresti/",
    locale: "ro",
    translationPath: "/en/accommodation-near-monza-hospital-bucharest/",
    title: "Cazare langa Spitalul Monza Bucuresti - Serene Studio",
    description:
      "Studio privat in Sector 2 Bucuresti, la cativa minute de Spitalul Monza (cardiologie, chirurgie). Self check-in, chicineta, baie privata si rezervare online directa, fara apeluri.",
    keyword: "cazare langa Spitalul Monza Bucuresti, cazare cardiologie Monza, studio apartinatori",
    h1: "Cazare langa Spitalul Monza in Bucuresti",
    eyebrow: "Sector 2 · Cardiologie · Apartinatori",
    heroText:
      "Serene Studio este un studio privat de aproximativ 35 m2, in Sector 2 Bucuresti, la cativa minute distanta de Spitalul Monza. Pat matrimonial, chicineta, baie privata, terasa si self check-in cu cod pentru cutia de chei dupa check-in-ul online.",
    heroImage: "overview",
    heroCtaReferer: "website_monza_hero",
    proof: [
      { value: "~2 km", label: "pana la Spitalul Monza" },
      { value: "35 m2", label: "studio privat" },
      { value: "Self check-in", label: "acces dupa 14:00" },
      { value: "22-09", label: "ore de liniste" }
    ],
    sections: [
      {
        title: "Pentru cine este potrivit Serene Studio inainte sau dupa o vizita la Monza?",
        intro:
          "Spitalul Monza este cunoscut pentru cardiologie, chirurgie si proceduri planificate. Oaspetii care se cazeaza la Serene Studio inaintea sau dupa unei interventii cauta liniste, intimitate si un flux de rezervare simplu.",
        cards: [
          { title: "Pacienti cu programare", text: "Studio privat la cativa minute de spital, ideal pentru noaptea dinaintea internarii sau pentru recuperarea ambulatorie." },
          { title: "Apartinatori cu vizite multiple", text: "Spatiu linistit unde dormi bine intre vizite, cu chicineta pentru o masa rapida fara sa depinzi de restaurante." },
          { title: "Familii din afara Bucurestiului", text: "Eviti hotelurile zgomotoase si stai intr-o zona rezidentiala calma, foarte aproape de Monza si de Piata Muncii." }
        ],
        ctaReferer: "website_monza_audience"
      },
      {
        title: "Cum arata Spitalul Monza Bucuresti",
        intro:
          "Un scurt video al Spitalului Monza Bucuresti din Sector 2, ca sa stii ce sa cauti cand ajungi pe Strada Tony Bulandra 27. Util pentru pacienti la prima vizita si apartinatori care nu cunosc zona.",
        video: {
          base: "spitalul-monza-bucuresti",
          poster: "/video/spitalul-monza-bucuresti-poster.jpg",
          posterWebp: "/video/spitalul-monza-bucuresti-poster.webp",
          durationSeconds: 6,
          uploadDate: "2026-04-30",
          width: 960,
          height: 631,
          name: {
            ro: "Spitalul Monza Bucuresti - vedere exterioara",
            en: "Monza Hospital Bucharest - exterior view"
          },
          description: {
            ro: "Filmare scurta cu Spitalul Monza Bucuresti din Sector 2, pentru pacientii care merg prima data la programare si apartinatorii care cauta cazare aproape - Serene Studio este la aproximativ 2 km distanta.",
            en: "Short clip of Monza Hospital Bucharest in Sector 2, useful for patients arriving for the first time and relatives looking for nearby accommodation - Serene Studio is about 2 km away."
          },
          contentLocation: {
            name: "Spitalul Monza Bucuresti",
            address: "Strada Tony Bulandra 27, Sector 2, Bucuresti",
            lat: 44.4464,
            lon: 26.1379
          }
        }
      },
      {
        title: "Distantele utile din zona",
        intro:
          "Adresa Serene Studio: Strada Alexandru Zagoritz 12, Sector 2, Bucuresti. Spitalul Monza se afla pe Strada Tony Bulandra 27, Sector 2 - tot in zona Piata Muncii / Mihai Bravu.",
        infographic: {
          variant: "distances",
          origin: "Serene Studio · Strada Alexandru Zagoritz 12, Sector 2",
          caption:
            "Distantele sunt orientative pentru un drum cu masina sau taxi. Verifica intotdeauna in Google Maps inainte de plecare, mai ales cu trafic.",
          distances: [
            { place: "Spitalul Monza", detail: "Strada Tony Bulandra 27, Sector 2 - cardiologie si chirurgie", value: "~2 km cu masina", mode: "drive", lat: 44.4464, lon: 26.1379 },
            { place: "Metrou Piata Muncii", detail: "Linia M1 catre centru, Gara de Nord si Universitate", value: "~4 min pe jos", mode: "metro", lat: 44.4366, lon: 26.1364 },
            { place: "Farmacii non-stop", detail: "Pe Mihai Bravu si in Piata Muncii", value: "1-5 min pe jos", mode: "walk" },
            { place: "Mega Mall", detail: "Restaurante, supermarket si cinema", value: "~18-20 min pe jos", mode: "walk", lat: 44.4434, lon: 26.1500 },
            { place: "Aeroportul Otopeni (OTP)", detail: "Sosiri internationale, cu tren via Gara de Nord", value: "tren + metrou sau taxi", mode: "train", lat: 44.5711, lon: 26.085 }
          ]
        },
        ctaReferer: "website_monza_distances"
      },
      {
        title: "Ce primesti la Serene Studio",
        intro:
          "Studioul este gandit pentru oaspeti care vor liniste, curatenie si un flux fara frictiune. Self check-in si guidebook digital, fara apeluri pentru rezervare sau acces.",
        bullets: [
          "Studio privat de aproximativ 35 m2, doar pentru tine",
          "Pat matrimonial cu saltea confortabila si lenjerie curata",
          "Baie moderna privata cu dus, prosoape si articole de toaleta",
          "Chicineta cu frigider, microunde, aparat de cafea si fierbator",
          "Wi-Fi rapid, TV, aer conditionat si incalzire centrala",
          "Self check-in cu cod pentru cutia de chei de la poarta",
          "Guidebook digital cu instructiunile complete - aproape toate raspunsurile sunt acolo"
        ],
        ctaReferer: "website_monza_features",
        image: "kitchen"
      }
    ],
    faq: [
      { q: "Cat este de la Serene Studio la Spitalul Monza?", a: "Spitalul Monza se afla pe Strada Tony Bulandra 27, la aproximativ 2 km de Serene Studio - cateva minute cu masina sau taxi, in functie de trafic. Verifica ruta in Google Maps." },
      { q: "Pot rezerva pentru noaptea dinaintea unei interventii la Monza?", a: "Da, sejururile scurte sunt complet acceptate. Apesi butonul Rezerva online, alegi datele si finalizezi rezervarea direct, fara apel telefonic." },
      { q: "Pot intra tarziu daca am operatie dimineata devreme?", a: "Da. Self check-in-ul functioneaza fara restrictie de ora dupa 14:00. Codul cutiei de chei devine disponibil in guidebook dupa finalizarea check-in-ului online." },
      { q: "Este potrivit pentru recuperare dupa o interventie ambulatorie?", a: "Studioul este privat, linistit si cu baie proprie - dar nu ofera servicii medicale. Pentru recuperari complexe consulta intotdeauna recomandarea medicului." },
      { q: "Pot anula daca interventia se reprogrameaza?", a: "Rezervarile se pot anula oricand, insa sumele achitate nu se ramburseaza. Verifica regulile afisate la rezervare." }
    ],
    finalCtaReferer: "website_monza_final"
  },
  {
    path: "/cazare-langa-mega-mall-bucuresti/",
    locale: "ro",
    translationPath: "/en/accommodation-near-mega-mall-bucharest/",
    title: "Cazare langa Mega Mall Bucuresti - Serene Studio in Sector 2",
    description:
      "Studio privat in Sector 2 Bucuresti, la 18-20 minute pe jos de Mega Mall, cu acces rapid la Arena Nationala, Piata Muncii si centrul orasului. Self check-in si rezervare online directa.",
    keyword: "cazare langa Mega Mall Bucuresti, cazare Sector 2 mall, studio Piata Muncii",
    h1: "Cazare langa Mega Mall in Bucuresti",
    eyebrow: "Sector 2 · Shopping · Cinema · Restaurante",
    heroText:
      "Serene Studio este un studio privat in Sector 2 Bucuresti, la 18-20 de minute pe jos de Mega Mall si la cativa minute de Piata Muncii. Ideal pentru oaspeti care vor shopping, cinema sau o pauza la cafea aproape de cazare.",
    heroImage: "overview",
    heroCtaReferer: "website_megamall_hero",
    proof: [
      { value: "~18-20 min", label: "pe jos pana la Mega Mall" },
      { value: "~14 min", label: "pe jos pana la Arena Nationala" },
      { value: "~4 min", label: "pana la metrou Piata Muncii" },
      { value: "Self check-in", label: "dupa ora 14:00" }
    ],
    sections: [
      {
        title: "De ce e bun Serene Studio pentru o vizita la Mega Mall?",
        intro:
          "Mega Mall este unul dintre cele mai mari mall-uri din Bucuresti, cu peste 200 de magazine, restaurante, supermarket Cora si cinema Grand Cinema & More. Serene Studio este suficient de aproape sa ajungi pe jos si suficient de retras sa nu auzi traficul de seara.",
        cards: [
          { title: "Cupluri la o escapada de weekend", text: "Studio privat cu pat matrimonial si baie proprie. Iesi la cumparaturi sau cinema la Mega Mall si te intorci intr-un loc linistit." },
          { title: "Calatorii business", text: "Wi-Fi rapid, self check-in si acces rapid catre metrou Piata Muncii. Mega Mall iti ofera optiuni rapide pentru cina sau cumparaturi de ultim moment." },
          { title: "Familii cu copil mai mare", text: "Copiii sunt acceptati, iar mall-ul are zone de joaca, restaurante si cinema. Studioul are un singur pat matrimonial, asa ca rezerva pentru maxim 2 adulti + copil." }
        ],
        ctaReferer: "website_megamall_audience"
      },
      {
        title: "Distantele utile din zona",
        intro:
          "Mega Mall se afla pe Bulevardul Pierre de Coubertin 3-5, in Sector 2 - aproape de Arena Nationala. Serene Studio este la 18-20 de minute pe jos sau 5-7 minute cu masina, in functie de trafic.",
        infographic: {
          variant: "distances",
          origin: "Serene Studio · Strada Alexandru Zagoritz 12, Sector 2",
          caption:
            "Pe jos timpii sunt orientativi pentru un mers relaxat. Cu masina, verifica traficul in aplicatia ta de navigatie.",
          distances: [
            { place: "Mega Mall", detail: "Bulevardul Pierre de Coubertin 3-5 - 200+ magazine, cinema, restaurante", value: "~18-20 min pe jos", mode: "walk", lat: 44.4434, lon: 26.1500 },
            { place: "Arena Nationala", detail: "Concerte, meciuri si evenimente", value: "~14 min pe jos", mode: "walk", lat: 44.4378, lon: 26.1521 },
            { place: "Bucur Obor", detail: "Magazinul universal istoric din Sector 2", value: "~10 min pe jos", mode: "walk", lat: 44.4474, lon: 26.1284 },
            { place: "Metrou Piata Muncii", detail: "Linia M1 catre centru si Gara de Nord", value: "~4 min pe jos", mode: "metro", lat: 44.4366, lon: 26.1364 },
            { place: "Centrul Vechi", detail: "Restaurante, baruri si turism", value: "metrou sau taxi", mode: "metro" }
          ]
        },
        ctaReferer: "website_megamall_distances"
      },
      {
        title: "Ce gasesti la Mega Mall",
        intro:
          "Mega Mall combina shopping clasic cu divertisment - cinema, food court, supermarket Cora si peste 200 de magazine, inclusiv branduri internationale.",
        bullets: [
          "Peste 200 de magazine: moda, sport, electronice, frumusete",
          "Grand Cinema & More cu 14 sali, inclusiv VIP si IMAX",
          "Supermarket Cora deschis pana seara tarziu",
          "Food court cu 30+ restaurante si cafenele",
          "Zona de joaca pentru copii la etajul superior",
          "Parcare subterana si la suprafata pentru vizitatori"
        ],
        ctaReferer: "website_megamall_inside",
        image: "kitchenArch"
      }
    ],
    faq: [
      { q: "Cat este de la Serene Studio la Mega Mall?", a: "Mega Mall este la aproximativ 18-20 de minute pe jos de Serene Studio sau 5-7 minute cu masina/taxi. Adresa Mega Mall: Bulevardul Pierre de Coubertin 3-5, Sector 2, Bucuresti." },
      { q: "Pot ajunge pe jos seara la Mega Mall?", a: "Da, traseul trece prin zone bine iluminate si circulate. Verifica orele de inchidere ale magazinelor si cinematografului inainte sa pleci." },
      { q: "Mega Mall este aproape si de Arena Nationala?", a: "Da. Mega Mall si Arena Nationala sunt vecine - daca ai bilet la concert sau meci, poti combina shoppingul cu evenimentul." },
      { q: "Pot parca la Mega Mall daca vin cu masina?", a: "Da, Mega Mall are parcare proprie subterana si la suprafata. Daca stai la Serene Studio si vrei sa lasi masina pe strada, parcarea pe strada este gratuita in zona, de obicei disponibila in apropiere." },
      { q: "Mega Mall are supermarket?", a: "Da, Mega Mall gazduieste un supermarket Cora cu program pana seara tarziu - util daca vrei sa cumperi mancare pentru chicineta in studio." }
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
      "Private studio in Sector 2 Bucharest, minutes from Dr. Victor Gomoiu Children's Clinical Hospital (Bd. Basarabia 21). Self check-in, kitchenette, private bathroom - ideal for parents and relatives accompanying their child.",
    keyword: "accommodation near Gomoiu Hospital Bucharest, parents Gomoiu children's hospital, Bd. Basarabia 21",
    h1: "Accommodation near Dr. Victor Gomoiu Children's Hospital Bucharest",
    eyebrow: "Sector 2 · Bd. Basarabia 21 · Parents and relatives",
    heroText:
      "Serene Studio is a private, quiet studio in Sector 2 Bucharest, about 1.5 km from the Dr. Victor Gomoiu Children's Clinical Hospital (Bulevardul Basarabia 21). About 35 m2 with double bed, kitchenette, private bathroom and self check-in after 14:00 via the code in your guidebook.",
    heroImage: "overview",
    heroCtaReferer: "website_en_gomoiu_hero",
    proof: [
      { value: "~1.5 km", label: "to Gomoiu Hospital" },
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
          { title: "Multi-day pediatric stays", text: "One private base 4 minutes from Piata Muncii metro - skip long commutes across the city and focus on the child's care." }
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
            ro: "Spitalul Clinic de Copii Dr. Victor Gomoiu - vedere exterioara",
            en: "Dr. Victor Gomoiu Children's Clinical Hospital - exterior view"
          },
          description: {
            ro: "Filmare scurta cu Spitalul Clinic de Copii Dr. Victor Gomoiu, Bulevardul Basarabia 21, Sector 2 Bucuresti - utila pentru parintii care vin prima data la spital cu copilul si pentru insotitorii care cauta cazare aproape, la Serene Studio.",
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
          "Serene Studio: Strada Alexandru Zagoritz 12, Sector 2. The Dr. Victor Gomoiu Children's Clinical Hospital is at Bulevardul Basarabia 21, in the same Sector 2 - very close, on the route to the National Arena.",
        infographic: {
          variant: "distances",
          origin: "Serene Studio · Strada Alexandru Zagoritz 12, Sector 2",
          caption: "Distances are indicative. Always check the route in your navigation app before leaving.",
          distances: [
            { place: "Dr. Victor Gomoiu Children's Clinical Hospital", detail: "Bd. Basarabia 21 - pediatric surgery, pediatrics, ICU", value: "~1.5 km", mode: "drive", lat: 44.4393, lon: 26.1486 },
            { place: "Gomoiu Outpatient Clinic (Sector 3)", detail: "Strada Rodul Pamantului 2-4 - outpatient consultations", value: "~6 km by car", mode: "drive", lat: 44.4232, lon: 26.1843 },
            { place: "Monza Hospital", detail: "Strada Tony Bulandra 27 - cardiology, surgery", value: "~2 km", mode: "drive", lat: 44.4464, lon: 26.1379 },
            { place: "Piata Muncii metro", detail: "M1 line to city center and Gara de Nord", value: "~4 min walk", mode: "metro", lat: 44.4366, lon: 26.1364 },
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
      { q: "How close is Serene Studio to Gomoiu Hospital?", a: "Serene Studio (Strada Alexandru Zagoritz 12, Sector 2) is about 1.5 km from Gomoiu Hospital - a few minutes by car or taxi. Check the exact route in Google Maps before leaving." },
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
            ro: "Spitalul Monza Bucuresti - vedere exterioara",
            en: "Monza Hospital Bucharest - exterior view"
          },
          description: {
            ro: "Filmare scurta cu Spitalul Monza Bucuresti din Sector 2, pentru pacientii care merg prima data la programare si apartinatorii care cauta cazare aproape - Serene Studio este la aproximativ 2 km distanta.",
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
            { place: "Piata Muncii metro", detail: "M1 line to city center, Gara de Nord and Universitate", value: "~4 min walk", mode: "metro", lat: 44.4366, lon: 26.1364 },
            { place: "24/7 pharmacies", detail: "On Mihai Bravu and around Piata Muncii", value: "1-5 min walk", mode: "walk" },
            { place: "Mega Mall", detail: "Restaurants, supermarket and cinema", value: "~18-20 min walk", mode: "walk", lat: 44.4434, lon: 26.1500 },
            { place: "Otopeni Airport (OTP)", detail: "International arrivals via train + Gara de Nord", value: "train + metro or taxi", mode: "train", lat: 44.5711, lon: 26.085 }
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
            { place: "Piata Muncii metro", detail: "M1 line to city center and Gara de Nord", value: "~4 min walk", mode: "metro", lat: 44.4366, lon: 26.1364 },
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
