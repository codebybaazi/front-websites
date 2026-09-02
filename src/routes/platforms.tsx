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
    { name: '11xplay', href: '/11xplay', desc: 'Cricket-heavy exchange the desk may issue. Separate login unless WhatsApp says they linked.' },
    { name: 'Laser247', href: '/laser247', desc: 'Live sports and tables when the desk names that ID. Random Telegram links are clones.' },
    { name: 'Gold365', href: '/gold365', desc: 'Racing and international books if WhatsApp opens Gold365 for your Fairplay wallet.' },
    { name: 'Cricbet99', href: '/cricbet99', desc: 'Extra cricket markets when listed. Same desk rules: UPI, OTP, 180-minute payouts.' },
    { name: 'Fairdeal', href: '/fairdeal', desc: 'Another partner login the desk may issue. Never send passwords between sites.' },
  ]

  return (
    <div className="flex flex-col bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,185,74,0.08),transparent_70%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-tight mb-8">
              <Star className="w-4 h-4 fill-primary" /> Same cricket desk since 2017
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              Fairplay <span className="text-primary">platforms</span>
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
                  <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{partner.name}</h3>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {partner.desc}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-tight text-primary/60">
                  <Shield className="w-3 h-3" /> Listed by this desk
                </div>
              </a>
            ))}
          </div>

          <section className="glass-card p-8 md:p-12 border-primary/10">
            <h2 className="text-3xl font-bold tracking-tight mb-8">One desk, <span className="text-primary">optional partner IDs</span></h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Partner books are not automatic with every Fairplay ID. WhatsApp tells you if 11xplay, Gold365 or Laser247 was issued. Each login is separate unless the desk says they linked.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <Zap className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold tracking-tight text-sm">Do not reuse passwords</h4>
                      <p className="text-xs text-muted-foreground">Never send a Fairplay password to a partner site, or the other way around.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Shield className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold tracking-tight text-sm">UPI still on Fairplay</h4>
                      <p className="text-xs text-muted-foreground">Deposits and 180-minute payouts follow the wallet the desk named for that ID.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-primary/5 rounded-xl p-8 border border-primary/20 flex flex-col justify-center text-center">
                <Trophy className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold tracking-tight mb-4">Get a Fairplay ID</h3>
                <p className="text-sm text-muted-foreground mb-8">WhatsApp from this site. Cricket and casino sit on the main ID unless the desk issues a partner login.</p>
                <button className="bg-primary text-primary-foreground py-4 rounded-xl font-bold tracking-tight hover:bg-flame hover:text-flame-foreground transition-colors">
                  WhatsApp the desk
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
