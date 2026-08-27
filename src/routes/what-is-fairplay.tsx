import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Trophy, Shield, Zap, Globe, Star, ArrowRight, Target, Users, Landmark, Award, ShieldCheck, Cpu, Wallet, Headphones } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/what-is-fairplay')({
  head: () => pageHeadFor('/what-is-fairplay'),
  component: WhatIsFairplayPage,
})

function WhatIsFairplayPage() {
  return (
    <div className="flex flex-col bg-background text-foreground overflow-hidden">
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,100,0,0.1),transparent_50%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black tracking-widest uppercase mb-8">
              <Cpu className="w-4 h-4" /> Cricket ID and sports exchange
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              What is <span className="text-primary not-italic">Fairplay</span>?
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
              Fairplay is a sports exchange and live casino on one Fairplay ID: cricket and IPL, football, tennis, UPI deposits, and WhatsApp help if login or payouts stick.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview title="Platform Definition Audit" />
          </div>
        </div>
      </section>

      {/* Core Concept: The Exchange Model */}
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
                THE <span className="text-primary">EXCHANGE</span> ADVANTAGE
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Unlike traditional bookmakers where you bet against the house, Fairplay operates on a <strong>Peer-to-Peer (P2P) Exchange model</strong>. This means you are betting against other players worldwide.
                </p>
                <p>
                  This structural difference is why Fairplay can offer <strong>better odds</strong> and <strong>higher limits</strong>. We don't need to build in a massive "house edge" because we simply facilitate the marketplace where winners thrive.
                </p>
              </div>
              
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-4">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black italic">01</div>
                   <p className="font-bold text-white uppercase tracking-tight">NO HOUSE BIAS</p>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black italic">02</div>
                   <p className="font-bold text-white uppercase tracking-tight">REAL-TIME MARKET LIQUIDITY</p>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black italic">03</div>
                   <p className="font-bold text-white uppercase tracking-tight">TRANSPARENT WINNINGS</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square max-w-md mx-auto w-full group"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full group-hover:bg-primary/30 transition-all duration-700" />
              <div className="relative z-10 w-full h-full bg-linear-to-br from-white/10 to-transparent rounded-[48px] border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl p-12 flex flex-col items-center justify-center text-center">
                  <ShieldCheck className="w-24 h-24 text-primary mb-8 animate-bounce-slow" />
                  <h3 className="text-3xl font-black italic mb-4">100% SECURE</h3>
                  <p className="text-muted-foreground">Every Fairplay ID is backed by bank-grade encryption and verified liquidity pools.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deep SEO Guide: How it Works */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-12 text-center leading-tight">HOW <span className="text-primary not-italic">FAIRPLAY</span> REVOLUTIONIZES GAMING</h2>
            
            <div className="space-y-12 text-muted-foreground leading-relaxed text-lg">
              <section>
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tight mb-6 flex items-center gap-3">
                  <Wallet className="w-6 h-6 text-primary" /> THE WALLET INFRASTRUCTURE
                </h3>
                <p>
                  Fairplay utilizes a centralized wallet system that allows you to move funds seamlessly between different sport markets and casino floors. Whether you are backing India in an <strong>IPL match</strong> or playing a hand of <strong>Live Teen Patti</strong>, your funds are managed through a single, secure gateway. This eliminates the need for multiple accounts and provides a holistic view of your betting portfolio.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tight mb-6 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-primary" /> UNRIVALED MARKET DEPTH
                </h3>
                <p>
                  When people ask "What is Fairplay?", the answer lies in our data feeds. We aggregate liquidity from the world's largest betting exchanges, meaning you can place bets of almost any size without shifting the market. This is critical for <strong>high-rollers</strong> and professional bettors who require stability and "unfillable" market depth.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tight mb-6 flex items-center gap-3">
                  <Headphones className="w-6 h-6 text-primary" /> THE WHATSAPP ECOSYSTEM
                </h3>
                <p>
                  Accessibility is at the core of the Fairplay philosophy. Our integration with <strong>WhatsApp</strong> allows for 60-second ID generation, instant deposits, and 24/7 withdrawals. In an industry often plagued by slow customer service, Fairplay stands out by providing direct, human interaction at every step of your journey.
                </p>
              </section>

              <div className="p-8 rounded-[40px] bg-primary/5 border border-primary/20 my-16 text-center">
                 <h4 className="text-2xl font-black text-white italic mb-4">THE FAIRPLAY VERDICT</h4>
                 <p className="italic">"Fairplay is the gold standard for Indian bettors who demand speed, security, and the highest possible returns on their investment."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-4">KEY <span className="text-primary not-italic">ATTRIBUTES</span></h2>
             <p className="text-muted-foreground">The pillars that uphold the Fairplay reputation.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "GLOBAL SPORTSBOOK",
                desc: "Over 30+ sports including Cricket, Football, Tennis, Horse Racing, and Esports with 5000+ live markets daily.",
                icon: Trophy
              },
              {
                title: "PREMIUM CASINO",
                desc: "Live dealers for Roulette, Baccarat, Blackjack, and traditional Indian favorites like Andar Bahar.",
                icon: Star
              },
              {
                title: "FAIRPLAY WITHDRAWALS",
                desc: "UPI or bank after the market settles — usually within 180 minutes of the official result.",
                icon: Zap
              }
            ].map((feature, i) => (
              <div key={i} className="p-10 rounded-[32px] bg-white/2 border border-white/5 hover:border-primary transition-all group">
                <feature.icon className="w-14 h-14 text-primary mb-8 group-hover:scale-110 transition-transform duration-500" />
                <h4 className="text-2xl font-black italic mb-4 uppercase tracking-tighter">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Comparison Table (Visual) */}
      <section className="py-24 border-t border-white/5 bg-zinc-950/50">
        <div className="container max-w-5xl mx-auto px-4">
           <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-12 text-center">HOW WE <span className="text-primary not-italic">COMPARE</span></h2>
           <div className="overflow-hidden rounded-[32px] border border-white/10 bg-black/40 backdrop-blur-xl">
             <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="border-b border-white/10 bg-white/5">
                   <th className="p-6 text-xs font-black tracking-widest uppercase text-muted-foreground">FEATURE</th>
                   <th className="p-6 text-xs font-black tracking-widest uppercase text-primary italic">FAIRPLAY</th>
                   <th className="p-6 text-xs font-black tracking-widest uppercase text-muted-foreground">OTHERS</th>
                 </tr>
               </thead>
               <tbody className="text-sm font-bold">
                 <tr className="border-b border-white/5">
                   <td className="p-6 text-white uppercase tracking-tight">Withdrawal Speed</td>
                   <td className="p-6 text-primary">About 180 minutes after the result</td>
                   <td className="p-6 text-muted-foreground">6-24 Hours</td>
                 </tr>
                 <tr className="border-b border-white/5">
                   <td className="p-6 text-white uppercase tracking-tight">Market Odds</td>
                   <td className="p-6 text-primary">Direct Exchange (High)</td>
                   <td className="p-6 text-muted-foreground">Bookmaker (Fixed/Low)</td>
                 </tr>
                 <tr className="border-b border-white/5">
                   <td className="p-6 text-white uppercase tracking-tight">Data Security</td>
                   <td className="p-6 text-primary">256-bit SSL + KYC</td>
                   <td className="p-6 text-muted-foreground">Basic Encryption</td>
                 </tr>
                 <tr>
                   <td className="p-6 text-white uppercase tracking-tight">Support</td>
                   <td className="p-6 text-primary">Human Dedicated 24/7</td>
                   <td className="p-6 text-muted-foreground">Bot Based / Delayed</td>
                 </tr>
               </tbody>
             </table>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">
              EXPERIENCE THE <span className="text-primary not-italic underline decoration-primary/30 underline-offset-8">DIFFERENCE</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get a Fairplay ID, deposit with UPI, then open cricket or casino on the same login.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <a 
                href={waLink("I want a Fairplay ID")}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-primary text-primary-foreground font-black px-12 py-6 rounded-2xl hover:bg-primary/90 transition-all shadow-[0_20px_50px_-15px_rgba(255,100,0,0.5)] flex items-center justify-center gap-3 text-xl group"
              >
                Get a Fairplay ID <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link to="/fairplay-id" className="w-full sm:w-auto px-12 py-6 border border-white/10 rounded-2xl font-bold hover:bg-white/5 transition-colors text-xl">
                How a Fairplay ID works
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    
      <FAQSection 
        title="What is Fairplay?"
        faqs={[
          { q: 'What is a Fairplay ID?', a: 'The login for cricket, IPL, football, tennis and live casino. WhatsApp creates it; you fund it with UPI. One ID, not a stack of books.' },
          { q: 'Is Fairplay a bookmaker or an exchange?', a: 'Fairplay is a sports exchange: you back or lay against other players. Casino tables sit on the same wallet.' },
          { q: 'How do I start on Fairplay?', a: 'Get a Fairplay ID, log in with OTP, deposit with UPI, then open IPL or the schedule. Withdraw after markets settle, usually within 180 minutes.' },
          { q: 'Does Fairplay have an app?', a: 'Yes. The Fairplay app uses the same ID as the website. Install Android APK from the app page or add iOS to the home screen.' },
        ]}
      />
    </div>)
}
