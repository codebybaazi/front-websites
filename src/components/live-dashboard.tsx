import { useEffect, useMemo, useState } from "react";
import { Flame, ChevronRight, Radio, CalendarClock, Trophy, Zap, TrendingUp } from "lucide-react";
import { WA } from "@/components/site-layout";
import { Link } from "@tanstack/react-router";
import { matches as curatedMatches } from "@/data/matches";

type LiveRunner = { name: string; back?: number; lay?: number };
type LiveEvent = {
  id: string;
  sport: string;
  name: string;
  competition: string;
  openDate: number;
  isLive: boolean;
  runners: LiveRunner[];
  oddsSlots: [LiveRunner | undefined, LiveRunner | undefined, LiveRunner | undefined];
};

const ALLOWED = new Set([
  "Cricket",
  "Tennis",
  "Soccer",
  "Football",
  "Basketball",
  "Kabaddi",
  "Horse Racing",
  "Greyhound Racing",
]);

function normalize(raw: any): LiveEvent[] {
  const merged = [
    ...(raw?.result?.inPlayEvents ?? []),
    ...(raw?.result?.popularEvents ?? []),
  ];
  const map = new Map<string, LiveEvent>();
  for (const e of merged) {
    if (!ALLOWED.has(e?.eventType) || !e?.event?.name) continue;
    const nameStr = String(e.event.name);
    const compStr = String(e?.market?.competition?.name ?? "");
    const marketName = String(e?.market?.name ?? "");
    const blocked = /lobby|casino/i;
    if (blocked.test(nameStr) || blocked.test(compStr) || blocked.test(marketName)) continue;
    const rawBack = e?.market?.consolidatedRunner?.back ?? [];
    const rawLay = e?.market?.consolidatedRunner?.lay ?? [];
    const back = rawBack.filter((x: any) => x?.runner?.name);
    const lay = rawLay.filter((x: any) => x?.runner?.name);
    const rm = new Map<string, LiveRunner>();
    for (const b of back) rm.set(b.runner.name, { name: b.runner.name, back: b.price });
    for (const l of lay) {
      const r: LiveRunner = rm.get(l.runner.name) ?? { name: l.runner.name };
      r.lay = l.price;
      rm.set(l.runner.name, r);
    }
    const runnerByName = new Map(Array.from(rm.values()).map((r) => [r.name, r]));
    const runnerAtSlot = (index: number): LiveRunner | undefined => {
      const backRunnerName = rawBack[index]?.runner?.name;
      const layRunnerName = rawLay[index]?.runner?.name;
      const slotName = backRunnerName ?? layRunnerName;
      if (slotName) return runnerByName.get(slotName);
      if (index === 1) return Array.from(runnerByName.values()).find((r) => /draw/i.test(r.name));
      return undefined;
    };
    const fallbackRunners = Array.from(rm.values());
    const firstSlot = runnerAtSlot(0) ?? fallbackRunners[0];
    const xSlot = runnerAtSlot(1);
    const secondSlot = runnerAtSlot(2) ?? fallbackRunners.find((r) => !/draw/i.test(r.name) && r.name !== (firstSlot?.name ?? "") && r.name !== (xSlot?.name ?? ""));
    const oddsSlots: [LiveRunner | undefined, LiveRunner | undefined, LiveRunner | undefined] = [
      firstSlot,
      xSlot,
      secondSlot,
    ];
    const id = e.event.id + "-" + (e?.market?.name ?? "");
    const openIso = e?.market?.event?.openDate ?? e.event.openDate;
    const openTs = new Date(openIso).getTime();
    const now = Date.now();
    const marketInPlay = e?.market?.inPlay === true;
    const isLive = openTs <= now && (marketInPlay || !!e.isInPlay);
    const norm: LiveEvent = {
      id,
      sport: e.eventType,
      name: String(e.event.name).trim(),
      competition: e?.market?.competition?.name ?? e?.market?.name ?? "",
      openDate: openTs,
      isLive,
      runners: Array.from(rm.values()),
      oddsSlots,
    };
    const prev = map.get(id);
    if (!prev || (norm.isLive && !prev.isLive)) map.set(id, norm);
  }
  return Array.from(map.values());
}

