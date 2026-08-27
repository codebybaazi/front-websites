import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { AlertCircle, Lock, UserX, Shield, PhoneCall, Star, Target, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/account-issues')({
  component: AccountIssues,
  head: () => pageHeadFor('/account-issues'),
})

function AccountIssues() {
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
              <Star className="w-4 h-4 fill-primary" /> 24/7 Priority Security
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              ACCOUNT <span className="text-primary not-italic">SUPPORT</span> HUB
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              We understand the importance of your elite ID. If you're facing access issues, our specialized security team is ready to assist.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="Fairplay account issues"
            />
          </div>
        </div>
      </section>

      {/* Main Support Content */}
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
                REGAINING <br/><span className="text-primary">SECURE ACCESS</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-white italic uppercase mb-2">Account Locked?</h4>
                  <p className="text-sm">If your account has been locked for security reasons, please contact support with your registered ID and email for immediate verification.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-white italic uppercase mb-2">KYC Updates Needed</h4>
                  <p className="text-sm">Ensure your documents are up-to-date. Our elite standards require verified identification to maintain the highest level of platform integrity.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-white italic uppercase mb-2">Credential Reset</h4>
                  <p className="text-sm">Forgot your password? Use the secure reset protocol or contact our concierge for a manual verification and restoration link.</p>
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
                  <h3 className="text-3xl font-black italic tracking-tighter mb-4">ELITE CONCIERGE</h3>
                  <p className="text-muted-foreground mb-8">Our 24/7 dedicated support team is here to restore your access within minutes of verification.</p>
                  <a 
                    href={waLink("Hi Fairplay, I need assistance with my account access")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-black italic uppercase tracking-widest hover:shadow-[0_0_30px_rgba(255,100,0,0.3)] transition-all"
                  >
                    <PhoneCall className="w-4 h-4" /> CONTACT VIP SUPPORT
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Pillars block */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">UNBREACHABLE <span className="text-primary not-italic">SECURITY</span> PILLARS</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Our multi-layered defense ensures your elite ID remains secure and exclusive.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "2FA ENFORCED",
                desc: "Multi-factor authentication is required for all high-value transactions and profile modifications."
              },
              {
                icon: ShieldCheck,
                title: "ENCRYPTED DATA",
                desc: "End-to-end 256-bit encryption protocols for all personal information and transaction logs."
              },
              {
                icon: Target,
                title: "FRAUD DETECTION",
                desc: "Real-time AI monitoring of account behavior to detect and neutralize suspicious activity instantly."
              },
              {
                icon: AlertCircle,
                title: "PRIORITY ALERTS",
                desc: "Receive instant notifications for every login attempt and withdrawal request on your registered number."
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
    
      <FAQSection 
        title="Account Issues FAQ"
        faqs={[
          { q: 'My Fairplay ID is locked. Why?', a: 'Usually a lockout, pending KYC, or a security check. Do not register a second ID — that can lock both.' },
          { q: 'OTP never arrives.', a: 'Wait out the cooldown, try SMS not WhatsApp OTP, and check the number on the ID. Then message the desk with that number.' },
          { q: 'I forgot which mobile I used.', a: 'WhatsApp from any number you might have registered and describe the last deposit UTR. The desk will not guess.' },
          { q: 'Can support reset a password on a call?', a: 'Fairplay login is OTP on the registered mobile. Nobody should ask you to read the OTP aloud.' },
        ]}
      />
    </div>)
}

