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
              <Scale className="w-4 h-4" /> Not legal advice
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              LEGAL <span className="text-primary not-italic">STATUS</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              What this site publishes about Fairplay: brand, domain, and support. We do not publish a licence number or a registered operator company name.
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
              className="group p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 shrink-0">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-black italic uppercase italic tracking-tight">What we <span className="text-primary">publish</span></h2>
              </div>
              <div className="prose prose-invert max-w-none text-muted-foreground mb-8">
                <p className="text-lg leading-relaxed">
                  Fairplay is an offshore sports exchange plus casino on fairplayindia.com. You must be 18+. Local law still applies where you live — this page is not legal advice.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                  <Gavel className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-wider mb-2">Brand and site</h4>
                    <p className="text-sm text-muted-foreground">Public name: Fairplay. Official site: https://fairplayindia.com. Support: support@fairplayindia.com and the WhatsApp number on /contact-us.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                  <Globe className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-wider mb-2">Licence and company</h4>
                    <p className="text-sm text-muted-foreground">No licence number and no registered operator legal name are published on this site. We do not claim an India licence or a Curaçao licence we cannot show you.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-primary/50 transition-all"
              >
                <FileText className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-xl font-bold mb-4 tracking-tight uppercase italic">House <span className="text-primary">rules</span></h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  KYC and AML checks on this desk are for payouts to the person on the ID. They are not a government licence. Read terms, privacy and responsible gaming.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-primary/50 transition-all"
              >
                <Info className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-xl font-bold mb-4 tracking-tight uppercase italic">What we <span className="text-primary">do not claim</span></h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We do not invent a licence ID, a Curaçao stamp, or a registered company name we cannot show. If someone quotes a regulator number for Fairplay, ask them to point to this page — it is not here.
                </p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-12 rounded-[40px] bg-primary/5 border border-primary/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8">
                <AlertTriangle className="w-32 h-32 text-primary opacity-20" />
              </div>
              <div className="relative z-10 flex gap-6 items-start">
                <div className="shrink-0 pt-2">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-2xl font-black italic uppercase mb-4 tracking-tight">Jurisdictional Notice</h4>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">
                    Elite players are responsible for ensuring that they comply with the local laws and regulations of their specific country or state regarding online betting and exchange activities. Fairplay does not offer services in jurisdictions where online betting is strictly prohibited by local law.
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
          { q: 'Is Fairplay licensed in India?', a: 'No India licence is published here. Fairplay is run as an offshore sports exchange plus casino. You follow local law. This page is not a court opinion.' },
          { q: 'What is the operator legal name and licence number?', a: 'This site does not publish a registered company name or a licence number. Brand: Fairplay. Domain: fairplayindia.com. Support: support@fairplayindia.com.' },
          { q: 'Do I need to be 18?', a: 'Yes. Underage IDs are closed. KYC exists so payouts go to the right adult.' },
          { q: 'Does using Fairplay make betting legal in my state?', a: 'No. You are responsible for local rules. If betting is banned where you live, do not use the ID.' },
          { q: 'Where do I read the house rules?', a: 'Terms, betting rules and this legal page. WhatsApp cannot override a published rule.' },
        ]}
      />
    </div>)
}
