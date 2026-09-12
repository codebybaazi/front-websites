import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from '@/utils/page-seo'
import { Gift, Zap, Trophy, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { JsonLd } from '@/components/JsonLd'
import { howToJsonLd } from '@/utils/howto-schema'
import { ReviewedBadge } from '@/components/ReviewedBadge'
import { CONTENT_REVIEWED } from '@/lib/content-review-dates'
import { waLink } from "@/lib/whatsapp";


export const Route = createFileRoute('/bonus')({
  component: BonusPage,
  head: () => pageHeadFor('/bonus')
})

const bonusClaimSteps = [
  { title: "Get a Fairplay ID", desc: "WhatsApp official support. You cannot attach a promo without a live cricket ID." },
  { title: "Share the code", desc: "Send the promo code on WhatsApp, or enter it in Promotions after login." },
  { title: "Deposit with UPI", desc: "Make the qualifying deposit. Keep the UTR until the wallet credits." },
  { title: "Meet wagering", desc: "Play through the stated turnover before you withdraw bonus winnings." },
]

const promotions = [
  {
    title: "Fairplay welcome bonus",
    value: "300%",
    desc: "Ask WhatsApp to attach the welcome bonus to your Fairplay ID after the first qualifying UPI deposit. Read wagering before you opt in — bonus cash is not instantly withdrawable.",
    code: "FPWELCOME300",
    color: "from-orange-500 to-red-600",
    icon: Gift,
    features: ["Min deposit often ₹200", "Max bonus ₹50,000", "5x wagering on accumulators"]
  },
  {
    title: "Wednesday casino reload",
    value: "120%",
    desc: "On Wednesday, a qualifying deposit (often ₹700+) can add a casino reload on the same Fairplay wallet you use for cricket.",
    code: "FPWED120",
    color: "from-flame to-purple-600",
    icon: Zap,
    features: ["Every Wednesday", "Max bonus ₹10,000", "Live casino tables"]
  },
  {
    title: "Accumulator boost",
    value: "10%",
    desc: "If your multi wins 8 of 10 legs, Fairplay can add 10% to the payout. Minimum odds apply — check the slip.",
    code: "FPBOOST10",
    color: "from-green-500 to-emerald-600",
    icon: Trophy,
    features: ["Odds 1.55+", "Sports exchange", "Credited after settlement"]
  },
  {
    title: "Weekly cashback",
    value: "5%",
    desc: "A share of net losses can return on Monday if the Fairplay ID is verified. Cashback still follows the bonus terms on your account.",
    code: "FPRECOVER5",
    color: "from-emerald-500 to-cyan-600",
    icon: ShieldCheck,
    features: ["Monday window", "Max cashback ₹1 lakh", "Verified Fairplay ID"]
  }
]


function BonusPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <JsonLd
        data={howToJsonLd({
          name: 'How to claim a Fairplay bonus',
          description: 'Get a Fairplay ID, share the promo code, deposit with UPI, then meet wagering before withdrawing bonus winnings.',
          path: '/bonus',
          steps: bonusClaimSteps.map((step) => ({ name: step.title, text: step.desc })),
        })}
      />
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.705_0.198_142_/_0.08),transparent_55%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-[2px] w-8 brand-rule" />
              <span className="kicker">Promo codes on a live ID</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]">
              Fairplay bonuses, with the wagering written down
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Welcome credit, Wednesday casino reload and Monday cashback attach after a qualifying UPI deposit. Read wagering before you claim.
            </p>
            <ReviewedBadge iso={CONTENT_REVIEWED["/bonus"]} className="justify-center" />
          </motion.div>

          <div className="max-w-5xl mx-auto mb-12 px-4">
            <AIOverview title="Fairplay bonuses" />
          </div>
        </div>
      </section>

      <main className="container max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-8">
          {promotions.map((promo, i) => (
            <motion.div
              key={promo.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/40 transition-all"
            >
              <div className="grid md:grid-cols-12 items-stretch">
                <div className={`md:col-span-4 bg-gradient-to-br ${promo.color} p-8 flex flex-col justify-between items-center text-white text-center`}>
                  <promo.icon className="w-16 h-16 mb-4 drop-shadow-lg" />
                  <div>
                    <span className="text-6xl font-bold block mb-2">{promo.value}</span>
                    <span className="text-sm font-semibold tracking-tight opacity-80">Bonus value</span>
                  </div>
                </div>

                <div className="md:col-span-8 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{promo.title}</h2>
                    <div className="flex items-center gap-2 px-4 py-2 bg-background border border-dashed border-border rounded-md">
                      <span className="text-[10px] font-semibold text-muted-foreground">Code</span>
                      <span className="font-mono font-bold text-primary">{promo.code}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-8 text-[15px] leading-relaxed">
                    {promo.desc}
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 mb-10">
                    {promo.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-sm font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        {feat}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={waLink(`Hi Fairplay, please attach promo ${promo.code} to my Fairplay ID.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-flame hover:text-flame-foreground transition-colors flex items-center gap-2"
                    >
                      Claim via WhatsApp
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a href="#bonus-terms" className="px-6 py-3.5 bg-background border border-border font-semibold rounded-md hover:bg-accent transition-colors">
                      Bonus terms
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        <section className="mt-32">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16">How to claim a Fairplay bonus</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {bonusClaimSteps.map((s, i) => (
              <div key={s.title} className="relative p-8 bg-card border border-border rounded-xl group hover:border-primary/50 transition-colors">
                <span className="text-4xl font-bold text-primary/20 absolute top-4 right-6 group-hover:text-primary/40 transition-colors tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <h4 className="text-xl font-semibold tracking-tight mb-4">{s.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="bonus-terms" className="mt-32 p-10 md:p-12 bg-card/50 border border-border rounded-xl">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Fairplay bonus terms</h2>
          <div className="grid md:grid-cols-2 gap-12 text-sm text-muted-foreground leading-relaxed">
            <div className="space-y-4">
              <p>• One bonus can be claimed per user at any given time.</p>
              <p>• Minimum deposit required for any bonus activation is ₹200 unless stated otherwise.</p>
              <p>• Minimum odds for eligible bets on sports bonuses are 1.45 or higher.</p>
              <p>• Accumulator bets must include at least 3 events to qualify for bonus wagering.</p>
            </div>
            <div className="space-y-4">
              <p>• Bonuses remain valid for 15 days from the date of activation.</p>
              <p>• Duplicate accounts are not allowed and will result in forfeiture of all rewards.</p>
              <p>• Withdrawals can be requested only after fulfilling the specific wagering requirements.</p>
              <p>• All users must be 18+ and residing in permitted jurisdictions.</p>
            </div>
          </div>
        </section>

        <FAQSection 
          title="Fairplay bonus questions"
          faqs={[
            { q: "Can I withdraw a Fairplay bonus immediately?", a: "No. Bonus funds are for betting. Withdraw winnings only after the wagering on your Fairplay ID is complete." },
            { q: "How do I use a Fairplay promo code?", a: "WhatsApp the code with your Fairplay ID, or enter it under Promotions after login. Codes do not apply if the ID is not live." },
            { q: "Do Fairplay bonuses expire?", a: "Most last about 15 days from activation. Finish turnover before that window closes." },
            { q: "What is 5x wagering on Fairplay?", a: "You must stake about five times the bonus amount (at eligible odds) before bonus winnings can be withdrawn." }
          ]}
        />
      </main>

    </div>
  )
}
