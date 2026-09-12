import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Target, Zap, Shield, Smartphone, Globe, MessageSquare, ArrowRight, Dices, Trophy, Swords, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { ReviewedBadge } from '@/components/ReviewedBadge'
import { CONTENT_REVIEWED } from '@/lib/content-review-dates'


export const Route = createFileRoute('/services')({
  head: () => pageHeadFor('/services'),
  component: ServicesPage,
})

function ServicesPage() {
  const services = [
    {
      title: "Fairplay ID",
      description: "One cricket ID for IPL, football, tennis and live tables. WhatsApp opens it, UPI funds it. Partner books like 11xplay or Gold365 only if the desk issues them.",
      icon: Shield,
      color: "text-flame",
      bg: "bg-flame/10"
    },
    {
      title: "Cricket Exchange",
      description: "Match winner, toss, fancy sessions and in-play on IPL, WPL, T20 and Tests. Same Fairplay ID. Payouts usually within 180 minutes after the result.",
      icon: Trophy,
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      title: "Live Casino",
      description: "Teen Patti, Andar Bahar, Blackjack and Roulette on the same Fairplay wallet you use for cricket. Deposit with UPI first.",
      icon: Swords,
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    {
      title: "Football Betting",
      description: "EPL, La Liga and Champions League on the same Fairplay login. Fund once with UPI, then switch sports on the exchange.",
      icon: Target,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      title: "Horse Race Betting",
      description: "Win, place and in-running on Indian and overseas cards. Same Fairplay wallet as cricket. WhatsApp if a race is void.",
      icon: Zap,
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    },
    {
      title: "Tennis Exchange",
      description: "Grand Slam and tour match books on the Fairplay cricket ID. Point-by-point when the fixture is listed.",
      icon: Globe,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10"
    }
  ]


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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-tight mb-8">
              <Star className="w-4 h-4 fill-primary" /> Cricket desk since 2017
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              Fairplay <span className="text-primary">services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6">
              One Fairplay ID for cricket, football, tennis, racing and live tables. WhatsApp to open it, UPI to fund it, about 180 minutes to cash out after settlement.
            </p>
            <ReviewedBadge iso={CONTENT_REVIEWED["/services"]} className="mb-12 justify-center" />
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
                className="p-8 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all group"
              >
                <div className={`w-14 h-14 ${service.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link 
                  to={service.title === "Fairplay ID" ? "/fairplay-id" : service.title === "Cricket Exchange" ? "/betting" : service.title === "Live Casino" ? "/casino" : service.title === "Football Betting" ? "/betting" : service.title === "Horse Race Betting" ? "/horse-racing" : service.title === "Tennis Exchange" ? "/betting" : "/app"}
                  search={service.title === "Cricket Exchange" ? { category: 'cricket' } : service.title === "Live Casino" ? { type: 'live' } : service.title === "Football Betting" ? { category: 'football' } : service.title === "Tennis Exchange" ? { category: 'tennis' } : {}}
                  className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all"
                >
                  Open this desk <ArrowRight className="w-4 h-4 ml-2" />
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
            <h2 className="text-3xl font-bold tracking-tight mb-4">Partner <span className="text-primary">books</span></h2>
            <p className="text-muted-foreground">The desk may issue 11xplay, Gold365 or Laser247. They are not automatic with every Fairplay ID.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['11xplay', 'Gold365', 'Laser247', 'Cricbet99', 'Fairdeal'].map((name) => (
              <Link 
                key={name} 
                to={name === '11xplay' ? '/11xplay' : name === 'Gold365' ? '/gold365' : name === 'Laser247' ? '/laser247' : name === 'Cricbet99' ? '/cricbet99' : name === 'Fairdeal' ? '/fairdeal' : '/services'}
                className="p-6 rounded-xl bg-card border border-border flex items-center justify-center group hover:border-primary transition-colors"
              >
                <span className="text-lg font-bold tracking-tight opacity-50 group-hover:opacity-100 transition-opacity">{name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Network Detailed Section */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Fairplay <span className="text-primary">exchange list</span></h2>
            <p className="text-muted-foreground text-lg">Cricket and casino sit on the main Fairplay ID unless WhatsApp tells you a partner login was issued.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "11xplay", desc: "Cricket and football books the desk may issue. Separate login unless WhatsApp says they linked." },
              { name: "Gold365", desc: "Racing and international sports when the desk opens that ID. Same UPI wallet rules." },
              { name: "Cricbet99", desc: "Extra cricket markets if listed on your Fairplay ID. Not a second WhatsApp number." },
              { name: "Laser247", desc: "Live tables and sports the desk names. Random Telegram links are clones." }
            ].map((p, i) => (
              <Link 
                key={i} 
                to={p.name === "11xplay" ? "/11xplay" : p.name === "Gold365" ? "/gold365" : p.name === "Cricbet99" ? "/cricbet99" : p.name === "Laser247" ? "/laser247" : "/services"}
                className="p-8 bg-background border border-border rounded-xl hover:border-primary/50 transition-all block group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary font-bold tracking-tight text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">FP</div>
                <h4 className="text-xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">{p.name}</h4>
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
              <h2 className="text-4xl font-bold tracking-tight">How the <span className="text-primary">desk</span> works</h2>
              <div className="space-y-6">
                {[
                  { title: "WhatsApp from this site", desc: "New Fairplay IDs, OTP and stuck UPI go through the number published here — not ads.", icon: MessageSquare },
                  { title: "UPI in, 180-minute out", desc: "Deposit after login. Withdrawals usually land about 180 minutes after the market settles.", icon: Zap },
                  { title: "One cricket ID", desc: "IPL, football, tennis and tables share the login. You do not buy a second ID in a chat.", icon: Shield }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-12 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
               <h3 className="text-2xl font-bold tracking-tight mb-6">Need the cricket desk?</h3>
               <p className="text-muted-foreground mb-10 leading-relaxed">WhatsApp with your Fairplay ID for a new login, a UPI deposit, or a payout past 180 minutes.</p>
               <button className="w-full py-5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-flame hover:text-flame-foreground transition-colors flex items-center justify-center gap-3">
                 <MessageSquare className="w-5 h-5 fill-current" /> WhatsApp Fairplay
               </button>
            </div>
          </div>
        </div>
      </section>

      <FAQSection 
        title="Fairplay services questions"
        faqs={[
          { q: "Which exchanges can I access with a Fairplay ID?", a: "Cricket and casino sit on the Fairplay ID. 11xplay, Gold365, Laser247 or Cricbet99 only if WhatsApp issues them — they are not automatic." },
          { q: "Does Fairplay have live casino?", a: "Yes. Teen Patti, Baccarat and Roulette use the same Fairplay wallet as cricket. Deposit with UPI first." },
          { q: "How does the wallet work across sports?", a: "One Fairplay ID, one UPI wallet. Switch cricket, football or tables without a second deposit." },
          { q: "Are there limits on horse racing?", a: "Limits show on the slip. Racing uses the same Fairplay wallet. Payouts usually take about 180 minutes after the result." }
        ]}
      />

    </div>
  )
}
