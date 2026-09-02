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
              <Star className="w-4 h-4 fill-primary" /> When the desk lists it
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              Esports <span className="text-primary">betting</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Match and map books on the same Fairplay ID as cricket — when the desk lists them. Deposit with UPI. If a title is missing, it is not on your ID yet.
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
                <h2 className="text-3xl font-bold tracking-tight mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-primary" />
                  Esports markets
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Match winner', desc: 'Who takes the series when Fairplay lists the fixture.' },
                    { title: 'Map / round winner', desc: 'Map-by-map books if they are on your ID.' },
                    { title: 'Kills / objectives', desc: 'Totals when the desk has those markets open.' },
                    { title: 'Tournament champion', desc: 'Outrights on listed events only.' },
                    { title: 'Live in-play', desc: 'In-play prices while the match is live.' },
                    { title: 'Handicap', desc: 'Map spread if Fairplay shows a line on the slip.' },
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
                  Esports on a <span className="text-primary">Fairplay ID</span>
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Log in with your Fairplay ID, deposit with UPI, then open match and map markets in esports. Titles appear when the desk lists them. Settlements follow the official result, same as cricket — withdrawals usually about 180 minutes later.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    <div className="space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2 tracking-tight text-sm">
                        <Zap className="w-4 h-4 text-primary" /> Before you stake
                      </h4>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                        <li>Confirm the event name on the slip.</li>
                        <li>Patch and roster news can recut map books.</li>
                        <li>If a title is missing, it is not on your ID yet.</li>
                        <li>Keep a screenshot until the wallet updates.</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-bold text-foreground flex items-center gap-2 tracking-tight text-sm">
                        <Shield className="w-4 h-4 text-primary" /> Same cricket desk
                      </h4>
                      <ul className="text-sm space-y-2 list-disc pl-4">
                        <li>Same Fairplay login as IPL.</li>
                        <li>UPI in, 180-minute payouts after the result.</li>
                        <li>Bonus funds only if the bonus page allows other sports.</li>
                        <li>WhatsApp the ID if a map market is void.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <div className="glass-card p-8 bg-primary/5 border-primary/20 sticky top-24">
                <Gamepad2 className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold tracking-tight mb-4">Esports on a <span className="text-primary">Fairplay ID</span></h3>
                <p className="text-sm text-muted-foreground mb-8">
                  The game is on. Use your Fairplay ID for esports once the desk lists those books.
                </p>
                <div className="space-y-4">
                  <a 
                    href={waLink("Hi Fairplay, I want to get my eSports ID")}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold tracking-tight hover:bg-flame hover:text-flame-foreground transition-colors flex items-center justify-center"
                  >
                    Get Fairplay ID
                  </a>
                  <button className="w-full bg-white/5 border border-white/10 py-4 rounded-xl font-bold tracking-tight hover:bg-white/10 transition-all">
                    Live gaming books
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
