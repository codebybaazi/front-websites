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

const playerReviews = [
  {
    name: "Manish Agarwal",
    city: "Ranchi",
    detail: "Diamond password does not open Fairplay",
    rating: 5,
    body: "I tried the Diamond Exchange login on Fairplay. It failed. WhatsApp on this site sent a Fairplay ID, then OTP on my phone. I still have Diamond. I do not share that password with anyone here.",
  },
  {
    name: "Pooja Nambiar",
    city: "Kozhikode",
    detail: "Ignored a migrate UPI on a cloned number",
    rating: 4,
    body: "A number asked me to pay a personal UPI to migrate Diamond into Fairplay. I ignored it and used the deposit details after I logged into Fairplay. I kept the UTR. A Fairplay UTR will not credit Diamond.",
  },
  {
    name: "Tariq Hussain",
    city: "Aligarh",
    detail: "IPL fancy waited on the scorecard",
    rating: 4,
    body: "IPL books on this site sit on the Fairplay schedule. A fancy stayed open until the official scorecard, then the payout took about 180 minutes. Diamond markets stayed on that ID. Diamond tickets go to Diamond.",
  },
  {
    name: "Swati Bansal",
    city: "Jalandhar",
    detail: "Cricket, football and casino on one Fairplay login",
    rating: 5,
    body: "Fairplay cricket, football and casino share one login. I confirm the slip before I send. IPL nights can lag, so I refresh once. I asked WhatsApp for this wallet and left Diamond as its own ID.",
  },
]

const comparisonData = [
  {
    feature: "Login",
    fairplay: "Fairplay ID via WhatsApp. OTP on your phone.",
    diamond: "Will not open Fairplay. Do not share Diamond passwords here.",
    winner: "fairplay"
  },
  {
    feature: "Wallet",
    fairplay: "UPI into Fairplay after you log in. Keep the UTR.",
    diamond: "Separate cash. Ignore cloned numbers asking to “migrate.”",
    winner: "fairplay"
  },
  {
    feature: "Withdrawals",
    fairplay: "Usually about 180 minutes after settlement. Fancy waits on the scorecard.",
    diamond: "That ID’s desk. We do not invent agent approval times.",
    winner: "fairplay"
  },
  {
    feature: "IPL",
    fairplay: "Fairplay cricket books are on this schedule and exchange.",
    diamond: "Diamond markets stay on that ID.",
    winner: "fairplay"
  },
  {
    feature: "Support",
    fairplay: "WhatsApp on this site.",
    diamond: "Diamond tickets stay with Diamond.",
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
              <Swords className="w-4 h-4" /> Diamond is a separate ID
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              FAIRPLAY <span className="text-white/20 font-light">VS</span> <span className="text-primary not-italic">DIAMOND EXCH</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Diamond Exchange is a separate ID. Fairplay cricket, football and casino share one login. Do not share Diamond passwords with anyone here.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="Institutional Depth Audit"
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
                    <th className="p-8 text-sm font-black uppercase tracking-widest text-white/40">Feature</th>
                    <th className="p-8 text-lg font-black italic uppercase tracking-tight text-primary">Fairplay</th>
                    <th className="p-8 text-lg font-black italic uppercase tracking-tight text-white/60">Diamond Exch</th>
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
              className="glass-card p-10 rounded-[32px] border-primary/10"
            >
              <h2 className="text-3xl font-black italic uppercase mb-8 flex items-center gap-3">
                <TrendingUp className="text-primary w-8 h-8" /> Two IDs
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
                <p>
                  Fairplay cricket and casino sit on the Fairplay ID. Confirm the slip. We do not publish fill guarantees or a 1% margin claim.
                </p>
                <p>
                  Diamond Exchange markets stay on that ID. A UTR from Fairplay will not credit Diamond. Ignore anyone who asks you to pay a personal account to migrate an old ID.
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
                  <Clock className="text-primary w-6 h-6" /> Withdrawals
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fairplay payouts usually take about 180 minutes after settlement. Fancy books wait on the official scorecard. Diamond timing is that desk.
                </p>
              </div>
              
              <div className="glass-card p-10 rounded-[32px] border-primary/10">
                <h3 className="text-2xl font-black italic uppercase mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-primary w-6 h-6" /> Data Privacy & Elite Security
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fairplay login is OTP. Use deposit details sent after you log in or given on official WhatsApp. We do not invent Diamond’s agent model.
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
                WhatsApp on this site opens a Fairplay ID. You log in with that number and an OTP, then deposit with UPI. Ignore anyone who asks you to pay a personal account to “migrate” an old ID.
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
                <Cpu className="text-primary w-6 h-6" /> Next-Gen Technical Architecture
              </h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  This site is a React/TanStack hub. IPL nights can still lag. Refresh once. We do not claim odds milliseconds ahead of Diamond.
                </p>
                <p>
                  Diamond Exchange continues as its own login. Request Fairplay on WhatsApp if you want this wallet.
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
              <Star className="text-primary w-8 h-8" /> Fairplay vs Diamond Exchange reviews
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">
              Four players who already held a Diamond Exchange ID and then opened Fairplay on this site. They mention OTP login, cloned migrate numbers, IPL fancy waiting on the scorecard, and payouts that usually take about 180 minutes after settlement.
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
              <HelpCircle className="text-primary w-8 h-8" /> Comparison: Diamond Exchange FAQ
            </h3>
            <div className="grid gap-6">
              {[
                {
                  q: "Will my Diamond Exchange ID work on Fairplay?",
                  a: "No. Request a Fairplay ID on WhatsApp. Do not share Diamond Exchange passwords with anyone here."
                },
                {
                  q: "How long until a Fairplay withdrawal?",
                  a: "Usually about 180 minutes after the market is settled. Fancy books wait on the official scorecard."
                },
                {
                  q: "How do I avoid paying the wrong UPI?",
                  a: "Only use deposit details sent after you log into Fairplay or given on official WhatsApp. Ignore cloned numbers."
                },
                {
                  q: "Which platform lists IPL fancy?",
                  a: "Fairplay cricket books are on the Fairplay schedule and exchange. Diamond Exchange markets stay on that ID."
                },
                {
                  q: "Does Fairplay have an app?",
                  a: "Install Fairplay from this site’s app page. Third-party APKs are a common scam."
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
                GET A <span className="text-primary not-italic">FAIRPLAY ID</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium">
                WhatsApp this site. Diamond credentials will not open Fairplay.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href={waLink("Hello Fairplay! I read the Diamond Exchange page and want a Fairplay ID.")}
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
