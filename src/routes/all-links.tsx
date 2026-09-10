import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink, Link2 } from "lucide-react";
import { navItems } from "@/data/site";
import { posts } from "@/data/posts";
import { allSeries } from "@/lib/schedule-data";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ogImageMeta } from "@/lib/seo";

type LinkRow = { label: string; to: string; desc?: string };
type LinkSection = { heading: string; items: LinkRow[] };

export const Route = createFileRoute("/all-links")({
  head: () => ({
    meta: [
      { title: "All Links — Full Sitemap of Mahadev Book" },
      { name: "description", content: "Browse every page on Mahadev Book in one place — sports, platforms, guides, support, predictions, schedule, matches, blog and comparison pages." },
      { property: "og:title", content: "All Links — Full Sitemap of Mahadev Book" },
        { name: "twitter:title", content: "All Links — Full Sitemap of Mahadev Book" },
      { property: "og:description", content: "Every Mahadev Book page in one index — navigation, matches, blog, guides, support and policies." },
      { property: "og:url", content: "https://mahadevbookss.com/all-links" },
      { property: "og:type", content: "website" },
      ...ogImageMeta("All Links — Full Sitemap of Mahadev Book"),
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/all-links" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "All Links", item: "https://mahadevbookss.com/all-links" },
          ],
        }),
      },
    ],
  }),
  component: AllLinksPage,
});

function AllLinksPage() {
  // Build from nav mega menus (dedupe by "to|label")
  const seen = new Set<string>();
  const navSections: LinkSection[] = [];
  for (const nav of navItems) {
    if (!nav.mega) {
      const key = `${nav.to}|${nav.label}`;
      if (!seen.has(key)) {
        seen.add(key);
        // top-level singletons collected below in "Main Pages"
      }
      continue;
    }
    for (const group of nav.mega.groups) {
      const items: LinkRow[] = [];
      for (const it of group.items) {
        const key = `${it.to}|${it.label}`;
        if (seen.has(key)) continue;
        seen.add(key);
        items.push({ label: it.label, to: it.to, desc: it.desc });
      }
      if (items.length) navSections.push({ heading: `${nav.label} · ${group.heading}`, items });
    }
  }

  const mainPages: LinkSection = {
    heading: "Main Pages",
    items: [
      { label: "Home", to: "/", desc: "Landing page & overview" },
      { label: "About", to: "/about", desc: "Our story & values" },
      { label: "Services", to: "/services", desc: "What we offer" },
      { label: "Contact", to: "/contact", desc: "Get in touch" },
      { label: "Login", to: "/login", desc: "Access your ID" },
      { label: "Mahadev Betting App", to: "/mahadev-betting-app", desc: "App overview" },
    ],
  };

  const cricketSection: LinkSection = {
    heading: "Cricket & Sports Hub",
    items: [
      { label: "2026 Match Schedule", to: "/schedule", desc: "Full fixture calendar" },
      { label: "All Matches Index", to: "/matches", desc: "By tournament + search" },
      { label: "Match Predictions", to: "/predictions", desc: "Daily tips & odds" },
    ],
  };

  const compareSection: LinkSection = {
    heading: "Compare Platforms",
    items: [
      { label: "Mahadev Book vs Skyexchange 247", to: "/mahadev-book-vs-skyexchange-247" },
      { label: "Mahadev Book vs Lotus 365", to: "/mahadev-book-vs-lotus-365" },
    ],
  };

  const seriesSection: LinkSection = {
    heading: `Tournaments (${allSeries.length})`,
    items: allSeries.map((s) => ({
      label: s.name,
      to: `/match/${s.matches[0]?.slug ?? ""}`,
      desc: `${s.sport} · ${s.format}`,
    })).filter((r) => r.to !== "/match/"),
  };

  const blogSection: LinkSection = {
    heading: `Blog Posts (${posts.length})`,
    items: posts.map((p) => ({ label: p.title, to: `/blog/${p.slug}`, desc: p.category })),
  };

  const policiesSection: LinkSection = {
    heading: "Policies & Info",
    items: [
      { label: "Terms & Conditions", to: "/terms" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Responsible Gaming", to: "/responsible-gaming" },
      { label: "Blog", to: "/blog", desc: "Latest posts" },
    ],
  };

  const sections: LinkSection[] = [
    mainPages,
    cricketSection,
    compareSection,
    ...navSections,
    blogSection,
    seriesSection,
    policiesSection,
  ];

  const totalLinks = sections.reduce((n, s) => n + s.items.length, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative border-b border-border overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(hsl(var(--primary))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary))_1px,transparent_1px)] [background-size:56px_56px]"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
          <nav className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-6 flex items-center gap-2">
            <Link to="/" className="hover:text-primary">/home</Link>
            <span className="text-primary/50">→</span>
            <span className="text-foreground">/all-links</span>
          </nav>
          <div className="flex items-end gap-6 flex-wrap">
            <div className="font-display text-[88px] sm:text-[120px] leading-[0.85] font-bold text-gradient-gold tabular-nums">
              {String(totalLinks).padStart(3, "0")}
            </div>
            <div className="pb-3">
              <div className="text-[11px] font-mono uppercase tracking-[0.35em] text-primary">Sitemap · All Links</div>
              <h1 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-[1.05]">
                Every page. <span className="text-primary">One index.</span>
              </h1>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground">
                A single directory of every Mahadev Book page — main sections, sports, guides, support, predictions, schedule, matches, blog posts, comparisons and policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((sec) => (
            <article key={sec.heading} className="border border-border bg-card/60 p-5 sm:p-6">
              <header className="flex items-center gap-2 border-b border-border pb-3 mb-4">
                <Link2 className="h-3.5 w-3.5 text-primary" />
                <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-foreground">
                  {sec.heading}
                </h2>
                <span className="ml-auto font-mono text-[10px] tabular-nums text-muted-foreground">
                  {String(sec.items.length).padStart(2, "0")}
                </span>
              </header>
              <ul className="space-y-2">
                {sec.items.map((it) => (
                  <li key={`${sec.heading}-${it.to}-${it.label}`}>
                    <a
                      href={it.to}
                      className="group flex items-start gap-2 border-l-2 border-border/60 pl-3 py-1 hover:border-primary hover:bg-primary/5 transition"
                    >
                      <ExternalLink className="mt-1 h-3 w-3 text-primary/60 group-hover:text-primary shrink-0" />
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm text-foreground group-hover:text-primary transition line-clamp-2">
                          {it.label}
                        </span>
                        {it.desc && (
                          <span className="block text-[11px] text-muted-foreground line-clamp-1">
                            {it.desc}
                          </span>
                        )}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <RelatedLinks
        paths={["/schedule", "/matches", "/predictions", "/blog", "/mahadev-betting-app"]}
        title="Popular destinations"
      />
    </div>
  );
}
