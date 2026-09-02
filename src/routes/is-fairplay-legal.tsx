import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { motion } from 'framer-motion'
import { 
  Scale, 
  ShieldCheck, 
  Globe, 
  Gavel, 
  CheckCircle2, 
  AlertTriangle,
  ChevronRight,
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
    <div className="min-h-screen pt-32 pb-24 px-4 bg-[#0D1424] selection:bg-primary/30">
      <div className="max-w-5xl mx-auto">
        {/* Cinematic Header */}
        <header className="mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-xs font-bold tracking-tight mb-8 border border-primary/20"
          >
            <Gavel className="w-3.5 h-3.5" /> You must be 18+
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9] text-white"
          >
            Is Fairplay <span className="text-primary">legal?</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Fairplay is an offshore cricket exchange. You must be 18+ and follow the law where you live. This page is not legal advice — it explains how the ID, KYC and terms work on this desk.
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
          className="glass-card mb-20 p-8 md:p-16 rounded-xl border-primary/20 text-center"
        >
          <Landmark className="w-20 h-20 text-primary mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">How this cricket desk is set up</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Fairplay IDs have been issued here since 2017. You bet other players on the exchange. Settlement waits for the official result. WhatsApp cannot promise something that contradicts the terms pages.
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
            <h3 className="text-3xl font-bold tracking-tight text-white flex items-center gap-4">
              <Scale className="w-8 h-8 text-primary" /> Exchange, not a shop
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              On Fairplay you take a price against other players. The desk is not the other side of every cricket slip. Odds move in play. That is why a clone that only offers frozen “fixed” odds is not this ID.
            </p>
            <div className="space-y-3">
              {[
                "Official result, then the wallet",
                "Same Fairplay ID for IPL and internationals",
                "UPI payouts after settlement"
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
            <h3 className="text-3xl font-bold tracking-tight text-white flex items-center gap-4">
              <Globe className="w-8 h-8 text-primary" /> Local law is on you
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Rules differ by state. If your local law forbids this, do not open an ID. Fairplay KYC exists so withdrawals pay the person on the cricket ID — it is a desk rule, not a government stamp.
            </p>
            <div className="space-y-3">
              {[
                "18+ only",
                "Terms and betting-rules pages apply",
                "KYC before large UPI payouts"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-bold text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-12 text-center">Legal <span className="text-primary">questions</span></h2>
          <div className="space-y-4">
            {[
              { 
                q: "Is Fairplay an illegal betting site?", 
                a: "Fairplay is an offshore exchange. You must be 18+ and follow the law where you live. This page is not legal advice. If local law forbids it, do not open a Fairplay ID." 
              },
              { 
                q: "How does Fairplay settle cricket books?", 
                a: "After the official result. Withdrawals usually take about 180 minutes if KYC is clear and no market is still open. WhatsApp cannot override an unsettled fancy book." 
              },
              { 
                q: "Why does Fairplay ask for KYC?", 
                a: "So payouts go to the person on the Fairplay ID, not a mule account. It is a desk rule. Send documents only through the channel the WhatsApp desk names." 
              }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-xl border-white/5"
              >
                <h4 className="text-xl font-bold tracking-tight text-primary mb-4 flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary/20 text-xs flex items-center justify-center text-primary">Q</span>
                  {faq.q}
                </h4>
                <p className="text-muted-foreground pl-12 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bottom Navigation */}
        <footer className="mt-24 pt-16 border-t border-white/5 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/is-fairplay-real" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors tracking-tight">Is Fairplay Real?</Link>
            <span className="text-white/10">•</span>
            <Link to="/is-fairplay-safe" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors tracking-tight">Is Fairplay Safe?</Link>
            <span className="text-white/10">•</span>
            <Link to="/all-links" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors tracking-tight">Site Index</Link>
          </div>
        </footer>
      </div>
    
      <FAQSection 
        title="Is Fairplay Legal FAQ"
        faqs={[
          { q: 'Is Fairplay legal to use from India?', a: 'Fairplay is an offshore exchange. You must be 18+ and follow the law where you live. This page is not legal advice.' },
          { q: 'Why does Fairplay ask for KYC?', a: 'So withdrawals pay the person on the ID, not a mule account. It is a desk rule, not a government stamp.' },
          { q: 'Are cricket IDs banned everywhere?', a: 'Rules differ by state. If your local law forbids this, do not open an ID.' },
          { q: 'Where are the terms?', a: 'On the terms and betting-rules pages. WhatsApp cannot promise something that contradicts those pages.' },
        ]}
      />
    </div>)
}
