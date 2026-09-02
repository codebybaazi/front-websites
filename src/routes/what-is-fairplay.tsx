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
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.705_0.198_142_/_0.08),transparent_55%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-[2px] w-8 brand-rule" />
              <span className="kicker">Since 2017</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]">
              What Fairplay is
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              A sports exchange and live casino on one Fairplay ID: cricket and IPL, football, tennis, UPI deposits, and a WhatsApp desk if login or a payout sticks.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview title="What Fairplay is" />
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.08]">
                Players bet each other.{" "}
                <span className="text-primary">The house is not the other side of every slip.</span>
              </h2>
              <div className="space-y-6 text-[15px] text-muted-foreground leading-relaxed">
                <p>
                  Fairplay runs as an exchange: you take a price against other players. Odds move in play. Settlement waits for the official result. That is the practical difference versus a shop that just quotes a number.
                </p>
                <p>
                  Because other players fill the book, a large IPL fancy can still match. You are not always paying a fat house line on every cricket stake.
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-4">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-md bg-primary/20 flex items-center justify-center text-primary font-bold tabular-nums">01</div>
                   <p className="font-semibold text-white tracking-tight">No house line on every market</p>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-md bg-primary/20 flex items-center justify-center text-primary font-bold tabular-nums">02</div>
                   <p className="font-semibold text-white tracking-tight">In-play cricket liquidity</p>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-md bg-primary/20 flex items-center justify-center text-primary font-bold tabular-nums">03</div>
                   <p className="font-semibold text-white tracking-tight">Result first, then the wallet</p>
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
              <div className="relative z-10 w-full h-full bg-linear-to-br from-white/10 to-transparent rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl p-12 flex flex-col items-center justify-center text-center">
                  <ShieldCheck className="w-24 h-24 text-primary mb-8 animate-bounce-slow" />
                  <h3 className="text-3xl font-bold tracking-tight mb-4">Curaçao-licensed exchange</h3>
                  <p className="text-muted-foreground">Fairplay has issued cricket IDs since 2017. OTP on login, SSL on the site, KYC when a payout needs it.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-center leading-tight">How a Fairplay ID actually works</h2>
            
            <div className="space-y-12 text-muted-foreground leading-relaxed text-[15px]">
              <section>
                <h3 className="text-2xl font-semibold text-white tracking-tight mb-6 flex items-center gap-3">
                  <Wallet className="w-6 h-6 text-primary" /> One wallet
                </h3>
                <p>
                  Cricket, football, tennis and live tables bill the same Fairplay wallet. Back India in an IPL match or sit a Teen Patti table — UPI in, UPI or bank out. You do not open a second ID for casino.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-white tracking-tight mb-6 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-primary" /> Exchange books, not a shop line
                </h3>
                <p>
                  Fairplay aggregates exchange liquidity, so a proper cricket stake can still fill in play. Fancy sessions and match winner sit on the same ID. If a market has no other side, the slip will say so — that is how an exchange behaves.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-white tracking-tight mb-6 flex items-center gap-3">
                  <Headphones className="w-6 h-6 text-primary" /> WhatsApp is the desk
                </h3>
                <p>
                  IDs are opened on WhatsApp. Deposits come in on UPI. If OTP never arrives or a payout sits after settlement, you message the official number on this site — not a random chat that DMs you first.
                </p>
              </section>

              <div className="p-8 rounded-xl bg-primary/5 border border-primary/20 my-16 text-center">
                 <h4 className="text-2xl font-semibold text-white tracking-tight mb-4">In one sentence</h4>
                 <p>Fairplay is a cricket ID with UPI and WhatsApp: IPL books, an exchange, live tables, and payouts that usually land within 180 minutes of the official result.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What the ID is used for</h2>
             <p className="text-muted-foreground">Not a feature list. The jobs the login is asked to do.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Sports exchange",
                desc: "Thirty-plus sports including cricket, football, tennis, horse racing and esports. IPL fancy and in-play when the fixture is listed.",
                icon: Trophy
              },
              {
                title: "Live casino",
                desc: "Teen Patti, Andar Bahar, roulette and blackjack on the same Fairplay wallet as cricket.",
                icon: Star
              },
              {
                title: "UPI payouts",
                desc: "UPI or bank after the market settles — usually within 180 minutes of the official result, unless KYC is still open.",
                icon: Zap
              }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-xl bg-white/2 border border-white/5 hover:border-primary transition-all group">
                <feature.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h4 className="text-xl font-semibold tracking-tight mb-3">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5 bg-zinc-950/50">
        <div className="container max-w-5xl mx-auto px-4">
           <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">How Fairplay compares</h2>
           <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl">
             <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="border-b border-white/10 bg-white/5">
                   <th className="p-6 text-xs font-semibold tracking-wider uppercase text-muted-foreground">Feature</th>
                   <th className="p-6 text-xs font-semibold tracking-wider uppercase text-primary">Fairplay</th>
                   <th className="p-6 text-xs font-semibold tracking-wider uppercase text-muted-foreground">Typical shop</th>
                 </tr>
               </thead>
               <tbody className="text-sm font-medium">
                 <tr className="border-b border-white/5">
                   <td className="p-6 text-white">Withdrawal speed</td>
                   <td className="p-6 text-primary">About 180 minutes after the result</td>
                   <td className="p-6 text-muted-foreground">6–24 hours</td>
                 </tr>
                 <tr className="border-b border-white/5">
                   <td className="p-6 text-white">Market odds</td>
                   <td className="p-6 text-primary">Exchange prices</td>
                   <td className="p-6 text-muted-foreground">Fixed bookie line</td>
                 </tr>
                 <tr className="border-b border-white/5">
                   <td className="p-6 text-white">Login</td>
                   <td className="p-6 text-primary">OTP + SSL, KYC when needed</td>
                   <td className="p-6 text-muted-foreground">Password only</td>
                 </tr>
                 <tr>
                   <td className="p-6 text-white">Support</td>
                   <td className="p-6 text-primary">WhatsApp desk</td>
                   <td className="p-6 text-muted-foreground">Ticket queue / chatbot</td>
                 </tr>
               </tbody>
             </table>
           </div>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Ready to open an ID?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get a Fairplay ID, deposit with UPI, then open cricket or casino on the same login.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <a 
                href={waLink("I want a Fairplay ID")}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-md hover:bg-flame hover:text-flame-foreground transition-colors flex items-center justify-center gap-3 group"
              >
                Get a Fairplay ID <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link to="/fairplay-id" className="w-full sm:w-auto px-8 py-3.5 border border-white/10 rounded-md font-semibold hover:bg-white/5 transition-colors">
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
