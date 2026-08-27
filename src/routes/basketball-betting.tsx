import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { CircleDashed as Basketball, Trophy, Target, Star, Shield, Zap, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/basketball-betting')({
  component: BasketballBetting,
  head: () => pageHeadFor('/basketball-betting'),
})

function BasketballBetting() {
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
              <Star className="w-4 h-4 fill-primary" /> Elite Basketball
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              BASKETBALL <span className="text-primary not-italic">BETTING</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              From the NBA to international leagues, experience elite basketball betting with Fairplay's dynamic markets.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="AI Overview: Basketball Betting"
            />
          </div>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-black italic uppercase mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-primary" />
                Premium Basketball Markets
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Moneyline', desc: 'The classic bet on the outright winner of the game.' },
                  { title: 'Point Spread', desc: 'Bet on the margin of victory for your favored team.' },
                  { title: 'Total Points (Over/Under)', desc: 'Predict if the combined score will be above or below the line.' },
                  { title: 'Quarter/Half Markets', desc: 'Break down the action for fast-paced betting.' },
                  { title: 'Player Props', desc: 'Specific betting on player points, rebounds, and assists.' },
                  { title: 'Live In-Play', desc: 'Action-packed, real-time odds updates during the game.' },
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
                Elite Betting <span className="text-primary">Insights</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Basketball betting requires staying on top of rapid-fire data. Fairplay delivers an elite environment where players can monitor squad health, travel fatigue, and individual performance stats to make confident decisions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                   <div className="space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2 italic uppercase text-sm">
                         <Zap className="w-4 h-4 text-primary" /> Key Strategies
                      </h4>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                         <li>Analyze home-court advantage in long NBA seasons.</li>
                         <li>Monitor injury reports and last-minute lineup changes.</li>
                         <li>Review back-to-back game fatigue for visiting teams.</li>
                         <li>Identify favorable pace-of-play matchups.</li>
                      </ul>
                   </div>
                   <div className="space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2 italic uppercase text-sm">
                         <Shield className="w-4 h-4 text-primary" /> Why Fairplay
                      </h4>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                         <li>Deep liquidity for international league markets.</li>
                         <li>Lightning-fast live odds for in-play betting.</li>
                         <li>Reliable and secure payouts for big basketball wins.</li>
                         <li>Dedicated support for high-stakes basketball markets.</li>
                      </ul>
                   </div>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-8 bg-primary/5 border-primary/20 sticky top-24">
              <Basketball className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-black italic uppercase mb-4">Hoops Elite <span className="text-primary">Access</span></h3>
              <p className="text-sm text-muted-foreground mb-8">
                Ready to dominate the paint? Get your elite Fairplay basketball ID today.
              </p>
              <div className="space-y-4">
                <a 
                  href={waLink("Hi Fairplay, I want to get my Basketball ID")}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center bg-primary text-primary-foreground py-4 rounded-xl font-black italic uppercase tracking-widest hover:shadow-[0_0_20px_rgba(255,100,0,0.4)] transition-all"
                >
                  GET BASKETBALL ID
                </a>
                <button className="w-full bg-white/5 border border-white/10 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                  VIEW NBA ODDS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <FAQSection 
        title="Basketball Betting FAQ"
        faqs={[
          { q: 'How do I bet basketball on Fairplay?', a: 'Basketball sits on the same Fairplay ID as cricket. Deposit, then open moneyline, spread or totals.' },
          { q: 'Do I need NBA-only registration?', a: 'No. If basketball is listed on your ID, it uses the same login and UPI wallet.' },
          { q: 'When do basketball withdrawals pay?', a: 'After the official result. Fairplay payouts usually take about 180 minutes.' },
          { q: 'What if a spread is voided?', a: 'Void markets return the stake. WhatsApp with the Fairplay ID and match name if the slip is still open.' },
        ]}
      />
    </div>)
}
