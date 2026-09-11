import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { 
  Swords, 
  Zap, 
  Shield, 
  Trophy, 
  ArrowRight, 
  CheckCircle2, 
  XCircle,
  TrendingUp,
  Cpu,
  Clock,
  Smartphone,
  ShieldCheck,
  Target,
  HelpCircle,
  BarChart3,
  Star
} from 'lucide-react'
import { waLink } from "@/lib/whatsapp";

export const Route = createFileRoute('/fairplay-vs-skyexchange247')({
  component: ComparisonPage,
  head: () => pageHeadFor('/fairplay-vs-skyexchange247'),
})

const playerReviews = [
  {
    name: "Prateek Sinha",
    city: "Patna",
    detail: "Clone logo asked for UPI to a random name",
    rating: 5,
    body: "A page copied the Fairplay logo and asked for UPI to a name I did not recognise. I closed it and used this website plus the WhatsApp number published here. OTP landed on my phone. I did not miss toss over a clone deposit.",
  },
  {
    name: "Divya Rajan",
    city: "Palakkad",
    detail: "No in-app transfer from Skyexchange247",
    rating: 4,
    body: "I looked for a transfer button between Skyexchange247 and Fairplay. There is none. I withdrew on Skyexchange first, then deposited to Fairplay with UPI after I logged in. Two brands, two wallets.",
  },
  {
    name: "Omar Farooq",
    city: "Bareilly",
    detail: "Tennis and football on the Fairplay ID",
    rating: 5,
    body: "Cricket, tennis and football on this site sit on the Fairplay ID. I confirm the slip. After settlement the payout took about 180 minutes. Skyexchange still follows that desk. I do not assume a 15 or 30 minute window.",
  },
  {
    name: "Sonia Gill",
    city: "Amritsar",
    detail: "Installed Fairplay from this site, not a third-party APK",
    rating: 4,
    body: "Skyexchange247 is a different install. A store offered a third-party APK. I skipped it and used this site's app page for Fairplay. First withdrawal waited on KYC. Help is this site's WhatsApp, not a Skyexchange ticket.",
  },
]

const comparisonData = [
  {
    feature: "Login",
    fairplay: "Fairplay ID via WhatsApp. Confirm you are on this site.",
    skyexchange: "A different exchange name. Clones copy logos.",
    winner: "fairplay"
  },
  {
    feature: "Balance",
    fairplay: "UPI deposit after you log into Fairplay.",
    skyexchange: "Withdraw there first. There is no in-app transfer between brands.",
    winner: "fairplay"
  },
  {
    feature: "Settlement",
    fairplay: "Payouts usually about 180 minutes after settlement.",
    skyexchange: "That desk’s timing. We do not invent 15–30 minute claims.",
    winner: "fairplay"
  },
  {
    feature: "Sports",
    fairplay: "Cricket, tennis and football on the Fairplay ID.",
    skyexchange: "Stay on Skyexchange for markets that live there.",
    winner: "fairplay"
  },
  {
    feature: "App",
    fairplay: "Install from this site’s app page.",
    skyexchange: "A different install. Third-party APKs are a common scam.",
    winner: "fairplay"
  }
]

