import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { CircleDashed as Basketball, Trophy, Target, Star, Shield, Zap, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { ReviewedBadge } from '@/components/ReviewedBadge'
import { CONTENT_REVIEWED } from '@/lib/content-review-dates'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/basketball-betting')({
  component: BasketballBetting,
  head: () => pageHeadFor('/basketball-betting'),
})

function BasketballBetting() {
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
              <Star className="w-4 h-4 fill-primary" /> NBA on the cricket ID
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              Basketball <span className="text-primary">betting</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              NBA and listed leagues on the same Fairplay ID as cricket. Moneyline, spread and totals. Deposit with UPI, cash out after the official result.
            </p>
            <ReviewedBadge iso={CONTENT_REVIEWED["/basketball-betting"]} className="mb-12 justify-center" />
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
              <h2 className="text-3xl font-bold tracking-tight mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-primary" />
                Basketball markets
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Moneyline', desc: 'Outright winner on your Fairplay ID.' },
                  { title: 'Point spread', desc: 'Margin of victory. Check the line on the slip.' },
                  { title: 'Total points', desc: 'Over/under on the combined score when listed.' },
                  { title: 'Quarter / half', desc: 'Period books if Fairplay has them open.' },
                  { title: 'Player props', desc: 'Points, rebounds and assists when the desk lists them.' },
                  { title: 'Live in-play', desc: 'Prices while the game is on. Same wallet as cricket.' },
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
                Basketball on a <span className="text-primary">Fairplay ID</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Basketball sits on the same Fairplay ID as cricket. Deposit, then open moneyline, spread or totals. If basketball is listed on your ID, it uses the same login and UPI wallet. Payouts usually take about 180 minutes after the official result.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                   <div className="space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2 tracking-tight text-sm">
                         <Zap className="w-4 h-4 text-primary" /> Before you stake
                      </h4>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                         <li>Injury reports can recut spreads late.</li>
                         <li>Back-to-backs still matter for totals.</li>
                         <li>Confirm team names on the slip match the TV game.</li>
                         <li>Keep a screenshot until the wallet updates.</li>
                      </ul>
                   </div>
                   <div className="space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2 tracking-tight text-sm">
                         <Shield className="w-4 h-4 text-primary" /> Same cricket desk
                      </h4>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                         <li>No NBA-only registration.</li>
                         <li>UPI in, 180-minute payouts after the result.</li>
                         <li>WhatsApp ID and match name if a spread is void.</li>
                         <li>Fairplay IDs from this desk since 2017.</li>
                      </ul>
                   </div>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-8 bg-primary/5 border-primary/20 sticky top-24">
              <Basketball className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold tracking-tight mb-4">Hoops on a <span className="text-primary">Fairplay ID</span></h3>
              <p className="text-sm text-muted-foreground mb-8">
                WhatsApp for the cricket ID, fund with UPI, then open basketball if the desk lists it.
              </p>
              <div className="space-y-4">
                <a 
                  href={waLink("Hi Fairplay, I want to get my Basketball ID")}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center bg-primary text-primary-foreground py-4 rounded-xl font-bold tracking-tight hover:bg-flame hover:text-flame-foreground transition-colors"
                >
                  Get Fairplay ID
                </a>
                <button className="w-full bg-white/5 border border-white/10 py-4 rounded-xl font-bold tracking-tight hover:bg-white/10 transition-all">
                  View NBA books
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
