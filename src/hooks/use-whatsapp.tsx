import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {
  FALLBACK_CONTACT,
  fetchWhatsAppContact,
  type WhatsAppContact,
} from "@/lib/whatsapp";

const WhatsAppContext = createContext<WhatsAppContact>(FALLBACK_CONTACT);

export function WhatsAppProvider({
  children,
  initial,
}: {
  children: ReactNode;
  initial?: WhatsAppContact;
}) {
  const [contact, setContact] = useState<WhatsAppContact>(initial ?? FALLBACK_CONTACT);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const next = await fetchWhatsAppContact(window.location.hostname);
      if (!cancelled && next) {
        setContact(next);
        return;
      }
      try {
        const res = await fetch(`/api/public/whatsapp-number?t=${Date.now()}`, {
          cache: "no-store",
        });
        if (!res.ok) return;
        const data = (await res.json()) as WhatsAppContact;
        if (!cancelled && data?.wa) setContact(data);
      } catch {
        // Keep SSR / last known number.
      }
    }

    load();

    const onVisible = () => {
      if (document.visibilityState === "visible") load();
    };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("focus", load);

    return () => {
      cancelled = true;
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("focus", load);
    };
  }, []);

  return <WhatsAppContext.Provider value={contact}>{children}</WhatsAppContext.Provider>;
}

export function useWhatsApp(): WhatsAppContact {
  return useContext(WhatsAppContext);
}
