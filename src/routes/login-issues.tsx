import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { AlertCircle, Lock, Shield, HelpCircle, Zap, RefreshCw, Star, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { JsonLd } from '@/components/JsonLd'
import { howToJsonLd } from '@/utils/howto-schema'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/login-issues')({
  component: LoginIssues,
  head: () => pageHeadFor('/login-issues'),
})

function LoginIssues() {
  const steps = [
    { icon: Lock, title: 'Check the number', desc: 'Fairplay login is the mobile number on the Fairplay ID. A different number will not receive OTP.' },
    { icon: RefreshCw, title: 'Clear cache', desc: 'A login loop is often an old session. Try Incognito or another browser, then request OTP again.' },
    { icon: Shield, title: 'Wait out a lock', desc: 'Too many wrong attempts can lock the cricket ID. Wait about 15 minutes before you try again.' },
    { icon: Zap, title: 'WhatsApp the ID', desc: 'If OTP never arrives, message official WhatsApp with the Fairplay ID. Never share the OTP with anyone who DMs you first.' },
  ]

  const howTo = howToJsonLd({
    path: "/login-issues",
    name: "How to fix Fairplay login issues",
    description:
      "Check the number on the Fairplay ID, clear a stuck session, wait out a lock, then WhatsApp the ID if OTP never arrives.",
    totalTime: "PT20M",
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
              <Star className="w-4 h-4 fill-primary" /> OTP and locked IDs
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              Fairplay <span className="text-primary not-italic">login</span> issues
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              OTP delay, a locked Fairplay ID, or a cached session. Try a fresh browser, wait out a lock, then WhatsApp the ID if the code never arrives.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview title="AI Overview: Login Issues" />
          </div>
        </div>
      </section>

      {/* Troubleshooting Steps */}
      <section className="py-24 relative">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                id={`step-${i + 1}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 flex gap-8 items-start border-white/5 hover:border-primary/30 transition-all group"
              >
                <div className="p-5 bg-white/5 rounded-2xl shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-black italic uppercase mb-3 tracking-tighter">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{step.desc}</p>
                </div>
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
              Need <span className="text-primary not-italic underline decoration-primary/30 underline-offset-8">Immediate</span> Help?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Message official WhatsApp with your Fairplay ID if OTP never arrives. Do not share the code.
            </p>
            <a 
              href={waLink("Hi Fairplay, I'm having trouble logging in. Please help.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-4 bg-primary text-white px-12 py-6 rounded-2xl font-black italic uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-xl shadow-primary/20"
            >
              CHAT WITH SUPPORT <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </section>
    
      <FAQSection 
        title="Fairplay login issues"
        faqs={[
          { q: 'Why is Fairplay OTP not coming?', a: 'Wrong number, network delay, or a lock after too many tries. Wait, use Incognito, then WhatsApp the Fairplay ID. Never share OTP.' },
          { q: 'Why is my Fairplay ID locked?', a: 'Failed logins can lock the cricket ID for about 15 minutes. If it stays locked, official WhatsApp can reopen it.' },
          { q: 'Fairplay login keeps looping?', a: 'Clear cache or use another browser. The Fairplay app uses the same ID — try the website if the app sticks.' },
          { q: 'Can I reset Fairplay login without WhatsApp?', a: 'OTP is the reset. If the registered number is dead, only the desk that created the Fairplay ID can move it.' },
        ]}
      />
    </div>)
}
