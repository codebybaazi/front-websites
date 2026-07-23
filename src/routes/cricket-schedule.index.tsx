import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { cricketSeries2026 } from "@/data/cricket-series-2026";
import { abs } from "@/lib/site-url";

export const Route = createFileRoute("/cricket-schedule/")({
  head: () => ({
    meta: [
      { title: "Cricket Schedule 2026-27 — Upcoming International Series & Fixtures" },
      {
        name: "description",
        content:
          "Complete upcoming international cricket schedule 2026-27 — ICC events, bilateral tours, ODIs, T20Is and Tests. Series-wise fixtures with venues and betting IDs.",
      },
      { property: "og:title", content: "Upcoming International Cricket Schedule 2026-27" },
      {
        property: "og:description",
        content:
          "Every major upcoming international cricket series through March 2027 — with fixtures, venues and Sprinters betting IDs.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cricket-schedule" },
    ],
    links: [{ rel: "canonical", href: "/cricket-schedule" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Upcoming International Cricket Series 2026-27",
          itemListElement: cricketSeries2026.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: abs(`/cricket-schedule/${s.slug}`),
            name: s.name,
          })),
        }),
      },
    ],
  }),
  component: CricketScheduleIndex,
});

function CricketScheduleIndex() {
  const sorted = [...cricketSeries2026].sort((a, b) =>
    a.startIso.localeCompare(b.startIso),
  );
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section
        className="relative overflow-hidden border-b border-border/50 bg-match-hero"
      >
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-primary backdrop-blur">
            Cricket Schedule
          </span>
          <h1 className="mt-6 text-4xl font-black uppercase leading-tight md:text-5xl">
            India Cricket Schedule 2026-27
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Complete upcoming international cricket fixtures — India tour of England, The
            Ashes 2026-27, Asia Cup 2026, ICC T20 World Cup 2026, SA tour of India 2027
            and every bilateral series through March 2027.
          </p>
          <Link
            to="/schedule"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary"
          >
            All sports schedule →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 space-y-8">
        {sorted.map((s) => (
          <div key={s.slug} className="rounded-2xl border border-border bg-card">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 px-5 py-4">
              <div>
                <h2 className="text-lg font-bold">{s.name}</h2>
                <p className="text-xs text-muted-foreground">
                  {s.format} · {s.window}
                </p>
              </div>
              <Link
                to="/cricket-schedule/$slug"
                params={{ slug: s.slug }}
                className="text-xs font-semibold text-primary"
              >
                Series page →
              </Link>
            </div>
            {s.matches && s.matches.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead className="bg-background/60 text-xs uppercase tracking-widest text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3">Match</th>
                      <th className="px-4 py-3">Teams</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Venue</th>
                      <th className="px-4 py-3 text-right">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {s.matches.map((m, i) => (
                      <tr key={i} className="border-t border-border/60">
                        <td className="px-4 py-3 font-semibold">{m.label}</td>
                        <td className="px-4 py-3">
                          {m.home} <span className="text-muted-foreground">vs</span> {m.away}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">{m.date}</td>
                        <td className="px-4 py-3 text-muted-foreground">{m.venue}</td>
                        <td className="px-4 py-3 text-right">
                          <Link
                            to="/cricket-schedule/$slug/$match"
                            params={{ slug: s.slug, match: String(i + 1) }}
                            className="font-semibold text-primary"
                          >
                            View →
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="px-5 py-6 text-sm text-muted-foreground">
                Full fixture list will be published once the boards confirm the schedule.
              </p>
            )}
          </div>
        ))}
      </section>
      <SiteFooter />
    </div>
  );
}
