import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Landmark as Trophy, Target, Star, Shield, Zap, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/champions-trophy')({
  component: ChampionsTrophy,
  head: () => pageHeadFor('/champions-trophy'),
})

function ChampionsTrophy() {
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
              <Star className="w-4 h-4 fill-primary" /> The Mini World Cup
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              CHAMPIONS <span className="text-primary not-italic">TROPHY</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Elite international ODI cricket. Experience the Champions Trophy with the most competitive markets in the Fairplay network.
            </p>
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
                <h2 className="text-3xl font-black italic uppercase mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-primary" />
                  Tournament Exclusive Markets
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Champions Trophy Winner', desc: 'Back the nation to win the mini World Cup.' },
                    { title: 'Finalist Nations', desc: 'Predict the two teams that will clash in the grand final.' },
                    { title: 'Top Tournament Wicket Taker', desc: 'Identify the star bowler of the tournament.' },
                    { title: 'Highest Individual Score', desc: 'Bet on the batsman to post the most explosive innings.' },
                    { title: 'Team to Hit Most Sixes', desc: 'Back the nation with the most powerful hitters.' },
                    { title: 'Live Ball-by-Ball', desc: 'Experience the tension of ODI cricket with real-time odds.' },
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
                  <Info className="w-8 h-8 text-primary" />
                  Elite ODI <span className="text-primary">Strategy</span>
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    ODI cricket in the Champions Trophy requires a balance of stamina and aggression. Fairplay provides elite members with deep-dive analysis into team ODI records, middle-over strike rates, and death-over bowling efficiency.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    <div className="space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2 italic uppercase text-sm">
                        <Zap className="w-4 h-4 text-primary" /> Key Insights
                      </h4>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                        <li>Analyze middle-over scoring rates for top-tier nations.</li>
                        <li>Review bowling performance in powerplays vs death overs.</li>
                        <li>Monitor weather conditions impacting day/night ODIs.</li>
                        <li>Track recent ODI series form leading into the tournament.</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2 italic uppercase text-sm">
                        <Shield className="w-4 h-4 text-primary" /> Why Fairplay Elite?
                      </h4>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                        <li>High-stakes markets with maximum liquidity.</li>
                        <li>Dedicated tournament support for elite bettors.</li>
                        <li>Instant settlement on all international match results.</li>
                        <li>Secure, end-to-end encrypted betting environment.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <div className="glass-card p-8 bg-primary/5 border-primary/20 sticky top-24">
                <Trophy className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-black italic uppercase mb-4">Champions Trophy <span className="text-primary">ID</span></h3>
                <p className="text-sm text-muted-foreground mb-8">
                  Ready for international greatness? Secure your Fairplay Champions Trophy ID and join the winners.
                </p>
                <div className="space-y-4">
                  <a 
                    href={waLink("Hi Fairplay, I want to get my Champions Trophy ID")}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-black italic uppercase tracking-widest hover:shadow-[0_0_20px_rgba(255,100,0,0.4)] transition-all flex items-center justify-center"
                  >
                    GET TROPHY ID
                  </a>
                  <button className="w-full bg-white/5 border border-white/10 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                    LIVE ODI ODDS
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
