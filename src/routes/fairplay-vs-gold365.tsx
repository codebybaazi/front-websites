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

const comparisonData = [
  {
    feature: "Engine Latency",
    fairplay: "Live exchange prices; confirm the slip before you send.",
    gold365: "Standard white-label infrastructure (50-100ms).",
    winner: "fairplay"
  },
  {
    feature: "Liquidity Depth",
    fairplay: "Aggregated global liquidity across 5+ major hubs.",
    gold365: "Localized liquidity pools with limited market depth.",
    winner: "fairplay"
  },
  {
    feature: "Withdrawal System",
    fairplay: "Payouts usually about 180 minutes after settlement.",
    gold365: "Semi-automated batch processing (1-4 hours).",
    winner: "fairplay"
  },
  {
    feature: "Market Coverage",
    fairplay: "Full spectrum including niche eSports & Virtuals.",
    gold365: "Primary focus on Cricket & major Tennis events.",
    winner: "fairplay"
  },
  {
    feature: "Security Protocol",
    fairplay: "OTP login. Enable 2FA if your ID offers it.",
    gold365: "Standard SSL with manual KYC verification.",
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
              <BarChart3 className="w-4 h-4" /> Technical Benchmarking
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              FAIRPLAY <span className="text-white/20 font-light">VS</span> <span className="text-primary not-italic">GOLD365</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              In the high-stakes world of elite betting, platform performance is non-negotiable. We analyze the technical architecture of Fairplay and Gold365 for 2026.
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
                    <th className="p-8 text-sm font-black uppercase tracking-widest text-white/40">Technical Metric</th>
                    <th className="p-8 text-lg font-black italic uppercase tracking-tight text-primary">Fairplay (Proprietary)</th>
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
                <TrendingUp className="text-primary w-8 h-8" /> Scalability & Market Liquidity Analysis
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
                <p>
                  The primary differentiator between an elite exchange and a standard platform is liquidity management. Fairplay utilizes a global aggregation layer that pools orders from international betting hubs. This ensures that even high-limit bets are matched instantly without significant price slippage—a critical factor for serious traders during high-volume IPL matches.
                </p>
                <p>
                  Gold365 operates on a more traditional, siloed liquidity model. While adequate for casual bettors, it often struggles during peak volatility, leading to delayed bet matching or rejected slips. For those operating at an elite level, the Fairplay aggregation engine provides a level of market depth that Gold365 simply cannot replicate in the current technical landscape.
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
                  <Cpu className="text-primary w-6 h-6" /> Zero-Latency Execution Engine
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fairplay's core engine is built on a microservices architecture optimized for low-latency data throughput. By minimizing the "hop count" between market data feeds and user execution, we provide a low-latency environment. Gold365's reliance on legacy web stacks often introduces noticeable lag during live betting, which can be the difference between a winning and losing position.
                </p>
              </div>
              
              <div className="glass-card p-10 rounded-[32px] border-primary/10">
                <h3 className="text-2xl font-black italic uppercase mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-primary w-6 h-6" /> Infrastructure Resilience
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Redundancy is at the heart of the Fairplay network. With multi-region server clusters and automated failover protocols, we maintain 99.9% uptime even during record-breaking traffic events. Gold365 has historically shown vulnerability to peak-load stress, whereas our elite infrastructure is designed to scale dynamically with the action.
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
                <Smartphone className="text-primary w-6 h-6" /> Why Fairplay's Onboarding is Unmatched
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our onboarding process is a reflection of our technical efficiency. By integrating WhatsApp's API with our internal verification engine, we've reduced the time from initial contact to active betting to under 60 seconds. Gold365 users often face manual KYC hurdles that can delay activation by several hours or even days.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-white/5">
                {[
                  { label: "Tech Stack", value: "Next-Gen React" },
                  { label: "Execution", value: "low-latency" },
                  { label: "Reliability", value: "99.9% Uptime" }
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-[10px] font-black uppercase tracking-widest text-primary/60">{stat.label}</div>
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

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
                  q: "Is Fairplay's liquidity better than Gold365?",
                  a: "Yes. By aggregating liquidity from multiple global exchanges, Fairplay offers significantly deeper markets and better price stability for large bets compared to Gold365's localized model."
                },
                {
                  q: "How does the withdrawal speed compare between Gold365 and Fairplay?",
                  a: "Fairplay uses an automated payout API that settles withdrawals in minutes, 24/7. Gold365 relies on manual verification cycles, often resulting in wait times of several hours."
                },
                {
                  q: "Which platform is more secure for large deposits?",
                  a: "Fairplay employs bank-grade AES-256 encryption and a decentralized support model, providing a more robust security posture than the standard SSL implementations used by Gold365."
                },
                {
                  q: "Does Gold365 offer better odds for IPL?",
                  a: "Rarely. Because Fairplay operates on lower technical overhead and aggregates global lines, we consistently offer sharper odds with narrower margins than Gold365."
                },
                {
                  q: "Can I use my Gold365 credentials on Fairplay?",
                  a: "No, Fairplay is an independent elite network. However, our WhatsApp activation process is so fast (under 60s) that switching platforms is virtually frictionless."
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
                THE VERDICT: <span className="text-primary not-italic">FAIRPLAY SUPREMACY</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium">
                Ready to trade on the industry's most advanced technical infrastructure? Get your Fairplay ID now.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href={waLink("Hello Fairplay! I've read the Gold365 comparison and want to upgrade to an Elite ID.")}
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
