import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Landmark as Trophy, Shield, Zap, Info, Star, ShieldCheck, Target, Users, Globe, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/fairdeal')({
  component: Fairdeal,
  head: () => pageHeadFor('/fairdeal'),
})

function Fairdeal() {
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
              <Star className="w-4 h-4 fill-primary" /> Partner book
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              FAIRDEAL <span className="text-primary not-italic">EXCHANGE</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Fairdeal is a partner book in the Fairplay network. Confirm with WhatsApp before you fund a second wallet.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="AI Overview: Fairdeal"
            />
          </div>
        </div>
      </section>

      {/* Technical Advantage */}
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
                MAIN ID VS <br/><span className="text-primary">FAIRDEAL</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Most cricket and casino on this site use the main Fairplay ID. Fairdeal is only if WhatsApp issued it. Funding a Fairdeal link from social media is a common scam.
                </p>
                <p>
                  Login is OTP on the mobile the desk registered. Payouts on Fairplay usually land about 180 minutes after the official result, if nothing is still in play.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <Zap className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-white tracking-tight mb-1">Confirm the slip</h4>
                    <p className="text-xs text-muted-foreground">In-play prices move. A delayed tap is a worse price.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-white tracking-tight mb-1">Official WhatsApp</h4>
                    <p className="text-xs text-muted-foreground">Only the number on this site.</p>
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
                  <Trophy className="w-20 h-20 text-primary mb-8" />
                  <h3 className="text-3xl font-bold tracking-tight mb-4">ONE WALLET UNLESS ASKED</h3>
                  <p className="text-muted-foreground">Do not split a bankroll across two IDs hoping it is the same desk.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase mb-16">FAIRPLAY <span className="text-primary not-italic">DESK</span> NOTES</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-8 rounded-xl bg-white/2 border border-white/5">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">OTP</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Fairplay login</div>
            </div>
            <div className="p-8 rounded-xl bg-white/2 border border-white/5">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">UPI</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">After you log in</div>
            </div>
            <div className="p-8 rounded-xl bg-white/2 border border-white/5">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">180m</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Typical payout</div>
            </div>
            <div className="p-8 rounded-xl bg-white/2 border border-white/5">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">1 ID</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Unless desk issues both</div>
            </div>
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
              Message the WhatsApp number on this site. You will log in with that mobile and OTP.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={waLink("Hi Fairplay, I want to get Fairdeal Exchange ID")}
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
        title="Fairdeal FAQ"
        faqs={[
          { q: 'Is Fairdeal the main Fairplay exchange?', a: 'Fairdeal is a partner. Most cricket and casino on this site use the main Fairplay ID.' },
          { q: 'Do I need both IDs?', a: 'Only if WhatsApp issued both. Funding a Fairdeal link from social media is a common scam.' },
          { q: 'How do I open the Fairplay ID?', a: 'Message the WhatsApp number on this site. Login is OTP on that mobile.' },
          { q: 'When do Fairplay payouts land?', a: 'About 180 minutes after the official result, if nothing is still in play.' },
        ]}
      />
    </div>)
}
