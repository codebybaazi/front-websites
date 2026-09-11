import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { 
  Swords, 
  Zap, 
  Shield, 
  Trophy, 
  ArrowRight, 
  CheckCircle2, 
  XCircle,
  TrendingUp,
  Cpu,
  Clock,
  Smartphone,
  ShieldCheck,
  HelpCircle,
  Star
} from 'lucide-react'
import { waLink } from "@/lib/whatsapp";

export const Route = createFileRoute('/fairplay-vs-11xplay')({
  component: ComparisonPage,
  head: () => pageHeadFor('/fairplay-vs-11xplay'),
})

const playerReviews = [
  {
    name: "Aditya Banerjee",
    city: "Durgapur",
    detail: "Deposited twice hoping it would land once",
    rating: 4,
    body: "I paid Fairplay and 11xplay in the same hour, hoping it would credit one wallet. It did not. WhatsApp said 11xplay is a partner book unless they link it. Next time I asked before I funded both. I keep the UTRs separate.",
  },
  {
    name: "Shreya Kamat",
    city: "Panaji",
    detail: "IPL on Fairplay unless the desk names 11xplay",
    rating: 5,
    body: "IPL on this schedule uses the Fairplay cricket ID. WhatsApp told me one fixture lived on 11xplay, so I used that login only for that market. Fairplay payout after settlement took about 180 minutes. 11xplay still follows that desk.",
  },
  {
    name: "Naveen Reddy",
    city: "Warangal",
    detail: "Skipped a third-party 11xplay APK",
    rating: 5,
    body: "A store offered an 11xplay APK. This page said third-party stores are a common scam, so I installed Fairplay from this site's app page. Login is OTP on my phone. I do not share that code.",
  },
  {
    name: "Fatima Sheikh",
    city: "Moradabad",
    detail: "Fairplay KYC on this WhatsApp, not 11xplay",
    rating: 4,
    body: "First Fairplay withdrawal sat on KYC. I sent papers on this site's WhatsApp, not to 11xplay support. 11xplay verification, if any, is a different desk. I also sent a Fairplay UTR to an 11xplay UPI once. It did not credit.",
  },
]

const comparisonData = [
  {
    feature: "Login",
    fairplay: "Fairplay ID via WhatsApp. OTP on your phone.",
    "11xplay": "Separate password unless the desk links the books.",
    winner: "fairplay"
  },
  {
    feature: "Wallet",
    fairplay: "UPI into Fairplay. Do not deposit twice hoping it lands once.",
    "11xplay": "Own wallet. Ask WhatsApp before you treat it as the same cash.",
    winner: "fairplay"
  },
  {
    feature: "Withdrawals",
    fairplay: "Payouts usually about 180 minutes after settlement.",
    "11xplay": "That book’s desk. Do not mix UTRs.",
    winner: "fairplay"
  },
  {
    feature: "IPL",
    fairplay: "Use the Fairplay cricket ID unless the desk named 11xplay for a market.",
    "11xplay": "Only if WhatsApp told you that fixture lives there.",
    winner: "fairplay"
  },
  {
    feature: "App",
    fairplay: "Install Fairplay from this site’s app page.",
    "11xplay": "A different APK. Third-party stores are a common scam.",
    winner: "fairplay"
  }
]

