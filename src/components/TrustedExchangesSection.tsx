import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const partners = [
    { name: "World777", logo: "https://khaiwali.in/assets/exchange-1-C1L5-VKh.png", url: "world777.now" },
    { name: "MiBook9", logo: "https://khaiwali.in/assets/exchange-2-YWaV63VG.png", url: "mibook9.com" },
    { name: "LotusBook", logo: "https://khaiwali.in/assets/exchange-3-BL7xnTAS.png", url: "lotusbook.cricket" },
    { name: "RockyBook", logo: "https://khaiwali.in/assets/exchange-4-DKMdAOch.png", url: "rockybook.com" },
    { name: "TigerExch", logo: "https://khaiwali.in/assets/tigerexch-B-BwGAg9.png", url: "tigerexch.com" },
    { name: "DiamondExch", logo: "https://khaiwali.in/assets/diamondexch-mWek921j.png", url: "diamondexch.com" },
    { name: "SkyExch", logo: "https://khaiwali.in/assets/skyexch-DnP70ctn.png", url: "skyexch.art" },
    { name: "LaserBhai", logo: "https://khaiwali.in/assets/laserbhai-C4iWU4_a.gif", url: "laserbhai.com" },
];

export const TrustedExchangesSection = () => {
    return (
    <section className="py-20 relative overflow-hidden bg-ink-deep">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,oklch(0.705_0.198_142_/_0.07),transparent_60%)]"/>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,oklch(0.735_0.188_52_/_0.06),transparent_55%)]"/>
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-14 max-w-2xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-3 mb-5">
            <span className="text-[11px] font-semibold text-flame tabular-nums">02</span>
            <span className="h-[2px] w-8 brand-rule" />
            <span className="kicker">Partner books</span>
          </motion.div>
          
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Other exchanges,{" "}
            <span className="text-primary">one Fairplay conversation</span>
          </motion.h2>
          
          <p className="text-muted-foreground text-[15px] leading-relaxed">
            Some players keep a Fairplay cricket ID and also run a linked book. Ask the desk before you fund a second wallet — you usually do not need two deposits.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-white/8 bg-white/[0.02]">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-deep to-transparent z-20 pointer-events-none"/>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-deep to-transparent z-20 pointer-events-none"/>

          <div className="flex py-12 relative z-10">
            <motion.div animate={{ x: [0, -1600] }} transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear"
        }} className="flex items-center gap-8 pr-8">
              {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                <div key={`${partner.name}-${index}`} className="flex-shrink-0 w-52 h-36 flex flex-col items-center justify-center bg-ink-deep/70 border border-white/8 rounded-lg p-6 hover:border-primary/40 transition-colors">
                  <div className="relative w-full h-16 flex items-center justify-center mb-3">
                    <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain" />
                  </div>
                  <span className="text-muted-foreground text-[10px] font-semibold uppercase tracking-[0.16em]">
                    {partner.url}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12">
          <a href={waLink("Hi Fairplay — I want to open a verified Fairplay ID.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-flame hover:text-flame-foreground transition-colors">
            <ShieldCheck className="w-4 h-4" />
            Ask for a verified ID
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
    );
};
