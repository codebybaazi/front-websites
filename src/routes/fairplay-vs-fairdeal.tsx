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

const playerReviews = [
  {
    name: "Rahul Bhatt",
    city: "Dehradun",
    detail: "Skipped a Fairdeal link from social media",
    rating: 5,
    body: "A Fairdeal deposit link showed up in a social chat. This page said that is how people lose money, so I ignored it and messaged the WhatsApp on this site for a Fairplay ID. OTP on my phone. I asked before I funded anything else.",
  },
  {
    name: "Nisha Varghese",
    city: "Kottayam",
    detail: "Already had Fairdeal, opened Fairplay for IPL",
    rating: 4,
    body: "I already had Fairdeal. In the WhatsApp chat I said so. Most cricket on this schedule uses Fairplay, so I opened that ID. I did not mix UTRs. After settlement the Fairplay payout took about 180 minutes.",
  },
  {
    name: "Sameer Khan",
    city: "Jhansi",
    detail: "Desk named Fairdeal for one market only",
    rating: 4,
    body: "WhatsApp named Fairdeal for one market. Everything else on this schedule stayed on Fairplay. I confirmed the live price on the slip. When a slip went stale I cancelled. Fairdeal tickets still go to Fairdeal unless the desk is the same number.",
  },
  {
    name: "Leela Naik",
    city: "Hubballi",
    detail: "Did not split the bankroll across two wallets",
    rating: 5,
    body: "The desk had not issued both IDs, so I kept cash on Fairplay. Casino and IPL sit on that login. First withdrawal waited until KYC cleared. Fairdeal remains a partner book I did not fund.",
  },
]

const comparisonData = [
  {
    feature: "What it is",
    fairplay: "Main Fairplay ID for cricket and casino on this site.",
    fairdeal: "Partner book. Ask WhatsApp before you fund a second wallet.",
    winner: "fairplay"
  },
  {
    feature: "Wallet",
    fairplay: "UPI into Fairplay. Confirm the slip in play.",
    fairdeal: "Own wallet unless the desk says they linked it.",
    winner: "fairplay"
  },
  {
    feature: "Withdrawals",
    fairplay: "Payouts usually about 180 minutes after settlement.",
    fairdeal: "That book’s clock. Do not mix UTRs.",
    winner: "fairplay"
  },
  {
    feature: "IPL",
    fairplay: "Most cricket on this schedule uses Fairplay.",
    fairdeal: "Only if the desk named Fairdeal for that market.",
    winner: "fairplay"
  },
  {
    feature: "Support",
    fairplay: "WhatsApp on this site.",
    fairdeal: "Fairdeal tickets stay with Fairdeal unless the desk is the same number.",
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
              <Star className="w-4 h-4 fill-primary" /> Partner book, ask before a second wallet
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9] uppercase">
              FAIRPLAY <span className="text-white/20 not-italic">VS</span> <span className="text-primary not-italic">FAIRDEAL</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Fairdeal is a network partner. Most cricket sits on the main Fairplay ID. Ask WhatsApp before you fund a second wallet. Funding a random Fairdeal link from social media is how people lose deposits.
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
                  <th className="p-8 text-lg font-black italic uppercase tracking-tight text-primary">Fairplay</th>
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
              <TrendingUp className="text-primary w-8 h-8" /> Linked or not
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
              <p>
                Fairplay IPL and casino on this site use the Fairplay login. Confirm the live price on the slip. We do not publish latency milliseconds.
              </p>
              <p>
                Fairdeal is a partner book. Most people only need Fairplay. Split a bankroll only if the desk issued both IDs.
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
                  In-play odds move. If the slip is stale, cancel. That is true on Fairplay and on Fairdeal. A delayed tap is a worse price.
                </p>
            </div>
            
            <div className="glass-card p-10 rounded-[32px] border-primary/10">
              <h3 className="text-2xl font-black italic uppercase mb-6 flex items-center gap-3">
                <ShieldCheck className="text-primary w-6 h-6" /> Settlement Integrity
              </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fairplay withdrawals usually take about 180 minutes after settlement if KYC is complete. Fairdeal has its own payout if you use that ID.
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
              WhatsApp this site for a Fairplay ID. You log in with that mobile number and OTP. If you already have Fairdeal, say so in the chat.
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
          className="mb-24"
        >
          <h2 className="text-3xl font-black italic uppercase mb-4 flex items-center gap-3">
            <Star className="text-primary w-8 h-8" /> Fairplay vs Fairdeal reviews
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">
            Four players who treated Fairdeal as a partner book and opened a Fairplay ID on this site. They mention asking WhatsApp before a second wallet, IPL on the main Fairplay login, and payouts that usually take about 180 minutes after settlement.
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
          className="glass-card p-10 rounded-[32px] border-primary/10 mb-24"
        >
          <h3 className="text-3xl font-black italic uppercase mb-8 flex items-center gap-3 text-center justify-center">
            <HelpCircle className="text-primary w-8 h-8" /> Expert FAQ
          </h3>
          <div className="grid gap-6">
            {[
              {
                q: "Is Fairdeal a Fairplay login?",
                a: "Fairdeal is a partner book. Most IPL and casino on this site use the main Fairplay ID."
              },
              {
                q: "Should I split my bankroll?",
                a: "Only if the desk issued both IDs. Funding a random Fairdeal link from social media is how people lose deposits."
              },
              {
                q: "Can I use a Fairplay ID on Fairdeal?",
                a: "Not unless the desk linked them. Open Fairplay on this WhatsApp."
              },
              {
                q: "When do Fairplay withdrawals land?",
                a: "After the market settles, usually within 180 minutes. Open bets and incomplete KYC add time."
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
              WhatsApp this site. Ask before you open Fairdeal as a second wallet.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href={waLink("Hello Fairplay! I read the Fairdeal page and want a Fairplay ID.")}
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
