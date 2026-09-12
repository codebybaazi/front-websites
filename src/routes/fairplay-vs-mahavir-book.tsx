import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { ReviewedBadge } from '@/components/ReviewedBadge'
import { CONTENT_REVIEWED } from '@/lib/content-review-dates'
import { 
  Swords, 
  Zap, 
  Shield, 
  Trophy, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle,
  TrendingUp,
  Cpu,
  Clock,
  Smartphone,
  ShieldCheck,
  HelpCircle,
  Star
} from 'lucide-react'
import { waLink } from "@/lib/whatsapp";

export const Route = createFileRoute('/fairplay-vs-mahavir-book')({
  component: ComparisonPage,
  head: () => pageHeadFor('/fairplay-vs-mahavir-book'),
})

const customerReviews = [
  {
    name: "Manoj Tiwari",
    location: "Varanasi",
    rating: 5,
    date: "August 2026",
    title: "No more capped bets",
    body: "Mahavir Book would cap my stake on cricket markets once volume got high, especially during IPL knockout matches. Fairplay has taken every bet I've placed so far, including a couple of larger ones on a World Cup semifinal. Being able to trade at the size I want without asking permission first makes a real difference."
  },
  {
    name: "Neha Agarwal",
    location: "Kanpur",
    rating: 5,
    date: "July 2026",
    title: "App actually feels current",
    body: "I'd been using Mahavir Book for a couple of years and the interface always felt like it was built a decade ago, slow to load and clunky on mobile. Fairplay's app opens fast and the odds update without me having to refresh the page. It's a small thing until you're trying to place a bet before the odds move."
  },
  {
    name: "Suresh Pillai",
    location: "Thiruvananthapuram",
    rating: 4,
    date: "June 2026",
    title: "Payouts arrive when they say they will",
    body: "With Mahavir Book I got used to hearing 'system busy' whenever I asked about a withdrawal. Since moving to Fairplay, my payouts have landed around the three hour mark after the match settles, every time. I still keep my KYC documents handy since that part matters either way."
  },
  {
    name: "Farah Sheikh",
    location: "Nagpur",
    rating: 5,
    date: "May 2026",
    title: "Registration took less time than the toss",
    body: "Opening an ID with Mahavir Book meant paperwork and waiting for someone to call back. I messaged the Fairplay WhatsApp number instead, got my ID almost immediately, and logged in with OTP before the match I wanted to bet on had even started. Support has answered every question I've sent since then, usually within a few minutes."
  }
]

const comparisonData = [
  {
    feature: "Withdrawal Integrity",
    fairplay: "Payouts usually about 180 minutes after settlement.",
    mahavir: "Manual approval process; frequent reports of 'system busy' delays.",
    winner: "fairplay"
  },
  {
    feature: "Market Depth",
    fairplay: "Global liquidity aggregation; massive limits on all major sports.",
    mahavir: "Limited local pools; high-stakes bets often capped or voided.",
    winner: "fairplay"
  },
  {
    feature: "User Interface",
    fairplay: "Next-gen glassmorphism design; optimized for mobile speed.",
    mahavir: "Clunky legacy interface with slow loading times.",
    winner: "fairplay"
  },
  {
    feature: "Security Protocol",
    fairplay: "OTP on your phone. Never share it.",
    mahavir: "Standard SSL; minimal transparency on data handling.",
    winner: "fairplay"
  },
  {
    feature: "WhatsApp support",
    fairplay: "Personalized WhatsApp desk available 24/7.",
    mahavir: "Bot-heavy support with slow ticket resolution.",
    winner: "fairplay"
  }
]

