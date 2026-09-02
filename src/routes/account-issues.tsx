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
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,185,74,0.08),transparent_70%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-tight mb-8">
              <Star className="w-4 h-4 fill-primary" /> Locked Fairplay ID
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              Account <span className="text-primary">issues</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Locked cricket ID, pending KYC, or a number you forgot. Do not open a second Fairplay ID — that can lock both. WhatsApp the ID from this site.
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
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-none">
                Get back into the <br/><span className="text-primary">cricket ID</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-white tracking-tight mb-2">Account locked?</h4>
                  <p className="text-sm">Usually a lockout, pending KYC, or a security check. WhatsApp the Fairplay ID and the mobile on it. Do not register again.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-white tracking-tight mb-2">KYC still open</h4>
                  <p className="text-sm">Withdrawals pay the person on the ID. Send documents only through the channel the WhatsApp desk names.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-white tracking-tight mb-2">Forgot the mobile</h4>
                  <p className="text-sm">Fairplay login is OTP on the registered number. WhatsApp from any number you might have used and quote the last deposit UTR.</p>
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
              <div className="relative z-10 w-full h-full bg-linear-to-br from-white/10 to-transparent rounded-xl border border-white/10 p-1 flex items-center justify-center">
                <div className="bg-black/40 backdrop-blur-xl w-full h-full rounded-xl flex flex-col items-center justify-center p-12 text-center">
                  <Lock className="w-20 h-20 text-primary mb-8" />
                  <h3 className="text-3xl font-bold tracking-tight mb-4">WhatsApp the desk</h3>
                  <p className="text-muted-foreground mb-8">Have the Fairplay ID ready. Nobody should ask you to read OTP aloud.</p>
                  <a 
                    href={waLink("Hi Fairplay, I need assistance with my account access")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold tracking-tight hover:bg-flame hover:text-flame-foreground transition-colors"
                  >
                    <PhoneCall className="w-4 h-4" /> WhatsApp Fairplay
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Keep the <span className="text-primary">Fairplay ID</span> yours</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">OTP stays on your phone. This cricket desk has issued IDs since 2017.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "OTP login",
                desc: "Fairplay login is the mobile on the ID. Do not share the code, including with someone who DMs first."
              },
              {
                icon: ShieldCheck,
                title: "One ID",
                desc: "A second Fairplay ID on the same person can lock both. Ask WhatsApp before you register again."
              },
              {
                icon: Target,
                title: "This site’s WhatsApp",
                desc: "Only the number published here. Ads and Telegram bios are not the desk."
              },
              {
                icon: AlertCircle,
                title: "UTR helps",
                desc: "Last deposit UTR is how the desk finds a forgotten mobile. Keep the screenshot."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-xl bg-white/2 border border-white/5 hover:border-primary/50 transition-all"
              >
                <item.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h4 className="text-xl font-bold mb-4 tracking-tight">{item.title}</h4>
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
