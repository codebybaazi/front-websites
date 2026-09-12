import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Shield, Lock, Eye, Database, FileText, Scale, Star, Target, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { ReviewedBadge } from '@/components/ReviewedBadge'
import { CONTENT_REVIEWED } from '@/lib/content-review-dates'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicy,
  head: () => pageHeadFor('/privacy-policy'),
})

function PrivacyPolicy() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-8">
              <Shield className="w-4 h-4 fill-primary" /> Fairplay ID & wallet data
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              PRIVACY <span className="text-primary not-italic">POLICY</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              What Fairplay keeps for a cricket ID, OTP login and UPI payouts — and what we do not ask for on WhatsApp.
            </p>
            <ReviewedBadge iso={CONTENT_REVIEWED["/privacy-policy"]} className="mt-5 justify-center" />
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
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-none">
                DATA <br/><span className="text-primary">WE HOLD</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-white mb-2">Our commitment</h4>
                  <p className="text-sm">We collect only what the cricket desk needs: mobile number for login, Fairplay ID details, and KYC when a payout has to go to the right person.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-white mb-2">How it is used</h4>
                  <p className="text-sm">Data is used to open the ID, match a UPI deposit to the wallet, and send withdrawals after the official result. We do not sell your number for ads.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-white mb-2">Your rights</h4>
                  <p className="text-sm">WhatsApp from the registered number to see, correct or close what sits on your Fairplay ID. We will not discuss an ID with a different person.</p>
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
                  <h3 className="text-3xl font-bold tracking-tight mb-4">OTP STAYS ON YOUR PHONE</h3>
                  <p className="text-muted-foreground mb-8">Fairplay never asks you to forward an OTP on WhatsApp. Anyone who does is not the desk.</p>
                  <a 
                    href={waLink("Hi Fairplay, I have a query regarding my data privacy")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold tracking-tight hover:shadow-[0_0_30px_rgba(47,185,74,0.3)] transition-all"
                  >
                    <Eye className="w-4 h-4" /> Ask on WhatsApp
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase mb-6">HOW <span className="text-primary not-italic">LOGINS</span> ARE PROTECTED</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Practical checks around OTP, SSL and a Fairplay ID — not brochure language.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Database,
                title: "SSL ON THIS SITE",
                desc: "Traffic between your browser and Fairplay is encrypted. Still only log in from this website, not a cloned tab."
              },
              {
                icon: ShieldCheck,
                title: "OTP LOGIN",
                desc: "Sign in with the mobile on your Fairplay ID. Enable 2FA if the ID offers it. Log out on shared browsers."
              },
              {
                icon: Star,
                title: "UTR SCREENSHOTS",
                desc: "Deposit and payout tickets need a UTR screenshot. Do not send OTPs or full card numbers to anyone."
              },
              {
                icon: Target,
                title: "PAYOUT NAME MATCH",
                desc: "Withdrawals go to your own UPI. KYC exists so a 180-minute payout lands with the person on the ID."
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

      {/* Additional Text Content */}
      <section className="py-24">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="prose prose-invert prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-white tracking-tight mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-primary" />
              Information we collect
            </h3>
            <p className="text-muted-foreground mb-8">
              Fairplay stores the mobile number used to log in, wallet history for UPI deposits and withdrawals, and KYC documents when the desk requests them. Device logs (IP, browser) help us flag a login you do not recognise.
            </p>

            <h3 className="text-2xl font-bold text-white tracking-tight mb-6 flex items-center gap-3">
              <Scale className="w-6 h-6 text-primary" />
              Age and use
            </h3>
            <p className="text-muted-foreground">
              You must be 18+. One Fairplay ID per person. By using the cricket desk you confirm you have read this page. Local law still applies where you live.
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
