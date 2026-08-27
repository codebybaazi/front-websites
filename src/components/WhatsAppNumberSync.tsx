import { useEffect } from "react";

import {
  fetchWhatsAppNumberMap,
  getWhatsAppNumber,
  pickNumberForHost,
  setWhatsAppNumber,
} from "@/lib/whatsapp";

function syncRenderedLinks() {
  const number = getWhatsAppNumber();
  document.querySelectorAll<HTMLAnchorElement>('a[href*="wa.me/"]').forEach((anchor) => {
    anchor.href = anchor.href.replace(/wa\.me\/\+?\d+/, `wa.me/${number}`);
  });
}

/**
 * Re-checks fetchnumbers.json after hydration.
 *
 * SSR already renders the published number, so this only changes anything when
 * the HTML came from a cache that predates a number change. Anchors already in
 * the DOM are patched directly since React will not re-render them on its own;
 * anything rendered afterwards picks up the new number through `waLink()`.
 */
export function WhatsAppNumberSync() {
  useEffect(() => {
    const controller = new AbortController();

    fetchWhatsAppNumberMap(controller.signal)
      .then((map) => {
        if (setWhatsAppNumber(pickNumberForHost(map, window.location.hostname))) {
          syncRenderedLinks();
        }
      })
      .catch(() => {
        // Keep whatever the server rendered.
      });

    return () => controller.abort();
  }, []);

  return null;
}
