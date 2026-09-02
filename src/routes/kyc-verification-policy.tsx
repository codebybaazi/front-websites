import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { UserCheck, Shield, FileSearch, CheckCircle, AlertCircle, Clock, Star, ShieldCheck, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
export const Route = createFileRoute('/kyc-verification-policy')({
  component: KYCVerificationPolicy,
  head: () => pageHeadFor('/kyc-verification-policy'),
})

function KYCVerificationPolicy() {
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
              <UserCheck className="w-4 h-4" /> Name on the Fairplay ID
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              KYC <span className="text-primary not-italic">VERIFICATION</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              KYC on Fairplay is name, mobile and, when asked, ID proof so withdrawals pay the right person.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="Fairplay KYC"
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
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Why we <span className="text-primary">ask</span></h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                KYC is so a UPI payout after settlement lands with the adult on the Fairplay ID. One person, one ID. Blurry photos get rejected and the 180-minute window waits.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group p-8 rounded-xl bg-white/2 border border-white/5 hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <FileSearch className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold tracking-tight">When KYC <span className="text-primary">starts</span></h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Before a large withdrawal",
                    "If deposit and ID names do not match",
                    "If the desk flags unusual wallet activity"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group p-8 rounded-xl bg-white/2 border border-white/5 hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold tracking-tight">Usual <span className="text-primary">docs</span></h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Aadhaar or PAN matching the Fairplay ID",
                    "Passport or driving licence",
                    "A recent bill if address is requested"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-12 rounded-xl bg-primary/5 border border-primary/30 relative overflow-hidden text-center"
            >
              <div className="absolute top-0 right-0 p-8">
                <Clock className="w-32 h-32 text-primary opacity-20" />
              </div>
              <div className="relative z-10">
                <Zap className="w-16 h-16 text-primary mx-auto mb-8 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-3xl font-bold tracking-tight mb-4">How long KYC takes</h3>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
                  Clear photos usually review within a few hours. Complex cases can take a day. Until it clears, the withdrawal stays in the wallet — it does not vanish.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                  <Star className="w-4 h-4 fill-primary" /> Send from the registered WhatsApp
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 border-2 border-dashed border-primary/20 rounded-xl bg-white/2"
            >
              <div className="flex gap-6 items-start">
                <AlertCircle className="w-8 h-8 text-primary shrink-0 pt-1" />
                <div>
                  <h4 className="text-2xl font-bold tracking-tight mb-4">Where to send it</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    WhatsApp from the registered number. Do not email ID cards to random addresses. We do not ask you to forward OTP with KYC photos.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    
      <FAQSection 
        title="Kyc Verification Policy FAQ"
        faqs={[
          { q: 'When does Fairplay ask for KYC?', a: 'Often before a large withdrawal. Name, mobile and ID proof if requested. Incomplete KYC delays payouts.' },
          { q: 'What documents are usual?', a: 'A government ID that matches the name on the Fairplay ID. Blurry photos get rejected.' },
          { q: 'Can I skip KYC and still withdraw?', a: 'Small payouts may go through. If the desk asks for KYC, the withdrawal waits until it clears.' },
          { q: 'How do I send KYC?', a: 'WhatsApp from the registered number. Do not email ID cards to random addresses.' },
        ]}
      />
    </div>)
}
