import { airportTrainRows, hospitalRows, locationRows, property } from "./site";
import type { BlogPost, Faq } from "./types";
import { arenaPhotoSection, arenaVideoSection } from "./arena-media";

const commonFaqRo: Faq[] = [
  { q: "Cum verific disponibilitatea?", a: "Disponibilitatea și prețul se verifică online apăsând butonul Rezervă online." },
  { q: "Cum se face check-in-ul?", a: "Check-in-ul este online. Fotografiezi actul de identitate (buletin sau pasaport pentru oaspeții din UE; doar pasaport pentru oaspeții non-UE), faci un selfie pe loc, achiți taxa de oraș și semnezi regulamentul. La final se deschide guidebook-ul cu codul cutiei de chei." },
  { q: "Ce este guidebook-ul?", a: "Guidebook-ul conține instrucțiunile pentru self-check-in și răspunsurile la întrebările uzuale. Se deschide oricând prin același link folosit la check-in. Te rugăm să-l citești înainte să suni." },
  { q: "Există parcare?", a: "Parcarea este gratuită pe stradă și de obicei există locuri disponibile în apropiere." },
  { q: "Pot fuma în interior?", a: "Nu. Fumatul este interzis în interior și poate duce la reținerea garanției." }
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
    title: "Traseu pe jos: Serene Studio - Arena Națională (Piața Muncii, Sector 2)",
    description:
      "Cum ajungi pe jos de la Serene Studio (Strada Alexandru Zagoritz 12, Sector 2) la Arena Națională București: timp real ~14 minute, repere de pe traseu și tips pentru zilele de concert sau meci.",
    keyword:
      "traseu pe jos Arena Națională București, pe jos de la Piața Muncii la Arena Națională, drum stadion București",
    date: "2026-04-30",
    intro:
      "Articolul este un ghid de drum, nu o pagină de cazare. Dacă ești deja cazat la Serene Studio (sau cauți repere reale pentru zona Piața Muncii - Bulevardul Basarabia), aici găsești traseul pe jos pas cu pas: timp real, puncte de reper, tips pentru ziua evenimentului și opțiuni de retur după concert sau meci.",
    ctaReferer: "website_blog_arena_traseu",
    sections: [
      {
        title: "Timpul real pe jos: ~14 minute, dar depinde de eveniment",
        intro:
          "De la Strada Alexandru Zagoritz 12 (Sector 2) până la Bulevardul Basarabia 37-39 (intrările Arenei Naționale) sunt aproximativ 1,1-1,3 km, în funcție de poarta de acces.",
        paragraphs: [
          "În zilele obișnuite, mersul pe jos este de circa 14 minute la pas mediu. În zile de concert sau meci, accesul controlat de organizatori și fluxul de oameni pot adăuga 5-15 minute până la intrare.",
          "Verifică întotdeauna în Google Maps cu câteva ore înainte: la unele evenimente se închid străzi adiacente și traseul redirecționat poate fi mai lung."
        ],
        table: {
          headers: ["Reper", "Poziție", "Timp / distanță"],
          rows: [
            ["Plecare: Serene Studio", "Strada Alexandru Zagoritz 12, Sector 2", "0 min"],
            ["Metrou Piața Muncii", "Sosirea Piața Muncii", "~4 min pe jos"],
            ["Bulevardul Basarabia", "Pe direcția Arena", "~9-10 min pe jos"],
            ["Sosire: Arena Națională", "Bd. Basarabia 37-39, Sector 2", "~14 min pe jos"]
          ]
        }
      },
      {
        title: "Reperele de pe traseu - să nu ratezi cotitura",
        intro:
          "Drumul tipic urmează Strada Alexandru Zagoritz spre Piața Muncii, apoi continuă pe Bulevardul Basarabia direct către stadion.",
        bullets: [
          "La ieșirea din Serene Studio mergi spre Piața Muncii (sud-est) - vezi semnele pentru stația de metrou",
          "Treci de Piața Muncii păstrând direcția spre Bulevardul Basarabia",
          "Pe Bulevardul Basarabia mergi continuu până vezi conturul stadionului și pasajul pietonal",
          "Intrările pentru fani sunt pe Bd. Basarabia 37-39 - poarta exactă apare pe biletul tău",
          "Dacă ai bilet la VIP / acces special, organizatorul îți trimite poarta separată"
        ]
      },
      {
        title: "Tips pentru zile de concert sau meci",
        intro:
          "Pleacă cu marjă de timp și verifică regulamentul de acces, ca să eviți aglomerația chiar la poartă.",
        bullets: [
          "Pleacă de la Serene Studio cu 60-90 de minute înainte de ora din bilet pentru concerte mari",
          "Pentru meciuri ale naționalei sau Champions League adaugă 30 de minute pentru filtrele de acces",
          "Lasă rucsacul mare și obiectele interzise la cazare (vezi regulamentul evenimentului)",
          "Hidratează-te înainte să intri - în interior prețurile cresc și cozile pot fi lungi",
          "Pe drumul de întoarcere, alege Piața Muncii în loc de străzile lipite de stadion - flux mai redus"
        ]
      },
      {
        title: "Drumul de întoarcere: cum eviți aglomerația",
        intro:
          "De la Arena Națională nu ai metrou direct către Piața Muncii - cea mai apropiată stație de metrou de stadion este Costin Georgian, iar drumul până la ea este comparabil cu mersul direct către Serene Studio.",
        paragraphs: [
          "Pentru oaspeții Serene Studio, mersul pe jos invers rămâne cea mai predictibilă opțiune: ~14 minute, fără taxiul comun de după eveniment și fără surge price.",
          "Dacă alegi taxi sau ridesharing, prevezi că timpul de așteptare poate crește 15-30 de minute în primele 30 de minute după eveniment. Stabilește punctul de pickup cu câteva străzi mai departe de stadion, ca să eviți zona blocată pentru evacuare.",
          "Transportul de suprafață pe Bulevardul Basarabia (autobuz / tramvai către Mihai Bravu) este o alternativă, dar în primele 30-45 de minute după eveniment vehiculele sunt aglomerate și traseul rămâne oricum mai lent decât mersul pe jos."
        ],
        table: {
          headers: ["Opțiune retur", "Avantaj", "Atenție"],
          rows: [
            ["Pe jos (~14 min)", "predictibil, fără surge, fără cozi", "haine pentru vreme rece"],
            ["Autobuz/tramvai pe Bd. Basarabia", "alternativă dacă plouă", "aglomerat după eveniment"],
            ["Taxi/ridesharing", "comod cu bagaj sau seara târziu", "surge și așteptare după eveniment"]
          ]
        }
      },
      arenaPhotoSection("ro"),
      arenaVideoSection("ro"),
      {
        title: "Cauți cazare pentru un eveniment la Arena Națională?",
        intro:
          "Acest articol este un ghid de traseu. Dacă vrei pagina dedicată cazării (prețuri, disponibilitate, facilități și rezervare online), continuă aici.",
        cards: [
          {
            eyebrow: "Pagină cazare",
            title: "Cazare lângă Arena Națională - Serene Studio",
            text: "Studio privat în Sector 2, ~14 minute pe jos de stadion. Self check-in și rezervare online directă.",
            href: "/cazare-langa-arena-nationala/"
          }
        ]
      }
    ],
    faq: [
      { q: "Cât e drumul pe jos de la Serene Studio la Arena Națională?", a: "Aproximativ 14 minute la pas mediu (~1,1-1,3 km), în funcție de poarta de acces. În zile de eveniment, adaugă 5-15 minute pentru filtrele de acces." },
      { q: "Care e ruta cea mai simplă pe jos?", a: "Ieși din Serene Studio (Str. Alexandru Zagoritz 12) spre Piața Muncii, apoi continui pe Bulevardul Basarabia până la Arena Națională (Bd. Basarabia 37-39)." },
      { q: "Pot merge pe jos seara după concert?", a: "Da. Mersul pe jos este de obicei mai predictibil decât taxiul/ridesharingul imediat după eveniment, când tarifele și timpii de așteptare cresc." },
      { q: "Cât trebuie să plec mai devreme pentru un meci?", a: "Pentru meciuri importante (națională, Champions League) pleacă de la Serene Studio cu cel puțin 60-90 minute înainte de ora din bilet pentru filtrele de acces." },
      ...commonFaqRo
    ]
  },
  {
    slug: "cazare-langa-spitalul-victor-babes-bucuresti",
    locale: "ro",
    translationSlug: "accommodation-near-victor-babes-hospital-bucharest",
    title: "Cazare lângă Spitalul Victor Babeș București",
    description: "Cazare privată în Sector 2 pentru aparținători sau oaspeți care caută acces rapid către Spitalul Victor Babeș București.",
    keyword: "cazare langa Spitalul Victor Babeș Bucuresti",
    date: "2026-04-30",
    intro:
      "O cazare lângă Spitalul Victor Babeș este utilă pentru aparținători sau persoane care au program medical în estul Bucureștiului.",
    ctaReferer: "website_blog_victor_babes",
    sections: [
      {
        title: "Este Serene Studio potrivit pentru aparținători?",
        intro: "Serene Studio poate fi potrivit pentru aparținători care vor un spațiu privat, liniștit și ușor de rezervat online.",
        paragraphs: [
          "Proprietatea nu oferă servicii medicale și nu promite proximitate maximă față de spital. Valoarea vine din intimitate, curățenie, chicinetă și acces bun către zona Piața Muncii - Mihai Bravu - Iancului.",
          "Pentru consultații, internări sau vizite, verifică întotdeauna traseul exact în Google Maps înainte de plecare."
        ],
        table: { headers: ["Spital", "De ce contează", "Distanța / timp"], rows: hospitalRows.ro }
      },
      {
        title: "Ce ajuta într-un sejur de câteva zile?",
        intro: "Chicineta, Wi-Fi-ul rapid și self-check-in-ul reduc fricțiunea când programul este variabil.",
        paragraphs: [
          "Poți folosi frigiderul, cuptorul cu microunde, aparatul de cafea și fierbătorul. Nu există aragaz sau plită. Ai baie privată, prosoape și spațiu potrivit pentru odihnă între drumuri.",
          "Check-in-ul online se completează înainte de sosire, iar după completarea datelor necesare primești codul pentru cutia de chei de la poartă."
        ]
      }
    ],
    faq: commonFaqRo
  },
  {
    slug: "cazare-langa-spitalul-monza-bucuresti",
    locale: "ro",
    translationSlug: "accommodation-near-monza-hospital-bucharest",
    title: "Cazare lângă Spitalul Monza București",
    description: "Studio privat în București pentru oaspeți care caută cazare liniștită cu acces către Spitalul Monza.",
    keyword: "cazare langa Spitalul Monza Bucuresti",
    date: "2026-04-30",
    intro:
      "Cazarea lângă Spitalul Monza este căutată de pacienți, aparținători și persoane care au nevoie de un spațiu privat în perioada controalelor.",
    ctaReferer: "website_blog_monza",
    sections: [
      {
        title: "Ce oferă Serene Studio pentru un sejur legat de Spitalul Monza?",
        intro: "Serene Studio oferă un studio privat, liniștit, cu self-check-in și rezervare online.",
        paragraphs: [
          "Nu este o unitate medicală și nu promite servicii medicale. Este o cazare privată unde poți avea intimitate, Wi-Fi rapid, chicinetă și acces rapid la transport/taxi.",
          "Pentru traseul către Spitalul Monza, verifică ruta exactă în aplicația de navigație în ziua deplasării."
        ],
        table: { headers: ["Punct", "Utilitate", "Observație"], rows: [["Spitalul Monza", "Consultații, controale, aparținători", "Verifică ruta în Google Maps"], ["Piata Muncii", "Metrou și transport public", "aprox. 4 minute pe jos"], ["Serene Studio", "Cazare privată", "rezervare online directă"]] }
      },
      {
        title: "Cum eviți apelurile pentru rezervare?",
        intro: "Prețul și disponibilitatea se verifică direct, apăsând butonul Rezervă online.",
        paragraphs: [
          "Fluxul este gândit pentru autoservire: rezervi online, completezi check-in-ul online (ID, selfie, taxa de oraș, semnătură regulament) și folosești codul pentru cutia de chei din guidebook.",
          "Telefonul este doar pentru urgențe — nu facem rezervări telefonic. Toate răspunsurile uzuale le găsești în guidebook, accesibil oricând prin același link folosit la check-in-ul online."
        ]
      }
    ],
    faq: commonFaqRo
  },
  {
    slug: "cazare-piata-muncii-bucuresti",
    locale: "ro",
    translationSlug: "accommodation-piata-muncii-bucharest",
    title: "Cazare Piața Muncii București",
    description: "Ghid pentru cazare la Piața Muncii București: metrou aproape, Arena Națională, Sector 2 și rezervare online.",
    keyword: "cazare Piata Muncii Bucuresti",
    date: "2026-04-30",
    intro:
      "Cazarea la Piața Muncii este potrivită când vrei metrou aproape și acces rapid către Arena Națională, Mihai Bravu, Iancului și centrul orașului.",
    ctaReferer: "website_blog_piata_muncii",
    sections: [
      {
        title: "De ce contează metroul Piața Muncii?",
        intro: "Metroul Piața Muncii este la aproximativ 4 minute de mers pe jos de Serene Studio.",
        paragraphs: [
          "Pentru oaspeți, metroul înseamnă trasee mai predictibile decât traficul de suprafață. Din zonă poți ajunge rapid către centru, Gara de Nord prin conexiuni și alte zone utile.",
          "Serene Studio este pe Strada Alexandru Zagoritz 12, într-o zonă rezidențială liniștită."
        ],
        table: { headers: ["Loc", "Rol", "Timp / distanță"], rows: locationRows.ro }
      },
      {
        title: "Ce tip de cazare găsești aici?",
        intro: "Serene Studio este un singur studio privat, nu hotel și nu apartament împărțit.",
        paragraphs: [
          "Ai pat matrimonial, baie privată, chicinetă, Wi-Fi rapid, terasă/curte și parcare gratuită pe stradă.",
          "Copiii sunt acceptati, dar dorm cu părinții în același pat matrimonial. Animalele nu sunt acceptate."
        ]
      }
    ],
    faq: commonFaqRo
  },
  {
    slug: "cum-ajungi-de-la-otopeni-la-piata-muncii",
    locale: "ro",
    translationSlug: "how-to-get-from-otopeni-to-piata-muncii",
    title: "Cum ajungi de la Otopeni la Serene Studio",
    description: "Ghid simplu de la Aeroportul Otopeni la Serene Studio: tren până la Gara de Nord, metrou din gară la Piața Muncii și 4 minute pe jos.",
    keyword: "Aeroport Otopeni Serene Studio, Otopeni Piata Muncii, tren aeroport Gara de Nord",
    date: "2026-05-01",
    intro:
      "Cea mai simplă rută: tren Aeroport Henri Coandă - Gara de Nord, metrou din gară până la Piața Muncii și 4 minute pe jos până la Serene Studio.",
    ctaReferer: "website_blog_otopeni",
    howTo: {
      name: "Cum ajungi de la Aeroportul Otopeni la Serene Studio București",
      description:
        "Traseu pas cu pas cu trenul până la Gara de Nord, metrou din gară până la Piața Muncii și mers pe jos până la Serene Studio.",
      totalTime: "PT60M",
      steps: [
        {
          name: "Mergi la Gara Aeroport Henri Coandă",
          text: "Din terminal urmezi indicatoarele către tren / Gara Aeroport. Peronul este lângă zona Sosiri."
        },
        {
          name: "Iei trenul spre București Nord",
          text: "Cumperi biletul și iei trenul Aeroport Henri Coandă - București Nord. Durata afișată de CFR Călători este aproximativ 20-25 minute."
        },
        {
          name: "La Gara de Nord cobori la metrou",
          text: "Stația de metrou este chiar în Gara de Nord. Urmezi indicatoarele Metrorex, cobori la metrou și intri pe peronul din dreapta, în direcția Dristor / Pantelimon, fără schimbare de magistrală."
        },
        {
          name: "Cobori la Piața Muncii",
          text: "Cobori la stația Piața Muncii, apoi folosești harta pentru ultima porțiune de aproximativ 4 minute pe jos."
        }
      ]
    },
    sections: [
      {
        title: "Care este ruta recomandată de la aeroport la Serene Studio?",
        intro: "Ruta recomandată este tren până la Gara de Nord, metrou din gară până la Piața Muncii și mers pe jos până la Serene Studio.",
        paragraphs: [
          "La actualizarea din 1 mai 2026, CFR Călători afișează pentru ruta Aeroport Henri Coandă - București Nord o durată de aproximativ 20-25 minute și tarif de 6,50 lei pentru trenurile sale. Există și alți operatori pe această rută, deci verifică biletul și ora trenului înainte de plecare.",
          "După ce ajungi la Gara de Nord, nu trebuie să traversezi orașul cu autobuzul și nu depinzi de trafic. Stația de metrou este chiar în gară: urmezi indicatoarele Metrorex, cobori la metrou, intri pe peronul din dreapta, iei metroul până la Piața Muncii. Serene Studio este la aproximativ 4 minute pe jos de stația Piața Muncii."
        ],
        imageGallery: [
          {
            key: "airportPlatform",
            caption: {
              ro: "Peronul Gării Aeroport Henri Coandă: de aici pleacă trenurile spre București Nord.",
              en: "Henri Coanda Airport railway station platform: trains leave from here toward Bucharest North."
            }
          },
          {
            key: "airportTrainInterior",
            caption: {
              ro: "Interiorul trenului de aeroport, varianta predictibilă când vrei să eviți traficul.",
              en: "Airport train interior, the predictable option when you want to avoid traffic."
            }
          }
        ],
        video: {
          base: "gara-aeroport-otopeni-bucuresti",
          poster: "/video/gara-aeroport-otopeni-bucuresti-poster.jpg",
          posterWebp: "/video/gara-aeroport-otopeni-bucuresti-poster.webp",
          durationSeconds: 6,
          uploadDate: "2026-05-01",
          width: 960,
          height: 710,
          name: {
            ro: "Gara Aeroport Henri Coandă (Otopeni) - punctul de plecare al trenului spre București Nord",
            en: "Henri Coanda Airport railway station (Otopeni) - departure point for the train to Bucharest North"
          },
          description: {
            ro: "Filmare scurtă din Gara Aeroport Henri Coandă, lângă terminalul Otopeni - aici iei trenul direct spre București Nord, primul pas al rutei către Serene Studio (metrou din Gara de Nord până la Piața Muncii și 4 minute pe jos).",
            en: "Short clip from the Henri Coanda Airport railway station next to Otopeni terminal - this is where you board the direct train to Bucharest North, the first leg of the route to Serene Studio (metro from Gara de Nord to Piata Muncii and a 4-minute walk)."
          },
          contentLocation: {
            name: "Gara Aeroport Henri Coandă",
            address: "Calea Bucureștilor 224E, Otopeni 075150, Județul Ilfov",
            lat: 44.5722,
            lon: 26.1025
          }
        },
        table: {
          headers: ["Pas", "Ce faci", "Timp orientativ"],
          rows: [
            ["1", "Aeroport Henri Coandă - mergi la Gara Aeroport", "5-10 minute din zona Sosiri"],
            ["2", "Tren Aeroport Henri Coandă - București Nord", "aprox. 20-25 minute"],
            ["3", "Metrou din Gara de Nord - peronul din dreapta - Piața Muncii", "aprox. 15-20 minute"],
            ["4", "Piața Muncii - Serene Studio, Str. Alexandru Zagoritz 12", "aprox. 4 minute pe jos"]
          ]
        }
      },
      {
        title: "Plecări și sosiri Aeroport Henri Coandă - Gara de Nord",
        intro:
          "Mai jos sunt câteva exemple de trenuri directe Aeroport Henri Coandă - București Nord. Tabelul este orientativ, nu orarul complet; verifică site-ul oficial de mers al trenurilor, CFR Călători sau operatorul trenului în ziua aterizării.",
        table: {
          headers: ["Plecare aeroport", "Sosire Gara de Nord", "Durată", "Operator / tren"],
          rows: airportTrainRows.ro
        }
      },
      {
        title: "De ce este simplu cu trenul și metroul?",
        intro: "Este simplu pentru că ai două segmente principale: un tren direct până la Gara de Nord și o singură linie de metrou până la Piața Muncii.",
        paragraphs: [
          "Pentru un oaspete care vine prima dată în București, ruta are puține decizii: urmezi indicatoarele de tren din aeroport, cobori la capătul feroviar principal al orașului, apoi cobori la metrou chiar din Gara de Nord, intri pe peronul din dreapta și iei metroul până la Piața Muncii. Nu trebuie să negociezi taxi, nu trebuie să schimbi autobuze și nu stai blocat pe DN1.",
          "La metrou cumperi un titlu de călătorie separat. Tarifele Metrorex se pot schimba, de aceea este mai sigur să verifici prețul actual la automatele din stație sau pe site-ul Metrorex în ziua sosirii."
        ],
        image: "airportCanopy",
        imageCaption: "Gara Aeroport Henri Coandă este ușor de recunoscut: peron acoperit, indicatoare clare și trenuri către București Nord."
      },
      {
        title: "Cât durează realist drumul de la Otopeni la Piața Muncii?",
        intro: "În mers efectiv, ruta este de aproximativ 40-45 minute; cu așteptarea trenului și orientarea în stații, planifică 50-75 minute.",
        paragraphs: [
          "Timpul total depinde mai mult de cât aștepți trenul decât de traficul rutier. Dacă tocmai pleacă un tren când ajungi la peron, următorul poate adăuga timp la călătorie. Verifică mersul trenurilor înainte să ieși din terminal.",
          "Dacă ai o sosire seara târziu, bagaj voluminos sau vii cu mai multe valize, un taxi sau ridesharing poate fi mai comod. Totuși, pe timpul zilei, trenul + metroul rămân de obicei cea mai predictibilă variantă."
        ],
        table: {
          headers: ["Variantă", "Când e potrivită", "Timp orientativ"],
          rows: [
            ["Tren + metrou + mers pe jos", "bagaj normal, vrei cost predictibil", "50-75 minute cu așteptare"],
            ["Tren + taxi din Gara de Nord", "bagaj mare, dar vrei să eviți DN1", "45-70 minute"],
            ["Taxi/ridesharing direct din aeroport", "sosire târzie sau multe bagaje", "35-70 minute, în funcție de trafic"]
          ]
        }
      },
      {
        title: "Cum ajungi de la Piața Muncii la Serene Studio?",
        intro: "De la metrou Piața Muncii până la Serene Studio faci aproximativ 4 minute pe jos.",
        paragraphs: [
          `Adresa este ${property.address}. Pentru ultima porțiune, deschide Google Maps, Apple Maps sau Waze și caută Serene Studio / Strada Alexandru Zagoritz 12.`,
          "Zona este rezidențială, cu străzi mai liniștite decât bulevardele mari. Dacă ajungi seara, păstrează harta deschisă până la poartă și verifică din timp instrucțiunile din guidebook."
        ],
        table: {
          headers: ["Reper", "Rol", "Timp / distanță"],
          rows: [
            ["Metrou Piața Muncii", "stația de metrou pentru Serene Studio", "aprox. 4 minute pe jos"],
            ["Strada Alexandru Zagoritz 12", "adresa cazării", "Sector 2, București 021998"],
            ["Arena Națională", "reper mare în apropiere", "aprox. 14 minute pe jos de studio"]
          ]
        }
      },
      {
        title: "Ce trebuie să faci înainte să ajungi la poartă?",
        intro: "Finalizează check-in-ul online înainte să ajungi la Serene Studio, ca să ai codul pentru cutia de chei.",
        paragraphs: [
          "După rezervare, completezi check-in-ul online: fotografiezi documentul acceptat, faci selfie pe loc, achiți taxa de oraș și semnezi regulamentul. La final se deschide guidebook-ul cu instrucțiunile de acces.",
          "Nu facem rezervări telefonic. Telefonul este doar pentru urgențe. Toate informațiile pentru sejur le găsești în guidebook, accesibil oricând prin același link folosit la check-in-ul online."
        ]
      },
      {
        title: "Unde verifici orarul și traseul înainte să pleci?",
        intro: "Verifică orarul trenului și harta metroului în ziua sosirii, mai ales dacă aterizezi seara sau în perioade cu lucrări.",
        cards: [
          {
            eyebrow: "Plecări / sosiri",
            title: "Mersul trenurilor - stația Aeroport Henri Coandă",
            text: "Verifică plecările și sosirile din stația Aeroport Henri Coandă în ziua aterizării.",
            href: "https://m.infofer.ro/ro-RO/Statie/Aeroport-Henri-Coanda"
          },
          {
            eyebrow: "Tren aeroport",
            title: "CFR Călători - Aeroport Henri Coandă",
            text: "Durată, tarif, cumpărare bilet și informații pentru trenurile CFR spre București Nord.",
            href: "https://www.cfrcalatori.ro/bucuresti-nord-aeroport-henri-coanda/"
          },
          {
            eyebrow: "Exemple RE",
            title: "Transferoviar Călători - Aeroport - București Nord",
            text: "Tabel public cu plecări și sosiri RE între Aeroport Henri Coandă și București Nord.",
            href: "https://transferoviarcalatori.ro/ro/mersul-trenurilor/bucuresti-nord-aeroport-h-coanda"
          },
          {
            eyebrow: "Metrou",
            title: "Harta oficială Metrorex",
            text: "Verifică ruta de metrou Gara de Nord - Piața Muncii și conexiunile din București.",
            href: "https://www.metrorex.ro/storage/documents/1732693185harta_metrorex.pdf"
          },
          {
            eyebrow: "Aeroport",
            title: "Conexiunea cu trenul la Aeroportul Henri Coandă",
            text: "Informații de orientare pentru gara aflată lângă terminalul Sosiri.",
            href: "https://www.bucharestairports.ro/ro/transport/conexiune-tren"
          }
        ]
      }
    ],
    faq: [
      {
        q: "Care este cea mai simplă rută de la Aeroportul Otopeni la Serene Studio?",
        a: "Cea mai simplă rută este tren Aeroport Henri Coandă - Gara de Nord, apoi cobori la metrou chiar în gară, intri pe peronul din dreapta, iei metroul până la Piața Muncii și mai ai aproximativ 4 minute pe jos până la Serene Studio."
      },
      {
        q: "Trebuie să schimb linia de metrou?",
        a: "Nu. Stația de metrou este chiar în Gara de Nord; cobori la metrou, intri pe peronul din dreapta și iei metroul până la Piața Muncii."
      },
      {
        q: "Cât durează total drumul de la Otopeni la Serene Studio?",
        a: "Planifică aproximativ 50-75 minute cu transport public, incluzând mersul prin stații și așteptarea trenului. În mers efectiv, ruta este de aproximativ 40-45 minute."
      },
      {
        q: "Cât costă trenul Aeroport Henri Coandă - Gara de Nord?",
        a: "La actualizarea din 1 mai 2026, CFR Călători afișa 6,50 lei pentru trenurile sale pe ruta Aeroport Henri Coandă - București Nord. Verifică tariful în ziua plecării."
      },
      {
        q: "Ce fac dacă am bagaj mare?",
        a: "Poți lua trenul până la Gara de Nord și apoi taxi/ridesharing către Serene Studio, sau taxi/ridesharing direct din aeroport. Pentru bagaj normal, tren + metrou este varianta predictibilă."
      },
      {
        q: "Pot rezerva telefonic dacă sunt deja în aeroport?",
        a: "Nu facem rezervări telefonic. Apasă Rezervă online ca să vezi prețul și disponibilitatea. Telefonul este doar pentru urgențe."
      },
      ...commonFaqRo
    ]
  },
  {
    slug: "cazare-langa-parcul-ior-bucuresti",
    locale: "ro",
    translationSlug: "accommodation-near-ior-park-bucharest",
    title: "Cazare lângă Parcul IOR București",
    description: "Cazare privată în Sector 2 cu acces către Parcul IOR, Piața Muncii și Arena Națională.",
    keyword: "cazare langa Parcul IOR Bucuresti",
    date: "2026-04-30",
    intro:
      "Cazarea lângă Parcul IOR este utilă dacă vrei un parc mare aproape și acces bun către Piața Muncii și Sector 2.",
    ctaReferer: "website_blog_ior",
    sections: [
      {
        title: "De ce să alegi zona Piața Muncii - IOR?",
        intro: "Zona combină metrou, acces la parc, Arena Națională și o atmosferă rezidențială.",
        paragraphs: [
          "Serene Studio este aproape de Piața Muncii, iar Parcul IOR / Alexandru Ioan Cuza este accesibil rapid cu transport public, taxi sau metrou.",
          "Pentru timpul exact de mers, verifică ruta în aplicația de navigație înainte să pleci."
        ],
        table: { headers: ["Loc", "Utilitate", "Timp / distanță"], rows: locationRows.ro.slice(0, 6) }
      },
      {
        title: "Ce include studioul?",
        intro: "Studioul include facilitățile importante pentru un sejur scurt.",
        paragraphs: ["Ai pat matrimonial, baie privată, chicinetă, Wi-Fi rapid și terasă/curte. Parcarea este gratuită pe stradă și de obicei disponibilă în apropiere."]
      }
    ],
    faq: commonFaqRo
  },
  {
    slug: "cazare-sector-2-bucuresti-studio-privat",
    locale: "ro",
    translationSlug: "sector-2-bucharest-private-studio-accommodation",
    title: "Cazare Sector 2 București - studio privat",
    description: "Studio privat în Sector 2 București, aproape de Piața Muncii, Arena Națională și spitale, cu rezervare online.",
    keyword: "cazare Sector 2 Bucuresti studio privat",
    date: "2026-04-30",
    intro:
      "Un studio privat în Sector 2 este potrivit când vrei mai multă intimitate decât într-o cameră de hotel și acces rapid la metrou.",
    ctaReferer: "website_blog_sector2",
    sections: [
      {
        title: "Ce diferențiază un studio privat?",
        intro: "Într-un studio privat rezervi întregul spațiu, nu împarți baia sau chicineta cu alți oaspeți.",
        paragraphs: [
          "Serene Studio are un pat matrimonial, baie privată, chicinetă și zona exterioară. Este gândit pentru oaspeți care vor liniște și un flux de rezervare simplu.",
          "Check-in-ul este online, iar după completarea datelor necesare primești codul pentru cutia de chei de la poartă."
        ]
      },
      {
        title: "Ce puncte utile sunt aproape?",
        intro: "Piața Muncii, Arena Națională, Mega Mall și mai multe spitale sunt entități importante pentru căutări locale.",
        table: { headers: ["Loc", "Utilitate", "Timp / distanță"], rows: locationRows.ro.slice(0, 5) }
      }
    ],
    faq: commonFaqRo
  },
  {
    slug: "cazare-langa-mega-mall-bucuresti",
    locale: "ro",
    translationSlug: "accommodation-near-mega-mall-bucharest",
    title: "Cazare lângă Mega Mall București",
    description: "Studio privat lângă Piața Muncii, cu acces către Mega Mall, Arena Națională și Sector 2.",
    keyword: "cazare langa Mega Mall Bucuresti",
    date: "2026-04-30",
    intro:
      "Cazarea lângă Mega Mall este practica dacă vrei restaurante, cinema și cumpărături aproape de zona Piața Muncii - Arena Națională.",
    ctaReferer: "website_blog_mega_mall",
    sections: [
      {
        title: "Cât este până la Mega Mall?",
        intro: "Mega Mall este la aproximativ 18-20 de minute pe jos de Serene Studio, dar timpul trebuie verificat înainte de plecare.",
        paragraphs: [
          "Pentru oaspeți, Mega Mall poate fi util pentru masă, cumpărături rapide sau cinema. Arena Națională și Piața Muncii sunt de asemenea aproape.",
          "Serene Studio rămâne într-o zonă rezidențială, potrivită pentru odihnă după o zi plina."
        ],
        table: { headers: ["Loc", "Utilitate", "Timp / distanță"], rows: locationRows.ro.slice(0, 5) }
      },
      {
        title: "Cum rezervi?",
        intro: "Rezervarea se face online, apăsând butonul Rezervă online; check-in-ul ulterior se completează tot online.",
        paragraphs: ["Această separare ajută: rezervarea online gestionează disponibilitatea și prețul, iar check-in-ul online (ID, selfie, taxa de oraș, regulament) pregătește accesul self-check-in cu cod pentru cutia de chei, livrat în guidebook."]
      }
    ],
    faq: commonFaqRo
  },
  {
    slug: "self-check-in-bucuresti-cazare-studio-privat",
    locale: "ro",
    translationSlug: "self-check-in-bucharest-private-studio",
    title: "Self check-in în București - cazare în studio privat",
    description: "Cum funcționează self-check-in-ul la Serene Studio București: rezervare online, check-in online cu verificare ID și cutie de chei la poartă.",
    keyword: "self check-in Bucuresti cazare",
    date: "2026-04-30",
    intro:
      "Self check-in-ul în București este util dacă ajungi târziu sau nu vrei să depinzi de predarea fizică a cheii.",
    ctaReferer: "website_blog_self_checkin",
    sections: [
      {
        title: "Cum funcționează self-check-in-ul la Serene Studio?",
        intro: "Fluxul este complet online până la acces: rezervare online, check-in online cu verificare ID și selfie, apoi codul pentru cutia de chei în guidebook.",
        paragraphs: [
          "După ora 14:00 poți intra pe baza instrucțiunilor din guidebook. Cheia este în cutia de chei de la poartă, iar codul devine disponibil după finalizarea check-in-ului online.",
          "Este important să finalizezi check-in-ul online înainte să ajungi, ca să eviți întârzieri. Dacă pozele de la verificare nu sunt clare, rezervarea poate fi anulată fără ramburs."
        ],
        table: { headers: ["Pas", "Unde se face", "Rezultat"], rows: [["Rezervare", "Buton Rezervă online", "confirmare pe email"], ["Check-in online", "Link primit după rezervare", "ID, selfie, taxa de oraș, regulament"], ["Acces", "Cutia de chei de la poartă", "codul disponibil în guidebook"]] }
      },
      {
        title: "Când trebuie să contactezi personalul?",
        intro: "Contactul este pentru urgențe sau probleme care nu se pot rezolva din guidebook.",
        paragraphs: ["Pentru disponibilitate și preț, folosește butonul Rezervă online. Pentru instrucțiuni și răspunsuri uzuale, deschide guidebook-ul prin același link folosit la check-in-ul online."]
      }
    ],
    faq: commonFaqRo
  },
  {
    slug: "cazare-cu-chicineta-bucuresti-piata-muncii",
    locale: "ro",
    translationSlug: "accommodation-with-kitchenette-bucharest-piata-muncii",
    title: "Cazare cu chicinetă în București lângă Piața Muncii",
    description: "Studio privat cu chicinetă lângă Piața Muncii, potrivit pentru sejururi scurte și rezervare online.",
    keyword: "cazare cu chicineta Bucuresti Piata Muncii",
    date: "2026-04-30",
    intro:
      "Cazarea cu chicinetă în București este utilă când vrei frigider, cuptor cu microunde, cafea sau ceai fără să depinzi complet de restaurante.",
    ctaReferer: "website_blog_kitchenette",
    sections: [
      {
        title: "Ce include chicineta?",
        intro: "Chicineta Serene Studio este potrivită pentru mic dejun, băuturi și încălzire la cuptorul cu microunde.",
        paragraphs: [
          "Ai frigider, cuptor cu microunde, aparat de cafea și fierbător. Studioul include și cafea, ceai și apă filtrată, conform informațiilor existente.",
          "Nu există aragaz sau plită. Poziționarea corectă este chicinetă pentru sejururi scurte, mic dejun, băuturi și încălzire la microunde, nu bucătărie pentru gătit."
        ]
      },
      {
        title: "Pentru cine contează chicineta?",
        intro: "Chicineta ajută cuplurile, călătorii business și aparținătorii care stau câteva zile.",
        table: { headers: ["Oaspete", "De ce ajută", "Observație"], rows: [["Cupluri", "mic dejun simplu", "un singur pat matrimonial"], ["Business", "cafea și gustări", "Wi-Fi rapid"], ["Aparținători", "frigider și microunde între drumuri", "acces către spitale"]] }
      }
    ],
    faq: commonFaqRo
  }
];

