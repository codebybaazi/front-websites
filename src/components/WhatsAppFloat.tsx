import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { WhatsAppLink } from "@/components/WhatsAppProvider";
import { LiveWhatsAppNumber } from "@/components/LiveWhatsAppNumber";

export function WhatsAppFloat() {
  const [showPopup, setShowPopup] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      if (!dismissed) setShowPopup(true);
    }, 3000);
    return () => clearTimeout(t);
  }, [dismissed]);

  return (
    <>
      {/* Floating WhatsApp button */}
      <WhatsAppLink
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/30 transition-transform hover:scale-110 md:h-16 md:w-16"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
        <svg
          viewBox="0 0 32 32"
          className="relative h-8 w-8 md:h-9 md:w-9"
          fill="#fff"
          aria-hidden="true"
        >
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.301.187-.66.187-1.017 0-.5-1.05-.7-1.65-1.017zM16.115 5.155A10.845 10.845 0 0 0 5.28 16c0 1.917.51 3.797 1.474 5.44L5 27l5.7-1.744A10.85 10.85 0 0 0 26.955 16 10.83 10.83 0 0 0 16.115 5.155zm0 19.685c-1.708 0-3.375-.46-4.833-1.318l-.344-.216-3.55 1.088 1.117-3.404-.216-.343A8.87 8.87 0 0 1 7.19 16c0-4.933 4.03-8.933 8.933-8.933s8.933 4 8.933 8.933a8.925 8.925 0 0 1-8.94 8.84z" />
        </svg>
      </WhatsAppLink>

      {/* Slide-in "Get ID Now" popup */}
      {showPopup && (
        <div
          className="fixed bottom-24 right-5 z-[59] w-[280px] animate-slide-in-right rounded-xl border border-primary/30 bg-card p-4 shadow-2xl shadow-black/40 md:w-[320px]"
          role="dialog"
          aria-label="Get your Lotus365 ID"
        >
          <button
            onClick={() => {
              setShowPopup(false);
              setDismissed(true);
            }}
            aria-label="Close"
            className="absolute right-2 top-2 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="pr-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Instant Access
            </p>
            <h4 className="mt-1 text-base font-bold text-foreground">
              Get your Lotus365 ID now
            </h4>
            <p className="mt-1 text-xs text-muted-foreground">
              Trusted since 2016 — ID delivered on WhatsApp in minutes.
            </p>
            <LiveWhatsAppNumber className="mt-3 w-full justify-center" />
          </div>
        </div>
      )}
    </>
  );
}
