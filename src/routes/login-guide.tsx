import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Smartphone, Shield, Key, ArrowRight, UserCheck, HelpCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
export const Route = createFileRoute('/login-guide')({
  component: LoginGuide,
  head: () => pageHeadFor('/login-guide'),
})

function LoginGuide() {
  const steps = [
    {
      title: "Enter the mobile number",
      desc: "Use the number that was verified for your Fairplay ID. A different number will not receive the OTP.",
      icon: Smartphone
    },
    {
      title: "Enter the OTP",
      desc: "Enter the 6-digit code from SMS or WhatsApp. Fairplay login never asks you to read the OTP aloud to a stranger.",
      icon: Key
    },
    {
      title: "Open cricket or casino",
      desc: "After login you see the wallet and the exchange. If the ID is new, deposit before you look for IPL books.",
      icon: Shield
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-hidden">
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.705_0.198_142_/_0.08),transparent_55%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-[2px] w-8 brand-rule" />
              <span className="kicker">OTP on your Fairplay ID</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]">
              How to log in to Fairplay
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Sign in with the number on your Fairplay ID, enter the OTP, then open cricket or casino. 2FA is extra protection, not a second account.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview title="Fairplay login" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-24">
        <div className="grid gap-6 mb-16">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 flex flex-col md:flex-row gap-8 items-center md:items-start group border-primary/10 hover:border-primary/30 transition-all rounded-xl"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <step.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="glass-card p-10 md:p-12 text-center border-primary/20 bg-primary/5 rounded-xl">
          <HelpCircle className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold tracking-tight mb-4">Fairplay login not working?</h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            OTP delay, a locked ID, or a cached session are the usual causes. Try the login issues page, then WhatsApp the Fairplay ID with a screenshot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-semibold hover:bg-flame hover:text-flame-foreground transition-colors flex items-center justify-center gap-3">
              <UserCheck className="w-5 h-5" /> Proceed to login
            </button>
            <Link to="/login-issues" className="px-8 py-3.5 border border-primary/30 rounded-md font-semibold hover:bg-primary/10 transition-colors">
              Login issues
            </Link>
          </div>
        </section>
      </div>
    
      <FAQSection 
        title="Fairplay login questions"
        faqs={[
          { q: 'How does Fairplay login work?', a: 'Enter the mobile number on your Fairplay ID, then the OTP. After that you can open cricket, IPL, football, tennis or casino on the same account.' },
          { q: 'I did not get the OTP. What now?', a: 'Wait a minute, check SMS and WhatsApp, try again. If it still fails, use the login issues page or message support with the ID — do not create a second ID.' },
          { q: 'Can I log in on the Fairplay app?', a: 'Yes. App and website use the same Fairplay ID and OTP. You do not register twice.' },
          { q: 'What is 2FA on Fairplay?', a: 'An extra check after OTP. It is not a second cricket ID. Turn it on if you want another layer on the same login.' },
        ]}
      />
    </div>)
}
