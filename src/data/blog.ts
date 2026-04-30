import { hospitalRows, locationRows, property } from "./site";
import type { BlogPost, Faq } from "./types";
import { arenaPhotoSection, arenaVideoSection } from "./arena-media";

const commonFaqRo: Faq[] = [
  { q: "Cum verific disponibilitatea?", a: "Disponibilitatea si pretul se verifica online apasand butonul Rezerva online." },
  { q: "Cum se face check-in-ul?", a: "Check-in-ul este online. Fotografiezi actul de identitate (buletin sau pasaport pentru oaspetii din UE; doar pasaport pentru oaspetii non-UE), faci un selfie pe loc, achiti taxa de oras si semnezi regulamentul. La final se deschide guidebook-ul cu codul cutiei de chei." },
  { q: "Ce este guidebook-ul?", a: "Guidebook-ul contine instructiunile pentru self-check-in si raspunsurile la intrebarile uzuale. Se deschide oricand prin acelasi link folosit la check-in. Te rugam sa-l citesti inainte sa suni." },
  { q: "Exista parcare?", a: "Parcarea este gratuita pe strada si de obicei exista locuri disponibile in apropiere." },
  { q: "Pot fuma in interior?", a: "Nu. Fumatul este interzis in interior si poate duce la retinerea garantiei." }
];

