import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { AlertCircle, RefreshCw, HelpCircle, Shield, PhoneCall, Star, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/withdrawal-issues')({
  component: WithdrawalIssues,
  head: () => pageHeadFor('/withdrawal-issues'),
})

function WithdrawalIssues() {
  const commonIssues = [
    {
      title: "About 180 minutes",
      desc: "Withdrawals usually land about 180 minutes after the official result if KYC is clear and no market is still open.",
      icon: RefreshCw
    },
    {
      title: "KYC on the ID",
      desc: "Payouts go to the person on the Fairplay ID. Pending KYC holds the UPI. Send documents only through the WhatsApp desk.",
      icon: Shield
    },
    {
      title: "UPI handle",
      desc: "The handle on the withdrawal must match the ID. A mismatched name is a common block. Do not open a second ID.",
      icon: AlertCircle
    }
  ]

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
              <Star className="w-4 h-4 fill-primary" /> 180-minute payouts
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              Withdrawal <span className="text-primary">issues</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Cashout waits for the official result. Fairplay payouts usually take about 180 minutes. Open fancy bets hold the exposure. WhatsApp ID, amount and UPI if it runs past that.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commonIssues.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-xl bg-white/2 border border-white/5 hover:border-primary/50 transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-primary/20">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-2xl font-bold tracking-tight mb-4">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-5" />
        <div className="container max-w-5xl mx-auto px-4 relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-zinc-900/50 backdrop-blur-3xl border border-white/10 p-12 md:p-20 rounded-xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-none">
              Past <span className="text-primary underline decoration-primary/30 underline-offset-8">180 minutes</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              WhatsApp Fairplay ID, amount, UPI handle and a screenshot. Check the withdrawal is not still “processing” in the app. Do not create a second ID.
            </p>
            <a 
              href={waLink("Hi Fairplay, I'm facing a withdrawal issue. Please help.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-4 bg-primary text-white px-12 py-6 rounded-xl font-bold tracking-tight hover:bg-flame hover:text-flame-foreground transition-colors"
            >
              WhatsApp Fairplay <ArrowRight className="w-6 h-6" />
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
