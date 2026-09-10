import { SITE_URL } from "@/lib/site-url";

export const WHATSAPP_NUMBERS_URL =
  "https://frontwebsite.sgp1.cdn.digitaloceanspaces.com/fetchnumbers.json";

/** Used only if the numbers file cannot be fetched. */
export const FALLBACK_WHATSAPP_HREF = "https://wa.link/sprinters-id";

export type HostNumbers = Record<string, string>;

export function normalizeHost(host: string): string {
  return host
    .split(",")[0]
    .trim()
    .toLowerCase()
    .replace(/^www\./, "")
    .split(":")[0];
}

export function siteFallbackHost(): string {
  try {
    return normalizeHost(new URL(SITE_URL).hostname);
  } catch {
    return "sprintersbokk.com";
  }
}

export function lookupNumber(map: HostNumbers, host: string): string | undefined {
  const wanted = normalizeHost(host);
  if (wanted && map[wanted]) return String(map[wanted]);

  const site = siteFallbackHost();
  if (site && map[site]) return String(map[site]);

  return undefined;
}

export function toWhatsAppHref(rawNumber: string): string {
  const digits = String(rawNumber).replace(/\D/g, "");
  if (!digits) return FALLBACK_WHATSAPP_HREF;

  let intl = digits;
  if (intl.length === 10) intl = `91${intl}`;
  else if (intl.startsWith("0") && intl.length === 11) intl = `91${intl.slice(1)}`;

  return `https://wa.me/${intl}`;
}

/** Visible label for a WhatsApp number. Never use this as a tel: link. */
export function formatDisplayNumber(rawNumber: string): string {
  const digits = String(rawNumber).replace(/\D/g, "");
  if (!digits) return "";

  let intl = digits;
  if (intl.length === 10) intl = `91${intl}`;
  else if (intl.startsWith("0") && intl.length === 11) intl = `91${intl.slice(1)}`;

  if (intl.length === 12 && intl.startsWith("91")) {
    return `+91 ${intl.slice(2, 7)} ${intl.slice(7)}`;
  }
  return `+${intl}`;
}

export function displayNumberFromHref(href: string): string {
  const match = href.match(/wa\.me\/(\d+)/i);
  if (!match) return "";
  return formatDisplayNumber(match[1]);
}

export function withWhatsAppText(href: string, text?: string): string {
  if (!text) return href;
  const sep = href.includes("?") ? "&" : "?";
  return `${href}${sep}text=${encodeURIComponent(text)}`;
}

export function hrefFromNumbers(map: HostNumbers | undefined, host: string): string {
  if (!map) return FALLBACK_WHATSAPP_HREF;
  const number = lookupNumber(map, host);
  if (!number) return FALLBACK_WHATSAPP_HREF;
  return toWhatsAppHref(number);
}

export async function fetchHostNumbers(): Promise<HostNumbers> {
  try {
    const res = await fetch(`${WHATSAPP_NUMBERS_URL}?t=${Date.now()}`, {
      headers: { accept: "application/json" },
    });
    if (!res.ok) return {};
    const json = (await res.json()) as unknown;
    if (!json || typeof json !== "object" || Array.isArray(json)) return {};
    return json as HostNumbers;
  } catch {
    return {};
  }
}
