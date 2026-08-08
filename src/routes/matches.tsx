import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { matches, matchesBySport, type MatchFixture } from "@/data/matches";
import { ChevronRight, Radio } from "lucide-react";
import { buildBreadcrumbJsonLd } from "@/components/long-form-page";

export const Route = createFileRoute("/matches")({
  head: () => ({
    meta: [
      { title: "Live Cricket Matches & IPL 2026 Schedule | Cricbet99 Odds" },
      { name: "description", content: "Track all live cricket, football, and tennis matches on Cricbet99. Get real-time IPL 2026 schedule, in-play odds, and instant WhatsApp betting IDs." },
      { property: "og:title", content: "All Matches Index — Cricbet99" },
      { property: "og:description", content: "The full live and upcoming match index on Cricbet99 — cricket, football, tennis and more." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cricbet99.co.in/matches" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/matches" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/matches", "All Matches")),
      },
    ],
  }),
  component: MatchesPage,
});

const groups = [
  {
    tag: "Cricket",
    items: [
      { t: "IPL 2026", d: "All 74 league games plus playoffs and final." },
      { t: "India vs Australia ODI Series", d: "Complete 3-match ODI series with fancy and session markets." },
      { t: "ICC T20 World Cup 2026", d: "Group stage, Super 8 and knockouts — live in-play." },
      { t: "Women's Premier League", d: "Every WPL fixture with over-by-over odds." },
      { t: "The Hundred 2026", d: "England's short-format league with live cash-out." },
    ],
  },
  {
    tag: "Football",
    items: [
      { t: "FIFA World Cup 2026", d: "Every group and knockout match across USA, Canada and Mexico." },
      { t: "UEFA Champions League", d: "Full CL fixtures with 1X2, BTTS and Asian handicap." },
      { t: "Premier League, La Liga, Serie A", d: "Top-5 European leagues with weekly weekend cards." },
    ],
  },
  {
    tag: "Tennis & More",
    items: [
      { t: "ATP & WTA Tour", d: "All main-draw singles and doubles matches." },
      { t: "Grand Slams", d: "Wimbledon, US Open, Roland-Garros and Australian Open." },
      { t: "PKL Kabaddi", d: "Full Pro Kabaddi League season with over/under markets." },
    ],
  },
];

function MatchesPage() {
  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="All Matches"
        title={<>Every live match, one <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Cricbet99 ID.</span></>}
        subtitle="A single verified Cricbet99 ID gives you real-time access to every major cricket, football and tennis fixture — with exchange-grade odds, session markets and instant UPI payouts."
      />

      {/* Featured fixtures — deep links for SEO */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <h2 className="text-2xl font-black md:text-3xl">Featured live &amp; upcoming fixtures</h2>
        <p className="mt-2 text-sm text-foreground/70">Tap any fixture for live odds, markets and a one-click WhatsApp ID.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {matches.map((m: MatchFixture) => (
            <Link
              key={m.slug}
              to="/matches/$slug"
              params={{ slug: m.slug }}
              className="group rounded-2xl border border-primary/20 bg-background/60 p-5 transition-colors hover:border-primary/60"
            >
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest">
                <span className="text-primary">{m.tournament}</span>
                {m.status === "live" && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] text-primary">
                    <Radio className="h-3 w-3" /> LIVE
                  </span>
                )}
              </div>
              <div className="mt-3 text-lg font-bold group-hover:text-primary">
                {m.homeTeam} vs {m.awayTeam}
              </div>
              <div className="mt-1 text-xs text-foreground/60">{m.venue}, {m.city}</div>
              <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                Live odds &amp; markets <ChevronRight className="h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 space-y-10">
        {groups.map((g) => (
          <div key={g.tag}>
            <h2 className="text-2xl font-black md:text-3xl">{g.tag}</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {g.items.map((i) => (
                <div key={i.t} className="rounded-2xl border border-primary/20 bg-background/60 p-6">
                  <h3 className="text-lg font-bold">{i.t}</h3>
                  <p className="mt-2 text-sm text-foreground/75">{i.d}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <CTABand heading="Bet on any live match in minutes." sub="Ping our team on WhatsApp for a verified Cricbet99 ID and jump into today's matches." />
    </SiteLayout>
  );
}

// silence unused import warning if bundler is strict
void matchesBySport;
