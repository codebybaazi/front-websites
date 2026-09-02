import { createFileRoute } from '@tanstack/react-router'
import { pageHeadFor } from "@/utils/page-seo"
import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { 
  Home, 
  Smartphone, 
  Trophy, 
  Target, 
  ShieldCheck, 
  ChevronRight,
  ExternalLink,
  Zap,
  Star,
  TrendingUp,
  LayoutDashboard,
  BookOpen,
  Calendar,
  ZapIcon,
  Scale
} from 'lucide-react'
import { blogArticles } from '@/lib/blog-data'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { waLink } from "@/lib/whatsapp";
export const Route = createFileRoute('/all-links')({
  component: AllLinksPage,
  head: () => pageHeadFor('/all-links'),
})

const sections = [
  {
    title: "Core pages",
    icon: <Home className="w-6 h-6 text-primary" />,
    links: [
      { text: "Home", sub: "Fairplay ID, UPI wallet and cricket books", href: "/" },
      { text: "About Fairplay", sub: "How the cricket desk works", href: "/about" },
      { text: "What is Fairplay?", sub: "Exchange, ID and live casino in plain language", href: "/what-is-fairplay" },
      { text: "Is Fairplay Real?", sub: "Official WhatsApp vs cloned sites", href: "/is-fairplay-real" },
      { text: "Is Fairplay Safe?", sub: "OTP login, 2FA and wallet checks", href: "/is-fairplay-safe" },
      { text: "Is Fairplay Legal?", sub: "Licensing notes — not legal advice", href: "/is-fairplay-legal" },
      { text: "Our Services", sub: "Cricket, football, tennis and casino", href: "/services" },
      { text: "Contact support", sub: "WhatsApp the cricket desk", href: "/contact-us" },
      { text: "Support Hub", sub: "Login, deposit and payout help", href: "/support" },
      { text: "Platforms Index", sub: "Partner books on one Fairplay ID", href: "/platforms" },
      { text: "Blog & Analysis", sub: "ID, IPL and wallet guides", href: "/blog" },
      { text: "2026 Schedule", sub: "Cricket, FIFA and tennis fixtures", href: "/schedule" },
      { text: "All Matches", sub: "Every tournament and fixture index", href: "/matches" },
      { text: "Live casino", sub: "Teen Patti, Andar Bahar and tables", href: "/casino" },
      { text: "Bonus Offers", sub: "Welcome offer and wagering", href: "/bonus" }
    ]
  },
  {
    title: "Betting hubs",
    icon: <Target className="w-6 h-6 text-primary" />,
    links: [
      { text: "Sports Exchange", sub: "Cricket, football and tennis books", href: "/betting" },
      { text: "Tennis Exchange", sub: "ATP, WTA and set markets", href: "/betting" },
      { text: "IPL 2026", sub: "Match winner, toss and fancy", href: "/ipl-betting" },
      { text: "Cricket ID", sub: "Open a Fairplay cricket ID", href: "/fairplay-id" },
      { text: "T20 World Cup", sub: "ICC cricket on the same ID", href: "/t20-world-cup" },
      { text: "Kabaddi Betting", sub: "Pro Kabaddi & mat action", href: "/kabaddi-betting" },
      { text: "Basketball Betting", sub: "NBA & EuroLeague", href: "/basketball-betting" },
      { text: "Horse Racing", sub: "Global race meets", href: "/horse-racing" },
      { text: "eSports Betting", sub: "Match and map markets", href: "/esports-betting" },
      { text: "WPL Betting", sub: "Women's Premier League guide", href: "/wpl-betting" },
      { text: "Champions Trophy", sub: "ODI tournament books", href: "/champions-trophy" }
    ]
  },
  {
    title: "Comparison Guides",
    icon: <Scale className="w-6 h-6 text-primary" />,
    links: [
      { text: "Fairplay vs Lotus365", sub: "Cricket ID and UPI compared", href: "/fairplay-vs-lotus365" },
      { text: "Fairplay vs Reddybook", sub: "Exchange vs bookie desk", href: "/fairplay-vs-reddybook" },
      { text: "Fairplay vs Gold365", sub: "Partner book vs main ID", href: "/fairplay-vs-gold365" },
      { text: "Fairplay vs Mahavir Book", sub: "Payouts and fancy markets", href: "/fairplay-vs-mahavir-book" },
      { text: "Fairplay vs Diamond Exch", sub: "Liquidity and login", href: "/fairplay-vs-diamond-exchange" },
      { text: "Fairplay vs Laser247", sub: "Live cricket books compared", href: "/fairplay-vs-laser247" },
      { text: "Fairplay vs 11xplay", sub: "One ID or two books", href: "/fairplay-vs-11xplay" },
      { text: "Fairplay vs Skyexchange", sub: "Which desk you message", href: "/fairplay-vs-skyexchange247" },
      { text: "Fairplay vs Fairdeal", sub: "Partner vs main exchange", href: "/fairplay-vs-fairdeal" }
    ]
  },
  {
    title: "Partner books",
    icon: <ZapIcon className="w-6 h-6 text-primary" />,
    links: [
      { text: "Gold365", sub: "Partner exchange on WhatsApp", href: "/gold365" },
      { text: "11xplay", sub: "Linked cricket book if the desk issues it", href: "/11xplay" },
      { text: "Laser247", sub: "Live cricket partner book", href: "/laser247" },
      { text: "Cricbet99", sub: "Cricket-leaning partner", href: "/cricbet99" },
      { text: "Fairdeal", sub: "Confirm before you fund a second wallet", href: "/fairdeal" }
    ]
  },
  {
    title: "Guides & Access",
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    links: [
      { text: "Mobile App", sub: "Android and iOS Fairplay login", href: "/app" },
      { text: "Login Guide", sub: "OTP on the Fairplay ID", href: "/login-guide" },
      { text: "Register Guide", sub: "Open an ID on WhatsApp", href: "/register-guide" },
      { text: "Deposit Guide", sub: "UPI, bank and crypto funding", href: "/deposit-guide" },
      { text: "Withdrawal Guide", sub: "About 180-minute payouts", href: "/withdrawal-guide" },
      { text: "Telegram Channel", sub: "Fixture notes — not deposits", href: "/telegram-channel" },
      { text: "WhatsApp Support", sub: "ID, UPI and payout tickets", href: "/whatsapp-support" }
    ]
  },
  {
    title: "Issue Resolution",
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    links: [
      { text: "Login Issues", sub: "OTP, locked ID, password", href: "/login-issues" },
      { text: "Deposit Issues", sub: "Pending UPI and missing credit", href: "/deposit-issues" },
      { text: "Withdrawal Issues", sub: "Stuck payouts after settlement", href: "/withdrawal-issues" },
      { text: "Bonus Issues", sub: "Wagering and missing credit", href: "/bonus-issues" },
      { text: "Account Issues", sub: "KYC and ID access", href: "/account-issues" }
    ]
  },
  {
    title: "Legal & Trust",
    icon: <Star className="w-6 h-6 text-primary" />,
    links: [
      { text: "Privacy Policy", sub: "What we store on a Fairplay ID", href: "/privacy-policy" },
      { text: "Terms & Conditions", sub: "House rules and settlement", href: "/terms-conditions" },
      { text: "Responsible Gaming", sub: "Limits, time-outs, self-exclusion", href: "/responsible-gaming" },
      { text: "Security & Safety", sub: "OTP, clones and APKs", href: "/security-safety" },
      { text: "Legal Status", sub: "Offshore exchange — local law applies", href: "/legal-status" },
      { text: "KYC Policy", sub: "ID proof before large payouts", href: "/kyc-verification-policy" },
      { text: "Refund Policy", sub: "Voids, UTR and wallet reversals", href: "/refund-policy" },
      { text: "Rules & Regulations", sub: "Fancy markets and fair play", href: "/rules-regulations" },
      { text: "Disclaimer", sub: "Betting risk and information use", href: "/disclaimer" }
    ]
  }
]