const commonFaqEn: Faq[] = [
  { q: "How do I check availability?", a: "Availability and price are checked online by clicking the Book online button." },
  { q: "How does check-in work?", a: "Check-in is online. You photograph your ID (ID card or passport for EU guests; passport only for non-EU guests), take a selfie on the spot, pay the city tax and sign the house rules. The guidebook then opens with the key-box code." },
  { q: "What is the guidebook?", a: "The guidebook contains the self check-in instructions and answers to everyday questions. It opens any time through the same link used at check-in. Please read it before calling." },
  { q: "Is parking available?", a: "Parking is free on the street and spaces are usually available nearby." },
  { q: "Can I smoke inside?", a: "No. Smoking is not allowed inside and can lead to the deposit being withheld." }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "traseu-pe-jos-serene-studio-arena-nationala",
    locale: "ro",
    translationSlug: "walking-route-serene-studio-national-arena",
    title: "Traseu pe jos: Serene Studio - Arena Nationala (Piata Muncii, Sector 2)",
    description:
      "Cum ajungi pe jos de la Serene Studio (Strada Alexandru Zagoritz 12, Sector 2) la Arena Nationala Bucuresti: timp real ~14 minute, repere de pe traseu si tips pentru zilele de concert sau meci.",
    keyword:
      "traseu pe jos Arena Nationala Bucuresti, pe jos de la Piata Muncii la Arena Nationala, drum stadion Bucuresti",
    date: "2026-04-30",
    intro:
      "Articolul este un ghid de drum, nu o pagina de cazare. Daca esti deja cazat la Serene Studio (sau cauti repere reale pentru zona Piata Muncii - Bulevardul Basarabia), aici gasesti traseul pe jos pas cu pas: timp real, puncte de reper, tips pentru ziua evenimentului si optiuni de retur dupa concert sau meci.",
    ctaReferer: "website_blog_arena_traseu",
    sections: [
      {
        title: "Timpul real pe jos: ~14 minute, dar depinde de eveniment",
        intro:
          "De la Strada Alexandru Zagoritz 12 (Sector 2) pana la Bulevardul Basarabia 37-39 (intrarile Arenei Nationale) sunt aproximativ 1,1-1,3 km, in functie de poarta de acces.",
        paragraphs: [
          "In zilele obisnuite, mersul pe jos este de circa 14 minute la pas mediu. In zile de concert sau meci, accesul controlat de organizatori si fluxul de oameni pot adauga 5-15 minute pana la intrare.",
          "Verifica intotdeauna in Google Maps cu cateva ore inainte: la unele evenimente se inchid strazi adiacente si traseul redirectionat poate fi mai lung."
        ],
        table: {
          headers: ["Reper", "Pozitie", "Timp / distanta"],
          rows: [
            ["Plecare: Serene Studio", "Strada Alexandru Zagoritz 12, Sector 2", "0 min"],
            ["Metrou Piata Muncii (M1)", "Sosirea Piata Muncii", "~4 min pe jos"],
            ["Bulevardul Basarabia", "Pe directia Arena", "~9-10 min pe jos"],
            ["Sosire: Arena Nationala", "Bd. Basarabia 37-39, Sector 2", "~14 min pe jos"]
          ]
        }
      },
      {
        title: "Reperele de pe traseu - sa nu ratezi cotitura",
        intro:
          "Drumul tipic urmeaza Strada Alexandru Zagoritz spre Piata Muncii, apoi continua pe Bulevardul Basarabia direct catre stadion.",
        bullets: [
          "La iesirea din Serene Studio mergi spre Piata Muncii (sud-est) - vezi semnele pentru metrou M1",
          "Treci de Piata Muncii pastrand directia spre Bulevardul Basarabia",
          "Pe Bulevardul Basarabia mergi continuu pana vezi conturul stadionului si pasajul pietonal",
          "Intrarile pentru fani sunt pe Bd. Basarabia 37-39 - poarta exacta apare pe biletul tau",
          "Daca ai bilet la VIP / acces special, organizatorul iti trimite poarta separata"
        ]
      },
      {
        title: "Tips pentru zile de concert sau meci",
        intro:
          "Pleaca cu margine de timp si verifica regulamentul de acces, ca sa eviti aglomeratia chiar la poarta.",
        bullets: [
          "Pleaca de la Serene Studio cu 60-90 de minute inainte de ora din bilet pentru concerte mari",
          "Pentru meciuri ale nationalei sau Champions League adauga 30 de minute pentru filtrele de acces",
          "Lasa rucsacul mare si obiectele interzise la cazare (vezi regulamentul evenimentului)",
          "Hidrateaza-te inainte sa intri - in interior preturile cresc si cozile pot fi lungi",
          "Pe drumul de intoarcere, alege Piata Muncii in loc de strazile lipite de stadion - flux mai redus"
        ]
      },
      {
        title: "Drumul de intoarcere: cum eviti aglomeratia",
        intro:
          "De la Arena Nationala nu ai metrou direct catre Piata Muncii - cea mai apropiata statie M1 de stadion este Costin Georgian, iar drumul pana la ea este comparabil cu mersul direct catre Serene Studio.",
        paragraphs: [
          "Pentru oaspetii Serene Studio, mersul pe jos invers ramane cea mai predictibila optiune: ~14 minute, fara taxiul comun de dupa eveniment si fara surge price.",
          "Daca alegi taxi sau ridesharing, prevezi ca timpul de asteptare poate creste 15-30 de minute in primele 30 de minute dupa eveniment. Stabileste punctul de pickup cu cateva strazi mai departe de stadion, ca sa eviti zona blocata pentru evacuare.",
          "Transportul de suprafata pe Bulevardul Basarabia (autobuz / tramvai catre Mihai Bravu) este o alternativa, dar in primele 30-45 de minute dupa eveniment vehiculele sunt aglomerate si traseul ramane oricum mai lent decat mersul pe jos."
        ],
        table: {
          headers: ["Optiune retur", "Avantaj", "Atentie"],
          rows: [
            ["Pe jos (~14 min)", "predictibil, fara surge, fara cozi", "haine pentru vreme rece"],
            ["Autobuz/tramvai pe Bd. Basarabia", "alternativa daca ploua", "aglomerat dupa eveniment"],
            ["Taxi/ridesharing", "comod cu bagaj sau seara tarziu", "surge si asteptare dupa eveniment"]
          ]
        }
      },
      arenaPhotoSection("ro"),
      arenaVideoSection("ro"),
      {
        title: "Cauti cazare pentru un eveniment la Arena Nationala?",
        intro:
          "Acest articol este un ghid de traseu. Daca vrei pagina dedicata cazarii (preturi, disponibilitate, facilitati si rezervare online), continua aici.",
        cards: [
          {
            eyebrow: "Pagina cazare",
            title: "Cazare langa Arena Nationala - Serene Studio",
            text: "Studio privat in Sector 2, ~14 minute pe jos de stadion. Self check-in si rezervare online directa.",
            href: "/cazare-langa-arena-nationala/"
          }
        ]
      }
    ],
    faq: [
      { q: "Cat e drumul pe jos de la Serene Studio la Arena Nationala?", a: "Aproximativ 14 minute la pas mediu (~1,1-1,3 km), in functie de poarta de acces. In zile de eveniment, adauga 5-15 minute pentru filtrele de acces." },
      { q: "Care e ruta cea mai simpla pe jos?", a: "Iesi din Serene Studio (Str. Alexandru Zagoritz 12) spre Piata Muncii, apoi continui pe Bulevardul Basarabia pana la Arena Nationala (Bd. Basarabia 37-39)." },
      { q: "Pot merge pe jos seara dupa concert?", a: "Da. Mersul pe jos este de obicei mai predictibil decat taxiul/ridesharingul imediat dupa eveniment, cand tarifele si timpii de asteptare cresc." },
      { q: "Cat trebuie sa plec mai devreme pentru un meci?", a: "Pentru meciuri importante (nationala, Champions League) pleaca de la Serene Studio cu cel putin 60-90 minute inainte de ora din bilet pentru filtrele de acces." },
      ...commonFaqRo
    ]
  },
  {
    slug: "cazare-langa-spitalul-victor-babes-bucuresti",
    locale: "ro",
    translationSlug: "accommodation-near-victor-babes-hospital-bucharest",
    title: "Cazare langa Spitalul Victor Babes Bucuresti",
    description: "Cazare privata in Sector 2 pentru apartinatori sau oaspeti care cauta acces rapid catre Spitalul Victor Babes Bucuresti.",
    keyword: "cazare langa Spitalul Victor Babes Bucuresti",
    date: "2026-04-30",
    intro:
      "O cazare langa Spitalul Victor Babes este utila pentru apartinatori sau persoane care au program medical in estul Bucurestiului.",
    ctaReferer: "website_blog_victor_babes",
    sections: [
      {
        title: "Este Serene Studio potrivit pentru apartinatori?",
        intro: "Serene Studio poate fi potrivit pentru apartinatori care vor un spatiu privat, linistit si usor de rezervat online.",
        paragraphs: [
          "Proprietatea nu ofera servicii medicale si nu promite proximitate maxima fata de spital. Valoarea vine din intimitate, curatenie, chicineta si acces bun catre zona Piata Muncii - Mihai Bravu - Iancului.",
          "Pentru consultatii, internari sau vizite, verifica intotdeauna traseul exact in Google Maps inainte de plecare."
        ],
        table: { headers: ["Spital", "De ce conteaza", "Distanta / timp"], rows: hospitalRows.ro }
      },
      {
        title: "Ce ajuta intr-un sejur de cateva zile?",
        intro: "Chicineta, Wi-Fi-ul rapid si self-check-in-ul reduc frictiunea cand programul este variabil.",
        paragraphs: [
          "Poti folosi frigiderul, cuptorul cu microunde, aparatul de cafea si fierbatorul. Nu exista aragaz sau plita. Ai baie privata, prosoape si spatiu potrivit pentru odihna intre drumuri.",
          "Check-in-ul online se completeaza inainte de sosire, iar dupa completarea datelor necesare primesti codul pentru cutia de chei de la poarta."
        ]
      }
    ],
    faq: commonFaqRo
  },
  {
    slug: "cazare-langa-spitalul-monza-bucuresti",
    locale: "ro",
    translationSlug: "accommodation-near-monza-hospital-bucharest",
    title: "Cazare langa Spitalul Monza Bucuresti",
    description: "Studio privat in Bucuresti pentru oaspeti care cauta cazare linistita cu acces catre Spitalul Monza.",
    keyword: "cazare langa Spitalul Monza Bucuresti",
    date: "2026-04-30",
    intro:
      "Cazarea langa Spitalul Monza este cautata de pacienti, apartinatori si persoane care au nevoie de un spatiu privat in perioada controalelor.",
    ctaReferer: "website_blog_monza",
    sections: [
      {
        title: "Ce ofera Serene Studio pentru un sejur legat de Spitalul Monza?",
        intro: "Serene Studio ofera un studio privat, linistit, cu self-check-in si rezervare online.",
        paragraphs: [
          "Nu este o unitate medicala si nu promite servicii medicale. Este o cazare privata unde poti avea intimitate, Wi-Fi rapid, chicineta si acces rapid la transport/taxi.",
          "Pentru traseul catre Spitalul Monza, verifica ruta exacta in aplicatia de navigatie in ziua deplasarii."
        ],
        table: { headers: ["Punct", "Utilitate", "Observatie"], rows: [["Spitalul Monza", "Consultatii, controale, apartinatori", "Verifica ruta in Google Maps"], ["Piata Muncii", "Metrou si transport public", "aprox. 4 minute pe jos"], ["Serene Studio", "Cazare privata", "rezervare online directa"]] }
      },
      {
        title: "Cum eviti apelurile pentru rezervare?",
        intro: "Pretul si disponibilitatea se verifica direct, apasand butonul Rezerva online.",
        paragraphs: [
          "Fluxul este gandit pentru autoservire: rezervi online, completezi check-in-ul online (ID, selfie, taxa de oras, semnatura regulament) si folosesti codul pentru cutia de chei din guidebook.",
          "Telefonul ramane util pentru urgente sau pentru intrebari care nu se gasesc in guidebook."
        ]
      }
    ],
    faq: commonFaqRo
  },
  {
    slug: "cazare-piata-muncii-bucuresti",
    locale: "ro",
    translationSlug: "accommodation-piata-muncii-bucharest",
    title: "Cazare Piata Muncii Bucuresti",
    description: "Ghid pentru cazare la Piata Muncii Bucuresti: metrou aproape, Arena Nationala, Sector 2 si rezervare online.",
    keyword: "cazare Piata Muncii Bucuresti",
    date: "2026-04-30",
    intro:
      "Cazarea la Piata Muncii este potrivita cand vrei metrou aproape si acces rapid catre Arena Nationala, Mihai Bravu, Iancului si centrul orasului.",
    ctaReferer: "website_blog_piata_muncii",
    sections: [
      {
        title: "De ce conteaza metroul Piata Muncii?",
        intro: "Metroul Piata Muncii este la aproximativ 4 minute de mers pe jos de Serene Studio.",
        paragraphs: [
          "Pentru oaspeti, metroul inseamna trasee mai predictibile decat traficul de suprafata. Din zona poti ajunge rapid catre centru, Gara de Nord prin conexiuni si alte zone utile.",
          "Serene Studio este pe Strada Alexandru Zagoritz 12, intr-o zona rezidentiala linistita."
        ],
        table: { headers: ["Loc", "Rol", "Timp / distanta"], rows: locationRows.ro }
      },
      {
        title: "Ce tip de cazare gasesti aici?",
        intro: "Serene Studio este un singur studio privat, nu hotel si nu apartament impartit.",
        paragraphs: [
          "Ai pat matrimonial, baie privata, chicineta, Wi-Fi rapid, terasa/curte si parcare gratuita pe strada.",
          "Copiii sunt acceptati, dar dorm cu parintii in acelasi pat matrimonial. Animalele nu sunt acceptate."
        ]
      }
    ],
    faq: commonFaqRo
  },
  {
    slug: "cum-ajungi-de-la-otopeni-la-piata-muncii",
    locale: "ro",
    translationSlug: "how-to-get-from-otopeni-to-piata-muncii",
    title: "Cum ajungi de la Otopeni la Piata Muncii",
    description: "Rute practice de la Aeroportul Otopeni la Piata Muncii si Serene Studio: tren, metrou, taxi sau ridesharing.",
    keyword: "Otopeni Piata Muncii, aeroport Serene Studio Bucuresti",
    date: "2026-04-30",
    intro:
      "De la Aeroportul Otopeni la Piata Muncii poti ajunge cu trenul pana la Gara de Nord si apoi metrou/taxi, sau direct cu taxi/ridesharing.",
    ctaReferer: "website_blog_otopeni",
    sections: [
      {
        title: "Care este ruta cu transport public?",
        intro: "Ruta tipica este tren Aeroport Otopeni - Gara de Nord, apoi metrou si/sau taxi catre Piata Muncii.",
        paragraphs: [
          "Verifica programul trenului si traseul metroului in ziua sosirii, pentru ca orarele si lucrarile pot schimba timpul total.",
          "Daca ai bagaj mare sau ajungi tarziu, taxiul sau ridesharingul poate fi mai simplu."
        ],
        table: { headers: ["Optiune", "Avantaj", "Observatie"], rows: [["Tren + metrou", "cost predictibil", "verifica orarul"], ["Taxi/ridesharing", "mai simplu cu bagaje", "timp dependent de trafic"], ["Transfer privat", "comod", "necesita organizare separata"]] }
      },
      {
        title: "Ce trebuie sa faci inainte de sosire?",
        intro: "Finalizeaza check-in-ul online inainte sa ajungi la poarta.",
        paragraphs: [
          "Dupa check-in-ul online si completarea datelor necesare, folosesti codul de acces pentru cutia de chei de la poarta.",
          "Pentru rezervare, foloseste butonul Rezerva online, unde vezi pretul si disponibilitatea reala."
        ]
      }
    ],
    faq: commonFaqRo
  },
  {
    slug: "cazare-langa-parcul-ior-bucuresti",
    locale: "ro",
    translationSlug: "accommodation-near-ior-park-bucharest",
    title: "Cazare langa Parcul IOR Bucuresti",
    description: "Cazare privata in Sector 2 cu acces catre Parcul IOR, Piata Muncii si Arena Nationala.",
    keyword: "cazare langa Parcul IOR Bucuresti",
    date: "2026-04-30",
    intro:
      "Cazarea langa Parcul IOR este utila daca vrei un parc mare aproape si acces bun catre Piata Muncii si Sector 2.",
    ctaReferer: "website_blog_ior",
    sections: [
      {
        title: "De ce sa alegi zona Piata Muncii - IOR?",
        intro: "Zona combina metrou, acces la parc, Arena Nationala si o atmosfera rezidentiala.",
        paragraphs: [
          "Serene Studio este aproape de Piata Muncii, iar Parcul IOR / Alexandru Ioan Cuza este accesibil rapid cu transport public, taxi sau metrou.",
          "Pentru timpul exact de mers, verifica ruta in aplicatia de navigatie inainte sa pleci."
        ],
        table: { headers: ["Loc", "Utilitate", "Timp / distanta"], rows: locationRows.ro.slice(0, 6) }
      },
      {
        title: "Ce include studioul?",
        intro: "Studioul include facilitatile importante pentru un sejur scurt.",
        paragraphs: ["Ai pat matrimonial, baie privata, chicineta, Wi-Fi rapid si terasa/curte. Parcarea este gratuita pe strada si de obicei disponibila in apropiere."]
      }
    ],
    faq: commonFaqRo
  },
  {
    slug: "cazare-sector-2-bucuresti-studio-privat",
    locale: "ro",
    translationSlug: "sector-2-bucharest-private-studio-accommodation",
    title: "Cazare Sector 2 Bucuresti - studio privat",
    description: "Studio privat in Sector 2 Bucuresti, aproape de Piata Muncii, Arena Nationala si spitale, cu rezervare online.",
    keyword: "cazare Sector 2 Bucuresti studio privat",
    date: "2026-04-30",
    intro:
      "Un studio privat in Sector 2 este potrivit cand vrei mai multa intimitate decat intr-o camera de hotel si acces rapid la metrou.",
    ctaReferer: "website_blog_sector2",
    sections: [
      {
        title: "Ce diferentiaza un studio privat?",
        intro: "Intr-un studio privat rezervi intregul spatiu, nu imparti baia sau chicineta cu alti oaspeti.",
        paragraphs: [
          "Serene Studio are un pat matrimonial, baie privata, chicineta si zona exterioara. Este gandit pentru oaspeti care vor liniste si un flux de rezervare simplu.",
          "Check-in-ul este online, iar dupa completarea datelor necesare primesti codul pentru cutia de chei de la poarta."
        ]
      },
      {
        title: "Ce puncte utile sunt aproape?",
        intro: "Piata Muncii, Arena Nationala, Mega Mall si mai multe spitale sunt entitati importante pentru cautari locale.",
        table: { headers: ["Loc", "Utilitate", "Timp / distanta"], rows: locationRows.ro.slice(0, 5) }
      }
    ],
    faq: commonFaqRo
  },
  {
    slug: "cazare-langa-mega-mall-bucuresti",
    locale: "ro",
    translationSlug: "accommodation-near-mega-mall-bucharest",
    title: "Cazare langa Mega Mall Bucuresti",
    description: "Studio privat langa Piata Muncii, cu acces catre Mega Mall, Arena Nationala si Sector 2.",
    keyword: "cazare langa Mega Mall Bucuresti",
    date: "2026-04-30",
    intro:
      "Cazarea langa Mega Mall este practica daca vrei restaurante, cinema si cumparaturi aproape de zona Piata Muncii - Arena Nationala.",
    ctaReferer: "website_blog_mega_mall",
    sections: [
      {
        title: "Cat este pana la Mega Mall?",
        intro: "Mega Mall este la aproximativ 18-20 de minute pe jos de Serene Studio, dar timpul trebuie verificat inainte de plecare.",
        paragraphs: [
          "Pentru oaspeti, Mega Mall poate fi util pentru masa, cumparaturi rapide sau cinema. Arena Nationala si Piata Muncii sunt de asemenea aproape.",
          "Serene Studio ramane intr-o zona rezidentiala, potrivita pentru odihna dupa o zi plina."
        ],
        table: { headers: ["Loc", "Utilitate", "Timp / distanta"], rows: locationRows.ro.slice(0, 5) }
      },
      {
        title: "Cum rezervi?",
        intro: "Rezervarea se face online, apasand butonul Rezerva online; check-in-ul ulterior se completeaza tot online.",
        paragraphs: ["Aceasta separare ajuta: rezervarea online gestioneaza disponibilitatea si pretul, iar check-in-ul online (ID, selfie, taxa de oras, regulament) pregateste accesul self-check-in cu cod pentru cutia de chei, livrat in guidebook."]
      }
    ],
    faq: commonFaqRo
  },
  {
    slug: "self-check-in-bucuresti-cazare-studio-privat",
    locale: "ro",
    translationSlug: "self-check-in-bucharest-private-studio",
    title: "Self check-in in Bucuresti - cazare in studio privat",
    description: "Cum functioneaza self-check-in-ul la Serene Studio Bucuresti: rezervare online, check-in online cu verificare ID si cutie de chei la poarta.",
    keyword: "self check-in Bucuresti cazare",
    date: "2026-04-30",
    intro:
      "Self check-in-ul in Bucuresti este util daca ajungi tarziu sau nu vrei sa depinzi de predarea fizica a cheii.",
    ctaReferer: "website_blog_self_checkin",
    sections: [
      {
        title: "Cum functioneaza self-check-in-ul la Serene Studio?",
        intro: "Fluxul este complet online pana la acces: rezervare online, check-in online cu verificare ID si selfie, apoi codul pentru cutia de chei in guidebook.",
        paragraphs: [
          "Dupa ora 14:00 poti intra pe baza instructiunilor din guidebook. Cheia este in cutia de chei de la poarta, iar codul devine disponibil dupa finalizarea check-in-ului online.",
          "Este important sa finalizezi check-in-ul online inainte sa ajungi, ca sa eviti intarzieri. Daca pozele de la verificare nu sunt clare, rezervarea poate fi anulata fara ramburs."
        ],
        table: { headers: ["Pas", "Unde se face", "Rezultat"], rows: [["Rezervare", "Buton Rezerva online", "confirmare pe email"], ["Check-in online", "Link primit dupa rezervare", "ID, selfie, taxa de oras, regulament"], ["Acces", "Cutia de chei de la poarta", "codul disponibil in guidebook"]] }
      },
      {
        title: "Cand trebuie sa contactezi personalul?",
        intro: "Contactul este pentru urgente sau probleme care nu se pot rezolva din guidebook.",
        paragraphs: ["Pentru disponibilitate si pret, foloseste butonul Rezerva online. Pentru instructiuni si raspunsuri uzuale, deschide guidebook-ul prin acelasi link folosit la check-in-ul online."]
      }
    ],
    faq: commonFaqRo
  },
  {
    slug: "cazare-cu-chicineta-bucuresti-piata-muncii",
    locale: "ro",
    translationSlug: "accommodation-with-kitchenette-bucharest-piata-muncii",
    title: "Cazare cu chicineta in Bucuresti langa Piata Muncii",
    description: "Studio privat cu chicineta langa Piata Muncii, potrivit pentru sejururi scurte si rezervare online.",
    keyword: "cazare cu chicineta Bucuresti Piata Muncii",
    date: "2026-04-30",
    intro:
      "Cazarea cu chicineta in Bucuresti este utila cand vrei frigider, cuptor cu microunde, cafea sau ceai fara sa depinzi complet de restaurante.",
    ctaReferer: "website_blog_kitchenette",
    sections: [
      {
        title: "Ce include chicineta?",
        intro: "Chicineta Serene Studio este potrivita pentru mic dejun, bauturi si incalzire la cuptorul cu microunde.",
        paragraphs: [
          "Ai frigider, cuptor cu microunde, aparat de cafea si fierbator. Studioul include si cafea, ceai si apa filtrata, conform informatiilor existente.",
          "Nu exista aragaz sau plita. Pozitionarea corecta este chicineta pentru sejururi scurte, mic dejun, bauturi si incalzire la microunde, nu bucatarie pentru gatit."
        ]
      },
      {
        title: "Pentru cine conteaza chicineta?",
        intro: "Chicineta ajuta cuplurile, calatorii business si apartinatorii care stau cateva zile.",
        table: { headers: ["Oaspete", "De ce ajuta", "Observatie"], rows: [["Cupluri", "mic dejun simplu", "un singur pat matrimonial"], ["Business", "cafea si gustari", "Wi-Fi rapid"], ["Apartinatori", "frigider si microunde intre drumuri", "acces catre spitale"]] }
      }
    ],
    faq: commonFaqRo
  }
];

