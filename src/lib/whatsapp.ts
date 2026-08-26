export const FETCH_NUMBERS_URL =
  "https://frontwebsite.sgp1.cdn.digitaloceanspaces.com/fetchnumbers.json";

/** Last-resort number if the JSON cannot be reached. */
export const FALLBACK_RAW = "9999999999";

export type WhatsAppContact = {
  raw: string;
  digits: string;
  wa: string;
  tel: string;
  display: string;
};

export const FALLBACK_CONTACT: WhatsAppContact = buildContact(FALLBACK_RAW);

export function normalizeHost(hostname: string): string {
  return hostname
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .split("/")[0]
    .split(":")[0]
    .replace(/^www\./, "");
}

export function toWhatsAppDigits(raw: string): string {
  let digits = raw.replace(/\D/g, "");
  if (digits.startsWith("0")) digits = digits.slice(1);
  if (digits.startsWith("91") && digits.length >= 12) return digits;
  if (digits.length === 10) return `91${digits}`;
  return digits;
}

export function formatDisplay(digits: string): string {
  if (digits.startsWith("91") && digits.length === 12) {
    const local = digits.slice(2);
    return `+91 ${local.slice(0, 5)} ${local.slice(5)}`;
  }
  return digits ? `+${digits}` : "";
}

export function buildContact(raw: string): WhatsAppContact {
  const digits = toWhatsAppDigits(raw);
  return {
    raw,
    digits,
    wa: `https://wa.me/${digits}`,
    tel: `tel:+${digits}`,
    display: formatDisplay(digits),
  };
}

export function pickRawNumber(
  map: Record<string, string>,
  hostname: string,
): string | undefined {
  const host = normalizeHost(hostname);
  if (host && map[host]) return map[host];

  for (const [key, value] of Object.entries(map)) {
    const k = normalizeHost(key);
    if (!k || !value) continue;
    if (host === k || host.endsWith(`.${k}`)) return value;
  }

  // This site is cricbet99 — use that entry on localhost / preview hosts.
  return map["cricbet99.co.in"];
}

export async function fetchWhatsAppContact(
  hostname: string,
  timeoutMs = 4000,
): Promise<WhatsAppContact | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const url = `${FETCH_NUMBERS_URL}?t=${Date.now()}`;
    const res = await fetch(url, {
      signal: controller.signal,
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "Cache-Control": "no-cache",
      },
    });
    if (!res.ok) throw new Error(`status ${res.status}`);
    const map = (await res.json()) as Record<string, string>;
    const raw = pickRawNumber(map, hostname);
    if (!raw) return null;
    return buildContact(raw);
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}
