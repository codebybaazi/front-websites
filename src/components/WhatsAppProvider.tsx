import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";
import {
  buildWhatsAppUrl,
  FALLBACK_WA_DIGITS,
  fetchWhatsAppNumber,
  normalizeWaNumber,
} from "@/lib/whatsapp";

type WhatsAppCtx = {
  number: string;
  url: string;
  urlWithText: (text: string) => string;
};

const WhatsAppContext = createContext<WhatsAppCtx>({
  number: normalizeWaNumber(FALLBACK_WA_DIGITS),
  url: buildWhatsAppUrl(FALLBACK_WA_DIGITS),
  urlWithText: (text) => buildWhatsAppUrl(FALLBACK_WA_DIGITS, text),
});

export function WhatsAppProvider({
  children,
  initialNumber,
}: {
  children: ReactNode;
  initialNumber?: string;
}) {
  const [raw, setRaw] = useState(initialNumber || FALLBACK_WA_DIGITS);

  useEffect(() => {
    let cancelled = false;
    const host = window.location.hostname;
    fetchWhatsAppNumber(host)
      .then((n) => {
        if (!cancelled && n) setRaw(n);
      })
      .catch(() => {
        /* keep SSR / fallback number */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo<WhatsAppCtx>(() => {
    const number = normalizeWaNumber(raw);
    return {
      number,
      url: buildWhatsAppUrl(raw),
      urlWithText: (text) => buildWhatsAppUrl(raw, text),
    };
  }, [raw]);

  return (
    <WhatsAppContext.Provider value={value}>{children}</WhatsAppContext.Provider>
  );
}

export function useWhatsApp(): WhatsAppCtx {
  return useContext(WhatsAppContext);
}

export function useWhatsAppUrl(text?: string): string {
  const { url, urlWithText } = useWhatsApp();
  return text ? urlWithText(text) : url;
}

type WhatsAppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  text?: string;
};

export function WhatsAppLink({
  text,
  target = "_blank",
  rel = "noreferrer",
  ...props
}: WhatsAppLinkProps) {
  const href = useWhatsAppUrl(text);
  return <a href={href} target={target} rel={rel} {...props} />;
}
