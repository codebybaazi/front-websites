const NUMBERS_URL =
  "https://frontwebsite.sgp1.cdn.digitaloceanspaces.com/fetchnumbers.json";

/** Used only if the JSON fetch fails. Matches the current lotus365id.com listing. */
export const FALLBACK_WA_DIGITS = "8294924767";

export const DEFAULT_WA_MESSAGE = "Hi Lotus365, I want to get started.";

const THIS_SITE_HOST = "lotus365id.com";
const CACHE_MS = 60_000;
const FETCH_TIMEOUT_MS = 4_000;

type NumbersMap = Record<string, string>;

let memoryCache: { host: string; number: string; at: number } | null = null;

export function hostKey(hostname: string): string {
  return hostname.replace(/^www\./i, "").toLowerCase();
}

/** wa.me needs a country code. JSON stores 10-digit Indian mobiles. */
export function normalizeWaNumber(raw: string): string {
  const digits = String(raw ?? "").replace(/\D/g, "");
  if (digits.length === 10) return `91${digits}`;
  return digits;
}

export function buildWhatsAppUrl(
  rawNumber: string,
  text: string = DEFAULT_WA_MESSAGE,
): string {
  const n = normalizeWaNumber(rawNumber) || normalizeWaNumber(FALLBACK_WA_DIGITS);
  return `https://wa.me/${n}?text=${encodeURIComponent(text)}`;
}

export function pickNumberForHost(
  map: NumbersMap,
  hostname: string,
): string | undefined {
  const key = hostKey(hostname);
  const raw = map[key] ?? map[`www.${key}`] ?? map[hostname];
  if (raw && String(raw).replace(/\D/g, "")) return String(raw);
  return undefined;
}

function isPreviewHost(hostname: string): boolean {
  const h = hostKey(hostname);
  return (
    h === "localhost" ||
    h === "127.0.0.1" ||
    h.endsWith(".local") ||
    h.includes("lovable") ||
    h.endsWith(".vercel.app") ||
    h.endsWith(".netlify.app")
  );
}

export function resolveNumberFromMap(
  map: NumbersMap,
  hostname: string,
): string {
  const matched = pickNumberForHost(map, hostname);
  if (matched) return matched;
  if (isPreviewHost(hostname) && map[THIS_SITE_HOST]) return map[THIS_SITE_HOST];
  return FALLBACK_WA_DIGITS;
}

async function fetchNumbersMap(): Promise<NumbersMap> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), FETCH_TIMEOUT_MS);
  try {
    // Do not pass `cache` — Node/undici used by Nitro throws on RequestInit.cache.
    const res = await fetch(NUMBERS_URL, { signal: ctrl.signal });
    if (!res.ok) throw new Error(`WhatsApp numbers JSON ${res.status}`);
    const json = (await res.json()) as unknown;
    if (!json || typeof json !== "object" || Array.isArray(json)) {
      throw new Error("WhatsApp numbers JSON is not an object");
    }
    return json as NumbersMap;
  } finally {
    clearTimeout(timer);
  }
}

export async function fetchWhatsAppNumber(hostname: string): Promise<string> {
  if (typeof window === "undefined") return FALLBACK_WA_DIGITS;
  const host = hostKey(hostname);
  if (
    memoryCache &&
    memoryCache.host === host &&
    Date.now() - memoryCache.at < CACHE_MS
  ) {
    return memoryCache.number;
  }

  try {
    const map = await fetchNumbersMap();
    const number = resolveNumberFromMap(map, hostname);
    memoryCache = { host, number, at: Date.now() };
    return number;
  } catch {
    return FALLBACK_WA_DIGITS;
  }
}

export function hostnameFromRequestUrl(url: string | undefined): string {
  if (!url) return THIS_SITE_HOST;
  try {
    return new URL(url).hostname || THIS_SITE_HOST;
  } catch {
    return THIS_SITE_HOST;
  }
}
