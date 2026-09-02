import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { ShieldCheck, Lock, Eye, Shield, Zap, Globe } from 'lucide-react'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
export const Route = createFileRoute('/security-safety')({
  component: SecuritySafety,
  head: () => pageHeadFor('/security-safety'),
})

function SecuritySafety() {
  return (
    <div className="flex flex-col bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,185,74,0.08),transparent_70%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-8">
              <ShieldCheck className="w-4 h-4" /> OTP, UPI and cloned sites
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              SECURITY <span className="text-primary not-italic">& SAFETY</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              How Fairplay protects logins and wallets: OTP on your phone, no shared passwords, and withdrawals to your own UPI.
            </p>
          </div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="Fairplay security"
            />
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-24 relative">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid gap-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group p-8 rounded-xl bg-white/2 border border-white/5 hover:border-primary/50 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tight">Login <span className="text-primary">hygiene</span></h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Sign in with the mobile on your Fairplay ID. OTP stays in SMS — never forward it on WhatsApp. Log out on shared browsers. Enable 2FA if the ID offers it.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> OTP on your phone
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Official site only
                  </div>
                </div>
              </div>

              <div className="group p-8 rounded-xl bg-white/2 border border-white/5 hover:border-primary/50 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tight">Wallet <span className="text-primary">checks</span></h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Deposit only to the UPI shown after you log in, or sent on the published WhatsApp. Clones copy the logo and ask for UPI to a personal name.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Keep the UTR
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> No random APKs
                  </div>
                </div>
              </div>
            </div>

            <div className="group p-12 rounded-xl bg-primary/5 border border-primary/30 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8">
                <Shield className="w-32 h-32 text-primary opacity-20" />
              </div>
              <div className="relative z-10">
                <Zap className="w-16 h-16 text-primary mx-auto mb-8 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-3xl font-bold tracking-tight mb-4">If a login looks wrong</h3>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
                  WhatsApp immediately with the Fairplay ID. Change nothing except through official OTP. Sideloaded APKs are a frequent way wallets get drained — use the app page on this site.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                  <Globe className="w-4 h-4" /> Use this website and the published number
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <FAQSection 
        title="Security Safety FAQ"
        faqs={[
          { q: 'How do I keep a Fairplay ID safe?', a: 'OTP only on your phone. Never share the code. Log out on shared browsers.' },
          { q: 'What if I see a login I do not recognise?', a: 'WhatsApp immediately with the Fairplay ID. Change nothing except through official OTP.' },
          { q: 'Are cloned Fairplay sites common?', a: 'Yes. They copy the logo and ask for UPI to a personal name. Use this website and the published WhatsApp number.' },
          { q: 'Should I install random Fairplay APKs?', a: 'No. Use the app page on this site. Sideloaded APKs are a frequent way wallets get drained.' },
        ]}
      />
    </div>)
}
