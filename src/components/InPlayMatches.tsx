import { useMemo, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { Radio, CalendarClock, Trophy, ChevronRight } from "lucide-react";
import { useWhatsAppHref } from "@/hooks/use-whatsapp";
import { liveMatchesQueryOptions, type ApiEvent } from "@/lib/live-matches.functions";

const SPORT_LINKS: Record<string, { to: string; label: string }> = {
  Cricket: { to: "/cricket-betting", label: "Cricket betting ID" },
  Tennis: { to: "/tennis-betting", label: "Tennis betting ID" },
  Football: { to: "/football-betting", label: "Football betting ID" },
};

type OddCell = { back: number | null; lay: number | null };

type Match = {
  id: string;
  sport: string;
  competition: string;
  team1: string;
  team2: string;
  name: string;
  startTime: number | null;
  isLive: boolean;
  odds: OddCell[];
};

function isInPlay(e: ApiEvent): boolean {
  const flagged = e.market?.inPlay || e.isInPlay || e.status === "InPlay";
  if (!flagged) return false;
  const iso = e.market?.event?.openDate || e.event?.openDate;
  const ts = iso ? Date.parse(iso) : NaN;
  if (!Number.isNaN(ts) && ts > Date.now()) return false;
  return true;
}

function normalizeSport(t: string | undefined): string {
  const s = (t || "").toLowerCase();
  if (s === "cricket") return "Cricket";
  if (s === "soccer" || s === "football") return "Football";
  if (s === "tennis") return "Tennis";
  if (s === "basketball") return "Basketball";
  return t ? t.charAt(0).toUpperCase() + t.slice(1) : "Other";
}

function splitTeams(name: string): { t1: string; t2: string } | null {
  const parts = name.trim().split(/\s+(?:vs?\.?|v\/s|@)\s+/i);
  if (parts.length === 2) return { t1: parts[0].trim(), t2: parts[1].trim() };
  return null;
}

function buildOdds(e: ApiEvent): OddCell[] {
  const back = e.market?.consolidatedRunner?.back ?? [];
  const lay = e.market?.consolidatedRunner?.lay ?? [];
  const count = Math.max(back.length, lay.length);
  return Array.from({ length: count }, (_, i) => ({
    back: back[i]?.price ?? null,
    lay: lay[i]?.price ?? null,
  }));
}

function toMatch(e: ApiEvent): Match {
  const iso = e.market?.event?.openDate || e.event?.openDate;
  const ts = iso ? Date.parse(iso) : NaN;
  const teams = splitTeams(e.event?.name || "");
  const sport = normalizeSport(e.eventType);
  return {
    id: e.event?.id ?? Math.random().toString(36).slice(2),
    sport,
    competition: e.market?.competition?.name || "",
    team1: teams?.t1 || "",
    team2: teams?.t2 || "",
    name: e.event?.name || "Match",
    startTime: Number.isNaN(ts) ? null : ts,
    isLive: isInPlay(e),
    odds: buildOdds(e),
  };
}

function formatTime(ts: number | null): string {
  if (!ts) return "TBD";
  return new Date(ts).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Kolkata",
  });
}

type FilterKey = "all" | "live" | "upcoming";

const ODD_LABELS = ["1", "X", "2"];

