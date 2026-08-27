import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Mail, Phone, MessageSquare, MapPin, Send, MessageCircle } from 'lucide-react'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/contact-us')({
  component: ContactUs,
  head: () => pageHeadFor('/contact-us'),
})

function ContactUs() {
  return (
    <div className="flex flex-col bg-background text-foreground overflow-hidden">
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.08),transparent_70%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9] uppercase">
              Get in <span className="text-primary not-italic">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Our elite support team is standing by 24/7 to provide immediate assistance with your Fairplay ID and betting experience.
            </p>
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
                  <h3 className="font-bold text-lg mb-1 italic uppercase tracking-wider">WhatsApp Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">Fastest response for ID creation and deposits.</p>
                  <a href={waLink("Hello Fairplay Support! I need help with my account.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-all">
                    MESSAGE NOW
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
                  <h3 className="font-bold text-lg mb-1 italic uppercase tracking-wider">Email Us</h3>
                  <p className="text-sm text-muted-foreground mb-2">support@fairplay-pro.org</p>
                  <p className="text-xs text-muted-foreground">Typical response time: 30 minutes</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Send className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 italic uppercase tracking-wider">Telegram</h3>
                  <p className="text-sm text-muted-foreground mb-2">@FairplayOfficial</p>
                  <p className="text-xs text-muted-foreground">Join our community for daily odds and tips.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 italic uppercase tracking-tight">Direct <span className="text-primary">Inquiry</span></h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                    <input type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="John Doe" />
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
                    <option>New ID Registration</option>
                    <option>Deposit Related</option>
                    <option>Withdrawal Related</option>
                    <option>Technical Issue</option>
                    <option>VIP Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Message</label>
                  <textarea rows={4} className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors resize-none" placeholder="How can we help you today?"></textarea>
                </div>
                <button className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-black italic uppercase tracking-widest text-lg shadow-[0_0_20px_rgba(255,100,0,0.3)] hover:scale-[1.01] active:scale-[0.99] transition-all">
                  Send Message
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
