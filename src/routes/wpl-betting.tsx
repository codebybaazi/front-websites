import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Trophy, Target, Star, Shield, Zap, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/wpl-betting')({
  component: WPLBetting,
  head: () => pageHeadFor('/wpl-betting'),
})

function WPLBetting() {
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
              <Star className="w-4 h-4 fill-primary" /> Elite Women's Cricket
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              WPL <span className="text-primary not-italic">BETTING</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Elevate your WPL experience with Fairplay. Access specialized markets and premium odds for every match in the Women's Premier League 2026.
            </p>
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
                <h2 className="text-3xl font-black italic uppercase mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-primary" />
                  Premium WPL Markets
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Top Run Scorer', desc: 'Predict which elite batter will dominate the match.' },
                    { title: 'Powerplay Score', desc: 'Back your intuition on aggressive early-over starts.' },
                    { title: 'Player of the Match', desc: 'Identify the standout performer in every WPL clash.' },
                    { title: 'Boundary Count', desc: 'Bet on the frequency of 4s and 6s in the innings.' },
                    { title: 'In-Play Totals', desc: 'Dynamic session betting as the action unfolds live.' },
                    { title: 'Series Winner', desc: 'Early season predictions for the WPL champions.' },
                  ].map((market, i) => (
                    <div key={i} className="glass-card p-6 border-l-2 border-l-primary/30 hover:border-l-primary transition-all">
                      <h4 className="font-bold uppercase italic text-lg mb-2">{market.title}</h4>
                      <p className="text-sm text-muted-foreground">{market.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="glass-card p-8 md:p-12 border-primary/10">
                <h2 className="text-3xl font-black italic uppercase mb-6 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  Winning <span className="text-primary">Strategies</span>
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    The WPL has its own unique rhythm and data sets. Fairplay empowers you with insights into ground conditions, spin impact, and individual player momentum to help you make informed, elite bets.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    <div className="space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2 italic uppercase text-sm">
                        <Zap className="w-4 h-4 text-primary" /> Analytical Edge
                      </h4>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                        <li>Track recent form in international T20 leagues.</li>
                        <li>Evaluate spin-friendly pitches in WPL venues.</li>
                        <li>Assess the performance of uncapped Indian stars.</li>
                        <li>Monitor team balance after the latest auctions.</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2 italic uppercase text-sm">
                        <Shield className="w-4 h-4 text-primary" /> Secure Play
                      </h4>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                        <li>Ensure your Fairplay ID is fully verified.</li>
                        <li>Set session limits for responsible gaming.</li>
                        <li>Access 24/7 support for all WPL transactions.</li>
                        <li>Utilize secure UPI and Crypto payment methods.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <div className="glass-card p-8 bg-primary/5 border-primary/20 sticky top-24">
                <Trophy className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-black italic uppercase mb-4">WPL Elite <span className="text-primary">Access</span></h3>
                <p className="text-sm text-muted-foreground mb-8">
                  Don't just watch the WPL, be part of the elite community. Secure your Fairplay ID today and start winning.
                </p>
                <div className="space-y-4">
                  <a 
                    href={waLink("Hi Fairplay, I want to get my WPL ID")}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-black italic uppercase tracking-widest hover:shadow-[0_0_20px_rgba(255,100,0,0.4)] transition-all flex items-center justify-center"
                  >
                    GET WPL ID
                  </a>
                  <button className="w-full bg-white/5 border border-white/10 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                    WPL LIVE ODDS
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
