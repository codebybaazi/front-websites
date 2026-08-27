import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Landmark as Horse, Trophy, Target, Star, Shield, Zap, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/horse-racing')({
  component: HorseRacing,
  head: () => pageHeadFor('/horse-racing'),
})

function HorseRacing() {
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
              <Star className="w-4 h-4 fill-primary" /> Premium Turf Racing
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              HORSE <span className="text-primary not-italic">RACING</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Elite markets for international and domestic horse racing. Experience the speed of the exchange with Fairplay.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="AI Overview: Horse Racing"
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
                  Elite Turf Markets
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Win/Place/Each-Way', desc: 'The classic racing markets for outright and ranked finishers.' },
                    { title: 'Trifecta & Exacta', desc: 'Predict the top finishers in exact order for massive returns.' },
                    { title: 'Quinella', desc: 'Predict the first two finishers in any order.' },
                    { title: 'Accumulators', desc: 'Chain multiple race wins for elite-level profit potential.' },
                    { title: 'Live Exchange Odds', desc: 'Back and lay horses in real-time as the race approaches.' },
                    { title: 'International Derbies', desc: 'Direct access to the world\'s most prestigious horse races.' },
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
                  Professional Racing <span className="text-primary">Mastery</span>
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Horse racing demands analytical precision and an understanding of dynamic exchange odds. Fairplay provides elite members with the interface and data flow required to track form, ground conditions, and market sentiment.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    <div className="space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2 italic uppercase text-sm">
                        <Zap className="w-4 h-4 text-primary" /> Strategic Insights
                      </h4>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                        <li>Analyze horse form and past performance on specific tracks.</li>
                        <li>Monitor jockey records and recent winning streaks.</li>
                        <li>Evaluate track conditions (Good, Soft, Heavy) and their impact.</li>
                        <li>Track market moves in the final minutes before the jump.</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2 italic uppercase text-sm">
                        <Shield className="w-4 h-4 text-primary" /> Secure Exchange
                      </h4>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                        <li>Instant bet settlement for all verified horse racing wins.</li>
                        <li>Secure wallet integration for high-volume exchange play.</li>
                        <li>24/7 VIP support for international racing queries.</li>
                        <li>Transparent and fair exchange infrastructure.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <div className="glass-card p-8 bg-primary/5 border-primary/20 sticky top-24">
                <Horse className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-black italic uppercase mb-4">Elite Turf <span className="text-primary">Access</span></h3>
                <p className="text-sm text-muted-foreground mb-8">
                  The gates are opening. Secure your Fairplay Racing ID and enter the elite winner's circle.
                </p>
                <div className="space-y-4">
                  <a 
                    href={waLink("Hi Fairplay, I want to get my Racing ID")}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-black italic uppercase tracking-widest hover:shadow-[0_0_20px_rgba(255,100,0,0.4)] transition-all flex items-center justify-center"
                  >
                    GET RACING ID
                  </a>
                  <button className="w-full bg-white/5 border border-white/10 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                    LIVE TRACK ODDS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <FAQSection 
        title="Horse Racing FAQ"
        faqs={[
          { q: 'How do I bet horse racing on Fairplay?', a: 'Fund the same Fairplay wallet you use for cricket, then open win, place or in-running before the off.' },
          { q: 'When should I send a racing bet?', a: 'Prices move to the off. Confirm the slip; late bets can be void if the race has started.' },
          { q: 'How long do racing payouts take?', a: 'After the result is official, Fairplay withdrawals usually settle within 180 minutes.' },
          { q: 'Who do I message if a race is void?', a: 'WhatsApp with your Fairplay ID, race name and stake. Keep the slip screenshot.' },
        ]}
      />
    </div>)
}
