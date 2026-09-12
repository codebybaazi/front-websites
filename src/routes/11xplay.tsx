import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Swords, Globe, Zap, Users, Shield, Trophy, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { ReviewedBadge } from '@/components/ReviewedBadge'
import { CONTENT_REVIEWED } from '@/lib/content-review-dates'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/11xplay')({
  component: Platform11xPlay,
  head: () => pageHeadFor('/11xplay'),
})

function Platform11xPlay() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-8">
              <Star className="w-4 h-4 fill-primary" /> Partner cricket book
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9] uppercase">
              11X<span className="text-primary not-italic">PLAY</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              11xplay through Fairplay: one ID only if WhatsApp says they linked it. Do not assume the same password opens 11xplay.com.
            </p>
            <ReviewedBadge iso={CONTENT_REVIEWED["/11xplay"]} className="mb-8 justify-center" />
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <a 
                href={waLink("Hi Fairplay, I want to get an 11xPlay ID")}
                className="bg-primary text-primary-foreground px-10 py-5 rounded-xl font-bold tracking-tight text-lg shadow-[0_0_30px_rgba(47,185,74,0.3)] hover:scale-105 transition-all"
              >
                Ask WhatsApp for 11xplay
              </a>
            </div>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="AI Overview: 11Xplay Ecosystem"
            />
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              { icon: Globe, title: 'Cricket and casino', desc: 'Use the Fairplay cricket ID for fixtures on this schedule unless the desk told you to use 11xplay for a market.' },
              { icon: Users, title: 'Confirm the slip', desc: 'Each book has its own liquidity. The price that counts is the one you send after login.' },
              { icon: Shield, title: 'WhatsApp for IDs', desc: 'The number published on this Fairplay site. Clones use similar digits.' },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 hover:border-primary/50 transition-colors group border border-white/5"
              >
                <feature.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-none">
                11XPLAY <br/><span className="text-primary">VS FAIRPLAY ID</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Sometimes the desk issues a linked 11xplay book. There is no internal transfer button — withdraw there, then deposit here with UPI if you are moving a balance.
                </p>
                <ul className="grid sm:grid-cols-2 gap-4 pt-4">
                  {[
                    'OTP Fairplay login', 
                    'UPI on the issued ID', 
                    'IPL on this schedule', 
                    'Confirm the slip', 
                    '180-minute Fairplay payouts', 
                    'App from this site'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-white tracking-tight">
                      <Zap className="w-4 h-4 text-primary shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video w-full"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
              <div className="relative z-10 w-full h-full bg-linear-to-br from-white/10 to-transparent rounded-xl border border-white/10 p-1 flex items-center justify-center">
                <div className="bg-black/40 backdrop-blur-xl w-full h-full rounded-xl flex flex-col items-center justify-center p-12 text-center">
                  <Swords className="w-20 h-20 text-primary mb-6" />
                  <h3 className="text-2xl font-bold tracking-tight mb-2">TWO BOOKS, TWO WALLETS</h3>
                  <p className="text-muted-foreground">Do not deposit twice hoping it lands on one ID.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/5 bg-zinc-950/50">
        <div className="container max-w-5xl mx-auto px-4 text-center">
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
              Install Fairplay from this site’s app page. Third-party APKs are a common scam vector.
            </p>
            <div className="flex justify-center">
              <a 
                href={waLink("Hi Fairplay, I'm ready to join 11xPlay")}
                className="px-12 py-5 bg-primary text-primary-foreground rounded-xl font-bold tracking-tight hover:shadow-[0_0_40px_rgba(47,185,74,0.5)] transition-all flex items-center gap-3"
              >
                <Zap className="w-5 h-5 fill-current" /> Open an ID
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    
      <FAQSection 
        title="11Xplay FAQ"
        faqs={[
          { q: 'Does my Fairplay ID include 11xplay?', a: 'Sometimes. Ask WhatsApp. Do not assume the same password opens 11xplay.com.' },
          { q: 'Where do I install the app?', a: 'Fairplay APK or shortcut from this site’s app page. 11xplay has its own install if the desk issued that book.' },
          { q: 'Can I move 11xplay balance to Fairplay?', a: 'Withdraw there, then deposit here with UPI. There is no internal transfer button.' },
          { q: 'Which WhatsApp is official?', a: 'The number published on this Fairplay site. Clones use similar digits.' },
        ]}
      />
    </div>)
}
