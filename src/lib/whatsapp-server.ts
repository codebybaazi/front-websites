import {
  FALLBACK_WHATSAPP_NUMBER,
  fetchWhatsAppNumberMap,
  pickNumberForHost,
  setWhatsAppNumber,
  type WhatsAppNumberMap,
} from "./whatsapp";

const CACHE_TTL_MS = 60_000;
const FETCH_TIMEOUT_MS = 5_000;

let cachedMap: WhatsAppNumberMap | null = null;
let cachedAt = 0;
let inflight: Promise<WhatsAppNumberMap | null> | null = null;

function refresh(): Promise<WhatsAppNumberMap | null> {
  if (inflight) return inflight;

  const pending = fetchWhatsAppNumberMap(AbortSignal.timeout(FETCH_TIMEOUT_MS))
    .then((map) => {
      cachedMap = map;
      cachedAt = Date.now();
      return map;
    })
    .catch((error: unknown) => {
      console.error("[whatsapp] failed to refresh fetchnumbers.json", error);
      // Bump the timestamp anyway so an unreachable CDN cannot make every
      // request pay for a failing fetch.
      cachedAt = Date.now();
      return cachedMap;
    })
    .finally(() => {
      if (inflight === pending) inflight = null;
    });

  inflight = pending;
  return pending;
}

export function getHostFromRequest(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-host");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "";
  return request.headers.get("host") ?? new URL(request.url).host;
}

export async function resolveWhatsAppNumberForHost(host: string): Promise<string> {
  if (cachedMap === null) {
    // Cold start: this one request waits so the first page already renders the
    // published number instead of the fallback.
    await refresh();
  } else if (Date.now() - cachedAt > CACHE_TTL_MS) {
    // Warm the cache in the background and answer from what we already have.
    void refresh();
  }

  return pickNumberForHost(cachedMap, host) ?? FALLBACK_WHATSAPP_NUMBER;
}

/**
 * Points `waLink()` at the number published for the host being served.
 *
 * The number lives in module scope rather than in request-scoped storage, which
 * is safe here because a deployment answers for a single hostname.
 */
export async function applyWhatsAppNumberForRequest(request: Request): Promise<string> {
  const number = await resolveWhatsAppNumberForHost(getHostFromRequest(request));
  setWhatsAppNumber(number);
  return number;
}
