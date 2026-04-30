import type { GalleryImage, PageSection, SectionVideo } from "./types";

export const arenaLocation = {
  name: "Arena Națională București",
  address: "Bulevardul Basarabia 37-39, Sector 2, București 022103",
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
      ro: "Arena Națională București - vedere generală în zi de eveniment",
      en: "National Arena Bucharest - general view on event day"
    },
    description: {
      ro: "Filmare scurtă cu Arena Națională București, Bulevardul Basarabia 37-39 Sector 2, într-o zi de eveniment - utilă pentru oaspeții care vin la concert sau meci și stau la Serene Studio în Sector 2.",
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
      ro: "Arena Națională București - filmare cu drona din exterior",
      en: "National Arena Bucharest - aerial drone view from outside"
    },
    description: {
      ro: "Filmare aeriană cu drona a Arenei Naționale București, Sector 2 - perspectiva exterioară peste stadion și zona Basarabia, utilă ca reper vizual pentru oaspeții cazati la Serene Studio.",
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
      ro: "Arena Națională București - filmare cu drona din interior",
      en: "National Arena Bucharest - aerial drone view from inside"
    },
    description: {
      ro: "Filmare cu drona din interiorul Arenei Naționale București - vedere peste teren și tribune, utilă pentru a-ti face o idee despre amploarea stadionului înainte de eveniment.",
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
      ro: "Arena Națională București - tunelul de intrare al jucătorilor",
      en: "National Arena Bucharest - players' tunnel entrance"
    },
    description: {
      ro: "Filmare scurtă cu tunelul de intrare al jucătorilor pe Arena Națională București - utilă pentru fanii care vor să recunoască zonele cheie înainte de meci.",
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
      ro: "Arena Națională București - băncile antrenorilor pe marginea terenului",
      en: "National Arena Bucharest - coaches' benches at the pitch side"
    },
    description: {
      ro: "Vedere cu bancile antrenorilor pe Arena Națională București, pe marginea terenului - detaliu util pentru fanii care vin la meciuri sau vizite organizate.",
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
      ro: "Arena Națională București - atmosfera la meciul naționalei României",
      en: "National Arena Bucharest - atmosphere at the Romania national team match"
    },
    description: {
      ro: "Atmosfera de pe Arena Națională la un meci al naționalei României - utilă pentru oaspeții care vor să vadă în avans cum este experiența în tribună.",
      en: "Atmosphere at the National Arena during a Romania national team match - useful for guests who want to see in advance what the stand experience is like."
    },
    contentLocation: arenaLocation
  }
];

export const arenaPhotos: GalleryImage[] = [
  {
    key: "arenaExteriorDrona",
    caption: {
      ro: "Vedere aeriană cu drona - exteriorul Arenei Naționale București",
      en: "Aerial drone view - exterior of the National Arena Bucharest"
    }
  },
  {
    key: "arenaInteriorDrona",
    caption: {
      ro: "Vedere cu drona din interior - peste teren și tribune",
      en: "Drone view from inside - over the pitch and stands"
    }
  },
  {
    key: "arenaVedereStadion",
    caption: {
      ro: "Vedere generală dintr-o zi de eveniment pe stadion",
      en: "General view from an event day at the stadium"
    }
  },
  {
    key: "arenaIntrareTunel",
    caption: {
      ro: "Tunelul de intrare al jucătorilor pe Arena Națională",
      en: "Players' tunnel entrance at the National Arena"
    }
  },
  {
    key: "arenaBancaAntrenori",
    caption: {
      ro: "Băncile antrenorilor pe marginea terenului",
      en: "Coaches' benches at the pitch side"
    }
  },
  {
    key: "arenaMeciRomania",
    caption: {
      ro: "Atmosfera la meciul naționalei României",
      en: "Atmosphere at the Romania national team match"
    }
  }
];

export const arenaPhotoSection = (locale: "ro" | "en"): PageSection => ({
  title:
    locale === "ro"
      ? "Arena Națională București în imagini - capturi de pe stadion"
      : "The National Arena Bucharest in pictures - on-site shots",
  intro:
    locale === "ro"
      ? "Capturi reale de pe Arena Națională (Bulevardul Basarabia 37-39, Sector 2): exterior cu drona, interior cu drona, intrarea jucătorilor, băncile antrenorilor și o atmosferă de meci al naționalei. Util ca reper vizual înainte să ajungi la eveniment."
      : "Real on-site shots from the National Arena (Bulevardul Basarabia 37-39, Sector 2): drone exterior, drone interior, players' tunnel, coaches' benches and a Romania national team match atmosphere. Useful as a visual reference before arriving at the event.",
  imageGallery: arenaPhotos
});

export const arenaVideoSection = (locale: "ro" | "en"): PageSection => ({
  title:
    locale === "ro"
      ? "Arena Națională București în video - filmări scurte de pe stadion"
      : "The National Arena Bucharest on video - short on-site clips",
  intro:
    locale === "ro"
      ? "Șase filmări scurte (fără audio) cu Arena Națională: vedere generală, dronă exterior, dronă interior, tunelul de intrare, băncile antrenorilor și atmosfera la meciul României. Redă fiecare clip pentru a vedea zona înainte să ajungi la concert sau meci."
      : "Six short silent clips of the National Arena: general view, drone exterior, drone interior, players' tunnel, coaches' benches and the Romania match atmosphere. Play each clip to see the venue before your concert or match.",
  videoGallery: arenaVideos
});
