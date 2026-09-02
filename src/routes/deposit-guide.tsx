import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Wallet, QrCode, CreditCard, Banknote, ShieldCheck, Zap, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/deposit-guide')({
  component: DepositGuide,
  head: () => pageHeadFor('/deposit-guide'),
})

function DepositGuide() {
  const methods = [
    {
      title: 'UPI',
      desc: 'The usual way to fund a Fairplay wallet — GPay, PhonePe or Paytm. Keep the UTR until the credit shows.',
      icon: <QrCode className="w-6 h-6" />
    },
    {
      title: 'Net banking',
      desc: 'Bank transfer when UPI is down. Use the account shown in the Fairplay wallet, not a number from a chat.',
      icon: <Banknote className="w-6 h-6" />
    },
    {
      title: 'Crypto',
      desc: 'BTC or USDT when the desk has enabled it on your Fairplay ID. Confirm the network before you send.',
      icon: <ShieldCheck className="w-6 h-6" />
    }
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
              <span className="kicker">UPI into the wallet</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]">
              How to deposit on Fairplay
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Add money to a Fairplay wallet with UPI, net banking or crypto. Check the credit, then open cricket or casino.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview title="Fairplay deposits" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {methods.map((method, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 border-primary/20 hover:border-primary/40 transition-all text-center group rounded-xl"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform">
                {method.icon}
              </div>
              <h3 className="text-xl font-semibold tracking-tight mb-4">{method.title}</h3>
              <p className="text-sm text-muted-foreground">{method.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-8">
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 border-primary/20 rounded-xl"
          >
            <h2 className="text-2xl font-bold tracking-tight mb-8 flex items-center gap-3">
              <Zap className="w-6 h-6 text-primary" /> How to deposit on Fairplay
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0 text-xs">1</div>
                <div>
                  <h3 className="font-semibold tracking-tight mb-2">Open the Fairplay wallet</h3>
                  <p className="text-sm text-muted-foreground">Log in with your Fairplay ID, then choose UPI, net banking or crypto. UPI (GPay, PhonePe, Paytm) is what most players use.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0 text-xs">2</div>
                <div>
                  <h3 className="font-semibold tracking-tight mb-2">Pay and keep the UTR</h3>
                  <p className="text-sm text-muted-foreground">Complete the transfer, screenshot the receipt, and note the UTR. Do not send a second payment if the first is still pending.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0 text-xs">3</div>
                <div>
                  <h3 className="font-semibold tracking-tight mb-2">Confirm on Fairplay</h3>
                  <p className="text-sm text-muted-foreground">Enter the UTR if the screen asks for it. When the wallet credits, you can open IPL, cricket or casino.</p>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-white/5 border border-white/10 rounded-xl text-center"
          >
            <h3 className="text-primary font-semibold tracking-tight mb-2">Deposit not showing?</h3>
            <p className="text-sm text-muted-foreground mb-6">Open deposit issues with the UTR, or WhatsApp your Fairplay ID and a screenshot. Do not pay twice.</p>
            <a 
              href={waLink("Hi Fairplay, I need help with a deposit.")}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-3.5 bg-primary text-primary-foreground hover:bg-flame hover:text-flame-foreground rounded-md font-semibold transition-colors"
            >
              Message WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    
      <FAQSection 
        title="Fairplay deposit questions"
        faqs={[
          { q: 'How do I deposit on Fairplay with UPI?', a: 'Log in with your Fairplay ID, open the wallet, choose UPI, pay, then enter the UTR if asked. GPay, PhonePe and Paytm are the usual apps.' },
          { q: 'What is the minimum Fairplay deposit?', a: 'It depends on the method. Many UPI top-ups start around ₹250. Check the amount on screen before you pay.' },
          { q: 'Fairplay deposit pending — what should I do?', a: 'Wait a few minutes with the UTR ready. Do not send a second payment. If it stays pending, use the deposit issues page or WhatsApp the ID and screenshot.' },
          { q: 'Can I deposit before I have a Fairplay ID?', a: 'No. Get the ID first, then fund the wallet, then open IPL or casino. Paying a random UPI ID is how people lose money.' },
        ]}
      />
    </div>)
}
