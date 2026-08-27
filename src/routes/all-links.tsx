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
    title: "Core Experience",
    icon: <Home className="w-6 h-6 text-primary" />,
    links: [
      { text: "Home", sub: "Elite landing page & overview", href: "/" },
      { text: "About Fairplay", sub: "Our story, values & elite standards", href: "/about" },
      { text: "What is Fairplay?", sub: "Deep-dive guide into our exchange ecosystem", href: "/what-is-fairplay" },
      { text: "Is Fairplay Real?", sub: "Technical legitimacy & trust audit", href: "/is-fairplay-real" },
      { text: "Is Fairplay Safe?", sub: "Security & encryption protocol audit", href: "/is-fairplay-safe" },
      { text: "Is Fairplay Legal?", sub: "Regulatory & compliance deep-dive", href: "/is-fairplay-legal" },
      { text: "Our Services", sub: "Full spectrum of betting & casino", href: "/services" },
      { text: "Contact Elite Support", sub: "Get in touch with VIP concierge", href: "/contact-us" },
      { text: "Support Hub", sub: "Comprehensive assistance center", href: "/support" },
      { text: "Platforms Index", sub: "Complete betting network", href: "/platforms" },
      { text: "Blog & Analysis", sub: "Latest insights & strategies", href: "/blog" },
      { text: "2026 Schedule", sub: "Cricket, FIFA and tennis fixtures", href: "/schedule" },
      { text: "All Matches", sub: "Every tournament and fixture index", href: "/matches" },
      { text: "Casino Elite", sub: "Live dealer & table games", href: "/casino" },
      { text: "Bonus Offers", sub: "Exclusive rewards & promotions", href: "/bonus" }
    ]
  },
  {
    title: "Betting Verticals",
    icon: <Target className="w-6 h-6 text-primary" />,
    links: [
      { text: "Sports Exchange", sub: "High-liquidity cricket & sports", href: "/betting" },
      { text: "Tennis Exchange", sub: "ATP, WTA and set markets", href: "/betting" },
      { text: "IPL 2026", sub: "Premium IPL betting markets", href: "/ipl-betting" },
      { text: "Cricket ID", sub: "Verified Fairplay Cricket ID", href: "/fairplay-id" },
      { text: "T20 World Cup", sub: "International ICC odds", href: "/t20-world-cup" },
      { text: "Kabaddi Betting", sub: "Pro Kabaddi & mat action", href: "/kabaddi-betting" },
      { text: "Basketball Betting", sub: "NBA & EuroLeague", href: "/basketball-betting" },
      { text: "Horse Racing", sub: "Global race meets", href: "/horse-racing" },
      { text: "eSports Betting", sub: "Next-gen gaming action", href: "/esports-betting" },
      { text: "WPL Betting", sub: "Women's Premier League guide", href: "/wpl-betting" },
      { text: "Champions Trophy", sub: "ODI tournament intelligence", href: "/champions-trophy" }
    ]
  },
  {
    title: "Comparison Guides",
    icon: <Scale className="w-6 h-6 text-primary" />,
    links: [
      { text: "Fairplay vs Lotus365", sub: "Elite platform comparison", href: "/fairplay-vs-lotus365" },
      { text: "Fairplay vs Reddybook", sub: "Technical stack analysis", href: "/fairplay-vs-reddybook" },
      { text: "Fairplay vs Gold365", sub: "Technical benchmarking analysis", href: "/fairplay-vs-gold365" },
      { text: "Fairplay vs Mahavir Book", sub: "Operational efficiency comparison", href: "/fairplay-vs-mahavir-book" },
      { text: "Fairplay vs Diamond Exch", sub: "Market liquidity analysis", href: "/fairplay-vs-diamond-exchange" },
      { text: "Fairplay vs Laser247", sub: "Technical benchmarking analysis", href: "/fairplay-vs-laser247" },
      { text: "Fairplay vs 11xplay", sub: "Market depth comparison", href: "/fairplay-vs-11xplay" },
      { text: "Fairplay vs Skyexchange", sub: "Market liquidity analysis", href: "/fairplay-vs-skyexchange247" },
      { text: "Fairplay vs Fairdeal", sub: "Platform ecosystem comparison", href: "/fairplay-vs-fairdeal" }
    ]
  },
  {
    title: "Partner Network",
    icon: <ZapIcon className="w-6 h-6 text-primary" />,
    links: [
      { text: "Gold365", sub: "Elite exchange platform", href: "/gold365" },
      { text: "11xplay", sub: "Premium betting partner", href: "/11xplay" },
      { text: "Laser247", sub: "High-speed betting exchange", href: "/laser247" },
      { text: "Cricbet99", sub: "Cricket specialist network", href: "/cricbet99" },
      { text: "Fairdeal", sub: "Trusted gaming partner", href: "/fairdeal" }
    ]
  },
  {
    title: "Guides & Access",
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    links: [
      { text: "Mobile App", sub: "Elite Android & iOS experience", href: "/app" },
      { text: "Login Guide", sub: "Securely access your elite ID", href: "/login-guide" },
      { text: "Register Guide", sub: "Step-by-step account creation", href: "/register-guide" },
      { text: "Deposit Guide", sub: "UPI, Bank & Crypto funding", href: "/deposit-guide" },
      { text: "Withdrawal Guide", sub: "Fast, secure elite payouts", href: "/withdrawal-guide" },
      { text: "Telegram Channel", sub: "Real-time odds & updates", href: "/telegram-channel" },
      { text: "WhatsApp Support", sub: "Direct concierge access", href: "/whatsapp-support" }
    ]
  },
  {
    title: "Issue Resolution",
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    links: [
      { text: "Login Issues", sub: "Account access troubleshooting", href: "/login-issues" },
      { text: "Deposit Issues", sub: "Funding support & resolution", href: "/deposit-issues" },
      { text: "Withdrawal Issues", sub: "Payout tracking & support", href: "/withdrawal-issues" },
      { text: "Bonus Issues", sub: "Promotional credit help", href: "/bonus-issues" },
      { text: "Account Issues", sub: "General account management", href: "/account-issues" }
    ]
  },
  {
    title: "Legal & Trust",
    icon: <Star className="w-6 h-6 text-primary" />,
    links: [
      { text: "Privacy Policy", sub: "Data protection & elite privacy", href: "/privacy-policy" },
      { text: "Terms & Conditions", sub: "Platform rules & user agreement", href: "/terms-conditions" },
      { text: "Responsible Gaming", sub: "Elite player safety controls", href: "/responsible-gaming" },
      { text: "Security & Safety", sub: "End-to-end encryption details", href: "/security-safety" },
      { text: "Legal Status", sub: "Compliance & regulatory info", href: "/legal-status" },
      { text: "KYC Policy", sub: "Verification & identity standards", href: "/kyc-verification-policy" },
      { text: "Refund Policy", sub: "Transaction reversal terms", href: "/refund-policy" },
      { text: "Rules & Regulations", sub: "Fair play & market rules", href: "/rules-regulations" },
      { text: "Disclaimer", sub: "Platform liability notices", href: "/disclaimer" }
    ]
  }
]

