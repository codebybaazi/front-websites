import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { RotateCcw, Shield, AlertCircle, Clock, CheckCircle, CreditCard, Star, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
export const Route = createFileRoute('/refund-policy')({
  component: RefundPolicy,
  head: () => pageHeadFor('/refund-policy'),
})

function RefundPolicy() {
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
              <RotateCcw className="w-4 h-4" /> UPI, voids and wallets
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              REFUND <span className="text-primary not-italic">POLICY</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              When a Fairplay deposit can reverse, when a void returns the stake, and how to raise a ticket with ID and UTR.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="Fairplay refunds"
            />
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-24 relative">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid gap-12 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-8 rounded-xl bg-white/2 border border-white/5 hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Settled bets <span className="text-primary">stay settled</span></h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Once a book is confirmed and the official result is in, the stake is not refunded. Void markets return money to the Fairplay wallet. Deposits are for betting; they are not a savings account.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group p-8 rounded-xl bg-white/2 border border-white/5 hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <AlertCircle className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold tracking-tight">UPI never <span className="text-primary">credited</span></h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Keep the UTR. Do not pay a second time. WhatsApp Fairplay ID, amount and screenshot. If the bank rejects a payout, the amount returns to the wallet — then send a correct UPI handle.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                  <Clock className="w-4 h-4" /> One ticket, one UTR
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group p-8 rounded-xl bg-white/2 border border-white/5 hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <CreditCard className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold tracking-tight">Chargebacks <span className="text-primary">& bonuses</span></h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Opening a bank dispute instead of WhatsApp can lock the ID. Unmet bonus wagering is not a refund — read the bonus page first.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                  <Zap className="w-4 h-4" /> Use the cricket desk
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-12 rounded-xl bg-primary/5 border border-primary/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8">
                <CheckCircle className="w-32 h-32 text-primary opacity-20" />
              </div>
              <div className="relative z-10">
                <Star className="w-16 h-16 text-primary mb-8 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-3xl font-bold tracking-tight mb-4">Withdrawals after settlement</h3>
                <p className="text-muted-foreground mb-8 max-w-xl leading-relaxed">
                  You can request a payout once markets are settled and KYC is clear. Typical window is about 180 minutes. Open fancy books hold exposure until the scorecard is in.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                  <Zap className="w-4 h-4" /> About 180 minutes after the result
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    
      <FAQSection 
        title="Refund Policy FAQ"
        faqs={[
          { q: 'Can I refund a settled bet?', a: 'No. Once the official result is in, the book stays. Void markets return the stake to the wallet.' },
          { q: 'What if a UPI deposit never credited?', a: 'Keep the UTR. Do not pay a second time. WhatsApp Fairplay ID, amount and screenshot.' },
          { q: 'When is a withdrawal reversed?', a: 'If the UPI handle is wrong or the bank rejects it, the amount returns to the Fairplay wallet. Then send a correct handle.' },
          { q: 'Do bonuses cash out without wagering?', a: 'No. Read the bonus page. Unmet wagering is not a refund.' },
        ]}
      />
    </div>)
}
