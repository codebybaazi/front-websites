import { useEffect, useMemo, useState } from "react";
import { whatsappUrl } from "@/data/site";
import { Radio, Calendar, Sparkles, ChevronRight } from "lucide-react";

type Runner = { runner: { id: number; name: string }; price: number; size: number };
type ApiEvent = {
  eventTypeId: string;
  eventType: string;
  isInPlay: boolean;
  event: { id: string; name: string; openDate: string };
  market?: {
    name?: string;
    inPlay?: boolean;
    competition?: { id: string; name: string };
    consolidatedRunner?: { back?: Runner[]; lay?: Runner[] };
  };
};

const SPORT_ORDER = ["Cricket", "Tennis", "Football"];
const isExcluded = (s: string) => {
  const k = s.toLowerCase().replace(/[\s_-]/g, "");
  return (
    k === "lobby" ||
    k === "fawk" ||
    k.includes("sportsbook") ||
    k.includes("casino") ||
    k.includes("livecasino")
  );
};
const SPORT_EMOJI: Record<string, string> = {
  Cricket: "🏏",
  Tennis: "🎾",
  Football: "⚽",
};

type Filter = "all" | "live" | "upcoming";

function formatWhen(iso: string, live: boolean) {
  if (live) return "Live now";
  const d = new Date(iso);
  const diffMin = Math.round((d.getTime() - Date.now()) / 60000);
  if (diffMin > 0 && diffMin < 60) return `in ${diffMin}m`;
  if (diffMin >= 60 && diffMin < 60 * 24) return `in ${Math.round(diffMin / 60)}h`;
  return d.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function isLiveEvent(e: ApiEvent): boolean {
  return (
    !!(e.isInPlay || e.market?.inPlay) &&
    new Date(e.event.openDate).getTime() <= Date.now()
  );
}

function splitTeams(name: string): [string, string | null] {
  const m = name.split(/\s+v(?:s\.?)?\s+/i);
  if (m.length >= 2) return [m[0].trim(), m.slice(1).join(" vs ").trim()];
  return [name, null];
}

const ODDS_LABELS_2 = ["1", "2"];
const ODDS_LABELS_3 = ["1", "X", "2"];

function MatchRow({ ev }: { ev: ApiEvent }) {
  const live = isLiveEvent(ev);
  const backs = (ev.market?.consolidatedRunner?.back ?? []).filter(
    (r): r is Runner => !!r && !!r.runner,
  );
  const lays = (ev.market?.consolidatedRunner?.lay ?? []).filter(
    (r): r is Runner => !!r && !!r.runner,
  );
  const labels = backs.length <= 2 ? ODDS_LABELS_2 : ODDS_LABELS_3;
  const odds = backs.slice(0, 3).map((b, i) => ({
    label: labels[i] ?? String(i + 1),
    back: b.price,
    lay: lays.find((l) => l.runner.id === b.runner.id)?.price,
  }));

  const [t1, t2] = splitTeams(ev.event.name);

  return (
    <tr className="border-t border-primary/10 hover:bg-black/30 transition-colors">
      <td className="px-3 sm:px-4 py-3 align-top min-w-[200px]">
        <div className="flex flex-col gap-1.5">
          {live ? (
            <span className="inline-flex w-fit items-center gap-1 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-red-500/90 text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              Live
            </span>
          ) : (
            <span className="inline-flex w-fit items-center gap-1 text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full bg-black/40 text-primary/90 border border-primary/30">
              <Calendar className="h-3 w-3" />
              Upcoming
            </span>
          )}
          <div className="font-semibold text-sm text-foreground leading-snug">
            {t2 ? (
              <>
                <span>{t1}</span>
                <span className="text-foreground/85 mx-1.5 text-xs">vs</span>
                <span>{t2}</span>
              </>
            ) : (
              t1
            )}
          </div>
          {ev.market?.competition?.name && (
            <div className="text-[10px] text-foreground/95 uppercase tracking-wider">
              {ev.market.competition.name}
            </div>
          )}
        </div>
      </td>
      <td className="px-3 sm:px-4 py-3 align-top text-[11px] text-foreground/90 whitespace-nowrap">
        {formatWhen(ev.event.openDate, live)}
      </td>
      <td className="px-3 sm:px-4 py-3 align-top">
        <div className="flex items-center gap-2 sm:gap-3 justify-start">
          {["1", "X", "2"].map((lbl) => {
            const o = odds.find((x) => x.label === lbl);
            return (
              <div key={lbl} className="flex items-center gap-1 shrink-0">
                <span
                  title="Back"
                  className="min-w-[44px] text-center text-xs font-bold rounded-md px-1.5 py-1 bg-sky-400/25 text-sky-100"
                >
                  {o?.back ?? "—"}
                </span>
                <span
                  title="Lay"
                  className="min-w-[44px] text-center text-xs font-bold rounded-md px-1.5 py-1 bg-pink-400/25 text-pink-100"
                >
                  {o?.lay ?? "—"}
                </span>
              </div>
            );
          })}
        </div>
      </td>


      <td className="px-3 sm:px-4 py-3 align-top text-right">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-whatsapp inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full text-emerald-deep"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.9 0.11 92), oklch(0.78 0.16 82))",
          }}
        >
          Bet <ChevronRight className="h-3 w-3" />
        </a>
      </td>
    </tr>
  );
}

