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
      title: "Check the UTR",
      desc: "WhatsApp Fairplay ID, amount and the screenshot. A typo in the UTR delays the credit. Do not pay again.",
      icon: AlertCircle
    },
    {
      title: "UPI still pending",
      desc: "Wait for the first UTR. Bank or UPI can lag. If the wallet is empty after a short wait, message once with the proof.",
      icon: RefreshCw
    },
    {
      title: "Wrong UPI handle",
      desc: "Pay only the handle the desk sends after login. A name from Instagram is not this cricket desk.",
      icon: Shield
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
              <Star className="w-4 h-4 fill-primary" /> UPI not showing
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              Deposit <span className="text-primary">issues</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              UPI paid, wallet empty. Wait for the first UTR. Do not pay twice. WhatsApp Fairplay ID, amount and the screenshot.
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
              Still waiting on <span className="text-primary underline decoration-primary/30 underline-offset-8">UPI</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Have the Fairplay ID and the UTR screenshot ready. Repeat tickets slow the desk. Do not pay a second handle.
            </p>
            <a 
              href={waLink("Hi Fairplay, I'm facing a deposit issue. Please help.")}
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