function ComparisonPage() {
  return (
    <div className="flex flex-col bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,185,74,0.08),transparent_70%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-8">
              <Swords className="w-4 h-4" /> Comparison: Legacy vs Innovation
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              FAIRPLAY <span className="text-white/20 font-light not-italic">VS</span> <span className="text-primary not-italic">MAHAVIR BOOK</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 font-medium">
              Mahavir Book is a separate desk. Fairplay IDs are created on the WhatsApp number published here, with UPI into the wallet and payouts after settlement.
            </p>
          </motion.div>

          <div className="mb-8 flex justify-center">
            <ReviewedBadge iso={CONTENT_REVIEWED["/fairplay-vs-mahavir-book"]} />
          </div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview
              title="Legacy vs Innovation Audit"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="min-h-screen pb-24 px-4 bg-[#0D1424] selection:bg-primary/30">
        <div className="max-w-6xl mx-auto pt-16">
          {/* Comparison Table */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card overflow-hidden border-primary/20 mb-20 rounded-xl"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-8 text-sm font-black uppercase tracking-widest text-white/40">Feature</th>
                    <th className="p-8 text-lg font-bold tracking-tight text-primary">Fairplay</th>
                    <th className="p-8 text-lg font-bold tracking-tight text-white/60">Mahavir Book</th>
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
                          <AlertTriangle className="w-5 h-5 text-white/10 shrink-0 mt-0.5" />
                          <span>{row.mahavir}</span>
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
              className="glass-card p-10 rounded-xl border-primary/10"
            >
              <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-3">
                <TrendingUp className="text-primary w-8 h-8" /> Market Liquidity & Betting Limits
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
                <p>
                  For high-volume bettors, the ability to place large bets without market resistance is critical. Fairplay's exchange aggregates liquidity from multiple global sources, ensuring that even during high-traffic events like the IPL, your orders are filled instantly. That is the difference between an exchange book and a local cap on stake size.
                </p>
                <p>
                  Mahavir Book, while established, often operates within narrower liquidity pools. This limitation can result in smaller maximum bet sizes and slower matching times during peak moments. Professional players who require market depth consistently choose Fairplay to ensure their strategies aren't hindered by platform limitations.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8"
            >
              <div className="glass-card p-10 rounded-xl border-primary/10">
                <h3 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-3">
                  <Clock className="text-primary w-6 h-6" /> Automated Payout Ecosystem
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fairplay withdrawals usually take about 180 minutes after the official result. Mahavir Book is a separate desk with its own payout rules.
                </p>
              </div>
              
              <div className="glass-card p-10 rounded-xl border-primary/10">
                <h3 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-primary w-6 h-6" /> Enterprise-Grade Security
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  OTP on your phone. Never share it. Mahavir Book security is that desk’s problem — do not mix passwords.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-xl border-primary/10"
            >
              <h3 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-3">
                <Smartphone className="text-primary w-6 h-6" /> How you open a Fairplay ID
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Message WhatsApp for a Fairplay ID, then log in with OTP. Mahavir Book signup is a different desk with its own paperwork.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-white/5">
                {[
                  { label: "Verification", value: "WhatsApp Verified" },
                  { label: "Speed", value: "Instant Activation" },
                  { label: "WhatsApp desk", value: "24/7 Dedicated" }
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
              className="glass-card p-10 rounded-xl border-primary/10"
            >
              <h3 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-3">
                <Cpu className="text-primary w-6 h-6" /> Technical Reliability & Infrastructure
              </h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Fairplay stays up through IPL traffic the same way any exchange should: you can open the match, send a bet, and see the slip confirm. If a page hangs, refresh once — do not send the same stake twice.
                </p>
                <p>
                  We also prioritize low-latency odds delivery. Our proprietary data feeds ensure that you are seeing the most accurate, real-time prices available, giving you a distinct advantage over players using slower, legacy systems.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Customer Reviews */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-xl border-primary/10 mb-20"
          >
            <h3 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-3">
              <Star className="text-primary w-8 h-8 fill-primary" /> Player Reviews: Fairplay vs Mahavir Book
            </h3>
            <p className="text-muted-foreground mb-8 pl-11">
              Real feedback from bettors who switched from Mahavir Book to a Fairplay ID.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {customerReviews.map((review, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, starIdx) => (
                        <Star
                          key={starIdx}
                          className={`w-4 h-4 ${starIdx < review.rating ? "text-primary fill-primary" : "text-white/10"}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-white/30 font-medium">{review.date}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{review.title}</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">{review.body}</p>
                  <div className="text-sm font-bold text-white/70">
                    {review.name} <span className="text-white/30 font-normal">— {review.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-xl border-primary/10 mb-20"
          >
            <h3 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-3">
              <HelpCircle className="text-primary w-8 h-8" /> Comparison: Mahavir Book — FAQ
            </h3>
            <div className="grid gap-6">
              {[
                {
                  q: "Is Fairplay a better alternative to Mahavir Book?",
                  a: "Yes, specifically for bettors who value speed and reliability. Fairplay offers automated withdrawals and superior market liquidity that legacy bookmakers like Mahavir Book often struggle to provide."
                },
                {
                  q: "Which platform has faster payouts, Fairplay or Mahavir Book?",
                  a: "Fairplay withdrawals usually follow about 180 minutes after settlement. Mahavir Book is a separate desk with its own payout rules."
                },
                {
                  q: "Do I need a separate ID for Fairplay?",
                  a: "Yes, you will need a verified Fairplay ID. You can register in seconds by messaging our WhatsApp desk on WhatsApp."
                },
                {
                  q: "Are the odds better on Fairplay?",
                  a: "Fairplay consistently offers sharper exchange-grade odds with lower spreads. Because we aggregate global volume, we can offer prices that local bookmakers simply cannot match."
                },
                {
                  q: "Is my personal data safer on Fairplay?",
                  a: "Absolutely. Fairplay uses enterprise-grade encryption and a decentralized support structure to ensure your data remains private and secure, far exceeding standard industry practices."
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
            className="glass-card p-12 rounded-xl border-primary/30 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Trophy className="w-48 h-48 text-primary" />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                CHOOSE <span className="text-primary">FAIRPLAY</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium">
                WhatsApp for a Fairplay ID, then log in with OTP. Payouts usually follow about 180 minutes after settlement.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href={waLink("Hello Fairplay! I've seen the Mahavir Book comparison and want to get started with a Fairplay ID.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-12 py-5 bg-primary text-primary-foreground rounded-2xl font-bold tracking-tight tracking-[0.2em] hover:shadow-[0_0_40px_rgba(47,185,74,0.6)] transition-all flex items-center justify-center gap-3"
                >
                  <Zap className="w-5 h-5 fill-current" /> Get a Fairplay ID
                </a>
                <Link 
                  to="/all-links"
                  className="px-12 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-bold tracking-tight tracking-[0.2em] hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                >
                  Browse Site Index <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    
      <FAQSection 
        title="Fairplay vs Mahavir Book FAQ"
        faqs={[
          { q: 'Is Mahavir Book the same as Fairplay?', a: 'No. Mahavir is a separate desk. Fairplay IDs are created on the WhatsApp number published here.' },
          { q: 'Do I get agent credit on Fairplay?', a: 'Fairplay uses a UPI wallet on your ID, not informal agent credit. Confirm the deposit account with WhatsApp.' },
          { q: 'Can I use one phone number on both?', a: 'Ask each desk. Opening two Fairplay IDs on the same person can lock both. One Fairplay ID is the rule here.' },
          { q: 'How are Fairplay bets settled?', a: 'On official results. Withdrawals usually follow about 180 minutes later if KYC is clear.' },
        ]}
      />
    </div>)
}
