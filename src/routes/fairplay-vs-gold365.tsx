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
  Target,
  HelpCircle,
  BarChart3,
  Star
} from 'lucide-react'
import { waLink } from "@/lib/whatsapp";

export const Route = createFileRoute('/fairplay-vs-gold365')({
  component: ComparisonPage,
  head: () => pageHeadFor('/fairplay-vs-gold365'),
})

const playerReviews = [
  {
    name: "Nikhil Patil",
    city: "Nashik",
    detail: "Asked WhatsApp whether Gold365 would be linked",
    rating: 5,
    body: "WhatsApp called Gold365 a partner book, not my Fairplay login. I opened Fairplay with OTP for IPL on this site. I asked if they would link Gold365. They had not issued one, so I did not deposit twice.",
  },
  {
    name: "Ayesha Khan",
    city: "Bhopal",
    detail: "Mixed a Fairplay UTR with Gold365 UPI",
    rating: 4,
    body: "I sent a Fairplay UTR to a Gold365 UPI by habit. It did not credit. WhatsApp asked for Fairplay ID, amount, and the screenshot. Next deposit I paid only the wallet on the login I was given.",
  },
  {
    name: "Suresh Iyer",
    city: "Coimbatore",
    detail: "Older Gold365 ID, IPL on Fairplay",
    rating: 4,
    body: "I keep Gold365 because an older desk issued it. IPL sits on Fairplay unless someone tells me a market lives on Gold365. After KYC, a Fairplay payout took about 180 minutes past the official result. Gold365 still runs on that book's clock.",
  },
  {
    name: "Ritu Malhotra",
    city: "Chandigarh",
    detail: "First Fairplay withdrawal held for KYC",
    rating: 5,
    body: "The first Fairplay withdrawal sat because KYC was incomplete. I sent the documents, then it moved. Live prices on both books go stale if I tap late, so I cancel and take the new slip. Casino here uses the Fairplay ID.",
  },
]

