export const WHATSAPP_NUMBERS_URL =
  "https://frontwebsite.sgp1.cdn.digitaloceanspaces.com/fetchnumbers.json";

export const FALLBACK_HOST = "mahadevbookss.com";

function normalizeHost(hostname: string): string {
  return hostname.replace(/^www\./i, "").split(":")[0].toLowerCase().trim();
}

export function normalizeWhatsAppNumber(raw: string): string {
  const digits = String(raw ?? "").replace(/\D/g, "");
  if (!digits) return "";
  if (digits.length === 10) return `91${digits}`;
  if (digits.length === 11 && digits.startsWith("0")) return `91${digits.slice(1)}`;
  if (digits.startsWith("91") && digits.length >= 12) return digits;
  return digits;
}

export function hostnameFromValue(value?: string | null): string {
  if (!value) return FALLBACK_HOST;
  try {
    if (value.includes("://")) return normalizeHost(new URL(value).hostname);
  } catch {
    /* fall through */
  }
  return normalizeHost(value);
}

export function currentHostname(): string {
  if (typeof window !== "undefined" && window.location?.hostname) {
    return normalizeHost(window.location.hostname);
  }
  return FALLBACK_HOST;
}

export function pickNumberForHost(map: Record<string, string>, hostname: string): string {
  const host = normalizeHost(hostname);
  const raw = map[host] ?? map[FALLBACK_HOST] ?? "";
  return normalizeWhatsAppNumber(raw);
}

export function defaultWhatsAppMessage(): string {
  const ref = `REF${Math.floor(100000 + Math.random() * 900000)}`;
  return `Hi, I want to get started. Ref: ${ref}`;
}

export function buildWhatsAppUrl(number: string, text?: string): string {
  const n = normalizeWhatsAppNumber(number);
  if (!n) return "#";
  const msg = text ?? defaultWhatsAppMessage();
  return `https://wa.me/${n}?text=${encodeURIComponent(msg)}`;
}

export function formatWhatsAppDisplay(number: string): string {
  const d = normalizeWhatsAppNumber(number);
  if (d.startsWith("91") && d.length === 12) {
    return `+91 ${d.slice(2, 7)} ${d.slice(7)}`;
  }
  return d ? `+${d}` : "";
}

let cachedNumber = "";

export function getCachedWhatsAppNumber(): string {
  return cachedNumber;
}

export function setCachedWhatsAppNumber(n: string) {
  const normalized = normalizeWhatsAppNumber(n);
  if (normalized) cachedNumber = normalized;
}

export function hostnameFromRequest(request?: Request | null): string {
  if (!request) return FALLBACK_HOST;
  const forwarded = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  const first = forwarded?.split(",")[0]?.trim();
  const host = hostnameFromValue(first);
  if (!host || host === "localhost" || host.startsWith("127.") || host === "0.0.0.0") {
    return FALLBACK_HOST;
  }
  return host;
}

export async function fetchWhatsAppNumber(hostname?: string): Promise<string> {
  const host = hostname ? normalizeHost(hostname) : currentHostname();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch(`${WHATSAPP_NUMBERS_URL}?t=${Date.now()}`, {
      cache: "no-store",
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      },
    });
    if (!res.ok) throw new Error(`WhatsApp numbers fetch failed: ${res.status}`);
    const map = (await res.json()) as Record<string, string>;
    const number = pickNumberForHost(map, host);
    if (number) setCachedWhatsAppNumber(number);
    return number || cachedNumber;
  } catch {
    return cachedNumber;
  } finally {
    clearTimeout(timer);
  }
}
