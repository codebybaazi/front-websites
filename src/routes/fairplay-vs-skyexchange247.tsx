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

export const Route = createFileRoute('/fairplay-vs-skyexchange247')({
  component: ComparisonPage,
  head: () => pageHeadFor('/fairplay-vs-skyexchange247'),
})

const comparisonData = [
  {
    feature: "Liquidity",
    fairplay: "Exchange books with a live slip you confirm before sending.",
    skyexchange: "Variable liquidity, often limited on secondary markets.",
    winner: "fairplay"
  },
  {
    feature: "Odds Margin",
    fairplay: "Ultra-sharp 1.5-2% exchange commission.",
    skyexchange: "Often 4-6% hidden margins on Fairplay markets.",
    winner: "fairplay"
  },
  {
    feature: "Settlement Speed",
    fairplay: "Payouts usually about 180 minutes after settlement.",
    skyexchange: "Manual settlement cycles, can take 15-30 mins post-match.",
    winner: "fairplay"
  },
  {
    feature: "Support",
    fairplay: "Structured loyalty program with up to 5% cashback.",
    skyexchange: "Basic referral bonuses, no published WhatsApp desk on this site.",
    winner: "fairplay"
  },
  {
    feature: "Infrastructure",
    fairplay: "Stays open during IPL nights; refresh once if a page hangs.",
    skyexchange: "Legacy platform, prone to lag during heavy traffic.",
    winner: "fairplay"
  }
]

