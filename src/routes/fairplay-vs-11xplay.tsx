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

export const Route = createFileRoute('/fairplay-vs-11xplay')({
  component: ComparisonPage,
  head: () => pageHeadFor('/fairplay-vs-11xplay'),
})

const customerReviews = [
  {
    name: "Yash Thakur",
    location: "Dehradun",
    rating: 5,
    date: "August 2026",
    title: "Bets go through even on big overs",
    body: "I'd get the occasional bet rejected notification on 11xplay when I tried to place something sizeable during a run chase. On Fairplay, the same size bets have matched instantly every time this season, including a heavy stake during the IPL final. That reliability is what keeps me coming back."
  },
  {
    name: "Ritika Chawla",
    location: "Amritsar",
    rating: 5,
    date: "July 2026",
    title: "Withdrawal landed while I was still watching the highlights",
    body: "11xplay's manual verification meant I'd sometimes wait several hours for a withdrawal to clear. My last two Fairplay payouts came through in under three hours after the match ended, straight to my UPI. I didn't have to follow up with anyone either time."
  },
  {
    name: "Harshad Patil",
    location: "Pune",
    rating: 4,
    date: "June 2026",
    title: "Comfortable with how login works",
    body: "I keep my betting activity to myself, and Fairplay's OTP login gives me that without extra steps. 11xplay was fine too, but Fairplay felt a bit more locked down when I compared the two side by side over a month. Support on WhatsApp cleared up a question I had about a settled bet within minutes."
  },
  {
    name: "Sneha Kulkarni",
    location: "Nagpur",
    rating: 5,
    date: "May 2026",
    title: "Registered during a rain delay and was ready by resumption",
    body: "There was a rain delay during a match I wanted to bet on, so I messaged the Fairplay WhatsApp number out of curiosity and had my ID within a minute. By the time play resumed I was already logged in with OTP. 11xplay's signup, when I tried it earlier in the year, took longer because of the verification queue."
  }
]

