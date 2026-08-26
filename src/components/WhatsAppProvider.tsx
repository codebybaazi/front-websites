import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  buildWhatsAppUrl,
  currentHostname,
  fetchWhatsAppNumber,
  getCachedWhatsAppNumber,
  setCachedWhatsAppNumber,
} from "@/lib/whatsapp";

type WhatsAppContextValue = {
  number: string;
  whatsappUrl: string;
  waHref: (text?: string) => string;
};

const WhatsAppContext = createContext<WhatsAppContextValue>({
  number: "",
  whatsappUrl: "#",
  waHref: (text) => buildWhatsAppUrl(getCachedWhatsAppNumber(), text),
});

const STORAGE_KEY = "mahadev-wa-number";

function readStoredNumber() {
  if (typeof window === "undefined") return "";
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) || "";
  } catch {
    return "";
  }
}

function writeStoredNumber(n: string) {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, n);
  } catch {
    /* ignore quota / private mode */
  }
}

export function WhatsAppProvider({
  children,
  initialNumber = "",
}: {
  children: ReactNode;
  initialNumber?: string;
}) {
  const [number, setNumber] = useState(() => {
    const seed = initialNumber || readStoredNumber() || getCachedWhatsAppNumber();
    if (seed) setCachedWhatsAppNumber(seed);
    return seed;
  });

  useEffect(() => {
    if (initialNumber) {
      setCachedWhatsAppNumber(initialNumber);
      setNumber(initialNumber);
      writeStoredNumber(initialNumber);
    }

    let cancelled = false;
    const apply = (n: string) => {
      if (!cancelled && n) {
        setCachedWhatsAppNumber(n);
        writeStoredNumber(n);
        setNumber(n);
      }
    };
    const load = () => {
      fetch(`/api/whatsapp-number?t=${Date.now()}`, { cache: "no-store" })
        .then((r) => (r.ok ? r.json() : Promise.reject(new Error("wa api"))))
        .then((data: { number?: string }) => {
          if (data?.number) apply(data.number);
        })
        .catch(() => {
          fetchWhatsAppNumber(currentHostname()).then(apply);
        });
    };

    load();
    const onVisible = () => {
      if (document.visibilityState === "visible") load();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      cancelled = true;
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [initialNumber]);

  const value = useMemo<WhatsAppContextValue>(
    () => ({
      number,
      whatsappUrl: buildWhatsAppUrl(number),
      waHref: (text?: string) => buildWhatsAppUrl(number, text),
    }),
    [number],
  );

  return <WhatsAppContext.Provider value={value}>{children}</WhatsAppContext.Provider>;
}

export function useWhatsApp() {
  return useContext(WhatsAppContext);
}