const comparisonData = [
  {
    feature: "How you log in",
    fairplay: "Fairplay ID via WhatsApp on this site. OTP on your phone.",
    gold365: "Separate login unless the desk issues a linked Gold365 book.",
    winner: "fairplay"
  },
  {
    feature: "Wallet",
    fairplay: "UPI into the Fairplay wallet. Do not mix UTRs with Gold365.",
    gold365: "Its own wallet. Treat it as a different ID until WhatsApp says otherwise.",
    winner: "fairplay"
  },
  {
    feature: "Withdrawals",
    fairplay: "Payouts usually about 180 minutes after settlement if KYC is complete.",
    gold365: "Ask that book’s desk. Do not assume Fairplay timing.",
    winner: "fairplay"
  },
  {
    feature: "What to bet",
    fairplay: "IPL, football, tennis and live casino on the Fairplay ID.",
    gold365: "Use Gold365 only if the desk told you that market lives there.",
    winner: "fairplay"
  },
  {
    feature: "Support",
    fairplay: "Stuck Fairplay deposits: WhatsApp on this site with ID, amount and UTR.",
    gold365: "Gold365 tickets go to Gold365 support.",
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
              <BarChart3 className="w-4 h-4" /> Separate IDs unless the desk links them
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              FAIRPLAY <span className="text-white/20 font-light">VS</span> <span className="text-primary not-italic">GOLD365</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Gold365 is a partner-style book, not the same Fairplay account. Keep IPL on the Fairplay cricket ID unless WhatsApp issues a linked login. Deposit only to the wallet you were given.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="Technological Dominance Audit"
            />
          </div>
        </div>
      </section>

      {/* Comparison Content */}
      <section className="py-24 relative">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Comparison Table */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden border-primary/20 mb-20 rounded-[40px]"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-8 text-sm font-black uppercase tracking-widest text-white/40">Topic</th>
                    <th className="p-8 text-lg font-black italic uppercase tracking-tight text-primary">Fairplay</th>
                    <th className="p-8 text-lg font-black italic uppercase tracking-tight text-white/60">Gold365</th>
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
                          <span>{row.gold365}</span>
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
                <TrendingUp className="text-primary w-8 h-8" /> Two wallets
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
                <p>
                  Fairplay cricket, football and casino share one Fairplay ID. You confirm the live slip before you send. We do not publish latency or “global hub” counts we cannot measure on your phone.
                </p>
                <p>
                  Gold365 is not that wallet. If the desk linked a Gold365 book, fund it on the details they send. A UTR from Fairplay will not credit Gold365, and the other way around.
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
                  <Cpu className="text-primary w-6 h-6" /> Live prices
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  In-play odds move. If the price on the slip is stale, cancel and take the new one. That is true on Fairplay and on Gold365. A delayed tap is a worse price, not a ranking between books.
                </p>
              </div>
              
              <div className="glass-card p-10 rounded-[32px] border-primary/10">
                <h3 className="text-2xl font-black italic uppercase mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-primary w-6 h-6" /> Login hygiene
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fairplay login is mobile plus OTP. Enable 2FA if the ID offers it. Gold365, if you have it, has its own password. Do not reuse OTP codes. Use https://fairplayindia.com for Fairplay, not a lookalike.
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
                <Smartphone className="text-primary w-6 h-6" /> How you open each ID
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Message WhatsApp on this site for a Fairplay ID, then log in with OTP and deposit with UPI. A Gold365 ID is only if the desk issues one. KYC on Fairplay can still hold a first withdrawal.
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
              <Star className="text-primary w-8 h-8" /> Fairplay vs Gold365 reviews
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">
              Four players who treated Gold365 as a separate book and opened a Fairplay ID on this site. They mention mixed UTRs, IPL on the Fairplay cricket ID, and payouts that usually take about 180 minutes after settlement once KYC is done.
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
              <HelpCircle className="text-primary w-8 h-8" /> Fairplay vs Gold365: Technical FAQ
            </h3>
            <div className="grid gap-6">
              {[
                {
                  q: "Is Gold365 the same as Fairplay?",
                  a: "No. Treat them as separate IDs unless WhatsApp confirms a linked book."
                },
                {
                  q: "How long do Fairplay withdrawals take?",
                  a: "Usually about 180 minutes after the official result if KYC is complete. Gold365 has its own clock."
                },
                {
                  q: "Where do I deposit?",
                  a: "To the UPI for the login you were given. A Fairplay UTR will not credit Gold365."
                },
                {
                  q: "Where should I bet IPL?",
                  a: "On the Fairplay cricket ID unless the desk told you a market lives on Gold365."
                },
                {
                  q: "Can I log into Fairplay with Gold365 details?",
                  a: "No. Open Fairplay on this site’s WhatsApp. Ask before you fund a second wallet."
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
                GET A <span className="text-primary not-italic">FAIRPLAY ID</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium">
                WhatsApp this site for the Fairplay login. Ask before you open Gold365 as a second wallet.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href={waLink("Hello Fairplay! I read the Gold365 page and want a Fairplay ID.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-12 py-5 bg-primary text-primary-foreground rounded-2xl font-black italic uppercase tracking-[0.2em] hover:shadow-[0_0_40px_rgba(255,100,0,0.6)] transition-all flex items-center justify-center gap-3"
                >
                  <Zap className="w-5 h-5 fill-current" /> Get a Fairplay ID
                </a>
                <Link 
                  to="/services"
                  className="px-12 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black italic uppercase tracking-[0.2em] hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                >
                  Platform Ecosystem <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    
      <FAQSection 
        title="Fairplay vs Gold365 FAQ"
        faqs={[
          { q: 'Is Gold365 the same wallet as Fairplay?', a: 'No. Treat them as separate IDs unless WhatsApp confirms a linked book. Deposit only to the login you were given.' },
          { q: 'Can I move a Gold365 balance to Fairplay?', a: 'Not automatically. Withdraw on Gold365, then deposit to Fairplay with UPI if you are switching.' },
          { q: 'Which ID is for live casino?', a: 'Fairplay live casino uses the Fairplay ID. Ask the desk if a Gold365 casino login is separate.' },
          { q: 'Who do I message for a stuck Fairplay deposit?', a: 'WhatsApp on this site with Fairplay ID, amount and UTR. Gold365 tickets go to that book’s support.' },
        ]}
      />
    </div>)
}
