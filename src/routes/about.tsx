import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Trophy, Shield, Zap, Globe, ArrowRight, Users, Landmark, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { waLink } from "@/lib/whatsapp";

export const Route = createFileRoute('/about')({
  head: () => pageHeadFor('/about'),
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="flex flex-col bg-background text-foreground overflow-hidden">
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.705_0.198_142_/_0.08),transparent_55%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-8 brand-rule" />
              <span className="kicker">Since 2017</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]">
              Fairplay is a cricket ID, not a catchphrase
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              An exchange for IPL and internationals, plus football, tennis and live tables — one login, a UPI wallet, and a WhatsApp desk that actually answers.
            </p>
          </motion.div>

          <div className="max-w-5xl mt-12">
            <AIOverview title="About Fairplay" />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.08]">
                Players bet each other.{" "}
                <span className="text-primary">The house is not the other side of every slip.</span>
              </h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                Fairplay runs as an exchange: you take a price against other players. Odds move in play. Settlement waits for the official result. That is the practical difference versus a shop that just quotes a number and hopes you do not notice the margin.
              </p>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                IDs are opened on WhatsApp. Deposits come in on UPI. Payouts usually reach the wallet within 180 minutes after the market settles — unless KYC is still open.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-md bg-card border border-white/8 border-l-2 border-l-primary">
                  <ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Clear settlement</h4>
                    <p className="text-xs text-muted-foreground">Result first, then the wallet. No mystery delays as policy.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-md bg-card border border-white/8 border-l-2 border-l-flame">
                  <Zap className="w-6 h-6 text-flame shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">One ID</h4>
                    <p className="text-xs text-muted-foreground">Cricket, football, tennis and tables share the login.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-10 border-l-2 border-l-primary"
            >
              <Users className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold tracking-tight mb-3">Used across India since 2017</h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                Hundreds of thousands of cricket IDs. The desk is WhatsApp, not a ticket queue. If a clone number messages you first, it is not Fairplay.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-ink-deep border-y border-white/8">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What people actually use Fairplay for</h2>
          <p className="text-muted-foreground mb-12 max-w-xl">Not a feature list. The jobs the ID is asked to do.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Zap, title: "Payouts after the result", desc: "Settled winnings usually land in the wallet within 180 minutes of the official score." },
              { icon: Shield, title: "A login you can lock", desc: "OTP on the registered number, SSL on the site, 2FA if you turn it on. Never share the code." },
              { icon: Trophy, title: "IPL and internationals", desc: "Match winner, toss, fancy sessions and in-play — with enough depth to get a real stake matched." },
              { icon: Globe, title: "A desk that is a chat", desc: "IDs, UTR checks and locked sessions go through the official WhatsApp on this site." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-7 rounded-xl bg-card border border-white/8 hover:border-primary/35 transition-colors"
              >
                <item.icon className="w-8 h-8 text-primary mb-5" />
                <h4 className="text-lg font-semibold mb-2 tracking-tight">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">How the book is run</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-[15px]">
            <p>
              Fairplay is the cricket ID this site explains: IPL, football, tennis and live casino on one wallet. You fund it, you take a price, you wait for the result, you withdraw.
            </p>
            <p>
              Odds are exchange-style. You are not always betting a house line. That is why a large fancy market can still fill during an IPL night — other players are on the other side.
            </p>
            <div className="grid md:grid-cols-3 gap-8 my-10 py-8 border-y border-white/8">
              <div>
                <div className="text-3xl font-bold text-primary mb-1 tabular-nums">2017</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">First cricket IDs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1 tabular-nums">180 min</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Typical payout window</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1 tabular-nums">1 ID</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Sports and tables</div>
              </div>
            </div>
            <p>
              Partner books (Gold365, Laser247, 11xplay and others) are only added if the desk issues them. Do not send UPI to a number that is not on this site.
            </p>
            <p>
              Betting should stay a game. Deposit limits, time-outs and self-exclusion are on the responsible-play page. You must be 18+. Local law still applies — nothing here is legal advice.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/40">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="kicker mb-4 inline-flex">Licence</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">Offshore exchange, Indian-facing desk</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
                Fairplay is licensed in Curaçao. The product is built for Indian cricket hours: UPI, WhatsApp, IPL books. Read the legal-status page before you deposit.
              </p>
              <ul className="space-y-3 text-sm text-foreground/80">
                {["Curaçao gaming licence on file", "SSL on every Fairplay login page", "KYC when a payout needs it", "Official WhatsApp only — never a random chat"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full glass-card rounded-xl p-10 border-l-2 border-l-flame">
              <Landmark className="w-12 h-12 text-flame mb-6" />
              <h3 className="text-2xl font-semibold tracking-tight mb-3">Play within limits</h3>
              <p className="text-muted-foreground leading-relaxed text-[15px] mb-6">
                If staking stops being a game, stop. Tools for limits and self-exclusion are listed under responsible play.
              </p>
              <Link to="/responsible-gaming" className="text-primary font-semibold inline-flex items-center gap-2">
                Responsible play <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection 
        title="About this exchange"
        faqs={[
          { q: "When did Fairplay start?", a: "Fairplay has issued cricket IDs and run a sports exchange since 2017. IPL, football, tennis and live casino share one login." },
          { q: "How do I open a Fairplay ID?", a: "Message the WhatsApp number on this site. You sign in with that mobile number and an OTP, then fund the wallet with UPI." },
          { q: "Is Fairplay legal where I live?", a: "Fairplay is an offshore exchange. You must be 18+. Local law still applies — this page is not legal advice." },
          { q: "How long do withdrawals take?", a: "After the official result, payouts usually take about 180 minutes if KYC is complete and no market is still open." }
        ]}
      />

      <section className="py-24">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="glass-card rounded-xl p-10 md:p-14 border-l-2 border-l-primary">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
              Ready to open an ID?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl leading-relaxed">
              WhatsApp from the number you will log in with. There is no signup fee on this website.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href={waLink("Hi Fairplay — I want to open a cricket ID.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-md hover:bg-flame hover:text-flame-foreground transition-colors"
              >
                Message WhatsApp <ArrowRight className="w-5 h-5" />
              </a>
              <Link 
                to="/all-links" 
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/12 rounded-md font-semibold hover:border-primary/40 transition-colors"
              >
                Browse all pages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