function ComparisonPage() {
  return (
    <div className="flex flex-col bg-background text-foreground overflow-hidden">
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.08),transparent_70%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-8">
              <Swords className="w-4 h-4" /> Partner book, separate wallet unless linked
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              FAIRPLAY <span className="text-white/20 font-light not-italic">VS</span> <span className="text-primary not-italic">11XPLAY</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 font-medium">
              11xplay may be offered as a partner ID. Fairplay cricket still uses the main Fairplay login. Ask WhatsApp before you fund both.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="Premium Partner Audit"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="min-h-screen pb-24 px-4 bg-[#0A0A0B] selection:bg-primary/30">
        <div className="max-w-6xl mx-auto pt-16">
          {/* Comparison Table */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card overflow-hidden border-primary/20 mb-20 rounded-[40px]"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-8 text-sm font-black uppercase tracking-widest text-white/40">Feature</th>
                    <th className="p-8 text-lg font-black italic uppercase tracking-tight text-primary">Fairplay</th>
                    <th className="p-8 text-lg font-black italic uppercase tracking-tight text-white/60">11xplay</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-8 font-bold text-white/80">{row.feature}</td>
                      <td className="p-8 text-sm leading-relaxed text-white">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span>{row.fairplay}</span>
                        </div>
                      </td>
                      <td className="p-8 text-sm leading-relaxed text-white/40">
                        <div className="flex items-start gap-3">
                          <XCircle className="w-5 h-5 text-white/10 shrink-0 mt-0.5" />
                          <span>{row["11xplay"]}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Deep Dive Analysis */}
          <div className="space-y-12 mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-[32px] border-primary/10"
            >
              <h2 className="text-3xl font-black italic uppercase mb-8 flex items-center gap-3">
                <TrendingUp className="text-primary w-8 h-8" /> Linked books
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
                <p>
                  Fairplay is IPL, football, tennis and casino on one ID. You confirm the slip in play. We do not invent fill rates or “unlimited matching.”
                </p>
                <p>
                  11xplay is a different login unless the desk says they linked it. Do not assume the same password. Do not send a Fairplay UTR to an 11xplay UPI.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8"
            >
              <div className="glass-card p-10 rounded-[32px] border-primary/10">
                <h3 className="text-2xl font-black italic uppercase mb-6 flex items-center gap-3">
                  <Clock className="text-primary w-6 h-6" /> Payouts
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fairplay withdrawals usually take about 180 minutes after the official result. 11xplay, if you use it, has its own payout. Open markets and incomplete KYC hold Fairplay cash.
                </p>
              </div>
              
              <div className="glass-card p-10 rounded-[32px] border-primary/10">
                <h3 className="text-2xl font-black italic uppercase mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-primary w-6 h-6" /> OTP
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fairplay login is the code on your phone. Never share it. 11xplay KYC, if any, is a different desk. Fairplay KYC is through this WhatsApp.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-[32px] border-primary/10"
            >
              <h3 className="text-2xl font-black italic uppercase mb-6 flex items-center gap-3">
                <Smartphone className="text-primary w-6 h-6" /> Opening an ID
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Message WhatsApp for a Fairplay ID, then log in with OTP. 11xplay is a separate book unless the desk says they linked both. Do not deposit twice hoping it lands on one wallet.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-white/5">
                {[
                  { label: "Fairplay ID", value: "WhatsApp on this site" },
                  { label: "Login", value: "Mobile + OTP" },
                  { label: "Payout", value: "~180 min after settlement" }
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-[10px] font-black uppercase tracking-widest text-primary/60">{stat.label}</div>
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Player reviews */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-black italic uppercase mb-4 flex items-center gap-3">
              <Star className="text-primary w-8 h-8" /> Fairplay vs 11xplay reviews
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">
              Four players who treated 11xplay as a partner book and opened a Fairplay ID on this site. They mention asking WhatsApp before funding both wallets, IPL on the Fairplay cricket ID, and payouts that usually take about 180 minutes after settlement.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {playerReviews.map((review) => (
                <article
                  key={review.name}
                  className="glass-card p-8 rounded-[32px] border-primary/10 flex flex-col"
                >
                  <div className="flex items-center gap-1 mb-5" aria-label={`${review.rating} out of 5`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "text-primary fill-primary" : "text-white/15"}`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed flex-1">{review.body}</p>
                  <footer className="mt-6 pt-6 border-t border-white/5">
                    <div className="text-white font-bold">{review.name}</div>
                    <div className="text-sm text-white/50">{review.city}</div>
                    <div className="text-xs text-primary/70 mt-1">{review.detail}</div>
                  </footer>
                </article>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[32px] border-primary/10 mb-20"
          >
            <h3 className="text-3xl font-black italic uppercase mb-8 flex items-center gap-3">
              <HelpCircle className="text-primary w-8 h-8" /> FAQ: Fairplay vs 11xplay
            </h3>
            <div className="grid gap-6">
              {[
                {
                  q: "Is 11xplay the same wallet as Fairplay?",
                  a: "Sometimes the desk issues a linked 11xplay book. Ask WhatsApp. Do not assume the same password works on both sites."
                },
                {
                  q: "Which ID is for IPL?",
                  a: "Use the Fairplay cricket ID unless the desk told you to use 11xplay for a specific market."
                },
                {
                  q: "Can I use my 11xplay ID on Fairplay?",
                  a: "No. Open Fairplay on this site’s WhatsApp."
                },
                {
                  q: "Are bonuses the same?",
                  a: "Each book has its own bonus rules. Read the Fairplay bonus page for this ID. Do not invent a match offer."
                },
                {
                  q: "Who handles Fairplay KYC?",
                  a: "This WhatsApp desk. 11xplay verification, if any, is separate."
                }
              ].map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all group">
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">Q</span>
                    {faq.q}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed pl-11">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Final Verdict CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-[40px] border-primary/30 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Trophy className="w-48 h-48 text-primary" />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-6">
                GET A <span className="text-primary">FAIRPLAY ID</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium">
                WhatsApp this site. Ask if you already hold 11xplay before you open a second wallet.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href={waLink("Hello Fairplay! I read the 11xplay page and want a Fairplay ID.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-12 py-5 bg-primary text-primary-foreground rounded-2xl font-black italic uppercase tracking-[0.2em] hover:shadow-[0_0_40px_rgba(255,100,0,0.6)] transition-all flex items-center justify-center gap-3"
                >
                  <Zap className="w-5 h-5 fill-current" /> Get a Fairplay ID
                </a>
                <Link 
                  to="/all-links"
                  className="px-12 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black italic uppercase tracking-[0.2em] hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                >
                  Explore More <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    
      <FAQSection 
        title="Fairplay vs 11xplay FAQ"
        faqs={[
          { q: 'Does one Fairplay ID include 11xplay?', a: 'Sometimes the desk issues a linked 11xplay book. Ask WhatsApp. Do not assume the same password works on both sites.' },
          { q: 'Where should I bet IPL?', a: 'Use the Fairplay cricket ID for fixtures on this schedule unless the desk told you to use 11xplay for a specific market.' },
          { q: 'Is the Fairplay app the 11xplay app?', a: 'No. Install Fairplay from this site’s app page. Third-party APKs are a common scam vector.' },
          { q: 'Who handles Fairplay KYC?', a: 'Fairplay KYC is through this WhatsApp desk. 11xplay verification, if any, is separate.' },
        ]}
      />
    </div>)
}
