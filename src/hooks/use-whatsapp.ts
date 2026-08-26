import { useEffect, useState } from "react";
import {
  FALLBACK_WHATSAPP_HREF,
  hrefFromNumbers,
  withWhatsAppText,
  type HostNumbers,
} from "@/lib/whatsapp";

function loadHref(onHref: (href: string) => void) {
  fetch(`/api/whatsapp-numbers?t=${Date.now()}`)
    .then((r) => (r.ok ? r.json() : {}))
    .then((map: HostNumbers) => {
      onHref(hrefFromNumbers(map, window.location.hostname));
    })
    .catch(() => {});
}

export function useWhatsAppHref(text?: string): string {
  const [href, setHref] = useState(FALLBACK_WHATSAPP_HREF);

  useEffect(() => {
    let alive = true;
    const apply = (next: string) => {
      if (alive) setHref(next);
    };
    loadHref(apply);
    const onFocus = () => loadHref(apply);
    window.addEventListener("focus", onFocus);
    return () => {
      alive = false;
      window.removeEventListener("focus", onFocus);
    };
  }, []);

  return withWhatsAppText(href, text);
}
