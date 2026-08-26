import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { useWhatsAppHref } from "@/hooks/use-whatsapp";

export function FloatingWhatsApp() {
  const [showPopup, setShowPopup] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const whatsapp = useWhatsAppHref();

  useEffect(() => {
    if (dismissed) return;
    const t = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(t);
  }, [dismissed]);

  return (
    <>
      {/* Slide-out popup */}
      {showPopup && !dismissed && (
        <div className="fixed bottom-24 right-4 z-50 w-[min(320px,calc(100vw-2rem))] animate-slide-in-right">
          <div
            className="relative rounded-2xl p-5 shadow-2xl"
            style={{ background: "var(--gradient-hero)" }}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setDismissed(true)}
              className="absolute right-2 top-2 rounded-full bg-black/20 p-1 text-white hover:bg-black/40"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <p className="pr-6 text-sm font-bold uppercase tracking-wider text-white">
              🏏 Start playing in minutes
            </p>
            <p className="mt-1 text-xs text-white/90">
              Get your verified Sprinters ID on WhatsApp — instant deposits, 24-hour withdrawals.
            </p>
            <a
              href={whatsapp}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-primary hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" /> Get ID Now
            </a>
          </div>
        </div>
      )}

      {/* Floating WhatsApp button */}
      <a
        href={whatsapp}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110"
      >
        <span
          className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-60 animate-ping"
          aria-hidden
        />
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden>
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 01-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 01-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035 1.032 2.694 1.032.874 0 2.62-.72 2.965-1.56.13-.302.13-.573.093-.888-.058-.115-.223-.187-.48-.309-.256-.115-1.522-.723-1.762-.808z"/>
          <path d="M16.006 3C8.827 3 3 8.827 3 16.006c0 2.28.596 4.522 1.735 6.492L3 29l6.653-1.688a12.94 12.94 0 006.353 1.686h.006c7.174 0 13.001-5.828 13.001-13.001 0-3.474-1.352-6.74-3.804-9.194A12.93 12.93 0 0016.006 3zm0 23.804h-.005a10.804 10.804 0 01-5.505-1.507l-.395-.235-3.947 1.006 1.026-3.837-.257-.409a10.79 10.79 0 01-1.653-5.813c0-5.965 4.854-10.812 10.815-10.812 2.888 0 5.6 1.125 7.641 3.169a10.734 10.734 0 013.166 7.644c-.002 5.966-4.856 10.814-10.815 10.814z"/>
        </svg>
      </a>

    </>
  );
}
