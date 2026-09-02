import { Zap, ShieldCheck, Smartphone, TrendingUp, Users, Clock, Star, ChevronRight, CheckCircle2, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { waLink } from "@/lib/whatsapp";

export const OverviewSection = () => {
  const steps = [
    {
      num: "01",
      title: "Get your ID on WhatsApp",
      desc: "Message the desk. Short KYC, OTP login. The same number works on app and browser.",
      icon: Smartphone,
      accent: "primary",
    },
    {
      num: "02",
      title: "Fund via UPI",
      desc: "Add money to your wallet with any UPI app. Keep the UTR — the desk matches it.",
      icon: TrendingUp,
      accent: "flame",
    },
    {
      num: "03",
      title: "Bet, wait, withdraw",
      desc: "Place your stakes on IPL, football, tennis or tables. Payout hits your wallet after the result.",
      icon: ShieldCheck,
      accent: "emerald",
    },
  ];

  const badges = [
    { label: "Since 2017", icon: Clock },
    { label: "250K+ IDs", icon: Users },
    { label: "180 min payout", icon: Zap },
    { label: "4.9/5 rated", icon: Star },
  ];

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:py-28">
      {/* Ambient background elements */}
      <div className="absolute top-12 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] -translate-x-1/2 -z-10" />
      <div className="absolute bottom-12 right-0 w-[500px] h-[500px] bg-flame/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,transparent_60%,rgba(255,255,255,0.01)_100%)] -z-10" />

      <div className="container max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1px] w-10 brand-rule" />
            <span className="kicker">How Fairplay works</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]"
          >
            One ID. One wallet.{" "}
            <span className="text-gradient-brand">Any market.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-xl"
          >
            Cricket, football, tennis and live tables — all on the same Fairplay ID. No second login, no separate wallet.
          </motion.p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6 lg:gap-8">
          {/* Left: Large hero feature card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            {/* Glow effect on hover */}
            <div className="absolute -inset-px bg-gradient-to-br from-primary/30 via-transparent to-flame/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
            
            <div className="relative h-full rounded-2xl border border-white/10 bg-card/60 backdrop-blur-sm overflow-hidden">
              {/* Top accent line */}
              <div className="h-[2px] w-full bg-gradient-to-r from-primary via-flame to-primary/50" />
              
              {/* Card content */}
              <div className="p-8 sm:p-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  Live now — IPL 2026
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>

                {/* Main text */}
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                  Markets that actually fill
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[15px] mb-8 max-w-md">
                  Match winner, toss, fancy sessions and in-play odds sit on the same slip. Stake what you see in the book — not a poster number. Same wallet, same ID, same result.
                </p>

                {/* Features list */}
                <div className="space-y-3 mb-10">
                  {[
                    "Cricket: IPL, Tests, ODIs, T20s",
                    "Football: FIFA, Champions League",
                    "Tennis: Grand Slams & ATP Tour",
                    "Casino: Live tables & slots",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-white/80">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/fairplay-id"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-flame hover:text-flame-foreground transition-all duration-300 group/btn"
                  >
                    Open an ID
                    <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                  <a
                    href={waLink("Hi Fairplay — I need help with my ID.")}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-card border border-white/12 text-foreground font-semibold rounded-lg hover:border-primary/40 hover:text-primary transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Message the desk
                  </a>
                </div>
              </div>

              {/* Bottom stats bar */}
              <div className="border-t border-white/8 bg-ink-deep/40 px-8 py-5">
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { val: "7+", label: "Years live" },
                    { val: "250K+", label: "Active IDs" },
                    { val: "180 min", label: "Payout window" },
                  ].map((s, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xl sm:text-2xl font-bold tabular-nums text-primary">{s.val}</div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: 3-step cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative"
              >
                {/* Glow on hover */}
                <div className={`absolute -inset-px bg-gradient-to-r from-${step.accent}/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`} />
                
                <div className={`relative rounded-xl border border-white/10 bg-card/50 backdrop-blur-sm p-6 hover:border-${step.accent}/30 transition-all duration-300`}>
                  {/* Connecting line between cards */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-8 top-full h-4 w-px bg-gradient-to-b from-white/20 to-transparent" />
                  )}

                  <div className="flex items-start gap-5">
                    {/* Step number circle */}
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-${step.accent}/10 border border-${step.accent}/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                      <step.icon className={`w-6 h-6 text-${step.accent}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Step {step.num}</span>
                        <div className={`h-px flex-1 max-w-[40px] bg-${step.accent}/30`} />
                      </div>
                      <h4 className={`text-lg font-semibold tracking-tight mb-1.5 group-hover:text-${step.accent} transition-colors`}>
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-${step.accent}/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                      <ChevronRight className={`w-3.5 h-3.5 text-${step.accent}`} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Bottom badge strip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6"
            >
              <div className="flex flex-wrap gap-3">
                {badges.map((badge, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/60 border border-white/8 text-xs font-medium text-muted-foreground"
                  >
                    <badge.icon className="w-3.5 h-3.5 text-primary" />
                    {badge.label}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
