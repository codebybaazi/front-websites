import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Swords, Zap, Shield, Target, Smartphone, Wallet, Star, ShieldCheck, Users, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/cricbet99')({
  component: PlatformCricbet99,
  head: () => pageHeadFor('/cricbet99'),
})

function PlatformCricbet99() {
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
              <Star className="w-4 h-4 fill-primary" /> The Cricket Standard
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              CRICBET<span className="text-primary not-italic">99</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              The ultimate destination for cricket betting enthusiasts. Cricbet99 delivers elite-level depth for IPL, ICC events, and international fixtures, fully integrated with the Fairplay ecosystem.
            </p>
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
              <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase leading-none">
                CRICKET <br/><span className="text-primary">SPECIALIZATION</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Cricbet99, we recognize that cricket is more than just a sport—it's a passion. Our platform is engineered to provide ball-by-ball fancy markets that react to every delivery instantly, ensuring you never miss a moment.
                </p>
                <p>
                  By leveraging direct data feeds from global stadiums and a commitment to Fairplay's transparency standards, we've created a cricket betting powerhouse that stands alone in the Indian market.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <Zap className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-wider mb-1">Instant Odds</h4>
                    <p className="text-xs text-muted-foreground">Real-time ball-by-ball fancy markets.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-wider mb-1">Verified</h4>
                    <p className="text-xs text-muted-foreground">Fairplay network security & trust.</p>
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
                  <Swords className="w-20 h-20 text-primary mb-8" />
                  <h3 className="text-3xl font-black italic tracking-tighter mb-4">CRICKET POWERHOUSE</h3>
                  <p className="text-muted-foreground">Join the elite network specializing in high-stakes cricket exchange markets.</p>
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
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">THE <span className="text-primary not-italic">CRICBET99</span> ADVANTAGE</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Engineered specifically for the demands of professional cricket traders.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "BALL-BY-BALL DEPTH",
                desc: "Every run, wicket, and boundary covered with ball-by-ball fancy odds and real-time settlement."
              },
              {
                icon: Shield,
                title: "FAIRPLAY SECURITY",
                desc: "Every transaction is backed by the Fairplay network's multi-layered security and automated KYC."
              },
              {
                icon: Wallet,
                title: "RAPID CASHOUT",
                desc: "Withdraw your winnings through our 24/7 automated settlement engine, optimized for Indian bank transfers."
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
                <h4 className="text-xl font-bold mb-4 tracking-tight uppercase">{item.title}</h4>
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
             className="bg-zinc-900/50 backdrop-blur-3xl border border-white/10 p-12 md:p-20 rounded-[40px]"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 italic tracking-tighter leading-none">
              DOMINATE THE <span className="text-primary not-italic underline decoration-primary/30 underline-offset-8">CREASE</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Don't settle for basic betting. Join India's most advanced cricket exchange on Cricbet99.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={waLink("Hi Fairplay, I want to get Cricbet99 Exchange ID")}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-12 py-5 bg-primary text-primary-foreground font-black italic uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,100,0,0.3)] text-center"
              >
                GET CRICBET99 ID NOW
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