import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { MessageCircle, Send, ShieldCheck, Zap, Info, PhoneCall, Star, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { ReviewedBadge } from '@/components/ReviewedBadge'
import { CONTENT_REVIEWED } from '@/lib/content-review-dates'
import { waLink } from "@/lib/whatsapp";


export const Route = createFileRoute('/whatsapp-support')({
  component: WhatsappSupport,
  head: () => pageHeadFor('/whatsapp-support'),
})

function WhatsappSupport() {
  return (
    <div className="flex flex-col bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,211,102,0.08),transparent_70%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-sm font-bold tracking-tight mb-8">
              <Star className="w-4 h-4 fill-[#25D366]" /> Official Fairplay WhatsApp
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
              Fairplay <span className="text-[#25D366]">WhatsApp</span> support
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Get a Fairplay ID, unblock OTP, and chase UPI deposits on official WhatsApp. Have the ID and a screenshot ready. Never send OTP to a stranger.
            </p>
            <ReviewedBadge iso={CONTENT_REVIEWED["/whatsapp-support"]} className="mb-12 justify-center" />
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview title="AI Overview: Whatsapp Support" />
          </div>
        </div>
      </section>

      {/* Main Support Grid */}
      <section className="py-24 relative">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 border-primary/20 bg-primary/5 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-primary" /> Open a Fairplay ID
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  Message official WhatsApp from this site. Share the mobile number you will log in with, complete OTP, then you have a Fairplay cricket ID for IPL and the rest of the exchange. This desk has issued IDs since 2017.
                </p>
              </div>
              <a 
                href={waLink("Hello Fairplay, I need a cricket ID.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white py-6 rounded-xl font-bold tracking-tight hover:bg-flame hover:text-flame-foreground transition-colors flex items-center justify-center gap-4"
              >
                <MessageCircle className="w-6 h-6" /> WhatsApp Fairplay <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 border-primary/20 space-y-8"
            >
              <h2 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-primary" /> The number that is real
              </h2>
              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-[#25D366]/30 transition-colors">
                  <h4 className="text-xl font-bold mb-2 tracking-tight text-[#25D366]">Official numbers</h4>
                  <p className="text-muted-foreground leading-relaxed">Only message the WhatsApp linked from this website. Numbers from ads or Telegram are not this cricket desk.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-[#25D366]/30 transition-colors">
                  <h4 className="text-xl font-bold mb-2 tracking-tight text-[#25D366]">OTP stays on the phone</h4>
                  <p className="text-muted-foreground leading-relaxed">Fairplay WhatsApp will never ask for your password, OTP, or remote access. Keep those on the login screen only.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Whatsapp Section */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Why use <span className="text-[#25D366]">WhatsApp?</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">The cricket desk answers on WhatsApp: new IDs, stuck UPI, and payouts past 180 minutes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Same-day cricket ID",
                desc: "Ask for a Fairplay ID, OTP help, or a pending UPI deposit. Have the ID and a screenshot ready."
              },
              {
                icon: ShieldCheck,
                title: "No OTP on chat",
                desc: "Official Fairplay WhatsApp will not ask for your password or OTP. Keep those on the login screen only."
              },
              {
                icon: PhoneCall,
                title: "This site’s number",
                desc: "Use the number linked from this site. Numbers from random Telegram ads are not Fairplay support."
              }
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

      <FAQSection 
        title="Fairplay WhatsApp questions"
        faqs={[
          { q: "Is it safe to share details on Fairplay WhatsApp?", a: "Use only the official link from this site. Never share your password or OTP, including with someone who claims to be support." },
          { q: "How do I verify official Fairplay WhatsApp?", a: "Open WhatsApp from this website or the Fairplay app. Do not trust numbers from ads, Telegram, or a friend of a friend." },
          { q: "Can I request a Fairplay withdrawal on WhatsApp?", a: "Start the payout in the Fairplay wallet first. WhatsApp is for tracking a pending UPI or bank credit with your ID and UTR." },
          { q: "Can WhatsApp create a Fairplay ID?", a: "Yes. That is how most cricket IDs start. Share the login number, complete OTP, then deposit with UPI." }
        ]}
      />
    </div>

  )
}