export function InPlayMatches() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const whatsapp = useWhatsAppHref();

  const { data } = useSuspenseQuery({
    ...liveMatchesQueryOptions,
    refetchInterval: 20_000,
  });
  const isLoading = false;

  const matches = useMemo<Match[]>(() => {
    const now = Date.now();
    const ALLOWED = new Set(["Cricket", "Tennis", "Football", "Basketball"]);
    return (data ?? [])
      .filter((e: ApiEvent) => {
        const comp = e.market?.competition?.name || "";
        if (/casino|lobby|sportsbook/i.test(comp)) return false;
        if (/casino|lobby|sportsbook|fawk/i.test(e.eventType || "")) return false;
        return true;
      })
      .map(toMatch)
      .filter((m: Match) => ALLOWED.has(m.sport))
      .filter((m: Match) => m.isLive || !m.startTime || m.startTime > now - 3 * 60 * 60 * 1000);
  }, [data]);

  const filtered = useMemo(() => {
    const now = Date.now();
    return matches.filter((m) => {
      if (filter === "live") return m.isLive;
      if (filter === "upcoming") return !m.isLive && (!m.startTime || m.startTime > now);
      return true;
    });
  }, [matches, filter]);

  const grouped = useMemo(() => {
    const map = new Map<string, Match[]>();
    for (const m of filtered) {
      const arr = map.get(m.sport) ?? [];
      arr.push(m);
      map.set(m.sport, arr);
    }
    for (const [, arr] of map) {
      arr.sort((a, b) => {
        if (a.isLive !== b.isLive) return a.isLive ? -1 : 1;
        return (a.startTime ?? Infinity) - (b.startTime ?? Infinity);
      });
    }
    const order = ["Cricket", "Tennis", "Football"];
    return Array.from(map.entries()).sort(([a], [b]) => {
      const ai = order.indexOf(a);
      const bi = order.indexOf(b);
      if (ai !== -1 || bi !== -1) return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
      return a.localeCompare(b);
    });
  }, [filtered]);

  const counts = useMemo(() => {
    const now = Date.now();
    let live = 0;
    let upcoming = 0;
    for (const m of matches) {
      if (m.isLive) live++;
      else if (!m.startTime || m.startTime > now) upcoming++;
    }
    return { all: matches.length, live, upcoming };
  }, [matches]);

  return (
    <section className="relative overflow-hidden bg-black">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "var(--gradient-hero)" }} />
        <div
          className="absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(closest-side, oklch(0.82 0.17 90 / 0.35), transparent)" }}
        />
        <div
          className="absolute -bottom-40 right-0 h-[380px] w-[600px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(closest-side, oklch(0.7 0.2 155 / 0.35), transparent)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 md:px-6 md:pt-14">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
            <Radio className="h-3 w-3" /> In-Play
          </span>
          <h2 className="mt-3 text-3xl font-black md:text-4xl lg:text-5xl">
            Live &{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>
              upcoming matches.
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
            Real-time fixtures across every sport. Get your Sprinters ID and bet on any of them.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:justify-center">
          {([
            { key: "all", label: "All", count: counts.all },
            { key: "live", label: "Live", count: counts.live },
            { key: "upcoming", label: "Upcoming", count: counts.upcoming },
          ] as { key: FilterKey; label: string; count: number }[]).map((t) => {
            const active = filter === t.key;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setFilter(t.key)}
                className={`inline-flex min-w-0 items-center justify-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition sm:px-4 sm:text-sm ${
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-white/15 bg-white/[0.03] text-white/80 hover:border-primary/60 hover:text-white"
                }`}
              >
                {t.key === "live" && (
                  <span className={`h-2 w-2 shrink-0 rounded-full ${active ? "bg-white" : "animate-pulse bg-red-500"}`} />
                )}
                <span className="truncate">{t.label}</span>
                <span className={`shrink-0 rounded-full px-1.5 text-[10px] ${active ? "bg-white/20" : "bg-white/10"}`}>{t.count}</span>
              </button>
            );
          })}
        </div>

        {matches.length > 0 && (
          <p className="sr-only">
            Today's live and upcoming matches on Sprinters:{" "}
            {matches
              .map((m) => (m.team1 && m.team2 ? `${m.team1} vs ${m.team2}` : m.name))
              .join(", ")}.
          </p>
        )}

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          {isLoading && (
            <div className="p-8 text-center text-sm text-muted-foreground">Loading matches…</div>
          )}
          {!isLoading && grouped.length === 0 && (
            <div className="p-8 text-center text-sm text-muted-foreground">
              No {filter === "all" ? "" : filter} matches at the moment.
            </div>
          )}

          {grouped.map(([sport, list], idx) => {
            const link = SPORT_LINKS[sport];
            return (
              <div key={sport} className={idx > 0 ? "border-t border-white/10" : ""}>
                <div className="flex flex-wrap items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
                  <Trophy className="h-4 w-4 shrink-0 text-primary" />
                  <p className="text-sm font-black uppercase tracking-wider text-white md:text-base">{sport}</p>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white/70">{list.length}</span>
                  {link ? (
                    <Link
                      to={link.to}
                      className="ml-auto inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-primary hover:underline"
                    >
                      {link.label} <ChevronRight className="h-3 w-3" />
                    </Link>
                  ) : null}
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px] border-collapse text-left text-xs md:text-sm">
                    <thead className="bg-white/[0.02] text-[10px] uppercase tracking-wider text-muted-foreground md:text-[11px]">
                      <tr>
                        <th className="px-4 py-2.5 font-bold">Match</th>
                        <th className="px-3 py-2.5 text-center font-bold">
                          <div className="flex items-center justify-center gap-3">
                            <span>1</span>
                            <span>X</span>
                            <span>2</span>
                            <span className="ml-2 text-emerald-400/80">Back</span>
                            <span className="text-sky-400/80">Lay</span>
                          </div>
                        </th>
                        <th className="px-4 py-2.5 font-bold" />
                      </tr>
                    </thead>
                    <tbody>
                      {list.map((m) => {
                        const sportLink = SPORT_LINKS[m.sport];
                        const matchLabel = m.team1 && m.team2 ? (
                          <>
                            <span>{m.team1}</span>
                            <span className="mx-1.5 text-muted-foreground">vs</span>
                            <span>{m.team2}</span>
                          </>
                        ) : (
                          m.name
                        );
                        return (
                        <tr key={m.id} className="border-t border-white/5 hover:bg-white/[0.04]">
                          <td className="px-4 py-3 align-middle">
                            <div className="flex flex-col gap-1">
                              <p className="font-semibold text-white">
                                {sportLink ? (
                                  <Link to={sportLink.to} className="hover:text-primary">{matchLabel}</Link>
                                ) : matchLabel}
                              </p>
                              <div className="flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
                                {m.isLive ? (
                                  <span className="inline-flex items-center gap-1 rounded-full border border-red-500/40 bg-red-500/15 px-2 py-0.5 font-bold uppercase tracking-wider text-red-400">
                                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" /> Live
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2 py-0.5 font-bold uppercase tracking-wider text-white/70">
                                    <CalendarClock className="h-3 w-3" /> Upcoming
                                  </span>
                                )}
                                <span className="truncate">{m.competition || "—"}</span>
                                <span className="text-white/40">•</span>
                                <time dateTime={m.startTime ? new Date(m.startTime).toISOString() : undefined}>
                                  {formatTime(m.startTime)}
                                </time>
                              </div>
                            </div>
                          </td>
                          <td className="px-3 py-3 align-middle">
                            <div className="flex items-center justify-center gap-2">
                              {ODD_LABELS.map((label, i) => {
                                const o = m.odds[i];
                                if (!o || (o.back == null && o.lay == null)) {
                                  return (
                                    <div key={label} className="flex flex-col items-center gap-0.5">
                                      <span className="text-[9px] font-bold uppercase text-white/40">{label}</span>
                                      <span className="rounded bg-white/5 px-2 py-1 text-[11px] font-bold text-white/40">—</span>
                                    </div>
                                  );
                                }
                                return (
                                  <div key={label} className="flex flex-col items-center gap-0.5">
                                    <span className="text-[9px] font-bold uppercase text-white/50">{label}</span>
                                    <div className="flex gap-1">
                                      <span className="min-w-[36px] rounded bg-emerald-500/15 px-1.5 py-1 text-center text-[11px] font-bold text-emerald-300">
                                        {o.back ?? "—"}
                                      </span>
                                      <span className="min-w-[36px] rounded bg-sky-500/15 px-1.5 py-1 text-center text-[11px] font-bold text-sky-300">
                                        {o.lay ?? "—"}
                                      </span>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </td>
                          <td className="px-4 py-3 text-right align-middle">
                            <a
                              href={whatsapp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 whitespace-nowrap font-bold text-primary hover:underline"
                            >
                              {m.team1 && m.team2
                                ? `Bet on ${m.team1} vs ${m.team2}`
                                : `Bet on ${m.name}`}{" "}
                              <ChevronRight className="h-3.5 w-3.5" />
                            </a>
                          </td>


                        </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default InPlayMatches;
