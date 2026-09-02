import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Swords, Trophy, Target, Star, Shield, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/ipl-betting')({
  component: IPLBetting,
  head: () => pageHeadFor('/ipl-betting'),
})

function IPLBetting() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
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
              <Star className="w-4 h-4 fill-primary" /> Season 2026
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              IPL <span className="text-primary">betting 2026</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 font-medium">
              Match winner, toss, fancy sessions and in-play on Fairplay. Use a cricket ID, fund with UPI, and open the fixture from the schedule.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto mb-12 px-4">
            <AIOverview title="AI Overview: Ipl Betting" />
          </div>
        </div>
      </section>

      <main className="container max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold tracking-tight mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-primary" />
                  IPL 2026 markets
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Match winner', desc: 'Who wins the IPL fixture — the main cricket book on a Fairplay ID.' },
                    { title: 'Toss winner', desc: 'Short book before the first ball. Odds move fast after the toss.' },
                    { title: 'Fancy / sessions', desc: 'Over-by-over and innings totals. Check the market name on the slip.' },
                    { title: 'Top batter', desc: 'Orange-cap style books for the match or the season, when listed.' },
                    { title: 'Top bowler', desc: 'Wicket books for the night. Same Fairplay cricket ID as match winner.' },
                    { title: 'Live in-play', desc: 'Prices after the innings start. Wait a few overs if you are new.' },
                  ].map((market, i) => (
                    <div key={i} className="glass-card p-6 border-l-2 border-l-primary/30 hover:border-l-primary transition-all">
                      <h4 className="font-bold tracking-tight text-lg mb-2">{market.title}</h4>
                      <p className="text-sm text-muted-foreground">{market.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="glass-card p-8 md:p-12 border-primary/10">
                <h2 className="text-3xl font-bold tracking-tight mb-6">How to bet IPL on <span className="text-primary">Fairplay</span></h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Get a Fairplay ID, deposit with UPI, then open the IPL fixture from the 2026 schedule or the sports exchange. Start with match winner. Fancy and in-play make more sense after you have seen one settlement. Stakes often start at ₹10.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    <div className="space-y-4">
                      <h3 className="font-bold text-foreground flex items-center gap-2 tracking-tight">
                        <Zap className="w-4 h-4 text-primary" /> Before you stake
                      </h3>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                        <li>Confirm the team names on the Fairplay slip match the TV fixture.</li>
                        <li>Check toss and playing XI if you are betting sessions.</li>
                        <li>Keep a screenshot until the wallet updates.</li>
                        <li>Use the same cricket ID — do not buy a second “IPL ID” from chats.</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-bold text-foreground flex items-center gap-2 tracking-tight">
                        <Shield className="w-4 h-4 text-primary" /> Limits
                      </h3>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                        <li>Only stake what you can lose on a single IPL night.</li>
                        <li>If a deposit is pending, do not pay twice — see deposit issues.</li>
                        <li>Withdraw after the market settles, usually within 180 minutes.</li>
                        <li>WhatsApp the ID if login or UPI gets stuck.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <div className="glass-card p-8 bg-primary/5 border-primary/20 sticky top-24">
                <Trophy className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold tracking-tight mb-4">IPL on a <span className="text-primary">Fairplay ID</span></h3>
                <p className="text-sm text-muted-foreground mb-8">
                  WhatsApp for the ID, fund with UPI, then open tonight’s IPL book. Same cricket ID as T20 and Test. Desk since 2017.
                </p>
                <div className="space-y-4">
                  <a
                    href={waLink("Hi Fairplay, I want an IPL cricket ID")}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold tracking-tight hover:bg-flame hover:text-flame-foreground transition-colors flex items-center justify-center"
                  >
                    Get Fairplay ID
                  </a>
                  <Link to="/schedule" className="w-full bg-white/5 border border-white/10 py-4 rounded-xl font-bold tracking-tight hover:bg-white/10 transition-all flex items-center justify-center">
                    2026 schedule
                  </Link>
                  <Link to="/betting" search={{ category: 'cricket' }} className="w-full bg-white/5 border border-white/10 py-4 rounded-xl font-bold tracking-tight hover:bg-white/10 transition-all flex items-center justify-center">
                    Cricket exchange
                  </Link>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <p className="text-[10px] text-muted-foreground tracking-tight font-bold">WhatsApp from this site only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    
      <FAQSection 
        title="IPL betting questions"
        faqs={[
          { q: 'How do I start IPL betting on Fairplay?', a: 'Get a Fairplay ID on WhatsApp, deposit with UPI, then open the IPL match on the exchange or from the schedule. Match winner is the usual first market.' },
          { q: 'What IPL markets are on Fairplay?', a: 'Match winner, toss, fancy sessions, top batter or bowler when listed, and in-play. All of them use the same cricket ID.' },
          { q: 'What is the minimum stake?', a: 'Most IPL books on Fairplay accept stakes from about ₹10. Size up only after you have seen one payout settle.' },
          { q: 'Do I need a separate IPL ID?', a: 'No. IPL betting uses your Fairplay cricket ID. Anyone selling a “special IPL ID” in a random chat is not this site.' },
        ]}
      />
    </div>)
}
