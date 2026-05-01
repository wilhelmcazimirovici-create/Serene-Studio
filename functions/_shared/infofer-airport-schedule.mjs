const INFOFER_ORIGIN = 'https://mersultrenurilor.infofer.ro';
export const INFOFER_ROUTE_URL = `${INFOFER_ORIGIN}/ro-RO/Rute-trenuri/Aeroport-Henri-Coanda/Bucuresti-Nord`;
export const INFOFER_RETURN_ROUTE_URL = `${INFOFER_ORIGIN}/ro-RO/Rute-trenuri/Bucuresti-Nord/Aeroport-Henri-Coanda`;
const INFOFER_ITINERARIES_URL = `${INFOFER_ORIGIN}/ro-RO/Itineraries/GetItineraries`;

const ROUTES = {
  toCity: {
    key: 'toCity',
    url: INFOFER_ROUTE_URL,
    departureStationName: 'Aeroport-Henri-Coanda',
    arrivalStationName: 'Bucuresti-Nord',
    from: 'Aeroport Henri Coanda',
    to: 'Bucuresti Nord',
  },
  toAirport: {
    key: 'toAirport',
    url: INFOFER_RETURN_ROUTE_URL,
    departureStationName: 'Bucuresti-Nord',
    arrivalStationName: 'Aeroport-Henri-Coanda',
    from: 'Bucuresti Nord',
    to: 'Aeroport Henri Coanda',
  },
};

const HTML_ENTITY_MAP = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
};

export function parseLimit(value, fallback = 6) {
  const parsed = Number.parseInt(String(value ?? ''), 10);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(Math.max(parsed, 1), 12);
}

export function parseScheduleTime(value) {
  const match = String(value ?? '').trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return null;

  const hour = Number.parseInt(match[1], 10);
  const minute = Number.parseInt(match[2], 10);
  if (hour < 0 || hour > 23 || minute < 0 || minute > 59) return null;

  return {
    value: `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`,
    minutes: hour * 60 + minute,
  };
}

export function parseDirection(value) {
  return String(value ?? '').toLowerCase() === 'toairport' || String(value ?? '').toLowerCase() === 'to-airport'
    ? 'toAirport'
    : 'toCity';
}

export function jsonHeaders(ttlSeconds = 60) {
  return {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': `public, max-age=${ttlSeconds}, s-maxage=${ttlSeconds}`,
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, OPTIONS',
    'access-control-allow-headers': 'accept, content-type',
  };
}

export function errorPayload(error, direction = 'toCity') {
  const route = ROUTES[parseDirection(direction)];
  return {
    ok: false,
    source: 'Infofer',
    sourceUrl: route.url,
    direction: route.key,
    generatedAt: new Date().toISOString(),
    message: error instanceof Error ? error.message : 'Programul live Infofer nu a putut fi incarcat.',
    departures: [],
  };
}

export async function fetchInfoferAirportSchedule({ limit = 6, afterTime, arriveByTime, direction = 'toCity' } = {}) {
  const route = ROUTES[parseDirection(direction)];
  const localNow = getBucharestNow();
  const requestedAfter = parseScheduleTime(afterTime);
  const requestedArriveBy = parseScheduleTime(arriveByTime);
  const allDepartures = await fetchRouteDepartures(route, localNow.date);
  const upcoming = requestedArriveBy
    ? await selectArrivalsBefore({
        route,
        departures: allDepartures,
        limit,
        localNow,
        requestedArriveBy,
      })
    : await selectDeparturesAfter({
        route,
        departures: allDepartures,
        limit,
        localNow,
        requestedAfter,
      });

  return {
    ok: true,
    source: 'Infofer',
    sourceUrl: route.url,
    direction: route.key,
    route: {
      from: route.from,
      to: route.to,
    },
    generatedAt: new Date().toISOString(),
    localDate: localNow.date,
    localTime: localNow.time,
    requestedAfterTime: requestedAfter?.value ?? null,
    requestedArriveByTime: requestedArriveBy?.value ?? null,
    departures: upcoming,
  };
}

