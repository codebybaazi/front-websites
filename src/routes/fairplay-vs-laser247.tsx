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
  Flame,
  Star
} from 'lucide-react'
import { waLink } from "@/lib/whatsapp";

export const Route = createFileRoute('/fairplay-vs-laser247')({
  component: ComparisonPage,
  head: () => pageHeadFor('/fairplay-vs-laser247'),
})

const playerReviews = [
  {
    name: "Devendra Singh",
    city: "Varanasi",
    detail: "Laser247 password failed on Fairplay",
    rating: 5,
    body: "I reused my Laser247 password here. It did not open Fairplay. WhatsApp on this site issued a Fairplay ID and OTP on my phone. I asked if they would link Laser247. They had not, so I funded only this wallet.",
  },
  {
    name: "Anjali Pillai",
    city: "Kollam",
    detail: "In-play slip went stale, then confirmed the new price",
    rating: 4,
    body: "In-play cricket moved while I was tapping. Fairplay showed a price-changed error on a stale slip. I cancelled and confirmed the new price before sending. Laser247 would need the same check on its own book.",
  },
  {
    name: "Rehan Qureshi",
    city: "Meerut",
    detail: "IPL on the Fairplay cricket ID",
    rating: 4,
    body: "I use the Fairplay cricket ID for matches on this schedule. Laser247 is only if the desk issues a linked book for that market. After settlement, the Fairplay payout took about 180 minutes. I did not mix UTRs.",
  },
  {
    name: "Kiran Shetty",
    city: "Mangaluru",
    detail: "Page hung on an IPL night, then first KYC withdrawal",
    rating: 5,
    body: "An IPL page hung, so I refreshed once and did not double-send. First Fairplay withdrawal sat until KYC cleared. Laser247 tickets still go to that desk. Fairplay help is the WhatsApp on this site.",
  },
]

const comparisonData = [
  {
    feature: "Login",
    fairplay: "Fairplay ID via WhatsApp. OTP on your phone.",
    laser247: "Separate login. Do not reuse a Laser247 password here.",
    winner: "fairplay"
  },
  {
    feature: "In-play",
    fairplay: "Confirm the price on the slip before you send.",
    laser247: "Each exchange has its own book. Confirm that slip too.",
    winner: "fairplay"
  },
  {
    feature: "Withdrawals",
    fairplay: "Payouts usually about 180 minutes after settlement.",
    laser247: "That book’s clock if you hold a linked ID. Do not mix UTRs.",
    winner: "fairplay"
  },
  {
    feature: "IPL",
    fairplay: "Use the Fairplay cricket ID for matches on this schedule.",
    laser247: "Only if the desk issues a linked book for that market.",
    winner: "fairplay"
  },
  {
    feature: "Support",
    fairplay: "WhatsApp on this site.",
    laser247: "Laser247 tickets stay with that desk.",
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
              <Swords className="w-4 h-4" /> Fairplay compared with Laser247
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              FAIRPLAY <span className="text-white/20 font-light not-italic">VS</span> <span className="text-primary not-italic">LASER247</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 font-medium">
              Laser247 is a partner-style exchange. Fairplay still needs its own ID, UPI deposit and WhatsApp desk.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="Performance Benchmark Audit"
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
                    <th className="p-8 text-lg font-black italic uppercase tracking-tight text-white/60">Laser247</th>
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
                          <Flame className="w-5 h-5 text-white/10 shrink-0 mt-0.5" />
                          <span>{row.laser247}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Deep Dive Analysis Sections */}
          <div className="space-y-12 mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-[32px] border-primary/10"
            >
              <h2 className="text-3xl font-black italic uppercase mb-8 flex items-center gap-3">
                <TrendingUp className="text-primary w-8 h-8" /> Infrastructure Benchmarking: Speed Matters
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
                <p>
                  In-play cricket moves quickly. On Fairplay you still confirm the price on the slip before you send. A delayed tap is a void or a worse price, not a slogan.
                </p>
                <p>
                  Laser247 is a different login unless the desk linked it. Price-changed errors happen on any live book if you send a stale slip. We do not invent their refresh time.
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
                  <Clock className="text-primary w-6 h-6" /> Withdrawals
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fairplay withdrawals usually take about 180 minutes after the official result. Laser247, if you use a linked book, has its own payout clock. Ask that desk. Do not mix UTRs.
                </p>
              </div>
              
              <div className="glass-card p-10 rounded-[32px] border-primary/10">
                <h3 className="text-2xl font-black italic uppercase mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-primary w-6 h-6" /> Professional Grade Security
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fairplay login is OTP. Laser247, if you use it, has its own password.
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
                <Smartphone className="text-primary w-6 h-6" /> Opening Fairplay
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Message WhatsApp on this site. Do not reuse a Laser247 password here. KYC can still hold a first withdrawal.
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

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-[32px] border-primary/10"
            >
              <h3 className="text-2xl font-black italic uppercase mb-6 flex items-center gap-3">
                <Cpu className="text-primary w-6 h-6" /> Technical Scalability & Performance
              </h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Fairplay is a React site in front of an exchange login. IPL traffic can still hang a page. Refresh once. Do not double-send.
                </p>
                <p>
                  We do not invent Laser247’s stack or claim 100% uptime. Confirm the slip. Withdrawals follow settlement, usually about 180 minutes.
                </p>
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
              <Star className="text-primary w-8 h-8" /> Fairplay vs Laser247 reviews
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">
              Four players who already held Laser247 and then opened a Fairplay ID on this site. They mention OTP login, confirming the in-play slip, and payouts that usually take about 180 minutes after settlement.
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
              <HelpCircle className="text-primary w-8 h-8" /> Comparison: Laser247 FAQ
            </h3>
            <div className="grid gap-6">
              {[
                {
                  q: "Do I need a new ID for Fairplay if I use Laser247?",
                  a: "Yes. Fairplay is a separate login. Message WhatsApp on this site."
                },
                {
                  q: "How fast are withdrawals on Fairplay vs Laser247?",
                  a: "Fairplay payouts usually take about 180 minutes after settlement. Laser247 timing is separate if you hold that ID."
                },
                {
                  q: "Are in-play prices identical?",
                  a: "No. Each exchange has its own liquidity. Confirm the price on the slip before you send it."
                },
                {
                  q: "Which book should I fund for IPL?",
                  a: "Use the Fairplay cricket ID for matches listed on this schedule. Laser247 is only if the desk issues a linked book."
                },
                {
                  q: "Does Fairplay stay up during IPL?",
                  a: "The book is meant to stay open. If a page hangs, refresh once. We do not claim 100% uptime."
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
                WhatsApp this site. Ask if you already hold Laser247 before you fund a second wallet.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href={waLink("Hello Fairplay! I read the Laser247 page and want a Fairplay ID.")}
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
                  Explore Site Index <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    
      <FAQSection 
        title="Fairplay vs Laser247 FAQ"
        faqs={[
          { q: 'Do I need a new ID for Fairplay if I use Laser247?', a: 'Yes. Fairplay is a separate login. Message WhatsApp on this site; do not reuse a Laser247 password here.' },
          { q: 'Which book should I fund for IPL?', a: 'Use the Fairplay cricket ID for matches listed on this schedule. Laser247 is only if the desk issues a linked book.' },
          { q: 'Are in-play prices identical?', a: 'No. Each exchange has its own liquidity. Confirm the price on the slip before you send it.' },
          { q: 'How fast are Fairplay payouts?', a: 'Usually about 180 minutes after settlement. Pending KYC or an open market will delay that.' },
        ]}
      />
    </div>)
}