const englishPosts: BlogPost[] = [
  ["accommodation-near-victor-babes-hospital-bucharest", "cazare-langa-spitalul-victor-babes-bucuresti", "Accommodation near Victor Babes Hospital Bucharest", "Private accommodation in Sector 2 for relatives or guests who need access to Victor Babes Hospital Bucharest.", "accommodation near Victor Babes Hospital Bucharest", "Accommodation near Victor Babes Hospital can help relatives or guests with medical appointments in eastern Bucharest."],
  ["accommodation-near-monza-hospital-bucharest", "cazare-langa-spitalul-monza-bucuresti", "Accommodation near Monza Hospital Bucharest", "Private studio in Bucharest for guests looking for quiet accommodation with access to Monza Hospital.", "accommodation near Monza Hospital Bucharest", "Accommodation near Monza Hospital is searched by guests who need a private space during appointments or checks."],
  ["accommodation-piata-muncii-bucharest", "cazare-piata-muncii-bucuresti", "Accommodation in Piata Muncii Bucharest", "Guide to accommodation in Piata Muncii Bucharest: nearby metro, National Arena, Sector 2 and online booking.", "accommodation Piata Muncii Bucharest", "Accommodation in Piata Muncii is useful when you want nearby metro access and routes to the National Arena, Mihai Bravu, Iancului and the center."],
  ["how-to-get-from-otopeni-to-piata-muncii", "cum-ajungi-de-la-otopeni-la-piata-muncii", "How to get from Otopeni to Piata Muncii", "Practical routes from Otopeni Airport to Piata Muncii and Serene Studio: train, metro, taxi or ridesharing.", "Otopeni to Piata Muncii", "From Otopeni Airport to Piata Muncii you can travel by train to Gara de Nord and then metro/taxi, or directly by taxi/ridesharing."],
  ["accommodation-near-ior-park-bucharest", "cazare-langa-parcul-ior-bucuresti", "Accommodation near IOR Park Bucharest", "Private accommodation in Sector 2 with access to IOR Park, Piata Muncii and the National Arena.", "accommodation near IOR Park Bucharest", "Accommodation near IOR Park is useful if you want a large park nearby and good access to Piata Muncii and Sector 2."],
  ["sector-2-bucharest-private-studio-accommodation", "cazare-sector-2-bucuresti-studio-privat", "Sector 2 Bucharest accommodation - private studio", "Private studio in Sector 2 Bucharest, close to Piata Muncii, National Arena and hospitals, with online booking.", "Sector 2 Bucharest private studio accommodation", "A private studio in Sector 2 works well when you want more privacy than a hotel room and quick metro access."],
  ["accommodation-near-mega-mall-bucharest", "cazare-langa-mega-mall-bucuresti", "Accommodation near Mega Mall Bucharest", "Private studio near Piata Muncii, with access to Mega Mall, National Arena and Sector 2.", "accommodation near Mega Mall Bucharest", "Accommodation near Mega Mall is practical if you want restaurants, cinema and shopping near Piata Muncii - National Arena."],
  ["self-check-in-bucharest-private-studio", "self-check-in-bucuresti-cazare-studio-privat", "Self check-in in Bucharest - private studio accommodation", "How self check-in works at Serene Studio Bucharest: online booking, online check-in with ID verification and gate key box.", "self check-in Bucharest accommodation", "Self check-in in Bucharest is useful if you arrive late or prefer not to depend on in-person key handover."],
  ["accommodation-with-kitchenette-bucharest-piata-muncii", "cazare-cu-chicineta-bucuresti-piata-muncii", "Accommodation with kitchenette in Bucharest near Piata Muncii", "Private studio with kitchenette near Piata Muncii, suitable for short stays and online booking.", "accommodation with kitchenette Bucharest Piata Muncii", "Accommodation with a kitchenette in Bucharest is useful when you want a fridge, microwave, coffee or tea without depending completely on restaurants."]
].map(([slug, translationSlug, title, description, keyword, intro]) => ({
  slug,
  locale: "en" as const,
  translationSlug,
  title,
  description,
  keyword,
  date: "2026-04-30",
  intro,
  ctaReferer: `website_en_blog_${slug.replaceAll("-", "_")}`,
  sections: [
    {
      title: "Why choose this area?",
      intro: "Serene Studio combines a quiet residential setting with quick access to Piata Muncii metro and eastern Bucharest routes.",
      paragraphs: [
        "The studio is private, with a double bed, bathroom, kitchenette, fast Wi-Fi, terrace/courtyard and free street parking usually available nearby.",
        "For exact route times to hospitals, parks, malls or the airport, check Google Maps before leaving because traffic and event flows can change."
      ],
      table: { headers: ["Place", "Why it matters", "Time / distance"], rows: locationRows.en.slice(0, 5) }
    },
    {
      title: "How do booking and check-in work?",
      intro: "Booking is made by clicking the Book online button, while online check-in is completed after confirmation.",
      paragraphs: [
        "After confirmation, you complete the online check-in steps before arrival: ID photo (ID card or passport for EU guests; passport only for non-EU guests), a selfie on the spot, the city tax payment and a signature on the house rules. The guidebook then opens with the self check-in instructions.",
        "Access is fully self check-in with the key-box code at the gate, available in the guidebook after the check-in steps are completed."
      ]
    },
    {
      title: "Who is the studio suitable for?",
      intro: "The studio suits couples, business travelers, event guests and relatives visiting nearby hospitals.",
      paragraphs: [
        "Children are allowed, but they sleep with parents in the same double bed. Pets are not allowed and smoking is prohibited inside.",
        `The address is ${property.address}. Check-in is after ${property.checkin}, and check-out is by ${property.checkout}.`
      ]
    }
  ],
  faq: commonFaqEn
}));

