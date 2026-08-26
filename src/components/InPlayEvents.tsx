import { useEffect, useMemo, useState } from "react";
import { Radio, Clock, Trophy } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";

type Runner = { runner: { id: number; name: string }; price: number | null; size: number | null };
export type ApiEvent = {
  eventTypeId: string;
  eventType: string;
  isInPlay: boolean;
  competition?: { id?: string; name?: string };
  event: { id: string; name: string; openDate: string };
  market?: {
    name?: string;
    consolidatedRunner?: { back?: Runner[]; lay?: Runner[] };
  };
};

type ApiResponse = {
  success: boolean;
  result: { inPlayEvents: ApiEvent[]; popularEvents: ApiEvent[] };
};

const SPORT_ORDER = ["Cricket", "Tennis", "Football"] as const;
const ALLOWED_SPORTS = new Set<string>(SPORT_ORDER);
type Filter = "all" | "live" | "upcoming";

export async function fetchInPlayEvents(): Promise<ApiEvent[]> {
  try {
    const r = await fetch("https://b2b.max247.co/api/public/exchange/odds/inPlayAndPopularEvents");
    const json = (await r.json()) as ApiResponse;
    const all = [...(json.result?.inPlayEvents ?? []), ...(json.result?.popularEvents ?? [])];
    const seen = new Set<string>();
    return all.filter((e) => {
      const key = e.event?.id;
      if (!key || seen.has(key)) return false;
      if (!ALLOWED_SPORTS.has(e.eventType)) return false;
      seen.add(key);
      return true;
    });
  } catch {
    return [];
  }
}


function parseDate(s: string): number {
  const t = new Date(s).getTime();
  return isNaN(t) ? 0 : t;
}

function isLiveNow(e: ApiEvent): boolean {
  const start = parseDate(e.event?.openDate ?? "");
  return start > 0 && start <= Date.now();
}

