import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Swords, Zap, Shield, Target, Smartphone, Wallet, Star, ShieldCheck, Users, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { ReviewedBadge } from '@/components/ReviewedBadge'
import { CONTENT_REVIEWED } from '@/lib/content-review-dates'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/cricbet99')({
  component: PlatformCricbet99,
  head: () => pageHeadFor('/cricbet99'),
})

function PlatformCricbet99() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-8">
              <Star className="w-4 h-4 fill-primary" /> Cricket-leaning partner
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              CRICBET<span className="text-primary not-italic">99</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Cricbet99 is a cricket-leaning partner name. Ask WhatsApp if your Fairplay ID already covers it. Deposit only to the account shown after you log in.
            </p>
            <ReviewedBadge iso={CONTENT_REVIEWED["/cricbet99"]} className="mt-5 justify-center" />
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview
              title="AI Overview: Cricbet99"
            />
          </div>
        </div>
      </section>

      {/* Specialist Advantage */}
      <section className="py-24 relative">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-none">
                CRICKET <br/><span className="text-primary">ON THE DESK</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Fancy markets follow the scorecard. Session books wait for that over to finish. Football and tennis on this site sit on the Fairplay ID — partner books vary, so ask before you stake.
                </p>
                <p>
                  WhatsApp with the ID name you actually logged into, plus UTR if money is missing. Clones copy logos and ask for UPI to a personal name.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <Zap className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-white tracking-tight mb-1">Ball-by-ball</h4>
                    <p className="text-xs text-muted-foreground">Confirm the slip. Fancy waits on the official over.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-white tracking-tight mb-1">Fairplay ID</h4>
                    <p className="text-xs text-muted-foreground">OTP login. UPI after you are in.</p>
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
              <div className="relative z-10 w-full h-full bg-linear-to-br from-white/10 to-transparent rounded-xl border border-white/10 p-1 flex items-center justify-center">
                <div className="bg-black/40 backdrop-blur-xl w-full h-full rounded-xl flex flex-col items-center justify-center p-12 text-center">
                  <Swords className="w-20 h-20 text-primary mb-8" />
                  <h3 className="text-3xl font-bold tracking-tight mb-4">IPL ON THIS SCHEDULE</h3>
                  <p className="text-muted-foreground">Use the Fairplay cricket ID unless the desk issued Cricbet99 for a market.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase mb-6">THE <span className="text-primary not-italic">CRICBET99</span> DESK</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Partner book. Fairplay payouts on the Fairplay ID are about 180 minutes after settlement.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "FANCY SETTLEMENT",
                desc: "Every session waits on the official scorecard. A void returns the stake to the wallet."
              },
              {
                icon: Shield,
                title: "WHATSAPP TICKETS",
                desc: "Stuck money? Message the published number with the ID you logged into and the UTR."
              },
              {
                icon: Wallet,
                title: "UPI TO THE RIGHT LOGIN",
                desc: "Only the deposit account shown after login counts. Ignore social-media UPI handles."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-xl bg-white/2 border border-white/5 hover:border-primary/50 transition-all"
              >
                <item.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h4 className="text-xl font-bold mb-4 tracking-tight">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
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
              OPEN A <span className="text-primary not-italic underline decoration-primary/30 underline-offset-8">FAIRPLAY ID</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              WhatsApp this site. Football and tennis on this schedule use the Fairplay login unless the desk said otherwise.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={waLink("Hi Fairplay, I want to get Cricbet99 Exchange ID")}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-12 py-5 bg-primary text-primary-foreground font-bold tracking-tight rounded-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(47,185,74,0.3)] text-center"
              >
                Open an ID
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    
      <FAQSection 
        title="Cricbet99 FAQ"
        faqs={[
          { q: 'Is Cricbet99 the same as Fairplay?', a: 'It is a cricket-leaning partner name. Ask WhatsApp if your Fairplay ID already covers it.' },
          { q: 'Where should I deposit?', a: 'Only to the account shown after you log into the ID the desk gave you.' },
          { q: 'Can I use Cricbet99 for football?', a: 'Football and tennis on this site sit on the Fairplay ID. Partner books vary — ask before you stake.' },
          { q: 'How do I get help?', a: 'WhatsApp with the ID name you actually logged into, plus UTR if money is missing.' },
        ]}
      />
    </div>)
}
