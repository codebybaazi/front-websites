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
              <Star className="w-4 h-4 fill-primary" /> Same Fairplay wallet
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              Horse <span className="text-primary">racing</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Win, place and in-running on Indian and overseas cards. Fund the same Fairplay wallet you use for cricket. Payouts after the official result.
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
                <h2 className="text-3xl font-bold tracking-tight mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-primary" />
                  Racing markets
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Win / place / each-way', desc: 'Classic racing books on your Fairplay ID.' },
                    { title: 'Trifecta & exacta', desc: 'Top finishers in order when Fairplay lists them.' },
                    { title: 'Quinella', desc: 'First two in any order, if that market is up.' },
                    { title: 'Accumulators', desc: 'Chain race wins on the same Fairplay wallet.' },
                    { title: 'In-running exchange', desc: 'Back and lay as the race approaches the off.' },
                    { title: 'Overseas derbies', desc: 'International cards when the desk has them listed.' },
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
                  Racing on a <span className="text-primary">Fairplay ID</span>
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Fund the same Fairplay wallet you use for cricket, then open win, place or in-running before the off. Prices move to the jump. Late bets can be void if the race has started. Withdrawals usually settle within 180 minutes after the result is official.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    <div className="space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2 tracking-tight text-sm">
                        <Zap className="w-4 h-4 text-primary" /> Before the off
                      </h4>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                        <li>Confirm the race name on the slip.</li>
                        <li>Going (good, soft, heavy) still moves prices.</li>
                        <li>Jockey and form matter — so does the last-minute drift.</li>
                        <li>Keep a screenshot until the wallet updates.</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2 tracking-tight text-sm">
                        <Shield className="w-4 h-4 text-primary" /> Same cricket desk
                      </h4>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                        <li>UPI in, 180-minute payouts after the result.</li>
                        <li>WhatsApp ID, race name and stake if a race is void.</li>
                        <li>No second “racing ID” from a chat.</li>
                        <li>Fairplay IDs from this desk since 2017.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <div className="glass-card p-8 bg-primary/5 border-primary/20 sticky top-24">
                <Horse className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold tracking-tight mb-4">Racing on <span className="text-primary">Fairplay</span></h3>
                <p className="text-sm text-muted-foreground mb-8">
                  WhatsApp for a Fairplay ID, fund with UPI, then open the card. Same wallet as cricket.
                </p>
                <div className="space-y-4">
                  <a 
                    href={waLink("Hi Fairplay, I want to get my Racing ID")}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold tracking-tight hover:bg-flame hover:text-flame-foreground transition-colors flex items-center justify-center"
                  >
                    Get Fairplay ID
                  </a>
                  <button className="w-full bg-white/5 border border-white/10 py-4 rounded-xl font-bold tracking-tight hover:bg-white/10 transition-all">
                    Live track books
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