async function fetchRouteDepartures(route, date) {
  const initialResponse = await fetch(route.url, {
    headers: {
      accept: 'text/html,application/xhtml+xml',
      'accept-language': 'ro-RO,ro;q=0.9,en;q=0.7',
    },
    redirect: 'follow',
  });

  if (!initialResponse.ok) {
    throw new Error(`Infofer a raspuns cu HTTP ${initialResponse.status}.`);
  }

  const cookieHeader = getCookieHeader(initialResponse.headers);
  const initialHtml = await initialResponse.text();
  const fields = extractHiddenFields(initialHtml);

  if (!fields.__RequestVerificationToken || !fields.ConfirmationKey) {
    throw new Error('Infofer nu a returnat tokenurile necesare pentru cautarea rutei.');
  }

  fields.DepartureStationName = route.departureStationName;
  fields.ArrivalStationName = route.arrivalStationName;
  fields.DepartureDate = `${date} 0:00:00`;
  fields.ConnectionsTypeId = '1';
  fields.MinutesInDay = '0';
  fields.OrderingTypeId = '0';
  fields.TimeSelectionId = '0';
  fields.IsSearchWanted = 'False';
  fields.IsReCaptchaFailed = fields.IsReCaptchaFailed || 'False';

  const body = new URLSearchParams(fields);
  const itineraryResponse = await fetch(INFOFER_ITINERARIES_URL, {
    method: 'POST',
    headers: {
      accept: 'text/html,*/*;q=0.8',
      'accept-language': 'ro-RO,ro;q=0.9,en;q=0.7',
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'x-requested-with': 'XMLHttpRequest',
      referer: route.url,
      ...(cookieHeader ? { cookie: cookieHeader } : {}),
    },
    body,
    redirect: 'follow',
  });

  if (!itineraryResponse.ok) {
    throw new Error(`Infofer GetItineraries a raspuns cu HTTP ${itineraryResponse.status}.`);
  }

  const itineraryHtml = await itineraryResponse.text();
  if (/ServiceTemporarilyUnavailable/i.test(itineraryHtml)) {
    throw new Error('Infofer marcheaza serviciul ca temporar indisponibil.');
  }

  return parseItineraries(itineraryHtml, route.url).map((departure) => ({
    ...departure,
    serviceDate: date,
  }));
}

async function selectDeparturesAfter({ route, departures, limit, localNow, requestedAfter }) {
  const threshold = requestedAfter ? requestedAfter.minutes : localNow.minutes - 2;
  const today = departures
    .filter((departure) => departure.departureMinutes >= threshold)
    .map((departure) => ({
      departure,
      effectiveDepartureMinutes: departure.departureMinutes,
    }));

  let candidates = today;
  if (candidates.length < limit) {
    const nextDayDepartures = await fetchRouteDepartures(route, localNow.nextDate);
    candidates = [
      ...candidates,
      ...nextDayDepartures.map((departure) => ({
        departure,
        effectiveDepartureMinutes: departure.departureMinutes + 1440,
      })),
    ];
  }

  return candidates
    .filter((candidate) => candidate.effectiveDepartureMinutes >= threshold)
    .sort((a, b) => a.effectiveDepartureMinutes - b.effectiveDepartureMinutes)
    .slice(0, limit)
    .map((candidate) => candidate.departure);
}

async function selectArrivalsBefore({ route, departures, limit, localNow, requestedArriveBy }) {
  const targetArrivalMinutes = requestedArriveBy.minutes <= localNow.minutes
    ? requestedArriveBy.minutes + 1440
    : requestedArriveBy.minutes;
  let candidates = mapDeparturesForDay(departures, 0)
    .filter((candidate) => candidate.effectiveArrivalMinutes <= targetArrivalMinutes);

  if (candidates.length < limit) {
    try {
      const supplementalDate = targetArrivalMinutes >= 1440 ? localNow.nextDate : localNow.previousDate;
      const supplementalOffset = targetArrivalMinutes >= 1440 ? 1440 : -1440;
      const supplementalDepartures = await fetchRouteDepartures(route, supplementalDate);
      candidates = [
        ...candidates,
        ...mapDeparturesForDay(supplementalDepartures, supplementalOffset)
          .filter((candidate) => candidate.effectiveArrivalMinutes <= targetArrivalMinutes),
      ];
    } catch {
      // Adjacent dates are helpful for midnight searches, but the current-day list is still useful if Infofer rejects them.
    }
  }

  return candidates
    .sort((a, b) => b.effectiveArrivalMinutes - a.effectiveArrivalMinutes)
    .slice(0, limit)
    .sort((a, b) => a.effectiveDepartureMinutes - b.effectiveDepartureMinutes)
    .map((candidate) => candidate.departure);
}

function mapDeparturesForDay(departures, dayOffsetMinutes) {
  return departures
    .filter((departure) => departure.arrivalMinutes !== null)
    .map((departure) => {
      const crossesMidnight = departure.arrivalMinutes < departure.departureMinutes;
      return {
        departure,
        effectiveArrivalMinutes: departure.arrivalMinutes + (crossesMidnight ? 1440 : 0) + dayOffsetMinutes,
        effectiveDepartureMinutes: departure.departureMinutes + dayOffsetMinutes,
      };
    });
}

function getBucharestNow() {
  const parts = new Intl.DateTimeFormat('ro-RO', {
    timeZone: 'Europe/Bucharest',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date());
  const byType = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  const hour = Number.parseInt(byType.hour, 10);
  const minute = Number.parseInt(byType.minute, 10);

  return {
    date: `${byType.day}.${byType.month}.${byType.year}`,
    previousDate: getBucharestDate(-1),
    nextDate: getBucharestDate(1),
    time: `${byType.hour}:${byType.minute}`,
    minutes: hour * 60 + minute,
  };
}

function getBucharestDate(offsetDays = 0) {
  const date = new Date(Date.now() + offsetDays * 24 * 60 * 60 * 1000);
  const parts = new Intl.DateTimeFormat('ro-RO', {
    timeZone: 'Europe/Bucharest',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);
  const byType = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${byType.day}.${byType.month}.${byType.year}`;
}

function extractHiddenFields(html) {
  const fields = {};
  for (const match of html.matchAll(/<input\b[^>]*>/gi)) {
    const tag = match[0];
    const type = getAttribute(tag, 'type');
    const name = getAttribute(tag, 'name');
    if (!name || (type && type.toLowerCase() !== 'hidden')) continue;
    fields[decodeHtml(name)] = decodeHtml(getAttribute(tag, 'value') ?? '');
  }
  return fields;
}

function getAttribute(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}=["']([^"']*)["']`, 'i'));
  return match?.[1];
}

