import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Gamepad2, Trophy, Target, Star, Shield, Zap, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/esports-betting')({
  component: EsportsBetting,
  head: () => pageHeadFor('/esports-betting'),
})

function EsportsBetting() {
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
              <Star className="w-4 h-4 fill-primary" /> Next-Gen Action
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              eSPORTS <span className="text-primary not-italic">BETTING</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Join the revolution of digital gaming. Fairplay brings you the cutting-edge of eSports betting with markets for all major tournaments.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="AI Overview: Esports Betting"
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
                  Elite Gaming Markets
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Match Winner', desc: 'Predict the champion of any digital confrontation.' },
                    { title: 'Map/Round Winner', desc: 'Specific betting on map-by-map performance.' },
                    { title: 'Total Kills/Objectives', desc: 'Wager on the intensity of the engagement.' },
                    { title: 'Tournament Champion', desc: 'Long-term futures on the biggest global eSports stages.' },
                    { title: 'Live In-Play', desc: 'Real-time action betting for fast-paced gaming titles.' },
                    { title: 'Handicap Betting', desc: 'Level the playing field with map spread betting.' },
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
                  eSports <span className="text-primary">Mastery</span>
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    eSports betting is about speed, technical understanding, and meta-game awareness. Fairplay provides elite members with the tools to track team form, patch-note impacts, and player roster shifts.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    <div className="space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2 italic uppercase text-sm">
                        <Zap className="w-4 h-4 text-primary" /> Strategy Edge
                      </h4>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                        <li>Analyze team performance on specific map pools.</li>
                        <li>Monitor meta shifts following major game updates.</li>
                        <li>Evaluate individual player synergy and recent form.</li>
                        <li>Track recent LAN tournament performance data.</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2 italic uppercase text-sm">
                        <Shield className="w-4 h-4 text-primary" /> Trusted Platform
                      </h4>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                        <li>Instant bet verification and result settlement.</li>
                        <li>High-security environment for crypto/fiat transactions.</li>
                        <li>Global eSports coverage across major titles.</li>
                        <li>24/7 dedicated support for elite eSports fans.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <div className="glass-card p-8 bg-primary/5 border-primary/20 sticky top-24">
                <Gamepad2 className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-black italic uppercase mb-4">Elite Gaming <span className="text-primary">ID</span></h3>
                <p className="text-sm text-muted-foreground mb-8">
                  The game is on. Use your Fairplay ID for esports once the desk lists those books.
                </p>
                <div className="space-y-4">
                  <a 
                    href={waLink("Hi Fairplay, I want to get my eSports ID")}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-black italic uppercase tracking-widest hover:shadow-[0_0_20px_rgba(255,100,0,0.4)] transition-all flex items-center justify-center"
                  >
                    GET ESPORTS ID
                  </a>
                  <button className="w-full bg-white/5 border border-white/10 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                    LIVE GAMING ODDS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <FAQSection 
        title="Esports Betting FAQ"
        faqs={[
          { q: 'How do I open esports books on Fairplay?', a: 'Log in with your Fairplay ID, deposit with UPI, then open match and map markets in esports.' },
          { q: 'Which titles are usually listed?', a: 'Match and map markets appear when the desk lists them. If a title is missing, it is not on your ID yet.' },
          { q: 'Do esports bets settle like cricket?', a: 'Yes — after the official result. Withdrawals usually follow in about 180 minutes.' },
          { q: 'Can I use cricket bonus funds here?', a: 'Only if the bonus terms allow other sports. Read the bonus page; WhatsApp if the wallet still shows bonus locked.' },
        ]}
      />
    </div>)
}
