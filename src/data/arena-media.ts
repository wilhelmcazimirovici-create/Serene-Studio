import type { GalleryImage, PageSection, SectionVideo } from "./types";

export const arenaLocation = {
  name: "Arena Nationala Bucuresti",
  address: "Bulevardul Basarabia 37-39, Sector 2, Bucuresti 022103",
  lat: 44.4376,
  lon: 26.1525
};

const arenaVideoUploadDate = "2026-04-30";

export const arenaVideos: SectionVideo[] = [
  {
    base: "arena-nationala-vedere-generala",
    poster: "/video/arena-nationala-vedere-generala-poster.jpg",
    posterWebp: "/video/arena-nationala-vedere-generala-poster.webp",
    durationSeconds: 10,
    uploadDate: arenaVideoUploadDate,
    width: 960,
    height: 710,
    name: {
      ro: "Arena Nationala Bucuresti - vedere generala in zi de eveniment",
      en: "National Arena Bucharest - general view on event day"
    },
    description: {
      ro: "Filmare scurta cu Arena Nationala Bucuresti, Bulevardul Basarabia 37-39 Sector 2, intr-o zi de eveniment - utila pentru oaspetii care vin la concert sau meci si stau la Serene Studio in Sector 2.",
      en: "Short clip of the National Arena Bucharest at Bulevardul Basarabia 37-39 Sector 2 on an event day - useful for guests attending a concert or match while staying at Serene Studio in Sector 2."
    },
    contentLocation: arenaLocation
  },
  {
    base: "arena-nationala-drona-exterior",
    poster: "/video/arena-nationala-drona-exterior-poster.jpg",
    posterWebp: "/video/arena-nationala-drona-exterior-poster.webp",
    durationSeconds: 10,
    uploadDate: arenaVideoUploadDate,
    width: 960,
    height: 540,
    name: {
      ro: "Arena Nationala Bucuresti - filmare cu drona din exterior",
      en: "National Arena Bucharest - aerial drone view from outside"
    },
    description: {
      ro: "Filmare aeriana cu drona a Arenei Nationale Bucuresti, Sector 2 - perspectiva exterioara peste stadion si zona Basarabia, utila ca reper vizual pentru oaspetii cazati la Serene Studio.",
      en: "Aerial drone footage of the National Arena Bucharest in Sector 2 - exterior perspective over the stadium and the Basarabia area, a useful visual reference for guests staying at Serene Studio."
    },
    contentLocation: arenaLocation
  },
  {
    base: "arena-nationala-drona-interior",
    poster: "/video/arena-nationala-drona-interior-poster.jpg",
    posterWebp: "/video/arena-nationala-drona-interior-poster.webp",
    durationSeconds: 6,
    uploadDate: arenaVideoUploadDate,
    width: 960,
    height: 546,
    name: {
      ro: "Arena Nationala Bucuresti - filmare cu drona din interior",
      en: "National Arena Bucharest - aerial drone view from inside"
    },
    description: {
      ro: "Filmare cu drona din interiorul Arenei Nationale Bucuresti - vedere peste teren si tribune, utila pentru a-ti face o idee despre amploarea stadionului inainte de eveniment.",
      en: "Drone footage from inside the National Arena Bucharest - view over the pitch and stands, useful to get a sense of the stadium's scale before your event."
    },
    contentLocation: arenaLocation
  },
  {
    base: "arena-nationala-intrare",
    poster: "/video/arena-nationala-intrare-poster.jpg",
    posterWebp: "/video/arena-nationala-intrare-poster.webp",
    durationSeconds: 6,
    uploadDate: arenaVideoUploadDate,
    width: 960,
    height: 710,
    name: {
      ro: "Arena Nationala Bucuresti - tunelul de intrare al jucatorilor",
      en: "National Arena Bucharest - players' tunnel entrance"
    },
    description: {
      ro: "Filmare scurta cu tunelul de intrare al jucatorilor pe Arena Nationala Bucuresti - utila pentru fanii care vor sa recunoasca zonele cheie inainte de meci.",
      en: "Short clip of the players' tunnel entrance at the National Arena Bucharest - useful for fans who want to recognize key areas before the match."
    },
    contentLocation: arenaLocation
  },
  {
    base: "arena-nationala-bancile-antrenorilor",
    poster: "/video/arena-nationala-bancile-antrenorilor-poster.jpg",
    posterWebp: "/video/arena-nationala-bancile-antrenorilor-poster.webp",
    durationSeconds: 6,
    uploadDate: arenaVideoUploadDate,
    width: 960,
    height: 632,
    name: {
      ro: "Arena Nationala Bucuresti - bancile antrenorilor pe marginea terenului",
      en: "National Arena Bucharest - coaches' benches at the pitch side"
    },
    description: {
      ro: "Vedere cu bancile antrenorilor pe Arena Nationala Bucuresti, pe marginea terenului - detaliu util pentru fanii care vin la meciuri sau vizite organizate.",
      en: "View of the coaches' benches at the National Arena Bucharest pitch side - a useful detail for fans attending matches or organized visits."
    },
    contentLocation: arenaLocation
  },
  {
    base: "arena-nationala-meci-romania",
    poster: "/video/arena-nationala-meci-romania-poster.jpg",
    posterWebp: "/video/arena-nationala-meci-romania-poster.webp",
    durationSeconds: 6,
    uploadDate: arenaVideoUploadDate,
    width: 960,
    height: 574,
    name: {
      ro: "Arena Nationala Bucuresti - atmosfera la meciul nationalei Romaniei",
      en: "National Arena Bucharest - atmosphere at the Romania national team match"
    },
    description: {
      ro: "Atmosfera de pe Arena Nationala la un meci al nationalei Romaniei - utila pentru oaspetii care vor sa vada in avans cum este experienta in tribuna.",
      en: "Atmosphere at the National Arena during a Romania national team match - useful for guests who want to see in advance what the stand experience is like."
    },
    contentLocation: arenaLocation
  }
];

