import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { FileText, Gavel, UserCheck, AlertTriangle, CreditCard, Ban, Star, Target, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/terms-conditions')({
  component: TermsConditions,
  head: () => pageHeadFor('/terms-conditions'),
})

function TermsConditions() {
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
              <Star className="w-4 h-4 fill-primary" /> Institutional Governance 2026
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              TERMS & <span className="text-primary not-italic">CONDITIONS</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              The legal framework for using Fairplay: age limits, one ID per person, and how markets settle.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="Fairplay terms"
            />
          </div>
        </div>
      </section>

      {/* Main Terms Content */}
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
                RULES OF <br/><span className="text-primary">ENGAGEMENT</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-white italic uppercase mb-2">1. Eligibility</h4>
                  <p className="text-sm">Users must be 18+ and provide verified registration details. Only one Fairplay ID is permitted per person.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-white italic uppercase mb-2">2. Financial Conduct</h4>
                  <p className="text-sm">Deposits must originate from legal sources. Withdrawals are subject to 2026 automated verification protocols, ensuring sub-minute settlement for elite accounts.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-white italic uppercase mb-2">3. Prohibited Acts</h4>
                  <p className="text-sm">Collusion, automated bots, and arbitrage are strictly monitored. Violations result in immediate account liquidation to protect platform liquidity.</p>
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
                  <Gavel className="w-20 h-20 text-primary mb-8" />
                  <h3 className="text-3xl font-black italic tracking-tighter mb-4">LEGAL CERTAINTY</h3>
                  <p className="text-muted-foreground mb-8">Operating under strict 2026 international gaming guidelines to protect player rights and asset security.</p>
                  <a 
                    href={waLink("Hi Fairplay, I have a legal query regarding the terms")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-black italic uppercase tracking-widest hover:shadow-[0_0_30px_rgba(255,100,0,0.3)] transition-all"
                  >
                    <FileText className="w-4 h-4" /> COMPLIANCE CHAT
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance block */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">FAIRPLAY <span className="text-primary not-italic">ENFORCEMENT</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Our 2026 monitoring protocols ensure a level playing field for every elite bettor.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "KYC BRIDGING",
                desc: "Mandatory verification for all high-volume accounts to prevent ecosystem contamination."
              },
              {
                icon: Target,
                title: "ODDS INTEGRITY",
                desc: "Real-time verification of P2P odds to ensure no manipulation or unfair pricing exists."
              },
              {
                icon: AlertTriangle,
                title: "RESPONSIBLE PLAY",
                desc: "Mandatory tools for self-exclusion and limit-setting to protect player well-being."
              },
              {
                icon: Ban,
                title: "ZERO TOLERANCE",
                desc: "Immediate ban for any use of unauthorized automated software or data-scraping tools."
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
                <h4 className="text-xl font-bold mb-4 tracking-tight uppercase italic">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    
      <FAQSection 
        title="Terms Conditions FAQ"
        faqs={[
          { q: 'Who can open a Fairplay ID?', a: 'You must be 18+. One Fairplay ID per person. Using someone else’s UPI can freeze deposits and payouts.' },
          { q: 'When is a bet final?', a: 'When the official result is posted. Void markets return the stake. WhatsApp with the slip if a book looks wrong.' },
          { q: 'Can Fairplay change these terms?', a: 'House rules can update. The version on this page is what applies when you next log in. Read it before you stake.' },
          { q: 'How do I raise a dispute?', a: 'WhatsApp with Fairplay ID, market name, stake and a screenshot. Do not open a second ID while a ticket is open.' },
        ]}
      />
    </div>)
}

