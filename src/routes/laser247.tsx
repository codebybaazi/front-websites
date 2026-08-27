import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Swords, Zap, Shield, Target, Smartphone, Wallet, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/laser247')({
  component: PlatformLaser247,
  head: () => pageHeadFor('/laser247'),
})

function PlatformLaser247() {
  return (
    <div className="flex flex-col bg-background text-foreground overflow-hidden">
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.08),transparent_70%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-8">
              <Star className="w-4 h-4 fill-primary" /> The Precision Standard 2026
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9] uppercase">
              LASER<span className="text-primary not-italic">247</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Laser-focused accuracy. 24/7 reliability. Experience the pinnacle of exchange technology with Laser247, the preferred choice for high-volume traders in the Fairplay network.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <a 
                href={waLink("Hi Fairplay, I want to activate a Laser247 Elite ID")}
                className="bg-primary text-primary-foreground px-10 py-5 rounded-2xl font-black italic uppercase tracking-widest text-lg shadow-[0_0_30px_rgba(255,100,0,0.3)] hover:scale-105 transition-all"
              >
                ACTIVATE LASER ID
              </a>
            </div>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="AI Overview: Laser247 Technical Stack"
            />
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase leading-none">
                THE <span className="text-primary">LASER</span> <br/>ADVANTAGE
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Target, title: 'Precision Odds', desc: 'In-play prices move with the match. Confirm the slip.' },
                  { icon: Smartphone, title: 'Mobile Optimized', desc: 'Fully responsive interface for seamless betting on any device, anywhere.' },
                  { icon: Wallet, title: 'Instant Funding', desc: 'Direct UPI, IMPS, and Crypto integration for immediate market entry.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                    <div className="p-3 bg-primary/10 rounded-xl h-fit">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase italic text-lg tracking-tight mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video w-full bg-primary/5 rounded-[40px] border border-primary/20 p-1 flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                 <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-laser-horizontal"></div>
                 <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-laser-vertical"></div>
              </div>
              <div className="bg-black/40 backdrop-blur-xl w-full h-full rounded-[38px] flex flex-col items-center justify-center p-12 text-center relative z-10">
                <Swords className="w-20 h-20 text-primary mb-6" />
                <h3 className="text-3xl font-black italic tracking-tighter mb-2">ELITE MARKET ACCESS</h3>
                <p className="text-muted-foreground">Join 500,000+ active professional users today on India's sharpest exchange.</p>
              </div>
            </motion.div>
          </div>

          {/* Security Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-12 glass-card bg-linear-to-b from-primary/5 to-transparent rounded-[40px] border border-white/5"
          >
            <h2 className="text-3xl font-black italic uppercase mb-8 tracking-tight">SECURITY & <span className="text-primary">TRUST</span></h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10 text-lg">
              As a verified Laser247 partner, Fairplay ensures that your funds are protected by enterprise-grade encryption and that every withdrawal request is handled with the highest priority settlement protocol.
            </p>
            <div className="flex flex-wrap justify-center gap-8 py-4 px-8 bg-black/40 rounded-full border border-white/5 w-fit mx-auto">
               <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> <span className="text-[10px] font-black uppercase tracking-widest">Secured Vault</span></div>
               <div className="hidden sm:block w-px h-4 bg-white/10"></div>
               <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-primary" /> <span className="text-[10px] font-black uppercase tracking-widest">24/7 Active</span></div>
               <div className="hidden sm:block w-px h-4 bg-white/10"></div>
               <div className="flex items-center gap-2"><Target className="w-4 h-4 text-primary" /> <span className="text-[10px] font-black uppercase tracking-widest">Certified Odds</span></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* High-Intensity CTA Section */}
      <section className="py-24 border-t border-white/5 bg-zinc-950/50">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-white/2 backdrop-blur-3xl border border-white/10 p-12 md:p-20 rounded-[40px]"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 italic tracking-tighter leading-none">
              EXPERIENCE THE <span className="text-primary not-italic underline decoration-primary/30 underline-offset-8">SHARPEST</span> EXCHANGE
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Don't compromise on speed. Join Laser247 and trade with the precision that professional betting demands.
            </p>
            <div className="flex justify-center">
              <a 
                href={waLink("Hi Fairplay, I'm ready to join Laser247 Elite")}
                className="px-12 py-5 bg-primary text-primary-foreground rounded-2xl font-black italic uppercase tracking-[0.2em] hover:shadow-[0_0_40px_rgba(255,100,0,0.5)] transition-all flex items-center gap-3"
              >
                <Zap className="w-5 h-5 fill-current" /> Get a Fairplay ID
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    
      <FAQSection 
        title="Laser247 FAQ"
        faqs={[
          { q: 'Is Laser247 the same login as Fairplay?', a: 'No. Laser247 is a partner-style book. Ask WhatsApp if your Fairplay ID already covers it.' },
          { q: 'Should I deposit to both?', a: 'Only if the desk issued both IDs. Two random deposits is how people lose money to clones.' },
          { q: 'Where do I bet IPL?', a: 'Use the Fairplay cricket ID for fixtures on this schedule unless the desk told you to use Laser247 for a market.' },
          { q: 'Who handles a stuck Laser247 payout?', a: 'If the ID was issued here, WhatsApp this number with that login name. Do not mix Fairplay UTRs with Laser247 tickets.' },
        ]}
      />
    </div>)
}
