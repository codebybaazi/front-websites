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
      title: "OTP",
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
              <Shield className="w-4 h-4 fill-primary" /> OTP on your Fairplay ID
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9] uppercase">
              Fairplay <span className="text-primary not-italic">login</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 font-medium">
              Sign in with the number on your Fairplay ID, enter the OTP, then open cricket or casino. 2FA is extra protection, not a second account.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview title="Access Intelligence Report" />
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
              className="glass-card p-8 flex flex-col md:flex-row gap-8 items-center md:items-start group border-primary/10 hover:border-primary/30 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <step.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-black italic uppercase mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="glass-card p-12 text-center border-primary/20 bg-primary/5">
          <HelpCircle className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-black italic uppercase mb-4">Fairplay login not working?</h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            OTP delay, a locked ID, or a cached session are the usual causes. Try the login issues page, then WhatsApp the Fairplay ID with a screenshot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-12 py-5 rounded-2xl font-black italic uppercase tracking-widest hover:scale-105 transition-all shadow-xl flex items-center gap-3">
              <UserCheck className="w-5 h-5" /> PROCEED TO LOGIN
            </button>
            <Link to="/login-issues" className="px-12 py-5 border border-primary/30 rounded-2xl font-black italic uppercase tracking-widest hover:bg-primary/10 transition-all">
              TROUBLESHOOTING
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
