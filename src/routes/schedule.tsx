import { createFileRoute } from "@tanstack/react-router";
import { AiOverview } from "@/components/AiOverview";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RelatedContent } from "@/components/RelatedContent";
import { cricketSeries, footballMatches, tennisEvents } from "@/data/schedule";
import { cricketSeriesSlug, footballMatchSlug, tennisEventSlug, tennisRounds } from "@/lib/match-slug";
import { Calendar, MapPin, Trophy, Users, ChevronRight } from "lucide-react";


export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Cricket Schedule 2026 — Asia Cup, IND vs ZIM, FIFA WC 2026 & Tennis Calendar | Lotus365" },
      {
        name: "description",
        content:
          "Full 2026–27 match schedule: Asia Cup 2026 schedule & points table, IND vs ZIM series, all international cricket till March 2027, FIFA World Cup 2026 fixtures and the complete ATP/WTA tennis calendar with every Grand Slam. Live dates, venues and today's match.",
      },
      { property: "og:title", content: "Cricket Schedule 2026, Asia Cup, IND vs ZIM & FIFA WC 2026 | Lotus365" },
      {
        property: "og:description",
        content:
          "Asia Cup 2026 schedule, IND vs ZIM fixtures, FIFA World Cup 2026 matches and every ATP/WTA Grand Slam — dates, venues, standings and live match info.",
      },
      { property: "og:url", content: "https://lotus365id.com/schedule" },
    ],
    links: [{ rel: "canonical", href: "https://lotus365id.com/schedule" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://lotus365id.com/" },
            { "@type": "ListItem", position: 2, name: "Schedule", item: "https://lotus365id.com/schedule" },
          ],
        }),
      },
    ],
  }),

  component: SchedulePage,
});

type Tab = "cricket" | "football" | "tennis";

function SchedulePage() {
  const [tab, setTab] = useState<Tab>("cricket");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-primary/10">
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(1200px 500px at 20% -10%, oklch(0.82 0.15 88 / 0.14), transparent 60%), radial-gradient(900px 400px at 90% 10%, oklch(0.55 0.2 25 / 0.10), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8 pt-28 pb-14">
          <div className="text-[11px] tracking-[0.28em] uppercase text-primary/80 font-semibold">
            2026 – 27 Season · Asia Cup · FIFA WC · Grand Slams
          </div>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Match Schedule 2026 <span className="text-primary italic">— Cricket, Football & Tennis</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-foreground/90 leading-relaxed">
            The complete 2026–27 sports calendar in one place — <strong className="text-foreground/90">Asia Cup 2026 schedule &amp; points table</strong>,
            <strong className="text-foreground/90"> IND vs ZIM</strong> and every international cricket series through 11 March 2027, the full
            <strong className="text-foreground/90"> FIFA World Cup 2026</strong> in Canada, Mexico &amp; USA, and every ATP/WTA event with all four Grand Slams.
            Live dates, venues, standings and today's match — updated for the 2026 season.
          </p>


          {/* Quick stats */}
          <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl">
            <StatChip icon={<Trophy className="h-4 w-4" />} label="Cricket series" value={String(cricketSeries.length)} />
            <StatChip icon={<Users className="h-4 w-4" />} label="World Cup fixtures" value={String(footballMatches.length)} />
            <StatChip icon={<Calendar className="h-4 w-4" />} label="Tennis events" value={String(tennisEvents.length)} />
          </div>
        </div>
      </section>

      <AiOverview
        summary="The Lotus365 sports schedule lists every cricket series, football fixture and tennis event Indian punters care about — dates, kickoffs in IST, venues and best-odds shortcuts."
        points={[
          "IPL, T20 World Cup, FIFA World Cup 2026 and ATP/WTA tours",
          "Kickoff times shown in IST with venue and stage",
          "Direct links to per-match previews and odds",
          "Updated as soon as fixtures are confirmed",
        ]}
        sources={[{ label: "Match Index", to: "/matches" }, { label: "Cricket", to: "/lotus365-cricket" }, { label: "Football", to: "/football-betting" }]}
      />

      {/* Tabs */}
      <div className="sticky top-16 sm:top-20 z-30 bg-background/90 backdrop-blur-xl border-b border-primary/10">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 no-scrollbar">
            <TabBtn active={tab === "cricket"} onClick={() => setTab("cricket")} label="Cricket" count={cricketSeries.length} />
            <TabBtn active={tab === "football"} onClick={() => setTab("football")} label="Football · FIFA WC 2026" count={footballMatches.length} />
            <TabBtn active={tab === "tennis"} onClick={() => setTab("tennis")} label="Tennis · Men & Women" count={tennisEvents.length} />
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="mx-auto max-w-[1400px] px-4 sm:px-8 py-14">
        {tab === "cricket" && <CricketSection />}
        {tab === "football" && <FootballSection />}
        {tab === "tennis" && <TennisSection />}
      </main>

      <RelatedContent currentPath="/schedule" />
      <SiteFooter />
    </div>
  );
}

