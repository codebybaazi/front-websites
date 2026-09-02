import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Smartphone, Apple, ShieldCheck, Zap, Download, Star, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
export const Route = createFileRoute('/app')({
  head: () => pageHeadFor('/app'),
  component: AppPage,
})

function AppPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-hidden">
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.705_0.198_142_/_0.08),transparent_55%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-[2px] w-8 brand-rule" />
              <span className="kicker">Android & iOS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]">
              Fairplay on your phone
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              The Fairplay app uses the same cricket ID as the website. Install the Android APK from this page or add iOS to the home screen, then log in with OTP.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview title="Fairplay app" />
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center pt-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm text-muted-foreground mb-8">
                Need an ID first?{" "}
                <Link to="/fairplay-id" className="text-primary font-semibold hover:underline">Get a Fairplay ID</Link>
                {" · "}
                <Link to="/login-guide" className="text-primary font-semibold hover:underline">Login guide</Link>
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <button className="flex-1 bg-card border-2 border-primary/20 p-6 rounded-xl hover:border-primary transition-all group relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform" />
                  <div className="relative flex items-center gap-4">
                    <div className="p-3 bg-primary rounded-md text-white">
                      <Apple className="w-8 h-8 fill-current" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-semibold text-muted-foreground">Download for</p>
                      <p className="text-xl font-bold tracking-tight">iPhone / iOS</p>
                    </div>
                  </div>
                </button>

                <button className="flex-1 bg-card border-2 border-primary/20 p-6 rounded-xl hover:border-primary transition-all group relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform" />
                  <div className="relative flex items-center gap-4">
                    <div className="p-3 bg-primary rounded-md text-white">
                      <Smartphone className="w-8 h-8" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-semibold text-muted-foreground">Download for</p>
                      <p className="text-xl font-bold tracking-tight">Android APK</p>
                    </div>
                  </div>
                </button>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted" />
                  ))}
                </div>
                <div className="text-xs">
                  <div className="flex text-yellow-500 mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <p className="font-semibold">Same cricket ID on phone as on desktop</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-20 bg-primary/20 blur-[100px] -z-10 rounded-full" />
              <div className="relative w-full max-w-[320px] mx-auto aspect-[9/19] bg-card border-[8px] border-border rounded-xl shadow-2xl overflow-hidden p-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-border rounded-b-xl" />
                <div className="h-full w-full rounded-xl bg-background p-4 flex flex-col items-center justify-center text-center space-y-6">
                   <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                     <span className="text-primary font-bold text-xl">FP</span>
                   </div>
                   <div className="space-y-2">
                     <div className="h-2 w-24 bg-muted rounded mx-auto" />
                     <div className="h-2 w-16 bg-muted rounded mx-auto" />
                   </div>
                   <div className="w-full grid grid-cols-2 gap-2">
                     <div className="h-16 bg-muted rounded-xl" />
                     <div className="h-16 bg-muted rounded-xl" />
                   </div>
                   <div className="w-full h-32 bg-primary/5 rounded-xl flex items-center justify-center">
                     <Download className="w-8 h-8 text-primary animate-bounce" />
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Install the Fairplay app</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Same Fairplay ID as the website. Get the ID first if you do not have one — then log in with OTP.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
             <div className="p-10 bg-background border border-border rounded-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary rounded-md flex items-center justify-center text-white">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">Android APK</h3>
                </div>
                <div className="space-y-6">
                  {[
                    "Tap Download Android APK on this page.",
                    "Allow installation from unknown sources if Android asks.",
                    "Open the downloaded file and tap Install.",
                    "Launch Fairplay and log in with your Fairplay ID OTP."
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4 font-medium tracking-tight">
                      <div className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center shrink-0">{i+1}</div>
                      {step}
                    </div>
                  ))}
                </div>
             </div>
             <div className="p-10 bg-background border border-border rounded-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary rounded-md flex items-center justify-center text-white">
                    <Apple className="w-6 h-6 fill-current" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">iOS / iPhone</h3>
                </div>
                <div className="space-y-6">
                  {[
                    "Open the Fairplay site in Safari.",
                    "Tap the Share icon in the bottom menu.",
                    "Choose Add to Home Screen.",
                    "Open Fairplay from the home screen and log in with OTP."
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4 font-medium tracking-tight">
                      <div className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center shrink-0">{i+1}</div>
                      {step}
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Encrypted login", desc: "SSL on every Fairplay login page. Do not enter OTP on a link that is not this site.", icon: ShieldCheck },
              { title: "Fingerprint or Face ID", desc: "On supported phones you can lock the app with the device biometric after OTP.", icon: Zap },
              { title: "Same wallet as the site", desc: "UPI deposits, cricket books and live tables sit on the Fairplay ID you already have.", icon: Smartphone }
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4 p-8 bg-card border border-border rounded-xl"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 mb-24">
        <div className="container max-w-5xl mx-auto">
          <div className="bg-primary p-10 md:p-12 rounded-xl flex flex-col md:flex-row items-center gap-12 text-primary-foreground">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Scan to download</h2>
              <p className="text-lg opacity-90">Open the camera and scan the QR code for the APK or the mobile site. Install only from this page — not from a chat file.</p>
              <ul className="space-y-3 font-semibold">
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Official APK from this site</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Same Fairplay ID and OTP</li>
              </ul>
            </div>
            <div className="w-48 h-48 bg-white p-4 rounded-xl shadow-2xl flex items-center justify-center">
               <div className="w-full h-full border-[10px] border-primary/20 rounded-xl flex items-center justify-center text-primary font-bold">QR code</div>
            </div>
          </div>
        </div>
      </section>
    
      <FAQSection 
        title="Fairplay app questions"
        faqs={[
          { q: 'Does the Fairplay app use a different ID?', a: 'No. The Fairplay app uses the same Fairplay ID and UPI wallet as the website. Create the ID on WhatsApp, then log in with OTP.' },
          { q: 'How do I download the Fairplay APK?', a: 'Use the Android button on this page. Allow unknown sources if Android asks, install, then open Fairplay and request OTP.' },
          { q: 'Is there a Fairplay iOS app on the App Store?', a: 'Most people add Fairplay to the iPhone home screen from Safari (Share → Add to Home Screen). That still uses the same cricket ID.' },
          { q: 'Can I bet IPL and casino in the app?', a: 'Yes. Cricket, IPL, football, tennis and live casino sit on the same login. Deposit with UPI before you stake.' },
        ]}
      />
    </div>)
}
