import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { AlertCircle, RefreshCw, HelpCircle, Shield, PhoneCall, Star, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { JsonLd } from '@/components/JsonLd'
import { howToJsonLd } from '@/utils/howto-schema'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/withdrawal-issues')({
  component: WithdrawalIssues,
  head: () => pageHeadFor('/withdrawal-issues'),
})

function WithdrawalIssues() {
  const commonIssues = [
    {
      title: "Wait for the market to settle",
      desc: "Fairplay withdrawals start after the official result. Open fancy books hold exposure. The usual window is about 180 minutes once KYC is clear.",
      icon: RefreshCw
    },
    {
      title: "Check KYC on the Fairplay ID",
      desc: "Pending identity checks pause payouts. Finish documents on the KYC page before you treat a delay as a failed UPI.",
      icon: Shield
    },
    {
      title: "Confirm UPI or bank details",
      desc: "Mismatched account names are a common block. The handle must match the name on the Fairplay ID.",
      icon: AlertCircle
    },
    {
      title: "WhatsApp one payout ticket",
      desc: "If the payout is still pending past the usual window, message official WhatsApp with Fairplay ID, amount, UPI handle and a screenshot.",
      icon: PhoneCall
    }
  ]

  const howTo = howToJsonLd({
    path: "/withdrawal-issues",
    name: "How to fix a delayed Fairplay withdrawal",
    description:
      "Wait for settlement, check KYC, confirm the UPI handle, then WhatsApp one ticket if the payout is still pending.",
    totalTime: "PT180M",
    steps: commonIssues.map((step) => ({ name: step.title, text: step.desc })),
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
              <Star className="w-4 h-4 fill-primary" /> Institutional Payout Authority
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              WITHDRAWAL <span className="text-primary not-italic">SUPPORT</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Fast, secure payouts are our priority. If you encounter a delay, our elite team is standing by with automated liquidity routing for instant resolution.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="AI Overview: Withdrawal Issues"
            />
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 relative">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonIssues.map((item, i) => (
              <motion.div 
                key={i}
                id={`step-${i + 1}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-primary/50 transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-primary/20">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-2xl font-black italic uppercase mb-4 tracking-tight">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Intensity CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-5" />
        <div className="container max-w-5xl mx-auto px-4 relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-zinc-900/50 backdrop-blur-3xl border border-white/10 p-12 md:p-20 rounded-[40px]"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 italic tracking-tighter leading-none uppercase">
              NEED <span className="text-primary not-italic underline decoration-primary/30 underline-offset-8">PRIORITY</span> SETTLEMENT?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Our 24/7 elite concierge team is ready to assist you. Have your withdrawal request ID available for instant tracking and priority liquidity clearance.
            </p>
            <a 
              href={waLink("Hi Fairplay, I'm facing a withdrawal issue. Please help.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-4 bg-primary text-white px-12 py-6 rounded-2xl font-black italic uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-xl shadow-primary/20"
            >
              CHAT WITH VIP SUPPORT <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </section>
    
      <FAQSection 
        title="Withdrawal Issues FAQ"
        faqs={[
          { q: 'How long should a Fairplay withdrawal take?', a: 'About 180 minutes after the official result, if KYC is clear and no market is still open.' },
          { q: 'Payout is past 180 minutes.', a: 'WhatsApp Fairplay ID, amount, UPI handle and a screenshot. Check the withdrawal is not still “processing” in the app.' },
          { q: 'Can an open fancy bet block cashout?', a: 'Yes. Unsettled books hold the exposure. Wait for the scorecard, then the 180-minute window starts.' },
          { q: 'Bank said the UPI failed.', a: 'The amount should return to the Fairplay wallet. Send a correct handle. Do not create a second ID.' },
        ]}
      />
    </div>)
}
