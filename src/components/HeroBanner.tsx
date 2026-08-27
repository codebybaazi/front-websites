import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Zap, ShieldCheck, Clock, Headphones } from "lucide-react";
import { waLink } from "@/lib/whatsapp";
import bannerDesktop from "@/assets/hero-banner-desktop.jpg";
import bannerMobile from "@/assets/hero-banner-mobile.jpg";

const badges = [
  { icon: ShieldCheck, label: "100% Secure" },
  { icon: Clock, label: "180 Min Payouts" },
  { icon: Headphones, label: "24x7 Support" },
];

export const HeroBanner = () => {
  return (
    <section className="relative pt-16 md:pt-20 px-3 sm:px-4 pb-6" aria-label="Fairplay cricket ID banner">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-primary/25 shadow-[0_20px_80px_-30px_rgba(255,100,0,0.45)]"
        >
          {/* Banner artwork */}
          <picture>
            <source media="(min-width: 768px)" srcSet={bannerDesktop} />
            <img
              src={bannerMobile}
              alt="Fairplay cricket ID banner — get your ID in 2 minutes and play and win big"
              width={1920}
              height={832}
              className="w-full h-auto block"
            />
          </picture>

          {/* Bottom gradient + CTAs */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent pt-16 pb-4 px-4 sm:px-8">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <Link
                to="/fairplay-id"
                className="px-6 py-3.5 sm:px-9 sm:py-4 bg-primary text-primary-foreground font-black italic uppercase tracking-tight rounded-xl text-center flex items-center justify-center gap-2 hover:scale-[1.03] transition-transform shadow-[0_0_30px_rgba(255,100,0,0.4)]"
              >
                Get your ID now <Zap className="w-4 h-4 fill-current" />
              </Link>
              <a
                href={waLink("Hello Fairplay! I want to create my Cricket ID now.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 sm:px-9 sm:py-4 bg-card/80 backdrop-blur border border-white/15 text-foreground font-black italic uppercase tracking-tight rounded-xl text-center hover:bg-accent transition-colors"
              >
                WhatsApp us
              </a>
            </div>
          </div>

          {/* Animated shine sweep */}
          <motion.div
            initial={{ x: "-120%" }}
            animate={{ x: "220%" }}
            transition={{ duration: 5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] pointer-events-none"
          />
        </motion.div>

        {/* Trust strip */}
        <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-4">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex items-center justify-center gap-2 px-2 py-3 rounded-xl bg-card/60 border border-white/5"
            >
              <b.icon className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-[9px] sm:text-xs font-black uppercase tracking-wider text-muted-foreground text-center">
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
