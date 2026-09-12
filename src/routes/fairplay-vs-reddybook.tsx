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
  XCircle,
  TrendingUp,
  Cpu,
  Clock,
  Smartphone,
  ShieldCheck,
  HelpCircle,
  ShieldAlert,
  Star
} from 'lucide-react'
import { waLink } from "@/lib/whatsapp";

export const Route = createFileRoute('/fairplay-vs-reddybook')({
  component: ComparisonPage,
  head: () => pageHeadFor('/fairplay-vs-reddybook'),
})

const comparisonData = [
  {
    feature: "Technology Stack",
    fairplay: "Live cricket, football and tennis books on one Fairplay ID.",
    reddybook: "Legacy white-label solutions with frequent downtime.",
    winner: "fairplay"
  },
  {
    feature: "Market Liquidity",
    fairplay: "Aggregated global liquidity for instant heavy-weight bets.",
    reddybook: "Isolated pools; high-stakes bets often rejected or delayed.",
    winner: "fairplay"
  },
  {
    feature: "Withdrawal Speed",
    fairplay: "Withdrawals usually about 180 minutes after the official result.",
    reddybook: "Manual processing; delays during peak hours and weekends.",
    winner: "fairplay"
  },
  {
    feature: "Data Privacy",
    fairplay: "OTP login. Do not share the code with anyone.",
    reddybook: "Basic SSL; frequent reports of unsolicited marketing calls.",
    winner: "fairplay"
  },
  {
    feature: "WhatsApp desk",
    fairplay: "24/7 WhatsApp on this site. Have your Fairplay ID ready.",
    reddybook: "Shared support queues with long response times.",
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
              <Swords className="w-4 h-4" /> Market Analysis: Fairplay vs legacy desks
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              FAIRPLAY <span className="text-white/20 font-light not-italic">VS</span> <span className="text-primary not-italic">REDDYBOOK</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 font-medium">
              Reddybook credentials will not open Fairplay. Get a cricket ID on WhatsApp, deposit with UPI, then the usual 180-minute payout window.
            </p>
          </motion.div>

          <div className="mb-8 flex justify-center">
            <ReviewedBadge iso={CONTENT_REVIEWED["/fairplay-vs-reddybook"]} />
          </div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview
              title="Strategic Market Analysis"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="min-h-screen pb-24 px-4 bg-[#0D1424] selection:bg-primary/30">
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
                    <th className="p-8 text-lg font-bold tracking-tight text-white/60">Reddybook</th>
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
                          <ShieldAlert className="w-5 h-5 text-white/10 shrink-0 mt-0.5" />
                          <span>{row.reddybook}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Deep Dive Content sections */}
          <div className="space-y-12 mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-xl border-primary/10"
            >
              <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-3">
                <TrendingUp className="text-primary w-8 h-8" /> The Liquidity Advantage: Fairplay's Edge
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
                <p>
                  On a cricket exchange, liquidity is whether a large IPL stake actually matches. Fairplay's architecture is built on a global aggregation model, allowing us to handle massive volume on IPL, World Cup, and Premier League matches without breaking a sweat. Whether you are betting ₹5,000 or ₹5,00,000, your bets are matched instantly at real-time market prices.
                </p>
                <p>
                  Reddybook, operating on more localized and sometimes fragmented pools, often struggles with high-stakes liquidity. This can lead to significant slippage or even the rejection of large bets during peak market activity. For professional bettors, this lack of market depth is a deal-breaker that Fairplay completely eliminates.
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
                  <Clock className="text-primary w-6 h-6" /> Infrastructure & Uptime
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fairplay is built to stay open during IPL nights. If Reddybook (or any book) goes to maintenance at toss, you still need a funded Fairplay ID here to use this exchange.
                </p>
              </div>
              
              <div className="glass-card p-10 rounded-xl border-primary/10">
                <h3 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-primary w-6 h-6" /> Privacy First Philosophy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your data is your business. Fairplay employs OTP login and a strict zero-log policy. Unlike other platforms that might sell your contact information to third-party marketers, we ensure your cricket betting activity remains completely private and secure through our decentralized support infrastructure.
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
              <p className="text-muted-foreground leading-relaxed mb-8">
                We understand that high-stakes players value time above all else. That's why Fairplay has streamlined the entry process to a mere 60 seconds. While Reddybook requires tedious form submissions and manual verification queues that can take hours, Fairplay leverages a WhatsApp desk system that gets you in the game instantly.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-white/5">
                {[
                  { label: "Activation Time", value: "< 60 Seconds" },
                  { label: "Security Level", value: "End-to-End Encrypted" },
                  { label: "Support Access", value: "24/7 WhatsApp" }
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
                <Cpu className="text-primary w-6 h-6" /> Technical Comparison: Fairplay vs Reddybook
              </h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  From an engineering perspective, the difference is night and day. Fairplay utilizes a modern microservices architecture, allowing for seamless updates and zero-latency odds refreshes. Reddybook continues to rely on monolithic legacy systems that struggle to scale during massive traffic spikes like the IPL final.
                </p>
                <p>
                  Furthermore, Fairplay's automated withdrawal gateway is usually land about 180 minutes after the official result if KYC is clear. Reddybook's manual verification process introduces human error and significant delays that no serious bettor should have to tolerate.
                </p>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-xl border-primary/10 mb-20"
          >
            <h3 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-3">
              <HelpCircle className="text-primary w-8 h-8" /> Comparison: Reddybook — FAQ
            </h3>
            <div className="grid gap-6">
              {[
                {
                  q: "Is Fairplay safer than Reddybook?",
                  a: "Yes. Fairplay utilizes advanced AES-256 encryption and a decentralized support model via WhatsApp, ensuring your data and funds are protected by industry-leading security standards that far exceed Reddybook's basic legacy setup."
                },
                {
                  q: "Why should I switch from Reddybook to Fairplay?",
                  a: "The primary reasons are superior liquidity (meaning your big bets always get matched), faster automated withdrawals (minutes vs hours), and a more stable platform that doesn't crash during major matches."
                },
                {
                  q: "How fast are Fairplay withdrawals compared to Reddybook?",
                  a: "Fairplay payouts usually take about 180 minutes after the official result. Reddybook timing is whatever that desk publishes — do not assume the same window."
                },
                {
                  q: "Does Fairplay offer better odds than Reddybook?",
                  a: "Fairplay consistently offers sharper, exchange-grade odds with lower margins (back/lay spread). Because we aggregate global liquidity, we can offer prices that localize bookies like Reddybook simply cannot match."
                },
                {
                  q: "Can I use the same ID for both?",
                  a: "No. You will need a verified Fairplay ID to access our Fairplay markets. The good news is that registration takes less than a minute via our WhatsApp desk."
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
                OPEN A <span className="text-primary">FAIRPLAY ID</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium">
                Reddybook credentials will not open this exchange. Get a Fairplay ID on WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href={waLink("Hello Fairplay! I've seen the Reddybook comparison and want to upgrade to a Fairplay ID.")}
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
                  Explore Index <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    
      <FAQSection 
        title="Fairplay vs Reddybook FAQ"
        faqs={[
          { q: 'Can I log into Fairplay with a Reddybook ID?', a: 'No. Get a Fairplay ID on WhatsApp. Reddybook credentials will not open this exchange.' },
          { q: 'Is Fairplay a bookie desk like Reddybook?', a: 'Fairplay is an exchange-style login for cricket, football, tennis and casino. Settlement follows the official result.' },
          { q: 'How do I deposit on Fairplay?', a: 'UPI to the wallet attached to your Fairplay ID. Keep the UTR. Do not pay a personal number that is not on this site.' },
          { q: 'What if a Fairplay payout is late?', a: 'Wait for settlement, then the usual 180-minute window. After that, WhatsApp ID, amount and screenshot.' },
        ]}
      />
    </div>)
}
