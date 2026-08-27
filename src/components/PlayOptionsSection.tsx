import { motion } from "framer-motion";
import { Trophy, Swords, Zap, PlayCircle, Star, Target, ShieldCheck, TrendingUp } from "lucide-react";

const playOptions = [
  {
    title: "Cricket Exchange",
    desc: "Experience India's most liquid cricket exchange with unmatched market depth.",
    icon: Trophy,
    stat: "High Liquidity",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Live Casino",
    desc: "HD streaming with professional dealers. Teen Patti, Andar Bahar, and more.",
    icon: Swords,
    stat: "24/7 Live Dealers",
    image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Tennis & Football",
    desc: "Global soccer leagues and Grand Slam tennis with premium odds and fancy markets.",
    icon: Zap,
    stat: "1000+ Daily Events",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Virtual Sports",
    desc: "Non-stop virtual action. Instant results on simulated matches and races.",
    icon: PlayCircle,
    stat: "Instant Results",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop"
  }
];

export function PlayOptionsSection() {
  return (
    <section className="py-32 px-4 container max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Polish */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="relative z-10">
        <div className="max-w-3xl mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-12 bg-primary" />
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Endless Action</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.85] mb-8"
          >
            WHAT YOU <br />
            <span className="text-primary not-italic">CAN PLAY</span>
          </motion.h2>
          <p className="text-muted-foreground text-xl border-l-2 border-primary/40 pl-8 italic">
            Elite arenas, one verified ID. From high-stakes cricket exchanges to premium live dealer floors — dive in where the action is hottest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {playOptions.map((opt, idx) => (
            <motion.div
              key={opt.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative h-[450px] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-700 bg-card shadow-2xl">
                {/* Background Image with Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${opt.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 mb-6">
                      <opt.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors">
                      {opt.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed mb-6 line-clamp-3 group-hover:text-white/80 transition-colors">
                      {opt.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                      {opt.stat}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Target className="w-4 h-4 text-white/40 group-hover:text-primary" />
                    </div>
                  </div>
                </div>

                {/* Hover Border Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none border-2 border-primary/20 rounded-[2.5rem]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Feature Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-wrap justify-center gap-12 py-10 border-y border-white/5 bg-white/[0.01] rounded-[2rem]"
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Verified Exchange</span>
          </div>
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Elite Odds</span>
          </div>
          <div className="flex items-center gap-3">
            <Star className="w-5 h-5 text-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">VIP Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
