import { abs } from "@/lib/site-url";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, TELEGRAM } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { cricketSeries2026, getCricketSeries, type CricketSeriesMatch } from "@/data/cricket-series-2026";
import { useWhatsAppHref } from "@/hooks/use-whatsapp";

export const Route = createFileRoute("/cricket-schedule/$slug/")({
  loader: ({ params }) => {
    const s = getCricketSeries(params.slug);
    if (!s) throw notFound();
    return s;
  },
  head: ({ params, loaderData }) => {
    const s = loaderData;
    if (!s) {
      return {
        meta: [
          { title: "Series not found — Sprinters" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const seoOverrides: Record<string, { title: string; desc: string; keywords: string }> = {
      "india-tour-of-england-2026": {
        title: "IND vs ENG 2026 — India vs England Schedule, Live Score & Prediction",
        desc: "India vs England 2026 (IND vs ENG / ENG vs IND): full fixtures, venues, timings, live score, playing 11, where to watch and AI match predictions for every Test, ODI and T20I.",
        keywords: "india vs england 2026, ind vs eng, eng vs ind, ind vs eng live, ind vs eng live score, india vs england live, england vs india, india national cricket team vs england cricket team, where to watch india vs england, india vs england prediction",
      },
      "india-tour-of-zimbabwe-2026": {
        title: "IND vs ZIM 2026 — India vs Zimbabwe Schedule, Live Score & Prediction",
        desc: "India tour of Zimbabwe 2026 (IND vs ZIM): full schedule, venues, timings, live score, squads, playing 11, where to watch and AI match predictions for the T20I & ODI series.",
        keywords: "india vs zimbabwe 2026, ind vs zim, ind vs zim 2026, ind vs zw live score, zimbabwe vs india, india tour of zimbabwe, where to watch india vs zimbabwe, india vs zimbabwe live, india vs zimbabwe prediction, when is india vs zimbabwe match",
      },
      "sri-lanka-tour-of-india-2026": {
        title: "IND vs SL 2026 — India vs Sri Lanka Schedule, Live Score & Prediction",
        desc: "Sri Lanka tour of India 2026 (IND vs SL): complete fixtures, venues, timings, live score, playing 11, where to watch and AI match predictions for every T20I and ODI.",
        keywords: "india vs sri lanka 2026, ind vs sl, sri lanka vs india, ind vs sl live, ind vs sl live score, where to watch india vs sri lanka, how to watch india vs sri lanka, india vs sri lanka prediction, when is india vs sri lanka match, who won india vs sri lanka",
      },
      "india-tour-of-sri-lanka-2026": {
        title: "IND vs SL 2026 — India tour of Sri Lanka Schedule & Prediction",
        desc: "India tour of Sri Lanka 2026 (IND vs SL): full schedule, venues, timings, live score, squads, where to watch and AI match predictions for the T20I and ODI series.",
        keywords: "india tour of sri lanka 2026, ind vs sl, india vs sri lanka, sri lanka vs india, ind vs sl live score, where to watch india vs sri lanka, india vs sri lanka prediction",
      },
      "ashes-2026-27": {
        title: "The Ashes 2026-27 — AUS vs ENG Schedule & Predictions",
        desc: "Ashes 2026-27 schedule: Australia vs England five-Test series fixtures, venues, day-by-day timings, live score and AI predictions.",
        keywords: "ashes 2026, ashes 2026-27, australia vs england, aus vs eng, ashes schedule, ashes test series, ashes live score",
      },
      "icc-mens-t20-world-cup-2026": {
        title: "ICC Men's T20 World Cup 2026 — Schedule & Predictions",
        desc: "T20 World Cup 2026: full schedule, groups, venues, match timings, live scores, who will win predictions and today match predictions for every fixture.",
        keywords: "t20 world cup 2026, icc t20 world cup 2026, t20 world cup schedule, cricket world cup 2026, t20 world cup live score, t20 world cup prediction",
      },
      "icc-womens-t20-world-cup-2026": {
        title: "ICC Women's T20 World Cup 2026 — Schedule & Predictions",
        desc: "Women's T20 World Cup 2026: complete schedule, groups, venues, timings, live score and AI match predictions.",
        keywords: "women's t20 world cup 2026, icc women's t20 world cup 2026, women's cricket world cup, england women vs india women, india women vs england women",
      },
    };

    const override = seoOverrides[params.slug];
    const title = override?.title ?? `${s.name} — Schedule, Fixtures & Betting IDs`;
    const desc = override?.desc ?? `${s.name} full schedule (${s.format}, ${s.window}) — fixtures, venues, live odds and Sprinters betting IDs for ${s.teams.slice(0, 4).join(", ")}.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        ...(override ? [{ name: "keywords", content: override.keywords }] : []),
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: abs(`/cricket-schedule/${params.slug}`) },
      ],
      links: [{ rel: "canonical", href: `/cricket-schedule/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsEvent",
            name: s.name,
            sport: "Cricket",
            startDate: s.startIso,
            description: s.summary,
            competitor: s.teams.map((t) => ({ "@type": "SportsTeam", name: t })),
          }),
        },
      ],
    };
  },
  component: SeriesPage,
});

function SeriesPage() {
  const s = Route.useLoaderData();
  const others = cricketSeries2026.filter((x) => x.slug !== s.slug);
  const whatsapp = useWhatsAppHref();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section
        className="relative overflow-hidden border-b border-border/50"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-primary backdrop-blur">
            Cricket · {s.window}
          </span>
          <h1 className="mt-6 text-4xl font-black uppercase leading-tight md:text-5xl">
            {s.name}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{s.format}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={whatsapp}
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Get Betting ID on WhatsApp
            </a>
            <a
              href={TELEGRAM}
              className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold"
            >
              Chat on Telegram
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-bold">About the series</h2>
          <p className="mt-3 text-muted-foreground">{s.summary}</p>
          <p className="mt-4 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Teams:</span>{" "}
            {s.teams.join(" · ")}
          </p>
        </div>

        {s.matches && s.matches.length > 0 ? (
          <div className="mt-8">
            <h2 className="text-xl font-bold">Announced fixtures</h2>
            <ul className="mt-4 space-y-3">
              {s.matches.map((m: CricketSeriesMatch, i: number) => (
                <li
                  key={i}
                  className="rounded-xl border border-border bg-card p-4 sm:flex sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {m.label}
                    </p>
                    <p className="mt-1 font-bold">
                      {m.home} <span className="text-muted-foreground">vs</span> {m.away}
                    </p>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground sm:mt-0 sm:text-right">
                    <p>{m.date}</p>
                    <p>{m.venue}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-muted-foreground">
              Full match list updates as the schedule is confirmed by the boards.
            </p>
          </div>
        ) : (
          <p className="mt-8 text-sm text-muted-foreground">
            Full fixture list will be published once the boards confirm the schedule.
          </p>
        )}

        <div className="mt-10">
          <Link to="/cricket-schedule" className="text-sm font-semibold text-primary">
            ← All upcoming series
          </Link>
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            More upcoming series
          </h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((x) => (
              <li key={x.slug}>
                <Link
                  to="/cricket-schedule/$slug"
                  params={{ slug: x.slug }}
                  className="block rounded-lg border border-border bg-background px-4 py-3 text-sm hover:border-primary hover:text-primary"
                >
                  <span className="font-semibold">{x.short}</span>
                  <span className="ml-2 text-muted-foreground">· {x.window}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}