function ComparisonPage() {
  return (
    <div className="flex flex-col bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,185,74,0.08),transparent_70%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-8">
              <Star className="w-4 h-4 fill-primary" /> Market Comparison 2026
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9] uppercase">
              FAIRPLAY <span className="text-white/20 not-italic">VS</span> <span className="text-primary not-italic">SKYEXCHANGE247</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Skyexchange247 is another exchange brand. Fairplay IDs, UPI deposits and 180-minute withdrawals are handled on this site’s WhatsApp desk.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="Infrastructure Benchmark Audit"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container max-w-7xl mx-auto px-4 py-24">
        {/* Comparison Table */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden border-primary/20 mb-24 rounded-xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-8 text-sm font-black uppercase tracking-widest text-white/40">Efficiency Metrics</th>
                  <th className="p-8 text-lg font-bold tracking-tight text-primary">Fairplay</th>
                  <th className="p-8 text-lg font-bold tracking-tight text-white/60">Skyexchange 247</th>
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
                        <span>{row.skyexchange}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Deep Dive Analysis */}
        <div className="space-y-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-xl border-primary/10"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-3">
              <TrendingUp className="text-primary w-8 h-8" /> Scalability & Reliability: The 2026 Standard
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
              <p>
                Skyexchange has long been a staple in the Indian market, but its legacy infrastructure often struggles with the sheer volume of 2026-level betting activity. Users frequently report site slowdowns during critical IPL match moments—the exact time when you need to place a lay bet or lock in a profit. When thousands of users try to refresh their odds at once, legacy platforms often experience "odds freeze," which can lead to significant missed opportunities for serious bettors who rely on real-time data.
              </p>
              <p>
                Fairplay is built on a distributed microservices architecture, specifically optimized for high-concurrency event processing. This means our platform remains buttery smooth even when millions of users are active simultaneously during a T20 World Cup final. When you click to place a bet on Fairplay, it's executed in milliseconds, giving you the edge in fast-moving live markets where every second counts. Our data centers are geographically distributed to ensure low latency for users across the entire Indian subcontinent.
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
                <Target className="text-primary w-6 h-6" /> Deep Market Liquidity Analysis
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Liquidity is the lifeblood of any betting exchange. While Skyexchange often relies on smaller, fragmented pools that can run dry during high-stakes sessions, Fairplay aggregates liquidity from the world's largest betting networks. This depth ensures that whether you're betting ₹500 or ₹5,00,000, your order will be matched at the best possible price without moving the market against you.
              </p>
            </div>
            
            <div className="glass-card p-10 rounded-xl border-primary/10">
              <h3 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-3">
                <Shield className="text-primary w-6 h-6" /> Superior Fund Security
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Fairplay implements a multi-layer vault system for player funds, ensuring that your balance is always segregated and available for instant withdrawal. While Skyexchange operates through a traditional master-agent hierarchy that can sometimes lead to settlement disputes, Fairplay provides a direct, transparent pipeline to your winnings.
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
              <Smartphone className="text-primary w-6 h-6" /> Modern Mobile Experience
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Skip the bureaucratic hurdles of legacy platforms like Skyexchange. Fairplay has engineered a friction-free onboarding pipeline that prioritizes your access to the market. Our 60-second WhatsApp verified ID activation is not just a feature—it's a commitment to your betting efficiency, ensuring you never miss a toss or a powerplay delivery due to registration lag.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-white/5">
              {[
                { label: "Onboarding Speed", value: "< 60 Seconds" },
                { label: "Verification Method", value: "WhatsApp Direct" },
                { label: "Market Access", value: "Immediate" }
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
          className="glass-card p-10 rounded-xl border-primary/10 mb-24"
        >
          <h3 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-3 text-center justify-center">
            <HelpCircle className="text-primary w-8 h-8" /> Skyexchange Comparison — FAQ
          </h3>
          <div className="grid gap-6">
            {[
              {
                q: "Why should I switch from Skyexchange to Fairplay?",
                a: "The primary reasons are superior liquidity, faster site performance, and a more robust WhatsApp desk. Fairplay is engineered to handle high-volume trading without the lag often associated with legacy exchanges like Skyexchange."
              },
              {
                q: "Are the odds different on Fairplay vs Skyexchange?",
                a: "Yes. Fairplay consistently offers tighter spreads and lower commissions. Over a season of betting, these small differences in odds lead to significantly higher overall profitability for the player."
              },
              {
                q: "Is it easy to migrate my bank details from Skyexchange?",
                a: "Absolutely. Our onboarding team can help you set up your Fairplay ID and link your preferred UPI/IMPS methods in under 2 minutes. We make the transition seamless so you don't miss any action."
              },
              {
                q: "Does Fairplay have a better mobile app than Skyexchange?",
                a: "Fairplay's web-app is fully optimized for all mobile browsers, providing a faster and more intuitive experience than the Skyexchange interface, which often requires manual refreshes."
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
              THE VERDICT: <span className="text-primary">FAIRPLAY WINS</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium">
              Open a Fairplay ID on WhatsApp. Skyexchange247 is a different desk — do not reuse that password here.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href={waLink("Hello Fairplay! I'm switching from Skyexchange and want to get started with a Fairplay ID.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 bg-primary text-primary-foreground rounded-2xl font-bold tracking-tight tracking-[0.2em] hover:shadow-[0_0_40px_rgba(47,185,74,0.6)] transition-all flex items-center justify-center gap-3"
              >
                <Zap className="w-5 h-5 fill-current" /> Get Your Fairplay ID
              </a>
              <Link 
                to="/all-links"
                className="px-12 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-bold tracking-tight tracking-[0.2em] hover:bg-white/10 transition-all flex items-center justify-center gap-3"
              >
                Site Index <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    
      <FAQSection 
        title="Fairplay vs Skyexchange247 FAQ"
        faqs={[
          { q: 'Is Skyexchange247 a Fairplay brand?', a: 'It is a different exchange name. Fairplay IDs and deposits are only those confirmed on this site’s WhatsApp.' },
          { q: 'Can I transfer a Skyexchange balance here?', a: 'Withdraw there first, then deposit to Fairplay with UPI. There is no in-app transfer between brands.' },
          { q: 'Which login is for tennis and football?', a: 'Fairplay sports sit on the Fairplay ID. Check the schedule on this site for listed fixtures.' },
          { q: 'How do I confirm I am on the real Fairplay?', a: 'Use this website and the published WhatsApp number. Clones copy logos and ask for UPI to random names.' },
        ]}
      />
    </div>)
}