function getCookieHeader(headers) {
  const headersWithGetSetCookie = headers;
  const cookies = typeof headersWithGetSetCookie.getSetCookie === 'function'
    ? headersWithGetSetCookie.getSetCookie()
    : splitSetCookieHeader(headers.get('set-cookie'));

  return cookies
    .map((cookie) => cookie.split(';')[0]?.trim())
    .filter(Boolean)
    .join('; ');
}

function splitSetCookieHeader(value) {
  if (!value) return [];
  return value.split(/,(?=\s*[^;,]+=)/g);
}

function parseItineraries(html, fallbackRouteUrl = INFOFER_ROUTE_URL) {
  const cards = [...html.matchAll(
    /<li class="list-group-item border-0 pl-0 pr-0" id="li-itinerary-\d+">([\s\S]*?)(?=<li class="list-group-item border-0 pl-0 pr-0" id="li-itinerary-\d+">|<\/ul>\s*<div id="div-script|$)/g,
  )].map((match) => match[1]);

  const departures = [];
  for (const card of cards) {
    const times = [...card.matchAll(/<span class="text-1-4rem[^"]*">\s*([^<]+?)\s*<\/span>/g)]
      .map((match) => normalizeTime(cleanText(match[1])))
      .filter(Boolean);
    if (times.length < 2) continue;

    const trainMatch = card.match(/<span class="span-train-category-[^"]*">\s*([\s\S]*?)\s*<\/span>\s*<a href="([^"]*\/Tren\/[^"]*)">\s*([\s\S]*?)\s*<\/a>/i);
    const durationMatch = card.match(/<!--Duration-->[\s\S]*?<span class="d-inline-block">\s*([\s\S]*?)\s*<\/span>/i);
    const operatorMatch = card.match(/<!--Operator-->[\s\S]*?<div class="text-0-8rem">\s*([\s\S]*?)\s*<\/div>/i);
    const statusMatch = card.match(/<i class="far fa-stopwatch"><\/i>[\s\S]*?<span class="color-gray">\s*([\s\S]*?)\s*<\/span>/i);

    const departureTime = times[0];
    const arrivalTime = times[1];
    const departureMinutes = timeToMinutes(departureTime);
    const arrivalMinutes = timeToMinutes(arrivalTime);
    if (departureMinutes === null) continue;

    const category = trainMatch ? cleanText(trainMatch[1]) : '';
    const number = trainMatch ? cleanText(trainMatch[3]) : '';
    const relativeTrainUrl = trainMatch?.[2];

    departures.push({
      departureTime,
      arrivalTime,
      departureMinutes,
      arrivalMinutes,
      train: [category, number].filter(Boolean).join(' '),
      trainUrl: relativeTrainUrl ? new URL(relativeTrainUrl, INFOFER_ORIGIN).toString() : fallbackRouteUrl,
      duration: durationMatch ? cleanText(durationMatch[1]) : '',
      operator: operatorMatch ? cleanText(operatorMatch[1]) : '',
      status: statusMatch ? cleanStatus(statusMatch[1]) : 'Verifica pe Infofer',
      direct: /Tren direct/i.test(cleanText(card)),
    });
  }

  return departures;
}

function normalizeTime(value) {
  const match = value.match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return '';
  return `${match[1].padStart(2, '0')}:${match[2]}`;
}

function timeToMinutes(value) {
  const match = value.match(/^(\d{2}):(\d{2})$/);
  if (!match) return null;
  return Number.parseInt(match[1], 10) * 60 + Number.parseInt(match[2], 10);
}

function cleanStatus(value) {
  return cleanText(value)
    .replace(/\*+$/g, '')
    .replace(/^pleacă/i, 'Pleacă')
    .replace(/^pleaca/i, 'Pleaca')
    .trim();
}

function cleanText(value) {
  return decodeHtml(stripTags(value))
    .replace(/\s+/g, ' ')
    .trim();
}

function stripTags(value) {
  return String(value).replace(/<[^>]+>/g, ' ');
}

function decodeHtml(value) {
  return String(value).replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (_, entity) => {
    const lower = entity.toLowerCase();
    if (lower[0] === '#') {
      const code = lower[1] === 'x'
        ? Number.parseInt(lower.slice(2), 16)
        : Number.parseInt(lower.slice(1), 10);
      return Number.isFinite(code) ? String.fromCodePoint(code) : _;
    }
    return HTML_ENTITY_MAP[lower] ?? _;
  });
}
