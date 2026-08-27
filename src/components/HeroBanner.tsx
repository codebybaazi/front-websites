import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Zap } from "lucide-react";
import { waLink } from "@/lib/whatsapp";
import banner from "@/assets/hero-banner.jpg";

export const HeroBanner = () => {
  return (
    <section className="relative px-3 sm:px-4 pt-2 pb-5" aria-label="Fairplay cricket ID banner">
      <h1 className="sr-only">
        Fairplay — get your online cricket ID in just 2 minutes for IPL, casino, football and tennis
      </h1>
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-2xl md:rounded-[2rem] overflow-hidden border border-primary/25 shadow-[0_20px_80px_-30px_rgba(255,100,0,0.45)]"
        >
          {/* One premium artwork for every device */}
          <Link to="/fairplay-id" className="block group">
            <img
              src={banner}
              alt="Fairplay — get your cricket ID in just 2 minutes. IPL, casino, football, tennis. 100% secure, 180 minute payouts, 24x7 support."
              width={1600}
              height={1000}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Shine sweep */}
          <motion.div
            initial={{ x: "-120%" }}
            animate={{ x: "220%" }}
            transition={{ duration: 5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] pointer-events-none"
          />
        </motion.div>

        {/* CTAs below the artwork so nothing covers the design */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:justify-center">
          <Link
            to="/fairplay-id"
            className="px-6 py-3.5 sm:px-8 sm:py-4 bg-primary text-primary-foreground font-black italic uppercase tracking-tight rounded-xl flex items-center justify-center gap-2 hover:scale-[1.03] transition-transform shadow-[0_0_30px_rgba(255,100,0,0.4)]"
          >
            Get your ID now <Zap className="w-4 h-4 fill-current" />
          </Link>
          <a
            href={waLink("Hello Fairplay! I want to create my Cricket ID now.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 sm:px-8 sm:py-4 bg-card/80 backdrop-blur border border-white/15 text-foreground font-black italic uppercase tracking-tight rounded-xl text-center hover:bg-accent transition-colors"
          >
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
};