const comparisonData = [
  {
    feature: "Technology Stack",
    fairplay: "Next-gen proprietary low-latency architecture.",
    "11xplay": "Standard white-label betting software.",
    winner: "fairplay"
  },
  {
    feature: "Market Liquidity",
    fairplay: "Global aggregation with unlimited bet matching.",
    "11xplay": "Local market focus with restricted upper limits.",
    winner: "fairplay"
  },
  {
    feature: "Withdrawal Speed",
    fairplay: "Payouts usually about 180 minutes after settlement.",
    "11xplay": "Manual verification process (1-6 hours).",
    winner: "fairplay"
  },
  {
    feature: "Mobile Experience",
    fairplay: "Native-feel HD Progressive Web App.",
    "11xplay": "Standard mobile responsive website.",
    winner: "fairplay"
  },
  {
    feature: "WhatsApp help",
    fairplay: "WhatsApp on the published number for ID, UPI and payouts.",
    "11xplay": "Tiered loyalty points system.",
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
              <Swords className="w-4 h-4" /> Comparison: Power vs Standard
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              FAIRPLAY <span className="text-white/20 font-light not-italic">VS</span> <span className="text-primary not-italic">11XPLAY</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 font-medium">
              Ask WhatsApp if a Fairplay ID includes 11xplay. Do not assume the same password works on both. Install Fairplay from this site’s app page.
            </p>
          </motion.div>

          <div className="mb-8 flex justify-center">
            <ReviewedBadge iso={CONTENT_REVIEWED["/fairplay-vs-11xplay"]} />
          </div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview
              title="Partner comparison"
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
                    <th className="p-8 text-lg font-bold tracking-tight text-primary">Fairplay (Winner)</th>
                    <th className="p-8 text-lg font-bold tracking-tight text-white/60">11xplay</th>
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
                          <span>{row["11xplay"]}</span>
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
                <TrendingUp className="text-primary w-8 h-8" /> High-Intensity Market Liquidity
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
                <p>
                  In the fast-paced world of cricket betting, liquidity determines your success. Fairplay provides an Fairplay exchange environment that aggregates global liquidity, meaning you can place large bets without shifting the market or facing rejection. This depth is critical for professional bettors who require precision in their entries and exits.
                </p>
                <p>
                  11xplay, while a strong partner in the ecosystem, often relies on localized market pools. This can lead to lower liquidity on international matches and more frequent "bet rejected" notifications during peak IPL volatility. Fairplay's backend ensures your position is matched instantly, every time.
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
                  <Clock className="text-primary w-6 h-6" /> Instant Withdrawal Infrastructure
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We understand that trust is built on payouts. Fairplay's withdrawal engine is fully automated and integrated with major UPI and IMPS gateways, ensuring your winnings hit your account in minutes. 11xplay's manual verification queue, while safe, simply cannot compete with the 2026-grade speed of the Fairplay infrastructure.
                </p>
              </div>
              
              <div className="glass-card p-10 rounded-xl border-primary/10">
                <h3 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-primary w-6 h-6" /> Account privacy & Security
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Security at Fairplay goes beyond standard SSL. We employ OTP login and SSL on this site for all user communications and financial data. While 11xplay follows industry standards, Fairplay's commitment to account privacy ensures your betting activity remains completely confidential and secure from external threats.
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
                Message WhatsApp for a Fairplay ID, then log in with OTP. 11xplay is a separate book unless the desk says they linked both. Do not deposit twice hoping it lands on one wallet.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-white/5">
                {[
                  { label: "Verification", value: "WhatsApp OTP" },
                  { label: "Activation", value: "< 60 Seconds" },
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
              <Star className="text-primary w-8 h-8 fill-primary" /> Player Reviews: Fairplay vs 11xplay
            </h3>
            <p className="text-muted-foreground mb-8 pl-11">
              Real feedback from bettors who compared Fairplay with 11xplay for cricket betting.
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
              <HelpCircle className="text-primary w-8 h-8" /> FAQ: Fairplay vs 11xplay
            </h3>
            <div className="grid gap-6">
              {[
                {
                  q: "Is 11xplay a safe platform compared to Fairplay?",
                  a: "Both platforms are safe and verified partners. However, Fairplay offers a more advanced security architecture and a published WhatsApp desk for Fairplay ID, UPI and payout tickets."
                },
                {
                  q: "Which platform is better for live IPL betting?",
                  a: "Fairplay is superior for live betting due to its higher market liquidity and faster odds refresh rate. During high-intensity IPL matches, Fairplay ensures your bets are matched instantly without delay."
                },
                {
                  q: "Can I use my 11xplay ID on Fairplay?",
                  a: "No, you will need a separate verified Fairplay ID to access our Fairplay exchange. Registration is instant via WhatsApp and takes less than a minute."
                },
                {
                  q: "Do I get better bonuses on Fairplay?",
                  a: "Fairplay specializes in high-value reload bonuses and exclusive loyalty rewards for serious bettors, whereas 11xplay typically focuses on standard deposit matches."
                },
                {
                  q: "Why should I switch from 11xplay to Fairplay?",
                  a: "The primary reasons are speed and liquidity. If you value instant withdrawals, sharp odds, and a platform that never rejects a bet due to pool size, Fairplay is the natural upgrade."
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
                THE VERDICT: <span className="text-primary">FAIRPLAY</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium">
                Ready to experience the next generation of betting? Join Fairplay today and claim your a Fairplay ID.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href={waLink("Hello Fairplay! I've seen the 11xplay comparison and want to get started with a Fairplay ID.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-12 py-5 bg-primary text-primary-foreground rounded-2xl font-bold tracking-tight tracking-[0.2em] hover:shadow-[0_0_40px_rgba(47,185,74,0.6)] transition-all flex items-center justify-center gap-3"
                >
                  <Zap className="w-5 h-5 fill-current" /> Get a Fairplay ID
                </a>
                <Link 
                  to="/all-links"
                  className="px-12 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-bold tracking-tight tracking-[0.2em] hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                >
                  Explore More <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    
      <FAQSection 
        title="Fairplay vs 11xplay FAQ"
        faqs={[
          { q: 'Does one Fairplay ID include 11xplay?', a: 'Sometimes the desk issues a linked 11xplay book. Ask WhatsApp. Do not assume the same password works on both sites.' },
          { q: 'Where should I bet IPL?', a: 'Use the Fairplay cricket ID for fixtures on this schedule unless the desk told you to use 11xplay for a specific market.' },
          { q: 'Is the Fairplay app the 11xplay app?', a: 'No. Install Fairplay from this site’s app page. Third-party APKs are a common scam vector.' },
          { q: 'Who handles Fairplay KYC?', a: 'Fairplay KYC is through this WhatsApp desk. 11xplay verification, if any, is separate.' },
        ]}
      />
    </div>)
}
