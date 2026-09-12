import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Gavel, ShieldCheck, Scale, FileText, Info, AlertTriangle, CheckCircle, Zap, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { ReviewedBadge } from '@/components/ReviewedBadge'
import { CONTENT_REVIEWED } from '@/lib/content-review-dates'
export const Route = createFileRoute('/rules-regulations')({
  component: RulesRegulations,
  head: () => pageHeadFor('/rules-regulations'),
})

function RulesRegulations() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-8">
              <Gavel className="w-4 h-4" /> Cricket books and settlement
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              RULES & <span className="text-primary not-italic">REGULATIONS</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              One Fairplay ID, official scorecards, and how fancy markets settle before a 180-minute payout.
            </p>
            <ReviewedBadge iso={CONTENT_REVIEWED["/rules-regulations"]} className="mt-5 justify-center" />
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview
              title="Fairplay betting rules"
            />
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-24 relative">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid gap-12 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-8 rounded-xl bg-white/2 border border-white/5 hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 shrink-0">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Desk <span className="text-primary">basics</span></h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-lg tracking-tight">One Fairplay ID</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    One person, one ID. Duplicate accounts can lock both. Do not hedge the same match on two Fairplay logins.
                  </p>
                </div>
                <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-lg tracking-tight">True registration</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Name and mobile must match the UPI you use. False details delay withdrawals after settlement.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-8 rounded-xl bg-white/2 border border-white/5 hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 shrink-0">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">How books <span className="text-primary">settle</span></h2>
              </div>
              <div className="space-y-8">
                <div className="flex gap-6 items-start p-6 rounded-xl bg-white/5 border border-white/10">
                  <Scale className="w-8 h-8 text-primary shrink-0 pt-1" />
                  <div>
                    <h4 className="text-xl font-bold tracking-tight mb-2">Fair play</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Collusion, bots and multi-accounting get the ID closed. WhatsApp if you think a lock is a mistake.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start p-6 rounded-xl bg-white/5 border border-white/10">
                  <FileText className="w-8 h-8 text-primary shrink-0 pt-1" />
                  <div>
                    <h4 className="text-xl font-bold tracking-tight mb-2">Official scorecard</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Fancy sessions wait for that over to finish. A void returns the stake. Confirm the slip before you send — a delayed tap is a worse price, not a slogan.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group p-12 rounded-xl bg-primary/5 border border-primary/30 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8">
                <ShieldCheck className="w-32 h-32 text-primary opacity-20" />
              </div>
              <div className="relative z-10">
                <Zap className="w-16 h-16 text-primary mx-auto mb-8 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-3xl font-bold tracking-tight mb-4">Full market rules</h3>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
                  Read this page and the slip before you send. If they conflict, ask WhatsApp before you bet again. Payouts usually follow about 180 minutes after the official result.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                  <ShieldCheck className="w-4 h-4" /> Cricket desk since 2017
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    
      <FAQSection 
        title="Rules Regulations FAQ"
        faqs={[
          { q: 'What gets a Fairplay ID closed?', a: 'Multi-accounting, bots, and collusion. One person, one ID. WhatsApp if you think a lock is a mistake.' },
          { q: 'How do fancy markets settle?', a: 'On the official scorecard. Session books wait for that over to finish. A void returns the stake.' },
          { q: 'Can I hedge the same match on two IDs?', a: 'Not on Fairplay. Two IDs for one person is against the rules and can lock both.' },
          { q: 'Where are full market rules?', a: 'On this page and on the slip before you send. If they conflict, ask WhatsApp before you bet again.' },
        ]}
      />
    </div>)
}
