import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Mail, Send, MessageCircle, Copy, ArrowRight } from 'lucide-react'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { ReviewedBadge } from '@/components/ReviewedBadge'
import { CONTENT_REVIEWED } from '@/lib/content-review-dates'
import { waLink, formatWhatsAppNumber } from "@/lib/whatsapp";

const SUPPORT_EMAIL = "support@mfairplay.com";

export const Route = createFileRoute('/contact-us')({
  component: ContactUs,
  head: () => pageHeadFor('/contact-us'),
})

function ContactUs() {
  const number = formatWhatsAppNumber();

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

      <div className="container max-w-5xl mx-auto px-4 py-24">
        <div className="glass-card p-10 md:p-14 border-primary/20 bg-primary/5 text-center">
          <h2 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">
            WhatsApp desk, live number
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
            <span className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
              {number}
            </span>
            <button
              type="button"
              onClick={() => navigator.clipboard?.writeText(number)}
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-primary/40 transition-colors"
              aria-label="Copy Fairplay WhatsApp number"
            >
              <Copy className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
          <a
            href={waLink("Hello Fairplay Support! I need help with my account.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground py-5 px-10 rounded-xl font-bold tracking-tight hover:bg-flame hover:text-flame-foreground transition-colors"
          >
            <MessageCircle className="w-6 h-6" /> Message WhatsApp <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-sm text-muted-foreground mt-6">
            This number is pulled from Fairplay's live number list on every visit, not typed in by hand. Fastest path for a new ID, OTP, or a stuck UPI.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-8">
          <div className="glass-card p-6 border-l-4 border-l-primary">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 tracking-tight">Email</h3>
                <p className="text-sm text-muted-foreground mb-2">{SUPPORT_EMAIL}</p>
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
      </div>

      <FAQSection 
        title="Contact Us FAQ"
        faqs={[
          { q: 'What is the fastest way to reach Fairplay?', a: 'WhatsApp with your Fairplay ID and a screenshot. That beats repeating the story in email.' },
          { q: 'Can I get a Fairplay ID over email instead of WhatsApp?', a: 'Email works for a written trail, but the desk that actually opens IDs and confirms UPI is WhatsApp. Use the number on this page.' },
          { q: 'What should I include in a ticket?', a: 'Fairplay ID, mobile on the ID, amount, UTR, and what you already tried. Missing UTR slows deposits.' },
          { q: 'Is phone support available?', a: 'WhatsApp is the published channel. Do not call numbers you found on ads.' },
        ]}
      />
    </div>)
}