const arenaWalkingRouteEn: BlogPost = {
  slug: "walking-route-serene-studio-national-arena",
  locale: "en",
  translationSlug: "traseu-pe-jos-serene-studio-arena-nationala",
  title: "Walking route: Serene Studio - National Arena (Piata Muncii, Sector 2)",
  description:
    "How to walk from Serene Studio (Strada Alexandru Zagoritz 12, Sector 2) to the National Arena Bucharest: real time about 14 minutes, landmarks along the route and tips for concert or match days.",
  keyword:
    "walking route to National Arena Bucharest, Piata Muncii to National Arena on foot, walk to stadium Bucharest",
  date: "2026-04-30",
  intro:
    "This article is a walking guide, not an accommodation page. If you're already staying at Serene Studio (or scouting real landmarks for the Piata Muncii - Bulevardul Basarabia area), this is the step-by-step walk: real time, landmarks, tips for event day and return options after a concert or match.",
  ctaReferer: "website_en_blog_arena_route",
  sections: [
    {
      title: "Real walking time: ~14 minutes, but it depends on the event",
      intro:
        "From Strada Alexandru Zagoritz 12 (Sector 2) to Bulevardul Basarabia 37-39 (the National Arena entrances) the distance is roughly 1.1-1.3 km, depending on which gate you use.",
      paragraphs: [
        "On a regular day the walk is about 14 minutes at an average pace. On concert or match days, organizer-controlled access and crowd flow can add 5-15 minutes before you reach your gate.",
        "Always double-check Google Maps a few hours before: some events close adjacent streets and the redirected route can be longer."
      ],
      table: {
        headers: ["Landmark", "Position", "Time / distance"],
        rows: [
          ["Start: Serene Studio", "Strada Alexandru Zagoritz 12, Sector 2", "0 min"],
          ["Piata Muncii metro (M1)", "Reaching Piata Muncii", "~4 min on foot"],
          ["Bulevardul Basarabia", "Heading to the Arena", "~9-10 min on foot"],
          ["Arrival: National Arena", "Bd. Basarabia 37-39, Sector 2", "~14 min on foot"]
        ]
      }
    },
    {
      title: "Landmarks along the way - don't miss the turn",
      intro:
        "The typical walk follows Strada Alexandru Zagoritz toward Piata Muncii, then continues straight on Bulevardul Basarabia to the stadium.",
      bullets: [
        "Leaving Serene Studio, head toward Piata Muncii (south-east) - look for the M1 metro signs",
        "Cross Piata Muncii staying in the Bulevardul Basarabia direction",
        "On Bulevardul Basarabia, walk straight until you see the stadium outline and the pedestrian crossing",
        "Fan entrances are at Bd. Basarabia 37-39 - the exact gate is printed on your ticket",
        "If you have VIP / special access, the organizer sends a separate gate"
      ]
    },
    {
      title: "Tips for concert or match days",
      intro:
        "Leave with a comfortable buffer and check the event access rules so you don't get stuck at the gate.",
      bullets: [
        "Leave Serene Studio 60-90 minutes before the time on your ticket for big concerts",
        "For Romania national team or Champions League matches add 30 minutes for security checks",
        "Leave large backpacks and forbidden items at the studio (check the event's rules)",
        "Hydrate before going in - inside, prices rise and queues can be long",
        "On the way back, pick Piata Muncii instead of streets glued to the stadium - lighter flow"
      ]
    },
    {
      title: "The walk back: how to avoid the rush",
      intro:
        "There is no direct metro from the National Arena to Piata Muncii - the closest M1 station to the stadium is Costin Georgian, and walking there is comparable to walking directly to Serene Studio.",
      paragraphs: [
        "For Serene Studio guests, walking back remains the most predictable option: ~14 minutes, with no shared post-event taxi and no surge price.",
        "If you choose taxi or ridesharing, expect waits to climb 15-30 minutes during the first 30 minutes after the event. Set the pickup point a few streets away from the stadium to avoid the evacuation-blocked area.",
        "Surface transport on Bulevardul Basarabia (bus / tram toward Mihai Bravu) is an alternative, but in the first 30-45 minutes after the event vehicles are packed and the route still stays slower than walking."
      ],
      table: {
        headers: ["Return option", "Advantage", "Watch out"],
        rows: [
          ["On foot (~14 min)", "predictable, no surge, no queues", "dress for cold weather"],
          ["Bus/tram on Bd. Basarabia", "alternative when it rains", "crowded after the event"],
          ["Taxi/ridesharing", "comfortable with luggage or late at night", "surge and wait after the event"]
        ]
      }
    },
    arenaPhotoSection("en"),
    arenaVideoSection("en"),
    {
      title: "Looking for accommodation for a National Arena event?",
      intro:
        "This article is a walking guide. If you want the dedicated accommodation page (price, availability, amenities and online booking), continue here.",
      cards: [
        {
          eyebrow: "Stay page",
          title: "Accommodation near the National Arena - Serene Studio",
          text: "Private studio in Sector 2, ~14 minutes on foot from the stadium. Self check-in and direct online booking.",
          href: "/en/accommodation-near-national-arena/"
        }
      ]
    }
  ],
  faq: [
    { q: "How long is the walk from Serene Studio to the National Arena?", a: "About 14 minutes at average pace (~1.1-1.3 km), depending on which gate you use. On event days, add 5-15 minutes for security and crowd flow." },
    { q: "What is the simplest walking route?", a: "Leave Serene Studio (Str. Alexandru Zagoritz 12) toward Piata Muncii, then continue on Bulevardul Basarabia straight to the National Arena (Bd. Basarabia 37-39)." },
    { q: "Can I walk back at night after a concert?", a: "Yes. Walking is usually more predictable than taxi/ridesharing right after the event, when prices and waits both spike." },
    { q: "How early should I leave for a match?", a: "For high-profile matches (Romania, Champions League) leave Serene Studio at least 60-90 minutes before the time on your ticket to clear security." },
    ...commonFaqEn
  ]
};