function AllLinksPage() {
  // Sort and group blog posts for a dedicated section
  const sortedPosts = [...blogArticles].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 bg-[#0D1424] selection:bg-primary/30">
      <div className="container max-w-5xl mx-auto px-4 mb-16">
                <div className="container max-w-5xl mx-auto px-4 mb-12">
          <AIOverview 
            title="AI Overview: All Links"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20"
          >
            <LayoutDashboard className="w-3.5 h-3.5" /> Site Index
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 uppercase leading-none"
          >
            EVERY PAGE. <span className="text-primary">ONE INDEX.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium"
          >
            Fairplay ID, IPL books, UPI guides, partner exchanges and WhatsApp support — the full directory.
          </motion.p>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {sections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + idx * 0.05 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              
              <div className="relative glass-card p-8 rounded-xl h-full border-primary/10 group-hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {section.links.map((link, lIdx) => (
                    <Link
                      key={lIdx}
                      to={link.href as any}
                      className="flex items-start justify-between group/link p-3 -mx-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                    >
                      <div className="flex flex-col">
                        <span className="text-base font-bold text-white/90 group-hover/link:text-primary transition-colors flex items-center gap-2">
                          {link.text}
                          <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                        </span>
                        <span className="text-xs text-muted-foreground font-medium mt-0.5">
                          {link.sub}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dedicated Blog/Posts Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20"></div>
            <div className="flex items-center gap-3 px-6 py-2 bg-primary/10 rounded-full border border-primary/20">
              <BookOpen className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold tracking-tight text-white">Latest guides</h2>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sortedPosts.map((post, pIdx) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: pIdx * 0.02 }}
              >
                <Link
                  to="/posts/$slug"
                  params={{ slug: post.slug }}
                  className="group block p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 h-full"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60 group-hover:text-primary transition-colors">
                        {post.category}
                      </span>
                      <Calendar className="w-3 h-3 text-muted-foreground" />
                    </div>
                    <h3 className="text-sm font-bold text-white/80 group-hover:text-white transition-colors leading-tight mb-2">
                      {post.title}
                    </h3>
                    <div className="mt-auto pt-2 flex items-center gap-2 text-[10px] text-muted-foreground font-medium">
                      <span>{post.date}</span>
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 rounded-xl border-primary/20 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 text-center overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to <span className="text-primary">open an ID?</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              WhatsApp for a Fairplay ID, fund with UPI, then withdraw about 180 minutes after the official result.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={waLink("Hello Fairplay! I want to Sign Up and get my Verified ID.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-primary text-primary-foreground rounded-xl font-bold tracking-tight hover:shadow-[0_0_30px_rgba(47,185,74,0.5)] transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5 fill-current" /> Open an ID on WhatsApp
              </a>
              <Link 
                to="/services"
                className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-xl font-bold tracking-tight hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                Explore platforms <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    
      <FAQSection 
        title="All Links FAQ"
        faqs={[
          { q: 'What is this page?', a: 'An index of Fairplay guides: ID, IPL, login, deposits, casino, support and the blog. Use it when you know the task but not the URL.' },
          { q: 'Which link is for a new ID?', a: 'Fairplay ID, then register guide, then WhatsApp. Do not start with a random partner URL.' },
          { q: 'Where is the 2026 fixture list?', a: 'The schedule page. Open a match for prediction notes and markets.' },
          { q: 'I still cannot find a topic.', a: 'Search the blog, or WhatsApp with the Fairplay ID and the question in one message.' },
        ]}
      />
    </div>)
}
