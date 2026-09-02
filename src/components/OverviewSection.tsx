import { Zap, ShieldCheck, Smartphone, TrendingUp, Users, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { waLink } from "@/lib/whatsapp";

export const OverviewSection = () => {
  const stats = [
    { label: "Years live", val: "7+", icon: Clock },
    { label: "Active IDs", val: "250K+", icon: Users },
    { label: "Payout window", val: "180 min", icon: Zap },
    { label: "Player rating", val: "4.9/5", icon: Star },
  ];

  const features = [
    {
      title: "One cricket ID, one wallet",
      desc: "Fairplay is the login you use for IPL, internationals, football, tennis and live tables. You do not open a second account to switch sports.",
      icon: ShieldCheck,
    },
    {
      title: "Markets that actually fill",
      desc: "Match winner, toss, fancy sessions and in-play sit on the same slip. Stake what you can see in the book — not a poster number.",
      icon: TrendingUp,
    },
    {
      title: "Phone or browser, same session",
      desc: "The Fairplay app and the website share the ID. Place a stake, keep the slip, wait for the official result, then withdraw.",
      icon: Smartphone,
    }
  ];

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:py-24">
      <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-primary/6 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-flame/6 rounded-full blur-[100px] -z-10" />

      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] font-semibold text-flame tabular-nums">01</span>
              <span className="h-[2px] w-8 brand-rule" />
              <span className="kicker">How Fairplay works</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-8">
              A cricket ID built around{" "}
              <span className="text-gradient-brand">the match, not the slogan</span>
            </h2>

            <div className="space-y-8 mb-12">
              {features.map((f, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-md bg-card border-l-2 border-l-primary border border-white/8 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight mb-1.5 group-hover:text-primary transition-colors">{f.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-[15px]">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link 
                to="/fairplay-id" 
                className="px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-flame hover:text-flame-foreground transition-colors flex items-center gap-2"
              >
                Open a Fairplay ID <Zap className="w-4 h-4" />
              </Link>
              <a 
                href={waLink("Hi Fairplay — I need help with my ID.")} 
                className="px-6 py-3.5 bg-card border border-white/12 text-foreground font-semibold rounded-md hover:border-primary/40 transition-colors flex items-center gap-2"
              >
                Message the desk
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="glass-card rounded-xl p-10 relative overflow-hidden">
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {stats.map((s, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="p-6 rounded-lg bg-ink-deep/60 border border-white/8 hover:border-primary/30 transition-colors text-center"
                  >
                    <s.icon className="w-6 h-6 mx-auto mb-3 text-primary" />
                    <div className="text-3xl md:text-4xl font-bold tracking-tight tabular-nums mb-1">{s.val}</div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{s.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-lg bg-primary/8 border border-primary/20">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-foreground/80">Wallet & KYC</span>
                  <span className="px-2 py-0.5 rounded-sm bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">Active</span>
                </div>
                <div className="h-1.5 w-full bg-white/8 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "98%" }}
                    transition={{ duration: 1.6, ease: "easeOut" }}
                    className="h-full brand-rule"
                  />
                </div>
                <p className="mt-3 text-[12px] text-muted-foreground">
                  Running since 2017. IDs are opened on WhatsApp, funded with UPI, and paid out after settlement.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
