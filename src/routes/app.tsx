import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Smartphone, Apple, ShieldCheck, Zap, Download, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { JsonLd } from '@/components/JsonLd'
import { howToJsonLd } from '@/utils/howto-schema'
export const Route = createFileRoute('/app')({
  head: () => pageHeadFor('/app'),
  component: AppPage,
})

function AppPage() {
  const androidSteps = [
    {
      title: "Download the Android APK",
      desc: "Use Download Android APK on this page. Do not install a file forwarded on WhatsApp or Telegram.",
    },
    {
      title: "Allow unknown sources",
      desc: "If Android asks, allow installs from this source. That prompt is normal for an official APK, not a reason to grab a clone instead.",
    },
    {
      title: "Install the file",
      desc: "Open the downloaded APK and tap Install. After it finishes, you still use the same Fairplay ID as the website.",
    },
    {
      title: "Log in with OTP",
      desc: "Launch Fairplay and sign in with the number on your Fairplay ID. You do not register a second ID for the app.",
    },
  ]

  const howTo = howToJsonLd({
    path: "/app",
    name: "How to download the Fairplay Android app",
    description:
      "Install the Fairplay APK from this page, then log in with the same Fairplay ID and OTP you use on the website.",
    totalTime: "PT8M",
    steps: androidSteps.map((step) => ({ name: step.title, text: step.desc })),
  })

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-hidden">
      <JsonLd data={howTo} />
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
              <Smartphone className="w-4 h-4 fill-primary" /> Android & iOS
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9] uppercase">
              Fairplay <span className="text-primary not-italic">app</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 font-medium">
              The Fairplay app uses the same cricket ID as the website. Install Android APK from this page or add iOS to the home screen, then log in with OTP.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview title="Mobile Application Audit" />
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
                <Link to="/fairplay-id" className="text-primary font-bold hover:underline">Get a Fairplay ID</Link>
                {" · "}
                <Link to="/login-guide" className="text-primary font-bold hover:underline">Login guide</Link>
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <button className="flex-1 bg-card border-2 border-primary/20 p-6 rounded-3xl hover:border-primary transition-all group relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform" />
                  <div className="relative flex items-center gap-4">
                    <div className="p-3 bg-primary rounded-2xl text-white">
                      <Apple className="w-8 h-8 fill-current" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Download for</p>
                      <p className="text-xl font-black italic uppercase">iPhone / iOS</p>
                    </div>
                  </div>
                </button>

                <button className="flex-1 bg-card border-2 border-primary/20 p-6 rounded-3xl hover:border-primary transition-all group relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform" />
                  <div className="relative flex items-center gap-4">
                    <div className="p-3 bg-primary rounded-2xl text-white">
                      <Smartphone className="w-8 h-8" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Download for</p>
                      <p className="text-xl font-black italic uppercase">Android APK</p>
                    </div>
                  </div>
                </button>
              </div>

              <p className="text-sm text-muted-foreground max-w-md">
                Same Fairplay ID as the website — OTP login, UPI wallet. No user-count or store-rating figures on this page.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-20 bg-primary/20 blur-[100px] -z-10 rounded-full" />
              {/* Mockup Placeholder */}
              <div className="relative w-full max-w-[320px] mx-auto aspect-[9/19] bg-card border-[8px] border-border rounded-[3rem] shadow-2xl overflow-hidden p-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-border rounded-b-2xl" />
                <div className="h-full w-full rounded-2xl bg-background p-4 flex flex-col items-center justify-center text-center space-y-6">
                   <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                     <span className="text-primary font-black italic text-xl">FP</span>
                   </div>
                   <div className="space-y-2">
                     <div className="h-2 w-24 bg-muted rounded mx-auto" />
                     <div className="h-2 w-16 bg-muted rounded mx-auto" />
                   </div>
                   <div className="w-full grid grid-cols-2 gap-2">
                     <div className="h-16 bg-muted rounded-xl" />
                     <div className="h-16 bg-muted rounded-xl" />
                   </div>
                   <div className="w-full h-32 bg-primary/5 rounded-2xl flex items-center justify-center">
                     <Download className="w-8 h-8 text-primary animate-bounce" />
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-4">Install the <span className="text-primary not-italic">Fairplay app</span></h2>
            <p className="text-muted-foreground text-lg">Same Fairplay ID as the website. Get the ID first if you do not have one — then log in with OTP.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
             <div className="p-10 bg-background border border-border rounded-[3rem]">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black italic uppercase tracking-tight">ANDROID APK</h3>
                </div>
                <div className="space-y-6">
                  {androidSteps.map((step, i) => (
                    <div key={i} id={`step-${i + 1}`} className="flex items-start gap-4 font-bold italic tracking-tight">
                      <div className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center shrink-0 mt-0.5">{i + 1}</div>
                      <div>
                        <p className="text-foreground">{step.title}</p>
                        <p className="text-sm font-medium not-italic text-muted-foreground mt-1">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
             <div className="p-10 bg-background border border-border rounded-[3rem]">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                    <Apple className="w-6 h-6 fill-current" />
                  </div>
                  <h3 className="text-2xl font-black italic uppercase tracking-tight">iOS / iPHONE</h3>
                </div>
                <div className="space-y-6">
                  {[
                    "Visit our mobile site using Safari browser.",
                    "Tap the 'Share' icon in the bottom menu.",
                    "Select 'Add to Home Screen' from the options.",
                    "Access Fairplay directly from your home screen."
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4 font-bold italic tracking-tight">
                      <div className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center shrink-0">{i+1}</div>
                      {step}
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "256-BIT ENCRYPTION", desc: "Bank-grade SSL encryption protects every transaction and piece of data.", icon: ShieldCheck },
              { title: "BIOMETRIC AUTH", desc: "Secure your account with Fingerprint or FaceID on supported devices.", icon: Zap },
              { title: "ANTI-FRAUD ENGINE", desc: "Real-time monitoring and AI-driven fraud detection systems active 24/7.", icon: Smartphone }
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4 p-8 bg-card border border-border rounded-3xl"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black italic uppercase tracking-tight">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QR Section */}
      <section className="py-24 px-4 mb-24">
        <div className="container max-w-5xl mx-auto">
          <div className="bg-primary p-12 rounded-[3rem] flex flex-col md:flex-row items-center gap-12 text-primary-foreground">
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-black italic uppercase tracking-tighter">Scan to Download</h2>
              <p className="text-lg opacity-90">Open your camera and scan the QR code to get the direct download link for your device. Quick, safe and encrypted.</p>
              <ul className="space-y-3 font-bold">
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Directly from official servers</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Verified secure APK</li>
              </ul>
            </div>
            <div className="w-48 h-48 bg-white p-4 rounded-3xl shadow-2xl flex items-center justify-center">
               <div className="w-full h-full border-[10px] border-primary/20 rounded-xl flex items-center justify-center text-primary font-black italic">QR CODE</div>
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

