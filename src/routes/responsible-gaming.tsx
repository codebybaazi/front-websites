import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Heart, ShieldCheck, Scale, Clock, AlertCircle, Phone, Star, Target, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/responsible-gaming')({
  component: ResponsibleGaming,
  head: () => pageHeadFor('/responsible-gaming'),
})

function ResponsibleGaming() {
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
              <Heart className="w-4 h-4 fill-primary" /> Player Protection Protocol 2026
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              RESPONSIBLE <span className="text-primary not-italic">GAMING</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Fairplay tools for deposit limits, time-outs and self-exclusion so betting stays recreation, not a problem.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="Fairplay responsible gaming"
            />
          </div>
        </div>
      </section>

      {/* Main Philosophy & Tools */}
      <section className="py-24 relative">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase leading-none">
                OUR PHILOSOPHY: <br/><span className="text-primary">CONTROL & DISCIPLINE</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Gaming should always be a form of professional-grade entertainment, not a primary income source. Fairplay encourages all elite members to maintain absolute control.
                </p>
                <div className="grid grid-cols-1 gap-4 pt-4">
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                    <Scale className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-white uppercase tracking-wider mb-2 italic">Institutional Limits</h4>
                      <p className="text-sm">Set daily or monthly deposit caps. Once reached, our automated core prevents further influx until the period resets.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                    <Clock className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-white uppercase tracking-wider mb-2 italic">Session Monitoring</h4>
                      <p className="text-sm">Real-time alerts that keep you informed of your total time on-platform to ensure a balanced lifestyle.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square max-w-lg mx-auto w-full"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
              <div className="relative z-10 w-full h-full bg-linear-to-br from-white/10 to-transparent rounded-[40px] border border-white/10 p-1 flex items-center justify-center">
                <div className="bg-black/40 backdrop-blur-xl w-full h-full rounded-[38px] flex flex-col items-center justify-center p-12 text-center">
                  <ShieldCheck className="w-20 h-20 text-primary mb-8" />
                  <h3 className="text-3xl font-black italic tracking-tighter mb-4 uppercase">Elite Protection</h3>
                  <p className="text-muted-foreground mb-8 text-sm">Our concierge is available 24/7 to help you implement self-exclusion or limit-setting protocols immediately.</p>
                  <a 
                    href={waLink("Hi Fairplay, I want to discuss my gaming limits")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-black italic uppercase tracking-widest hover:shadow-[0_0_30px_rgba(255,100,0,0.3)] transition-all"
                  >
                    <Phone className="w-4 h-4" /> VIP CONCIERGE
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recognition & Support block */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">GLOBAL <span className="text-primary not-italic">SAFETY</span> STANDARDS</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Operating under strict 2026 international guidelines to ensure every bettor's well-being.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: AlertCircle,
                title: "PATTERN DETECTION",
                desc: "AI-driven monitoring of betting behavior to identify early signs of problematic engagement."
              },
              {
                icon: Star,
                title: "KYC VERIFICATION",
                desc: "Strict age verification to ensure a zero-tolerance policy for underage gambling."
              },
              {
                icon: Award,
                title: "CERTIFIED FAIRNESS",
                desc: "Exchange markets settle on official results. Check the rules page if a book looks wrong."
              },
              {
                icon: Target,
                title: "SUPPORT ACCESS",
                desc: "Direct integration with global support organizations for immediate professional assistance."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-primary/50 transition-all"
              >
                <item.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h4 className="text-xl font-bold mb-4 tracking-tight uppercase italic">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    
      <FAQSection 
        title="Responsible Gaming FAQ"
        faqs={[
          { q: 'How do I set a deposit limit?', a: 'Ask WhatsApp to cap daily or weekly deposits on your Fairplay ID. Limits help if betting stops being recreation.' },
          { q: 'What is self-exclusion?', a: 'A freeze on the ID for a period you choose. Do not open a new ID to skip it.' },
          { q: 'Who do I contact if betting feels compulsory?', a: 'Pause the ID first. Use a local help line for gambling harm. Fairplay support can close markets; it is not therapy.' },
          { q: 'Can family members lock my ID?', a: 'Only if they control the registered number. We will not discuss your ID with a third party without that login.' },
        ]}
      />
    </div>)
}

