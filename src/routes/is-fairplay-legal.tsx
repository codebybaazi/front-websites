import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { motion } from 'framer-motion'
import { 
  Scale, 
  Globe, 
  Gavel, 
  CheckCircle2, 
  Landmark
} from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
export const Route = createFileRoute('/is-fairplay-legal')({
  component: IsFairplayLegalPage,
  head: () => pageHeadFor('/is-fairplay-legal'),
})

function IsFairplayLegalPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 bg-[#0A0A0B] selection:bg-primary/30">
      <div className="max-w-5xl mx-auto">
        {/* Cinematic Header */}
        <header className="mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-xs font-black uppercase tracking-[0.3em] mb-8 border border-primary/20"
          >
            <Gavel className="w-3.5 h-3.5" /> Not legal advice
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black italic tracking-tighter mb-8 uppercase leading-[0.9] text-white"
          >
            IS FAIRPLAY <span className="text-primary">LEGAL?</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Navigating cricket IDs and local law in plain language. We do not publish a licence number or a registered operator name. This is not a court opinion.
          </motion.p>
        </header>

        {/* AI Overview */}
        <AIOverview 
              title="Is Fairplay legal"
        />

        {/* Regulatory Status Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card mb-20 p-8 md:p-16 rounded-[40px] border-primary/20 text-center"
        >
          <Landmark className="w-20 h-20 text-primary mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-black italic uppercase text-white mb-6">What this site states</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Fairplay is an offshore sports exchange plus casino. Brand name: Fairplay. Public site: fairplayindia.com. Support: support@fairplayindia.com. No licence number and no registered company name appear on this site. You must be 18+ and follow the law where you live.
          </p>
        </motion.div>

        {/* Compliance Pillars */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-black italic uppercase text-white flex items-center gap-4">
              <Scale className="w-8 h-8 text-primary" /> P2P Model Integrity
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Unlike centralized casinos that act as the counterparty (and thus have an incentive to manipulate), Fairplay acts as a technology intermediary for Peer-to-Peer betting. Your counterparties are other users, not the platform itself. This distinction is central to our commitment to fair market operations.
            </p>
            <div className="space-y-3">
              {[
                "Neutral Market Mediation",
                "Automated Rules Execution",
                "Real-time Settlement Transparency"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-bold text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-black italic uppercase text-white flex items-center gap-4">
              <Globe className="w-8 h-8 text-primary" /> Licence and company
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We do not list a Curaçao, India, or other gaming licence ID because we cannot show one. We do not list a private limited or LLC name. KYC on the desk is for payouts, not a regulator stamp.
            </p>
            <div className="space-y-3">
              {[
                "No published licence number",
                "No published operator legal name",
                "18+ and local law still apply",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-bold text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Navigation */}
        <footer className="mt-24 pt-16 border-t border-white/5 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/is-fairplay-real" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors uppercase italic tracking-widest">Is Fairplay Real?</Link>
            <span className="text-white/10">•</span>
            <Link to="/is-fairplay-safe" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors uppercase italic tracking-widest">Is Fairplay Safe?</Link>
            <span className="text-white/10">•</span>
            <Link to="/all-links" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors uppercase italic tracking-widest">Site Index</Link>
          </div>
        </footer>
      </div>
    
      <FAQSection 
        title="Is Fairplay Legal FAQ"
        faqs={[
          { q: 'Is Fairplay legal to use from India?', a: 'Fairplay is an offshore exchange. We do not publish a licence number. You must be 18+ and follow the law where you live. This page is not legal advice.' },
          { q: 'Why is there no licence ID or operator legal name?', a: 'We will not invent a regulator number or company registry name. Brand: Fairplay. Domain: fairplayindia.com. Email: support@fairplayindia.com.' },
          { q: 'Why does Fairplay ask for KYC?', a: 'So withdrawals pay the person on the ID, not a mule account. It is a desk rule, not a government stamp.' },
          { q: 'Are cricket IDs banned everywhere?', a: 'Rules differ by state. If your local law forbids this, do not open an ID.' },
          { q: 'Where are the terms?', a: 'On the terms and betting-rules pages. WhatsApp cannot promise something that contradicts those pages.' },
        ]}
      />
    </div>)
}
