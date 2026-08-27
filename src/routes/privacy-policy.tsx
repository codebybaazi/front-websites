import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Shield, Lock, Eye, Database, FileText, Scale, Star, Target, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicy,
  head: () => pageHeadFor('/privacy-policy'),
})

function PrivacyPolicy() {
  return (
    <div className="flex flex-col bg-background text-foreground overflow-hidden">
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
              <Shield className="w-4 h-4 fill-primary" /> Security Protocol 2026
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              PRIVACY <span className="text-primary not-italic">POLICY</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Your security is our absolute priority. Discover how Fairplay protects your digital legacy with military-grade encryption and P2P privacy.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="Fairplay privacy"
            />
          </div>
        </div>
      </section>

      {/* Main Privacy Content */}
      <section className="py-24 relative">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase leading-none">
                DATA <br/><span className="text-primary">ENCRYPTION & RIGHTS</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-white italic uppercase mb-2">Our Commitment</h4>
                  <p className="text-sm">We prioritize the confidentiality of your personal information. This policy outlines how we collect, safeguard, and utilize your data within the Fairplay ecosystem.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-white italic uppercase mb-2">Information Usage</h4>
                  <p className="text-sm">Data is exclusively used to verify identity, process secure transactions, and comply with international 2026 regulatory standards.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-white italic uppercase mb-2">Your User Rights</h4>
                  <p className="text-sm">You maintain absolute rights to access, correct, or request deletion of your personal data at any time through our elite concierge.</p>
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
              <div className="relative z-10 w-full h-full bg-linear-to-br from-white/10 to-transparent rounded-[40px] border border-white/10 p-1 flex items-center justify-center">
                <div className="bg-black/40 backdrop-blur-xl w-full h-full rounded-[38px] flex flex-col items-center justify-center p-12 text-center">
                  <Lock className="w-20 h-20 text-primary mb-8" />
                  <h3 className="text-3xl font-black italic tracking-tighter mb-4">PRIVACY GUARANTEED</h3>
                  <p className="text-muted-foreground mb-8">Operating under strict 2026 international privacy guidelines to ensure your identity remains protected.</p>
                  <a 
                    href={waLink("Hi Fairplay, I have a query regarding my data privacy")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-black italic uppercase tracking-widest hover:shadow-[0_0_30px_rgba(255,100,0,0.3)] transition-all"
                  >
                    <Eye className="w-4 h-4" /> PRIVACY INQUIRY
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Features block */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">SECURITY <span className="text-primary not-italic">INFRASTRUCTURE</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Bank-grade measures protecting every byte of your interaction with Fairplay.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Database,
                title: "SSL PROTECTION",
                desc: "Secure Socket Layer protection for all data transmissions between your device and our servers."
              },
              {
                icon: ShieldCheck,
                title: "2FA ENABLED",
                desc: "Two-Factor Authentication protocols available for all elite accounts to prevent unauthorized access."
              },
              {
                icon: Star,
                title: "REGULAR AUDITS",
                desc: "Continuous security monitoring and independent third-party audits to maintain integrity."
              },
              {
                icon: Target,
                title: "AML COMPLIANT",
                desc: "Strict adherence to Anti-Money Laundering standards to ensure a clean betting ecosystem."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-primary/50 transition-all"
              >
                <item.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h4 className="text-xl font-bold mb-4 tracking-tight uppercase italic">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Text Content */}
      <section className="py-24">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="prose prose-invert prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-white uppercase italic tracking-tight mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-primary" />
              Information We Collect
            </h3>
            <p className="text-muted-foreground mb-8">
              At Fairplay, we collect only the essential data required to provide a professional betting experience. This includes verification details (name, DOB), contact information, and technical logs (IP address, device data) to ensure platform stability and security.
            </p>

            <h3 className="text-2xl font-bold text-white uppercase italic tracking-tight mb-6 flex items-center gap-3">
              <Scale className="w-6 h-6 text-primary" />
              Legal & Compliance
            </h3>
            <p className="text-muted-foreground">
              Fairplay is strictly for users aged 18 and above. We take age verification seriously to ensure a responsible gaming environment. By continuing to use Fairplay, you acknowledge that you have read and agreed to these terms.
            </p>
          </div>
        </div>
      </section>
    
      <FAQSection 
        title="Privacy Policy FAQ"
        faqs={[
          { q: 'What does Fairplay store?', a: 'The mobile number for login, and KYC when it is requested so withdrawals can pay the right person.' },
          { q: 'Do you ask for OTP on WhatsApp?', a: 'No. OTP stays in your SMS. Anyone asking you to forward it is not Fairplay.' },
          { q: 'Can I ask what is on my ID?', a: 'WhatsApp with the registered number. We will not discuss an ID with a different person.' },
          { q: 'How are screenshots used?', a: 'Deposit and payout tickets need a UTR screenshot. Do not send OTPs or full card numbers.' },
        ]}
      />
    </div>)
}

