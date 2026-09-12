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
  Flame,
  Star
} from 'lucide-react'
import { waLink } from "@/lib/whatsapp";

export const Route = createFileRoute('/fairplay-vs-laser247')({
  component: ComparisonPage,
  head: () => pageHeadFor('/fairplay-vs-laser247'),
})

const customerReviews = [
  {
    name: "Nikhil Bansal",
    location: "Ludhiana",
    rating: 5,
    date: "August 2026",
    title: "Fewer 'price changed' errors during overs",
    body: "In-play cricket on Laser247 kept throwing price changed errors right when I tapped to confirm, usually during a boundary or a wicket when odds move fast. Fairplay hasn't given me that problem in the matches I've bet on since June. Confirming the slip still matters, but the prices actually hold long enough to act on them."
  },
  {
    name: "Divya Menon",
    location: "Coimbatore",
    rating: 5,
    date: "July 2026",
    title: "App doesn't drain my battery anymore",
    body: "Laser247's app used to eat through my phone's battery during a three hour match and eat data too. Fairplay feels much lighter, I can watch and bet through a full IPL game without my phone getting hot or my data plan taking a hit. Small detail, but it's the kind of thing you notice after enough matches."
  },
  {
    name: "Amitabh Roy",
    location: "Kolkata",
    rating: 4,
    date: "June 2026",
    title: "Payout came in under the promised window",
    body: "I was skeptical of the 180 minute payout claim, since Laser247 always needed extra manual verification that stretched things out. My first Fairplay withdrawal after a settled match arrived in a little over two hours. KYC was already done, which I assume helped."
  },
  {
    name: "Tanvi Joshi",
    location: "Nashik",
    rating: 5,
    date: "May 2026",
    title: "Got in before the second innings started",
    body: "I messaged the Fairplay WhatsApp number during the innings break and had my ID ready before the second innings started. Laser247 registration took me through several screens and a wait for verification the first time I signed up there. Support answered a question about my slip within a few minutes over WhatsApp too."
  }
]

