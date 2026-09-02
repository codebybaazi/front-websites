import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Trophy, Swords, Clock, Calendar } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { waLink } from "@/lib/whatsapp";

interface Event {
  id: string;
  name: string;
  openDate: string;
}

interface Runner {
  id: number;
  name: string;
}

interface PriceSize {
  runner: Runner;
  price: number;
  size: number;
}

interface Market {
  id: string;
  name: string;
  inPlay: boolean;
  start: number;
  competition?: { name: string };
  consolidatedRunner?: {
    back: PriceSize[];
    lay: PriceSize[];
  };
}

interface InPlayEvent {
  eventTypeId: string;
  eventType: string;
  isInPlay: boolean;
  event: Event;
  market: Market;
}

export function InPlaySection({ onMatchesUpdate }: { onMatchesUpdate?: (matches: string[]) => void }) {
  const [events, setEvents] = useState<InPlayEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "live" | "upcoming">("all");

  useEffect(() => {
    let isMounted = true;
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://b2b.max247.co/api/public/exchange/odds/inPlayAndPopularEvents");
        const data = await response.json();
        if (isMounted && data.success && data.result) {
          const combined = [
            ...(data.result.inPlayEvents || []),
            ...(data.result.popularEvents || [])
          ];
          
          // Use a Map to deduplicate events by event.id
          const uniqueEvents = Array.from(
            new Map(combined.map(item => [item.event.id, item])).values()
          );

          setEvents(uniqueEvents);
          if (onMatchesUpdate) {
            const matchNames = uniqueEvents.map(e => e.event.name);
            onMatchesUpdate(matchNames);
          }
        }
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchEvents();
    const interval = setInterval(fetchEvents, 30000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  // Strict whitelist for keys
  const whitelist = ["Cricket", "Tennis", "Football"];

  // Use useMemo for heavy filtering and grouping logic
  const { sortedSportKeys, grouped } = useMemo(() => {
    // 1. Filter raw events based on ID or Name
    const filtered = (events || []).filter((event) => {
      if (!event || !event.event) return false;

      const typeId = String(event.eventTypeId || "").trim();
      const eventName = (event.event.name || "").toUpperCase();
      const sportName = (event.eventType || "").toUpperCase();

      // Block casino/lobby/sportsbook keywords
      const blockedKeywords = [
        "CASINO", "LOBBY", "SLOT", "POKER", "ROULETTE", "BACCARAT", 
        "BLACKJACK", "FAWK", "SPORTSBOOK", "TEEN PATTI", "ANDAR BAHAR", 
        "JOKER", "TIGER", "DRAGON", "CRASH", "AVIATOR", "VIRTUAL", "LIVE_CASINO"
      ];

      if (blockedKeywords.some(kw => eventName.includes(kw) || sportName.includes(kw) || typeId.toUpperCase().includes(kw))) {
        return false;
      }

      // Whitelist check
      const isCricket = typeId === "4" || sportName.includes("CRICKET");
      const isTennis = typeId === "2" || sportName.includes("TENNIS");
      const isFootball = typeId === "1" || sportName.includes("FOOTBALL") || sportName.includes("SOCCER");

      if (!isCricket && !isTennis && !isFootball) return false;

      const now = Date.now();
      const openTime = new Date(event.event.openDate).getTime();
      // The API's isInPlay is the primary flag.
      // If openDate is in the future (more than 5 mins from now), it's definitely UPCOMING.
      const isLive = event.isInPlay && (openTime <= now + 300000);

      if (filter === "live") return isLive;
      if (filter === "upcoming") return !isLive;
      return true;
    });

    // 2. Group by normalized sport name
    const groupedData = filtered.reduce((acc, event) => {
      const sportNameStr = (event.eventType || "").toUpperCase();
      const typeId = String(event.eventTypeId || "").trim();

      let key = "";
      if (sportNameStr.includes("CRICKET") || typeId === "4") key = "Cricket";
      else if (sportNameStr.includes("TENNIS") || typeId === "2") key = "Tennis";
      else if (sportNameStr.includes("FOOTBALL") || sportNameStr.includes("SOCCER") || typeId === "1") key = "Football";

      if (!key || !whitelist.includes(key)) return acc;
      if (!acc[key]) acc[key] = [];
      acc[key]!.push(event);
      return acc;
    }, {} as Record<string, InPlayEvent[]>);

    // 3. Final key sort and cleanup
    const sportKeys = whitelist.filter(key => groupedData[key] && groupedData[key].length > 0);

    sportKeys.forEach(key => {
      groupedData[key]!.sort((a, b) => {
        const now = Date.now();
        const aOpenTime = new Date(a.event.openDate).getTime();
        const bOpenTime = new Date(b.event.openDate).getTime();
        const aIsLive = a.isInPlay || aOpenTime <= now;
        const bIsLive = b.isInPlay || bOpenTime <= now;

        if (aIsLive && !bIsLive) return -1;
        if (!aIsLive && bIsLive) return 1;
        
        // If both are live or both are upcoming, sort by start time ascending
        return aOpenTime - bOpenTime;
      });
    });

    return { sortedSportKeys: sportKeys, grouped: groupedData };
  }, [events, filter]);

  if (loading && events.length === 0) {
    return (
      <div className="py-24 px-4 container max-w-7xl mx-auto flex justify-center items-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
          <p className="text-muted-foreground text-[10px] font-semibold uppercase tracking-[0.16em]">Loading markets…</p>
        </div>
      </div>
    );
  }

  return (
    <section className="relative my-0 overflow-hidden border-y border-white/8 bg-ink-deep/40 px-4 py-16 sm:py-24" id="in-play-section">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-flame/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.pattern')] opacity-[0.05] mix-blend-overlay" />
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
        />
      </div>
      <div className="container relative z-10 mx-auto mb-10 max-w-7xl sm:mb-16">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[11px] font-semibold text-flame tabular-nums">03</span>
            <span className="h-[2px] w-8 brand-rule" />
            <span className="kicker">Live & upcoming</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]"
          >
            Markets running{" "}
            <span className="text-primary">right now</span>
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-start gap-1 rounded-xl border border-white/10 bg-white/5 p-1">
          {[
            { id: "all", label: "All" },
            { id: "live", label: "Live" },
            { id: "upcoming", label: "Upcoming" }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`rounded-lg px-4 py-2.5 text-[11px] font-semibold tracking-wide transition-all sm:px-6 sm:text-xs ${
                filter === btn.id 
                  ? "bg-primary text-primary-foreground" 
                  : "text-white/50 hover:text-white"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl space-y-8">
        {sortedSportKeys.length === 0 ? (
          <div className="glass-card rounded-[2.5rem] border border-white/5 py-32 text-center">
            <Trophy className="w-16 h-16 text-white/5 mx-auto mb-6" />
            <h3 className="text-xl font-semibold tracking-tight text-muted-foreground">No fixtures in this filter</h3>
          </div>
        ) : (
          sortedSportKeys.map((sport, sportIdx) => (
            <motion.div 
              key={sport} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sportIdx * 0.1 }}
              className="relative first:mt-0 mt-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  {sport === "Cricket" ? <Trophy className="w-5 h-5 text-primary" /> : 
                   sport === "Tennis" ? <Zap className="w-5 h-5 text-primary" /> : 
                   <Swords className="w-5 h-5 text-primary" />}
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{sport}</h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              </div>

              <div className="overflow-hidden rounded-xl border border-white/8 bg-card/40">
                <div className="custom-scrollbar overflow-x-auto">
                  <table className="w-full min-w-[720px] border-collapse">
                    <thead>
                      <tr className="border-b border-white/8 bg-white/[0.03]">
                        <th className="px-4 py-3.5 text-left text-[11px] font-semibold text-muted-foreground sm:px-6">
                          Match
                        </th>
                        <th className="px-4 py-3.5 text-center text-[11px] font-semibold text-muted-foreground">
                          Odds (1 X 2)
                        </th>
                        <th className="px-4 py-3.5 text-right text-[11px] font-semibold text-muted-foreground sm:px-6">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/8">
                      <AnimatePresence mode="popLayout">
                        {grouped[sport]?.map((event) => {
                          const now = Date.now();
                          const openTime = new Date(event.event.openDate).getTime();
                          const isActuallyLive = event.isInPlay && openTime <= now + 300000;
                          return (
                            <motion.tr
                              key={event.event.id}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="group transition-colors hover:bg-white/[0.03]"
                            >
                              <td className="px-4 py-5 sm:px-6 sm:py-6">
                                <div className="flex flex-col gap-2">
                                  <div className="flex flex-wrap items-center gap-2">
                                    {isActuallyLive ? (
                                      <span className="inline-flex items-center gap-1.5 rounded-sm bg-red-500/12 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-red-400">
                                        <span className="relative flex h-1.5 w-1.5">
                                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
                                        </span>
                                        Live
                                      </span>
                                    ) : (
                                      <span className="inline-flex items-center gap-1 rounded-sm border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                                        <Calendar className="h-3 w-3" />
                                        Upcoming
                                      </span>
                                    )}
                                    <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                                      <Clock className="h-3 w-3 text-primary" />
                                      {new Date(event.event.openDate).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "short" })}
                                    </span>
                                    {event.market.competition && (
                                      <span className="text-[11px] font-medium text-primary/80">
                                        {event.market.competition.name}
                                      </span>
                                    )}
                                  </div>
                                  <a
                                    href={`/betting?match=${encodeURIComponent(event.event.name)}`}
                                    className="max-w-md text-[15px] font-semibold leading-snug tracking-tight transition-colors hover:text-primary sm:text-base"
                                    title={`Live betting on ${event.event.name}`}
                                    aria-label={`Bet on ${event.event.name} in ${event.eventType}`}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      window.location.href = `/betting?match=${encodeURIComponent(event.event.name)}`;
                                    }}
                                  >
                                    {event.event.name}
                                  </a>
                                </div>
                              </td>
                              <td className="px-3 py-5 sm:px-4 sm:py-6">
                                <div className="mx-auto flex max-w-[360px] items-center justify-center gap-1.5">
                                  {[0, 1, 2].map((idx) => {
                                    const backRunner = event.market.consolidatedRunner?.back?.[idx];
                                    const layRunner = event.market.consolidatedRunner?.lay?.[idx];
                                    return (
                                      <div key={idx} className="flex min-w-[68px] flex-1 flex-col gap-1">
                                        <div className="rounded-md border border-blue-500/20 bg-blue-500/10 px-1.5 py-1.5 text-center tabular-nums">
                                          <div className="text-sm font-semibold leading-none text-blue-400">{backRunner?.price || "-"}</div>
                                          <div className="mt-1 text-[9px] font-medium uppercase tracking-wide text-blue-400/55">Back</div>
                                        </div>
                                        <div className="rounded-md border border-pink-500/20 bg-pink-500/10 px-1.5 py-1.5 text-center tabular-nums">
                                          <div className="text-sm font-semibold leading-none text-pink-400">{layRunner?.price || "-"}</div>
                                          <div className="mt-1 text-[9px] font-medium uppercase tracking-wide text-pink-400/55">Lay</div>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </td>
                              <td className="px-4 py-5 text-right sm:px-6 sm:py-6">
                                <a
                                  href={waLink("Hi Fairplay — I want to open an ID for this match.")}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md bg-primary px-4 py-2.5 text-[12.5px] font-semibold text-primary-foreground transition-colors hover:bg-flame hover:text-flame-foreground"
                                >
                                  Open an ID <Zap className="h-3.5 w-3.5" />
                                </a>
                              </td>
                            </motion.tr>
                          );
                        })}
                      </AnimatePresence>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
}
