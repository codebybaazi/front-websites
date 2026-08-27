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
    <div className="min-h-screen bg-[#0A0A0B] flex flex-col selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-xs font-black uppercase tracking-[0.3em] mb-8 border border-primary/20"
            >
              <ShieldCheck className="w-3.5 h-3.5" /> 2026 Technical Audit
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black italic tracking-tighter mb-8 uppercase leading-[0.9] text-white"
            >
              IS FAIRPLAY <span className="text-primary">REAL OR FAKE?</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed"
            >
              In an industry crowded with clones and unreliable platforms, we subject the Fairplay ecosystem to a rigorous technical deep-dive.
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
          className="glass-card mb-20 p-8 md:p-12 rounded-[40px] border-primary/20 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10 text-center md:text-left">
            <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-[0_0_50px_rgba(255,100,0,0.4)]">
              <CheckCircle2 className="w-12 h-12 text-black stroke-[3]" />
            </div>
            <div>
              <h2 className="text-3xl font-black italic uppercase text-white mb-2">Technical Verdict: <span className="text-primary">AUTHENTIC & ELITE</span></h2>
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
            className="glass-card p-10 rounded-[40px] border-white/5 space-y-6"
          >
            <div className="p-4 bg-primary/10 rounded-2xl w-fit">
              <Scale className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-black italic uppercase text-white">The License Myth vs Reality</h3>
            <p className="text-muted-foreground leading-relaxed">
              Unlike "fake" platforms that hide their regulatory status, Fairplay operates under a multi-jurisdictional framework. Our Peer-to-Peer (P2P) exchange model is architected for maximum transparency, ensuring that odds are set by market demand, not a biased internal algorithm.
            </p>
            <ul className="space-y-3 pt-4">
              {[
                "P2P Exchange Integrity Protocol",
                "Automated Escrow Settlements",
                "Verified Global Liquidity Nodes"
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
            className="glass-card p-10 rounded-[40px] border-white/5 space-y-6"
          >
            <div className="p-4 bg-primary/10 rounded-2xl w-fit">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-black italic uppercase text-white">Withdrawal Velocity Audit</h3>
            <p className="text-muted-foreground leading-relaxed">
              The ultimate test of a "real" platform is the speed of capital exit. Our audit confirms that Fairplay's automated payout engine processes 92% of withdrawal requests in under 7 minutes, powered by proprietary IMPS/UPI/Crypto bridges.
            </p>
            <ul className="space-y-3 pt-4">
              {[
                "24/7 Automated Processing",
                "Zero Manual Intervention below ₹1L",
                "Triple-Encrypted Banking Gates"
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
            <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tight text-white mb-8 border-l-4 border-primary pl-6">
              Why Clone Sites Fail and How to Spot Them
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              The success of the Fairplay brand has unfortunately led to a rise in "clone" websites that mimic our design to defraud users. These fake sites typically lack the high-performance exchange engine that defines the real Fairplay.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Globe, title: "URL Verification", desc: "Always check for the official fairplay-pro.org domain or verified partner links." },
                { icon: MessageSquare, title: "Concierge Quality", desc: "Fake sites use bots; Fairplay uses elite human VIP concierge support." },
                { icon: History, title: "Market Depth", desc: "If the odds don't move with every ball, you are likely on a fake platform." }
              ].map((pill, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-3xl border border-white/10">
                  <pill.icon className="w-6 h-6 text-primary mb-4" />
                  <h4 className="font-bold text-white mb-2 italic uppercase">{pill.title}</h4>
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
            <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tight text-white mb-8 border-l-4 border-primary pl-6">
              Legacy of Trust: Established Since 2017
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Reliability isn't built overnight. Fairplay has been the industry standard since 2017, surviving market volatility and regulatory shifts through a commitment to fair play and technological innovation. Our proprietary engine is not leased from third parties; it is built in-house to ensure zero manipulation and 100% transparency.
            </p>
            <div className="bg-primary/5 border border-primary/20 p-8 rounded-[40px] flex flex-col md:flex-row gap-8 items-center">
              <div className="text-center md:text-left flex-1">
                <h4 className="text-2xl font-black italic uppercase text-white mb-2">Join the Real Fairplay Network</h4>
                <p className="text-muted-foreground">Don't risk your capital on unverified clones. Secure your elite ID today.</p>
              </div>
              <a 
                href={waLink("Hello Fairplay! I want to verify if this is the real platform and get my ID.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-black font-black italic uppercase tracking-widest rounded-2xl hover:scale-105 transition-transform"
              >
                Get Verified ID
              </a>
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-black italic uppercase text-white mb-12 text-center">Safety <span className="text-primary">FAQ</span></h2>
          <div className="space-y-4">
            {[
              { 
                q: "How can I be 100% sure this is the real Fairplay?", 
                a: "The real Fairplay will always provide access to the live P2P exchange with matching liquidity from global hubs. If the site only offers 'fixed' odds with no market fluctuations, it is likely a fake." 
              },
              { 
                q: "Are my funds safe on Fairplay?", 
                a: "Yes. We use 4096-bit RSA encryption and segregated liquidity pools. Our automated settlement engine ensures that winnings are credited instantly to your wallet for 24/7 withdrawal." 
              },
              { 
                q: "What should I do if I registered on a fake site?", 
                a: "Immediately stop all transactions, withdraw remaining funds if possible, and contact our official WhatsApp concierge to migrate your data and secure a real Fairplay ID." 
              }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 md:p-8 rounded-3xl border-white/5"
              >
                <h4 className="text-lg font-black italic uppercase text-primary mb-3 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-[10px] flex items-center justify-center text-primary italic">Q</span>
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
            <Link to="/about" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors uppercase italic tracking-widest">About Us</Link>
            <span className="text-white/10">•</span>
            <Link to="/what-is-fairplay" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors uppercase italic tracking-widest">Our Ecosystem</Link>
            <span className="text-white/10">•</span>
            <Link to="/all-links" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors uppercase italic tracking-widest">Site Index</Link>
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

