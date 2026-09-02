import { motion } from "framer-motion";
import { UserPlus, ShieldCheck, Wallet, Gift, LayoutGrid, CheckCircle2, ArrowRight } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const steps = [
  {
    title: "Message WhatsApp",
    desc: "Send a short note from the number you will log in with. The desk opens the ID from that chat — not from a public form.",
    icon: UserPlus,
    time: "≈ 2 min"
  },
  {
    title: "Confirm the ID",
    desc: "A quick check, then the Fairplay ID is live. You sign in with that mobile number and an OTP.",
    icon: ShieldCheck,
    time: "≈ 2 min"
  },
  {
    title: "Fund the wallet",
    desc: "UPI, net banking or an e-wallet. Keep the UTR. Do not send a second payment if the first is still pending.",
    icon: Wallet,
    time: "≈ 2 min"
  },
  {
    title: "Take the welcome offer",
    desc: "If a first-deposit match is running, it attaches after a qualifying top-up. Read wagering before you opt in.",
    icon: Gift,
    time: "≈ 1 min"
  },
  {
    title: "Pick a book",
    desc: "Cricket exchange, live tables, football or tennis. Same ID. Same wallet. Open the market you actually want.",
    icon: LayoutGrid,
    time: "≈ 1 min"
  },
  {
    title: "Stake, settle, withdraw",
    desc: "Place the bet, wait for the official result, then request a payout. Settled winnings usually reach the wallet within 180 minutes.",
    icon: CheckCircle2,
    time: "After result"
  }
];

export function BettingStepsSection() {
  return (
    <section className="py-28 px-4 container max-w-7xl mx-auto relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-flame/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        <div className="max-w-2xl mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="text-[11px] font-semibold text-flame tabular-nums">04</span>
            <span className="h-[2px] w-8 brand-rule" />
            <span className="kicker">From chat to first stake</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6"
          >
            Six moves before you{" "}
            <span className="text-primary">place a bet</span>
          </motion.h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed border-l-2 border-primary/50 pl-5">
            WhatsApp opens the ID. UPI funds it. The slip is yours after that — cricket, football, tennis or a live table.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="group relative"
            >
              <div className="h-full glass-card p-8 rounded-xl border-l-2 border-l-transparent hover:border-l-primary transition-colors relative overflow-hidden">
                <div className="absolute right-4 top-3 text-6xl font-bold text-white/[0.04] tabular-nums pointer-events-none">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-md bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div className="px-2.5 py-1 rounded-sm bg-primary/10 border border-primary/20 text-[10px] font-semibold text-primary tracking-wider uppercase">
                      {step.time}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <a 
            href={waLink("Hi Fairplay — I have read the steps and want to open an ID.")} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-flame hover:text-flame-foreground transition-colors"
          >
            Open an ID on WhatsApp
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
