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

export const Route = createFileRoute('/fairplay-vs-lotus365')({
  component: ComparisonPage,
  head: () => pageHeadFor('/fairplay-vs-lotus365'),
})

const comparisonData = [
  {
    feature: "Cricket Odds",
    fairplay: "Exchange-grade sharp lines for IPL/Int'l with high liquidity.",
    lotus365: "Standard bookmaker odds with wider margins.",
    winner: "fairplay"
  },
  {
    feature: "Withdrawals",
    fairplay: "Payouts usually about 180 minutes after settlement.",
    lotus365: "Standard processing (Hours to same day).",
    winner: "fairplay"
  },
  {
    feature: "Registration",
    fairplay: "Fairplay ID via WhatsApp, then OTP login.",
    lotus365: "Traditional form-based signup with document KYC.",
    winner: "fairplay"
  },
  {
    feature: "Live Casino",
    fairplay: "500+ Live Dealer tables including Elite Indian Classics.",
    lotus365: "300+ tables, primarily slots focused.",
    winner: "fairplay"
  },
  {
    feature: "Support",
    fairplay: "24/7 VIP Concierge on WhatsApp & Telegram.",
    lotus365: "Standard in-app live chat support.",
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
              <Swords className="w-4 h-4" /> Elite Comparison: The 2026 Benchmark
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              FAIRPLAY <span className="text-white/20 font-light not-italic">VS</span> <span className="text-primary not-italic">LOTUS 365</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 font-medium">
              Deciding between India's top two betting exchanges? We've analyzed the speed, liquidity, and reliability to see which platform truly wins for the 2026 season.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="Competitive Intelligence Report"
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
                    <th className="p-8 text-lg font-black italic uppercase tracking-tight text-primary">Fairplay (Elite)</th>
                    <th className="p-8 text-lg font-black italic uppercase tracking-tight text-white/60">Lotus 365</th>
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
                          <span>{row.lotus365}</span>
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
                <TrendingUp className="text-primary w-8 h-8" /> In-Depth Market Analysis: Odds & Liquidity
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
                <p>
                  When it comes to high-stakes cricket betting during major tournaments like the 2026 IPL, liquidity is king. Fairplay leverages an exchange-grade architecture that aggregates liquidity across multiple platforms, ensuring that your bets are matched instantly at the most competitive rates available in the market. 
                </p>
                <p>
                  Lotus 365, while reliable, operates primarily on a traditional bookmaker model. This often results in wider margins, meaning you effectively pay more for the same odds. Serious bettors who engage in "line-shopping" will quickly notice that Fairplay consistently prices out better on volume-heavy markets, maximizing your potential returns on every delivery.
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
                  <Clock className="text-primary w-6 h-6" /> Seamless Payout Infrastructure
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Financial efficiency is the backbone of the Fairplay experience. Our UPI/IMPS gateway is engineered for speed, allowing for 24/7 withdrawals that settle in minutes rather than hours. While Lotus 365 users may experience delays during weekends or bank holidays, our dedicated settlement team ensures your funds are accessible exactly when you need them.
                </p>
              </div>
              
              <div className="glass-card p-10 rounded-[32px] border-primary/10">
                <h3 className="text-2xl font-black italic uppercase mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-primary w-6 h-6" /> Elite Trust & Transparency
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fairplay isn't just a platform; it's an ecosystem of verified betting environments. With end-to-end encryption and a dedicated VIP Concierge service reachable via WhatsApp and Telegram, our members benefit from a level of trust and support that standard platforms cannot match. We don't just provide odds; we provide peace of mind.
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
                Forget complicated form-filling and endless document upload loops. Fairplay has revolutionized the registration process with our 60-second WhatsApp verified ID activation. We prioritize your time, ensuring that you can jump straight into the action of your favorite IPL matches without unnecessary friction.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-white/5">
                {[
                  { label: "Verification", value: "Human-Validated" },
                  { label: "Activation", value: "60 Seconds" },
                  { label: "Support", value: "24/7 VIP Concierge" }
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
              <HelpCircle className="text-primary w-8 h-8" /> Comparison: Lotus 365 — FAQ
            </h3>
            <div className="grid gap-6">
              {[
                {
                  q: "Is Fairplay better than Lotus 365 for IPL betting?",
                  a: "Absolutely. Fairplay offers higher liquidity and sharper exchange-grade odds, meaning you get more value for your bets compared to Lotus 365's traditional bookmaker margins."
                },
                {
                  q: "Which platform has faster withdrawals, Fairplay or Lotus 365?",
                  a: "Fairplay is the clear winner here. We process UPI/IMPS withdrawals 24/7 in just minutes. Lotus 365 typically takes several hours and may have delays during bank holidays."
                },
                {
                  q: "Do I need a new ID if I'm switching from Lotus 365 to Fairplay?",
                  a: "Yes — open a Fairplay ID on WhatsApp. Log in with that mobile number and OTP. Do not reuse a Lotus365 password here."
                },
                {
                  q: "Are the bonuses better on Fairplay compared to Lotus 365?",
                  a: "Fairplay provides more aggressive reload bonuses and loyalty rewards specifically tailored for high-volume cricket bettors, whereas Lotus 365 focused more on one-time registration offers."
                },
                {
                  q: "Is my data safer with Fairplay?",
                  a: "Fairplay uses military-grade end-to-end encryption and a decentralized support model. While both platforms are secure, Fairplay's human-centric VIP support adds an extra layer of personalized security."
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
                THE VERDICT: <span className="text-primary">FAIRPLAY WINS</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium">
                Ready to upgrade to India's most trusted elite exchange? Get your verified Fairplay ID now and experience the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href={waLink("Hello Fairplay! I've seen the Lotus365 comparison and want to get started with an Elite ID.")}
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
                  View Partners <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    
      <FAQSection 
        title="Fairplay vs Lotus365 FAQ"
        faqs={[
          { q: 'Is a Lotus365 ID the same as a Fairplay ID?', a: 'No. Open a Fairplay ID on WhatsApp. Do not send your Lotus365 password to anyone who claims they can migrate it.' },
          { q: 'Can I keep both books?', a: 'Some desks issue both. Ask WhatsApp before you deposit twice. Cricket on this site uses the Fairplay login.' },
          { q: 'How do Fairplay withdrawals compare?', a: 'After the official result, Fairplay payouts usually take about 180 minutes. KYC can add a wait on either book.' },
          { q: 'Where do I get help?', a: 'Use the WhatsApp number on this site for Fairplay ID, UPI and settlement. Lotus365 support is a separate desk.' },
        ]}
      />
    </div>)
}