const englishPosts: BlogPost[] = [
  ["accommodation-near-victor-babes-hospital-bucharest", "cazare-langa-spitalul-victor-babes-bucuresti", "Accommodation near Victor Babes Hospital Bucharest", "Private accommodation în Sector 2 for relatives or guests who need access to Victor Babes Hospital Bucharest.", "accommodation near Victor Babes Hospital Bucharest", "Accommodation near Victor Babes Hospital can help relatives or guests with medical appointments în eastern Bucharest."],
  ["accommodation-near-monza-hospital-bucharest", "cazare-langa-spitalul-monza-bucuresti", "Accommodation near Monza Hospital Bucharest", "Private studio în Bucharest for guests looking for quiet accommodation with access to Monza Hospital.", "accommodation near Monza Hospital Bucharest", "Accommodation near Monza Hospital is searched by guests who need a private space during appointments or checks."],
  ["accommodation-piata-muncii-bucharest", "cazare-piata-muncii-bucuresti", "Accommodation în Piața Muncii Bucharest", "Guide to accommodation în Piața Muncii Bucharest: nearby metro, National Arena, Sector 2 and online booking.", "accommodation Piața Muncii Bucharest", "Accommodation în Piața Muncii is useful when you want nearby metro access and routes to the National Arena, Mihai Bravu, Iancului and the center."],
  ["how-to-get-from-otopeni-to-piata-muncii", "cum-ajungi-de-la-otopeni-la-piata-muncii", "How to get from Otopeni to Serene Studio", "Simple route from Otopeni Airport to Serene Studio: train to Gara de Nord, metro from inside the station to Piata Muncii and a 4-minute walk.", "Otopeni Airport to Serene Studio", "The simplest route from Otopeni Airport to Serene Studio is the airport train to Gara de Nord, where the metro station is inside the train station, then metro to Piata Muncii and about 4 minutes on foot."],
  ["accommodation-near-ior-park-bucharest", "cazare-langa-parcul-ior-bucuresti", "Accommodation near IOR Park Bucharest", "Private accommodation în Sector 2 with access to IOR Park, Piața Muncii and the National Arena.", "accommodation near IOR Park Bucharest", "Accommodation near IOR Park is useful if you want a large park nearby and good access to Piața Muncii and Sector 2."],
  ["sector-2-bucharest-private-studio-accommodation", "cazare-sector-2-bucuresti-studio-privat", "Sector 2 Bucharest accommodation - private studio", "Private studio în Sector 2 Bucharest, close to Piața Muncii, National Arena and hospitals, with online booking.", "Sector 2 Bucharest private studio accommodation", "A private studio în Sector 2 works well when you want more privacy than a hotel room and quick metro access."],
  ["accommodation-near-mega-mall-bucharest", "cazare-langa-mega-mall-bucuresti", "Accommodation near Mega Mall Bucharest", "Private studio near Piața Muncii, with access to Mega Mall, National Arena and Sector 2.", "accommodation near Mega Mall Bucharest", "Accommodation near Mega Mall is practical if you want restaurants, cinema and shopping near Piața Muncii - National Arena."],
  ["self-check-in-bucharest-private-studio", "self-check-in-bucuresti-cazare-studio-privat", "Self check-in în Bucharest - private studio accommodation", "How self check-in works at Serene Studio Bucharest: online booking, online check-in with ID verification and gate key box.", "self check-in Bucharest accommodation", "Self check-in în Bucharest is useful if you arrive late or prefer not to depend on in-person key handover."],
  ["accommodation-with-kitchenette-bucharest-piata-muncii", "cazare-cu-chicineta-bucuresti-piata-muncii", "Accommodation with kitchenette în Bucharest near Piața Muncii", "Private studio with kitchenette near Piața Muncii, suitable for short stays and online booking.", "accommodation with kitchenette Bucharest Piața Muncii", "Accommodation with a kitchenette în Bucharest is useful when you want a fridge, microwave, coffee or tea without depending completely on restaurants."]
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
          ["Piata Muncii metro", "Reaching Piata Muncii", "~4 min on foot"],
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
        "Leaving Serene Studio, head toward Piata Muncii (south-east) and follow the metro station signs",
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
        "There is no direct metro from the National Arena to Piata Muncii - the closest metro station to the stadium is Costin Georgian, and walking there is comparable to walking directly to Serene Studio.",
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
    title: "Cazare lângă Spitalul de Copii Dr. Victor Gomoiu București - ghid pentru părinți",
    description:
      "Cazare privată în Sector 2 București, la aproximativ 1,5 km de Spitalul Clinic de Copii Dr. Victor Gomoiu (Bd. Basarabia 21). Ghid practic pentru părinți și însoțitori.",
    keyword: "cazare Spitalul Gomoiu Bucuresti, parinti spital de copii",
    date: "2026-04-30",
    intro:
      "Dacă aduci copilul la Spitalul Clinic de Copii Dr. Victor Gomoiu, ai nevoie de cazare aproape, liniștită și flexibilă. Serene Studio se află pe Strada Alexandru Zagoritz 12, Sector 2, la aproximativ 1,5 km de Bulevardul Basarabia 21.",
    ctaReferer: "website_blog_gomoiu",
    sections: [
      {
        title: "Adresa Spitalului Gomoiu și cum ajungi acolo",
        intro: "Spitalul are sediul principal pe Bulevardul Basarabia 21, Sector 2, cod poștal 022102. Ambulatoriul este la Strada Rodul Pamantului 2-4, Sector 3.",
        paragraphs: [
          "De la Serene Studio, drumul cu mașina durează în jur de 5-7 minute, în funcție de trafic. Bulevardul Basarabia este aproape de Arena Națională și de Șoseaua Mihai Bravu, deci ai mai multe rute alternative.",
          "Dacă preferi transportul public, stația de metrou Piața Muncii este la 4 minute pe jos de Serene Studio și te conecteaza rapid spre Iancului și Republica."
        ]
      },
      {
        title: "Ce înseamnă sa stai aproape când copilul e internat",
        intro: "Studioul are pat matrimonial, baie privată, chicinetă și Wi-Fi rapid - util pentru video-call cu familia rămasă acasa.",
        paragraphs: [
          "Self check-in-ul funcționează după ora 14:00. Codul cutiei de chei devine disponibil în guidebook după finalizarea check-in-ului online. Dacă ajungi seara după o zi grea la spital, nu astepti la receptie.",
          "Orele de liniște 22:00-09:00 ajuta la somn corect, mai ales înainte de o zi de operație sau după o zi cu multe vizite."
        ]
      }
    ],
    faq: [
      { q: "Care este adresa Spitalului Gomoiu?", a: "Sediul principal este pe Bulevardul Basarabia 21, Sector 2, București, cod poștal 022102. Ambulatoriul este pe Strada Rodul Pamantului 2-4, Sector 3." },
      { q: "Cat e de la Serene Studio la Spitalul Gomoiu?", a: "Aproximativ 1,5 km - câteva minute cu mașina sau taxi. Verifică ruta în Google Maps înainte de plecare." },
      ...commonFaqRo
    ]
  },
  {
    slug: "cazare-langa-stadionul-dinamo-bucuresti",
    locale: "ro",
    translationSlug: "accommodation-near-dinamo-stadium-bucharest",
    title: "Cazare lângă Stadionul Dinamo București - studio privat în Sector 2",
    description:
      "Studio privat în Sector 2 București, aproape de Stadionul Dinamo și Arena Națională. Self check-in, chicinetă, baie privată și rezervare online directă pentru fani și oaspeți.",
    keyword: "cazare Stadionul Dinamo Bucuresti, cazare Stefan cel Mare",
    date: "2026-04-30",
    intro:
      "Cazarea lângă Stadionul Dinamo este utilă dacă ai bilet la meci sau participi la un eveniment în zona Ștefan cel Mare. Serene Studio este la câțiva kilometri distanță, într-o zonă rezidențială liniștită din Sector 2.",
    ctaReferer: "website_blog_dinamo",
    sections: [
      {
        title: "Cum ajungi de la Serene Studio la Stadionul Dinamo",
        intro: "Stadionul Dinamo se află pe Șoseaua Ștefan cel Mare 7-9, Sector 2. Distanța de la Serene Studio este de aproximativ 3 km - 10-12 minute cu mașina sau taxi, în funcție de trafic.",
        paragraphs: [
          "Pe metrou, mergi de la Piața Muncii până la Iancului sau Ștefan cel Mare și continui cu un taxi scurt. Pentru zile de meci, traseul cu metroul evită aglomerația auto din zona stadionului.",
          "Dacă ai bilet la dubla Dinamo + Arena Națională (concert sau alt eveniment), Serene Studio te plasează la mijloc între cele două puncte."
        ]
      },
      {
        title: "De ce o zonă rezidențială după meci",
        intro: "Străzile din jurul stadionului pot fi zgomotoase imediat după fluierul final. Serene Studio te scoate din fluxul de fani și te lasă să dormi liniștit.",
        paragraphs: [
          "Studioul este privat, cu pat matrimonial, baie proprie și chicinetă. Self check-in-ul te lasă să intri târziu fără intermediar, cu codul cutiei de chei după check-in-ul online.",
          "Parcarea este gratuită pe stradă și de obicei disponibilă în apropiere - util când ajungi târziu și nu vrei să cauți loc minute întregi."
        ]
      }
    ],
    faq: [
      { q: "Cât e de la Serene Studio la Stadionul Dinamo?", a: "Aproximativ 3 km - 10-12 minute cu mașina sau taxi, în funcție de trafic. Verifică ruta în Google Maps." },
      { q: "Pot ajunge cu metroul la stadion?", a: "Da, mergi de la Piața Muncii (la 4 min pe jos de Serene Studio) către Iancului sau Ștefan cel Mare și continui cu un taxi scurt." },
      ...commonFaqRo
    ]
  },
  {
    slug: "cazare-langa-spitalul-sf-pantelimon-bucuresti",
    locale: "ro",
    translationSlug: "accommodation-near-sf-pantelimon-hospital-bucharest",
    title: "Cazare lângă Spitalul Sf. Pantelimon București - studio privat în Sector 2",
    description:
      "Studio privat în Sector 2 București, la aproximativ 3 km de Spitalul Clinic de Urgență Sf. Pantelimon. Self check-in, chicinetă, baie privată și rezervare online pentru pacienți și aparținători.",
    keyword: "cazare Spitalul Sf. Pantelimon Bucuresti, cazare apartinatori urgenta",
    date: "2026-04-30",
    intro:
      "Spitalul Clinic de Urgență Sf. Pantelimon (Soseaua Pantelimon 340-342, Sector 2) este unul dintre spitalele de urgență importante din estul Bucureștiului. Cazarea aproape ajută aparținătorii să stea privați și liniștiți între vizite.",
    ctaReferer: "website_blog_pantelimon",
    sections: [
      {
        title: "Adresa și cum ajungi la spital",
        intro: "Adresa: Soseaua Pantelimon 340-342, Sector 2, București. De la Serene Studio sunt aproximativ 3 km - 8-10 minute cu mașina sau taxi.",
        paragraphs: [
          "Cu transport public, mergi pe Șoseaua Mihai Bravu spre est. Pentru orele de vârf, taxi-ul rămâne mai predictibil decât tramvaiul, mai ales dacă ești grăbit.",
          "Farmaciile non-stop de pe Mihai Bravu și din Piața Muncii sunt utile pentru rețetele de urgență - te poți opri pe drumul de întoarcere către Serene Studio."
        ]
      },
      {
        title: "Ce contează într-un sejur de aparținător",
        intro: "Spitalul nu pune la dispoziție cazare pentru aparținători - studioul privat devine baza ta de odihnă între vizite.",
        paragraphs: [
          "Serene Studio are chicinetă cu microunde, frigider și aparat de cafea. Dacă stai câteva zile, poți pregăti gustări rapide fără să depinzi de restaurantele din zonă.",
          "Wi-Fi-ul rapid ajută la coordonarea cu familia rămasă acasă, iar self check-in-ul îți permite să intri și să ieși după programul de la spital."
        ]
      }
    ],
    faq: [
      { q: "Cât e de la Serene Studio la Spitalul Sf. Pantelimon?", a: "Aproximativ 3 km - 8-10 minute cu mașina sau taxi. Verifică ruta în Google Maps în ziua deplasării." },
      { q: "Există farmacii non-stop în zonă?", a: "Da, pe Șoseaua Mihai Bravu și în jurul Pieței Muncii sunt farmacii deschise 24/7." },
      ...commonFaqRo
    ]
  },
  {
    slug: "cum-ajungi-de-la-serene-studio-la-centrul-vechi-bucuresti",
    locale: "ro",
    translationSlug: "how-to-get-from-serene-studio-to-old-town-bucharest",
    title: "Cum ajungi de la Serene Studio la Centrul Vechi cu metroul",
    description:
      "Ghid practic: cum mergi de la Serene Studio (Sector 2, Piața Muncii) la Centrul Vechi al Bucureștiului cu metroul. Trasee rapide, alternative cu taxi și timpii reali.",
    keyword: "metrou Piata Muncii Centrul Vechi, transport Serene Studio centru",
    date: "2026-04-30",
    intro:
      "Centrul Vechi al Bucureștiului este la aproximativ 5 km de Serene Studio. Cu metroul de la Piața Muncii ajungi rapid și predictibil, fără stres în trafic.",
    ctaReferer: "website_blog_centrul_vechi",
    sections: [
      {
        title: "Ruta rapidă cu metroul",
        intro: "Stația Piața Muncii este la aproximativ 4 minute pe jos de Serene Studio. De acolo iei metroul spre Universitate sau Piața Unirii - apoi 5-10 minute pe jos până la Centrul Vechi.",
        paragraphs: [
          "Coboară la Universitate pentru zona Lipscani-Selari sau la Piața Unirii pentru zona Hanul lui Manuc și Stavropoleos. Ambele opțiuni te duc la 5-10 minute pe jos în inima Centrului Vechi.",
          "În weekend și seara, fluxul de trenuri scade, deci verifică ultimul tren pe drumul de întoarcere - sau pregătește-te pentru un taxi până acasă."
        ]
      },
      {
        title: "Alternative cu taxi sau ridesharing",
        intro: "Taxi-ul te duce direct în 15-25 minute, în funcție de trafic. Pentru zone de seară, ridesharingul (Bolt, Uber) este de obicei mai disponibil pe ruta de întoarcere.",
        paragraphs: [
          "Dacă alegi taxi-ul, drumul tipic trece prin Ștefan cel Mare sau Mihai Bravu spre centru. Vinerea și sâmbătă seara traficul poate fi destul de aglomerat în zona Universitate.",
          "Când revii la Serene Studio după o seară în Centrul Vechi, accesul cu cod la cutia de chei te lasă să intri direct, fără contact uman."
        ]
      }
    ],
    faq: [
      { q: "Cât de lung e drumul cu metroul de la Serene Studio la Centrul Vechi?", a: "În jur de 20-25 de minute, inclusiv cele 4 minute pe jos până la metrou Piața Muncii și 5-10 minute pe jos de la Universitate sau Piața Unirii la Lipscani." },
      { q: "Care e ultima cursă de metrou?", a: "În general, metroul circulă până la aproximativ 23:00. Verifică orarul exact pentru ziua respectivă." },
      ...commonFaqRo
    ]
  },
  {
    slug: "obiective-langa-serene-studio-bucuresti-3-5-km",
    locale: "ro",
    translationSlug: "things-to-do-near-serene-studio-bucharest-3-5-km",
    title: "Top 7 obiective lângă Serene Studio București (3-5 km)",
    description:
      "Ghid de zona: spitale, mall-uri, stadioane, parcuri și destinații turistice în raza de 3-5 km în jurul Serene Studio București, Sector 2.",
    keyword: "obiective langa Serene Studio Bucuresti, ce sa vizitezi Sector 2",
    date: "2026-04-30",
    intro:
      "Serene Studio se află pe Strada Alexandru Zagoritz 12, Sector 2, București - aproape de Piața Muncii. În jurul studioului, într-o raza de 3-5 km, ai spitale importante, mall-uri, parcuri și zone turistice. Iată cele mai utile.",
    ctaReferer: "website_blog_top_obiective",
    sections: [
      {
        title: "Spitale și centre medicale",
        intro: "Pentru pacienți și aparținători, următoarele spitale sunt aproape de Serene Studio:",
        bullets: [
          "Spitalul Clinic de Copii Dr. Victor Gomoiu - Bd. Basarabia 21, ~1,5 km",
          "Spitalul Monza - Str. Tony Bulandra 27, ~2 km",
          "Spitalul Clinic de Urgență Sf. Pantelimon - Sos. Pantelimon 340-342, ~3 km",
          "Spitalul Clinic Dr. Victor Babeș - Sos. Mihai Bravu 281, ~3 km",
          "Spitalul Clinic Colentina - Sos. Ștefan cel Mare 19-21, ~5 km"
        ]
      },
      {
        title: "Shopping și divertisment",
        intro: "Dacă vrei o pauză de la sejurul medical sau o zi de turism urban:",
        bullets: [
          "Mega Mall - Bd. Pierre de Coubertin 3-5, ~18-20 min pe jos sau 5-7 min cu mașina",
          "Bucur Obor - magazinul universal istoric din Sector 2, ~10 min pe jos",
          "Veranda Mall - Str. Ziduri Moși 23, ~2 km"
        ]
      },
      {
        title: "Sport, parcuri și turism",
        intro: "Pentru aer liber sau evenimente:",
        bullets: [
          "Arena Națională - concerte și meciuri, ~14 min pe jos",
          "Stadionul Dinamo - Sos. Ștefan cel Mare 7-9, ~3 km",
          "Parcul IOR / Alexandru Ioan Cuza - lac și zonă de plimbare, acces rapid cu metrou",
          "Centrul Vechi (Lipscani, Hanul lui Manuc) - ~5 km, 20-25 min cu metroul"
        ]
      }
    ],
    faq: [
      { q: "Care sunt cele mai apropiate spitale de Serene Studio?", a: "Spitalul Gomoiu (~1,5 km), Spitalul Monza (~2 km), Spitalul Sf. Pantelimon (~3 km), Spitalul Babeș (~3 km) și Spitalul Colentina (~5 km)." },
      { q: "Cât e până la Mega Mall pe jos?", a: "Aproximativ 18-20 de minute pe jos sau 5-7 minute cu mașina/taxi." },
      { q: "Pot ajunge în Centrul Vechi cu metroul?", a: "Da, de la Piața Muncii (4 minute pe jos de Serene Studio) iei metroul până la Universitate sau Piața Unirii - apoi 5-10 minute pe jos." },
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
        intro: "Piata Muncii station is about 4 minutes on foot from Serene Studio. From there, take the metro toward Universitate or Piata Unirii - then a 5-10 minute walk to the Old Town.",
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
          "Veranda Mall - Str. Ziduri Moși 23, ~2 km"
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
      { q: "Can I reach the Old Town by metro?", a: "Yes, from Piata Muncii (4 minutes on foot from Serene Studio) take the metro to Universitate or Piata Unirii - then 5-10 minutes on foot." },
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
