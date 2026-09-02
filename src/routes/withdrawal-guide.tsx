import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Download, Landmark as Bank, CreditCard, Wallet, Smartphone, ArrowRight, ShieldCheck, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
export const Route = createFileRoute('/withdrawal-guide')({
  component: WithdrawalGuide,
  head: () => pageHeadFor('/withdrawal-guide'),
})

function WithdrawalGuide() {
  const methods = [
    { name: 'Bank transfer', desc: 'IMPS or NEFT to the bank account saved on your Fairplay ID.', icon: Bank },
    { name: 'UPI payout', desc: 'Withdraw to PhonePe, GPay or Paytm after the market settles.', icon: Smartphone },
    { name: 'Crypto wallet', desc: 'USDT or other coins when the desk has enabled them on your ID.', icon: Wallet },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-hidden">
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
              <span className="kicker">UPI and bank payouts</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]">
              How to withdraw from Fairplay
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Withdraw from Fairplay to UPI or bank after the market settles. Typical window is about 180 minutes from the official result, then the payout.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview title="Fairplay withdrawals" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {methods.map((method, i) => (
            <motion.div 
              key={method.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 border-primary/10 text-center hover:border-primary/40 transition-all group rounded-xl"
            >
              <method.icon className="w-12 h-12 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-xl font-semibold tracking-tight mb-3">{method.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{method.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 md:p-14 border-primary/20 space-y-12 rounded-xl"
        >
          <section>
            <h2 className="text-2xl font-bold tracking-tight mb-8 flex items-center gap-3">
              <Download className="w-6 h-6 text-primary" /> How a payout works
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0 text-xs">1</div>
                <div>
                  <h4 className="font-semibold tracking-tight mb-2">Request payout</h4>
                  <p className="text-muted-foreground text-sm">Wait until cricket or casino markets settle, then open Withdraw on the Fairplay wallet. WhatsApp only if the button is missing.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0 text-xs">2</div>
                <div>
                  <h4 className="font-semibold tracking-tight mb-2">Pick UPI or bank</h4>
                  <p className="text-muted-foreground text-sm">Use the same name as the Fairplay ID. Check the on-screen minimum before you confirm. Keep the UTR.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0 text-xs">3</div>
                <div>
                  <h4 className="font-semibold tracking-tight mb-2">Wait for settlement</h4>
                  <p className="text-muted-foreground text-sm">Typical window is about 180 minutes from the official result, then the UPI or bank credit. KYC can add time.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-primary/5 p-8 rounded-xl border border-primary/20 flex flex-col md:flex-row items-center gap-8">
            <ShieldCheck className="w-16 h-16 text-primary shrink-0" />
            <div>
              <h3 className="text-xl font-semibold tracking-tight mb-2 text-primary">Payout still pending?</h3>
              <p className="text-sm text-muted-foreground mb-4">Unsettled bets, KYC or a mismatched UPI ID are the usual causes. Open withdrawal issues, then WhatsApp your Fairplay ID, amount and UTR.</p>
              <Link to="/withdrawal-issues" className="text-sm font-semibold text-primary hover:underline">Fairplay withdrawal issues →</Link>
            </div>
          </section>
        </motion.div>
      </div>
    
      <FAQSection 
        title="Fairplay withdrawal questions"
        faqs={[
          { q: 'How long does a Fairplay withdrawal take?', a: 'Wait until the cricket or casino market settles (often within 180 minutes of the official result). Then request UPI or bank. Extra delay usually means KYC or a weekend bank queue.' },
          { q: 'Can I withdraw to UPI?', a: 'Yes, if that method is saved on the Fairplay ID. Use the same name as the account. Crypto is listed when the desk has enabled it.' },
          { q: 'Why is my Fairplay payout pending?', a: 'Unsettled bets, pending KYC, or a mismatched UPI ID. Check withdrawal issues, then WhatsApp the Fairplay ID, amount and UTR.' },
          { q: 'Is there a minimum withdrawal?', a: 'It depends on the method. Check the amount on the withdrawal screen before you confirm. Do not close the ID until the payout lands.' },
        ]}
      />
    </div>)
}
