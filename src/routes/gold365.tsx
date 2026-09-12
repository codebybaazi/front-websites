import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Swords, Zap, Shield, Crown, TrendingUp, Cpu, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { ReviewedBadge } from '@/components/ReviewedBadge'
import { CONTENT_REVIEWED } from '@/lib/content-review-dates'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/gold365')({
  component: PlatformGold365,
  head: () => pageHeadFor('/gold365'),
})

function PlatformGold365() {
  return (
    <div className="flex flex-col bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,185,74,0.08),transparent_70%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-bold tracking-widest uppercase mb-8">
              <Crown className="w-4 h-4 fill-yellow-500" /> Partner book on Fairplay
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9] uppercase text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 via-primary to-primary">
              GOLD<span className="text-white">365</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Gold365 sits in the Fairplay network. Ask WhatsApp before you fund it — it is not the same wallet as a Fairplay cricket ID unless the desk linked them.
            </p>
            <ReviewedBadge iso={CONTENT_REVIEWED["/gold365"]} className="mb-8 justify-center" />
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <a 
                href={waLink("Hi Fairplay, I want to get a Gold365 ID")}
                className="bg-primary text-primary-foreground px-10 py-5 rounded-xl font-bold tracking-tight text-lg shadow-[0_0_30px_rgba(47,185,74,0.3)] hover:scale-105 transition-all"
              >
                Ask WhatsApp for Gold365
              </a>
            </div>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="AI Overview: Gold365 Infrastructure"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: 'Cricket books', desc: 'IPL and international markets on the Gold365 login the desk issues — confirm the slip before you send.' },
              { icon: Cpu, title: 'Separate login', desc: 'Do not assume a Fairplay password opens Gold365. Ask WhatsApp if they are linked.' },
              { icon: Shield, title: 'UPI to the right ID', desc: 'Deposit only to the account shown after you log in. Clones ask for UPI to a personal name.' },
              { icon: Zap, title: 'Fairplay payouts', desc: 'On a Fairplay ID, withdrawals usually take about 180 minutes after settlement if KYC is clear.' },
              { icon: Swords, title: 'WhatsApp desk', desc: 'Stuck deposit? Message this site’s number with ID, amount and UTR. Gold365 tickets stay on that book.' },
              { icon: Crown, title: 'When to use it', desc: 'Only if WhatsApp issued a Gold365 book. Most IPL on this schedule uses the main Fairplay ID.' },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 group hover:bg-white/[0.02] transition-colors border border-white/5 hover:border-primary/30"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="glass-card p-12 rounded-xl overflow-hidden relative border-primary/20 bg-linear-to-br from-white/2 to-transparent">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <Crown className="w-64 h-64 text-yellow-500" />
            </div>
            <div className="max-w-3xl relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase mb-8">HOW GOLD365 <span className="text-primary">FITS</span></h2>
              <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                Treat Gold365 as a partner book. Cricket fixtures listed on this site use the Fairplay ID. If you already have Gold365, WhatsApp this site for a Fairplay login — you will sign in with that mobile and OTP.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {[
                  { value: "WhatsApp", label: "Open an ID" },
                  { value: "UPI", label: "Fund the wallet" },
                  { value: "180 min", label: "Fairplay payouts" },
                  { value: "OTP", label: "Fairplay login" }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 container max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/2 backdrop-blur-3xl border border-white/10 p-12 md:p-20 rounded-xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-none">
            OPEN A <span className="text-primary not-italic underline decoration-primary/30 underline-offset-8">FAIRPLAY ID</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Message the published WhatsApp. Do not move a Gold365 balance here automatically — withdraw there, then deposit to Fairplay with UPI if you are switching.
          </p>
          <div className="flex justify-center">
            <a 
              href={waLink("Hi Fairplay, I'm ready to open a Fairplay ID")}
              className="px-12 py-5 bg-primary text-primary-foreground rounded-xl font-bold tracking-tight hover:shadow-[0_0_40px_rgba(47,185,74,0.5)] transition-all flex items-center gap-3"
            >
              <Zap className="w-5 h-5 fill-current" /> Open an ID
            </a>
          </div>
        </motion.div>
      </section>
    
      <FAQSection 
        title="Gold365 FAQ"
        faqs={[
          { q: 'Is Gold365 a Fairplay wallet?', a: 'No, unless the desk linked them. Deposit only to the login you were given.' },
          { q: 'I already have Gold365. How do I get Fairplay?', a: 'WhatsApp this site for a Fairplay ID. You will log in with that mobile and OTP.' },
          { q: 'Which ID is for IPL fancy?', a: 'Fairplay cricket books are on this schedule. Gold365 markets stay on the Gold365 ID.' },
          { q: 'How long are Fairplay withdrawals?', a: 'Usually about 180 minutes after settlement if KYC is clear.' },
        ]}
      />
    </div>)
}
