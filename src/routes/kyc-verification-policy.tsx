import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { UserCheck, Shield, FileSearch, CheckCircle, AlertCircle, Clock, Star, ShieldCheck, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { JsonLd } from '@/components/JsonLd'
import { howToJsonLd } from '@/utils/howto-schema'
export const Route = createFileRoute('/kyc-verification-policy')({
  component: KYCVerificationPolicy,
  head: () => pageHeadFor('/kyc-verification-policy'),
})

function KYCVerificationPolicy() {
  const steps = [
    {
      title: "Wait until Fairplay asks",
      desc: "KYC usually appears before a large withdrawal or if the desk flags the ID. Do not upload documents to a random form from an ad.",
    },
    {
      title: "Photograph a matching ID",
      desc: "Use a government ID whose name matches the Fairplay ID. Blurry or cropped photos get rejected.",
    },
    {
      title: "Send it on official WhatsApp",
      desc: "Message from the number on the ID. Include the Fairplay ID and the photo. Do not send OTP.",
    },
    {
      title: "Wait for the desk",
      desc: "If KYC fails, they will say why. Do not open a second Fairplay ID with the same papers.",
    },
  ]

  const howTo = howToJsonLd({
    path: "/kyc-verification-policy",
    name: "How to complete Fairplay KYC",
    description:
      "Send a matching government ID on official WhatsApp when Fairplay asks, so withdrawals can pay the right person.",
    totalTime: "PT15M",
    steps: steps.map((step) => ({ name: step.title, text: step.desc })),
  })

  return (
    <div className="flex flex-col bg-background text-foreground overflow-hidden">
      <JsonLd data={howTo} />
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
              <UserCheck className="w-4 h-4" /> Identity Integrity Standards
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              KYC <span className="text-primary not-italic">VERIFICATION</span> POLICY
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
              className="group p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-black italic uppercase italic tracking-tight">Identity <span className="text-primary">Overview</span></h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To maintain a high-trust environment and prevent fraudulent activities, Fairplay implements a streamlined KYC process. This ensures that every ID on our platform belongs to a legitimate, age-eligible user, protecting the integrity of our elite exchange community.
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
                  <FileSearch className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold uppercase italic">KYC <span className="text-primary">Triggers</span></h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Upon initial high-value withdrawal",
                    "During suspicious activity detection",
                    "For VIP status upgrades"
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
                className="group p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold uppercase italic">Accepted <span className="text-primary">Docs</span></h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Aadhar Card or PAN Card",
                    "Valid Passport or Driving License",
                    "Recent utility bill for address proof"
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
              className="group p-8 rounded-3xl bg-white/2 border border-white/5"
            >
              <h2 className="text-3xl font-black italic uppercase tracking-tight mb-8">How to send KYC</h2>
              <div className="space-y-6">
                {steps.map((step, i) => (
                  <div key={step.title} id={`step-${i + 1}`} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-black flex items-center justify-center shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold uppercase italic mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-12 rounded-[40px] bg-primary/5 border border-primary/30 relative overflow-hidden text-center"
            >
              <div className="absolute top-0 right-0 p-8">
                <Clock className="w-32 h-32 text-primary opacity-20" />
              </div>
              <div className="relative z-10">
                <Zap className="w-16 h-16 text-primary mx-auto mb-8 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-3xl font-black italic uppercase mb-4">Elite Verification Timeline</h3>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
                  Our elite verification team typically reviews documents within 2-4 hours. In complex cases, it may take up to 24 hours. Once verified, your withdrawal limits are instantly upgraded to institutional levels.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                  <Star className="w-4 h-4 fill-primary" /> Express 4-Hour Processing
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 border-2 border-dashed border-primary/20 rounded-[32px] bg-white/2"
            >
              <div className="flex gap-6 items-start">
                <AlertCircle className="w-8 h-8 text-primary shrink-0 pt-1" />
                <div>
                  <h4 className="text-2xl font-black italic uppercase mb-4 tracking-tight">Data Confidentiality</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    All documents submitted for KYC are stored on isolated, encrypted servers and are accessible only to our specialized security team. We never share your personal documents with third parties, ensuring absolute privacy.
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
