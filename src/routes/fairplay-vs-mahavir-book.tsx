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
    feature: "VIP Support",
    fairplay: "Personalized WhatsApp Concierge available 24/7.",
    mahavir: "Bot-heavy support with slow ticket resolution.",
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
              <Swords className="w-4 h-4" /> Elite Battle: Legacy vs Innovation
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              FAIRPLAY <span className="text-white/20 font-light not-italic">VS</span> <span className="text-primary not-italic">MAHAVIR BOOK</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 font-medium">
              Comparing the legacy of Mahavir Book against the elite performance of Fairplay. Discover which platform offers the ultimate betting experience for the 2026 season.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="Legacy vs Innovation Audit"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="min-h-screen pb-24 px-4 bg-[#0A0A0B] selection:bg-primary/30">
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
                    <th className="p-8 text-lg font-black italic uppercase tracking-tight text-primary">Fairplay (Elite)</th>
                    <th className="p-8 text-lg font-black italic uppercase tracking-tight text-white/60">Mahavir Book</th>
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
              className="glass-card p-10 rounded-[32px] border-primary/10"
            >
              <h2 className="text-3xl font-black italic uppercase mb-8 flex items-center gap-3">
                <TrendingUp className="text-primary w-8 h-8" /> Market Liquidity & Betting Limits
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
                <p>
                  For high-volume bettors, the ability to place large bets without market resistance is critical. Fairplay's exchange aggregates liquidity from multiple global sources, ensuring that even during high-traffic events like the IPL, your orders are filled instantly. This scalability is what sets elite platforms apart from standard local bookmakers.
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
              <div className="glass-card p-10 rounded-[32px] border-primary/10">
                <h3 className="text-2xl font-black italic uppercase mb-6 flex items-center gap-3">
                  <Clock className="text-primary w-6 h-6" /> Automated Payout Ecosystem
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fairplay has revolutionized the withdrawal process by integrating automated settlement gateways. By removing the 'human approval' bottleneck, we ensure that your winnings reach your bank account in minutes. Mahavir Book's manual processing model is prone to delays, especially during high-traffic weekends or late-night matches.
                </p>
              </div>
              
              <div className="glass-card p-10 rounded-[32px] border-primary/10">
                <h3 className="text-2xl font-black italic uppercase mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-primary w-6 h-6" /> Enterprise-Grade Security
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Security at Fairplay isn't just a checkbox; it's the foundation of our platform. We use military-grade encryption to protect every transaction and user interaction. While local platforms like Mahavir Book offer basic security, Fairplay's multi-layered defense system provides the peace of mind that elite players demand.
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
                Elite players value efficiency. Fairplay's registration process is designed to get you from landing to betting in under 60 seconds. Our VIP WhatsApp verification bypasses the clunky, document-heavy signup forms found on legacy sites like Mahavir Book, allowing you to focus on what matters: the game.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-white/5">
                {[
                  { label: "Verification", value: "WhatsApp Verified" },
                  { label: "Speed", value: "Instant Activation" },
                  { label: "Concierge", value: "24/7 Dedicated" }
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

          {/* FAQ Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[32px] border-primary/10 mb-20"
          >
            <h3 className="text-3xl font-black italic uppercase mb-8 flex items-center gap-3">
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
                  a: "Yes, you will need a verified Fairplay ID. You can register in seconds by messaging our VIP Concierge on WhatsApp."
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
            className="glass-card p-12 rounded-[40px] border-primary/30 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Trophy className="w-48 h-48 text-primary" />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-6">
                CHOOSE <span className="text-primary">FAIRPLAY ELITE</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium">
                Join the new standard of elite betting in India. Get your verified ID in 60 seconds and experience the Fairplay advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href={waLink("Hello Fairplay! I've seen the Mahavir Book comparison and want to get started with an Elite ID.")}
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