function formatDateTime(s: string): string {
  const d = new Date(s);
  if (isNaN(d.getTime())) return "-";
  return d.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function splitTeams(name: string): [string, string | null] {
  const sep = name.split(/\s+v\s+|\s+vs\.?\s+/i);
  if (sep.length >= 2) return [sep[0].trim(), sep.slice(1).join(" v ").trim()];
  return [name, null];
}

function fmtOdds(v?: number | null): string {
  return v != null && !isNaN(v) ? v.toFixed(2) : "-";
}

function OddCell({ label, back, lay }: { label: string; back?: number | null; lay?: number | null }) {
  return (
    <div className="flex flex-col items-center gap-1 min-w-[54px]">
      <span className="text-[9px] font-bold uppercase tracking-widest text-primary/70">{label}</span>
      <div className="flex gap-1">
        <span className="rounded bg-sky-500/15 border border-sky-500/40 text-sky-300 px-1.5 py-0.5 text-[11px] font-bold tabular-nums min-w-[36px] text-center">
          {fmtOdds(back)}
        </span>
        <span className="rounded bg-pink-500/15 border border-pink-500/40 text-pink-300 px-1.5 py-0.5 text-[11px] font-bold tabular-nums min-w-[36px] text-center">
          {fmtOdds(lay)}
        </span>
      </div>
    </div>
  );
}

function EventRow({ e }: { e: ApiEvent }) {
  const { whatsappUrl } = useWhatsApp();
  const backs = (e.market?.consolidatedRunner?.back ?? []).filter((r) => r?.runner);
  const lays = e.market?.consolidatedRunner?.lay ?? [];
  const live = isLiveNow(e);
  const [t1, t2] = splitTeams(e.event.name);
  const league = e.competition?.name ?? e.market?.name ?? "";
  const seoTitle = `${e.event.name}${league ? ` — ${league}` : ""} ${live ? "live" : "upcoming"} ${e.eventType} betting odds`;

  return (
    <article
      className="border-t border-primary/10 hover:bg-primary/5 transition-colors"
      itemScope
      itemType="https://schema.org/SportsEvent"
      aria-label={seoTitle}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 px-3 sm:px-4 py-3">
        {/* Match column: status + teams + league */}
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            {live ? (
              <span className="inline-flex items-center gap-1 rounded-full border border-red-500/50 bg-red-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-red-400">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" /> Live
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                <Clock className="h-3 w-3" /> Upcoming
              </span>
            )}
            <time
              dateTime={e.event.openDate}
              itemProp="startDate"
              className="text-[10px] text-muted-foreground whitespace-nowrap"
            >
              {formatDateTime(e.event.openDate)}
            </time>
            <meta itemProp="sport" content={e.eventType} />
            <meta
              itemProp="eventStatus"
              content={live ? "https://schema.org/EventInProgress" : "https://schema.org/EventScheduled"}
            />
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={seoTitle}
            itemProp="name"
            className="block text-sm sm:text-base font-semibold text-foreground hover:text-primary transition-colors"
          >
            <span className="truncate inline-block max-w-full align-bottom">{t1}</span>
            {t2 && (
              <>
                <span className="mx-1.5 text-muted-foreground text-xs">vs</span>
                <span className="truncate inline-block max-w-full align-bottom">{t2}</span>
              </>
            )}
          </a>
          {league && (
            <div
              className="text-[11px] text-muted-foreground truncate mt-0.5"
              itemProp="superEvent"
              itemScope
              itemType="https://schema.org/SportsEvent"
            >
              <span itemProp="name">{league}</span>
            </div>
          )}
        </div>

        {/* Odds row: 1 X 2 back/lay inline */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto lg:overflow-visible -mx-1 px-1">
          <OddCell label="1" back={backs[0]?.price} lay={lays[0]?.price} />
          <OddCell label="X" back={backs[2]?.price} lay={lays[2]?.price} />
          <OddCell label="2" back={backs[1]?.price} lay={lays[1]?.price} />
        </div>

        {/* Action */}
        <div className="flex justify-end">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Bet on ${e.event.name}`}
            className="inline-flex items-center rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Bet
          </a>
        </div>
      </div>
    </article>
  );
}

export default function InPlayEvents({ initialEvents = [] }: { initialEvents?: ApiEvent[] } = {}) {
  const { whatsappUrl } = useWhatsApp();
  const [data, setData] = useState<ApiEvent[]>(initialEvents);
  const [loading, setLoading] = useState(initialEvents.length === 0);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    let alive = true;
    const load = () => {
      fetchInPlayEvents()
        .then((dedup) => {
          if (!alive) return;
          setData(dedup);
          setLoading(false);
        })
        .catch((err) => {
          if (!alive) return;
          setError(String(err?.message ?? err));
          setLoading(false);
        });
    };
    load();
    const id = setInterval(load, 30000);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, []);


  const { grouped, sports } = useMemo(() => {
    const filtered = data.filter((e) => {
      if (filter === "live") return isLiveNow(e);
      if (filter === "upcoming") return !isLiveNow(e);
      return true;
    });
    const byType = new Map<string, ApiEvent[]>();
    for (const e of filtered) {
      const key = e.eventType || "Other";
      if (!byType.has(key)) byType.set(key, []);
      byType.get(key)!.push(e);
    }
    for (const [, arr] of byType) {
      arr.sort((a, b) => {
        const la = isLiveNow(a), lb = isLiveNow(b);
        if (la !== lb) return la ? -1 : 1;
        return parseDate(a.event.openDate) - parseDate(b.event.openDate);
      });
    }
    const priority = SPORT_ORDER.filter((s) => byType.has(s));
    return { grouped: byType, sports: priority };
  }, [data, filter]);

  const totalCount = data.length;
  const liveCount = data.filter((e) => isLiveNow(e)).length;
  const upcomingCount = totalCount - liveCount;

  const tabs: { key: Filter; label: string; count: number }[] = [
    { key: "all", label: "All", count: totalCount },
    { key: "live", label: "Live", count: liveCount },
    { key: "upcoming", label: "Upcoming", count: upcomingCount },
  ];

  const jsonLd = useMemo(() => {
    if (!data.length) return null;
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "In-Play & Upcoming Matches — Cricket, Tennis, Football",
      numberOfItems: data.length,
      itemListElement: data.slice(0, 50).map((e, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SportsEvent",
          name: e.event.name,
          startDate: e.event.openDate,
          sport: e.eventType,
          eventStatus: isLiveNow(e)
            ? "https://schema.org/EventInProgress"
            : "https://schema.org/EventScheduled",
          ...(e.competition?.name ? { superEvent: { "@type": "SportsEvent", name: e.competition.name } } : {}),
        },
      })),
    };
  }, [data]);

  return (
    <section id="in-play" className="relative overflow-hidden" aria-label="In-play and upcoming cricket, tennis and football matches">
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {/* Themed background */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-primary/[0.05] to-background" />
      {/* Ambient gold spotlights */}
      <div aria-hidden className="absolute inset-0 -z-10" style={{
        backgroundImage:
          "radial-gradient(45% 55% at 12% 8%, rgba(212,175,55,0.22), transparent 70%), radial-gradient(40% 50% at 88% 92%, rgba(212,175,55,0.18), transparent 70%), radial-gradient(30% 30% at 50% 50%, rgba(212,175,55,0.06), transparent 75%)",
      }} />
      {/* Soft grid */}
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.07]" style={{
        backgroundImage:
          "linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
        maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
      }} />
      {/* Diagonal sheen */}
      <div aria-hidden className="absolute inset-0 -z-10 opacity-40 mix-blend-overlay" style={{
        backgroundImage:
          "linear-gradient(115deg, transparent 40%, rgba(212,175,55,0.10) 50%, transparent 60%)",
      }} />
      {/* Floating blurred orbs */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 -z-10 h-80 w-80 rounded-full bg-primary/15 blur-3xl animate-pulse" style={{ animationDuration: "4s" }} />
      {/* Hairlines */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      {/* Corner ornaments */}
      <div aria-hidden className="pointer-events-none absolute top-4 left-4 h-6 w-6 border-t-2 border-l-2 border-primary/40 rounded-tl-lg" />
      <div aria-hidden className="pointer-events-none absolute top-4 right-4 h-6 w-6 border-t-2 border-r-2 border-primary/40 rounded-tr-lg" />
      <div aria-hidden className="pointer-events-none absolute bottom-4 left-4 h-6 w-6 border-b-2 border-l-2 border-primary/40 rounded-bl-lg" />
      <div aria-hidden className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-primary/40 rounded-br-lg" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-14">
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
          <span
            className="text-primary text-xs tracking-[0.4em] uppercase font-semibold"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Live Exchange
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
        </div>
        <h2
          className="text-3xl md:text-5xl font-bold text-primary tracking-wider text-center uppercase drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          In-Play & Upcoming
        </h2>
      </div>

      <div className="flex justify-center mb-6">
        <div className="inline-flex w-full max-w-md sm:w-auto rounded-full border border-primary/25 bg-card/60 p-1 backdrop-blur">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setFilter(t.key)}
              className={`flex-1 sm:flex-none px-3 sm:px-5 py-1.5 text-[11px] sm:text-sm font-semibold uppercase tracking-widest rounded-full transition-all whitespace-nowrap ${
                filter === t.key
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(212,175,55,0.35)]"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {t.label}
              <span className="ml-1 sm:ml-1.5 text-[10px] opacity-70">{t.count}</span>
            </button>
          ))}
        </div>
      </div>

      {loading && (
        <div className="text-center text-muted-foreground text-sm py-10">Loading live markets…</div>
      )}
      {error && !loading && (
        <div className="text-center text-red-400 text-sm py-10">Unable to load live events.</div>
      )}

      {!loading && !error && (
        <div className="rounded-2xl border border-primary/25 bg-card/60 backdrop-blur overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.08)]">
          {sports.map((sport, idx) => {
            const list = grouped.get(sport) ?? [];
            if (list.length === 0) return null;
            const liveN = list.filter((e) => isLiveNow(e)).length;
            return (
              <div key={sport} className={idx > 0 ? "border-t border-primary/20" : ""}>
                <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-primary/5">
                  <div className="flex items-center gap-2 min-w-0">
                    <Trophy className="h-4 w-4 text-primary shrink-0" />
                    <h3
                      className="text-sm sm:text-base font-bold text-primary uppercase tracking-wider truncate"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {sport}
                    </h3>
                    {liveN > 0 && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-red-500/50 bg-red-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-red-400 shrink-0">
                        <Radio className="h-3 w-3" /> {liveN}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground shrink-0">
                    {list.length} match{list.length === 1 ? "" : "es"}
                  </span>
                </div>
                <div>
                  {list.map((e) => (
                    <EventRow key={e.event.id} e={e} />
                  ))}
                </div>
              </div>
            );
          })}
          {sports.every((s) => (grouped.get(s) ?? []).length === 0) && (
            <div className="text-center text-muted-foreground text-sm py-10">
              No {filter === "all" ? "" : filter} matches right now.
            </div>
          )}
        </div>
      )}

      {!loading && !error && data.length > 0 && (
        <div className="mt-8 rounded-2xl border border-primary/20 bg-card/40 backdrop-blur p-5 sm:p-6">
          <h3
            className="text-sm sm:text-base font-bold text-primary uppercase tracking-widest mb-3"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Trending Matches & Betting Markets
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
            Live and upcoming online betting odds for{" "}
            {sports.join(", ").toLowerCase()} — get instant 1 X 2, back and lay
            rates on today's biggest fixtures across{" "}
            {Array.from(new Set(data.map((e) => e.competition?.name).filter(Boolean))).slice(0, 6).join(", ") || "top leagues"}.
          </p>
          <ul className="flex flex-wrap gap-1.5" aria-label="Trending match keywords">
            {Array.from(
              new Set(
                data.flatMap((e) => {
                  const [a, b] = splitTeams(e.event.name);
                  return [
                    e.event.name,
                    e.competition?.name,
                    a,
                    b,
                    `${e.event.name} betting odds`,
                    `${e.event.name} live score`,
                  ].filter(Boolean) as string[];
                })
              )
            )
              .slice(0, 60)
              .map((kw) => (
                <li key={kw}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full border border-primary/25 bg-primary/5 px-2.5 py-1 text-[10px] sm:text-[11px] text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                  >
                    {kw}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      )}
      </div>
    </section>
  );
}