export function InPlayMatches() {
  const [data, setData] = useState<ApiEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch(
          "https://b2b.max247.co/api/public/exchange/odds/inPlayAndPopularEvents",
        );
        const json = await res.json();
        if (cancelled) return;
        const rows: ApiEvent[] = [
          ...(json?.result?.inPlayEvents ?? []),
          ...(json?.result?.popularEvents ?? []),
        ];
        const seen = new Set<string>();
        const clean = rows.filter((r) => {
          if (!r.eventType || isExcluded(r.eventType)) return false;
          if (!r.event?.id || seen.has(r.event.id)) return false;
          // Only real head-to-head fixtures (Team 1 vs Team 2)
          if (!/\s+v(?:s\.?)?\s+/i.test(r.event?.name ?? "")) return false;
          seen.add(r.event.id);
          return true;
        });
        setData(clean);
      } catch (e) {
        console.error("inPlay fetch failed", e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    const t = setInterval(load, 45000);
    return () => {
      cancelled = true;
      clearInterval(t);
    };
  }, []);

  const grouped = useMemo(() => {
    const filtered = data.filter((e) => {
      const live = isLiveEvent(e);
      if (filter === "live") return live;
      if (filter === "upcoming") return !live;
      return true;
    });
    filtered.sort((a, b) => {
      const la = isLiveEvent(a) ? 0 : 1;
      const lb = isLiveEvent(b) ? 0 : 1;
      if (la !== lb) return la - lb;
      return (
        new Date(a.event.openDate).getTime() -
        new Date(b.event.openDate).getTime()
      );
    });
    const map = new Map<string, ApiEvent[]>();
    for (const ev of filtered) {
      const s = ev.eventType;
      if (!map.has(s)) map.set(s, []);
      map.get(s)!.push(ev);
    }
    const ordered: [string, ApiEvent[]][] = [];
    for (const s of SPORT_ORDER) {
      if (map.has(s)) {
        ordered.push([s, map.get(s)!]);
        map.delete(s);
      }
    }
    for (const [s, list] of map) ordered.push([s, list]);
    return ordered;
  }, [data, filter]);

  const filters: { id: Filter; label: string; icon: React.ReactNode }[] = [
    { id: "all", label: "All", icon: <Sparkles className="h-3.5 w-3.5" /> },
    { id: "live", label: "Live", icon: <Radio className="h-3.5 w-3.5" /> },
    { id: "upcoming", label: "Upcoming", icon: <Calendar className="h-3.5 w-3.5" /> },
  ];

  return (
    <section aria-label="In-play matches" className="relative py-20 overflow-hidden">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgb(8 44 37) 0%, rgb(13 66 55) 45%, rgb(17 84 70) 100%)",
        }}
      />
      {/* Ambient gold glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(700px 320px at 12% 8%, oklch(0.82 0.15 88 / 0.22), transparent 60%), radial-gradient(800px 380px at 88% 92%, oklch(0.82 0.15 88 / 0.18), transparent 65%), radial-gradient(500px 260px at 50% 50%, oklch(0.9 0.11 92 / 0.06), transparent 70%)",
        }}
      />
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.82 0.15 88) 1px, transparent 1px), linear-gradient(90deg, oklch(0.82 0.15 88) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      {/* Floating orbs */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      {/* Top / bottom gold hairlines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />


      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 mb-8 sm:flex sm:flex-wrap sm:items-end sm:justify-between">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-primary mb-3">
              <Radio className="h-3.5 w-3.5" />
              In-Play &amp; Upcoming
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight">
              Live odds across{" "}
              <span className="gold-text">cricket, tennis &amp; football</span>
            </h2>
            <div className="mt-3 h-[2px] w-24 bg-gradient-to-r from-primary via-primary/60 to-transparent rounded-full" />
          </div>

          <div className="flex w-full sm:w-auto items-center gap-1 p-1 rounded-full bg-black/30 border border-primary/25 overflow-x-auto">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`inline-flex flex-1 sm:flex-none shrink-0 items-center justify-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                  filter === f.id
                    ? "bg-primary text-[rgb(13_66_55)] shadow"
                    : "text-foreground/90 hover:text-primary"
                }`}
              >
                {f.icon}
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div
            className="rounded-2xl border border-primary/20 p-4 space-y-2"
            style={{ background: "rgb(9 50 41 / 0.55)" }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-14 rounded-xl bg-black/30 border border-primary/15 animate-pulse"
              />
            ))}
          </div>
        ) : grouped.length === 0 ? (
          <div
            className="rounded-2xl border border-primary/20 text-center py-16 text-foreground/95 text-sm"
            style={{ background: "rgb(9 50 41 / 0.55)" }}
          >
            No {filter === "all" ? "" : filter} matches available right now.
          </div>
        ) : (
          <div
            className="relative rounded-2xl overflow-hidden divide-y divide-primary/15 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]"
            style={{
              background:
                "linear-gradient(180deg, rgb(9 50 41 / 0.85) 0%, rgb(11 60 50 / 0.75) 100%)",
              border: "1px solid oklch(0.82 0.15 88 / 0.28)",
              boxShadow:
                "0 30px 80px -30px rgba(0,0,0,0.7), inset 0 1px 0 oklch(0.82 0.15 88 / 0.15)",
            }}
          >

            {grouped.map(([sport, list]) => (
              <div key={sport}>
                <div className="flex items-center gap-3 px-4 sm:px-5 py-3 bg-black/25">
                  <span className="text-xl">{SPORT_EMOJI[sport] ?? "🎯"}</span>
                  <h3 className="font-display text-base sm:text-lg">{sport}</h3>
                  <span className="text-[10px] text-foreground/95 uppercase tracking-widest">
                    {list.length} match{list.length === 1 ? "" : "es"}
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="text-[10px] uppercase tracking-widest text-primary/80 bg-black/20">
                        <th className="px-3 sm:px-4 py-2 font-semibold">Match</th>
                        <th className="px-3 sm:px-4 py-2 font-semibold">Start</th>
                        <th className="px-3 sm:px-4 py-2 font-semibold">
                          <div className="flex items-center gap-2 sm:gap-3">
                            {["1", "X", "2"].map((lbl) => (
                              <div
                                key={lbl}
                                className="flex items-center justify-center gap-1 min-w-[92px]"
                              >
                                <span className="text-primary text-xs font-bold w-full text-center">
                                  {lbl}
                                </span>
                              </div>
                            ))}
                            <span className="normal-case tracking-normal text-foreground/85 ml-2 text-[10px]">
                              Back / Lay
                            </span>
                          </div>
                        </th>
                        <th className="px-3 sm:px-4 py-2 font-semibold text-right">
                          Action
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {list.map((ev) => (
                        <MatchRow key={ev.event.id} ev={ev} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
