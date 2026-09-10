import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuickLinks } from "@/components/QuickLinks";
import { siteName } from "@/data/site";
import { useWhatsAppUrl } from "@/components/WhatsAppProvider";
import { PAGES } from "@/data/pages";
import { GUIDES } from "@/data/guides";
import { CASES } from "@/data/cases";
import { POSTS } from "@/data/posts";
import { ArrowUpRight, Search } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/all-links")({
  head: () => ({
    meta: [
      { title: `All Links — ${siteName} Sitemap` },
      {
        name: "description",
        content:
          "Every page on Lotus365 in one place — betting guides, blog posts, case studies, schedules, app downloads, comparisons and support links.",
      },
      { property: "og:title", content: `All Links — ${siteName}` },
      {
        property: "og:description",
        content:
          "The complete Lotus365 site directory — every route, guide, blog post and case study.",
      },
      { property: "og:url", content: "https://lotus365id.com/all-links" },
    ],
    links: [{ rel: "canonical", href: "https://lotus365id.com/all-links" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://lotus365id.com/" },
            { "@type": "ListItem", position: 2, name: "All Links", item: "https://lotus365id.com/all-links" },
          ],
        }),
      },
    ],
  }),
  component: AllLinksPage,
});

type LinkItem = { label: string; href: string; external?: boolean };
type Group = { title: string; eyebrow?: string; links: LinkItem[] };

// -----------------------------
// Curated top-level routes
// -----------------------------
const mainLinks: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Lotus365 Login", href: "/lotus365-login" },
  { label: "Lotus365 Win", href: "/lotus365-win" },
  { label: "Lotus365 Register", href: "/lotus365-register" },
  { label: "Lotus365 Blue", href: "/lotus365-blue" },
  { label: "Customer Care", href: "/lotus365-customer-care" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Is Lotus365 Legal in India?", href: "/is-lotus365-legal-in-india" },
  { label: "All Matches", href: "/matches" },
  { label: "Full Schedule", href: "/schedule" },
];

const appLinks: LinkItem[] = [
  { label: "Lotus365 APK", href: "/lotus365-apk" },
  { label: "Lotus365 App Download", href: "/lotus365-app-download" },
];

const comparisonLinks: LinkItem[] = [
  { label: "Lotus365 vs Skyexchange", href: "/lotus365-vs-skyexchange" },
  { label: "Lotus365 vs Fairplay", href: "/lotus365-vs-fairplay" },
  { label: "Lotus365 vs Betbhai9", href: "/lotus365-vs-betbhai9" },
  { label: "Lotus365 vs Betbook247", href: "/lotus365-vs-betbook247" },
  { label: "Lotus365 vs Diamondexch", href: "/lotus365-vs-diamondexch" },
  { label: "Lotus365 vs Lords Exchange", href: "/lotus365-vs-lords-exchange" },
];

