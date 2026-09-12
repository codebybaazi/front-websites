import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Trophy, Target, Star, Shield, Zap, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { ReviewedBadge } from '@/components/ReviewedBadge'
import { CONTENT_REVIEWED } from '@/lib/content-review-dates'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/wpl-betting')({
  component: WPLBetting,
  head: () => pageHeadFor('/wpl-betting'),
})

function WPLBetting() {
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
              <Star className="w-4 h-4 fill-primary" /> Women's Premier League
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              WPL <span className="text-primary">betting</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              WPL on the same Fairplay cricket ID as IPL. Match winner, top batter and in-play sessions. Fund with UPI, then open the fixture from the schedule.
            </p>
            <ReviewedBadge iso={CONTENT_REVIEWED["/wpl-betting"]} className="justify-center" />
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="AI Overview: WPL Betting"
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
                  WPL markets
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Top run scorer', desc: 'Match or series batter books when Fairplay lists them.' },
                    { title: 'Powerplay score', desc: 'Early-over totals. Check the market name on the slip.' },
                    { title: 'Player of the match', desc: 'Standout performer when that book is up for the fixture.' },
                    { title: 'Boundary count', desc: 'Fours and sixes for the innings, if listed.' },
                    { title: 'In-play totals', desc: 'Session books once the innings is underway.' },
                    { title: 'Series winner', desc: 'Outright on the WPL trophy when the desk has it open.' },
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
                  <TrendingUp className="w-8 h-8 text-primary" />
                  How WPL sits on <span className="text-primary">Fairplay</span>
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Use the Fairplay cricket ID you already have. Deposit with UPI, then open the WPL fixture from the schedule. You do not need a second “WPL ID” from a chat. Payouts usually take about 180 minutes after the official result.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    <div className="space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2 tracking-tight text-sm">
                        <Zap className="w-4 h-4 text-primary" /> Before you stake
                      </h4>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                        <li>Confirm team names on the slip match the TV fixture.</li>
                        <li>Spin and venue still matter for session books.</li>
                        <li>Uncapped players can swing powerplay totals.</li>
                        <li>Keep a screenshot until the wallet updates.</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2 tracking-tight text-sm">
                        <Shield className="w-4 h-4 text-primary" /> Same cricket ID
                      </h4>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                        <li>WPL uses your existing Fairplay ID.</li>
                        <li>Set a session limit if you are grinding live books.</li>
                        <li>WhatsApp the ID if UPI or OTP sticks.</li>
                        <li>Withdraw after settlement — usually 180 minutes.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <div className="glass-card p-8 bg-primary/5 border-primary/20 sticky top-24">
                <Trophy className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold tracking-tight mb-4">WPL on a <span className="text-primary">Fairplay ID</span></h3>
                <p className="text-sm text-muted-foreground mb-8">
                  WhatsApp for the cricket ID, fund with UPI, then open tonight’s WPL book. Same login as IPL.
                </p>
                <div className="space-y-4">
                  <a 
                    href={waLink("Hi Fairplay, I want to get my WPL ID")}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold tracking-tight hover:bg-flame hover:text-flame-foreground transition-colors flex items-center justify-center"
                  >
                    Get Fairplay ID
                  </a>
                  <button className="w-full bg-white/5 border border-white/10 py-4 rounded-xl font-bold tracking-tight hover:bg-white/10 transition-all">
                    WPL live books
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <FAQSection 
        title="WPL betting FAQ"
        faqs={[
          { q: 'How do I open WPL markets on Fairplay?', a: 'Use the Fairplay cricket ID you already have. Deposit with UPI, then open the WPL fixture from the schedule.' },
          { q: 'Which WPL books are listed?', a: 'Match winner, top batter and in-play session books are typical. Availability depends on the fixture.' },
          { q: 'When do WPL withdrawals land?', a: 'After the official result, payouts usually take about 180 minutes. KYC can add a wait.' },
          { q: 'Can a bonus apply on WPL?', a: 'If a bonus is on your Fairplay ID, it may apply after wagering. Read the bonus page before you opt in.' },
        ]}
      />
    </div>)
}
