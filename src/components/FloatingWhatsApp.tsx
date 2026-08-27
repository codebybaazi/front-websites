import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Zap, ShieldCheck, Trophy } from "lucide-react";
import { waLink } from "@/lib/whatsapp";
import whatsappIcon from "@/assets/whatsapp-icon.png";

export function FloatingWhatsApp() {
  const [showSlider, setShowSlider] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSlider(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = waLink("Hello Fairplay! I want to get my VIP ID and join now.");

  return (
    <>
      {/* Premium Floating WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.3)] transition-all group"
        aria-label="Contact us on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 rounded-full animate-[ping_2s_infinite] bg-[#25D366] opacity-30 pointer-events-none" />
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          width={56}
          height={56}
          className="h-8 w-8 relative z-10 drop-shadow-lg"
        />
        
        {/* Eye-catching Badge */}
        <div className="absolute -top-1 -left-1 bg-primary text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-lg border border-white/20 animate-bounce">
          LIVE
        </div>

        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-full mr-4 whitespace-nowrap rounded-2xl bg-card border border-primary/30 px-4 py-2 text-sm font-bold text-foreground shadow-2xl backdrop-blur-xl"
            >
              <span className="text-primary mr-1">●</span> Need help? Chat now
            </motion.span>
          )}
        </AnimatePresence>
      </motion.a>

      {/* Premium Eye-Catching Slider */}
      <AnimatePresence>
        {showSlider && (
          <motion.div
            initial={{ x: "120%", opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: "120%", opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 150 }}
            className="fixed bottom-24 right-6 z-50 w-[280px]"
          >
            <div className="relative overflow-hidden rounded-3xl bg-card/95 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl">
              {/* Compact Header */}
              <div className="bg-gradient-to-r from-primary to-[#FF8A00] px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy className="h-3.5 w-3.5 text-white" />
                  <span className="text-[9px] font-black text-white tracking-widest uppercase italic">Elite Access</span>
                </div>
                <button
                  onClick={() => setShowSlider(false)}
                  className="p-1 rounded-full hover:bg-white/20 transition-colors"
                >
                  <X className="h-3.5 w-3.5 text-white" />
                </button>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center border border-[#25D366]/20">
                      <Zap className="h-5 w-5 text-[#25D366] animate-pulse" />
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 bg-[#25D366] rounded-full border-2 border-card flex items-center justify-center">
                      <div className="h-1 w-1 bg-white rounded-full animate-ping" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-black bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                      Fairplay Official
                    </h3>
                    <div className="flex items-center gap-1 text-[#25D366] text-[10px] font-bold">
                      <ShieldCheck className="h-2.5 w-2.5" />
                      Verified VIP
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-5">
                  {[
                    "Instant ID",
                    "24/7 Support",
                    "300% Bonus",
                    "Fast Payout"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] font-medium text-gray-300 bg-white/5 rounded-lg px-2 py-1.5 border border-white/5">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                      {text}
                    </div>
                  ))}
                </div>

                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group block w-full"
                >
                  <div className="absolute inset-0 bg-[#25D366] rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-black py-3 px-4 rounded-xl transition-all shadow-lg">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-[11px] uppercase tracking-wider italic">GET VIP ID</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.a>
              </div>

              {/* Background Accents */}
              <div className="absolute -top-10 -left-10 h-32 w-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
