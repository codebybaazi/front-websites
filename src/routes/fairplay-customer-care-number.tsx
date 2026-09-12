import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { MessageCircle, ShieldCheck, Copy, AlertTriangle, ArrowRight, Headset } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { JsonLd } from '@/components/JsonLd'
import { howToJsonLd } from '@/utils/howto-schema'
import { ReviewedBadge } from '@/components/ReviewedBadge'
import { CONTENT_REVIEWED } from '@/lib/content-review-dates'
import { waLink, formatWhatsAppNumber } from "@/lib/whatsapp"

export const Route = createFileRoute('/fairplay-customer-care-number')({
  component: FairplayCustomerCareNumber,
  head: () => pageHeadFor('/fairplay-customer-care-number'),
})

const customerCareNumberSteps = [
  {
    title: "Message the number above",
    desc: "Open WhatsApp with the button on this page rather than typing the number in manually. That guarantees it matches what Fairplay currently has live.",
  },
  {
    title: "Lead with your Fairplay ID",
    desc: "If you do not have one yet, share the mobile number you plan to log in with instead. Either way, this is the first thing the desk asks for.",
  },
  {
    title: "State the issue in one line",
    desc: "Login, deposit, withdrawal, or something else, plus a screenshot or UTR if you have one. That skips a round of back and forth.",
  },
]

function FairplayCustomerCareNumber() {
  const number = formatWhatsAppNumber()

  return (
    <div className="flex flex-col bg-background text-foreground overflow-hidden">
      <JsonLd
        data={howToJsonLd({
          name: 'How to use the Fairplay customer care number',
          description: 'Message the official Fairplay customer care number on WhatsApp for ID, login, deposit or withdrawal help.',
          path: '/fairplay-customer-care-number',
          steps: customerCareNumberSteps.map((step) => ({ name: step.title, text: step.desc })),
        })}
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,211,102,0.08),transparent_70%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-sm font-bold tracking-tight mb-8">
              <Headset className="w-4 h-4" /> Official Fairplay support desk
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              Fairplay <span className="text-[#25D366]">customer care number</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              This is the WhatsApp number Fairplay currently uses for customer care, one line for a new ID, a locked login, a stuck deposit or a delayed payout. Fairplay rotates this number occasionally, so this page always shows the current one instead of whatever was screenshotted last month.
            </p>
            <ReviewedBadge iso={CONTENT_REVIEWED["/fairplay-customer-care-number"]} className="mb-12 justify-center" />
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview title="AI Overview: Fairplay Customer Care Number" />
          </div>
        </div>
      </section>

      {/* Number card */}
      <section className="py-20 relative">
        <div className="container max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-14 border-primary/20 bg-primary/5 text-center"
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">
              Customer care number for Fairplay
            </h2>
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="text-4xl md:text-6xl font-bold tracking-tight text-[#25D366]">
                {number}
              </span>
              <button
                type="button"
                onClick={() => navigator.clipboard?.writeText(number)}
                className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#25D366]/40 transition-colors"
                aria-label="Copy Fairplay customer care number"
              >
                <Copy className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
            <a
              href={waLink("Hi Fairplay, I need customer care help.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] text-white py-5 px-10 rounded-xl font-bold tracking-tight hover:bg-flame hover:text-flame-foreground transition-colors"
            >
              <MessageCircle className="w-6 h-6" /> Open WhatsApp <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-muted-foreground mt-6">
              This number is pulled from Fairplay's live number list on every visit, not typed in by hand. If it ever changes, this page changes with it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why this number matters */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              What Fairplay customer care handles
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              One WhatsApp desk covers the whole account lifecycle. Have the Fairplay ID ready before you message; it is the first thing the desk will ask for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "ID and login",
                desc: "New Fairplay ID, OTP not arriving, a locked account, or a password you can no longer use.",
              },
              {
                icon: Headset,
                title: "Deposits and withdrawals",
                desc: "A UPI deposit stuck in pending, or a payout past the usual 180-minute window. Send the ID, amount and UTR.",
              },
              {
                icon: AlertTriangle,
                title: "Not the number from an ad",
                desc: "A number forwarded on Telegram, in a comment section or in a random ad is not this one. Only the number on this page is current.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-xl bg-white/2 border border-white/5 hover:border-[#25D366]/50 transition-all text-center"
              >
                <div className="w-16 h-16 bg-[#25D366]/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 border border-[#25D366]/20">
                  <item.icon className="w-8 h-8 text-[#25D366]" />
                </div>
                <h4 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to use the number */}
      <section className="py-24">
        <div className="container max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 border-primary/20 rounded-xl"
          >
            <h2 className="text-2xl font-bold tracking-tight mb-8">
              How to use the Fairplay customer care number
            </h2>
            <div className="space-y-8">
              {customerCareNumberSteps.map((step, i) => (
                <div key={step.title} className="flex gap-6">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0 text-xs">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold tracking-tight mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <FAQSection
        title="Fairplay customer care number questions"
        faqs={[
          { q: "What is the Fairplay customer care number?", a: "It is the WhatsApp number Fairplay currently uses for ID, login, deposit and withdrawal support. This page reads it from Fairplay's live number list, so it stays correct even after a change." },
          { q: "Is Fairplay customer care available 24/7?", a: "The desk answers most hours, though replies can be slower late at night. Message with your Fairplay ID and the issue in one line for the fastest response." },
          { q: "Can I get a Fairplay ID from customer care?", a: "Yes. Share the mobile number you want to log in with, complete OTP, then fund the wallet once the ID is live." },
          { q: "I messaged an old Fairplay number and got no reply. What now?", a: "That number is likely no longer active. Use the number and WhatsApp link on this page instead of one saved from before." },
        ]}
      />
    </div>
  )
}
