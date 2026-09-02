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
              <ShieldCheck className="w-3.5 h-3.5" /> Fairplay ID, UPI, WhatsApp
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9] text-white"
            >
              Is Fairplay <span className="text-primary">safe?</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed"
            >
              Use this website and the published WhatsApp. OTP stays on your phone. Deposits go to the UPI the desk sends after login — not a name from Instagram.
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
          className="glass-card mb-20 p-8 md:p-16 rounded-xl border-primary/20 relative overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <ShieldCheck className="w-20 h-20 text-primary mx-auto mb-8 animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Keep the cricket ID on this desk</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            A Fairplay ID is only as safe as the number you message and the UPI you pay. Clones look identical. The WhatsApp on this page is the one that has issued IDs since 2017.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 bg-white/5 rounded-xl border border-white/5">
              <Lock className="w-6 h-6 text-primary mb-4 mx-auto" />
              <h4 className="font-bold text-white text-sm mb-2 tracking-tight">Encrypted login</h4>
              <p className="text-[10px] text-muted-foreground">OTP stays on your phone. Do not share it.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/5">
              <Fingerprint className="w-6 h-6 text-primary mb-4 mx-auto" />
              <h4 className="font-bold text-white text-sm mb-2 tracking-tight">Same mobile every time</h4>
              <p className="text-[10px] text-muted-foreground">Login is the number on the Fairplay ID — not a new SIM from a chat.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/5">
              <Server className="w-6 h-6 text-primary mb-4 mx-auto" />
              <h4 className="font-bold text-white text-sm mb-2 tracking-tight">Wallet on the ID</h4>
              <p className="text-[10px] text-muted-foreground">UPI in and out on the same Fairplay cricket ID.</p>
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
            <h3 className="text-3xl font-bold tracking-tight text-white flex items-center gap-4">
              <Network className="w-8 h-8 text-primary" /> What you should not share
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Official WhatsApp will ask for your Fairplay ID and a screenshot. It will not ask for OTP, a password, or remote access to your phone. If someone DMs first claiming to be the desk, it is not this site.
            </p>
            <div className="space-y-3">
              {[
                "Never send OTP, even to “support”",
                "Do not pay a personal UPI from an ad",
                "Do not screenshot OTPs into a notes app"
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
            <h3 className="text-3xl font-bold tracking-tight text-white flex items-center gap-4">
              <Zap className="w-8 h-8 text-primary" /> Deposits and payouts
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Fund the ID with the UPI handle the desk sends after login. Withdrawals pay that same handle, usually within 180 minutes after the official result. If a market is still open, the cashout waits.
            </p>
            <div className="space-y-3">
              {[
                "UPI only after you are logged in",
                "About 180 minutes after settlement",
                "WhatsApp ID + UTR if a credit is stuck"
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
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8 border-l-8 border-primary pl-8">
              Safer than a random cricket chat
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Most “Fairplay” pages you see in IPL season are clones. They freeze winning IDs or they never pay. This desk has run Fairplay cricket IDs since 2017: WhatsApp to open, UPI to fund, payout after the scorecard.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              If a site looks identical but the WhatsApp number is different, treat it as fake. Do not enter OTP. Message the number linked from this page only.
            </p>
          </motion.div>

          {/* Safety Checklist */}
          <div className="bg-primary/5 rounded-xl border border-primary/20 p-10 md:p-16">
            <h3 className="text-3xl font-bold tracking-tight text-white mb-10 text-center">Fairplay <span className="text-primary">safety checklist</span></h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "This website", desc: "Open WhatsApp from this site — not from a Telegram bio or an Instagram ad." },
                { title: "Official WhatsApp", desc: "Only the number published here. The desk will not ask for OTP." },
                { title: "OTP on the phone", desc: "Fairplay login is the mobile on the ID. Keep the code on the login screen." },
                { title: "App from this site", desc: "Download the Fairplay app from the links here. Random APKs are not this desk." }
              ].map((check, i) => (
                <div key={i} className="flex gap-5">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white tracking-tight mb-2">{check.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{check.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-12 text-center">Fairplay safety <span className="text-primary">questions</span></h2>
          <div className="grid gap-6">
            {[
              { 
                q: "Is it safe to deposit via UPI on Fairplay?", 
                a: "Use the UPI the desk sends after you log in with your Fairplay ID. Keep the UTR. Do not pay a handle from an ad. If the wallet is empty after a short wait, WhatsApp ID, amount and screenshot — do not pay twice." 
              },
              { 
                q: "Can the desk see my OTP?", 
                a: "No. Login is OTP on the registered mobile. Nobody on WhatsApp should ask you to read it aloud or forward the SMS." 
              },
              { 
                q: "What if my phone is stolen?", 
                a: "Message official WhatsApp from another number with the Fairplay ID and last deposit UTR. The desk can lock the ID. Do not share OTP if someone claims they need it to “recover” the account." 
              }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-xl border-white/5"
              >
                <h4 className="text-xl font-bold tracking-tight text-primary mb-4 flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary/20 text-xs flex items-center justify-center text-primary">Q</span>
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
          className="glass-card p-12 rounded-xl border-primary/20 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 text-center"
        >
          <PhoneCall className="w-12 h-12 text-primary mx-auto mb-6" />
          <h3 className="text-3xl font-bold tracking-tight text-white mb-4">Need the cricket desk?</h3>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            WhatsApp with your Fairplay ID if a link looks off, OTP never arrives, or a UPI credit is stuck.
          </p>
          <a 
            href={waLink("Hello Fairplay! I have a security question about my account.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-black font-bold tracking-tight rounded-xl hover:bg-flame hover:text-flame-foreground transition-colors"
          >
            WhatsApp Fairplay <ChevronRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Bottom Navigation */}
        <footer className="mt-24 pt-16 border-t border-white/5 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/is-fairplay-real" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors tracking-tight">Is Fairplay Real?</Link>
            <span className="text-white/10">•</span>
            <Link to="/what-is-fairplay" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors tracking-tight">Our Ecosystem</Link>
            <span className="text-white/10">•</span>
            <Link to="/all-links" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors tracking-tight">Site Index</Link>
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