const SPORT_META: Record<string, { icon: string; accent: string }> = {
  Cricket: { icon: "🏏", accent: "oklch(0.75 0.18 85)" },
  Tennis: { icon: "🎾", accent: "oklch(0.72 0.19 130)" },
  Soccer: { icon: "⚽", accent: "oklch(0.65 0.2 155)" },
  Football: { icon: "⚽", accent: "oklch(0.65 0.2 155)" },
  Basketball: { icon: "🏀", accent: "oklch(0.65 0.2 45)" },
  Kabaddi: { icon: "🤼", accent: "oklch(0.65 0.2 25)" },
  "Horse Racing": { icon: "🏇", accent: "oklch(0.7 0.15 60)" },
  "Greyhound Racing": { icon: "🐕", accent: "oklch(0.7 0.15 220)" },
};

function fmtDate(ts: number) {
  return new Date(ts).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function fmtOdd(value?: number) {
  return typeof value === "number" && Number.isFinite(value) && value > 0 ? value.toFixed(2) : "—";
}

type Filter = "all" | "live" | "upcoming";

export function LiveDashboard() {
  const [events, setEvents] = useState<LiveEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState<Filter>("all");
  const [activeSport, setActiveSport] = useState<string>("All");

  useEffect(() => {
    let cancel = false;
    async function tick() {
      try {
        const res = await fetch(
          "https://b2b.max247.co/api/public/exchange/odds/inPlayAndPopularEvents",
          { headers: { accept: "application/json" } }
        );
        if (!res.ok) throw new Error(String(res.status));
        const data = await res.json();
        const norm = normalize(data);
        if (!cancel) {
          setEvents(norm);
          setError(false);
        }
      } catch (err) {
        console.error("[LiveDashboard] fetch failed", err);
        if (!cancel) setError(true);
      } finally {
        if (!cancel) setLoading(false);
      }
    }
    tick();
    const t = setInterval(tick, 30000);
    return () => {
      cancel = true;
      clearInterval(t);
    };
  }, []);

  const sportsList = useMemo(() => {
    const s = new Set(events.map((e) => e.sport));
    const order = ["Cricket", "Tennis", "Soccer", "Football", "Basketball", "Kabaddi", "Horse Racing", "Greyhound Racing"];
    return ["All", ...order.filter((x) => s.has(x))];
  }, [events]);

  const grouped = useMemo(() => {
    const filtered = events.filter((e) => {
      if (activeSport !== "All" && e.sport !== activeSport) return false;
      if (filter === "live") return e.isLive;
      if (filter === "upcoming") return !e.isLive;
      return true;
    });
    const bySport = new Map<string, LiveEvent[]>();
    filtered.forEach((e) => {
      if (!bySport.has(e.sport)) bySport.set(e.sport, []);
      bySport.get(e.sport)!.push(e);
    });
    bySport.forEach((arr) =>
      arr.sort((a, b) => {
        if (a.isLive !== b.isLive) return a.isLive ? -1 : 1;
        return a.openDate - b.openDate;
      })
    );
    const priority = ["Cricket", "Tennis", "Football", "Soccer", "Basketball", "Kabaddi", "Horse Racing", "Greyhound Racing"];
    return Array.from(bySport.entries()).sort((a, b) => {
      const ia = priority.indexOf(a[0]);
      const ib = priority.indexOf(b[0]);
      const ra = ia === -1 ? 999 : ia;
      const rb = ib === -1 ? 999 : ib;
      if (ra !== rb) return ra - rb;
      return b[1].length - a[1].length;
    });
  }, [events, filter, activeSport]);

  const liveCount = events.filter((e) => e.isLive).length;
  const upcomingCount = events.length - liveCount;

  return (
    <section className="relative overflow-hidden py-24 md:py-28 min-h-[600px]">
      {/* Base gradient wash */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% -10%, oklch(0.28 0.09 155 / 0.55), transparent 60%), linear-gradient(180deg, oklch(0.14 0.04 155) 0%, oklch(0.11 0.03 155) 45%, oklch(0.13 0.05 155) 100%)",
        }}
      />
      {/* Drifting color orbs */}
      <div
        className="pointer-events-none absolute -left-24 top-10 h-[420px] w-[420px] rounded-full opacity-60 blur-3xl orb-a"
        style={{ background: "radial-gradient(circle, oklch(0.62 0.22 148 / 0.55), transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute -right-24 top-40 h-[460px] w-[460px] rounded-full opacity-55 blur-3xl orb-b"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.18 85 / 0.42), transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full opacity-45 blur-3xl orb-c"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.24 25 / 0.35), transparent 65%)" }}
      />
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.85 0.15 85 / 0.5) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.85 0.15 85 / 0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 35%, transparent 80%)",
        }}
      />
      {/* Sweeping light beam */}
      <div
        className="pointer-events-none absolute -top-1/4 left-0 h-[150%] w-1/3 blur-2xl beam-sweep"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.9 0.14 85 / 0.18), transparent)",
        }}
      />
      {/* Top & bottom fade to blend as one section */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      {/* Hairline divider glow */}
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Live Exchange · {liveCount} In Play
            </div>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
              The live sports
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              >
                betting dashboard.
              </span>
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-foreground/70 md:text-lg">
              Real-time exchange odds across <Link to="/cricket" className="font-bold text-primary hover:underline">cricket</Link>, <Link to="/tennis" className="font-bold text-primary hover:underline">tennis</Link>, <Link to="/football" className="font-bold text-primary hover:underline">soccer</Link> and more. Looking for <Link to="/cricbet99-id" className="font-bold text-accent hover:underline">Cricbet99 Green</Link> or <Link to="/bonus" className="font-bold text-accent hover:underline">Cricbet99 Club</Link> access? Get your verified ID live in 30 seconds.
            </p>
            <div className="flex flex-wrap gap-3">
              <div
                className="relative overflow-hidden rounded-xl border border-accent/40 px-4 py-2.5 shadow-lg shadow-accent/10"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.22 25 / 0.22), oklch(0.14 0.02 25 / 0.6))",
                }}
              >
                <div className="text-[10px] font-bold uppercase tracking-widest text-accent/80">Live</div>
                <div className="text-2xl font-black text-accent">{liveCount}</div>
              </div>
              <div
                className="relative overflow-hidden rounded-xl border border-primary/40 px-4 py-2.5 shadow-lg shadow-primary/10"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.2 145 / 0.22), oklch(0.12 0.02 155 / 0.6))",
                }}
              >
                <div className="text-[10px] font-bold uppercase tracking-widest text-primary/80">Upcoming</div>
                <div className="text-2xl font-black text-primary">{upcomingCount}</div>
              </div>
              <div
                className="relative overflow-hidden rounded-xl px-4 py-2.5 shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.75 0.18 85 / 0.22), oklch(0.14 0.03 85 / 0.6))",
                  borderWidth: "1px",
                  borderColor: "oklch(0.75 0.18 85 / 0.4)",
                  boxShadow: "0 10px 24px -14px oklch(0.75 0.18 85 / 0.4)",
                }}
              >
                <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "oklch(0.85 0.14 85)" }}>Sports</div>
                <div className="text-2xl font-black" style={{ color: "oklch(0.85 0.16 85)" }}>
                  {sportsList.length - 1}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter bar */}
        <div
          className="mt-10 overflow-hidden rounded-2xl border border-primary/25 p-4 shadow-xl shadow-primary/5 backdrop-blur-md"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.15 0.03 155 / 0.7), oklch(0.1 0.02 155 / 0.55))",
          }}
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="grid grid-cols-3 gap-2 sm:inline-flex sm:flex-wrap sm:gap-2">
              {([
                { k: "all", label: "All", icon: Trophy },
                { k: "live", label: "Live", icon: Radio },
                { k: "upcoming", label: "Upcoming", icon: CalendarClock },
              ] as const).map(({ k, label, icon: Icon }) => {
                const active = filter === k;
                return (
                  <button
                    key={k}
                    onClick={() => setFilter(k)}
                    className={`inline-flex min-w-0 items-center justify-center gap-1.5 rounded-full border px-3 py-2 text-[11px] font-bold uppercase tracking-widest transition-all sm:gap-2 sm:px-5 sm:text-xs ${
                      active
                        ? "border-transparent text-primary-foreground shadow-lg shadow-primary/30"
                        : "border-primary/20 bg-white/[0.03] text-foreground/70 hover:border-primary/60 hover:bg-white/[0.06] hover:text-foreground"
                    }`}
                    style={active ? { background: "var(--gradient-green)" } : undefined}
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{label}</span>
                    {k === "live" && liveCount > 0 && (
                      <span className={`ml-0.5 shrink-0 rounded-full px-1.5 py-0.5 text-[10px] ${active ? "bg-primary-foreground/25" : "bg-accent/20 text-accent"}`}>
                        {liveCount}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {sportsList.map((s) => {
                const active = activeSport === s;
                return (
                  <button
                    key={s}
                    onClick={() => setActiveSport(s)}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
                      active
                        ? "border-primary/70 bg-primary/20 text-primary shadow-md shadow-primary/20"
                        : "border-white/10 bg-white/[0.03] text-foreground/60 hover:border-primary/40 hover:bg-white/[0.06] hover:text-foreground"
                    }`}
                  >
                    {s !== "All" && <span>{SPORT_META[s]?.icon ?? "🎯"}</span>}
                    {s}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content */}
        {loading && (
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-48 animate-pulse rounded-2xl border border-primary/15 bg-card/40" />
            ))}
          </div>
        )}
        {error && !loading && (
          <div className="mt-10 rounded-3xl border border-accent/30 bg-card/40 p-10 text-center text-foreground/70">
            Live feed temporarily unavailable. Ping us on WhatsApp for current odds.
          </div>
        )}
        {!loading && !error && grouped.length === 0 && (
          <div className="mt-10 rounded-3xl border border-primary/20 bg-card/40 p-10 text-center text-foreground/60">
            No matches in this view right now — try a different filter.
          </div>
        )}

        <div className="mt-10 space-y-14">
          {grouped.map(([sport, list]) => {
            const meta = SPORT_META[sport] ?? { icon: "🎯", accent: "oklch(0.75 0.18 85)" };
            return (
              <div key={sport}>
                {/* Sport header ribbon */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className="grid h-12 w-12 place-items-center rounded-xl border border-primary/30 text-2xl shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${meta.accent}22, transparent)`,
                        boxShadow: `0 8px 24px -12px ${meta.accent}`,
                      }}
                    >
                      {meta.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-widest md:text-3xl">
                        {sport}
                      </h3>
                      <div className="mt-0.5 text-xs uppercase tracking-widest text-foreground/50">
                        {list.filter((m) => m.isLive).length} live · {list.length} total
                      </div>
                    </div>
                  </div>
                  <div
                    className="hidden h-px flex-1 md:ml-6 md:block"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${meta.accent}55, transparent)`,
                    }}
                  />
                </div>

                <div
                  className="overflow-hidden rounded-2xl border border-primary/25 shadow-xl shadow-primary/5"
                  style={{
                    background:
                      "linear-gradient(155deg, oklch(0.15 0.03 155 / 0.7) 0%, oklch(0.1 0.02 155 / 0.55) 100%)",
                  }}
                >
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                      <thead>
                        <tr
                          className="text-[10px] font-black uppercase tracking-widest text-foreground/70"
                          style={{
                            background: `linear-gradient(90deg, ${meta.accent}22, transparent)`,
                          }}
                        >
                          <th className="px-4 py-3">Match</th>
                          <th className="px-4 py-3">Odds</th>
                          <th className="w-[120px] px-4 py-3 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {list.map((m, i) => {
                          const parts = m.name.split(/\s+(?:vs?\.?|v)\s+/i);
                          const team1 = parts[0]?.trim() ?? m.name;
                          const team2 = parts[1]?.trim();
                          return (
                            <tr
                              key={m.id}
                              className="border-t border-white/5 transition-colors hover:bg-white/[0.04]"
                              style={i % 2 === 1 ? { background: "oklch(1 0 0 / 0.015)" } : undefined}
                            >
                              <td className="px-4 py-3 align-top">
                                <div className="mb-1.5">
                                  {m.isLive ? (
                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/50 bg-accent/15 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-accent">
                                      <span className="relative flex h-1.5 w-1.5">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent" />
                                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                                      </span>
                                      Live
                                    </span>
                                  ) : (
                                    <span className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-primary">
                                      <CalendarClock className="h-3 w-3" /> {fmtDate(m.openDate)}
                                    </span>
                                  )}
                                </div>
                                <div className="font-black leading-tight text-foreground">
                                  {team1}
                                </div>
                                {team2 && (
                                  <>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">vs</div>
                                    <div className="font-black leading-tight text-foreground">
                                      {team2}
                                    </div>
                                  </>
                                )}
                                <div
                                  className="mt-1 text-[10px] font-bold uppercase tracking-widest"
                                  style={{ color: meta.accent }}
                                >
                                  {m.competition || sport}
                                </div>
                              </td>
                              <td className="px-4 py-3 align-middle">
                                {m.runners.length > 0 ? (
                                  <div className="flex flex-wrap items-center gap-2">
                                    {(() => {
                                      const slots: Array<{ label: string; r?: LiveRunner }> = [
                                        { label: "1", r: m.oddsSlots[0] },
                                        { label: "X", r: m.oddsSlots[1] },
                                        { label: "2", r: m.oddsSlots[2] },
                                      ];
                                      return slots.map((s) => (
                                        <div
                                          key={s.label}
                                          className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2 py-1.5"
                                        >
                                          <span className="text-[11px] font-black uppercase text-foreground/60">
                                            {s.label}
                                          </span>
                                          <span className="rounded border border-primary/30 bg-primary/20 px-1.5 py-0.5 text-[11px] font-black text-primary">
                                            {fmtOdd(s.r?.back)}
                                          </span>
                                          <span className="rounded border border-accent/30 bg-accent/20 px-1.5 py-0.5 text-[11px] font-black text-accent">
                                            {fmtOdd(s.r?.lay)}
                                          </span>
                                        </div>
                                      ));
                                    })()}
                                  </div>
                                ) : (
                                  <span className="text-xs text-foreground/40">Odds soon</span>
                                )}
                              </td>
                              <td className="px-4 py-3 align-middle text-right">
                                <a
                                  href={WA}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-[11px] font-black uppercase tracking-widest text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-[1.03]"
                                  style={{ background: m.isLive ? "var(--gradient-gold)" : "var(--gradient-green)" }}
                                >
                                  {m.isLive ? (
                                    <>
                                      <Flame className="h-3.5 w-3.5" /> Bet
                                    </>
                                  ) : (
                                    <>
                                      <TrendingUp className="h-3.5 w-3.5" /> Get ID
                                    </>
                                  )}
                                </a>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        {!loading && events.length > 0 && (
          <div className="mt-12 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-foreground/50">
            <Zap className="h-3.5 w-3.5 text-primary" />
            Odds refresh automatically every 30 seconds
          </div>
        )}
        
      </div>
    </section>
  );
}

