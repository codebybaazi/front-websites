const NUMBERS_URL =
  "https://frontwebsite.sgp1.cdn.digitaloceanspaces.com/fetchnumbers.json";

/** Used only if the JSON fetch fails. Matches the current lotus365id.com listing. */
export const FALLBACK_WA_DIGITS = "8294924767";

export const DEFAULT_WA_MESSAGE = "Hi Lotus365, I want to get started.";

export const SUPPORT_EMAIL = "help@lotus365id.com";

/** Pages that should print the live desk number (from fetchnumbers.json) plus a WhatsApp link. */
export const LIVE_WA_NUMBER_SLUGS = new Set([
  "contact-us",
  "support",
  "lotus365-deposit-number",
  "lotus365-withdrawal-number",
  "lotus365-customer-care-number",
  "lotus365-whatsapp-number",
  "lotus365-whatsapp-support",
]);

/** "918294924767" -> "+91 82949 24767" */
export function formatPhoneDisplay(digits: string): string | null {
  if (!/^\d{10,15}$/.test(digits)) return null;
  const cc = digits.slice(0, digits.length - 10);
  const local = digits.slice(-10);
  return `+${cc} ${local.slice(0, 5)} ${local.slice(5)}`;
}

const THIS_SITE_HOST = "lotus365id.com";
/** Same-origin proxy — Spaces CDN caches the raw JSON for 1h and varies by Origin. */
export const WA_NUMBERS_PROXY_PATH = "/wa-numbers.json";
const FETCH_TIMEOUT_MS = 8_000;

type NumbersMap = Record<string, string>;

let inflight: Promise<NumbersMap> | null = null;

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

function parseNumbersMap(json: unknown): NumbersMap {
  if (!json || typeof json !== "object" || Array.isArray(json)) {
    throw new Error("WhatsApp numbers JSON is not an object");
  }
  return json as NumbersMap;
}

/** Pulls the Spaces file. Query-bust so Cloudflare/Spaces cannot serve a stale Origin variant. */
export async function fetchNumbersMapFromSource(): Promise<NumbersMap> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), FETCH_TIMEOUT_MS);
  try {
    // Do not pass `cache` — Node/undici used by Nitro throws on RequestInit.cache.
    const res = await fetch(`${NUMBERS_URL}?t=${Date.now()}`, { signal: ctrl.signal });
    if (!res.ok) throw new Error(`WhatsApp numbers JSON ${res.status}`);
    return parseNumbersMap(await res.json());
  } finally {
    clearTimeout(timer);
  }
}

async function fetchNumbersMapInBrowser(): Promise<NumbersMap> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(`${WA_NUMBERS_PROXY_PATH}?t=${Date.now()}`, {
      signal: ctrl.signal,
    });
    if (!res.ok) throw new Error(`WhatsApp numbers proxy ${res.status}`);
    return parseNumbersMap(await res.json());
  } finally {
    clearTimeout(timer);
  }
}

async function fetchNumbersMap(): Promise<NumbersMap> {
  if (inflight) return inflight;
  inflight = (typeof window === "undefined"
    ? fetchNumbersMapFromSource()
    : fetchNumbersMapInBrowser()
  ).finally(() => {
    inflight = null;
  });
  return inflight;
}

export async function fetchWhatsAppNumber(hostname: string): Promise<string> {
  if (typeof window === "undefined") return FALLBACK_WA_DIGITS;
  try {
    const map = await fetchNumbersMap();
    return resolveNumberFromMap(map, hostname);
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