const nearbyPostsRo: BlogPost[] = [
  {
    slug: "cazare-langa-spitalul-copii-gomoiu-bucuresti",
    locale: "ro",
    translationSlug: "accommodation-near-gomoiu-childrens-hospital-bucharest",
    title: "Cazare langa Spitalul de Copii Dr. Victor Gomoiu Bucuresti - ghid pentru parinti",
    description:
      "Cazare privata in Sector 2 Bucuresti, la aproximativ 1,5 km de Spitalul Clinic de Copii Dr. Victor Gomoiu (Bd. Basarabia 21). Ghid practic pentru parinti si insotitori.",
    keyword: "cazare Spitalul Gomoiu Bucuresti, parinti spital de copii",
    date: "2026-04-30",
    intro:
      "Daca aduci copilul la Spitalul Clinic de Copii Dr. Victor Gomoiu, ai nevoie de cazare aproape, linistita si flexibila. Serene Studio se afla pe Strada Alexandru Zagoritz 12, Sector 2, la aproximativ 1,5 km de Bulevardul Basarabia 21.",
    ctaReferer: "website_blog_gomoiu",
    sections: [
      {
        title: "Adresa Spitalului Gomoiu si cum ajungi acolo",
        intro: "Spitalul are sediul principal pe Bulevardul Basarabia 21, Sector 2, cod postal 022102. Ambulatoriul este la Strada Rodul Pamantului 2-4, Sector 3.",
        paragraphs: [
          "De la Serene Studio, drumul cu masina dureaza in jur de 5-7 minute, in functie de trafic. Bulevardul Basarabia este aproape de Arena Nationala si de Soseaua Mihai Bravu, deci ai mai multe rute alternative.",
          "Daca preferi transportul public, statia de metrou Piata Muncii este la 4 minute pe jos de Serene Studio si te conecteaza rapid spre Iancului si Republica."
        ]
      },
      {
        title: "Ce inseamna sa stai aproape cand copilul e internat",
        intro: "Studioul are pat matrimonial, baie privata, chicineta si Wi-Fi rapid - util pentru video-call cu familia ramasa acasa.",
        paragraphs: [
          "Self check-in-ul functioneaza dupa ora 14:00. Codul cutiei de chei devine disponibil in guidebook dupa finalizarea check-in-ului online. Daca ajungi seara dupa o zi grea la spital, nu astepti la receptie.",
          "Orele de liniste 22:00-09:00 ajuta la somn corect, mai ales inainte de o zi de operatie sau dupa o zi cu multe vizite."
        ]
      }
    ],
    faq: [
      { q: "Care este adresa Spitalului Gomoiu?", a: "Sediul principal este pe Bulevardul Basarabia 21, Sector 2, Bucuresti, cod postal 022102. Ambulatoriul este pe Strada Rodul Pamantului 2-4, Sector 3." },
      { q: "Cat e de la Serene Studio la Spitalul Gomoiu?", a: "Aproximativ 1,5 km - cateva minute cu masina sau taxi. Verifica ruta in Google Maps inainte de plecare." },
      ...commonFaqRo
    ]
  },
  {
    slug: "cazare-langa-stadionul-dinamo-bucuresti",
    locale: "ro",
    translationSlug: "accommodation-near-dinamo-stadium-bucharest",
    title: "Cazare langa Stadionul Dinamo Bucuresti - studio privat in Sector 2",
    description:
      "Studio privat in Sector 2 Bucuresti, aproape de Stadionul Dinamo si Arena Nationala. Self check-in, chicineta, baie privata si rezervare online directa pentru fani si oaspeti.",
    keyword: "cazare Stadionul Dinamo Bucuresti, cazare Stefan cel Mare",
    date: "2026-04-30",
    intro:
      "Cazarea langa Stadionul Dinamo este utila daca ai bilet la meci sau participi la un eveniment in zona Stefan cel Mare. Serene Studio este la cativa kilometri distanta, intr-o zona rezidentiala linistita din Sector 2.",
    ctaReferer: "website_blog_dinamo",
    sections: [
      {
        title: "Cum ajungi de la Serene Studio la Stadionul Dinamo",
        intro: "Stadionul Dinamo se afla pe Soseaua Stefan cel Mare 7-9, Sector 2. Distanta de la Serene Studio este de aproximativ 3 km - 10-12 minute cu masina sau taxi, in functie de trafic.",
        paragraphs: [
          "Pe metrou, mergi de la Piata Muncii pana la Iancului sau Stefan cel Mare si continui cu un taxi scurt. Pentru zile de meci, traseul cu metroul evita aglomeratia auto din zona stadionului.",
          "Daca ai bilet la dubla Dinamo + Arena Nationala (concert sau alt eveniment), Serene Studio te plaseaza la mijloc intre cele doua puncte."
        ]
      },
      {
        title: "De ce o zona rezidentiala dupa meci",
        intro: "Strazile din jurul stadionului pot fi zgomotoase imediat dupa fluierul final. Serene Studio te scoate din fluxul de fani si te lasa sa dormi linistit.",
        paragraphs: [
          "Studioul este privat, cu pat matrimonial, baie proprie si chicineta. Self check-in-ul te lasa sa intri tarziu fara intermediar, cu codul cutiei de chei dupa check-in-ul online.",
          "Parcarea este gratuita pe strada si de obicei disponibila in apropiere - util cand ajungi tarziu si nu vrei sa cauti loc minute intregi."
        ]
      }
    ],
    faq: [
      { q: "Cat e de la Serene Studio la Stadionul Dinamo?", a: "Aproximativ 3 km - 10-12 minute cu masina sau taxi, in functie de trafic. Verifica ruta in Google Maps." },
      { q: "Pot ajunge cu metroul la stadion?", a: "Da, mergi de la Piata Muncii (la 4 min pe jos de Serene Studio) catre Iancului sau Stefan cel Mare si continui cu un taxi scurt." },
      ...commonFaqRo
    ]
  },
  {
    slug: "cazare-langa-spitalul-sf-pantelimon-bucuresti",
    locale: "ro",
    translationSlug: "accommodation-near-sf-pantelimon-hospital-bucharest",
    title: "Cazare langa Spitalul Sf. Pantelimon Bucuresti - studio privat in Sector 2",
    description:
      "Studio privat in Sector 2 Bucuresti, la aproximativ 3 km de Spitalul Clinic de Urgenta Sf. Pantelimon. Self check-in, chicineta, baie privata si rezervare online pentru pacienti si apartinatori.",
    keyword: "cazare Spitalul Sf. Pantelimon Bucuresti, cazare apartinatori urgenta",
    date: "2026-04-30",
    intro:
      "Spitalul Clinic de Urgenta Sf. Pantelimon (Soseaua Pantelimon 340-342, Sector 2) este unul dintre spitalele de urgenta importante din estul Bucurestiului. Cazarea aproape ajuta apartinatorii sa stea privati si linistiti intre vizite.",
    ctaReferer: "website_blog_pantelimon",
    sections: [
      {
        title: "Adresa si cum ajungi la spital",
        intro: "Adresa: Soseaua Pantelimon 340-342, Sector 2, Bucuresti. De la Serene Studio sunt aproximativ 3 km - 8-10 minute cu masina sau taxi.",
        paragraphs: [
          "Cu transport public, mergi pe Soseaua Mihai Bravu spre est. Pentru orele de varf, taxi-ul ramane mai predictibil decat tramvaiul, mai ales daca esti grabit.",
          "Farmaciile non-stop de pe Mihai Bravu si din Piata Muncii sunt utile pentru retetele de urgenta - te poti opri pe drumul de intoarcere catre Serene Studio."
        ]
      },
      {
        title: "Ce conteaza intr-un sejur de apartinator",
        intro: "Spitalul nu pune la dispozitie cazare pentru apartinatori - studioul privat devine baza ta de odihna intre vizite.",
        paragraphs: [
          "Serene Studio are chicineta cu microunde, frigider si aparat de cafea. Daca stai cateva zile, poti pregati gustari rapide fara sa depinzi de restaurantele din zona.",
          "Wi-Fi-ul rapid ajuta la coordonarea cu familia ramasa acasa, iar self check-in-ul iti permite sa intri si sa iesi dupa programul de la spital."
        ]
      }
    ],
    faq: [
      { q: "Cat e de la Serene Studio la Spitalul Sf. Pantelimon?", a: "Aproximativ 3 km - 8-10 minute cu masina sau taxi. Verifica ruta in Google Maps in ziua deplasarii." },
      { q: "Exista farmacii non-stop in zona?", a: "Da, pe Soseaua Mihai Bravu si in jurul Pietei Muncii sunt farmacii deschise 24/7." },
      ...commonFaqRo
    ]
  },
  {
    slug: "cum-ajungi-de-la-serene-studio-la-centrul-vechi-bucuresti",
    locale: "ro",
    translationSlug: "how-to-get-from-serene-studio-to-old-town-bucharest",
    title: "Cum ajungi de la Serene Studio la Centrul Vechi cu metroul",
    description:
      "Ghid practic: cum mergi de la Serene Studio (Sector 2, Piata Muncii) la Centrul Vechi al Bucurestiului cu metroul. Trasee rapide, alternative cu taxi si timpii reali.",
    keyword: "metrou Piata Muncii Centrul Vechi, transport Serene Studio centru",
    date: "2026-04-30",
    intro:
      "Centrul Vechi al Bucurestiului este la aproximativ 5 km de Serene Studio. Cu metroul de la Piata Muncii ajungi rapid si predictibil, fara stres in trafic.",
    ctaReferer: "website_blog_centrul_vechi",
    sections: [
      {
        title: "Ruta rapida cu metroul",
        intro: "Statia Piata Muncii este la aproximativ 4 minute pe jos de Serene Studio. De acolo iei magistrala M1 spre Universitate sau Piata Unirii - apoi 5-10 minute pe jos pana la Centrul Vechi.",
        paragraphs: [
          "Coboara la Universitate pentru zona Lipscani-Selari sau la Piata Unirii pentru zona Hanul lui Manuc si Stavropoleos. Ambele optiuni te duc la 5-10 minute pe jos in inima Centrului Vechi.",
          "In weekend si seara, fluxul de trenuri scade, deci verifica ultimul tren pe drumul de intoarcere - sau pregateste-te pentru un taxi pana acasa."
        ]
      },
      {
        title: "Alternative cu taxi sau ridesharing",
        intro: "Taxi-ul te duce direct in 15-25 minute, in functie de trafic. Pentru zone de seara, ridesharingul (Bolt, Uber) este de obicei mai disponibil pe ruta de intoarcere.",
        paragraphs: [
          "Daca alegi taxi-ul, drumul tipic trece prin Stefan cel Mare sau Mihai Bravu spre centru. Vinerea si sambata seara traficul poate fi destul de aglomerat in zona Universitate.",
          "Cand revii la Serene Studio dupa o seara in Centrul Vechi, accesul cu cod la cutia de chei te lasa sa intri direct, fara contact uman."
        ]
      }
    ],
    faq: [
      { q: "Cat de lung e drumul cu metroul de la Serene Studio la Centrul Vechi?", a: "In jur de 20-25 de minute, inclusiv cele 4 minute pe jos pana la metrou Piata Muncii si 5-10 minute pe jos de la Universitate sau Piata Unirii la Lipscani." },
      { q: "Care e ultima cursa de metrou?", a: "In general, metroul circula pana la aproximativ 23:00. Verifica orarul exact pentru ziua respectiva." },
      ...commonFaqRo
    ]
  },
  {
    slug: "obiective-langa-serene-studio-bucuresti-3-5-km",
    locale: "ro",
    translationSlug: "things-to-do-near-serene-studio-bucharest-3-5-km",
    title: "Top 7 obiective langa Serene Studio Bucuresti (3-5 km)",
    description:
      "Ghid de zona: spitale, mall-uri, stadioane, parcuri si destinatii turistice in raza de 3-5 km in jurul Serene Studio Bucuresti, Sector 2.",
    keyword: "obiective langa Serene Studio Bucuresti, ce sa vizitezi Sector 2",
    date: "2026-04-30",
    intro:
      "Serene Studio se afla pe Strada Alexandru Zagoritz 12, Sector 2, Bucuresti - aproape de Piata Muncii. In jurul studioului, intr-o raza de 3-5 km, ai spitale importante, mall-uri, parcuri si zone turistice. Iata cele mai utile.",
    ctaReferer: "website_blog_top_obiective",
    sections: [
      {
        title: "Spitale si centre medicale",
        intro: "Pentru pacienti si apartinatori, urmatoarele spitale sunt aproape de Serene Studio:",
        bullets: [
          "Spitalul Clinic de Copii Dr. Victor Gomoiu - Bd. Basarabia 21, ~1,5 km",
          "Spitalul Monza - Str. Tony Bulandra 27, ~2 km",
          "Spitalul Clinic de Urgenta Sf. Pantelimon - Sos. Pantelimon 340-342, ~3 km",
          "Spitalul Clinic Dr. Victor Babes - Sos. Mihai Bravu 281, ~3 km",
          "Spitalul Clinic Colentina - Sos. Stefan cel Mare 19-21, ~5 km"
        ]
      },
      {
        title: "Shopping si divertisment",
        intro: "Daca vrei o pauza de la sejurul medical sau o zi de turism urban:",
        bullets: [
          "Mega Mall - Bd. Pierre de Coubertin 3-5, ~18-20 min pe jos sau 5-7 min cu masina",
          "Bucur Obor - magazinul universal istoric din Sector 2, ~10 min pe jos",
          "Veranda Mall - Str. Ziduri Mosi 23, ~2 km"
        ]
      },
      {
        title: "Sport, parcuri si turism",
        intro: "Pentru aer liber sau evenimente:",
        bullets: [
          "Arena Nationala - concerte si meciuri, ~14 min pe jos",
          "Stadionul Dinamo - Sos. Stefan cel Mare 7-9, ~3 km",
          "Parcul IOR / Alexandru Ioan Cuza - lac si zona de plimbare, acces rapid cu metrou",
          "Centrul Vechi (Lipscani, Hanul lui Manuc) - ~5 km, 20-25 min cu metroul"
        ]
      }
    ],
    faq: [
      { q: "Care sunt cele mai apropiate spitale de Serene Studio?", a: "Spitalul Gomoiu (~1,5 km), Spitalul Monza (~2 km), Spitalul Sf. Pantelimon (~3 km), Spitalul Babes (~3 km) si Spitalul Colentina (~5 km)." },
      { q: "Cat e pana la Mega Mall pe jos?", a: "Aproximativ 18-20 de minute pe jos sau 5-7 minute cu masina/taxi." },
      { q: "Pot ajunge in Centrul Vechi cu metroul?", a: "Da, de la Piata Muncii (4 minute pe jos de Serene Studio) iei M1 pana la Universitate sau Piata Unirii - apoi 5-10 minute pe jos." },
      ...commonFaqRo
    ]
  }
];

