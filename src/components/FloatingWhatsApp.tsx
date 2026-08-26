import { useEffect, useState } from "react";
import { X, ArrowUpRight, Zap } from "lucide-react";
import { siteName } from "@/data/site";
import { useWhatsApp } from "@/components/WhatsAppProvider";

export function FloatingWhatsApp() {
  const [showPopup, setShowPopup] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { whatsappUrl: WHATSAPP_URL } = useWhatsApp();

  useEffect(() => {
    if (dismissed) return;
    const t = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(t);
  }, [dismissed]);

  return (
    <>
      <style>{`
        @keyframes wa-bob {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25%      { transform: translateY(-4px) rotate(-6deg); }
          75%      { transform: translateY(-2px) rotate(6deg); }
        }
        @keyframes wa-ring-1 {
          0%   { transform: scale(1);   opacity: 0.55; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes wa-ring-2 {
          0%   { transform: scale(1);   opacity: 0.4; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes wa-badge-pop {
          0%   { transform: scale(0);   opacity: 0; }
          60%  { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1);   opacity: 1; }
        }
        @keyframes wa-pop-in {
          0%   { transform: translate(40px, 40px) scale(0.2); opacity: 0; transform-origin: bottom right; }
          70%  { transform: translate(0, 0) scale(1.03);       opacity: 1; }
          100% { transform: translate(0, 0) scale(1);          opacity: 1; }
        }
        .wa-icon { animation: wa-bob 2.4s ease-in-out infinite; }
        .wa-ring-1 { animation: wa-ring-1 2s ease-out infinite; }
        .wa-ring-2 { animation: wa-ring-2 2s ease-out 0.4s infinite; }
        .wa-badge  { animation: wa-badge-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both; }
        .wa-pop    { animation: wa-pop-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both; transform-origin: bottom right; }
      `}</style>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-[60] grid h-14 w-14 place-items-center rounded-full shadow-2xl transition hover:scale-110"
        style={{ background: "#25D366" }}
      >
        <span aria-hidden className="wa-ring-1 absolute inset-0 rounded-full" style={{ background: "#25D366" }} />
        <span aria-hidden className="wa-ring-2 absolute inset-0 rounded-full" style={{ background: "#25D366" }} />
        <svg viewBox="0 0 32 32" className="wa-icon relative h-7 w-7 fill-white" aria-hidden>
          <path d="M19.11 17.35c-.28-.14-1.63-.8-1.88-.9-.25-.09-.44-.14-.62.14-.18.28-.71.9-.87 1.08-.16.19-.32.21-.6.07-.28-.14-1.17-.43-2.22-1.37-.82-.73-1.37-1.63-1.53-1.91-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.49.14-.16.19-.28.28-.46.09-.19.05-.35-.02-.49-.07-.14-.62-1.5-.86-2.05-.22-.54-.45-.47-.62-.48h-.53c-.19 0-.49.07-.74.35-.25.28-.97.94-.97 2.3s.99 2.66 1.13 2.85c.14.19 1.95 2.98 4.72 4.18.66.28 1.17.45 1.57.58.66.21 1.26.18 1.73.11.53-.08 1.63-.66 1.86-1.31.23-.65.23-1.2.16-1.31-.06-.11-.25-.18-.53-.32Zm-5.05 6.83h-.01c-1.66 0-3.28-.45-4.7-1.29l-.34-.2-3.49.91.93-3.4-.22-.35c-.93-1.48-1.42-3.19-1.42-4.94 0-5.13 4.18-9.31 9.32-9.31 2.49 0 4.83.97 6.59 2.73 1.76 1.77 2.73 4.11 2.73 6.6-.01 5.14-4.19 9.32-9.32 9.32Zm7.93-17.24C19.94 4.85 17.09 3.66 14.06 3.66 7.85 3.66 2.8 8.71 2.8 14.91c0 1.98.52 3.92 1.51 5.63L2.7 26.34l5.94-1.56c1.65.9 3.5 1.38 5.39 1.38h.01c6.21 0 11.26-5.05 11.26-11.26 0-3.01-1.17-5.84-3.31-7.96Z" />
        </svg>
        {showPopup && (
          <span
            aria-hidden
            className="wa-badge absolute -top-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground shadow-lg"
          >
            1
          </span>
        )}
      </a>

      {showPopup && (
        <div
          className="wa-pop fixed bottom-24 right-5 z-[59] w-[19rem] max-w-[calc(100vw-2.5rem)] rounded-2xl border border-primary/40 bg-card/95 backdrop-blur p-4 shadow-2xl"
          role="dialog"
          aria-label="Get in touch"
        >
          <span
            aria-hidden
            className="absolute -bottom-2 right-6 h-4 w-4 rotate-45 border-b border-r border-primary/40 bg-card/95"
          />
          <button
            onClick={() => {
              setShowPopup(false);
              setDismissed(true);
            }}
            aria-label="Close"
            className="absolute -top-2 -left-2 grid h-7 w-7 place-items-center rounded-full border border-border bg-background text-foreground hover:text-primary"
          >
            <X className="h-3.5 w-3.5" />
          </button>

          <div className="flex items-start gap-3">
            <div className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/15 text-primary text-lg font-bold">
              {siteName.slice(0, 2).toUpperCase()}
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card bg-success" />
            </div>
            <div className="min-w-0">
              <div className="font-display font-bold text-foreground leading-tight">
                🎉 We're one chat away
              </div>
              <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
                Instant response · 24×7 support · Real humans.
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2 rounded-lg bg-primary/10 px-2.5 py-1.5 text-[11px] font-semibold text-primary">
            <Zap className="h-3 w-3" />
            Limited-time welcome offer
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <span className="btn-glow-content">Start on WhatsApp</span>
            <span className="btn-glow-content">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      )}
    </>
  );
}
