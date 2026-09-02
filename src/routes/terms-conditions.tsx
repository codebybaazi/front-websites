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
              <Star className="w-4 h-4 fill-primary" /> House rules for the cricket desk
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              TERMS & <span className="text-primary not-italic">CONDITIONS</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Age limits, one Fairplay ID per person, UPI deposits, and how markets settle before a 180-minute payout.
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
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-none">
                RULES OF <br/><span className="text-primary">THE DESK</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-white mb-2">1. Eligibility</h4>
                  <p className="text-sm">You must be 18+. One Fairplay ID per person. Using someone else’s UPI can freeze deposits and payouts.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-white mb-2">2. Money in and out</h4>
                  <p className="text-sm">Deposit with UPI to the wallet on your ID. Withdrawals usually follow about 180 minutes after the official result, once KYC is clear.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-white mb-2">3. What gets an ID locked</h4>
                  <p className="text-sm">Multi-accounting, bots and collusion. WhatsApp with the slip if a book looks wrong — do not open a second ID while a ticket is open.</p>
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
                  <Gavel className="w-20 h-20 text-primary mb-8" />
                  <h3 className="text-3xl font-bold tracking-tight mb-4">THE SLIP IS FINAL</h3>
                  <p className="text-muted-foreground mb-8">A bet is final when the official result is posted. Void markets return the stake. WhatsApp cannot override a published rule.</p>
                  <a 
                    href={waLink("Hi Fairplay, I have a legal query regarding the terms")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold tracking-tight hover:shadow-[0_0_30px_rgba(47,185,74,0.3)] transition-all"
                  >
                    <FileText className="w-4 h-4" /> Message WhatsApp
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase mb-6">WHAT THE <span className="text-primary not-italic">DESK</span> ENFORCES</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Plain rules so cricket, football, tennis and casino sit on one Fairplay ID.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "KYC WHEN ASKED",
                desc: "Name and ID proof before a large withdrawal. Incomplete KYC delays the 180-minute window."
              },
              {
                icon: Target,
                title: "OFFICIAL RESULTS",
                desc: "Exchange books settle on the scorecard. Fancy sessions wait for that over to finish."
              },
              {
                icon: AlertTriangle,
                title: "LIMITS & TIME-OUTS",
                desc: "Ask WhatsApp to cap deposits or freeze the ID. Betting should stay recreation."
              },
              {
                icon: Ban,
                title: "ONE PERSON, ONE ID",
                desc: "Two Fairplay IDs for one person can lock both. Do not hedge the same match that way."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-xl bg-white/2 border border-white/5 hover:border-primary/50 transition-all"
              >
                <item.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h4 className="text-xl font-bold mb-4 tracking-tight">{item.title}</h4>
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
