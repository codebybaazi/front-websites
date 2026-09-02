import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { motion } from 'framer-motion'
import { 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  UserCheck, 
  Zap, 
  Globe, 
  Clock, 
  ChevronRight,
  AlertTriangle,
  History,
  Scale,
  MessageSquare
} from 'lucide-react'
import { blogArticles } from '@/lib/blog-data'
import { Link } from '@tanstack/react-router'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/is-fairplay-real')({
  component: IsFairplayRealPage,
  head: () => pageHeadFor('/is-fairplay-real'),
})

function IsFairplayRealPage() {
  const recentPosts = [...blogArticles].slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0D1424] flex flex-col selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-xs font-bold tracking-tight mb-8 border border-primary/20"
            >
              <ShieldCheck className="w-3.5 h-3.5" /> Cricket desk since 2017
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9] text-white"
            >
              Is Fairplay <span className="text-primary">real or fake?</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed"
            >
              Clones copy the logo and send you a personal UPI. This desk opens a Fairplay ID on WhatsApp, takes deposits on the published handle, and pays out after markets settle.
            </motion.p>
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            <AIOverview 
              title="Is Fairplay real"
            />
          </div>
        </div>
      </section>

      <main className="container max-w-5xl mx-auto px-4 py-16">

        {/* Verdict Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card mb-20 p-8 md:p-12 rounded-xl border-primary/20 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10 text-center md:text-left">
            <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-[0_0_50px_rgba(47,185,74,0.4)]">
              <CheckCircle2 className="w-12 h-12 text-black stroke-[3]" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Desk verdict: <span className="text-primary">this is the real Fairplay ID</span></h2>
              <p className="text-muted-foreground font-medium text-lg">
                Fairplay IDs from this site are opened on WhatsApp, funded with UPI, and paid out after markets settle — usually within 180 minutes. Fake clones copy the logo and ask you to pay a personal number.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Audit Pillars */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-xl border-white/5 space-y-6"
          >
            <div className="p-4 bg-primary/10 rounded-xl w-fit">
              <Scale className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-white">How the cricket desk actually works</h3>
            <p className="text-muted-foreground leading-relaxed">
              Fairplay is an exchange: you take a price against other players, not a shop quoting a fixed number. Odds move in play. Settlement waits for the official result. That is how this cricket ID has run since 2017.
            </p>
            <ul className="space-y-3 pt-4">
              {[
                "Same Fairplay ID for IPL, T20 and Test",
                "UPI in, UPI out after the result",
                "WhatsApp only from the number on this site"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-xl border-white/5 space-y-6"
          >
            <div className="p-4 bg-primary/10 rounded-xl w-fit">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-white">Payouts after the market settles</h3>
            <p className="text-muted-foreground leading-relaxed">
              The real test is cash out. After the official result, Fairplay withdrawals usually reach the UPI on your ID within 180 minutes if KYC is clear and no book is still open.
            </p>
            <ul className="space-y-3 pt-4">
              {[
                "About 180 minutes after settlement",
                "Pays the UPI on the Fairplay ID",
                "Open fancy bets hold the cashout"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* SEO Deep Content Section */}
        <section className="prose prose-invert max-w-none mb-24 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-8 border-l-4 border-primary pl-6">
              How to spot a Fairplay clone
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Clone pages copy the Fairplay name and send you to a different WhatsApp. They ask for a fee to “activate” an ID, or they want OTP. This desk does not sell IDs over random UPI.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Globe, title: "This website", desc: "Open WhatsApp from this site only. Ads and Telegram bios are not the cricket desk." },
                { icon: MessageSquare, title: "WhatsApp desk", desc: "IDs are opened on the published number. Support never asks for OTP." },
                { icon: History, title: "Odds that move", desc: "If prices never move with the ball, you are not on the Fairplay exchange." }
              ].map((pill, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <pill.icon className="w-6 h-6 text-primary mb-4" />
                  <h4 className="font-bold text-white mb-2 tracking-tight">{pill.title}</h4>
                  <p className="text-xs text-muted-foreground">{pill.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-8 border-l-4 border-primary pl-6">
              Fairplay cricket IDs since 2017
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              This desk has issued Fairplay IDs since 2017. Same login for IPL and internationals, UPI deposits, WhatsApp if OTP or a payout sticks. You do not need a second “special” ID from a stranger’s chat.
            </p>
            <div className="bg-primary/5 border border-primary/20 p-8 rounded-xl flex flex-col md:flex-row gap-8 items-center">
              <div className="text-center md:text-left flex-1">
                <h4 className="text-2xl font-bold tracking-tight text-white mb-2">Get a Fairplay ID on WhatsApp</h4>
                <p className="text-muted-foreground">Share the mobile you will log in with. Deposit with UPI after OTP. Do not pay a personal name.</p>
              </div>
              <a 
                href={waLink("Hello Fairplay! I want to verify if this is the real platform and get my ID.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-black font-bold tracking-tight rounded-xl hover:bg-flame hover:text-flame-foreground transition-colors"
              >
                WhatsApp for a Fairplay ID
              </a>
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-12 text-center">Is this Fairplay <span className="text-primary">real?</span></h2>
          <div className="space-y-4">
            {[
              { 
                q: "How do I know this is the real Fairplay desk?", 
                a: "IDs are opened on the WhatsApp number published here. Fake pages copy the logo and invent a different number. Test with a small UPI deposit, then a withdrawal after a settled book." 
              },
              { 
                q: "Are funds on a Fairplay ID actually paid out?", 
                a: "Withdrawals go to the UPI on the ID, usually within 180 minutes after the market settles. Open fancy bets hold the cashout. KYC can add a wait." 
              },
              { 
                q: "I already paid a clone. What now?", 
                a: "Stop sending money. Do not share OTP. Message the WhatsApp on this page with what happened — the desk can open a real Fairplay ID; it cannot recover a personal-UPI scam." 
              }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 md:p-8 rounded-xl border-white/5"
              >
                <h4 className="text-lg font-bold tracking-tight text-primary mb-3 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-[10px] flex items-center justify-center text-primary">Q</span>
                  {faq.q}
                </h4>
                <p className="text-muted-foreground pl-9 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bottom Navigation */}
        <footer className="pt-16 border-t border-white/5 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors tracking-tight">About Us</Link>
            <span className="text-white/10">•</span>
            <Link to="/what-is-fairplay" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors tracking-tight">Our Ecosystem</Link>
            <span className="text-white/10">•</span>
            <Link to="/all-links" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors tracking-tight">Site Index</Link>
          </div>
        </footer>
      </main>
    
      <FAQSection 
        title="Is Fairplay Real FAQ"
        faqs={[
          { q: 'How do I know this Fairplay is real?', a: 'IDs are opened on the WhatsApp number published here. Fake pages copy the logo and invent a different number.' },
          { q: 'Someone asked me to pay to “activate” an ID.', a: 'Fairplay IDs are not sold via random UPI. If they demand a fee to a personal name, it is a clone.' },
          { q: 'Can I test with a small deposit?', a: 'Yes. Deposit, confirm the wallet, place a small settled bet, then withdraw once so you have seen the loop.' },
          { q: 'Does a high follower count prove a desk is official?', a: 'No. Check this site’s WhatsApp. Social clones are common during IPL.' },
        ]}
      />
    </div>)
}
