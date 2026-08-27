import { motion } from "framer-motion";
import { ShieldCheck, Zap } from "lucide-react";
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
    return (<section className="py-20 relative overflow-hidden bg-[#0A0A0B]">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,100,0,0.05),transparent_70%)]"/>
        <motion.div animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1]
        }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full"/>
        <motion.div animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1]
        }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full"/>
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <ShieldCheck className="w-4 h-4 text-primary"/>
            <span className="text-primary text-[10px] font-bold uppercase tracking-widest">Verified Exchanges</span>
          </motion.div>
          
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-6">
            LEADING & <span className="text-primary not-italic">TRUSTED EXCHANGE</span>
          </motion.h2>
          
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="max-w-2xl mx-auto text-white/60 text-sm md:text-base font-medium leading-relaxed">
            Get your online cricket ID on India's most trusted betting exchange platforms — all under one verified FairPlay account.
          </motion.p>
        </div>

        {/* High-End Animated Marquee */}
        <div className="relative group overflow-hidden rounded-[40px]">
          {/* Glass Overlay for the entire marquee track */}
          <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl border border-white/5 z-0"/>
          
          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0A0A0B] to-transparent z-20 pointer-events-none"/>
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0A0A0B] to-transparent z-20 pointer-events-none"/>

          <div className="flex py-16 relative z-10">
            <motion.div animate={{ x: [0, -1600] }} transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
        }} className="flex items-center gap-12 pr-12">
              {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (<motion.div key={`${partner.name}-${index}`} whileHover={{ y: -10, scale: 1.05 }} className="flex-shrink-0 w-64 h-48 group/card relative flex flex-col items-center justify-center bg-black/40 border border-white/10 rounded-[32px] p-8 transition-all duration-500 hover:border-primary/50 hover:bg-black/60 shadow-2xl overflow-hidden">
                  {/* Internal Glow */}
                  <div className="absolute inset-0 bg-primary/0 group-hover/card:bg-primary/5 transition-colors duration-500"/>
                  
                  {/* Logo Container */}
                  <div className="relative w-full h-24 flex items-center justify-center mb-4">
                    <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain filter brightness-110 contrast-125 transition-transform duration-700 group-hover/card:scale-110"/>
                  </div>
                  
                  {/* Partner Name/URL */}
                  <div className="relative z-10 text-center">
                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] group-hover/card:text-primary/70 transition-colors">
                      {partner.url}
                    </span>
                  </div>

                  {/* Animated Light Sweep */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div initial={{ left: "-100%" }} whileHover={{ left: "100%" }} transition={{ duration: 0.8, ease: "easeInOut" }} className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[30deg]"/>
                  </div>
                </motion.div>))}
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20 text-center">
          <motion.a href={waLink("Hello Fairplay! I want to get my Verified Fairplay ID now.")} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(255,100,0,0.5)" }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 sm:gap-4 px-6 py-4 sm:px-12 sm:py-6 bg-primary text-black font-black rounded-full transition-all italic uppercase tracking-tighter text-xl relative overflow-hidden group">
            <span className="relative z-10">Get Your Verified ID</span>
            <Zap className="w-6 h-6 fill-current relative z-10 group-hover:scale-125 transition-transform"/>
            
            {/* Inner shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"/>
          </motion.a>
        </motion.div>
      </div>
    </section>);
};
