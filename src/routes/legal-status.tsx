import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Scale, ShieldCheck, FileText, Gavel, Info, AlertTriangle, Globe, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
export const Route = createFileRoute('/legal-status')({
  component: LegalStatus,
  head: () => pageHeadFor('/legal-status'),
})

function LegalStatus() {
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
              <Scale className="w-4 h-4" /> Not legal advice
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              LEGAL <span className="text-primary not-italic">STATUS</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Fairplay is an offshore sports exchange plus casino. You must be 18+. Local law still applies where you live.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="Fairplay legal status"
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
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">How the <span className="text-primary">desk is run</span></h2>
              </div>
              <div className="prose prose-invert max-w-none text-muted-foreground mb-8">
                <p className="text-lg leading-relaxed">
                  Fairplay IDs, UPI wallets and cricket books sit on this site. WhatsApp cannot override a published house rule. This page is not a court opinion.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10">
                  <Gavel className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-white tracking-tight mb-2">18+ and KYC</h4>
                    <p className="text-sm text-muted-foreground">Underage IDs are closed. KYC exists so 180-minute payouts go to the right adult.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10">
                  <Globe className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-white tracking-tight mb-2">Where you live</h4>
                    <p className="text-sm text-muted-foreground">If betting is banned in your state, do not use the Fairplay ID.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group p-8 rounded-xl bg-white/2 border border-white/5 hover:border-primary/50 transition-all"
              >
                <FileText className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-xl font-bold mb-4 tracking-tight">AML and <span className="text-primary">KYC</span></h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Large withdrawals can wait on identity checks. Name on the ID should match the UPI handle. Incomplete KYC delays payouts.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group p-8 rounded-xl bg-white/2 border border-white/5 hover:border-primary/50 transition-all"
              >
                <Info className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-xl font-bold mb-4 tracking-tight">Where to <span className="text-primary">read the rules</span></h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Terms, betting rules and this legal page. WhatsApp can explain a ticket; it cannot rewrite a published settlement rule.
                </p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-12 rounded-xl bg-primary/5 border border-primary/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8">
                <AlertTriangle className="w-32 h-32 text-primary opacity-20" />
              </div>
              <div className="relative z-10 flex gap-6 items-start">
                <div className="shrink-0 pt-2">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold tracking-tight mb-4">Your local law</h4>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">
                    You are responsible for the rules where you live. Fairplay does not offer an ID in places where online betting is banned. Opening a cricket ID does not make betting legal in your state.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    
      <FAQSection 
        title="Legal Status FAQ"
        faqs={[
          { q: 'Is Fairplay licensed in India?', a: 'Fairplay is run as an offshore sports exchange plus casino. Indian users must follow local law. This page is not a court opinion.' },
          { q: 'Do I need to be 18?', a: 'Yes. Underage IDs are closed. KYC exists so payouts go to the right adult.' },
          { q: 'Does using Fairplay make betting legal in my state?', a: 'No. You are responsible for local rules. If betting is banned where you live, do not use the ID.' },
          { q: 'Where do I read the house rules?', a: 'Terms, betting rules and this legal page. WhatsApp cannot override a published rule.' },
        ]}
      />
    </div>)
}
