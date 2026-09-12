import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { LifeBuoy, Zap, MessageCircle, HelpCircle, Shield, CreditCard, UserPlus, Lock } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { ReviewedBadge } from '@/components/ReviewedBadge'
import { CONTENT_REVIEWED } from '@/lib/content-review-dates'
import { waLink } from "@/lib/whatsapp";


export const Route = createFileRoute('/support')({
  component: SupportPage,
  head: () => pageHeadFor('/support'),
})

function SupportPage() {
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
              <span className="kicker">ID, login, UPI help</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]">
              Fairplay support
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Help for Fairplay ID, login, UPI deposits and withdrawals. WhatsApp is the desk; the guides below cover the usual fixes first.
            </p>
            <ReviewedBadge iso={CONTENT_REVIEWED["/support"]} className="justify-center" />
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview title="Fairplay support" />
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: UserPlus, title: 'Fairplay ID', desc: 'Registration, login OTP and locked cricket IDs.' },
              { icon: CreditCard, title: 'Deposits & payouts', desc: 'UPI pending credits, UTR matching and withdrawals.' },
              { icon: Zap, title: 'Betting', desc: 'IPL, cricket, football and tennis market rules.' },
              { icon: Shield, title: 'Account safety', desc: '2FA, phishing links and who not to send OTP to.' },
            ].map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group glass-card p-8 text-center hover:border-primary/50 transition-all rounded-xl"
              >
                <cat.icon className="w-12 h-12 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-xl font-semibold tracking-tight mb-4">{cat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight flex items-center gap-4">
                <HelpCircle className="w-10 h-10 text-primary" />
                Still stuck?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Read the Fairplay ID, login, deposit and withdrawal guides first. WhatsApp official support with your Fairplay ID and a screenshot if the wallet still does not move.
              </p>
            </div>

            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card p-8 bg-primary/5 border-primary/20 relative overflow-hidden rounded-xl"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <MessageCircle className="w-24 h-24 text-primary" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-4 leading-snug">Message the desk</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-[15px]">
                  Official WhatsApp is the working desk for Fairplay ID, OTP and UPI. Have the ID and a screenshot ready.
                </p>
                <a 
                  href={waLink("Hi Fairplay Support, I need assistance with my account")}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-md font-semibold flex items-center justify-center gap-3 hover:bg-flame hover:text-flame-foreground transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" /> Message WhatsApp
                </a>
              </motion.div>

              <div className="glass-card p-6 flex items-center gap-6 border-white/10 rounded-xl">
                <div className="p-4 bg-white/5 rounded-md">
                  <Lock className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white tracking-tight">Official number only</h4>
                  <p className="text-xs text-muted-foreground mt-1">Never share OTP with a chat that messages you first</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="container max-w-5xl mx-auto px-4 relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-zinc-900/50 backdrop-blur-3xl border border-white/10 p-10 md:p-16 rounded-xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-[1.05]">
              Need a Fairplay ID first?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              WhatsApp from the number you will log in with. There is no signup fee on this website.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={waLink("Hi Fairplay, I want to get my verified ID now")}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3.5 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-flame hover:text-flame-foreground transition-colors"
              >
                Get a Fairplay ID
              </a>
              <Link
                to="/"
                className="px-7 py-3.5 bg-white/5 text-white border border-white/10 rounded-md font-semibold hover:bg-white/10 transition-colors"
              >
                Browse markets
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQSection 
        title="Fairplay support questions"
        faqs={[
          { q: 'How do I create a Fairplay ID?', a: 'WhatsApp official support from this site. Share the mobile number you will log in with, complete OTP, then you have a cricket ID for IPL and the rest of the exchange.' },
          { q: 'What is the minimum Fairplay deposit?', a: 'UPI often starts around ₹250. Check the wallet screen. Never deposit before the ID is live.' },
          { q: 'Are Fairplay funds safe to withdraw?', a: 'Withdraw after markets settle. Use the withdrawal guide, keep UTR, and only message official WhatsApp. KYC can delay a payout.' },
          { q: 'How long do Fairplay withdrawals take?', a: 'Wallet credit is usually within 180 minutes of the official result. Bank or UPI payout follows. Pending tickets go to withdrawal issues.' },
          { q: "How fast is Fairplay WhatsApp support?", a: "WhatsApp is the working desk for Fairplay ID, OTP and UPI. Have the ID and a screenshot ready. Read the matching guide first if the issue is a usual login or deposit delay." },
          { q: "Can support reset a Fairplay login?", a: "Yes. If OTP never arrives or the ID is locked, message official WhatsApp with the registered number. Never share the OTP with anyone who DMs you first." },
          { q: "Is WhatsApp the only Fairplay support?", a: "It is the fastest. Use login issues, deposit issues or withdrawal issues on this site, then WhatsApp if the wallet still does not move." },
          { q: "How do I get a Fairplay ID from support?", a: "Open WhatsApp from this site, share the mobile number you will log in with, complete OTP. Then deposit with UPI — there is no separate IPL ID." }
        ]}
      />

    </div>
  )
}
