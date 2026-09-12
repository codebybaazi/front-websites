import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Landmark as Trophy, Target, Star, Shield, Zap, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { ReviewedBadge } from '@/components/ReviewedBadge'
import { CONTENT_REVIEWED } from '@/lib/content-review-dates'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/champions-trophy')({
  component: ChampionsTrophy,
  head: () => pageHeadFor('/champions-trophy'),
})

function ChampionsTrophy() {
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
              <Star className="w-4 h-4 fill-primary" /> ICC ODI cricket
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              Champions <span className="text-primary">Trophy</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Champions Trophy ODIs on the same Fairplay cricket ID as IPL. Fund with UPI, open the fixture from the schedule, cash out after the official result.
            </p>
            <ReviewedBadge iso={CONTENT_REVIEWED["/champions-trophy"]} className="mb-12 justify-center" />
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="AI Overview: Champions Trophy"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 relative">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold tracking-tight mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-primary" />
                  Champions Trophy markets
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Tournament winner', desc: 'Back the nation on your Fairplay cricket ID when the outright is listed.' },
                    { title: 'Finalist nations', desc: 'Two sides in the final — check the market name on the slip.' },
                    { title: 'Top wicket taker', desc: 'Bowler of the tournament when Fairplay has that book open.' },
                    { title: 'Highest individual score', desc: 'Batter to post the biggest innings of the cup.' },
                    { title: 'Team sixes', desc: 'Which side hits the most sixes if the desk lists it.' },
                    { title: 'Live ball-by-ball', desc: 'In-play ODI books once the innings is underway.' },
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
                  ODI books on a <span className="text-primary">Fairplay ID</span>
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Open ODI books on the same Fairplay cricket ID you use for IPL. Fund with UPI first. Tournament-winner markets sit next to match books when the series is live. Payouts usually take about 180 minutes after the official result.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    <div className="space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2 tracking-tight text-sm">
                        <Zap className="w-4 h-4 text-primary" /> Before you stake
                      </h4>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                        <li>Middle overs and death bowling still move ODI totals.</li>
                        <li>Day/night weather can recut or void some books.</li>
                        <li>Confirm nations on the slip match the TV fixture.</li>
                        <li>Keep a screenshot until the wallet updates.</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2 tracking-tight text-sm">
                        <Shield className="w-4 h-4 text-primary" /> Same cricket ID
                      </h4>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                        <li>No second “Trophy ID” from a chat.</li>
                        <li>UPI deposits, 180-minute payouts after settlement.</li>
                        <li>WhatsApp if OTP or a credit is stuck.</li>
                        <li>Desk has issued Fairplay IDs since 2017.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <div className="glass-card p-8 bg-primary/5 border-primary/20 sticky top-24">
                <Trophy className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold tracking-tight mb-4">Champions Trophy <span className="text-primary">ID</span></h3>
                <p className="text-sm text-muted-foreground mb-8">
                  Same Fairplay cricket ID as IPL. WhatsApp to open it, UPI to fund it, then ODI books from the schedule.
                </p>
                <div className="space-y-4">
                  <a 
                    href={waLink("Hi Fairplay, I want to get my Champions Trophy ID")}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold tracking-tight hover:bg-flame hover:text-flame-foreground transition-colors flex items-center justify-center"
                  >
                    Get Fairplay ID
                  </a>
                  <button className="w-full bg-white/5 border border-white/10 py-4 rounded-xl font-bold tracking-tight hover:bg-white/10 transition-all">
                    Live ODI books
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <FAQSection 
        title="Champions Trophy FAQ"
        faqs={[
          { q: 'How do I bet the Champions Trophy on Fairplay?', a: 'Open ODI books on the same Fairplay cricket ID you use for IPL. Fund with UPI first.' },
          { q: 'Are tournament-winner markets listed?', a: 'When the series is live they usually appear next to match books. Check the schedule for the fixture.' },
          { q: 'When do ODI payouts land?', a: 'After the official result. Fairplay withdrawals usually take about 180 minutes.' },
          { q: 'Is this a different ID from IPL?', a: 'No. Champions Trophy uses the same Fairplay cricket ID and wallet.' },
        ]}
      />
    </div>)
}
