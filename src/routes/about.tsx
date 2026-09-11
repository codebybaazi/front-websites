import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Trophy, Shield, Zap, Globe, Star, ArrowRight, Target, Users, Landmark, Award, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { waLink } from "@/lib/whatsapp";


export const Route = createFileRoute('/about')({
  head: () => pageHeadFor('/about'),
  component: AboutPage,
})

function AboutPage() {
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
              <Star className="w-4 h-4 fill-primary" /> Cricket ID since 2017
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              WHAT THIS SITE <span className="text-primary not-italic">EXPLAINS</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Fairplay is a cricket ID and sports exchange: IPL, football, tennis and live casino on one login. You get the ID on WhatsApp, deposit with UPI, and withdraw after the official result.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="About Fairplay"
            />
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
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
                HOW THE BOOK <br/><span className="text-primary">WORKS</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Fairplay is an exchange-style book. On most sports markets you match other players rather than a fixed house price. Odds move in play. You still confirm the slip before you send.
                </p>
                <p>
                  This site is the login guide, not a ranking. We do not publish user counts, daily volume, or award lists. What we can state is the path: WhatsApp for the ID, OTP on your phone, UPI into the Fairplay wallet, payouts usually about 180 minutes after settlement if KYC is complete.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <Target className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-wider mb-1">One ID</h4>
                    <p className="text-xs text-muted-foreground">Cricket, football, tennis and casino share the Fairplay login unless the desk issues a linked book.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-wider mb-1">OTP login</h4>
                    <p className="text-xs text-muted-foreground">The code stays on your phone. Clones ask you to share it.</p>
                  </div>
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
                  <Users className="w-20 h-20 text-primary mb-8" />
                  <h3 className="text-3xl font-black italic tracking-tighter mb-4">WHO THIS IS FOR</h3>
                  <p className="text-muted-foreground">People who already use cricket IDs and want the Fairplay login explained without a sales pitch. You must be 18+.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Fairplay Stands Alone (Technical Comparison/SEO block) */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">WHAT YOU GET ON A <span className="text-primary not-italic">FAIRPLAY ID</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">The same facts this site uses on deposit, withdrawal and support pages.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Settlements",
                desc: "After the official result, payouts usually take about 180 minutes. Open markets and incomplete KYC hold the cash."
              },
              {
                icon: Shield,
                title: "Login",
                desc: "Mobile number plus OTP. Enable 2FA if the ID offers it. Use https://fairplayindia.com, not lookalike domains."
              },
              {
                icon: Trophy,
                title: "Markets",
                desc: "IPL and other cricket, football, tennis, and live casino on the Fairplay wallet. Partner books are separate unless WhatsApp says they are linked."
              },
              {
                icon: Globe,
                title: "WhatsApp desk",
                desc: "IDs and stuck deposits go through the number published on this site. Do not pay a personal UPI that a stranger sends."
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
                <h4 className="text-xl font-bold mb-4 tracking-tight">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep SEO Content Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-12 text-center">SINCE <span className="text-primary not-italic">2017</span></h2>
            
            <div className="space-y-8 text-muted-foreground leading-relaxed text-lg">
              <p>
                In online cricket IDs, Fairplay is the login this site explains: IPL, football, tennis and live casino on one wallet. The aim is a clear deposit, a live slip, and a withdrawal after the official result.
              </p>
              
              <h3 className="text-2xl font-bold text-white uppercase italic tracking-tight pt-6">Exchange, not a slogan</h3>
              <p>
                Fairplay is an exchange-style book: you bet other players, not a house margin on every market. Odds move in play. That is the practical difference versus older ID shops. We do not publish latency numbers we cannot measure on your phone.
              </p>

              <div className="grid md:grid-cols-3 gap-8 my-12 py-8 border-y border-white/10">
                <div className="text-center">
                  <div className="text-4xl font-black text-primary mb-2">2017</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">YEAR THIS BOOK IS DATED FROM</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-primary mb-2">~180m</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">TYPICAL PAYOUT AFTER SETTLEMENT</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-primary mb-2">18+</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">YOU MUST BE AN ADULT</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white uppercase italic tracking-tight pt-6">Partner books</h3>
              <p>
                Gold365, 11xplay, Laser247 and Fairdeal may be issued as linked books. They still have their own wallets unless the desk confirms otherwise. Reddybook, Lotus365, Mahavir Book, Diamond Exchange and Skyexchange247 are other brands: treat them as separate IDs. Do not move a UTR from one login to another and expect it to credit.
              </p>

              <h3 className="text-2xl font-bold text-white uppercase italic tracking-tight pt-6">Responsible play and KYC</h3>
              <p>
                Stake only what you can afford to lose. KYC (name, mobile, and ID proof when asked) is how withdrawals pay the right person. Incomplete KYC delays payouts. If betting stops being recreation, ask the desk about limits or self-exclusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-24 bg-card/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <div className="inline-block px-3 py-1 rounded-md bg-primary/20 text-primary text-xs font-black tracking-widest mb-4">HOW YOU REACH IT</div>
              <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-8">OFFICIAL <span className="text-primary not-italic">DOMAIN</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Use https://fairplayindia.com and the WhatsApp number on this site. We do not list server cities or claim a licence we cannot show you. Fairplay is an offshore exchange. Local law still applies where you live.
              </p>
              
              <div className="space-y-4">
                {[
                  "Fairplay ID via WhatsApp on this site",
                  "UPI deposit into the Fairplay wallet",
                  "OTP login; do not share the code",
                  "Withdrawals after the market settles"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="font-bold text-sm tracking-wide text-white/80 uppercase">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 w-full bg-white/5 rounded-[40px] border border-white/10 p-12 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8">
                <Globe className="w-32 h-32 text-primary opacity-20" />
              </div>
              <div className="relative z-10">
                <Landmark className="w-16 h-16 text-primary mb-8" />
                <h3 className="text-3xl font-black italic mb-4">NOT LEGAL ADVICE</h3>
                <p className="text-muted-foreground leading-relaxed">This page describes the product. It is not a court opinion. You must be 18+. Check the law where you live before you deposit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-24 border-t border-white/5">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-12 opacity-50">WHAT WE DO NOT CLAIM</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-40">
             <div className="flex flex-col items-center gap-2">
                <Award className="w-10 h-10" />
                <span className="text-[10px] font-black tracking-[0.2em]">NO FAKE AWARDS</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <Shield className="w-10 h-10" />
                <span className="text-[10px] font-black tracking-[0.2em]">NO INVENTED AUDITS</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <Zap className="w-10 h-10" />
                <span className="text-[10px] font-black tracking-[0.2em]">NO INSTANT GUARANTEE</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <Users className="w-10 h-10" />
                <span className="text-[10px] font-black tracking-[0.2em]">NO USER COUNT</span>
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">
            Who writes the <span className="text-primary not-italic">guides</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Blog posts are credited to named people on the Fairplay India desk. Each category has one writer: how-to,
            support, cricket events, markets, strategy, app/platform, and desk news. Profiles include what they cover
            and every post under their name.
          </p>
          <Link
            to="/authors"
            className="inline-flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest hover:gap-3 transition-all"
          >
            Meet the writers <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <FAQSection 
        title="About Fairplay Legacy"
        faqs={[
          { q: "When was Fairplay established?", a: "Fairplay has been operating as a cricket ID and sports exchange since 2017, with IPL, football, tennis and live casino on one login." },
          { q: "How do I get a Fairplay ID?", a: "Message the WhatsApp number on this site. You log in with that mobile number and an OTP, then deposit with UPI." },
          { q: "Is Fairplay legal where I live?", a: "Fairplay is an offshore exchange. You must be 18+. Local law still applies. This site is not legal advice." },
          { q: "How long do withdrawals take?", a: "After the official result, payouts usually take about 180 minutes if KYC is complete and no market is still open." }
        ]}
      />


      {/* High-Intensity CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-5" />
        <div className="container max-w-5xl mx-auto px-4 relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-zinc-900/50 backdrop-blur-3xl border border-white/10 p-12 md:p-20 rounded-[40px]"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 italic tracking-tighter leading-none">
              GET A <span className="text-primary not-italic underline decoration-primary/30 underline-offset-8">FAIRPLAY ID</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Message the WhatsApp on this page. Ask for a Fairplay ID, then log in with OTP and fund with UPI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={waLink("Hi Fairplay, I want a Fairplay ID")}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-primary text-primary-foreground font-black px-10 py-5 rounded-2xl hover:bg-primary/90 transition-all shadow-[0_20px_40px_-15px_rgba(255,100,0,0.5)] flex items-center justify-center gap-3 text-lg group"
              >
                WhatsApp for an ID <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link 
                to="/all-links" 
                className="w-full sm:w-auto px-10 py-5 border border-white/10 rounded-2xl font-bold hover:bg-white/5 transition-colors text-lg"
              >
                Site index
              </Link>
            </div>
            
            <div className="mt-12 pt-12 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 grayscale opacity-50">
               <img src="/logo.png" alt="Fairplay Logo" className="h-8 w-auto" />
               <div className="text-xs font-bold tracking-widest text-muted-foreground">https://fairplayindia.com</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
