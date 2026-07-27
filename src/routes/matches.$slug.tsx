import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand, WA } from "@/components/site-layout";
import { getMatch, matches } from "@/data/matches";
import { MessageCircle, MapPin, Calendar, Trophy, Radio, Target } from "lucide-react";

export const Route = createFileRoute("/matches/$slug")({
  loader: ({ params }) => {
    const match = getMatch(params.slug);
    if (!match) throw notFound();
    return { match };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Match not found — Cricbet99" }, { name: "robots", content: "noindex" }] };
    }
    const m = loaderData.match;
    const title = `${m.homeTeam} vs ${m.awayTeam} Live Odds & Betting — ${m.tournament} | Cricbet99`;
    const descFull = `Live ${m.sport.toLowerCase()} odds for ${m.homeTeam} vs ${m.awayTeam} at ${m.venue}, ${m.city}. In-play markets on Cricbet99.`;
    const desc = descFull.length > 160 ? descFull.slice(0, 157) + "..." : descFull;
    const path = `/matches/${m.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "keywords", content: m.keywords.join(", ") },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: path },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
      ],
      links: [{ rel: "canonical", href: path }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsEvent",
            name: `${m.homeTeam} vs ${m.awayTeam}`,
            description: desc,
            startDate: m.startDate,
            eventStatus: m.status === "live" ? "https://schema.org/EventScheduled" : "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
            sport: m.sport,
            location: {
              "@type": "Place",
              name: m.venue,
              address: { "@type": "PostalAddress", addressLocality: m.city, addressCountry: m.country },
            },
            competitor: [
              { "@type": "SportsTeam", name: m.homeTeam },
              { "@type": "SportsTeam", name: m.awayTeam },
            ],
            superEvent: { "@type": "SportsEvent", name: m.tournament },
          }),
        },
      ],
    };
  },
  component: MatchPage,
  notFoundComponent: MatchNotFound,
});

function MatchNotFound() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Match" title="Match not found" subtitle="This fixture may have finished or the link is incorrect." />
      <div className="mx-auto max-w-3xl px-6 pb-16 text-center">
        <Link to="/matches" className="text-primary hover:underline">← Back to all matches</Link>
      </div>
    </SiteLayout>
  );
}

function MatchPage() {
  const { match: m } = Route.useLoaderData();
  const dateStr = new Date(m.startDate).toLocaleString("en-IN", {
    dateStyle: "full",
    timeStyle: "short",
  });
  const related = matches.filter((x) => x.sport === m.sport && x.slug !== m.slug).slice(0, 3);

  return (
    <SiteLayout>
      <PageHero
        eyebrow={`${m.sport} · ${m.tournament}`}
        title={
          <>
            {m.homeTeam} vs{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>
              {m.awayTeam}
            </span>
          </>
        }
        subtitle={`Live in-play odds, session markets and instant WhatsApp betting IDs for ${m.homeTeam} vs ${m.awayTeam} — ${m.tournament} at ${m.venue}.`}
      />

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { Icon: Calendar, label: "Start", value: dateStr },
            { Icon: MapPin, label: "Venue", value: `${m.venue}, ${m.city}` },
            { Icon: Trophy, label: "Tournament", value: m.tournament },
            { Icon: Radio, label: "Status", value: m.status === "live" ? "LIVE now" : "Upcoming" },
          ].map(({ Icon, label, value }) => (
            <div key={label} className="rounded-2xl border border-primary/20 bg-background/60 p-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                <Icon className="h-4 w-4" /> {label}
              </div>
              <div className="mt-2 text-sm font-semibold text-foreground/90">{value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <h2 className="text-2xl font-black md:text-3xl">Live betting markets for {m.homeTeam} vs {m.awayTeam}</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {m.marketHighlights.map((market: string) => (
            <div key={market} className="rounded-2xl border border-primary/20 bg-background/60 p-5">
              <Target className="h-5 w-5 text-primary" />
              <div className="mt-3 text-base font-bold">{market}</div>
              <p className="mt-1 text-sm text-foreground/70">Live in-play with exchange-grade odds on your Cricbet99 ID.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="rounded-3xl border border-primary/25 bg-background/60 p-6 md:p-10">
          <h2 className="text-2xl font-black md:text-3xl">
            How to bet on {m.homeTeam} vs {m.awayTeam} on Cricbet99
          </h2>
          <ol className="mt-5 grid gap-4 text-sm text-foreground/80 md:grid-cols-3">
            <li className="rounded-2xl border border-primary/15 p-5">
              <div className="text-primary font-bold">1. Get your ID</div>
              <p className="mt-2">Message us on WhatsApp — your Cricbet99 ID is activated in under 5 minutes with a 100% welcome bonus.</p>
            </li>
            <li className="rounded-2xl border border-primary/15 p-5">
              <div className="text-primary font-bold">2. Deposit via UPI</div>
              <p className="mt-2">Instant deposits from any UPI app. Balance reflects in your Cricbet99 wallet immediately.</p>
            </li>
            <li className="rounded-2xl border border-primary/15 p-5">
              <div className="text-primary font-bold">3. Place your bet</div>
              <p className="mt-2">Open the {m.tournament} card, pick {m.homeTeam} or {m.awayTeam}, and lock your stake at live odds.</p>
            </li>
          </ol>
          <div className="mt-6">
            <a
              href={WA}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-primary-foreground shadow-2xl transition-transform hover:scale-[1.03]"
              style={{ background: "var(--gradient-gold)" }}
            >
              <MessageCircle className="h-5 w-5" /> Get ID for {m.homeTeam} vs {m.awayTeam}
            </a>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pb-8">
          <h2 className="text-2xl font-black md:text-3xl">More {m.sport} matches</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/matches/$slug"
                params={{ slug: r.slug }}
                className="group rounded-2xl border border-primary/20 bg-background/60 p-5 transition-colors hover:border-primary/60"
              >
                <div className="text-xs font-bold uppercase tracking-widest text-primary">{r.tournament}</div>
                <div className="mt-2 text-lg font-bold group-hover:text-primary">
                  {r.homeTeam} vs {r.awayTeam}
                </div>
                <div className="mt-1 text-xs text-foreground/60">{r.venue}, {r.city}</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CTABand
        heading={`Ready to bet on ${m.homeTeam} vs ${m.awayTeam}?`}
        sub={`Get a verified Cricbet99 ID on WhatsApp in under 5 minutes and jump into live ${m.tournament} action.`}
      />
    </SiteLayout>
  );
}