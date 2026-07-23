import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { wc2026Matches } from "@/data/wc2026-matches";
import { cricketSeries2026 } from "@/data/cricket-series-2026";
import { tennis2026 } from "@/data/tennis-2026";
import { scheduleAiPanelQueryOptions } from "@/lib/schedule-predictions.functions";

type TabKey = "all" | "cricket" | "football" | "tennis";

export const Route = createFileRoute("/schedule/")({
  head: () => ({
    meta: [
      { title: "2026-27 Match Schedule — Cricket, Football & Tennis Fixtures" },
      {
        name: "description",
        content:
          "Complete 2026-27 sports schedule — cricket series, FIFA World Cup 2026 fixtures and ATP/WTA/Grand Slam tennis events. Dates, venues and betting IDs on Sprinters.",
      },
      { property: "og:title", content: "2026-27 Match Schedule — Cricket, Football, Tennis" },
      {
        property: "og:description",
        content:
          "All upcoming 2026-27 fixtures — cricket, football and tennis — with venues and Sprinters betting IDs.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/schedule" },
    ],
    links: [{ rel: "canonical", href: "/schedule" }],
  }),
  component: ScheduleIndex,
  loader: ({ context }) => context.queryClient.ensureQueryData(scheduleAiPanelQueryOptions),
});

function ScheduleIndex() {
  const [tab, setTab] = useState<TabKey>("all");
  const { data: ai } = useSuspenseQuery(scheduleAiPanelQueryOptions);

  const tabs: { key: TabKey; label: string }[] = [
    { key: "all", label: "All" },
    { key: "cricket", label: "Cricket" },
    { key: "football", label: "Football" },
    { key: "tennis", label: "Tennis" },
  ];

  const show = (k: TabKey) => tab === "all" || tab === k;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section
        className="relative overflow-hidden border-b border-border/50 bg-match-hero"
      >
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-primary backdrop-blur">
            Sprinters Schedule
          </span>
          <h1 className="mt-6 text-4xl font-black uppercase leading-tight md:text-5xl">
            2026–27 Match Schedule
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Every upcoming 2026-27 fixture — cricket series, FIFA World Cup 2026 and the
            biggest tennis events — with venues and betting IDs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-10">
        <div className="rounded-3xl border border-primary/30 bg-card p-6 md:p-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-primary">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
            AI Overview & Predictions
          </div>
          <p className="mt-3 text-base leading-relaxed text-foreground md:text-lg">
            {ai.overview}
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {ai.predictions.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-background/60 p-4"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
                  {p.sport} · {p.confidence}
                </p>
                <p className="mt-2 text-sm font-bold">{p.fixture}</p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  Pick: <span className="text-primary">{p.pick}</span>
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Predicted score: <span className="font-semibold text-foreground">{p.score}</span>
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {p.reasoning}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] uppercase tracking-widest text-muted-foreground">
            AI-generated · For entertainment only · Bet responsibly
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">

        <div className="flex flex-wrap gap-2 border-b border-border/60 pb-3">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={
                "rounded-full px-5 py-2 text-sm font-semibold transition " +
                (tab === t.key
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground")
              }
            >
              {t.label}
            </button>
          ))}
        </div>

        {show("cricket") && (
          <div className="mt-10 space-y-8">
            <div>
              <h2 className="text-2xl font-bold">Cricket</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Every tournament with its full match list. Click a match to open its details.{" "}
                <Link to="/cricket-schedule" className="font-semibold text-primary">
                  Open cricket-only hub →
                </Link>
              </p>
            </div>

            {[...cricketSeries2026]
              .sort((a, b) => a.startIso.localeCompare(b.startIso))
              .map((s) => (
                <div key={s.slug} className="rounded-2xl border border-border bg-card">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 px-5 py-4">
                    <div>
                      <h3 className="text-lg font-bold">{s.name}</h3>
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
          </div>
        )}

        {show("football") && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold">Football — FIFA World Cup 2026</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Remaining fixtures: quarter-finals, semi-finals, bronze final and the final.
            </p>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-border bg-card">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="bg-background/60 text-xs uppercase tracking-widest text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3">Match</th>
                    <th className="px-4 py-3">Stage</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Kick-off</th>
                    <th className="px-4 py-3">Venue</th>
                    <th className="px-4 py-3 text-right">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {wc2026Matches.map((m) => (
                    <tr key={m.slug} className="border-t border-border/60">
                      <td className="px-4 py-3 font-semibold">
                        {m.home} <span className="text-muted-foreground">vs</span>{" "}
                        {m.away}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{m.stage}</td>
                      <td className="px-4 py-3 text-muted-foreground">{m.dateLabel}</td>
                      <td className="px-4 py-3 text-muted-foreground">{m.kickoffEt}</td>
                      <td className="px-4 py-3 text-muted-foreground">{m.venue}</td>
                      <td className="px-4 py-3 text-right">
                        <Link
                          to="/schedule/$slug"
                          params={{ slug: m.slug }}
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
          </div>
        )}

        {show("tennis") && (
          <div className="mt-12 space-y-8">
            <div>
              <h2 className="text-2xl font-bold">Tennis — Men &amp; Women</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                ATP, WTA, Grand Slams and team events — round-by-round schedule for each tournament.
              </p>
            </div>

            {[...tennis2026]
              .sort((a, b) => a.startIso.localeCompare(b.startIso))
              .map((t) => (
                <div key={t.slug} className="rounded-2xl border border-border bg-card">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 px-5 py-4">
                    <div>
                      <h3 className="text-lg font-bold">{t.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {t.tour} · {t.category} · {t.surface} · {t.window} · {t.venue}, {t.city}
                      </p>
                    </div>
                    <Link
                      to="/tennis-schedule/$slug"
                      params={{ slug: t.slug }}
                      className="text-xs font-semibold text-primary"
                    >
                      Event page →
                    </Link>
                  </div>
                  {t.rounds && t.rounds.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[560px] text-left text-sm">
                        <thead className="bg-background/60 text-xs uppercase tracking-widest text-muted-foreground">
                          <tr>
                            <th className="px-4 py-3">Round</th>
                            <th className="px-4 py-3">Date</th>
                            <th className="px-4 py-3">Details</th>
                            <th className="px-4 py-3 text-right">Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          {t.rounds.map((r, i) => (
                            <tr key={i} className="border-t border-border/60">
                              <td className="px-4 py-3 font-semibold">{r.label}</td>
                              <td className="px-4 py-3 text-muted-foreground">{r.date}</td>
                              <td className="px-4 py-3 text-muted-foreground">{r.detail}</td>
                              <td className="px-4 py-3 text-right">
                                <Link
                                  to="/tennis-schedule/$slug/$round"
                                  params={{ slug: t.slug, round: String(i + 1) }}
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
                      Round schedule to be announced.
                    </p>
                  )}
                </div>
              ))}
          </div>
        )}
      </section>
      <SiteFooter />
    </div>
  );
}
