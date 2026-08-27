import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { AlertCircle, RefreshCw, HelpCircle, Shield, PhoneCall, Star, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/deposit-issues')({
  component: DepositIssues,
  head: () => pageHeadFor('/deposit-issues'),
})

function DepositIssues() {
  const commonIssues = [
    {
      title: "Check Transaction Reference",
      desc: "Ensure your UTR or transaction ID is entered correctly in the deposit confirmation form. A single typo can delay verification.",
      icon: AlertCircle
    },
    {
      title: "Bank/Gateway Delays",
      desc: "Occasionally, bank or UPI gateways experience processing delays. Please wait 15-30 minutes for automated settlement before raising a ticket.",
      icon: RefreshCw
    },
    {
      title: "Account Verification",
      desc: "Make sure the Fairplay ID is verified. Unverified accounts can see a temporary deposit hold.",
      icon: Shield
    }
  ]

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
              <Star className="w-4 h-4 fill-primary" /> Institutional Resolution Center
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              DEPOSIT <span className="text-primary not-italic">SUPPORT</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              We're here to ensure your funds reach your Fairplay ID without any delay. Our systems are optimized for sub-60 second settlement resolution.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="AI Overview: Deposit Issues"
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
              STILL NEED <span className="text-primary not-italic underline decoration-primary/30 underline-offset-8">ASSISTANCE?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Our 24/7 elite concierge team is ready to assist you. Have your transaction receipt (screenshot) ready for instant verification and manual settlement.
            </p>
            <a 
              href={waLink("Hi Fairplay, I'm facing a deposit issue. Please help.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-4 bg-primary text-white px-12 py-6 rounded-2xl font-black italic uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-xl shadow-primary/20"
            >
              CONTACT VIP SUPPORT <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </section>
    
      <FAQSection 
        title="Deposit Issues FAQ"
        faqs={[
          { q: 'My Fairplay deposit is pending. What now?', a: 'Wait for the first UTR. Do not pay again. WhatsApp Fairplay ID, amount and the screenshot.' },
          { q: 'I paid the wrong UPI name.', a: 'If it was not the handle the desk sent after login, treat it as lost until WhatsApp traces it. Never take a UPI from Instagram bios.' },
          { q: 'Wallet credited less than I sent.', a: 'Send the UTR. Partial credits happen when you used an old deposit amount. Do not top up blindly.' },
          { q: 'How long before I message?', a: 'If UPI shows success and the wallet is still empty after a short wait, message once with the proof. Repeat tickets slow the desk.' },
        ]}
      />
    </div>)
}
