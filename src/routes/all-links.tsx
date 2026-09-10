import { abs } from "@/lib/site-url";
import { buildPageFaqLd } from "@/data/pageFaqs";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageFaqs } from "@/components/PageFaqs";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { blogPosts } from "@/data/blog-posts";
import { ALL_PAGE_SLUGS } from "@/data/pages";
import { wc2026Matches } from "@/data/wc2026-matches";
import { cricketSeries2026 } from "@/data/cricket-series-2026";
import { tennis2026 } from "@/data/tennis-2026";

const mainPages: { path: string; label: string }[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/sprinters-book-deposit-number", label: "Sprinters Book Deposit Number" },
  { path: "/sprinters-book-withdrawl-number", label: "Sprinters Book Withdrawal Number" },
  { path: "/sprinters-book-customer-care-number", label: "Sprinters Book Customer Care Number" },
  { path: "/services", label: "Services" },
  { path: "/platforms", label: "Platforms" },
  { path: "/sports-id", label: "Sports ID" },
  { path: "/predictions", label: "Predictions" },
  { path: "/blog", label: "Blog" },
  { path: "/thank-you", label: "Thank You" },
];

const bettingPages: { path: string; label: string }[] = [
  { path: "/cricket-betting", label: "Cricket Betting" },
  { path: "/cricket-betting-app", label: "Cricket Betting App" },
  { path: "/football-betting", label: "Football Betting" },
  { path: "/tennis-betting", label: "Tennis Betting" },
  { path: "/horse-race-betting", label: "Horse Race Betting" },
  { path: "/casino", label: "Casino" },
  { path: "/indian-card-games", label: "Indian Card Games" },
];

const platformPages: { path: string; label: string }[] = [
  { path: "/cricbet99", label: "Cricbet99" },
  { path: "/laser247", label: "Laser247" },
  { path: "/11xplay", label: "11xplay" },
  { path: "/sprinters-club", label: "Sprinters Club" },
  { path: "/sprinters-login", label: "Sprinters Login" },
  { path: "/sprinters-vs-lotus365", label: "Sprinters vs Lotus 365" },
  { path: "/sprinters-vs-skyexchange247", label: "Sprinters vs Skyexchange 247" },
];

const legalPages: { path: string; label: string }[] = [
  { path: "/privacy-policy", label: "Privacy Policy" },
  { path: "/terms-and-conditions", label: "Terms & Conditions" },
  { path: "/disclaimer", label: "Disclaimer" },
  { path: "/responsible-gambling", label: "Responsible Gambling" },
];

export const Route = createFileRoute("/all-links")({
  head: () => ({
    meta: [
      { title: "All Links — Sprinters Online Gaming" },
      { name: "description", content: "Complete sitemap of Sprinters Online Gaming. Browse every page — betting IDs, guides, predictions, blog posts and more." },
      { property: "og:title", content: "All Links | Sprinters" },
      { property: "og:description", content: "Complete sitemap of every page on Sprinters Online Gaming." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: abs("/all-links") },
    ],
    links: [{ rel: "canonical", href: "/all-links" }],
    scripts: [
        ...(buildPageFaqLd("/all-links") ? [{ type: "application/ld+json", children: JSON.stringify(buildPageFaqLd("/all-links")) }] : []),
    ],
  }),
  component: AllLinksPage,
});

function Section({
  title,
  items,
  prefix = "",
}: {
  title: string;
  items: { path: string; label: string }[];
  prefix?: string;
}) {
  if (items.length === 0) return null;
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-2xl font-bold text-foreground">
        {title} <span className="text-sm font-normal text-muted-foreground">({items.length})</span>
      </h2>
      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.path}>
            <a
              href={prefix + item.path}
              className="block truncate rounded-lg border border-border bg-card px-4 py-2 text-sm text-card-foreground transition-colors hover:border-primary hover:text-primary"
              title={item.label}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function AllLinksPage() {
  const generatedItems = ALL_PAGE_SLUGS.map((slug) => ({
    path: `/${slug}`,
    label: slug.replace(/[-/]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
  })).sort((a, b) => a.path.localeCompare(b.path));

  const blogItems = blogPosts.map((p) => ({
    path: `/post/${p.slug}`,
    label: p.title,
  }));

  const scheduleItems = [
    { path: "/schedule", label: "FIFA World Cup 2026 Schedule" },
    ...wc2026Matches.map((m) => ({
      path: `/schedule/${m.slug}`,
      label: `${m.home} vs ${m.away} — ${m.stage}`,
    })),
  ];

  const cricketScheduleItems = [
    { path: "/cricket-schedule", label: "Cricket Schedule 2026-27" },
    ...cricketSeries2026.map((s) => ({
      path: `/cricket-schedule/${s.slug}`,
      label: s.name,
    })),
  ];

  const tennisScheduleItems = [
    { path: "/schedule", label: "Tennis Schedule 2026-27" },
    ...tennis2026.map((t) => ({
      path: `/tennis-schedule/${t.slug}`,
      label: t.name,
    })),
  ];

  const total =
    mainPages.length +
    bettingPages.length +
    platformPages.length +
    legalPages.length +
    generatedItems.length +
    blogItems.length +
    scheduleItems.length +
    cricketScheduleItems.length +
    tennisScheduleItems.length +
    1; // /all-links itself

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Sitemap</p>
          <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl">All Links</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Every page on Sprinters Online Gaming in one place — {total.toLocaleString()} links across
            betting IDs, guides, predictions and blog posts.
          </p>
        </header>

        <Section title="Main Pages" items={mainPages} />
        <Section title="Betting & Casino" items={bettingPages} />
        <Section title="Platforms & Membership" items={platformPages} />
        <Section title="Legal & Policy" items={legalPages} />
        <Section title="Guides & Content" items={generatedItems} />
        <Section title="FIFA World Cup 2026" items={scheduleItems} />
        <Section title="Cricket Schedule 2026-27" items={cricketScheduleItems} />
        <Section title="Tennis Schedule 2026-27" items={tennisScheduleItems} />
        <Section title="Blog Posts" items={blogItems} />
      </main>
      <PageFaqs />
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
