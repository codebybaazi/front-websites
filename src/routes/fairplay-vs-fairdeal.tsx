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
  Users,
  Star
} from 'lucide-react'
import { waLink } from "@/lib/whatsapp";

export const Route = createFileRoute('/fairplay-vs-fairdeal')({
  component: ComparisonPage,
  head: () => pageHeadFor('/fairplay-vs-fairdeal'),
})

const comparisonData = [
  {
    feature: "Engine Latency",
    fairplay: "Live exchange prices; confirm the slip before you send.",
    fairdeal: "Standard partner-network infrastructure (40-80ms).",
    winner: "fairplay"
  },
  {
    feature: "Liquidity Depth",
    fairplay: "Aggregated global liquidity across 5+ international hubs.",
    fairdeal: "Regional liquidity pools with moderate market depth.",
    winner: "fairplay"
  },
  {
    feature: "Withdrawal System",
    fairplay: "Payouts usually about 180 minutes after settlement.",
    fairdeal: "Semi-automated verification cycles (1-3 hours).",
    winner: "fairplay"
  },
  {
    feature: "Indian Market Focus",
    fairplay: "Elite bespoke markets for IPL, WPL, and local favorites.",
    fairdeal: "Broad international focus with standard Indian coverage.",
    winner: "fairplay"
  },
  {
    feature: "VIP Concierge",
    fairplay: "24/7 Dedicated Human Concierge on WhatsApp/Telegram.",
    fairdeal: "Standard automated ticket-based support system.",
    winner: "fairplay"
  }
]

function ComparisonPage() {
  return (
    <div className="flex flex-col bg-background text-foreground overflow-hidden">
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.08),transparent_70%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-8">
              <Star className="w-4 h-4 fill-primary" /> The Elite Standard 2026
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9] uppercase">
              FAIRPLAY <span className="text-white/20 not-italic">VS</span> <span className="text-primary not-italic">FAIRDEAL</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              While both platforms occupy a premium space in the market, our technical audit reveals significant differences in execution speed, liquidity aggregation, and settlement integrity.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="Elite Ecosystem Audit"
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
          className="glass-card overflow-hidden border-primary/20 mb-24 rounded-[40px]"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-8 text-sm font-black uppercase tracking-widest text-white/40">Core Metric</th>
                  <th className="p-8 text-lg font-black italic uppercase tracking-tight text-primary">Fairplay (Elite)</th>
                  <th className="p-8 text-lg font-black italic uppercase tracking-tight text-white/60">Fairdeal</th>
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
                        <span>{row.fairdeal}</span>
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
            className="glass-card p-10 rounded-[32px] border-primary/10"
          >
            <h2 className="text-3xl font-black italic uppercase mb-8 flex items-center gap-3 text-center justify-center lg:justify-start">
              <TrendingUp className="text-primary w-8 h-8" /> Market Liquidity & Aggregation Strategy
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
              <p>
                The fundamental difference between Fairplay and Fairdeal lies in their approach to market depth. Fairplay operates an advanced liquidity aggregation layer that pulls orders from top-tier international exchanges. This ensures that even during high-volatility events like the IPL final, our users can place large stakes without moving the market or facing rejection.
              </p>
              <p>
                Fairdeal, while a respected partner, often relies on more localized liquidity pools. For the casual bettor, this may go unnoticed, but for the elite trader who requires instant execution and deep markets, the Fairplay technical stack provides a clear competitive advantage in terms of both odds-sharpness and matching speed.
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
                <Cpu className="text-primary w-6 h-6" /> Infrastructure Latency
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                In live betting, milliseconds matter. Fairplay's proprietary engine is optimized for low-latency response times, ensuring that the odds you see are the odds you get. Fairdeal's infrastructure, while stable, often exhibits higher latency during peak loads.
              </p>
            </div>
            
            <div className="glass-card p-10 rounded-[32px] border-primary/10">
              <h3 className="text-2xl font-black italic uppercase mb-6 flex items-center gap-3">
                <ShieldCheck className="text-primary w-6 h-6" /> Settlement Integrity
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Fairplay has pioneered automated withdrawal infrastructure in the Indian market. Our API-driven payout system ensures that once a withdrawal is requested, it is processed and settled in minutes.
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
              Elite service begins with the first interaction. Fairplay's WhatsApp-native registration and verification process is engineered to take less than 60 seconds. We value your time as much as your action.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-white/5">
              {[
                { label: "Verification", value: "API-Validated" },
                { label: "Execution", value: "low-latency" },
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
          className="glass-card p-10 rounded-[32px] border-primary/10 mb-24"
        >
          <h3 className="text-3xl font-black italic uppercase mb-8 flex items-center gap-3 text-center justify-center">
            <HelpCircle className="text-primary w-8 h-8" /> Expert FAQ
          </h3>
          <div className="grid gap-6">
            {[
              {
                q: "Is Fairplay more reliable than Fairdeal for high-stakes betting?",
                a: "Yes. Fairplay's global liquidity aggregation and proprietary low-latency engine make it the superior choice for high-volume traders who require instant execution and guaranteed market depth."
              },
              {
                q: "Which platform has faster withdrawals, Fairplay or Fairdeal?",
                a: "Fairplay is the clear winner. Our automated 24/7 payout system settles withdrawals in minutes. Fairdeal typically requires manual verification cycles."
              },
              {
                q: "Can I use a Fairplay ID on the Fairdeal network?",
                a: "No, they are independent platforms. However, obtaining an Fairplay ID takes less than 60 seconds via our verified WhatsApp concierge service."
              },
              {
                q: "Does Fairplay offer better odds on IPL matches?",
                a: "Consistently. Because we aggregate liquidity from international hubs, we can offer sharper lines and narrower margins than regional platforms like Fairdeal."
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
              THE VERDICT: <span className="text-primary">FAIRPLAY SUPREMACY</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium">
              Ready to elevate your betting experience with India's most advanced technical ecosystem? Get your verified Fairplay ID today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href={waLink("Hello Fairplay! I've read the Fairdeal comparison and want to upgrade to an Elite ID.")}
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
    
      <FAQSection 
        title="Fairplay vs Fairdeal FAQ"
        faqs={[
          { q: 'Is Fairdeal a Fairplay login?', a: 'Fairdeal is a partner book. Most IPL and casino on this site use the main Fairplay ID.' },
          { q: 'Should I split my bankroll?', a: 'Only if the desk issued both IDs. Funding a random Fairdeal link from social media is how people lose deposits.' },
          { q: 'How do I open Fairplay if I already have Fairdeal?', a: 'WhatsApp this site for a Fairplay ID. You will log in with that mobile number and OTP.' },
          { q: 'When do Fairplay withdrawals land?', a: 'After the market settles, usually within 180 minutes. Open bets and incomplete KYC add time.' },
        ]}
      />
    </div>)
}