function AllLinksPage() {
  // Sort and group blog posts for a dedicated section
  const sortedPosts = [...blogArticles].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 bg-[#0A0A0B] selection:bg-primary/30">
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
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-xs font-black uppercase tracking-[0.3em] mb-6 border border-primary/20"
          >
            <LayoutDashboard className="w-3.5 h-3.5" /> Site Index
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black italic tracking-tighter mb-6 uppercase leading-none"
          >
            EVERY PAGE. <span className="text-primary">ONE INDEX.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium"
          >
            Navigate the complete Fairplay ecosystem with our comprehensive directory of elite services, betting markets, and support resources.
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
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-[32px] blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              
              <div className="relative glass-card p-8 rounded-[32px] h-full border-primary/10 group-hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-black italic uppercase tracking-tight text-white group-hover:text-primary transition-colors">
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
              <h2 className="text-xl font-black italic uppercase tracking-widest text-white">Latest Analysis & Guides</h2>
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
                  className="group block p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 h-full"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary/60 group-hover:text-primary transition-colors">
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
          className="glass-card p-12 rounded-[40px] border-primary/20 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 text-center overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black italic uppercase mb-6">
              Ready to <span className="text-primary">Join the Elite?</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Get your verified Fairplay ID now and experience India's most trusted exchange with lightning-fast payouts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={waLink("Hello Fairplay! I want to Sign Up and get my Verified ID.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-primary text-primary-foreground rounded-2xl font-black italic uppercase tracking-[0.2em] hover:shadow-[0_0_30px_rgba(255,100,0,0.5)] transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5 fill-current" /> Join Now via WhatsApp
              </a>
              <Link 
                to="/services"
                className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black italic uppercase tracking-[0.2em] hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                Explore Platforms <ExternalLink className="w-5 h-5" />
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

