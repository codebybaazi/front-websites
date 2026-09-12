import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { MessageCircle, ShieldCheck, Copy, AlertTriangle, ArrowRight, Banknote } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { JsonLd } from '@/components/JsonLd'
import { howToJsonLd } from '@/utils/howto-schema'
import { ReviewedBadge } from '@/components/ReviewedBadge'
import { CONTENT_REVIEWED } from '@/lib/content-review-dates'
import { waLink, formatWhatsAppNumber } from "@/lib/whatsapp"

export const Route = createFileRoute('/fairplay-withdrawal-number')({
  component: FairplayWithdrawalNumber,
  head: () => pageHeadFor('/fairplay-withdrawal-number'),
})

const withdrawalNumberSteps = [
  {
    title: "Request the withdrawal first",
    desc: "Start the payout from the Fairplay wallet before messaging WhatsApp. The number is for tracking a request, not for placing one.",
  },
  {
    title: "Message the number above",
    desc: "Open WhatsApp with the button on this page rather than typing the number in manually. That guarantees it matches what Fairplay currently has live.",
  },
  {
    title: "Send ID, amount and time requested",
    desc: "Share your Fairplay ID, the withdrawal amount and roughly when you requested it. That is enough for the desk to look it up.",
  },
]

function FairplayWithdrawalNumber() {
  const number = formatWhatsAppNumber()

  return (
    <div className="flex flex-col bg-background text-foreground overflow-hidden">
      <JsonLd
        data={howToJsonLd({
          name: 'How to use the Fairplay withdrawal number',
          description: 'Message the official Fairplay withdrawal number on WhatsApp to chase a payout that is running past the usual 180-minute window.',
          path: '/fairplay-withdrawal-number',
          steps: withdrawalNumberSteps.map((step) => ({ name: step.title, text: step.desc })),
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
              <Banknote className="w-4 h-4" /> Official Fairplay payout desk
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              Fairplay <span className="text-[#25D366]">withdrawal number</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              This is the WhatsApp number Fairplay currently uses for withdrawal queries, for a payout that has not landed past the usual 180 minutes. Fairplay rotates this number occasionally, so this page always shows the current one instead of whatever was screenshotted last month.
            </p>
            <ReviewedBadge iso={CONTENT_REVIEWED["/fairplay-withdrawal-number"]} className="mb-12 justify-center" />
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview title="AI Overview: Fairplay Withdrawal Number" />
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
              Withdrawal number for Fairplay
            </h2>
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="text-4xl md:text-6xl font-bold tracking-tight text-[#25D366]">
                {number}
              </span>
              <button
                type="button"
                onClick={() => navigator.clipboard?.writeText(number)}
                className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#25D366]/40 transition-colors"
                aria-label="Copy Fairplay withdrawal number"
              >
                <Copy className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
            <a
              href={waLink("Hi Fairplay, my withdrawal is pending.")}
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
              Why the withdrawal number changes
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              WhatsApp Business numbers get flagged and banned faster than a website. When that happens, Fairplay moves the payout desk to a new number and updates the number list this page reads from.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Chases a stuck payout",
                desc: "Message this number with your Fairplay ID, amount and the market that settled if a withdrawal is past 180 minutes.",
              },
              {
                icon: Banknote,
                title: "Confirms bank or UPI details",
                desc: "The desk can confirm which account or UPI ID a payout is going to before it clears, if you ask before requesting.",
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
              How to use the Fairplay withdrawal number
            </h2>
            <div className="space-y-8">
              {withdrawalNumberSteps.map((step, i) => (
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
        title="Fairplay withdrawal number questions"
        faqs={[
          { q: "What is the Fairplay withdrawal number?", a: "It is the WhatsApp number Fairplay currently uses for payout queries. This page reads it from Fairplay's live number list, so it stays correct even after a change." },
          { q: "How long should a Fairplay withdrawal take?", a: "Payouts usually settle within about 180 minutes of the market or session closing. If it is well past that, message this number with your ID and amount." },
          { q: "Can I request a withdrawal on WhatsApp?", a: "No. Start the withdrawal in the Fairplay wallet. WhatsApp is for chasing a request that already went through, not for placing a new one." },
          { q: "I messaged an old Fairplay number and got no reply. What now?", a: "That number is likely no longer active. Use the number and WhatsApp link on this page instead of one saved from before." },
        ]}
      />
    </div>
  )
}