export const arenaPhotos: GalleryImage[] = [
  {
    key: "arenaExteriorDrona",
    caption: {
      ro: "Vedere aeriana cu drona - exteriorul Arenei Nationale Bucuresti",
      en: "Aerial drone view - exterior of the National Arena Bucharest"
    }
  },
  {
    key: "arenaInteriorDrona",
    caption: {
      ro: "Vedere cu drona din interior - peste teren si tribune",
      en: "Drone view from inside - over the pitch and stands"
    }
  },
  {
    key: "arenaVedereStadion",
    caption: {
      ro: "Vedere generala dintr-o zi de eveniment pe stadion",
      en: "General view from an event day at the stadium"
    }
  },
  {
    key: "arenaIntrareTunel",
    caption: {
      ro: "Tunelul de intrare al jucatorilor pe Arena Nationala",
      en: "Players' tunnel entrance at the National Arena"
    }
  },
  {
    key: "arenaBancaAntrenori",
    caption: {
      ro: "Bancile antrenorilor pe marginea terenului",
      en: "Coaches' benches at the pitch side"
    }
  },
  {
    key: "arenaMeciRomania",
    caption: {
      ro: "Atmosfera la meciul nationalei Romaniei",
      en: "Atmosphere at the Romania national team match"
    }
  }
];

export const arenaPhotoSection = (locale: "ro" | "en"): PageSection => ({
  title:
    locale === "ro"
      ? "Arena Nationala Bucuresti in imagini - capturi de pe stadion"
      : "The National Arena Bucharest in pictures - on-site shots",
  intro:
    locale === "ro"
      ? "Capturi reale de pe Arena Nationala (Bulevardul Basarabia 37-39, Sector 2): exterior cu drona, interior cu drona, intrarea jucatorilor, bancile antrenorilor si o atmosfera de meci al nationalei. Util ca reper vizual inainte sa ajungi la eveniment."
      : "Real on-site shots from the National Arena (Bulevardul Basarabia 37-39, Sector 2): drone exterior, drone interior, players' tunnel, coaches' benches and a Romania national team match atmosphere. Useful as a visual reference before arriving at the event.",
  imageGallery: arenaPhotos
});

export const arenaVideoSection = (locale: "ro" | "en"): PageSection => ({
  title:
    locale === "ro"
      ? "Arena Nationala Bucuresti in video - filmari scurte de pe stadion"
      : "The National Arena Bucharest on video - short on-site clips",
  intro:
    locale === "ro"
      ? "Sase filmari scurte (fara audio) cu Arena Nationala: vedere generala, drona exterior, drona interior, tunelul de intrare, bancile antrenorilor si atmosfera la meciul Romaniei. Reda fiecare clip pentru a vedea zona inainte sa ajungi la concert sau meci."
      : "Six short silent clips of the National Arena: general view, drone exterior, drone interior, players' tunnel, coaches' benches and the Romania match atmosphere. Play each clip to see the venue before your concert or match.",
  videoGallery: arenaVideos
});
