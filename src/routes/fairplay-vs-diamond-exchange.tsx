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
  Gem,
  Star
} from 'lucide-react'
import { waLink } from "@/lib/whatsapp";

export const Route = createFileRoute('/fairplay-vs-diamond-exchange')({
  component: ComparisonPage,
  head: () => pageHeadFor('/fairplay-vs-diamond-exchange'),
})

const comparisonData = [
  {
    feature: "Liquidity Source",
    fairplay: "Tier-1 Global Aggregation; guaranteed fills for high-stakes.",
    diamond: "Network-based sharing; prone to 'voided' winning bets.",
    winner: "fairplay"
  },
  {
    feature: "Odds Precision",
    fairplay: "Exchange-grade sharp lines with 1% lower margins.",
    diamond: "Standard market lines with hidden commission fees.",
    winner: "fairplay"
  },
  {
    feature: "Payout Reliability",
    fairplay: "Payouts usually about 180 minutes after settlement.",
    diamond: "Dependent on 'Master' agent approval (Manual & Slow).",
    winner: "fairplay"
  },
  {
    feature: "Tech Stack",
    fairplay: "Modern React/TanStack Hub; zero-latency interface.",
    diamond: "Legacy PHP/Node templates; noticeable lag during Live IPL.",
    winner: "fairplay"
  },
  {
    feature: "WhatsApp desk",
    fairplay: "WhatsApp on this site for Fairplay ID and UPI tickets.",
    diamond: "Generic agent-based support with inconsistent quality.",
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
              <Swords className="w-4 h-4" /> Exchange comparison
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              FAIRPLAY <span className="text-white/20 font-light">VS</span> <span className="text-primary not-italic">DIAMOND EXCH</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              A high-intensity analysis of market depth, settlement speed, and infrastructure. See why Fairplay remains the undisputed home for Indian players.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="Fairplay vs Diamond Exchange"
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
            className="glass-card overflow-hidden border-primary/20 mb-20 rounded-xl"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-8 text-sm font-black uppercase tracking-widest text-white/40">Feature</th>
                    <th className="p-8 text-lg font-bold tracking-tight text-primary">Fairplay</th>
                    <th className="p-8 text-lg font-bold tracking-tight text-white/60">Diamond Exch</th>
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
                          <Gem className="w-5 h-5 text-white/10 shrink-0 mt-0.5" />
                          <span>{row.diamond}</span>
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
              className="glass-card p-10 rounded-xl border-primary/10"
            >
              <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-3">
                <TrendingUp className="text-primary w-8 h-8" /> Market Liquidity: The Power of Aggregation
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
                <p>
                  In the betting world, "Market Depth" is the difference between getting your bet matched and getting a "Price Changed" error. Fairplay's engine aggregates liquidity from top-tier global exchanges, ensuring that even during high-intensity IPL matches, massive bets are matched instantly without slippage.
                </p>
                <p>
                  Diamond Exchange relies on a fragmented agent-network model. While popular, this often results in limited liquidity for high-stakes players, and win-voidance is a recurring issue when the local pool cannot cover exchange-level payouts. For serious bettors, Fairplay's centralized global liquidity is the only viable choice.
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
                  <Clock className="text-primary w-6 h-6" /> Instant Payout Infrastructure
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fairplay has removed the middleman. Our automated payout gateway settles withdrawals 24/7 in minutes. In contrast, Diamond Exchange users are often tethered to the availability of their Master Agent, leading to frustrating delays during weekends or bank holidays. With Fairplay, your money is always your own.
                </p>
              </div>
              
              <div className="glass-card p-10 rounded-xl border-primary/10">
                <h3 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-primary w-6 h-6" /> OTP and wallet checks
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Diamond Exchange's agent-based model introduces multiple points of failure for your personal data. Fairplay employs OTP login and SSL on this site and a strict direct-to-customer privacy protocol. We ensure that your betting activity remains confidential and protected by the highest international standards.
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
                WhatsApp on this site opens a Fairplay ID. You log in with that number and an OTP, then deposit with UPI. Ignore anyone who asks you to pay a personal account to “migrate” an old ID.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-white/5">
                {[
                  { label: "Activation", value: "60-Sec WhatsApp" },
                  { label: "Withdrawals", value: "24/7 Instant" },
                  { label: "Support", value: "WhatsApp desk" }
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
                <Cpu className="text-primary w-6 h-6" /> Next-Gen Technical Architecture
              </h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Fairplay's platform is engineered for zero-latency performance. Utilizing a modern React/TanStack architecture, we provide a seamless experience even during high-traffic IPL finals. Diamond Exchange continues to rely on legacy web technologies that struggle with concurrent user spikes and real-time odds refreshes.
                </p>
                <p>
                  By investing in superior infrastructure, Fairplay ensures that you never miss a market move. Our proprietary data feeds deliver odds milliseconds ahead of the competition, giving players the edge they need to succeed in fast-moving markets.
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
              <HelpCircle className="text-primary w-8 h-8" /> Comparison: Diamond Exchange — FAQ
            </h3>
            <div className="grid gap-6">
              {[
                {
                  q: "Is Fairplay better than Diamond Exchange for cricket betting?",
                  a: "Absolutely. Fairplay provides higher market liquidity and sharper exchange-grade odds, ensuring your large bets are matched instantly without the risk of 'voidance' often seen on agent-based platforms like Diamond Exchange."
                },
                {
                  q: "How fast are withdrawals on Fairplay compared to Diamond Exchange?",
                  a: "Fairplay offers automated 24/7 withdrawals that settle in minutes. Diamond Exchange often requires agent-level approval, which can lead to significant delays depending on your agent's availability."
                },
                {
                  q: "Is it easy to switch from Diamond Exchange to Fairplay?",
                  a: "Very easy. Simply message our WhatsApp desk on WhatsApp and your Fairplay ID will be active in under 60 seconds. We offer a far more streamlined onboarding process than the legacy agent model."
                },
                {
                  q: "Are my winnings safer on Fairplay?",
                  a: "Yes. Fairplay IDs and UPI sit on this site's WhatsApp. Diamond Exchange agent desks are a separate chain — do not share passwords across brands."
                },
                {
                  q: "Does Fairplay have a mobile app?",
                  a: "Yes, Fairplay provides a modern, high-performance mobile experience that is technically superior to the legacy web templates used by Diamond Exchange affiliates."
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
                FAIRPLAY VERDICT: <span className="text-primary not-italic">FAIRPLAY WINS</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium">
                WhatsApp for a Fairplay ID. Ignore anyone who asks you to pay a personal account to migrate an old login.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href={waLink("Hello Fairplay! I've seen the Diamond Exchange comparison and want to get started with a Fairplay ID.")}
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
      </section>
    
      <FAQSection 
        title="Fairplay vs Diamond Exchange FAQ"
        faqs={[
          { q: 'Will my Diamond Exchange ID work on Fairplay?', a: 'No. Request a Fairplay ID on WhatsApp. Do not share Diamond Exchange passwords with anyone here.' },
          { q: 'Which platform lists IPL fancy?', a: 'Fairplay cricket books are on the Fairplay schedule and exchange. Diamond Exchange markets stay on that ID.' },
          { q: 'How do I avoid paying the wrong UPI?', a: 'Only use deposit details sent after you log into Fairplay or given on official WhatsApp. Ignore cloned numbers.' },
          { q: 'How long until a Fairplay withdrawal?', a: 'Usually about 180 minutes after the market is settled. Fancy books wait on the official scorecard.' },
        ]}
      />
    </div>)
}
