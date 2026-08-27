import { motion } from "framer-motion";
import { UserPlus, ShieldCheck, Wallet, Gift, LayoutGrid, CheckCircle2, ArrowRight } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const steps = [
  {
    title: "Create Your Elite Account",
    desc: "Connect with our verified concierge on WhatsApp. Share basic details to initiate your premium onboarding.",
    icon: UserPlus,
    time: "≈ 2 MIN"
  },
  {
    title: "Instant Verification",
    desc: "Our team performs a high-speed identity check. Once approved, your Fairplay ID is activated immediately.",
    icon: ShieldCheck,
    time: "≈ 2 MIN"
  },
  {
    title: "Fund Your Secure Wallet",
    desc: "Top up via UPI, Net Banking, or e-wallets. Enjoy encrypted, lightning-fast transactions 24/7.",
    icon: Wallet,
    time: "≈ 2 MIN"
  },
  {
    title: "Claim Elite Welcome Bonus",
    desc: "Unlock a premium first-deposit match. Use your bonus credits across all live sports and casino markets.",
    icon: Gift,
    time: "≈ 1 MIN"
  },
  {
    title: "Choose Your Arena",
    desc: "Navigate through Cricket Exchanges, Live Casino floors, or Global Sports markets. Pick your winning play.",
    icon: LayoutGrid,
    time: "≈ 1 MIN"
  },
  {
    title: "Place Bet & Win",
    desc: "Execute single-tap bets with premium odds. Withdraw your winnings instantly to your bank account.",
    icon: CheckCircle2,
    time: "INSTANT"
  }
];

export function BettingStepsSection() {
  return (
    <section className="py-32 px-4 container max-w-7xl mx-auto relative overflow-hidden bg-primary/[0.01]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-8 bg-primary" />
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Onboarding Guide</span>
            <div className="h-[2px] w-8 bg-primary" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.85] mb-8"
          >
            SIX STEPS TO YOUR <br />
            <span className="text-primary not-italic">FIRST BET</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-xl italic"
          >
            From WhatsApp onboarding to your first in-play punt — a guided, premium path to elite gaming.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="h-full glass-card p-10 rounded-[2.5rem] border border-white/5 hover:border-primary/40 transition-all duration-500 relative overflow-hidden shadow-2xl">
                {/* Step Number Background */}
                <div className="absolute -right-4 -top-4 text-9xl font-black text-white/[0.02] italic pointer-events-none group-hover:text-primary/[0.05] transition-colors">
                  0{idx + 1}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                      <step.icon className="w-8 h-8" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[8px] font-black text-primary tracking-widest uppercase">
                      {step.time}
                    </div>
                  </div>

                  <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-primary group-hover:w-full transition-all duration-700 ease-in-out" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a 
            href={waLink("Hello Fairplay! I have read the guide and want to start my first bet.")} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-6 bg-primary text-primary-foreground font-black rounded-2xl text-lg uppercase italic tracking-tighter shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all group"
          >
            START YOUR JOURNEY NOW
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