const comparisonData = [
  {
    feature: "Engine Latency",
    fairplay: "In-play books update while the match is live. Check the slip.",
    laser247: "Standard 500ms+ refresh; prone to 'Price Changed' errors.",
    winner: "fairplay"
  },
  {
    feature: "Liquidity Pool",
    fairplay: "Tier-1 Global Aggregation (Cricket, Football, Tennis).",
    laser247: "Local network sharing; limited depth for large stakes.",
    winner: "fairplay"
  },
  {
    feature: "Withdrawal System",
    fairplay: "Payouts usually about 180 minutes after settlement.",
    laser247: "Semi-automated; requires manual verification steps.",
    winner: "fairplay"
  },
  {
    feature: "Mobile Performance",
    fairplay: "Optimized PWA/Native experience; zero bloat.",
    laser247: "Heavy web-wrappers; high battery & data consumption.",
    winner: "fairplay"
  },
  {
    feature: "WhatsApp desk",
    fairplay: "24/7 WhatsApp on this site.",
    laser247: "Hybrid Bot/Agent support with varying response times.",
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
              <Swords className="w-4 h-4" /> Fairplay compared with Laser247
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              FAIRPLAY <span className="text-white/20 font-light not-italic">VS</span> <span className="text-primary not-italic">LASER247</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 font-medium">
              Fairplay is a separate login. Message WhatsApp on this site; do not reuse a Laser247 password here. Confirm in-play prices on the slip.
            </p>
          </motion.div>

          <div className="mb-8 flex justify-center">
            <ReviewedBadge iso={CONTENT_REVIEWED["/fairplay-vs-laser247"]} />
          </div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview
              title="Performance Benchmark Audit"
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
                    <th className="p-8 text-lg font-bold tracking-tight text-white/60">Laser247</th>
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
                          <Flame className="w-5 h-5 text-white/10 shrink-0 mt-0.5" />
                          <span>{row.laser247}</span>
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
              className="glass-card p-10 rounded-xl border-primary/10"
            >
              <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-3">
                <TrendingUp className="text-primary w-8 h-8" /> Infrastructure Benchmarking: Speed Matters
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
                <p>
                  In-play cricket moves quickly. On Fairplay you still confirm the price on the slip before you send — a delayed tap is a void or a worse price, not a slogan.
                </p>
                <p>
                  Laser247, while functional, often suffers from 'price latency' during peak IPL hours. This leads to the frustrating 'Price Changed' or 'Bet Rejected' errors that can cost professional bettors significant opportunities. On Fairplay you still confirm the price on the slip. A delayed tap is a void or a worse price.
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
                  Fairplay withdrawals usually take about 180 minutes after the official result. Laser247, if you use a linked book, has its own payout clock — ask that desk, do not mix UTRs.
                </p>
              </div>
              
              <div className="glass-card p-10 rounded-xl border-primary/10">
                <h3 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-primary w-6 h-6" /> Professional Grade Security
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  OTP stays on your phone. Laser247 is a different login unless the desk linked them.
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
                Transitioning to an Fairplay exchange should be effortless. Fairplay has streamlined the registration process to a 60-second WhatsApp verified ID activation. We've removed the friction of traditional forms, allowing you to jump straight into the action of your favorite leagues without the typical delays associated with legacy platforms like Laser247.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-white/5">
                {[
                  { label: "ID Activation", value: "60 Seconds" },
                  { label: "Market Access", value: "Instant" },
                  { label: "Support", value: "24/7 WhatsApp" }
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
              className="glass-card p-10 rounded-xl border-primary/10"
            >
              <h3 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-3">
                <Cpu className="text-primary w-6 h-6" /> Technical Scalability & Performance
              </h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  The 2026 betting landscape requires platforms that can handle millions of concurrent operations. Fairplay's React-based front-end and microservices back-end ensure that the platform remains snappy and responsive, even under extreme load. Laser247's legacy architecture often results in UI sluggishness during high-volume events, which can be the difference between a winning and losing trade.
                </p>
                <p>
                  Furthermore, our data integrity protocols ensure that every bet is settled fairly and transparently. We don't just provide an exchange; we provide a professional-grade trading environment for the most discerning sports enthusiasts.
                </p>
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
              <Star className="text-primary w-8 h-8 fill-primary" /> Player Reviews: Fairplay vs Laser247
            </h3>
            <p className="text-muted-foreground mb-8 pl-11">
              Real feedback from bettors who compared Fairplay with Laser247 during live matches.
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
              <HelpCircle className="text-primary w-8 h-8" /> Comparison: Laser247 — FAQ
            </h3>
            <div className="grid gap-6">
              {[
                {
                  q: "Is Fairplay better than Laser247 for high-stakes betting?",
                  a: "Fairplay is a separate login. Large IPL stakes still need the slip confirmed. Laser247 prices are that book’s liquidity."
                },
                {
                  q: "How fast are withdrawals on Fairplay vs Laser247?",
                  a: "Fairplay payouts usually take about 180 minutes after settlement. Laser247 timing is separate if you hold that ID."
                },
                {
                  q: "Do I need a new ID for Fairplay if I use Laser247?",
                  a: "Yes, you will need a verified Fairplay ID. The process is much faster—simply message our WhatsApp desk on WhatsApp and your account will be active in 60 seconds."
                },
                {
                  q: "Are the odds sharper on Fairplay?",
                  a: "Fairplay consistently offers tighter spreads and higher liquidity. Because we aggregate global volume, we can offer prices that localize networks like Laser247 simply cannot match."
                },
                {
                  q: "Is Fairplay more stable during the IPL finals?",
                  a: "Absolutely. Our infrastructure is built to handle extreme traffic spikes, ensuring that you have 100% uptime during the most critical moments of the match, whereas legacy platforms often experience lag or downtime."
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
                OPEN A <span className="text-primary">FAIRPLAY ID</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium">
                Fairplay is a separate login. Message WhatsApp on this site; do not reuse a Laser247 password here.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href={waLink("Hello Fairplay! I've seen the Laser247 comparison and want to upgrade to a Fairplay ID.")}
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
                  Explore Site Index <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    
      <FAQSection 
        title="Fairplay vs Laser247 FAQ"
        faqs={[
          { q: 'Do I need a new ID for Fairplay if I use Laser247?', a: 'Yes. Fairplay is a separate login. Message WhatsApp on this site; do not reuse a Laser247 password here.' },
          { q: 'Which book should I fund for IPL?', a: 'Use the Fairplay cricket ID for matches listed on this schedule. Laser247 is only if the desk issues a linked book.' },
          { q: 'Are in-play prices identical?', a: 'No. Each exchange has its own liquidity. Confirm the price on the slip before you send it.' },
          { q: 'How fast are Fairplay payouts?', a: 'Usually about 180 minutes after settlement. Pending KYC or an open market will delay that.' },
        ]}
      />
    </div>)
}
