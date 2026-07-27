import { useEffect, useState } from "react";
import { X, Sparkles, Gift } from "lucide-react";
import { WA } from "./site-layout";

export function WhatsAppFloat() {
  return (
    <a
      href={WA}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-transform hover:scale-110"
      style={{ background: "#25D366", boxShadow: "0 8px 30px rgba(37,211,102,0.55)" }}
    >
      <span
        className="absolute inset-0 rounded-full animate-ping"
        style={{ background: "#25D366", opacity: 0.35 }}
      />
      <svg viewBox="0 0 32 32" className="relative h-8 w-8" fill="#fff">
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.13-.63.13-.99 0-.42-1.836-.888-2.164-.803ZM16.15 26.315c-1.462 0-2.905-.36-4.19-1.048l-4.62 1.203 1.235-4.418a8.678 8.678 0 0 1-1.323-4.615c0-4.85 3.955-8.804 8.804-8.804 4.85 0 8.805 3.955 8.805 8.804 0 4.85-3.956 8.804-8.805 8.804h-.006Zm0-19.708c-6.048 0-10.97 4.922-10.97 10.97 0 1.94.508 3.83 1.475 5.492L4 30l7.083-1.83a10.877 10.877 0 0 0 5.13 1.317h.005c6.048 0 10.968-4.922 10.968-10.97 0-2.928-1.14-5.68-3.21-7.75a10.891 10.891 0 0 0-7.756-3.21Z" />
      </svg>
    </a>
  );
}

export function GetIdSlider() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [seconds, setSeconds] = useState(600); // 10-min urgency clock

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const i = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(i);
  }, [open]);

  if (dismissed) return null;

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <>
      {/* scoped keyframes for shimmer + border sweep + wiggle */}
      <style>{`
        @keyframes gid-shimmer { 0% { transform: translateX(-120%); } 100% { transform: translateX(220%); } }
        @keyframes gid-border-spin { to { transform: rotate(1turn); } }
        @keyframes gid-wiggle { 0%,100% { transform: rotate(-6deg) scale(1); } 50% { transform: rotate(6deg) scale(1.08); } }
        @keyframes gid-pop { 0% { transform: translateX(420px) scale(0.85); opacity: 0; }
          60% { transform: translateX(-14px) scale(1.02); opacity: 1; }
          100% { transform: translateX(0) scale(1); opacity: 1; } }
      `}</style>

      <div
        className={`fixed right-3 bottom-24 z-50 w-[260px] sm:w-[290px] max-w-[calc(100vw-5rem)] ${
          open ? "" : "pointer-events-none opacity-0 translate-x-[420px]"
        }`}
        style={open ? { animation: "gid-pop 0.7s cubic-bezier(.22,1.4,.36,1) both" } : undefined}
      >
        <div className="relative rounded-xl p-[1.5px] overflow-hidden shadow-2xl" style={{ boxShadow: "0 14px 40px -10px rgba(201,168,76,0.5)" }}>
          <div
            className="absolute inset-[-50%]"
            style={{
              background: "conic-gradient(from 0deg, #c9a84c, #f0d78c, #25D366, #c9a84c, #f0d78c, #c9a84c)",
              animation: "gid-border-spin 4s linear infinite",
            }}
          />

          <div
            className="relative overflow-hidden rounded-[10px] p-3 backdrop-blur-xl"
            style={{ background: "var(--gradient-hero)" }}
          >
            <div className="pointer-events-none absolute -top-12 -right-12 h-28 w-28 rounded-full bg-primary/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-8 h-24 w-24 rounded-full bg-accent/40 blur-3xl" />

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div
                className="absolute top-0 h-full w-1/3 skew-x-[-20deg]"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
                  animation: "gid-shimmer 3s ease-in-out infinite",
                }}
              />
            </div>

            <button
              onClick={() => {
                setOpen(false);
                setTimeout(() => setDismissed(true), 400);
              }}
              aria-label="Close"
              className="absolute right-1.5 top-1.5 rounded-full bg-background/70 p-0.5 text-foreground/80 hover:bg-background hover:text-foreground z-10"
            >
              <X className="h-3.5 w-3.5" />
            </button>

            <div className="relative flex items-center gap-2.5">
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg shadow-lg"
                style={{ background: "var(--gradient-gold)", animation: "gid-wiggle 2s ease-in-out infinite" }}
              >
                <Gift className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="min-w-0 pr-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-red-500/20 px-1.5 py-0 text-[9px] font-black uppercase tracking-wider text-red-400 ring-1 ring-red-500/40">
                  <span className="relative flex h-1 w-1">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                    <span className="relative inline-flex h-1 w-1 rounded-full bg-red-500" />
                  </span>
                  {mm}:{ss}
                </span>
                <h3 className="mt-0.5 text-[13px] font-black leading-tight text-foreground flex items-center gap-1">
                  <Sparkles className="h-3 w-3 text-accent shrink-0" />
                  Free Cricket ID
                </h3>
                <p className="mt-0.5 text-[10px] text-foreground/70 leading-tight">
                  <span className="font-bold text-accent">15% Bonus</span> • Instant • 24/7
                </p>
              </div>
            </div>

            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-2.5 flex items-center justify-center gap-1.5 overflow-hidden rounded-lg px-3 py-2 text-[12px] font-black uppercase tracking-wide text-primary-foreground shadow-lg transition-transform hover:scale-[1.03] active:scale-[0.98]"
              style={{ background: "var(--gradient-gold)", boxShadow: "0 6px 18px rgba(201,168,76,0.5)" }}
            >
              <span className="pointer-events-none absolute inset-0 overflow-hidden">
                <span
                  className="absolute top-0 h-full w-1/3 skew-x-[-20deg]"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                    animation: "gid-shimmer 2.2s ease-in-out infinite",
                  }}
                />
              </span>
              <span className="relative">Claim ID Now →</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

