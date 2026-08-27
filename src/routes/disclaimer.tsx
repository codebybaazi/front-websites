import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { AlertTriangle, ShieldCheck, Scale, FileText, XCircle, Star, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
export const Route = createFileRoute('/disclaimer')({
  component: DisclaimerPage,
  head: () => pageHeadFor('/disclaimer'),
})

function DisclaimerPage() {
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
              <AlertTriangle className="w-4 h-4" /> Legal Protection Framework
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              LEGAL <span className="text-primary not-italic">DISCLAIMER</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Betting can lose money. Fairplay pages are information, not a guarantee of payouts or legality in your state.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="Fairplay disclaimer"
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
                <h2 className="text-3xl font-black italic uppercase italic tracking-tight">General <span className="text-primary">Usage</span></h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fairplay is intended strictly for entertainment purposes and for users aged 18 and above. By accessing our platform, you acknowledge that betting involves inherent financial risk and you participate at your own discretion, assuming all responsibility for outcomes.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <XCircle className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold uppercase italic">Prohibited <span className="text-primary">Regions</span></h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Due to local regulations, access is strictly prohibited for residents of Telangana, Odisha, Assam, Sikkim, and Nagaland. Users from these states must exit the platform immediately.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                  <Zap className="w-4 h-4" /> Compliance Mandate
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Scale className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold uppercase italic">Liability <span className="text-primary">Limitation</span></h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Fairplay shall not be held liable for any financial losses. We do not guarantee profits and advise all users to play responsibly. Risk management is the user's sole responsibility.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                  <Star className="w-4 h-4 fill-primary" /> Responsible Gaming Focus
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-12 rounded-[40px] bg-primary/5 border border-primary/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8">
                <FileText className="w-32 h-32 text-primary opacity-20" />
              </div>
              <div className="relative z-10 flex gap-6 items-start">
                <div className="shrink-0 pt-2">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-2xl font-black italic uppercase mb-4 tracking-tight">Accuracy of Information</h4>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">
                    While we strive to provide accurate odds and information, Fairplay does not warrant the completeness or reliability of the data. Match details, timings, and odds are subject to change without prior notice as per market fluctuations.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-white/10 text-center"
            >
              <p className="text-xs text-muted-foreground italic uppercase tracking-widest font-bold">
                Fairplay Official Network | Institutional Governance | © 2026
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    
      <FAQSection 
        title="Disclaimer FAQ"
        faqs={[
          { q: 'Does Fairplay guarantee a profit?', a: 'No. You can lose the stake. Pages here are information, not tips you must follow.' },
          { q: 'Is this legal advice?', a: 'No. Fairplay is described as an offshore exchange. You must follow the law where you live.' },
          { q: 'Are odds on this site live prices?', a: 'Schedule and blog pages can lag. The price that counts is on the Fairplay slip after you log in.' },
          { q: 'Who is liable for a lost password?', a: 'You are. Never share OTP. WhatsApp immediately if a device you do not know is logged in.' },
        ]}
      />
    </div>)
}
