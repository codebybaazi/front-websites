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
  ShieldAlert,
  Star
} from 'lucide-react'
import { waLink } from "@/lib/whatsapp";

export const Route = createFileRoute('/fairplay-vs-reddybook')({
  component: ComparisonPage,
  head: () => pageHeadFor('/fairplay-vs-reddybook'),
})

const playerReviews = [
  {
    name: "Ankit Rao",
    city: "Indore",
    detail: "Reddybook ID still open, Fairplay login for this site",
    rating: 5,
    body: "I typed my Reddybook ID into Fairplay. It bounced. WhatsApp on this site issued a Fairplay ID, then OTP on my phone. Cricket and casino sit on that login. I still have Reddybook. I just do not use it here.",
  },
  {
    name: "Meera Joshi",
    city: "Vadodara",
    detail: "UPI on Fairplay after ignoring a personal number",
    rating: 4,
    body: "A personal UPI arrived claiming it would credit both books. I paid the wallet on my Fairplay ID instead and kept the UTR. The deposit showed after I forwarded the screenshot. Reddybook UPI stays on Reddybook.",
  },
  {
    name: "Farhan Ali",
    city: "Kanpur",
    detail: "Saturday T20 withdrawal on Fairplay",
    rating: 4,
    body: "I used to treat every book's payout window as the same. Fairplay took about 180 minutes after the official result on a Saturday T20. Reddybook still follows that desk. I wait for settlement before I tap withdraw.",
  },
  {
    name: "Deepa Reddy",
    city: "Vijayawada",
    detail: "Moved cash off Reddybook, then deposited here",
    rating: 5,
    body: "A market voided and WhatsApp asked for my Fairplay ID and the slip screenshot. They did not ask for the Reddybook password. I withdrew on Reddybook first, then deposited here with UPI, because the two wallets do not talk to each other.",
  },
]

const comparisonData = [
  {
    feature: "What it is",
    fairplay: "Exchange-style Fairplay ID: cricket, football, tennis, casino.",
    reddybook: "A different book. Reddybook credentials will not open Fairplay.",
    winner: "fairplay"
  },
  {
    feature: "Deposit",
    fairplay: "UPI to the wallet on your Fairplay ID. Keep the UTR.",
    reddybook: "That desk’s UPI. Do not pay a personal number claiming both books.",
    winner: "fairplay"
  },
  {
    feature: "Withdrawals",
    fairplay: "Usually about 180 minutes after the official result.",
    reddybook: "Whatever that desk publishes. Do not assume the same window.",
    winner: "fairplay"
  },
  {
    feature: "Login",
    fairplay: "OTP on your phone. Never share it.",
    reddybook: "Separate password. We do not invent their internals.",
    winner: "fairplay"
  },
  {
    feature: "Support",
    fairplay: "WhatsApp on this site with Fairplay ID and screenshot.",
    reddybook: "Reddybook tickets stay with Reddybook.",
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
              <Swords className="w-4 h-4" /> Reddybook is a different book
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              FAIRPLAY <span className="text-white/20 font-light not-italic">VS</span> <span className="text-primary not-italic">REDDYBOOK</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 font-medium">
              Reddybook is a different book. A Fairplay ID is opened on WhatsApp, funded with UPI, and used for cricket and casino here.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="Strategic Market Analysis"
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
                    <th className="p-8 text-lg font-black italic uppercase tracking-tight text-primary">Fairplay</th>
                    <th className="p-8 text-lg font-black italic uppercase tracking-tight text-white/60">Reddybook</th>
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
              className="glass-card p-10 rounded-[32px] border-primary/10"
            >
              <h2 className="text-3xl font-black italic uppercase mb-8 flex items-center gap-3">
                <TrendingUp className="text-primary w-8 h-8" /> Two desks
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
                <p>
                  Fairplay cricket, football and casino share one login. Confirm the slip. We do not publish fill sizes or claim every large stake matches.
                </p>
                <p>
                  Reddybook stays on Reddybook. You cannot log into Fairplay with that ID. Withdraw there first if you want cash on Fairplay, then deposit with UPI here.
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
                  <Clock className="text-primary w-6 h-6" /> Infrastructure & Uptime
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fairplay is built to stay open during IPL nights. If Reddybook (or any book) goes to maintenance at toss, you still need a funded Fairplay ID here to use this exchange.
                </p>
              </div>
              
              <div className="glass-card p-10 rounded-[32px] border-primary/10">
                <h3 className="text-2xl font-black italic uppercase mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-primary w-6 h-6" /> Privacy First Philosophy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fairplay login is OTP. We do not sell your number from this page. Anyone who asks you to forward OTP is not this desk.
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
              <p className="text-muted-foreground leading-relaxed mb-8">
                WhatsApp this site for a Fairplay ID. Log in with OTP. Reddybook forms stay on Reddybook.
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
                <Cpu className="text-primary w-6 h-6" /> Technical Comparison: Fairplay vs Reddybook
              </h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Fairplay is a React site in front of an exchange login. In-play prices still need a confirmed slip. We do not invent Reddybook’s stack.
                </p>
                <p>
                  Fairplay withdrawals usually take about 180 minutes after settlement. That is a window, not an instant slogan. Reddybook timing is their desk.
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
              <Star className="text-primary w-8 h-8" /> Fairplay vs Reddybook reviews
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">
              Four players who already held Reddybook and then opened a Fairplay ID on this site. They mention that Reddybook credentials fail here, UPI with a UTR, and payouts that usually take about 180 minutes after settlement.
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
              <HelpCircle className="text-primary w-8 h-8" /> Comparison: Reddybook FAQ
            </h3>
            <div className="grid gap-6">
              {[
                {
                  q: "Can I log into Fairplay with a Reddybook ID?",
                  a: "No. Get a Fairplay ID on WhatsApp."
                },
                {
                  q: "Is Fairplay a bookie desk like Reddybook?",
                  a: "Fairplay is an exchange-style login for cricket, football, tennis and casino. Settlement follows the official result."
                },
                {
                  q: "How fast are Fairplay withdrawals compared to Reddybook?",
                  a: "Fairplay payouts usually take about 180 minutes after the official result. Reddybook timing is whatever that desk publishes."
                },
                {
                  q: "How do I deposit on Fairplay?",
                  a: "UPI to the wallet attached to your Fairplay ID. Keep the UTR. Do not pay a personal number that is not on this site."
                },
                {
                  q: "What if a Fairplay payout is late?",
                  a: "Wait for settlement, then the usual 180-minute window. After that, WhatsApp ID, amount and screenshot."
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
                WhatsApp this site. Reddybook details will not open this exchange.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href={waLink("Hello Fairplay! I read the Reddybook page and want a Fairplay ID.")}
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
