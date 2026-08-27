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
      title: 'UPI & Instant Pay',
      desc: 'The fastest way to fund your account using any UPI app like GPay, PhonePe, or Paytm.',
      icon: <QrCode className="w-6 h-6" />
    },
    {
      title: 'Net Banking',
      desc: 'Secure direct transfers from all major Indian and international banks.',
      icon: <Banknote className="w-6 h-6" />
    },
    {
      title: 'Cryptocurrency',
      desc: 'Privacy-focused deposits via BTC, USDT, and other digital assets.',
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-hidden">
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
              <Star className="w-4 h-4 fill-primary" /> Instant Funding Network
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9] uppercase">
              Fairplay <span className="text-primary not-italic">deposit</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 font-medium">
              Add money to a Fairplay wallet with UPI, net banking or crypto. Check the credit, then open cricket or casino.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview title="Liquidity Infrastructure Report" />
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
              className="glass-card p-8 border-primary/20 hover:border-primary/40 transition-all text-center group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform">
                {method.icon}
              </div>
              <h3 className="text-xl font-black italic uppercase mb-4">{method.title}</h3>
              <p className="text-sm text-muted-foreground">{method.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-8">
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 border-primary/20 rounded-[40px]"
          >
            <h2 className="text-2xl font-black italic uppercase mb-8 flex items-center gap-3">
              <Zap className="w-6 h-6 text-primary" /> How to deposit on Fairplay
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black shrink-0 text-xs">1</div>
                <div>
                  <h3 className="font-bold italic uppercase mb-2">Open the Fairplay wallet</h3>
                  <p className="text-sm text-muted-foreground">Log in with your Fairplay ID, then choose UPI, net banking or crypto. UPI (GPay, PhonePe, Paytm) is what most players use.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black shrink-0 text-xs">2</div>
                <div>
                  <h3 className="font-bold italic uppercase mb-2">Pay and keep the UTR</h3>
                  <p className="text-sm text-muted-foreground">Complete the transfer, screenshot the receipt, and note the UTR. Do not send a second payment if the first is still pending.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black shrink-0 text-xs">3</div>
                <div>
                  <h3 className="font-bold italic uppercase mb-2">Confirm on Fairplay</h3>
                  <p className="text-sm text-muted-foreground">Enter the UTR if the screen asks for it. When the wallet credits, you can open IPL, cricket or casino.</p>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-white/5 border border-white/10 rounded-[40px] text-center"
          >
            <h3 className="text-primary font-black italic uppercase mb-2">Deposit not showing?</h3>
            <p className="text-sm text-muted-foreground mb-6">Open deposit issues with the UTR, or WhatsApp your Fairplay ID and a screenshot. Do not pay twice.</p>
            <a 
              href={waLink("Hi Fairplay, I need help with a deposit.")}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-12 py-4 bg-primary text-primary-foreground hover:scale-105 rounded-2xl font-black italic uppercase tracking-widest transition-all shadow-xl"
            >
              CONTACT PAYMENT SUPPORT
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
