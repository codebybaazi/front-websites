import { motion } from "framer-motion";
import { Trophy, Swords, Zap, PlayCircle, Star, Target, ShieldCheck, TrendingUp } from "lucide-react";
import cricketExchangeImg from "@/assets/play/cricket-exchange.jpg";
import liveCasinoImg from "@/assets/play/live-casino.jpg";
import tennisFootballImg from "@/assets/play/tennis-football.jpg";
import virtualSportsImg from "@/assets/play/virtual-sports.jpg";

const playOptions = [
  {
    title: "Cricket exchange",
    desc: "IPL, internationals, fancy sessions and in-play on a book with enough depth to get a real stake matched.",
    icon: Trophy,
    stat: "Match-day liquidity",
    image: cricketExchangeImg
  },
  {
    title: "Live tables",
    desc: "HD dealers for Teen Patti, Andar Bahar, roulette and blackjack — billed to the same Fairplay wallet.",
    icon: Swords,
    stat: "Dealers around the clock",
    image: liveCasinoImg
  },
  {
    title: "Football & tennis",
    desc: "Club leagues, cups and Grand Slams. Moneyline, totals and in-play — no second registration.",
    icon: Zap,
    stat: "Hundreds of daily events",
    image: tennisFootballImg
  },
  {
    title: "Virtual sports",
    desc: "Short simulated fixtures when the live calendar is quiet. Results post as soon as the event ends.",
    icon: PlayCircle,
    stat: "Settles in minutes",
    image: virtualSportsImg
  }
];

export function PlayOptionsSection() {
  return (
    <section className="py-28 px-4 container max-w-7xl mx-auto relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="relative z-10">
        <div className="max-w-2xl mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="text-[11px] font-semibold text-flame tabular-nums">04</span>
            <span className="h-[2px] w-8 brand-rule" />
            <span className="kicker">What sits on the ID</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6"
          >
            Cricket first.{" "}
            <span className="text-primary">Everything else on the same login.</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg leading-relaxed border-l-2 border-flame/50 pl-5">
            You do not hop between apps. Exchange books, live dealers and virtuals share one Fairplay ID and one wallet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {playOptions.map((opt, idx) => (
            <motion.div
              key={opt.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group relative"
            >
              <div className="relative h-[300px] overflow-hidden rounded-xl border border-white/8 bg-card transition-colors hover:border-primary/40 sm:h-[360px] lg:h-[400px]">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${opt.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/75 to-transparent" />
                
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <div className="w-11 h-11 rounded-md bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-5">
                    <opt.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-primary transition-colors">
                    {opt.title}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed mb-5">
                    {opt.desc}
                  </p>

                  <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                      {opt.stat}
                    </span>
                    <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Target className="w-4 h-4 text-white/40 group-hover:text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-10 py-8 border-y border-white/8"
        >
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Verified exchange</span>
          </div>
          <div className="flex items-center gap-2.5">
            <TrendingUp className="w-4 h-4 text-flame" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Live odds</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">WhatsApp desk</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
