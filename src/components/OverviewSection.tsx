import { Zap, ShieldCheck, Smartphone, TrendingUp, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { waLink } from "@/lib/whatsapp";

export const OverviewSection = () => {
  const stats = [
    { label: "Running since", val: "2017", icon: Clock },
    { label: "Withdrawal window", val: "180 min", icon: Zap },
    { label: "Login", val: "OTP", icon: ShieldCheck },
    { label: "ID desk", val: "WhatsApp", icon: MessageCircle },
  ];

  const features = [
    {
      title: "Cricket ID, not a slogan",
      desc: "Fairplay is a cricket ID and sports exchange used in India since 2017. You log in once, then bet IPL, internationals, football, tennis or casino from the same wallet.",
      icon: ShieldCheck,
    },
    {
      title: "Cricket, football and tennis",
      desc: "One Fairplay ID covers IPL and international cricket, FIFA and club football, ATP/WTA tennis, plus live casino — without a second registration.",
      icon: TrendingUp,
    },
    {
      title: "Phone-first, same ID",
      desc: "The Fairplay app and website use the same login. Place a stake, screenshot the slip, and wait for settlement before you withdraw.",
      icon: Smartphone,
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-primary" />
              <span className="text-primary text-xs font-black uppercase tracking-[0.4em]">Fairplay overview</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-8">
              India's trusted <br />
              <span className="text-gradient-orange not-italic">cricket ID exchange</span>
            </h2>

            <div className="space-y-8 mb-12">
              {features.map((f, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-card border border-white/5 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500">
                    <f.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black italic uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">{f.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6">
              <Link 
              to="/fairplay-id" 
                className="px-8 py-4 bg-primary text-primary-foreground font-black rounded-xl hover:scale-105 transition-all flex items-center gap-2 italic uppercase shadow-[0_0_20px_rgba(255,100,0,0.3)]"
              >
                GET YOUR ID NOW <Zap className="w-5 h-5 fill-current" />
              </Link>
              <a 
                href={waLink("Hello Fairplay! I need VIP WhatsApp Support for my ID.")} 
                className="px-8 py-4 bg-card border border-white/10 text-foreground font-black rounded-xl hover:bg-accent transition-all italic uppercase flex items-center gap-2"
              >
                WHATSAPP SUPPORT
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual/Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card rounded-[3rem] p-12 border border-white/10 relative overflow-hidden shine-effect">
              <div className="grid grid-cols-2 gap-8 relative z-10">
                {stats.map((s, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 rounded-[2rem] bg-background/40 border border-white/5 hover:border-primary/30 transition-all text-center group"
                  >
                    <s.icon className="w-8 h-8 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                    <div className="text-3xl md:text-4xl font-black italic tracking-tighter mb-1">{s.val}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{s.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative graphic element */}
              <div className="mt-12 p-8 rounded-[2rem] bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-widest italic">Verification Status</span>
                  <span className="px-2 py-0.5 rounded-md bg-green-500/20 text-green-400 text-[8px] font-black uppercase">Secured</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "98%" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="h-full bg-primary shadow-[0_0_10px_rgba(255,100,0,0.5)]"
                  />
                </div>
                <p className="mt-4 text-[10px] text-white/40 font-medium uppercase tracking-tighter italic">
                  Cricket ID in India since 2017. We do not publish user counts.
                </p>
              </div>
            </div>

            {/* Floating accent icons */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 rounded-3xl blur-2xl -z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
