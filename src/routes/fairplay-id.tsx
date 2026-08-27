import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Crown, Trophy, Target, Star, Shield, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/fairplay-id')({
  component: FairplayID,
  head: () => pageHeadFor('/fairplay-id'),
})

function FairplayID() {
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
              <Star className="w-4 h-4 fill-primary" /> Cricket ID in minutes
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9] uppercase">
              Get a <span className="text-primary not-italic">Fairplay ID</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 font-medium">
              One login for cricket, IPL, football, tennis and live casino. WhatsApp verifies the ID, then you deposit with UPI.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto mb-12 px-4">
            <AIOverview title="AI Overview: Fairplay Id" />
          </div>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16 mb-16">
            <div className="lg:col-span-2 space-y-16">
              <section>
                <h2 className="text-4xl font-black italic uppercase mb-8 flex items-center gap-4">
                  <Crown className="w-10 h-10 text-primary" />
                  What a <span className="text-primary not-italic">Fairplay ID</span> is
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  A Fairplay ID is the login for cricket betting (including IPL), football, tennis and live casino. You do not need a separate cricket ID for each sport. WhatsApp verifies the number, you deposit with UPI, then you open the exchange or casino on the same account.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { title: 'One cricket ID', desc: 'IPL, T20, ODI and Test books sit on the same Fairplay ID as football and tennis.' },
                    { title: 'Login with OTP', desc: 'Sign in with the mobile number on the ID. 2FA is optional extra protection.' },
                    { title: 'UPI wallet', desc: 'Deposits and withdrawals use the same Fairplay wallet. Typical settlement is within 180 minutes of the result.' },
                    { title: 'WhatsApp desk', desc: 'New IDs, locked logins and pending UPI credits go through official WhatsApp — not random chats.' },
                    { title: 'Live markets', desc: 'Match winner, fancy sessions and in-play cricket once the ID is funded.' },
                    { title: 'Same ID on app', desc: 'The Fairplay app uses this ID. You do not register twice.' },
                  ].map((feature) => (
                    <motion.div 
                      key={feature.title}
                      whileHover={{ y: -5 }}
                      className="glass-card p-8 border-l-2 border-l-primary/30 hover:border-l-primary transition-all duration-300"
                    >
                      <h4 className="font-bold uppercase italic text-xl mb-3">{feature.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              <section className="glass-card p-10 md:p-16 border-primary/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Shield className="w-40 h-40 text-primary" />
                </div>
                <h2 className="text-4xl font-black italic uppercase mb-8 flex items-center gap-4">
                  <Shield className="w-10 h-10 text-primary" />
                  How to get a <span className="text-primary not-italic">Fairplay ID</span>
                </h2>
                <div className="space-y-8 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    Message official Fairplay WhatsApp, share the mobile number you will use to log in, complete the short check, then sign in with OTP. After that, follow the deposit guide and open IPL or the sports exchange. Never send UPI to a number that is not confirmed on this site.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12">
                     <div className="space-y-6">
                        <h3 className="font-black text-white flex items-center gap-3 italic uppercase text-lg">
                           <Zap className="w-5 h-5 text-primary" /> First steps
                        </h3>
                        <ul className="space-y-4">
                           {[
                             "WhatsApp for a Fairplay ID (same number you will log in with).",
                             "Wait until the desk says the cricket ID is live.",
                             "Open the login guide, enter OTP, then fund with UPI.",
                             "Place a small cricket stake so you see how settlement works."
                           ].map((item, i) => (
                             <li key={i} className="flex items-start gap-3">
                               <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                               <span>{item}</span>
                             </li>
                           ))}
                        </ul>
                     </div>
                     <div className="space-y-6">
                        <h3 className="font-black text-white flex items-center gap-3 italic uppercase text-lg">
                           <Shield className="w-5 h-5 text-primary" /> Keep the ID safe
                        </h3>
                        <ul className="space-y-4">
                           {[
                             "Do not share OTP or passwords, even with someone claiming to be support.",
                             "Use the Fairplay login page or app — not random links in chats.",
                             "Screenshot deposits and bet slips until the wallet updates.",
                             "If login fails, use the login issues page before you create a second ID."
                           ].map((item, i) => (
                             <li key={i} className="flex items-start gap-3">
                               <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                               <span>{item}</span>
                             </li>
                           ))}
                        </ul>
                     </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <div className="glass-card p-10 bg-primary/5 border-primary/20 sticky top-32">
                <Trophy className="w-16 h-16 text-primary mb-8" />
                <h3 className="text-3xl font-black italic uppercase mb-6 leading-none">Get your <span className="text-primary not-italic">Fairplay ID</span></h3>
                <p className="text-muted-foreground mb-10 leading-relaxed">
                  WhatsApp with the number you will use to log in. After the ID is live, deposit with UPI and open cricket or casino.
                </p>
                <div className="space-y-4">
                  <a 
                    href={waLink("Hi Fairplay, I want a Fairplay ID")}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-primary text-primary-foreground py-5 rounded-2xl font-black italic uppercase tracking-widest hover:shadow-[0_0_30px_rgba(255,100,0,0.4)] transition-all flex items-center justify-center text-center"
                  >
                    WhatsApp for ID
                  </a>
                  <Link to="/register-guide" className="w-full bg-white/5 border border-white/10 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center">
                    Registration steps
                  </Link>
                  <Link to="/login-guide" className="w-full bg-white/5 border border-white/10 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center">
                    Fairplay login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <FAQSection 
        title="Fairplay ID questions"
        faqs={[
          { q: 'What is a Fairplay ID?', a: 'It is the account you use to bet cricket, football and tennis, and to play live casino. One Fairplay ID, one wallet, UPI in and out.' },
          { q: 'How do I get a Fairplay cricket ID?', a: 'Message official WhatsApp, verify the mobile number, then log in with OTP. After that, follow the deposit guide before the first IPL or T20 stake.' },
          { q: 'Is a Fairplay ID the same as a cricket ID?', a: 'Yes for most players. Cricket and IPL books open on the Fairplay ID. You do not buy a second ID just for fancy markets.' },
          { q: 'Does the Fairplay app need a new ID?', a: 'No. The same Fairplay ID works on the app and in a browser. Login is still OTP on that number.' },
        ]}
      />
    </div>)
}
