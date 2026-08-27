import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Crown, Trophy, Target, Star, Shield, Zap, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
export const Route = createFileRoute('/kabaddi-betting')({
  component: KabaddiBetting,
  head: () => pageHeadFor('/kabaddi-betting'),
})

function KabaddiBetting() {
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
              <Star className="w-4 h-4 fill-primary" /> High-Intensity Action
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              KABADDI <span className="text-primary not-italic">BETTING</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Experience the fast-paced intensity of the mat. Fairplay brings you the most competitive kabaddi betting markets in the world.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="AI Overview: Kabaddi Betting"
            />
          </div>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto px-4 py-16">

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-black italic uppercase mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-primary" />
                Elite Mat Markets
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Match Winner', desc: 'Predict which team will dominate the mat.' },
                  { title: 'Total Raid Points', desc: 'Back the offensive prowess of your favorite team.' },
                  { title: 'Total Tackle Points', desc: 'Bet on defensive strength and key defensive moves.' },
                  { title: 'Handicap Betting', desc: 'Wager on the margin of total team points.' },
                  { title: 'Live In-Play', desc: 'Real-time odds for every raid, tackle, and point scored.' },
                  { title: 'Top Raider', desc: 'Identify the star offensive player of the match.' },
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
                Strategic Kabaddi <span className="text-primary">Play</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Kabaddi is a game of explosive speed and tactical discipline. Fairplay equips our elite bettors with the match analysis and squad data needed to predict outcomes with higher confidence.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                   <div className="space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2 italic uppercase text-sm">
                         <Zap className="w-4 h-4 text-primary" /> Elite Tactics
                      </h4>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                         <li>Track raiding form of key team captains.</li>
                         <li>Analyze historical head-to-head defensive discipline.</li>
                         <li>Monitor injury news and starting line-up rotations.</li>
                         <li>Watch for home-leg advantages in tournament formats.</li>
                      </ul>
                   </div>
                   <div className="space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2 italic uppercase text-sm">
                         <Shield className="w-4 h-4 text-primary" /> Fairplay Commitment
                      </h4>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                         <li>Real-time market updates during intense raid sessions.</li>
                         <li>Secure, fast settlements after every match result.</li>
                         <li>VIP concierge support for kabaddi betting events.</li>
                         <li>Trusted platform with a global reach.</li>
                      </ul>
                   </div>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-8 bg-primary/5 border-primary/20 sticky top-24">
              <Crown className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-black italic uppercase mb-4">Elite Kabaddi <span className="text-primary">ID</span></h3>
              <p className="text-sm text-muted-foreground mb-8">
                The mat is set. Use your Fairplay ID for Pro Kabaddi — same login as cricket.
              </p>
              <div className="space-y-4">
                <button className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-black italic uppercase tracking-widest hover:shadow-[0_0_20px_rgba(255,100,0,0.4)] transition-all">
                  GET KABADDI ID
                </button>
                <button className="w-full bg-white/5 border border-white/10 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                  LIVE MAT ODDS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <FAQSection 
        title="Kabaddi Betting FAQ"
        faqs={[
          { q: 'How do I bet Pro Kabaddi on Fairplay?', a: 'Use your Fairplay ID, fund the wallet, then open match winner, raids and tackles on the exchange.' },
          { q: 'Do I need a separate kabaddi ID?', a: 'No. PKL sits on the same Fairplay login as cricket. Deposit once, then switch sports.' },
          { q: 'When is a kabaddi payout released?', a: 'After the official result. Fairplay withdrawals usually take about 180 minutes if KYC is clear.' },
          { q: 'What if a raid market is void?', a: 'Void books return the stake. WhatsApp with your Fairplay ID and the market name if the slip still shows open.' },
        ]}
      />
    </div>)
}
