import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Globe, Trophy, Target, Star, Shield, Zap, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { ReviewedBadge } from '@/components/ReviewedBadge'
import { CONTENT_REVIEWED } from '@/lib/content-review-dates'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/t20-world-cup')({
  component: T20WorldCup,
  head: () => pageHeadFor('/t20-world-cup'),
})

function T20WorldCup() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-tight mb-8">
              <Globe className="w-4 h-4" /> ICC on the same cricket ID
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              T20 World Cup <span className="text-primary">betting</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              ICC T20 World Cup on Fairplay: match winner, top batter, sixes and live books. Same cricket ID you use for IPL.
            </p>
            <ReviewedBadge iso={CONTENT_REVIEWED["/t20-world-cup"]} className="justify-center" />
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview title="AI Overview: T20 World Cup" />
          </div>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto px-4 py-16">

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold tracking-tight mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-primary" />
                T20 World Cup markets
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Tournament winner', desc: 'Back the nation to lift the ICC T20 World Cup on your Fairplay cricket ID.' },
                  { title: 'Group stage', desc: 'Match winner and group books once the fixture is listed on the schedule.' },
                  { title: 'Top tournament scorer', desc: 'Outright on the batter who finishes with the most runs.' },
                  { title: 'Highest team total', desc: 'Which side posts the biggest innings of the cup.' },
                  { title: 'Most sixes', desc: 'Team or player sixes when Fairplay lists the market.' },
                  { title: 'Live in-play', desc: 'Session and ball-by-ball books while the World Cup match is live.' },
                ].map((market, i) => (
                  <div key={i} className="glass-card p-6 border-l-2 border-l-primary/30 hover:border-l-primary transition-all">
                    <h4 className="font-bold tracking-tight text-lg mb-2">{market.title}</h4>
                    <p className="text-sm text-muted-foreground">{market.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="glass-card p-8 md:p-12 border-primary/10">
              <h2 className="text-3xl font-bold tracking-tight mb-6 flex items-center gap-3">
                <Info className="w-8 h-8 text-primary" />
                Same Fairplay ID as <span className="text-primary">IPL</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  T20 World Cup betting on Fairplay uses the same cricket ID as IPL. Open ICC fixtures from the schedule, then match winner, top batter, sixes or live books. Deposit with UPI first — you do not need a second World Cup ID.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                   <div className="space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2 tracking-tight text-sm">
                         <Zap className="w-4 h-4 text-primary" /> Before you stake
                      </h4>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                         <li>Confirm the nations on the slip match the TV fixture.</li>
                         <li>Toss and XI still matter for session books.</li>
                         <li>Weather and DLS can void or recut some markets.</li>
                         <li>Keep a screenshot until the wallet updates.</li>
                      </ul>
                   </div>
                   <div className="space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2 tracking-tight text-sm">
                         <Shield className="w-4 h-4 text-primary" /> Same Fairplay ID
                      </h4>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                         <li>One cricket ID for IPL and the T20 World Cup.</li>
                         <li>UPI deposits and withdrawals after settlement.</li>
                         <li>Live books when the ICC match is in play.</li>
                         <li>WhatsApp if OTP or a payout is stuck.</li>
                      </ul>
                   </div>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-8 bg-primary/5 border-primary/20 sticky top-24">
              <Trophy className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold tracking-tight mb-4">T20 World Cup on Fairplay</h3>
              <p className="text-sm text-muted-foreground mb-8">
                Use your existing Fairplay cricket ID. Deposit with UPI, then open ICC matches from the schedule or the sports exchange.
              </p>
              <div className="space-y-4">
                <a
                  href={waLink("Hi Fairplay, I want a cricket ID for T20 World Cup")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-primary text-primary-foreground py-4 rounded-xl font-bold tracking-tight hover:bg-flame hover:text-flame-foreground transition-colors"
                >
                  Get a Fairplay ID
                </a>
                <Link
                  to="/schedule"
                  className="block w-full text-center bg-white/5 border border-white/10 py-4 rounded-xl font-bold tracking-tight hover:bg-white/10 transition-all"
                >
                  Open the schedule
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <FAQSection 
        title="T20 World Cup betting questions"
        faqs={[
          { q: 'How do I bet the T20 World Cup on Fairplay?', a: 'Use your existing Fairplay cricket ID, deposit with UPI, then open ICC matches on the exchange or from the schedule. You do not need a second World Cup ID.' },
          { q: 'Which T20 World Cup markets are listed?', a: 'Match winner, tournament winner, top scorer, sixes and live books when the fixture is up. Same style as IPL, different teams.' },
          { q: 'Minimum stake?', a: 'Often from ₹10 on main cricket books. Check the slip before you confirm.' },
          { q: 'Can I use the Fairplay app?', a: 'Yes. The same Fairplay ID follows you. Open T20 World Cup the same way you open IPL.' },
        ]}
      />
    </div>)
}
