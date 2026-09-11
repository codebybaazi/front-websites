import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { UserPlus, Shield, Smartphone, ArrowRight, CheckCircle, Info, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { JsonLd } from '@/components/JsonLd'
import { howToJsonLd } from '@/utils/howto-schema'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/register-guide')({
  component: RegisterGuide,
  head: () => pageHeadFor('/register-guide'),
})

function RegisterGuide() {
  const steps = [
    {
      title: "WhatsApp Fairplay",
      desc: "Use the official WhatsApp link from this site. Say you want a Fairplay ID and share the mobile number you will log in with.",
      icon: Smartphone
    },
    {
      title: "Share the number",
      desc: "That number is the Fairplay login. A different number will not receive OTP later.",
      icon: UserPlus
    },
    {
      title: "OTP check",
      desc: "Complete the OTP so the cricket ID is bound to that phone. This is registration, not a second account.",
      icon: Shield
    },
    {
      title: "Log in and deposit",
      desc: "Use the login guide, then the deposit guide. After UPI credits, IPL and casino open on the same ID.",
      icon: CheckCircle
    }
  ]

  const howTo = howToJsonLd({
    path: "/register-guide",
    name: "How to register for a Fairplay ID",
    description:
      "Get a Fairplay ID on WhatsApp, log in with OTP, deposit with UPI, then bet cricket or play casino. No second registration for IPL.",
    totalTime: "PT10M",
    steps: steps.map((step) => ({ name: step.title, text: step.desc })),
  })

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-hidden">
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
              <Star className="w-4 h-4 fill-primary" /> New Fairplay ID
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9] uppercase">
              How to <span className="text-primary not-italic">register</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 font-medium">
              Get a Fairplay ID on WhatsApp, log in with OTP, deposit with UPI, then bet cricket or play casino. No second registration for IPL.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview title="Onboarding Intelligence Report" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-24">
        <div className="space-y-6 mb-16">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              id={`step-${i + 1}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 flex flex-col md:flex-row gap-8 items-center md:items-start group border-primary/10 hover:border-primary/30 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <step.icon className="w-8 h-8" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-2">Step 0{i+1}</div>
                <h3 className="text-2xl font-black italic uppercase mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 text-center border-primary/20 bg-primary/5 rounded-[40px]"
        >
          <Info className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-black italic uppercase mb-4">Register for a Fairplay ID</h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            WhatsApp the official number from this site. After the ID is live, use the login guide and deposit guide — that is the whole signup.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={waLink("Hello Fairplay! I want to Register and get my Verified ID.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-10 py-5 rounded-2xl font-black italic uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-xl flex items-center gap-4 w-fit"
            >
              WhatsApp for a Fairplay ID <ArrowRight className="w-5 h-5" />
            </a>
            <Link to="/login-guide" className="px-8 py-5 rounded-2xl border border-white/10 font-bold hover:bg-white/5">
              Login guide
            </Link>
            <Link to="/deposit-guide" className="px-8 py-5 rounded-2xl border border-white/10 font-bold hover:bg-white/5">
              Deposit guide
            </Link>
          </div>
        </motion.section>
      </div>
    
      <FAQSection 
        title="Fairplay registration questions"
        faqs={[
          { q: 'How do I register on Fairplay?', a: 'Message official WhatsApp, share the mobile number for login, complete OTP, then you have a Fairplay ID. Next steps are login and a UPI deposit.' },
          { q: 'Is Fairplay registration free?', a: 'Getting the ID is done on WhatsApp. You only send money when you deposit into the wallet. Do not pay anyone who asks for a “registration fee” off this site.' },
          { q: 'How long does a Fairplay ID take?', a: 'Often a few minutes after OTP. Wait until the desk confirms it is live before you deposit.' },
          { q: 'Can I register on the Fairplay app?', a: 'The app uses the same ID. Most people still create the ID on WhatsApp, then log in on the app with OTP.' },
        ]}
      />
    </div>)
}
