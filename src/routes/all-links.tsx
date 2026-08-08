import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";

export const Route = createFileRoute("/all-links")({
  head: () => ({
    meta: [
      { title: "All Links (Sitemap) — Cricbet99 Site Directory" },
      { name: "description", content: "Complete Cricbet99 sitemap: sports, casino, guides, blog and support. Every important link in one clean directory for Indian players." },
      { property: "og:title", content: "All Links — Cricbet99 Sitemap" },
      { property: "og:description", content: "Every important Cricbet99 page in one clean directory." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/all-links" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/all-links" }],
  }),
  component: AllLinks,
});

const groups: { title: string; items: { l: string; to: string }[] }[] = [
  {
    title: "Sports",
    items: [
      { l: "Cricket & IPL", to: "/cricket" },
      { l: "Football", to: "/football" },
      { l: "Tennis", to: "/tennis" },
      { l: "Horse Racing", to: "/horse-racing" },
      { l: "Live Casino", to: "/casino" },
      { l: "Indian Card Games", to: "/indian-card-games" },
    ],
  },
  {
    title: "Live & Fixtures",
    items: [
      { l: "All Matches Index", to: "/matches" },
      { l: "Match Predictions", to: "/predictions" },
      { l: "2026 Match Schedule", to: "/schedule" },
    ],
  },
  {
    title: "Platform",
    items: [
      { l: "Sports ID", to: "/sports-id" },
      { l: "Services", to: "/services" },
      { l: "Platforms", to: "/platforms" },
      { l: "How It Works", to: "/how-it-works" },
      { l: "Cricbet99 App", to: "/cricbet99-app" },
      { l: "Login", to: "/login" },
    ],
  },
  {
    title: "Compare",
    items: [
      { l: "Cricbet99 vs Lotus 365", to: "/cricbet99-vs-lotus365" },
      { l: "Cricbet99 vs SkyExchange 247", to: "/cricbet99-vs-skyexchange247" },
    ],
  },
  {
    title: "Company",
    items: [
      { l: "About Us", to: "/about" },
      { l: "Blog", to: "/blog" },
      { l: "FAQ", to: "/faq" },
      { l: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Legal & Safety",
    items: [
      { l: "Responsible Gaming", to: "/responsible-gaming" },
      { l: "Privacy Policy", to: "/privacy-policy" },
      { l: "Terms & Conditions", to: "/terms" },
      { l: "Disclaimer", to: "/disclaimer" },
    ],
  },
];

function AllLinks() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Sitemap"
        title={<>All <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Cricbet99</span> links, one page.</>}
        subtitle="The full Cricbet99 site directory — sports, casino, live fixtures, comparisons, guides, account help and legal pages, organised for fast access."
      />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-primary/20 bg-background/60 p-7">
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary">{g.title}</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {g.items.map((i) => (
                  <li key={i.to}>
                    <Link to={i.to} className="text-foreground/85 hover:text-primary">{i.l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
