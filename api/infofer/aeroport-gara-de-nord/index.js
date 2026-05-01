import {
  errorPayload,
  fetchInfoferAirportSchedule,
  jsonHeaders,
  parseDirection,
  parseLimit,
} from '../../../functions/_shared/infofer-airport-schedule.mjs';

export default async function handler(request, response) {
  if (request.method === 'OPTIONS') {
    const headers = jsonHeaders(60);
    response.setHeader('access-control-allow-origin', headers['access-control-allow-origin']);
    response.setHeader('access-control-allow-methods', headers['access-control-allow-methods']);
    response.setHeader('access-control-allow-headers', headers['access-control-allow-headers']);
    response.status(204).end();
    return;
  }

  const limit = parseLimit(request.query?.limit, 6);
  const afterTime = request.query?.after;
  const arriveByTime = request.query?.arriveBy;
  const direction = parseDirection(request.query?.direction);

  try {
    const payload = await fetchInfoferAirportSchedule({ limit, afterTime, arriveByTime, direction });
    const headers = jsonHeaders(60);
    response.setHeader('cache-control', headers['cache-control']);
    response.setHeader('content-type', headers['content-type']);
    response.setHeader('access-control-allow-origin', headers['access-control-allow-origin']);
    response.setHeader('access-control-allow-methods', headers['access-control-allow-methods']);
    response.setHeader('access-control-allow-headers', headers['access-control-allow-headers']);
    response.status(200).json(payload);
  } catch (error) {
    const headers = jsonHeaders(30);
    response.setHeader('cache-control', headers['cache-control']);
    response.setHeader('content-type', headers['content-type']);
    response.setHeader('access-control-allow-origin', headers['access-control-allow-origin']);
    response.setHeader('access-control-allow-methods', headers['access-control-allow-methods']);
    response.setHeader('access-control-allow-headers', headers['access-control-allow-headers']);
    response.status(502).json(errorPayload(error, direction));
  }
}
