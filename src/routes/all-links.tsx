import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { blogPosts } from "@/data/blog-posts";
import { buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";

export const Route = createFileRoute("/all-links")({
  head: () => ({
    meta: [
      { title: "All Links (Sitemap) — Cricbet99 Site Directory" },
      { name: "description", content: "Complete Cricbet99 sitemap: sports, casino, guides, blog and support. Every important link in one clean directory for Indian players." },
      { property: "og:title", content: "All Links — Cricbet99 Sitemap" },
      { property: "og:description", content: "Every important Cricbet99 page in one clean directory." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cricbet99.co.in/all-links" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/all-links" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/all-links", "All Links")),
      },
    ],
  }),
  component: AllLinks,
});

const groups: { title: string; items: { l: string; to: string }[] }[] = [
  {
    title: "Major Sports",
    items: [
      { l: "Cricket & IPL", to: "/cricket" },
      { l: "Football", to: "/football" },
      { l: "Tennis", to: "/tennis" },
      { l: "Kabaddi", to: "/kabaddi" },
      { l: "Basketball", to: "/basketball" },
      { l: "E-Sports", to: "/esports" },
      { l: "Horse Racing", to: "/horse-racing" },
    ],
  },
  {
    title: "Casino & Games",
    items: [
      { l: "Live Casino", to: "/casino" },
      { l: "Indian Card Games", to: "/indian-card-games" },
      { l: "Exchange", to: "/exchange" },
      { l: "Demo ID", to: "/demo-id" },
    ],
  },
  {
    title: "Market Insights",
    items: [
      { l: "Live Matches Hub", to: "/matches" },
      { l: "Today's Best Odds", to: "/todays-best-odds" },
      { l: "Match Predictions", to: "/predictions" },
      { l: "2026 Schedule", to: "/schedule" },
      { l: "IPL 2026 Calendar", to: "/ipl-2026-calendar" },
    ],
  },
  {
    title: "Betting Guides",
    items: [
      { l: "How to Place a Cricket Bet", to: "/betting-guides/how-to-place-a-cricket-bet" },
      { l: "How to Place a Live Bet", to: "/betting-guides/how-to-place-a-live-bet" },
      { l: "How to Bet on Toss Market", to: "/betting-guides/how-to-bet-on-toss-market" },
      { l: "Session Betting Guide", to: "/betting-guides/how-to-bet-on-session-betting" },
      { l: "High Odds Strategy", to: "/high-odds-betting-strategy" },
      { l: "How Bookmakers Make Money", to: "/betting-guides/how-bookmakers-make-money" },
    ],
  },
  {
    title: "User Education",
    items: [
      { l: "How to Deposit", to: "/how-to-deposit" },
      { l: "How to Withdraw", to: "/how-to-withdraw" },
      { l: "KYC Policy", to: "/kyc-policy" },
      { l: "Security Review", to: "/security" },
      { l: "Transaction Limits", to: "/transaction-limits" },
    ],
  },
  {
    title: "Case Studies",
    items: [
      { l: "IPL: ₹5K to ₹25K Strategy", to: "/case-studies/ipl-5000-to-25000-profit" },
      { l: "Small Budget Growth", to: "/case-studies/small-budget-betting-strategy" },
      { l: "10-Minute Toss Profit", to: "/case-studies/toss-market-10-minute-profit" },
      { l: "Live Betting 3x Returns", to: "/case-studies/live-betting-3x-returns" },
    ],
  },
  {
    title: "Comparisons",
    items: [
      { l: "vs Lotus 365", to: "/cricbet99-vs-lotus365" },
      { l: "vs SkyExchange 247", to: "/cricbet99-vs-skyexchange247" },
      { l: "vs 11xPlay", to: "/cricbet99-vs-11xplay" },
      { l: "vs Reddy Book", to: "/cricbet99-vs-reddybook" },
      { l: "vs Laser247", to: "/cricbet99-vs-laser247" },
      { l: "vs Gold365", to: "/cricbet99-vs-gold365" },
      { l: "vs Fairdeal", to: "/cricbet99-vs-fairdeal" },
      { l: "vs Mahavir Book", to: "/cricbet99-vs-mahavir-book" },
      { l: "vs Diamond Exchange", to: "/cricbet99-vs-diamond-exchange" },
    ],
  },
  {
    title: "Support & Help",
    items: [
      { l: "WhatsApp Support", to: "/whatsapp-support" },
      { l: "Contact Us", to: "/contact" },
      { l: "FAQ Knowledge Base", to: "/faq" },
      { l: "Login Issues", to: "/login-issues" },
      { l: "Deposit Issues", to: "/deposit-issues" },
      { l: "Withdrawal Delays", to: "/withdrawal-delay" },
      { l: "Bonus Issues", to: "/bonus-issues" },
    ],
  },
  {
    title: "Company & Blog",
    items: [
      { l: "About Cricbet99", to: "/about" },
      { l: "Latest News & Blog", to: "/blog" },
      { l: "Support Questions", to: "/faq" },
      { l: "Contact Us", to: "/contact" },
      ...blogPosts.slice(0, 10).map(post => ({
        l: `Blog: ${post.title}`,
        to: `/blog/${post.slug}`
      }))
    ],
  },
  {
    title: "Legal & Safety",
    items: [
      { l: "Is Cricbet99 Safe?", to: "/is-cricbet99-safe" },
      { l: "Is Cricbet99 Legal?", to: "/is-cricbet99-legal" },
      { l: "Terms & Conditions", to: "/terms" },
      { l: "Privacy Policy", to: "/privacy-policy" },
      { l: "Responsible Gaming", to: "/responsible-gaming" },
      { l: "Disclaimer", to: "/disclaimer" },
      { l: "Refund Policy", to: "/refund-policy" },
    ],
  },
];

function AllLinks() {
  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="Directory"
        title={<>Explore All <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Cricbet99</span> Links.</>}
        subtitle="The definitive guide to every corner of the Cricbet99 ecosystem. From live matches and betting strategies to safety reviews and premium casino games."
      />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {groups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-primary/10 bg-background/40 p-6 backdrop-blur-sm transition-colors hover:border-primary/30">
              <h2 className="text-xs font-black uppercase tracking-widest text-primary/80">{g.title}</h2>
              <ul className="mt-5 space-y-3">
                {g.items.map((i) => (
                  <li key={i.to}>
                    <Link to={i.to as any} className="text-sm text-foreground/70 transition-colors hover:text-primary">
                      {i.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <AiOverview 
        summary="Cricbet99 Directory: Every link you need for IPL 2026, live casino games, and expert betting strategies in one secure place."
        highlights={[
          "Official 2026 Sports Schedule",
          "Verified ID Registration Links",
          "Instant Withdrawal Support Hub",
          "Advanced Betting Strategy Guides"
        ]}
      />
      <CTABand 

        heading="Couldn't find what you need?" 
        sub="Our 24/7 WhatsApp support team is ready to help you with ID creation, deposits, or any queries you have." 
      />
    </SiteLayout>
  );
}
