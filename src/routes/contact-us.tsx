import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Mail, Phone, MessageSquare, MapPin, Send, MessageCircle } from 'lucide-react'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { ReviewedBadge } from '@/components/ReviewedBadge'
import { CONTENT_REVIEWED } from '@/lib/content-review-dates'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/contact-us')({
  component: ContactUs,
  head: () => pageHeadFor('/contact-us'),
})

function ContactUs() {
  return (
    <div className="flex flex-col bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,185,74,0.08),transparent_70%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              Contact the <span className="text-primary">cricket desk</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              WhatsApp is how Fairplay IDs get opened, UPI deposits get traced, and 180-minute payouts get chased. Have the ID and a screenshot ready.
            </p>
            <ReviewedBadge iso={CONTENT_REVIEWED["/contact-us"]} className="justify-center" />
          </div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="AI Overview: Contact Us"
            />
          </div>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto px-4 py-24">

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-card p-6 border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 tracking-tight">WhatsApp desk</h3>
                  <p className="text-sm text-muted-foreground mb-4">Fastest path for a new Fairplay ID, OTP, or a stuck UPI.</p>
                  <a href={waLink("Hello Fairplay Support! I need help with my account.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-xl font-bold text-sm hover:bg-flame hover:text-flame-foreground transition-colors">
                    Message WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 tracking-tight">Email</h3>
                  <p className="text-sm text-muted-foreground mb-2">support@fairplay-pro.org</p>
                  <p className="text-xs text-muted-foreground">Use this for a written trail, then follow up on WhatsApp with the ID.</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Send className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 tracking-tight">Telegram</h3>
                  <p className="text-sm text-muted-foreground mb-2">@FairplayOfficial</p>
                  <p className="text-xs text-muted-foreground">Fixture notes only. IDs and UPI still go through WhatsApp on this site.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 tracking-tight">Write to the <span className="text-primary">desk</span></h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                    <input type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="Name on the Fairplay ID" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Phone Number</label>
                    <input type="tel" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="+91 XXX XXX XXXX" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Subject</label>
                  <select className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors appearance-none">
                    <option>Select Topic</option>
                    <option>New Fairplay ID</option>
                    <option>UPI deposit</option>
                    <option>Withdrawal (180 minutes)</option>
                    <option>Login / OTP</option>
                    <option>Existing cricket ID</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Message</label>
                  <textarea rows={4} className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors resize-none" placeholder="Fairplay ID, amount, UTR, and what you already tried"></textarea>
                </div>
                <button className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold tracking-tight text-lg hover:bg-flame hover:text-flame-foreground transition-colors">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    
      <FAQSection 
        title="Contact Us FAQ"
        faqs={[
          { q: 'What is the fastest way to reach Fairplay?', a: 'WhatsApp with your Fairplay ID and a screenshot. That beats repeating the story in email.' },
          { q: 'Can I get an ID on this contact form only?', a: 'The working desk is WhatsApp. Use the form if you need a written trail, then follow up on WhatsApp.' },
          { q: 'What should I include in a ticket?', a: 'Fairplay ID, mobile on the ID, amount, UTR, and what you already tried. Missing UTR slows deposits.' },
          { q: 'Is phone support available?', a: 'WhatsApp is the published channel. Do not call numbers you found on ads.' },
        ]}
      />
    </div>)
}
