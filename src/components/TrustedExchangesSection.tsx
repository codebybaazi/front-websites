import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Star, Sparkles } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const partners = [
    { name: "World777", logo: "https://khaiwali.in/assets/exchange-1-C1L5-VKh.png", url: "world777.now", rating: 4.8, popular: true },
    { name: "MiBook9", logo: "https://khaiwali.in/assets/exchange-2-YWaV63VG.png", url: "mibook9.com", rating: 4.6, popular: false },
    { name: "LotusBook", logo: "https://khaiwali.in/assets/exchange-3-BL7xnTAS.png", url: "lotusbook.cricket", rating: 4.9, popular: true },
    { name: "RockyBook", logo: "https://khaiwali.in/assets/exchange-4-DKMdAOch.png", url: "rockybook.com", rating: 4.5, popular: false },
    { name: "TigerExch", logo: "https://khaiwali.in/assets/tigerexch-B-BwGAg9.png", url: "tigerexch.com", rating: 4.7, popular: true },
    { name: "DiamondExch", logo: "https://khaiwali.in/assets/diamondexch-mWek921j.png", url: "diamondexch.com", rating: 4.6, popular: false },
    { name: "SkyExch", logo: "https://khaiwali.in/assets/skyexch-DnP70ctn.png", url: "skyexch.art", rating: 4.8, popular: true },
    { name: "LaserBhai", logo: "https://khaiwali.in/assets/laserbhai-C4iWU4_a.gif", url: "laserbhai.com", rating: 4.4, popular: false },
];

export const TrustedExchangesSection = () => {
    return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-ink-deep">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,oklch(0.705_0.198_142_/_0.07),transparent_60%)]"/>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,oklch(0.735_0.188_52_/_0.06),transparent_55%)]"/>
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px'}}/>
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16 max-w-2xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-3 mb-5">
            <span className="text-[11px] font-semibold text-flame tabular-nums">02</span>
            <span className="h-[2px] w-8 brand-rule" />
            <span className="kicker">Partner books</span>
          </motion.div>
          
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Other exchanges,{" "}
            <span className="text-primary">one Fairplay conversation</span>
          </motion.h2>
          
          <p className="text-muted-foreground text-sm md:text-[15px] leading-relaxed">
            Some players keep a Fairplay cricket ID and also run a linked book. Ask the desk before you fund a second wallet — you usually do not need two deposits.
          </p>
        </div>

        {/* Partner Cards Grid - Desktop */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-xl p-5 lg:p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_-5px_rgba(234,88,12,0.15)]">
                {/* Popular Badge */}
                {partner.popular && (
                  <div className="absolute -top-2.5 -right-2.5 flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-[10px] font-bold text-white shadow-lg">
                    <Star className="w-2.5 h-2.5" />
                    Popular
                  </div>
                )}
                
                {/* Logo Container */}
                <div className="relative h-16 lg:h-20 flex items-center justify-center mb-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300" 
                  />
                </div>
                
                {/* Info */}
                <div className="text-center">
                  <h3 className="font-semibold text-white mb-1 text-sm lg:text-base">{partner.name}</h3>
                  <p className="text-muted-foreground text-[11px] font-medium mb-3">{partner.url}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < Math.floor(partner.rating) ? 'text-amber-400 fill-amber-400' : 'text-white/20'}`} 
                      />
                    ))}
                    <span className="ml-1 text-[11px] font-semibold text-amber-400">{partner.rating}</span>
                  </div>
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"/>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Marquee Carousel */}
        <div className="md:hidden mb-12">
          <div className="relative overflow-hidden">
            {/* Gradient Edges */}
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-ink-deep to-transparent z-10 pointer-events-none"/>
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-ink-deep to-transparent z-10 pointer-events-none"/>
            
            {/* Scrolling Container */}
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-2" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
              {[...partners, ...partners].map((partner, index) => (
                <div 
                  key={`mobile-${partner.name}-${index}`} 
                  className="flex-shrink-0 w-44 bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-xl p-4"
                >
                  {partner.popular && (
                    <div className="absolute -top-2 -right-2 flex items-center gap-0.5 px-1.5 py-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-[9px] font-bold text-white">
                      <Star className="w-2 h-2" />
                    </div>
                  )}
                  <div className="h-14 flex items-center justify-center mb-3">
                    <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-white text-xs mb-0.5">{partner.name}</h3>
                    <p className="text-muted-foreground text-[9px] font-medium">{partner.url}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center gap-1 mt-3">
            <Sparkles className="w-3 h-3 text-primary animate-pulse"/>
            <span className="text-[10px] text-muted-foreground">Swipe to see more</span>
          </div>
        </div>

        {/* Premium CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-amber-500/10 rounded-2xl blur-xl"/>
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-amber-500/20 flex items-center justify-center border border-primary/20">
                <ShieldCheck className="w-7 h-7 text-primary"/>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Get Your Verified ID</h3>
                <p className="text-muted-foreground text-sm">Fast verification • Secure access • 24/7 Support</p>
              </div>
            </div>
            <a 
              href={waLink("Hi Fairplay — I want to open a verified Fairplay ID.")} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary to-flame text-primary-foreground font-semibold rounded-xl hover:shadow-[0_0_25px_rgba(234,88,12,0.4)] transition-all duration-300"
            >
              Ask for a verified ID
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
    );
};