const nearbyPostsEn: BlogPost[] = [
  {
    slug: "accommodation-near-gomoiu-childrens-hospital-bucharest",
    locale: "en",
    translationSlug: "cazare-langa-spitalul-copii-gomoiu-bucuresti",
    title: "Accommodation near Dr. Victor Gomoiu Children's Hospital Bucharest - parents' guide",
    description:
      "Private accommodation in Sector 2 Bucharest, about 1.5 km from the Dr. Victor Gomoiu Children's Clinical Hospital (Bd. Basarabia 21). Practical guide for parents and relatives.",
    keyword: "Gomoiu children's hospital Bucharest accommodation, parents stay",
    date: "2026-04-30",
    intro:
      "If you bring your child to the Dr. Victor Gomoiu Children's Clinical Hospital, you need accommodation that is close, quiet and flexible. Serene Studio is at Strada Alexandru Zagoritz 12, Sector 2, about 1.5 km from Bulevardul Basarabia 21.",
    ctaReferer: "website_en_blog_gomoiu",
    sections: [
      {
        title: "Gomoiu Hospital address and how to get there",
        intro: "The hospital's main location is at Bulevardul Basarabia 21, Sector 2, postal code 022102. The outpatient clinic is at Strada Rodul Pamantului 2-4, Sector 3.",
        paragraphs: [
          "From Serene Studio, the trip by car takes about 5-7 minutes depending on traffic. Bulevardul Basarabia is close to the National Arena and Soseaua Mihai Bravu, so you have multiple alternative routes.",
          "If you prefer public transport, Piata Muncii metro station is 4 minutes on foot from Serene Studio and connects you quickly toward Iancului and Republica."
        ]
      },
      {
        title: "What it means to stay close while your child is admitted",
        intro: "The studio has a double bed, private bathroom, kitchenette and fast Wi-Fi - useful for video calls with family back home.",
        paragraphs: [
          "Self check-in works after 14:00. The key-box code becomes available in your guidebook after online check-in is finalized. If you arrive in the evening after a heavy hospital day, no reception queue.",
          "Quiet hours 22:00-09:00 help you sleep properly, especially before a surgery day or after a day of many visits."
        ]
      }
    ],
    faq: [
      { q: "What is the address of Gomoiu Hospital?", a: "Main location: Bulevardul Basarabia 21, Sector 2, Bucharest, postal code 022102. Outpatient clinic: Strada Rodul Pamantului 2-4, Sector 3." },
      { q: "How far is Serene Studio from Gomoiu Hospital?", a: "About 1.5 km - a few minutes by car or taxi. Check the route in Google Maps before leaving." },
      ...commonFaqEn
    ]
  },
  {
    slug: "accommodation-near-dinamo-stadium-bucharest",
    locale: "en",
    translationSlug: "cazare-langa-stadionul-dinamo-bucuresti",
    title: "Accommodation near Dinamo Stadium Bucharest - private studio in Sector 2",
    description:
      "Private studio in Sector 2 Bucharest, close to Dinamo Stadium and the National Arena. Self check-in, kitchenette, private bathroom and direct online booking for fans and guests.",
    keyword: "Dinamo Stadium Bucharest accommodation, Stefan cel Mare stay",
    date: "2026-04-30",
    intro:
      "Accommodation near Dinamo Stadium is useful if you have a match ticket or attend an event in the Stefan cel Mare area. Serene Studio is a few kilometers away, in a quiet residential part of Sector 2.",
    ctaReferer: "website_en_blog_dinamo",
    sections: [
      {
        title: "How to get from Serene Studio to Dinamo Stadium",
        intro: "Dinamo Stadium is at Soseaua Stefan cel Mare 7-9, Sector 2. The distance from Serene Studio is about 3 km - 10-12 minutes by car or taxi depending on traffic.",
        paragraphs: [
          "By metro, go from Piata Muncii to Iancului or Stefan cel Mare and continue with a short taxi. On match days, the metro avoids the road congestion around the stadium.",
          "If you have a double event (Dinamo + a National Arena concert), Serene Studio places you between the two venues."
        ]
      },
      {
        title: "Why a residential area after the match",
        intro: "Streets around the stadium can be loud right after the final whistle. Serene Studio takes you out of the fan flow and lets you sleep quietly.",
        paragraphs: [
          "The studio is private, with a double bed, own bathroom and kitchenette. Self check-in lets you arrive late without an intermediary, with the key-box code from your online check-in.",
          "Street parking is free and usually available nearby - useful when you arrive late and don't want to spend minutes searching."
        ]
      }
    ],
    faq: [
      { q: "How far is Serene Studio from Dinamo Stadium?", a: "About 3 km - 10-12 minutes by car or taxi depending on traffic. Check the route in Google Maps." },
      { q: "Can I reach the stadium by metro?", a: "Yes, go from Piata Muncii (4 min walk from Serene Studio) toward Iancului or Stefan cel Mare and continue with a short taxi." },
      ...commonFaqEn
    ]
  },
  {
    slug: "accommodation-near-sf-pantelimon-hospital-bucharest",
    locale: "en",
    translationSlug: "cazare-langa-spitalul-sf-pantelimon-bucuresti",
    title: "Accommodation near Sf. Pantelimon Hospital Bucharest - private studio in Sector 2",
    description:
      "Private studio in Sector 2 Bucharest, about 3 km from Sf. Pantelimon Emergency Clinical Hospital. Self check-in, kitchenette, private bathroom and online booking for patients and relatives.",
    keyword: "Sf. Pantelimon Hospital Bucharest accommodation, emergency relatives stay",
    date: "2026-04-30",
    intro:
      "Sf. Pantelimon Emergency Clinical Hospital (Soseaua Pantelimon 340-342, Sector 2) is one of the major emergency hospitals in eastern Bucharest. Staying close helps relatives keep privacy and rest between visits.",
    ctaReferer: "website_en_blog_pantelimon",
    sections: [
      {
        title: "Address and how to reach the hospital",
        intro: "Address: Soseaua Pantelimon 340-342, Sector 2, Bucharest. From Serene Studio it's about 3 km - 8-10 minutes by car or taxi.",
        paragraphs: [
          "By public transport, go east on Soseaua Mihai Bravu. During rush hour, taxi remains more predictable than the tram, especially when time matters.",
          "24/7 pharmacies on Mihai Bravu and around Piata Muncii are useful for emergency prescriptions - you can stop on the way back to Serene Studio."
        ]
      },
      {
        title: "What matters in a relative's stay",
        intro: "The hospital does not provide accommodation for relatives - the private studio becomes your rest base between visits.",
        paragraphs: [
          "Serene Studio has a kitchenette with microwave, fridge and coffee maker. For a few days, you can prepare quick snacks without depending on local restaurants.",
          "Fast Wi-Fi helps coordinate with family back home, and self check-in lets you come and go around hospital hours."
        ]
      }
    ],
    faq: [
      { q: "How far is Serene Studio from Sf. Pantelimon Hospital?", a: "About 3 km - 8-10 minutes by car or taxi. Check the route in Google Maps on the day." },
      { q: "Are there 24/7 pharmacies nearby?", a: "Yes, pharmacies on Soseaua Mihai Bravu and around Piata Muncii are open around the clock." },
      ...commonFaqEn
    ]
  },
  {
    slug: "how-to-get-from-serene-studio-to-old-town-bucharest",
    locale: "en",
    translationSlug: "cum-ajungi-de-la-serene-studio-la-centrul-vechi-bucuresti",
    title: "How to get from Serene Studio to the Old Town of Bucharest by metro",
    description:
      "Practical guide: how to travel from Serene Studio (Sector 2, Piata Muncii) to Bucharest's Old Town by metro. Fast routes, taxi alternatives and real travel times.",
    keyword: "Piata Muncii metro Old Town Bucharest, Serene Studio city center transport",
    date: "2026-04-30",
    intro:
      "Bucharest's Old Town is about 5 km from Serene Studio. By metro from Piata Muncii you arrive quickly and predictably, without traffic stress.",
    ctaReferer: "website_en_blog_old_town",
    sections: [
      {
        title: "Quick metro route",
        intro: "Piata Muncii station is about 4 minutes on foot from Serene Studio. From there, take M1 toward Universitate or Piata Unirii - then a 5-10 minute walk to the Old Town.",
        paragraphs: [
          "Get off at Universitate for the Lipscani-Selari area or at Piata Unirii for Hanul lui Manuc and Stavropoleos. Either option puts you 5-10 minutes on foot from the heart of the Old Town.",
          "On weekends and evenings, train frequency drops, so check the last train on your way back - or be ready to take a taxi home."
        ]
      },
      {
        title: "Taxi or ridesharing alternatives",
        intro: "A taxi takes you directly in 15-25 minutes depending on traffic. For evenings, ridesharing (Bolt, Uber) is usually more available on the way back.",
        paragraphs: [
          "If you choose a taxi, the typical route runs through Stefan cel Mare or Mihai Bravu toward the center. Friday and Saturday nights, traffic around Universitate can be heavy.",
          "When you return to Serene Studio after an evening in the Old Town, the key-box code lets you walk in directly, no human contact required."
        ]
      }
    ],
    faq: [
      { q: "How long is the metro ride from Serene Studio to the Old Town?", a: "Around 20-25 minutes, including the 4 min walk to Piata Muncii and 5-10 min from Universitate or Piata Unirii to Lipscani." },
      { q: "When does the last metro run?", a: "Generally the metro runs until about 23:00. Check the exact schedule for the day." },
      ...commonFaqEn
    ]
  },
  {
    slug: "things-to-do-near-serene-studio-bucharest-3-5-km",
    locale: "en",
    translationSlug: "obiective-langa-serene-studio-bucuresti-3-5-km",
    title: "Top 7 things to do near Serene Studio Bucharest (3-5 km)",
    description:
      "Area guide: hospitals, malls, stadiums, parks and tourist destinations within a 3-5 km radius of Serene Studio Bucharest, Sector 2.",
    keyword: "things to do near Serene Studio Bucharest, Sector 2 attractions",
    date: "2026-04-30",
    intro:
      "Serene Studio is at Strada Alexandru Zagoritz 12, Sector 2, Bucharest - close to Piata Muncii. Within a 3-5 km radius around the studio you find major hospitals, malls, parks and tourist areas. Here are the most useful.",
    ctaReferer: "website_en_blog_things_to_do",
    sections: [
      {
        title: "Hospitals and medical centers",
        intro: "For patients and relatives, the following hospitals are close to Serene Studio:",
        bullets: [
          "Dr. Victor Gomoiu Children's Clinical Hospital - Bd. Basarabia 21, ~1.5 km",
          "Monza Hospital - Str. Tony Bulandra 27, ~2 km",
          "Sf. Pantelimon Emergency Hospital - Sos. Pantelimon 340-342, ~3 km",
          "Dr. Victor Babes Clinical Hospital - Sos. Mihai Bravu 281, ~3 km",
          "Colentina Clinical Hospital - Sos. Stefan cel Mare 19-21, ~5 km"
        ]
      },
      {
        title: "Shopping and entertainment",
        intro: "If you want a break from a hospital stay or a day of urban tourism:",
        bullets: [
          "Mega Mall - Bd. Pierre de Coubertin 3-5, ~18-20 min on foot or 5-7 min by car",
          "Bucur Obor - the historic department store in Sector 2, ~10 min on foot",
          "Veranda Mall - Str. Ziduri Mosi 23, ~2 km"
        ]
      },
      {
        title: "Sports, parks and tourism",
        intro: "For outdoor or events:",
        bullets: [
          "National Arena - concerts and matches, ~14 min on foot",
          "Dinamo Stadium - Sos. Stefan cel Mare 7-9, ~3 km",
          "IOR / Alexandru Ioan Cuza Park - lake and walking area, quick metro access",
          "Old Town (Lipscani, Hanul lui Manuc) - ~5 km, 20-25 min by metro"
        ]
      }
    ],
    faq: [
      { q: "Which are the closest hospitals to Serene Studio?", a: "Gomoiu Hospital (~1.5 km), Monza Hospital (~2 km), Sf. Pantelimon Hospital (~3 km), Babes Hospital (~3 km) and Colentina Hospital (~5 km)." },
      { q: "How far is Mega Mall on foot?", a: "About 18-20 minutes on foot or 5-7 minutes by car/taxi." },
      { q: "Can I reach the Old Town by metro?", a: "Yes, from Piata Muncii (4 minutes on foot from Serene Studio) take M1 to Universitate or Piata Unirii - then 5-10 minutes on foot." },
      ...commonFaqEn
    ]
  }
];

blogPosts.push(arenaWalkingRouteEn, ...englishPosts, ...nearbyPostsRo, ...nearbyPostsEn);

export function getBlogPost(locale: "ro" | "en", slug: string) {
  const post = blogPosts.find((item) => item.locale === locale && item.slug === slug);
  if (!post) throw new Error(`Blog post not found: ${locale}/${slug}`);
  return post;
}

export function getBlogPosts(locale: "ro" | "en") {
  return blogPosts.filter((post) => post.locale === locale);
}