// -----------------------------
// Humanize slug helper
// -----------------------------
function humanize(slug: string): string {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// Truncate long labels for tidy cards
function short(label: string, max = 70): string {
  return label.length > max ? label.slice(0, max - 1).trim() + "…" : label;
}

// -----------------------------
// Build groups from data
// -----------------------------
function buildGroups(whatsappUrl: string): Group[] {
  const pageLinks: LinkItem[] = Object.values(PAGES)
    .map((p) => ({ label: humanize(p.slug), href: `/${p.slug}` }))
    .sort((a, b) => a.label.localeCompare(b.label));

  const guideLinks: LinkItem[] = Object.values(GUIDES)
    .map((g) => ({ label: g.hero || humanize(g.slug), href: `/betting-guides/${g.slug}` }))
    .sort((a, b) => a.label.localeCompare(b.label));

  const caseLinks: LinkItem[] = Object.values(CASES)
    .map((c) => ({ label: c.hero || humanize(c.slug), href: `/case-study/${c.slug}` }))
    .sort((a, b) => a.label.localeCompare(b.label));

  // Posts grouped by category
  const byCategory = new Map<string, LinkItem[]>();
  for (const p of POSTS) {
    const arr = byCategory.get(p.category) ?? [];
    arr.push({ label: short(p.h1 || p.title), href: `/blog/${p.slug}` });
    byCategory.set(p.category, arr);
  }
  const postGroups: Group[] = Array.from(byCategory.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([cat, items]) => ({
      title: `Blog · ${cat}`,
      eyebrow: "Insights",
      links: items.sort((a, b) => a.label.localeCompare(b.label)),
    }));

  return [
    { title: "Main Pages", eyebrow: "Start here", links: mainLinks },
    { title: "App & Download", eyebrow: "Mobile", links: appLinks },
    { title: "Comparisons", eyebrow: "Vs Others", links: comparisonLinks },
    { title: "Support", eyebrow: "Talk to us", links: [
      { label: "WhatsApp Concierge", href: whatsappUrl, external: true },
    ] },
    { title: "Content Pages", eyebrow: "Deep dives", links: pageLinks },
    { title: "Betting Guides", eyebrow: "How-to", links: guideLinks },
    { title: "Case Studies", eyebrow: "Real players", links: caseLinks },
    ...postGroups,
  ];
}

function AllLinksPage() {
  const whatsappUrl = useWhatsAppUrl();
  const groups = useMemo(() => buildGroups(whatsappUrl), [whatsappUrl]);
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return groups;
    return groups
      .map((g) => ({
        ...g,
        links: g.links.filter(
          (l) =>
            l.label.toLowerCase().includes(needle) ||
            l.href.toLowerCase().includes(needle)
        ),
      }))
      .filter((g) => g.links.length > 0);
  }, [groups, q]);

  const total = groups.reduce((n, g) => n + g.links.length, 0);
  const showing = filtered.reduce((n, g) => n + g.links.length, 0);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section
        className="relative overflow-hidden border-b"
        style={{ borderColor: "oklch(0.82 0.15 88 / 0.2)" }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(620px 320px at 18% 20%, oklch(0.82 0.15 88 / 0.18), transparent 60%), radial-gradient(520px 280px at 82% 65%, oklch(0.82 0.15 88 / 0.14), transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.82 0.15 88 / 0.55), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8 pt-16 sm:pt-20 pb-12">
          <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.35em] text-primary/80">
            <span
              className="inline-block h-1 w-1 rounded-full"
              style={{ background: "var(--gold)" }}
            />
            Sitemap · {total} Links
          </div>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
            All <span className="text-primary">Lotus365</span> Links
          </h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-foreground/90 leading-relaxed">
            Every page on {siteName} in one place — pick your table. Cricket,
            casino, exchange, guides, comparisons, case studies and support
            channels.
          </p>

          {/* Search */}
          <div
            className="mt-8 flex items-center gap-3 rounded-2xl px-4 py-3 max-w-xl"
            style={{
              border: "1px solid oklch(0.82 0.15 88 / 0.35)",
              background:
                "linear-gradient(135deg, oklch(0.82 0.15 88 / 0.08), transparent)",
            }}
          >
            <Search className="h-4 w-4 text-primary" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Filter links — try “IPL”, “app”, “withdraw”…"
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-foreground/50"
              aria-label="Filter links"
            />
            {q && (
              <span className="text-[10px] font-mono text-primary/80">
                {showing}/{total}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Groups */}
      <section className="mx-auto max-w-[1400px] px-4 sm:px-8 py-14">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-foreground/70 text-sm">
            No links match “{q}”. Try a different word.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl p-6 backdrop-blur transition-all hover:shadow-[0_20px_60px_-20px_oklch(0.82_0.15_88/0.35)]"
                style={{
                  border: "1px solid oklch(0.82 0.15 88 / 0.25)",
                  background:
                    "linear-gradient(180deg, oklch(0.82 0.15 88 / 0.06), transparent)",
                }}
              >
                <div className="flex items-baseline justify-between mb-1">
                  {group.eyebrow && (
                    <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-primary/70">
                      {group.eyebrow}
                    </span>
                  )}
                  <span className="text-[10px] font-mono text-primary/70">
                    {group.links.length.toString().padStart(2, "0")}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-5">
                  <span
                    className="inline-block h-1 w-1 rounded-full"
                    style={{ background: "var(--gold)" }}
                  />
                  <div className="font-display text-lg leading-tight text-foreground">
                    {group.title}
                  </div>
                </div>
                <ul className="space-y-0.5 max-h-[420px] overflow-y-auto pr-1 [scrollbar-width:thin]">
                  {group.links.map((l) => (
                    <li key={`${group.title}-${l.href}-${l.label}`}>
                      <a
                        href={l.href}
                        {...(l.external
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
                        className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2 -mx-3 text-sm text-foreground/90 hover:text-primary hover:bg-primary/5 transition-colors"
                      >
                        <span className="flex items-center gap-2 min-w-0">
                          <span
                            className="h-px w-3 shrink-0 transition-all group-hover:w-6"
                            style={{ background: "var(--gold)" }}
                          />
                          <span className="truncate">{l.label}</span>
                        </span>
                        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </section>

      <QuickLinks currentPath="/all-links" heading="Jump straight into Lotus365" subheading="Every hub, guide and market — one tap away." />
      <SiteFooter />
    </div>
  );
}
