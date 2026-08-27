import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Zap, ShieldCheck, Clock, Headphones } from "lucide-react";
import { waLink } from "@/lib/whatsapp";
import banner from "@/assets/hero-banner.jpg";

const badges = [
  { icon: ShieldCheck, label: "100% Secure" },
  { icon: Clock, label: "180 Min Payouts" },
  { icon: Headphones, label: "24x7 Support" },
];

export const HeroBanner = () => {
  return (
    <section className="relative px-3 sm:px-4 pt-2 pb-6" aria-label="Fairplay cricket ID banner">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-2xl md:rounded-[2rem] overflow-hidden border border-primary/25 shadow-[0_20px_80px_-30px_rgba(255,100,0,0.45)]"
        >
          {/* Single responsive artwork for every device */}
          <img
            src={banner}
            alt="Fairplay online cricket ID — batsman under stadium floodlights"
            width={1920}
            height={900}
            className="absolute inset-0 w-full h-full object-cover object-[72%_center] sm:object-[80%_center] md:object-center"
          />

          {/* Readability scrims */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/10 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/40" />

          {/* Content */}
          <div className="relative z-10 px-5 py-10 sm:px-8 sm:py-14 md:px-14 md:py-20 lg:py-24 max-w-full md:max-w-[62%]">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/30 mb-4 sm:mb-5">
              <Zap className="w-3.5 h-3.5 text-primary fill-current" />
              <span className="text-primary text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em]">
                Fairplay · Trusted since 2017
              </span>
            </div>

            <h1 className="font-black italic uppercase tracking-tighter leading-[0.9] text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl">
              Your online <br />
              <span className="text-gradient-orange not-italic">cricket ID</span> in 2 minutes
            </h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-muted-foreground font-medium max-w-xl leading-relaxed">
              One verified Fairplay ID for IPL, international cricket, football, tennis and live
              casino. Instant WhatsApp activation, 180-minute withdrawals, 24x7 Indian support.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
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

            <div className="mt-7 sm:mt-9 grid grid-cols-3 gap-2 sm:gap-3 max-w-lg">
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="flex min-w-0 items-center justify-center gap-1.5 px-2 py-2.5 rounded-xl bg-card/60 border border-white/10"
                >
                  <b.icon className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="truncate text-[8px] sm:text-[10px] font-black uppercase tracking-wider text-muted-foreground">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Shine sweep */}
          <motion.div
            initial={{ x: "-120%" }}
            animate={{ x: "220%" }}
            transition={{ duration: 5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-transparent via-white/8 to-transparent skew-x-[-20deg] pointer-events-none"
          />
        </motion.div>
      </div>
    </section>
  );
};
