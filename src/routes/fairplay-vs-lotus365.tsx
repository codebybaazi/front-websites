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

const playerReviews = [
  {
    name: "Rohit Mehta",
    city: "Pune",
    detail: "Lotus365 holder, Fairplay ID for IPL on this site",
    rating: 5,
    body: "I still keep Lotus365. I opened Fairplay because cricket on this site uses the Fairplay login, not Lotus. WhatsApp sent the ID. I signed in with my mobile and OTP. The first UPI deposit sat until I forwarded the UTR. I treat the two wallets as separate cash. After an IPL match settled, the Fairplay payout landed in a little over three hours.",
  },
  {
    name: "Priya Nair",
    city: "Kochi",
    detail: "Football and T20 on Fairplay, Lotus365 desk left as-is",
    rating: 4,
    body: "Lotus365 support is a different number. When a fancy stayed open after rain, I messaged the WhatsApp on this site. They asked for the slip screenshot, not my Lotus password. Once KYC was already done, the Fairplay withdrawal after that T20 took about 180 minutes. I asked before depositing a second time.",
  },
  {
    name: "Imran Sheikh",
    city: "Lucknow",
    detail: "Tried one password for both books",
    rating: 5,
    body: "I tried my Lotus365 password on Fairplay. It failed, which this page already says. Fairplay login is mobile plus OTP. Casino and IPL sit on the same Fairplay ID. I will not send either book's password to someone who claims they can merge the accounts.",
  },
  {
    name: "Kavita Deshmukh",
    city: "Nagpur",
    detail: "Both books, cricket here on Fairplay",
    rating: 4,
    body: "A desk issued Lotus365 years ago, so I still have that ID. For cricket on this site I use Fairplay. UPI in, keep the UTR, wait for the official result before withdrawing. Open markets hold cash on both books. Two logins, two wallets.",
  },
]

const comparisonData = [
  {
    feature: "Login",
    fairplay: "Fairplay ID via WhatsApp, then OTP.",
    lotus365: "A different book. Do not reuse that password here.",
    winner: "fairplay"
  },
  {
    feature: "Withdrawals",
    fairplay: "Payouts usually about 180 minutes after settlement.",
    lotus365: "That desk’s timing. KYC can add a wait on either book.",
    winner: "fairplay"
  },
  {
    feature: "Sports",
    fairplay: "IPL, football, tennis and casino on one Fairplay ID.",
    lotus365: "Keep Lotus365 only if you already hold it. Cricket on this site uses Fairplay.",
    winner: "fairplay"
  },
  {
    feature: "Wallet",
    fairplay: "UPI into the Fairplay wallet. Keep the UTR.",
    lotus365: "Separate cash. No in-app transfer between brands.",
    winner: "fairplay"
  },
  {
    feature: "Support",
    fairplay: "WhatsApp number on this site.",
    lotus365: "Lotus365 support is a separate desk.",
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
              <Swords className="w-4 h-4" /> Two books, two wallets
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              FAIRPLAY <span className="text-white/20 font-light not-italic">VS</span> <span className="text-primary not-italic">LOTUS 365</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 font-medium">
              Lotus365 and Fairplay are separate logins. Use Fairplay for IPL, football and casino on this site. WhatsApp if you already hold a Lotus365 book.
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
                    <th className="p-8 text-lg font-black italic uppercase tracking-tight text-primary">Fairplay</th>
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
                <TrendingUp className="text-primary w-8 h-8" /> Separate IDs
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
                <p>
                  Fairplay is an exchange-style cricket ID: confirm the slip, wait for the official result, then withdraw. We do not publish odds margins we cannot show on your screen.
                </p>
                <p>
                  Lotus365 is another book. Some desks issue both. Ask WhatsApp before you deposit twice. Do not send a Lotus365 password to anyone who claims they can migrate it.
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
                  Fairplay payouts usually take about 180 minutes after the official result if KYC is complete. Lotus365 timing is that desk’s. Open markets hold cash on both.
                </p>
              </div>
              
              <div className="glass-card p-10 rounded-[32px] border-primary/10">
                <h3 className="text-2xl font-black italic uppercase mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-primary w-6 h-6" /> OTP
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fairplay login is mobile plus OTP. Help for this ID is the WhatsApp on this site. Lotus365 support is a different number.
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
                Message WhatsApp on this site. Log in with that mobile number and OTP, then deposit with UPI. KYC can still hold a first withdrawal.
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
            className="mb-20"
          >
            <h2 className="text-3xl font-black italic uppercase mb-4 flex items-center gap-3">
              <Star className="text-primary w-8 h-8" /> Fairplay vs Lotus365 reviews
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">
              Four players who already held Lotus365 and then opened a Fairplay ID on this site. They mention OTP login, UPI UTRs, and payouts that usually take about 180 minutes after settlement.
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
              <HelpCircle className="text-primary w-8 h-8" /> Comparison: Lotus 365 FAQ
            </h3>
            <div className="grid gap-6">
              {[
                {
                  q: "Is a Lotus365 ID the same as Fairplay?",
                  a: "No. Open a Fairplay ID on WhatsApp. Do not send your Lotus365 password to anyone who claims they can migrate it."
                },
                {
                  q: "How do Fairplay withdrawals compare?",
                  a: "After the official result, Fairplay payouts usually take about 180 minutes. KYC can add a wait on either book."
                },
                {
                  q: "Do I need a new ID if I already have Lotus365?",
                  a: "Yes for this site. Log in with that mobile number and OTP."
                },
                {
                  q: "Can I keep both books?",
                  a: "Some desks issue both. Ask WhatsApp before you deposit twice. Cricket on this site uses the Fairplay login."
                },
                {
                  q: "Where do I get help?",
                  a: "Use the WhatsApp number on this site for Fairplay. Lotus365 support is a separate desk."
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
                WhatsApp this site. Ask before you fund Lotus365 as a second wallet.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href={waLink("Hello Fairplay! I read the Lotus365 page and want a Fairplay ID.")}
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
