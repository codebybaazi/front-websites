/**
 * Single source of truth for the WhatsApp number behind every CTA.
 *
 * The live number is published per hostname in a remote JSON file, so it can be
 * swapped without a redeploy. It is resolved on the server for each SSR request
 * (see `whatsapp-server.ts`), handed to the browser through a meta tag, and then
 * refreshed client side after hydration.
 */

export const WHATSAPP_NUMBERS_URL =
  "https://frontwebsite.sgp1.cdn.digitaloceanspaces.com/fetchnumbers.json";

/** Rendered until the remote list resolves, and whenever it is unreachable. */
export const FALLBACK_WHATSAPP_NUMBER = "918294924767";

export const WHATSAPP_NUMBER_META_NAME = "fp-whatsapp-number";

const DEFAULT_COUNTRY_CODE = "91";

export type WhatsAppNumberMap = Record<string, string>;

/** Strips formatting and adds the country code to bare 10-digit Indian numbers. */
export function normalizeWhatsAppNumber(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return `${DEFAULT_COUNTRY_CODE}${digits}`;
  if (digits.length >= 11 && digits.length <= 15) return digits;
  return null;
}

export function normalizeHost(host: string): string {
  return host
    .trim()
    .toLowerCase()
    .replace(/:\d+$/, "")
    .replace(/^www\./, "");
}

export function pickNumberForHost(map: unknown, host: string): string | null {
  if (map === null || typeof map !== "object") return null;

  const target = normalizeHost(host);
  if (!target) return null;

  const entries = Object.entries(map as Record<string, unknown>).map(
    ([domain, number]) => [normalizeHost(domain), number] as const,
  );

  const exact = entries.find(([domain]) => domain === target);
  if (exact) return normalizeWhatsAppNumber(exact[1]);

  // Subdomains (m.example.com, staging.example.com) inherit the parent entry.
  const parent = entries.find(([domain]) => domain !== "" && target.endsWith(`.${domain}`));
  return parent ? normalizeWhatsAppNumber(parent[1]) : null;
}

export async function fetchWhatsAppNumberMap(signal?: AbortSignal): Promise<WhatsAppNumberMap> {
  // The query string defeats CDN and browser caching so an edited JSON is seen
  // on the very next request rather than minutes later.
  const response = await fetch(`${WHATSAPP_NUMBERS_URL}?t=${Date.now()}`, {
    cache: "no-store",
    signal: signal ?? null,
  });

  if (!response.ok) {
    throw new Error(`fetchnumbers.json responded with ${response.status}`);
  }

  return (await response.json()) as WhatsAppNumberMap;
}

function readNumberFromDocument(): string | null {
  if (typeof document === "undefined") return null;
  const meta = document.querySelector(`meta[name="${WHATSAPP_NUMBER_META_NAME}"]`);
  return normalizeWhatsAppNumber(meta?.getAttribute("content"));
}

// On the server this holds the number for the request currently being rendered;
// in the browser it holds the latest number we know about.
let currentNumber = readNumberFromDocument() ?? FALLBACK_WHATSAPP_NUMBER;

export function getWhatsAppNumber(): string {
  return currentNumber;
}

/** Returns true when the stored number actually changed. */
export function setWhatsAppNumber(value: string | null | undefined): boolean {
  const normalized = normalizeWhatsAppNumber(value);
  if (!normalized || normalized === currentNumber) return false;
  currentNumber = normalized;
  return true;
}

/** Builds a wa.me deep link for the currently active number. */
export function waLink(text?: string): string {
  const base = `https://wa.me/${currentNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
