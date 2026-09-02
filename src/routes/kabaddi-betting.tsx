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
              <Star className="w-4 h-4 fill-primary" /> Pro Kabaddi on Fairplay
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              Kabaddi <span className="text-primary">betting</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Pro Kabaddi on the same Fairplay ID as cricket. Match winner, raids and tackles. Deposit once with UPI, then switch sports.
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
              <h2 className="text-3xl font-bold tracking-tight mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-primary" />
                Kabaddi markets
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Match winner', desc: 'Which side takes the mat — main book on your Fairplay ID.' },
                  { title: 'Total raid points', desc: 'Offensive totals when Fairplay lists the market.' },
                  { title: 'Total tackle points', desc: 'Defensive points for the match, if listed.' },
                  { title: 'Handicap', desc: 'Margin of team points. Check the line on the slip.' },
                  { title: 'Live in-play', desc: 'Raid-by-raid prices while the match is on.' },
                  { title: 'Top raider', desc: 'Star raider of the night when that book is up.' },
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
                PKL on a <span className="text-primary">Fairplay ID</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Use your Fairplay ID, fund the wallet, then open match winner, raids and tackles on the exchange. PKL sits on the same login as cricket. Payouts usually take about 180 minutes after the official result if KYC is clear.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                   <div className="space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2 tracking-tight text-sm">
                         <Zap className="w-4 h-4 text-primary" /> Before you stake
                      </h4>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                         <li>Check starting raiders before you take live books.</li>
                         <li>Head-to-head defence still moves tackle markets.</li>
                         <li>Injury news can void or recut some props.</li>
                         <li>Keep a screenshot until the wallet updates.</li>
                      </ul>
                   </div>
                   <div className="space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2 tracking-tight text-sm">
                         <Shield className="w-4 h-4 text-primary" /> Same Fairplay login
                      </h4>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                         <li>No separate kabaddi ID.</li>
                         <li>UPI in, 180-minute payouts after the result.</li>
                         <li>WhatsApp with ID and market name if a raid is void.</li>
                         <li>Desk has issued Fairplay IDs since 2017.</li>
                      </ul>
                   </div>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-8 bg-primary/5 border-primary/20 sticky top-24">
              <Crown className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold tracking-tight mb-4">Kabaddi on a <span className="text-primary">Fairplay ID</span></h3>
              <p className="text-sm text-muted-foreground mb-8">
                The mat is set. Use your Fairplay ID for Pro Kabaddi — same login as cricket.
              </p>
              <div className="space-y-4">
                <button className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold tracking-tight hover:bg-flame hover:text-flame-foreground transition-colors">
                  Get Fairplay ID
                </button>
                <button className="w-full bg-white/5 border border-white/10 py-4 rounded-xl font-bold tracking-tight hover:bg-white/10 transition-all">
                  Live mat books
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
