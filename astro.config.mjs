import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import {
  errorPayload,
  fetchInfoferAirportSchedule,
  jsonHeaders,
  parseDirection,
  parseLimit,
} from "./functions/_shared/infofer-airport-schedule.mjs";

const infoferApiPaths = new Set([
  "/api/infofer/aeroport-gara-de-nord",
  "/api/infofer/aeroport-gara-de-nord.json",
]);

function writeJson(response, statusCode, payload, ttlSeconds = 60) {
  const headers = jsonHeaders(ttlSeconds);
  for (const [name, value] of Object.entries(headers)) {
    response.setHeader(name, value);
  }
  response.statusCode = statusCode;
  response.end(JSON.stringify(payload));
}

function handleInfoferApi(request, response, next) {
  const requestUrl = new URL(request.url ?? "/", "http://localhost");
  const pathname = requestUrl.pathname.endsWith("/")
    ? requestUrl.pathname.slice(0, -1)
    : requestUrl.pathname;

  if (!infoferApiPaths.has(pathname)) {
    next();
    return;
  }

  if (request.method === "OPTIONS") {
    const headers = jsonHeaders(60);
    response.setHeader("access-control-allow-origin", headers["access-control-allow-origin"]);
    response.setHeader("access-control-allow-methods", headers["access-control-allow-methods"]);
    response.setHeader("access-control-allow-headers", headers["access-control-allow-headers"]);
    response.statusCode = 204;
    response.end();
    return;
  }

  if (request.method !== "GET") {
    response.setHeader("allow", "GET, OPTIONS");
    writeJson(response, 405, {
      ok: false,
      source: "Infofer",
      message: "Method not allowed.",
      departures: [],
    });
    return;
  }

  const limit = parseLimit(requestUrl.searchParams.get("limit"), 6);
  const afterTime = requestUrl.searchParams.get("after");
  const arriveByTime = requestUrl.searchParams.get("arriveBy");
  const direction = parseDirection(requestUrl.searchParams.get("direction"));

  fetchInfoferAirportSchedule({ limit, afterTime, arriveByTime, direction })
    .then((payload) => writeJson(response, 200, payload, 60))
    .catch((error) => writeJson(response, 502, errorPayload(error, direction), 30));
}

function infoferLocalApi() {
  return {
    name: "serene-infofer-local-api",
    configureServer(server) {
      server.middlewares.use(handleInfoferApi);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handleInfoferApi);
    },
  };
}

export default defineConfig({
  site: "https://www.serenestudio.ro",
  output: "static",
  trailingSlash: "always",
  devToolbar: {
    enabled: false
  },
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date()
    })
  ],
  vite: {
    plugins: [infoferLocalApi()]
  }
});