function StatChip({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-primary/15 bg-primary/[0.03] px-4 py-3">
      <div className="flex items-center gap-2 text-primary/80">{icon}<span className="text-[10px] uppercase tracking-[0.2em] font-semibold">{label}</span></div>
      <div className="mt-1 text-2xl font-bold text-primary">{value}</div>
    </div>
  );
}

function TabBtn({ active, onClick, label, count }: { active: boolean; onClick: () => void; label: string; count: number }) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
        active
          ? "bg-primary text-primary-foreground border-primary shadow-[0_4px_20px_oklch(0.82_0.15_88/0.35)]"
          : "bg-transparent border-primary/20 text-foreground/95 hover:border-primary/50 hover:text-primary"
      }`}
    >
      {label} <span className={`ml-1.5 text-[11px] ${active ? "opacity-80" : "opacity-60"}`}>({count})</span>
    </button>
  );
}

/* -------------------- Cricket -------------------- */
function CricketSection() {
  return (
    <div>
      <SectionHeader
        eyebrow="Upcoming International Cricket"
        title="Every series through March 2027"
        note="Source: Cricbuzz upcoming international schedule."
      />
      <div className="mt-10 space-y-6">
        {cricketSeries.map((s) => (
          <article
            key={s.name}
            className="rounded-2xl border border-primary/15 bg-card/40 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-colors"
          >
            <header className="p-5 sm:p-6 border-b border-primary/10 bg-gradient-to-r from-primary/[0.08] via-primary/[0.03] to-transparent">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="min-w-0">
                  <h3 className="font-serif text-xl sm:text-2xl leading-tight">{s.name}</h3>
                  <p className="mt-1.5 text-xs text-foreground/95">
                    <span className="text-primary/90 font-medium">{s.format}</span> · {s.window}
                  </p>
                </div>
                <span className="shrink-0 text-[10px] uppercase tracking-[0.2em] text-primary/80 font-semibold px-2.5 py-1 rounded-full border border-primary/25">
                  {s.matches.length} matches
                </span>
              </div>
            </header>

            <div className="hidden md:grid grid-cols-[120px_1fr_180px_1fr_120px] gap-4 px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-primary/80 font-semibold border-b border-primary/10 bg-primary/[0.03]">
              <div>Match</div>
              <div>Teams</div>
              <div>Date</div>
              <div>Venue</div>
              <div className="text-right">Details</div>
            </div>

            <ul className="divide-y divide-primary/10">
              {s.matches.map((m, i) => (
                <li
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-[120px_1fr_180px_1fr_120px] gap-2 md:gap-4 px-5 sm:px-6 py-4 text-sm items-center hover:bg-primary/[0.04] transition-colors"
                >
                  <div className="text-[11px] font-mono text-primary/80 uppercase tracking-wider">{m.match}</div>
                  <div className="font-medium">{m.teams}</div>
                  <div className="text-xs text-foreground/90 inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-primary/70" />{m.date}
                  </div>
                  <div className="text-xs text-foreground/90 inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-primary/70" />{m.venue}
                  </div>
                  <div className="md:text-right">
                    <a
                      href={`/cricket-schedule/${cricketSeriesSlug(s)}/${i + 1}`}
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] bg-primary text-primary-foreground hover:brightness-110 transition"
                    >
                      View <ChevronRight className="h-3 w-3" />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

    </div>
  );
}

/* -------------------- Football -------------------- */
function FootballSection() {
  const groups = footballMatches.reduce<Record<string, typeof footballMatches>>((acc, m) => {
    const bucket = /Final|Semi-final|Bronze/.test(m.stage)
      ? "Knockout · Semi-finals & Final"
      : /Quarter-final/.test(m.stage)
      ? "Knockout · Quarter-finals"
      : /R16/.test(m.stage)
      ? "Round of 16"
      : /R32/.test(m.stage)
      ? "Round of 32"
      : "Group Stage";
    (acc[bucket] ||= []).push(m);
    return acc;
  }, {});

  const order = ["Group Stage", "Round of 32", "Round of 16", "Knockout · Quarter-finals", "Knockout · Semi-finals & Final"];

  return (
    <div>
      <SectionHeader
        eyebrow="FIFA World Cup 2026"
        title="Canada · Mexico · United States"
        note="48 teams · 104 matches · 11 June – 19 July 2026 across 16 host cities."
      />
      <div className="mt-10 space-y-10">
        {order
          .filter((k) => groups[k])
          .map((bucket) => (
            <section
              key={bucket}
              className="rounded-2xl border border-primary/15 bg-card/40 backdrop-blur-sm overflow-hidden"
            >
              <header className="p-5 sm:p-6 border-b border-primary/10 bg-gradient-to-r from-primary/[0.08] via-primary/[0.03] to-transparent flex items-center justify-between gap-4 flex-wrap">
                <h3 className="font-serif text-xl sm:text-2xl leading-tight">{bucket}</h3>
                <span className="shrink-0 text-[10px] uppercase tracking-[0.2em] text-primary/80 font-semibold px-2.5 py-1 rounded-full border border-primary/25">
                  {groups[bucket].length} fixtures
                </span>
              </header>

              <div className="hidden md:grid grid-cols-[140px_1fr_200px_1fr_120px] gap-4 px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-primary/80 font-semibold border-b border-primary/10 bg-primary/[0.03]">
                <div>Stage</div>
                <div>Match</div>
                <div>Date · Kickoff</div>
                <div>Venue</div>
                <div className="text-right">Details</div>
              </div>

              <ul className="divide-y divide-primary/10">
                {groups[bucket].map((m, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-1 md:grid-cols-[140px_1fr_200px_1fr_120px] gap-2 md:gap-4 px-5 sm:px-6 py-4 text-sm items-center hover:bg-primary/[0.04] transition-colors"
                  >
                    <div className="text-[11px] font-mono text-primary/80 uppercase tracking-wider">
                      {m.stage.replace(/·.*$/, "").trim()}
                    </div>
                    <div className="font-medium font-serif text-base">{m.match}</div>
                    <div className="text-xs text-foreground/90 inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-primary/70" />{m.date} · {m.kickoff}
                    </div>
                    <div className="text-xs text-foreground/90 inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-primary/70" />{m.venue}
                    </div>
                    <div className="md:text-right">
                      <a
                        href={`/football-schedule/${footballMatchSlug(m)}`}
                        className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] bg-primary text-primary-foreground hover:brightness-110 transition"
                      >
                        View <ChevronRight className="h-3 w-3" />
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}

      </div>
    </div>
  );
}

/* -------------------- Tennis -------------------- */
function TennisSection() {
  const [filter, setFilter] = useState<"all" | "grandslam" | "men" | "women">("all");

  const filtered = tennisEvents.filter((e) => {
    if (filter === "grandslam") return e.category === "Grand Slam";
    if (filter === "men") return e.tour === "ATP" || e.tour === "Combined";
    if (filter === "women") return e.tour === "WTA" || e.tour === "Combined";
    return true;
  });

  return (
    <div>
      <SectionHeader
        eyebrow="Tennis 2026 · Men & Women"
        title="ATP, WTA and every Grand Slam"
        note="Sourced from ESPN's 2026 tennis calendar. Combined events include both men's and women's draws."
      />

      <div className="mt-6 flex flex-wrap gap-2">
        {(
          [
            ["all", "All events"],
            ["grandslam", "Grand Slams"],
            ["men", "Men (ATP)"],
            ["women", "Women (WTA)"],
          ] as [typeof filter, string][]
        ).map(([k, l]) => (
          <button
            key={k}
            onClick={() => setFilter(k)}
            className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
              filter === k
                ? "border-primary bg-primary/10 text-primary"
                : "border-primary/20 text-foreground/90 hover:border-primary/40"
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-primary/15 bg-card/30">
        <div className="hidden sm:grid grid-cols-[160px_1fr_110px_110px_110px] gap-3 px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-primary/80 font-semibold border-b border-primary/15 bg-primary/[0.03]">
          <div>Dates</div>
          <div>Tournament</div>
          <div>Tour</div>
          <div>Surface</div>
          <div className="text-right">Details</div>
        </div>
        <ul className="divide-y divide-primary/10">
          {filtered.map((e, i) => (
            <li
              key={i}
              className="grid grid-cols-1 sm:grid-cols-[160px_1fr_110px_110px_110px] gap-2 sm:gap-3 px-4 sm:px-6 py-4 text-sm items-center hover:bg-primary/[0.04] transition-colors"
            >
              <div className="text-primary/90 font-medium text-xs sm:text-sm">{e.dates}</div>
              <div className="min-w-0">
                <div className="font-medium leading-snug">
                  {e.category === "Grand Slam" && (
                    <span className="mr-2 inline-block align-middle text-[9px] uppercase tracking-[0.2em] text-primary font-bold px-1.5 py-0.5 rounded border border-primary/40">
                      Slam
                    </span>
                  )}
                  {e.name}
                </div>
                <div className="mt-0.5 text-xs text-foreground/95 flex flex-wrap gap-x-3">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{e.location}</span>
                  <span className="sm:hidden">{e.tour} · {e.category} · {e.surface}</span>
                  {e.prevWinner && <span className="inline-flex items-center gap-1"><Trophy className="h-3 w-3" />Prev: {e.prevWinner}</span>}
                </div>
              </div>
              <div className="hidden sm:block text-xs text-foreground/95">
                <div>{e.tour}</div>
                <div className="text-foreground/85">{e.category}</div>
              </div>
              <div className="hidden sm:block text-xs text-foreground/95">{e.surface}</div>
              <div className="sm:text-right">
                <a
                  href={`/tennis-schedule/${tennisEventSlug(e)}/${tennisRounds.find(r => r.short === "Final")?.id ?? "7"}`}
                  className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] bg-primary text-primary-foreground hover:brightness-110 transition"
                >
                  View <ChevronRight className="h-3 w-3" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

function SectionHeader({ eyebrow, title, note }: { eyebrow: string; title: string; note: string }) {
  return (
    <div className="flex flex-col gap-2 max-w-3xl">
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-primary font-semibold">
        <ChevronRight className="h-3 w-3" /> {eyebrow}
      </div>
      <h2 className="font-serif text-3xl sm:text-4xl leading-tight tracking-tight">{title}</h2>
      <p className="text-sm text-foreground/95">{note}</p>
    </div>
  );
}
