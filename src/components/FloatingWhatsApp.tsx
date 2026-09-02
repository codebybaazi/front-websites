import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { waLink } from "@/lib/whatsapp";
import whatsappIcon from "@/assets/whatsapp-icon-white.png";

const DISMISS_KEY = "fairplay_wa_slider_dismissed";

export function FloatingWhatsApp() {
  const [showSlider, setShowSlider] = useState(false);
  const [dismissed, setDismissed] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      return window.localStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (dismissed) return;
    const timer = setTimeout(() => setShowSlider(true), 3000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const handleDismiss = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDismissed(true);
    try {
      window.localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // ignore storage errors
    }
  };

  const whatsappUrl = waLink("Hi Fairplay — I want to open an ID.");

  return (
    <>
      {/* Floating button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_rgba(37,211,102,0.45)]"
        aria-label="Message Fairplay on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 motion-safe:animate-ping" />
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          width={56}
          height={56}
          className="relative z-10 h-8 w-8"
        />
      </motion.a>

      {/* Auto slider */}
      <AnimatePresence>
        {showSlider && !dismissed && (
          <motion.div
            initial={{ x: 380, opacity: 0, rotate: 3 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            exit={{ x: 380, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 170 }}
            className="fixed bottom-24 right-4 z-50 w-[290px] sm:right-6"
          >
            <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-card/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              {/* animated top rule */}
              <div className="h-[3px] w-full brand-rule" />

              {/* glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />

              <button
                type="button"
                onClick={handleDismiss}
                className="absolute right-1.5 top-3 z-20 rounded-full p-2 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
                aria-label="Dismiss"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative p-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#25D366]">
                    <img src={whatsappIcon} alt="" width={40} height={40} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[13px] font-bold leading-tight text-foreground">Fairplay desk</p>
                    <p className="flex items-center gap-1 text-[10px] font-medium text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary motion-safe:animate-pulse" />
                      Online now
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-[15px] font-bold leading-snug tracking-tight text-foreground">
                  Get your ID now — ready in minutes.
                </p>
                <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                  Your WhatsApp number is the login. UPI in, payout after settlement.
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-muted-foreground">
                    <Zap className="h-3 w-3 text-flame" /> Instant setup
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-muted-foreground">
                    <ShieldCheck className="h-3 w-3 text-primary" /> Official desk
                  </span>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-3 py-3 text-[13px] font-bold text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-transform hover:scale-[1.02]"
                >
                  <img src={whatsappIcon} alt="" width={40} height={40} className="h-4 w-4" />
                  Get ID now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
