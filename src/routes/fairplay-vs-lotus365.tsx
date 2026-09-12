import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { ReviewedBadge } from '@/components/ReviewedBadge'
import { CONTENT_REVIEWED } from '@/lib/content-review-dates'
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

const customerReviews = [
  {
    name: "Rohan Mehta",
    location: "Mumbai",
    rating: 5,
    date: "August 2026",
    title: "Withdrawals actually hit on time",
    body: "I ran a Lotus365 account for almost a year before a friend pushed me to try Fairplay during the IPL season. The odds on the exchange side were noticeably tighter, and my first withdrawal after a match landed in about three hours, right around what they advertise. Lotus365 never gave me a clear number to expect, it was just whenever it came."
  },
  {
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    date: "July 2026",
    title: "WhatsApp signup saved me a headache",
    body: "Signing up for Lotus365 meant filling out a form and uploading documents before I could even see the odds. With Fairplay I messaged the WhatsApp number, got my ID within a minute, and logged in with OTP. Small thing, but when you're trying to catch odds before a toss, that speed matters."
  },
  {
    name: "Arjun Nair",
    location: "Bangalore",
    rating: 4,
    date: "June 2026",
    title: "Better live tables, still learning the exchange side",
    body: "I mostly play live casino and Fairplay's tables feel less crowded than what I was used to on Lotus365, with more Indian dealer games specifically. Took me a few sessions to understand how the cricket exchange pricing works compared to a straight bookmaker line, but support answered my questions on WhatsApp without making me wait."
  },
  {
    name: "Sanjay Verma",
    location: "Pune",
    rating: 5,
    date: "May 2026",
    title: "Switched over and haven't looked back",
    body: "My KYC on Lotus365 got stuck for days with no real explanation. When I opened a Fairplay ID instead, verification was quick and someone actually confirmed it over WhatsApp. I still check both sites for cricket prices, but Fairplay is where my money sits now."
  }
]

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
    fairplay: "500+ Live Dealer tables including Indian live tables.",
    lotus365: "300+ tables, primarily slots focused.",
    winner: "fairplay"
  },
  {
    feature: "Support",
    fairplay: "24/7 WhatsApp on this site.",
    lotus365: "Standard in-app live chat support.",
    winner: "fairplay"
  }
]

function ComparisonPage() {
  return (
    <div className="flex flex-col bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,185,74,0.08),transparent_70%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-8">
              <Swords className="w-4 h-4" /> Comparison: The 2026 Benchmark
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              FAIRPLAY <span className="text-white/20 font-light not-italic">VS</span> <span className="text-primary not-italic">LOTUS 365</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 font-medium">
              Lotus365 is a separate login. Open a Fairplay ID on WhatsApp, fund with UPI, and withdraw about 180 minutes after the official result.
            </p>
          </motion.div>

          <div className="mb-8 flex justify-center">
            <ReviewedBadge iso={CONTENT_REVIEWED["/fairplay-vs-lotus365"]} />
          </div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview
              title="Fairplay vs Lotus365"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="min-h-screen pb-24 px-4 bg-[#0D1424] selection:bg-primary/30">
        <div className="max-w-6xl mx-auto pt-16">
          {/* Comparison Table */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card overflow-hidden border-primary/20 mb-20 rounded-xl"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-8 text-sm font-black uppercase tracking-widest text-white/40">Feature</th>
                    <th className="p-8 text-lg font-bold tracking-tight text-primary">Fairplay</th>
                    <th className="p-8 text-lg font-bold tracking-tight text-white/60">Lotus 365</th>
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
              className="glass-card p-10 rounded-xl border-primary/10"
            >
              <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-3">
                <TrendingUp className="text-primary w-8 h-8" /> In-Depth Market Analysis: Odds & Liquidity
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
                <p>
                  Fairplay cricket books match on an exchange. Confirm the slip on IPL nights. Lotus365 is a separate bookmaker-style desk — do not reuse that password here. 
                </p>
                <p>
                  Lotus365 margins and payout clocks are that desk’s rules. On Fairplay, withdrawals usually follow about 180 minutes after settlement if KYC is clear.
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
                  <Clock className="text-primary w-6 h-6" /> Seamless Payout Infrastructure
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fairplay payouts usually take about 180 minutes after the official result. Lotus365 timing is whatever that desk publishes — do not assume the same window.
                </p>
              </div>
              
              <div className="glass-card p-10 rounded-xl border-primary/10">
                <h3 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-primary w-6 h-6" /> Trust & Transparency
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  OTP stays on your phone. WhatsApp the published number if a login looks wrong. Telegram is for fixture notes, not deposits.
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
                <Smartphone className="text-primary w-6 h-6" /> How you open a Fairplay ID
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Message WhatsApp for a Fairplay ID, then log in with OTP. Do not send a Lotus365 password to anyone who claims they can migrate it.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-white/5">
                {[
                  { label: "Verification", value: "Human-Validated" },
                  { label: "Activation", value: "60 Seconds" },
                  { label: "Support", value: "24/7 WhatsApp" }
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-[10px] font-black uppercase tracking-widest text-primary/60">{stat.label}</div>
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Customer Reviews */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-xl border-primary/10 mb-20"
          >
            <h3 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-3">
              <Star className="text-primary w-8 h-8 fill-primary" /> Player Reviews: Fairplay vs Lotus365
            </h3>
            <p className="text-muted-foreground mb-8 pl-11">
              Real feedback from bettors who have used both platforms for cricket and live casino.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {customerReviews.map((review, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, starIdx) => (
                        <Star
                          key={starIdx}
                          className={`w-4 h-4 ${starIdx < review.rating ? "text-primary fill-primary" : "text-white/10"}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-white/30 font-medium">{review.date}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{review.title}</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">{review.body}</p>
                  <div className="text-sm font-bold text-white/70">
                    {review.name} <span className="text-white/30 font-normal">— {review.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-xl border-primary/10 mb-20"
          >
            <h3 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-3">
              <HelpCircle className="text-primary w-8 h-8" /> Comparison: Lotus 365 — FAQ
            </h3>
            <div className="grid gap-6">
              {[
                {
                  q: "Is Fairplay better than Lotus 365 for IPL betting?",
                  a: "Fairplay is an exchange-style cricket ID. Lotus365 is a separate book. Confirm IPL prices on the Fairplay slip after you log in."
                },
                {
                  q: "Which platform has faster withdrawals, Fairplay or Lotus 365?",
                  a: "Fairplay payouts usually take about 180 minutes after settlement. Lotus365 timing is a separate desk."
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
                  a: "Fairplay uses OTP login and SSL on this site and a decentralized support model. While both platforms are secure, WhatsApp the published number if a login looks wrong. Never share OTP."
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
                WhatsApp for a Fairplay ID, fund with UPI, then withdraw about 180 minutes after the official result.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href={waLink("Hello Fairplay! I've seen the Lotus365 comparison and want to get started with a Fairplay ID.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-12 py-5 bg-primary text-primary-foreground rounded-2xl font-bold tracking-tight tracking-[0.2em] hover:shadow-[0_0_40px_rgba(47,185,74,0.6)] transition-all flex items-center justify-center gap-3"
                >
                  <Zap className="w-5 h-5 fill-current" /> Get a Fairplay ID
                </a>
                <Link 
                  to="/services"
                  className="px-12 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-bold tracking-tight tracking-[0.2em] hover:bg-white/10 transition-all flex items-center justify-center gap-3"
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