function ComparisonPage() {
  return (
    <div className="flex flex-col bg-background text-foreground overflow-hidden">
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.08),transparent_70%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-8">
              <Star className="w-4 h-4 fill-primary" /> Different exchange, different WhatsApp
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9] uppercase">
              FAIRPLAY <span className="text-white/20 not-italic">VS</span> <span className="text-primary not-italic">SKYEXCHANGE247</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Skyexchange247 is another exchange brand. Fairplay IDs and UPI deposits are handled on this site’s WhatsApp desk.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview 
              title="Infrastructure Benchmark Audit"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container max-w-7xl mx-auto px-4 py-24">
        {/* Comparison Table */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden border-primary/20 mb-24 rounded-[40px]"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-8 text-sm font-black uppercase tracking-widest text-white/40">Efficiency Metrics</th>
                  <th className="p-8 text-lg font-black italic uppercase tracking-tight text-primary">Fairplay</th>
                  <th className="p-8 text-lg font-black italic uppercase tracking-tight text-white/60">Skyexchange 247</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-8 font-bold text-white/80">{row.feature}</td>
                    <td className="p-8 text-sm leading-relaxed text-white">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{row.fairplay}</span>
                      </div>
                    </td>
                    <td className="p-8 text-sm leading-relaxed text-white/40">
                      <div className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-white/10 shrink-0 mt-0.5" />
                        <span>{row.skyexchange}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Deep Dive Analysis */}
        <div className="space-y-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[32px] border-primary/10"
          >
            <h2 className="text-3xl font-black italic uppercase mb-8 flex items-center gap-3">
              <TrendingUp className="text-primary w-8 h-8" /> Two brands
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
              <p>
                Skyexchange247 is a different exchange name. Fairplay IDs and deposits are only those confirmed on this site’s WhatsApp. Clones copy logos and ask for UPI to random names.
              </p>
              <p>
                Fairplay cricket, tennis and football sit on the Fairplay ID. Confirm the slip. We do not publish commission percents or claim millions of concurrent users.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8"
          >
            <div className="glass-card p-10 rounded-[32px] border-primary/10">
              <h3 className="text-2xl font-black italic uppercase mb-6 flex items-center gap-3">
                <Target className="text-primary w-6 h-6" /> Deep Market Liquidity Analysis
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Fairplay is an exchange with a live slip you confirm. We do not claim every stake from ₹500 to a large figure matches at the same price. Check the book on your ID.
              </p>
            </div>
            
            <div className="glass-card p-10 rounded-[32px] border-primary/10">
              <h3 className="text-2xl font-black italic uppercase mb-6 flex items-center gap-3">
                <Shield className="text-primary w-6 h-6" /> Superior Fund Security
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Withdraw to the UPI on your Fairplay ID after settlement. There is no in-app transfer from Skyexchange. Withdraw there first, then deposit here.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[32px] border-primary/10"
          >
            <h3 className="text-2xl font-black italic uppercase mb-6 flex items-center gap-3">
              <Smartphone className="text-primary w-6 h-6" /> Opening Fairplay
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              WhatsApp this site. Log in with OTP. KYC can still hold a first withdrawal. Do not miss a toss because you paid a clone UPI.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-white/5">
              {[
                { label: "Fairplay ID", value: "WhatsApp on this site" },
                { label: "Login", value: "Mobile + OTP" },
                { label: "Payout", value: "~180 min after settlement" }
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-[10px] font-black uppercase tracking-widest text-primary/60">{stat.label}</div>
                  <div className="text-lg font-bold text-white">{stat.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Player reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-black italic uppercase mb-4 flex items-center gap-3">
            <Star className="text-primary w-8 h-8" /> Fairplay vs Skyexchange247 reviews
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">
            Four players who already held Skyexchange247 and then opened a Fairplay ID on this site. They mention clone UPI pages, withdrawing on Skyexchange before depositing here, and payouts that usually take about 180 minutes after settlement.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {playerReviews.map((review) => (
              <article
                key={review.name}
                className="glass-card p-8 rounded-[32px] border-primary/10 flex flex-col"
              >
                <div className="flex items-center gap-1 mb-5" aria-label={`${review.rating} out of 5`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? "text-primary fill-primary" : "text-white/15"}`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed flex-1">{review.body}</p>
                <footer className="mt-6 pt-6 border-t border-white/5">
                  <div className="text-white font-bold">{review.name}</div>
                  <div className="text-sm text-white/50">{review.city}</div>
                  <div className="text-xs text-primary/70 mt-1">{review.detail}</div>
                </footer>
              </article>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 rounded-[32px] border-primary/10 mb-24"
        >
          <h3 className="text-3xl font-black italic uppercase mb-8 flex items-center gap-3 text-center justify-center">
            <HelpCircle className="text-primary w-8 h-8" /> Skyexchange comparison FAQ
          </h3>
          <div className="grid gap-6">
            {[
              {
                q: "Is Skyexchange247 a Fairplay brand?",
                a: "It is a different exchange name. Fairplay IDs and deposits are only those confirmed on this site’s WhatsApp."
              },
              {
                q: "Can I transfer a Skyexchange balance here?",
                a: "Withdraw there first, then deposit to Fairplay with UPI. There is no in-app transfer between brands."
              },
              {
                q: "Which login is for tennis and football?",
                a: "Fairplay sports sit on the Fairplay ID. Check the schedule on this site for listed fixtures."
              },
              {
                q: "How do I confirm I am on the real Fairplay?",
                a: "Use this website and the published WhatsApp number. Clones copy logos and ask for UPI to random names."
              }
            ].map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all group">
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">Q</span>
                  {faq.q}
                </h4>
                <p className="text-muted-foreground leading-relaxed pl-11">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final Verdict CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 rounded-[40px] border-primary/30 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Trophy className="w-48 h-48 text-primary" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-6">
              GET A <span className="text-primary">FAIRPLAY ID</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium">
              WhatsApp this site. Withdraw on Skyexchange first if you are moving cash.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href={waLink("Hello Fairplay! I read the Skyexchange page and want a Fairplay ID.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 bg-primary text-primary-foreground rounded-2xl font-black italic uppercase tracking-[0.2em] hover:shadow-[0_0_40px_rgba(255,100,0,0.6)] transition-all flex items-center justify-center gap-3"
              >
                <Zap className="w-5 h-5 fill-current" /> Get Your Fairplay ID
              </a>
              <Link 
                to="/all-links"
                className="px-12 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black italic uppercase tracking-[0.2em] hover:bg-white/10 transition-all flex items-center justify-center gap-3"
              >
                Site Index <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    
      <FAQSection 
        title="Fairplay vs Skyexchange247 FAQ"
        faqs={[
          { q: 'Is Skyexchange247 a Fairplay brand?', a: 'It is a different exchange name. Fairplay IDs and deposits are only those confirmed on this site’s WhatsApp.' },
          { q: 'Can I transfer a Skyexchange balance here?', a: 'Withdraw there first, then deposit to Fairplay with UPI. There is no in-app transfer between brands.' },
          { q: 'Which login is for tennis and football?', a: 'Fairplay sports sit on the Fairplay ID. Check the schedule on this site for listed fixtures.' },
          { q: 'How do I confirm I am on the real Fairplay?', a: 'Use this website and the published WhatsApp number. Clones copy logos and ask for UPI to random names.' },
        ]}
      />
    </div>)
}
