import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Target, Zap, Shield, Smartphone, Globe, MessageSquare, ArrowRight, Dices, Trophy, Swords, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'


export const Route = createFileRoute('/services')({
  head: () => pageHeadFor('/services'),
  component: ServicesPage,
})

function ServicesPage() {
  const services = [
    {
      title: "Fairplay VIP ID",
      description: "Get a unified premium ID to access multiple top-tier exchanges including 11xplay, Gold365, and Laser247. Instant approval without KYC paperwork.",
      icon: Shield,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      title: "Cricket Exchange",
      description: "Back and lay on IPL, WPL, T20, and Test matches with real-time odds, highest liquidity, and 1-minute payouts.",
      icon: Trophy,
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      title: "Live Casino",
      description: "Experience the thrill of real-time Blackjack, Roulette, Teen Patti, and Andar Bahar with premium dealers and HD streaming.",
      icon: Swords,
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    {
      title: "Football Betting",
      description: "Place secure bets on international leagues like EPL, La Liga, and Champions League with deep markets and live in-play betting.",
      icon: Target,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      title: "Horse Race Betting",
      description: "Expert horse racing markets for Indian and International events with race insights and lightning-fast results.",
      icon: Zap,
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    },
    {
      title: "Tennis Exchange",
      description: "Bet on major Grand Slams and ATP/WTA tours with point-by-point updates and accurate match odds.",
      icon: Globe,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10"
    }
  ]


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
              <Star className="w-4 h-4 fill-primary" /> The Elite Service Standard
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              PREMIUM <span className="text-primary not-italic">SERVICES</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Fairplay provides a comprehensive ecosystem for the modern bettor, combining technology, security, and elite gaming variety.
            </p>
          </motion.div>
          
          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="Fairplay services"
            />
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-8 rounded-3xl bg-card/50 border border-border hover:border-primary/30 transition-all group"
              >
                <div className={`w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link 
                  to={service.title === "Fairplay VIP ID" ? "/fairplay-id" : service.title === "Cricket Exchange" ? "/betting" : service.title === "Live Casino" ? "/casino" : service.title === "Football Betting" ? "/betting" : service.title === "Horse Race Betting" ? "/horse-racing" : service.title === "Tennis Exchange" ? "/betting" : "/app"}
                  search={service.title === "Cricket Exchange" ? { category: 'cricket' } : service.title === "Live Casino" ? { type: 'live' } : service.title === "Football Betting" ? { category: 'football' } : service.title === "Tennis Exchange" ? { category: 'tennis' } : {}}
                  className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all"
                >
                  LEARN MORE <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized IDs section */}
      <section className="py-20 bg-black">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black italic mb-4">PLATFORM <span className="text-primary">NETWORK</span></h2>
            <p className="text-muted-foreground">We partner with the world's leading exchanges to bring you unmatched variety.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['11xplay', 'Gold365', 'Laser247', 'Cricbet99', 'Fairdeal'].map((name) => (
              <Link 
                key={name} 
                to={name === '11xplay' ? '/11xplay' : name === 'Gold365' ? '/gold365' : name === 'Laser247' ? '/laser247' : name === 'Cricbet99' ? '/cricbet99' : name === 'Fairdeal' ? '/fairdeal' : '/services'}
                className="p-6 rounded-xl bg-card border border-border flex items-center justify-center group hover:border-primary transition-colors"
              >
                <span className="text-lg font-black tracking-tighter italic opacity-50 group-hover:opacity-100 transition-opacity uppercase">{name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Network Detailed Section */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-4">THE FAIRPLAY <span className="text-primary not-italic">EXCHANGE NETWORK</span></h2>
            <p className="text-muted-foreground text-lg">One ID. Unlimited possibilities across the most prestigious betting platforms.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "11xplay", desc: "India's favorite sports exchange with deep liquidity for cricket and football markets." },
              { name: "Gold365", desc: "Premier platform for horse racing and international sporting events with 24/7 markets." },
              { name: "Cricbet99", desc: "Specialized cricket betting hub with exclusive player props and innings markets." },
              { name: "Laser247", desc: "High-stakes gaming and live casino exchange for professional bettors." }
            ].map((p, i) => (
              <Link 
                key={i} 
                to={p.name === "11xplay" ? "/11xplay" : p.name === "Gold365" ? "/gold365" : p.name === "Cricbet99" ? "/cricbet99" : p.name === "Laser247" ? "/laser247" : "/services"}
                className="p-8 bg-background border border-border rounded-3xl hover:border-primary/50 transition-all block group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary font-black italic uppercase text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">FP</div>
                <h4 className="text-xl font-black italic uppercase mb-4 tracking-tight group-hover:text-primary transition-colors">{p.name}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Reliability */}
      <section className="py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black italic uppercase tracking-tighter">OUR SERVICE <span className="text-primary not-italic">COMMITMENT</span></h2>
              <div className="space-y-6">
                {[
                  { title: "24/7 Dedicated Support", desc: "Reach our expert agents via WhatsApp or Live Chat anytime for instant assistance.", icon: MessageSquare },
                  { title: "Instant Transaction Engine", desc: "Deposits reflect in seconds; withdrawals are processed through verified elite channels.", icon: Zap },
                  { title: "Zero KYC Friction", desc: "Start betting within 1 minute of signing up. We value your privacy and time.", icon: Shield }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 uppercase italic tracking-tight">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card border border-border rounded-[3rem] p-12 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
               <h3 className="text-2xl font-black italic uppercase mb-6 tracking-tight">Need Assistance?</h3>
               <p className="text-muted-foreground mb-10 leading-relaxed">Our premium support team is standing by to help you with account creation, deposits, or any technical queries.</p>
               <button className="w-full py-5 bg-primary text-primary-foreground font-black rounded-2xl hover:brightness-110 transition-all shadow-2xl flex items-center justify-center gap-3">
                 <MessageSquare className="w-5 h-5 fill-current" /> CHAT WITH A VIP AGENT
               </button>
            </div>
          </div>
        </div>
      </section>

      <FAQSection 
        title="Service Standards FAQ"
        faqs={[
          { q: "Which exchanges can I access with a VIP ID?", a: "A Fairplay VIP ID gives you elite access to 11xplay, Gold365, Laser247, and Cricbet99 through a single unified wallet." },
          { q: "Does Fairplay offer HD Live Casino?", a: "Yes, our Live Casino services feature 4K streaming and professional dealers for classics like Teen Patti, Baccarat, and Roulette." },
          { q: "How secure is the unified wallet system?", a: "We use 256-bit bank-grade encryption to secure your capital as it moves between different exchange markets." },
          { q: "Are there limits on Horse Racing bets?", a: "Fairplay provides the highest betting limits in the industry for both Indian and International racing events." }
        ]}
      />

    </div>
  )
}

