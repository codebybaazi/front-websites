import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { motion } from 'framer-motion'
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  ShieldAlert, 
  Zap, 
  Fingerprint, 
  HardDrive, 
  Server,
  Network,
  Globe,
  CheckCircle2,
  ChevronRight,
  PhoneCall
} from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/is-fairplay-safe')({
  component: IsFairplaySafePage,
  head: () => pageHeadFor('/is-fairplay-safe'),
})

function IsFairplaySafePage() {
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
              <ShieldCheck className="w-3.5 h-3.5" /> Military-Grade Security Audit
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black italic tracking-tighter mb-8 uppercase leading-[0.9] text-white"
            >
              IS FAIRPLAY <span className="text-primary">SAFE?</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed"
            >
              Security is the bedrock of the Fairplay ecosystem. We deploy multi-layered defense-in-depth protocols to protect your capital and data.
            </motion.p>
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            <AIOverview 
              title="Is Fairplay safe"
            />
          </div>
        </div>
      </section>
      
      <main className="container max-w-5xl mx-auto px-4 py-16">

        {/* Security Shield Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card mb-20 p-8 md:p-16 rounded-[40px] border-primary/20 relative overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <ShieldCheck className="w-20 h-20 text-primary mx-auto mb-8 animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-black italic uppercase text-white mb-6">Defense-In-Depth Protocol</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Fairplay is not just a betting platform; it is a high-security financial environment architected to prevent unauthorized access and ensure total fund integrity.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
              <Lock className="w-6 h-6 text-primary mb-4 mx-auto" />
              <h4 className="font-bold text-white text-sm uppercase mb-2">Encrypted login</h4>
              <p className="text-[10px] text-muted-foreground">OTP stays on your phone. Do not share it.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
              <Fingerprint className="w-6 h-6 text-primary mb-4 mx-auto" />
              <h4 className="font-bold text-white text-sm uppercase mb-2">Biometric-Ready</h4>
              <p className="text-[10px] text-muted-foreground">Secure mobile integration with device security.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
              <Server className="w-6 h-6 text-primary mb-4 mx-auto" />
              <h4 className="font-bold text-white text-sm uppercase mb-2">Segregated Wallets</h4>
              <p className="text-[10px] text-muted-foreground">User funds are held in secure, non-operational pools.</p>
            </div>
          </div>
        </motion.div>

        {/* Core Safety Sections */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-black italic uppercase text-white flex items-center gap-4">
              <Network className="w-8 h-8 text-primary" /> Data Sovereignty
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We understand that your privacy is non-negotiable. Fairplay employs a strict "No-Log" policy regarding sensitive user interactions. Your personal data is encrypted at rest and in transit, ensuring that your identity remains your own.
            </p>
            <div className="space-y-3">
              {[
                "SOC2 Type II Compliant Infrastructure",
                "Advanced DDoS Mitigation via Global Edge Nodes",
                "Automatic Session Termination on Inactivity"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-bold text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-black italic uppercase text-white flex items-center gap-4">
              <Zap className="w-8 h-8 text-primary" /> Transaction Safety
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Every deposit and withdrawal on Fairplay is tracked through a blockchain-inspired ledger system. This ensures that every rupee is accounted for and that no transaction can be altered once initialized. Our 24/7 automated monitoring flags any suspicious activity instantly.
            </p>
            <div className="space-y-3">
              {[
                "Multi-Signature Payout Verification",
                "Anti-Money Laundering (AML) AI Engines",
                "Real-time Transaction Fraud Scoring"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-bold text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Deep Dive Section */}
        <section className="prose prose-invert max-w-none mb-24 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black italic uppercase text-white mb-8 border-l-8 border-primary pl-8">
              Why Fairplay is Safer than Competition
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              The betting industry is full of platforms that prioritize profit over player safety. At Fairplay, we take a different approach. Our P2P exchange model eliminates the "House" bias, meaning we have no incentive to manipulate outcomes or freeze winning accounts. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Platforms like 11xplay or Reddybook often rely on manual withdrawal approvals, which creates a significant security risk for the user. Fairplay's automated settlement engine removes the human element from the payout process, ensuring that if you win, you get paid—automatically and securely.
            </p>
          </motion.div>

          {/* Safety Checklist */}
          <div className="bg-primary/5 rounded-[40px] border border-primary/20 p-10 md:p-16">
            <h3 className="text-3xl font-black italic uppercase text-white mb-10 text-center">The Fairplay <span className="text-primary">Safety Checklist</span></h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "SSL Certification", desc: "Check for the padlock icon and 'fairplay-pro.org' or authorized partners." },
                { title: "WhatsApp Verification", desc: "Only interact with official verified WhatsApp concierge numbers." },
                { title: "Two-Factor Auth", desc: "Enable 2FA on your Fairplay account for maximum login security." },
                { title: "Official App Only", desc: "Download the Fairplay APK only from verified official links." }
              ].map((check, i) => (
                <div key={i} className="flex gap-5">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase italic tracking-wide mb-2">{check.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{check.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-black italic uppercase text-white mb-12 text-center">Safety <span className="text-primary">Deep-Dive FAQ</span></h2>
          <div className="grid gap-6">
            {[
              { 
                q: "Is it safe to deposit via UPI on Fairplay?", 
                a: "Absolutely. Our UPI gateway uses bank-level encryption and creates a unique transaction hash for every deposit. This ensures that your payment is tracked from the moment it leaves your bank until it hits your Fairplay wallet." 
              },
              { 
                q: "Can the staff see my password?", 
                a: "No. Passwords are salted and hashed using industry-standard bcrypt algorithms. No staff member, including senior developers, has access to your raw password." 
              },
              { 
                q: "What happens if my device is stolen?", 
                a: "If you lose your device, immediately contact our official 24/7 WhatsApp concierge. We can freeze your account instantly and verify your identity through alternative means to restore access on a new device." 
              }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-3xl border-white/5"
              >
                <h4 className="text-xl font-black italic uppercase text-primary mb-4 flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary/20 text-xs flex items-center justify-center text-primary italic">Q</span>
                  {faq.q}
                </h4>
                <p className="text-muted-foreground pl-12 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Help Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 rounded-[40px] border-primary/20 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 text-center"
        >
          <PhoneCall className="w-12 h-12 text-primary mx-auto mb-6" />
          <h3 className="text-3xl font-black italic uppercase text-white mb-4">Need a Safety Audit?</h3>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Our security team is available 24/7 to help you secure your ID or verify a platform link.
          </p>
          <a 
            href={waLink("Hello Fairplay! I have a security question about my account.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-black font-black italic uppercase tracking-[0.2em] rounded-2xl hover:shadow-[0_0_30px_rgba(255,100,0,0.4)] transition-all"
          >
            Contact Safety Concierge <ChevronRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Bottom Navigation */}
        <footer className="mt-24 pt-16 border-t border-white/5 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/is-fairplay-real" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors uppercase italic tracking-widest">Is Fairplay Real?</Link>
            <span className="text-white/10">•</span>
            <Link to="/what-is-fairplay" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors uppercase italic tracking-widest">Our Ecosystem</Link>
            <span className="text-white/10">•</span>
            <Link to="/all-links" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors uppercase italic tracking-widest">Site Index</Link>
          </div>
        </footer>
      </main>
    
      <FAQSection 
        title="Is Fairplay Safe FAQ"
        faqs={[
          { q: 'Is Fairplay safe to deposit to?', a: 'Use this website and the published WhatsApp. OTP stays on your phone. Clones ask you to pay a personal UPI.' },
          { q: 'How are withdrawals paid?', a: 'To the UPI on your Fairplay ID, usually about 180 minutes after the market settles.' },
          { q: 'What if a site looks identical but the number is different?', a: 'Treat it as fake. Do not enter OTP. Message the number on this page only.' },
          { q: 'Should I save my ID in a notes app screenshot?', a: 'Do not screenshot OTPs. Keep the ID name somewhere private; the login is still the mobile OTP.' },
        ]}
      />
    </div>)
}

