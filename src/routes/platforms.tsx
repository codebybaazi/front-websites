import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Landmark as Trophy, Target, Star, Shield, Zap, Info, ChevronRight } from 'lucide-react'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
export const Route = createFileRoute('/platforms')({
  component: Platforms,
  head: () => pageHeadFor('/platforms'),
})

function Platforms() {
  const partners = [
    { name: '11xplay', href: '/11xplay', desc: 'Premium cricket-focused exchange with massive liquidity.' },
    { name: 'Laser247', href: '/laser247', desc: 'Cutting-edge live sports markets and high-stakes tables.' },
    { name: 'Gold365', href: '/gold365', desc: 'The gold standard for horse racing and international sports.' },
    { name: 'Cricbet99', href: '/cricbet99', desc: 'Specialized betting engine for elite cricket traders.' },
    { name: 'Fairdeal', href: '/fairdeal', desc: 'Transparent, fair, and high-speed exchange infrastructure.' },
  ]

  return (
    <div className="flex flex-col bg-background text-foreground overflow-hidden">
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.08),transparent_70%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-8">
              <Star className="w-4 h-4 fill-primary" /> The Elite Network
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              OUR <span className="text-primary not-italic">PLATFORMS</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Fairplay can open partner exchanges when the desk issues them. Cricket and casino still sit on the main Fairplay ID unless you are told otherwise.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            <AIOverview 
              title="AI Overview: Platforms"
            />
          </div>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {partners.map((partner) => (
              <a key={partner.name} href={partner.href} className="glass-card p-8 border-primary/20 hover:border-primary/50 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-black italic uppercase group-hover:text-primary transition-colors">{partner.name}</h3>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {partner.desc}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary/60">
                  <Shield className="w-3 h-3" /> Verified Elite Partner
                </div>
              </a>
            ))}
          </div>

          <section className="glass-card p-8 md:p-12 border-primary/10">
            <h2 className="text-3xl font-black italic uppercase mb-8">Unified <span className="text-primary">Ecosystem</span></h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  We've integrated with the industry's leaders to ensure our members have the highest liquidity and the most diverse markets. One ID, one wallet, infinite possibilities.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <Zap className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold italic uppercase text-sm">Instant Switching</h4>
                      <p className="text-xs text-muted-foreground">Move between platforms without multiple logins or re-verifications.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Shield className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold italic uppercase text-sm">Centralized Security</h4>
                      <p className="text-xs text-muted-foreground">Your funds are held in a secure, audited central wallet with 24/7 monitoring.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-primary/5 rounded-[32px] p-8 border border-primary/20 flex flex-col justify-center text-center">
                <Trophy className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-black italic uppercase mb-4">Elite Access Now</h3>
                <p className="text-sm text-muted-foreground mb-8">Secure your Fairplay ID to unlock the entire platform network today.</p>
                <button className="bg-primary text-primary-foreground py-4 rounded-xl font-black italic uppercase tracking-widest hover:shadow-lg transition-all">
                  GET STARTED
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    
      <FAQSection 
        title="Platforms FAQ"
        faqs={[
          { q: 'What are Fairplay partner platforms?', a: 'Books such as 11xplay, Laser247 or Gold365 that the desk may issue. They are not automatic with every Fairplay ID.' },
          { q: 'Do I get one password for all of them?', a: 'No. Each login is separate unless WhatsApp says they linked. Never send passwords between sites.' },
          { q: 'Which ID is for live casino?', a: 'Fairplay casino uses the Fairplay ID. Partner casino, if any, is whatever the desk named.' },
          { q: 'How do I know a partner link is real?', a: 'It comes after you message the WhatsApp on this site. Random Telegram links are clones.' },
        ]}
      />
    </div>)
}
