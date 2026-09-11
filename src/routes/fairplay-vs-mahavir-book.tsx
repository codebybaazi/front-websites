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

const playerReviews = [
  {
    name: "Gaurav Shah",
    city: "Ahmedabad",
    detail: "Used Mahavir agent credit, then Fairplay UPI",
    rating: 5,
    body: "Mahavir ran on agent credit. Fairplay asked me to confirm the UPI with WhatsApp, then I paid the wallet on my ID. I did not mix that agent line with the Fairplay deposit. IPL and tables sit on the same Fairplay login.",
  },
  {
    name: "Lakshmi Menon",
    city: "Thrissur",
    detail: "Almost opened a second Fairplay ID",
    rating: 4,
    body: "A second number offered another Fairplay ID. This page said opening two can lock both, so I stayed on the one from this site's WhatsApp. Login is OTP. Mahavir tickets still go to Mahavir.",
  },
  {
    name: "Harish Yadav",
    city: "Gwalior",
    detail: "Fancy settled on the official result",
    rating: 4,
    body: "A fancy closed on the official score, then I waited about 180 minutes for the Fairplay payout. Mahavir still follows that desk. I refresh once if the match page hangs. I do not send the same stake twice.",
  },
  {
    name: "Neha Kulkarni",
    city: "Aurangabad",
    detail: "Traditional Mahavir desk, exchange login here",
    rating: 5,
    body: "Mahavir is the old desk I already knew. Fairplay is an exchange login with OTP. WhatsApp published on this site created the ID. KYC held the first withdrawal until I sent the papers.",
  },
]

const comparisonData = [
  {
    feature: "What it is",
    fairplay: "Exchange login: IPL and tables on one Fairplay ID.",
    mahavir: "A traditional desk. Separate from Fairplay.",
    winner: "fairplay"
  },
  {
    feature: "Deposit",
    fairplay: "UPI wallet on your ID. Confirm the account with WhatsApp.",
    mahavir: "Agent credit if they use it. Do not mix that with Fairplay UPI.",
    winner: "fairplay"
  },
  {
    feature: "Withdrawals",
    fairplay: "Usually about 180 minutes after settlement.",
    mahavir: "That desk’s rules. We do not invent their queue.",
    winner: "fairplay"
  },
  {
    feature: "Login",
    fairplay: "OTP on your phone. One Fairplay ID per person here.",
    mahavir: "Ask that desk. Opening two Fairplay IDs can lock both.",
    winner: "fairplay"
  },
  {
    feature: "Support",
    fairplay: "WhatsApp number published on this site.",
    mahavir: "Mahavir tickets stay with Mahavir.",
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
              <Swords className="w-4 h-4" /> Mahavir is a separate desk
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              FAIRPLAY <span className="text-white/20 font-light not-italic">VS</span> <span className="text-primary not-italic">MAHAVIR BOOK</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 font-medium">
              Mahavir Book is a traditional desk. Fairplay is an exchange login: same ID for IPL and tables, withdrawals after settlement.
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
                    <th className="p-8 text-lg font-black italic uppercase tracking-tight text-primary">Fairplay</th>
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
                <TrendingUp className="text-primary w-8 h-8" /> Different products
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
                <p>
                  Fairplay uses a UPI wallet on your ID, not informal agent credit. Confirm the deposit account with WhatsApp. Confirm the slip in play.
                </p>
                <p>
                  Mahavir is a separate desk. Fairplay IDs are created on the WhatsApp number published here. We do not invent Mahavir limits or “voided wins.”
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
                  Fairplay withdrawals usually follow about 180 minutes after settlement. Mahavir Book is a separate desk with its own payout rules.
                </p>
              </div>
              
              <div className="glass-card p-10 rounded-[32px] border-primary/10">
                <h3 className="text-2xl font-black italic uppercase mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-primary w-6 h-6" /> Enterprise-Grade Security
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fairplay login is OTP. Never share it. We do not claim encryption grades we cannot show you.
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
                Message WhatsApp on this site. Log in with OTP. KYC can still hold a first withdrawal. One Fairplay ID is the rule here.
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
                  Fairplay stays up through IPL traffic the same way any exchange should: you can open the match, send a bet, and see the slip confirm. If a page hangs, refresh once. Do not send the same stake twice.
                </p>
                <p>
                  We also do not publish a latency lead over Mahavir. Refresh once if a page hangs. Do not send the same stake twice.
                </p>
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
              <Star className="text-primary w-8 h-8" /> Fairplay vs Mahavir Book reviews
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">
              Four players who already used Mahavir Book as a traditional desk and then opened one Fairplay ID on this site. They mention UPI instead of agent credit, OTP login, and payouts that usually take about 180 minutes after settlement.
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
              <HelpCircle className="text-primary w-8 h-8" /> Comparison: Mahavir Book FAQ
            </h3>
            <div className="grid gap-6">
              {[
                {
                  q: "Is Mahavir Book the same as Fairplay?",
                  a: "No. Mahavir is a separate desk. Fairplay IDs are created on the WhatsApp number published here."
                },
                {
                  q: "Which platform has faster payouts?",
                  a: "Fairplay withdrawals usually follow about 180 minutes after settlement. Mahavir Book is a separate desk with its own payout rules."
                },
                {
                  q: "Do I need a separate ID for Fairplay?",
                  a: "Yes. Message WhatsApp on this site. Do not open two Fairplay IDs."
                },
                {
                  q: "Do I get agent credit on Fairplay?",
                  a: "Fairplay uses a UPI wallet on your ID, not informal agent credit. Confirm the deposit account with WhatsApp."
                },
                {
                  q: "How are Fairplay bets settled?",
                  a: "On official results. Withdrawals usually follow about 180 minutes later if KYC is clear."
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
                WhatsApp this site. Mahavir credentials will not open Fairplay.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href={waLink("Hello Fairplay! I read the Mahavir Book page and want a Fairplay ID.")}
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
