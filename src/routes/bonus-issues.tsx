import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { ShieldAlert, RefreshCw, HelpCircle, Shield, PhoneCall, Info, Star, Target, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { ReviewedBadge } from '@/components/ReviewedBadge'
import { CONTENT_REVIEWED } from '@/lib/content-review-dates'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/bonus-issues')({
  component: BonusIssues,
  head: () => pageHeadFor('/bonus-issues'),
})

function BonusIssues() {
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
              <Star className="w-4 h-4 fill-primary" /> Bonus on a Fairplay ID
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              Bonus <span className="text-primary">issues</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Bonus not credited, wagering unfinished, or a code that did not apply. Read the bonus page, then WhatsApp Fairplay ID and UTR. Unmet wagering is not a bug.
            </p>
            <ReviewedBadge iso={CONTENT_REVIEWED["/bonus-issues"]} className="justify-center" />
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="Fairplay bonus issues"
            />
          </div>
        </div>
      </section>

      {/* Main Support Content */}
      <section className="py-24 relative">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-none">
                Common bonus <br/><span className="text-primary">hold-ups</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-white tracking-tight mb-2">Wagering</h4>
                  <p className="text-sm">You cannot withdraw bonus money until the multiplier on the bonus page is done. Cricket fancy is often excluded.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-white tracking-tight mb-2">Promo code</h4>
                  <p className="text-sm">Most offers need the code on the deposit. If you forgot it, WhatsApp the Fairplay ID before you place the first bet.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-white tracking-tight mb-2">Excluded books</h4>
                  <p className="text-sm">Some markets do not count toward wagering. Check the bonus page before you grind WPL or casino.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square max-w-lg mx-auto w-full"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
              <div className="relative z-10 w-full h-full bg-linear-to-br from-white/10 to-transparent rounded-xl border border-white/10 p-1 flex items-center justify-center">
                <div className="bg-black/40 backdrop-blur-xl w-full h-full rounded-xl flex flex-col items-center justify-center p-12 text-center">
                  <ShieldAlert className="w-20 h-20 text-primary mb-8" />
                  <h3 className="text-3xl font-bold tracking-tight mb-4">WhatsApp the desk</h3>
                  <p className="text-muted-foreground mb-8">Send Fairplay ID, UTR and a screenshot. The desk can see if the deposit qualified — it cannot skip wagering.</p>
                  <a 
                    href={waLink("Hi Fairplay, I have a query regarding my bonus")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold tracking-tight hover:bg-flame hover:text-flame-foreground transition-colors"
                  >
                    <PhoneCall className="w-4 h-4" /> WhatsApp Fairplay
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Excellence block */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Why <span className="text-primary">bonuses</span> expire</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">These are desk rules on the bonus page — not a Fairplay ID fault.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: RefreshCw,
                title: "Time window",
                desc: "Most offers have a set number of days to finish wagering. Unused bonus drops when that window closes."
              },
              {
                icon: Shield,
                title: "One per ID",
                desc: "Promotions are one per Fairplay ID. A second login to grab the same offer can cancel both."
              },
              {
                icon: Target,
                title: "Minimum odds",
                desc: "Bets below the odds on the bonus page usually do not count toward wagering."
              },
              {
                icon: ShieldCheck,
                title: "Same person",
                desc: "VPN or multiple IDs from one phone can cancel the bonus. Ask WhatsApp before you opt in again."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-xl bg-white/2 border border-white/5 hover:border-primary/50 transition-all"
              >
                <item.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h4 className="text-xl font-bold mb-4 tracking-tight">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    
      <FAQSection 
        title="Bonus Issues FAQ"
        faqs={[
          { q: 'The Fairplay bonus did not credit.', a: 'The deposit may not have qualified, or the code was not applied. Read the bonus page, then WhatsApp ID and UTR.' },
          { q: 'Can I withdraw bonus money now?', a: 'Not until wagering is done. The bonus page lists the multiplier. Unmet wagering is not a bug.' },
          { q: 'I opted out. Can I opt in later?', a: 'Ask WhatsApp. Some offers are one-time per Fairplay ID.' },
          { q: 'Does WPL or casino count for wagering?', a: 'Only if the terms say so. Cricket fancy is often excluded. Check before you grind the bonus.' },
        ]}
      />
    </div>)
}
