import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Trophy, Swords, Clock, PlayCircle, Calendar } from "lucide-react";
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
          <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">Syncing Markets...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 px-4 container max-w-7xl mx-auto relative overflow-hidden bg-primary/[0.02] border-y border-white/5 rounded-[3rem] my-12 shadow-[0_0_100px_rgba(0,0,0,0.5)]" id="in-play-section">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
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
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 relative z-10">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-primary" />
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Live Markets</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.85]"
          >
            IN-PLAY & <br />
            <span className="text-primary not-italic">POPULAR</span>
          </motion.h2>
        </div>

        <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 backdrop-blur-xl flex-wrap justify-center sm:justify-start">
          {[
            { id: "all", label: "All Matches" },
            { id: "live", label: "Live Now" },
            { id: "upcoming", label: "Upcoming" }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`px-4 sm:px-8 py-2.5 rounded-lg text-[9px] sm:text-[10px] font-black uppercase tracking-widest transition-all ${
                filter === btn.id 
                  ? "bg-primary text-primary-foreground shadow-[0_10px_20px_rgba(255,100,0,0.3)]" 
                  : "text-white/40 hover:text-white"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-8 relative z-10">
        {sortedSportKeys.length === 0 ? (
          <div className="glass-card rounded-[2.5rem] border border-white/5 py-32 text-center">
            <Trophy className="w-16 h-16 text-white/5 mx-auto mb-6" />
            <h3 className="text-2xl font-black italic uppercase text-white/20 tracking-tighter">No Events Found</h3>
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
                <h3 className="text-2xl font-black italic uppercase tracking-tighter">{sport}</h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              </div>

              <div className="glass-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl backdrop-blur-3xl relative">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="overflow-x-auto custom-scrollbar relative z-10">
                  <table className="w-full min-w-[800px] border-collapse">
                    <thead>
                      <tr className="bg-white/[0.03] border-b border-white/5">
                        <th className="px-6 md:px-10 py-6 text-left text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
                          <span className="sr-only">Event Name and Details</span>
                          Match
                        </th>
                        <th className="px-4 py-6 text-center text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
                          <span className="sr-only">Betting Odds 1 X 2</span>
                          Odds (1 X 2)
                        </th>
                        <th className="px-6 md:px-10 py-6 text-right text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <AnimatePresence mode="popLayout">
                        {grouped[sport]?.map((event) => (
                          <motion.tr
                            key={event.event.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="hover:bg-white/[0.03] transition-colors group"
                          >
                            <td className="px-6 md:px-10 py-8">
                              <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                  {(() => {
                                    const now = Date.now();
                                    const openTime = new Date(event.event.openDate).getTime();
                                    const isActuallyLive = event.isInPlay && (openTime <= now + 300000);
                                    
                                    return isActuallyLive ? (
                                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[8px] font-black text-red-500 uppercase tracking-widest">
                                        <span className="flex h-1.5 w-1.5 relative">
                                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
                                        </span>
                                        LIVE
                                      </div>
                                    ) : (
                                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] font-black text-white/30 uppercase tracking-widest">
                                        <Calendar className="w-3 h-3" />
                                        UPCOMING
                                      </div>
                                    );
                                  })()}
                                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] font-black text-white/40 uppercase tracking-widest">
                                    <Clock className="w-3 h-3" />
                                    {new Date(event.event.openDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', day: '2-digit', month: 'short' })}
                                  </div>
                                  {event.market.competition && (
                                    <span className="text-[9px] text-primary font-black uppercase tracking-[0.2em] opacity-60">
                                      {event.market.competition.name}
                                    </span>
                                  )}
                                </div>
                                <h4 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter leading-tight group-hover:text-primary transition-colors max-w-md">
                                  <a 
                                    href={`/betting?match=${encodeURIComponent(event.event.name)}`}
                                    className="hover:underline underline-offset-4 decoration-primary/30"
                                    title={`Live Betting on ${event.event.name} - Fairplay`}
                                    aria-label={`Bet on ${event.event.name} in ${event.eventType}`}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      window.location.href = `/betting?match=${encodeURIComponent(event.event.name)}`;
                                    }}
                                  >
                                    {event.event.name}
                                  </a>
                                </h4>
                              </div>
                            </td>

                            <td className="px-4 py-8">
                              <div className="flex items-center justify-center gap-2 max-w-[400px] mx-auto">
                                {[0, 1, 2].map((idx) => {
                                  const backRunner = event.market.consolidatedRunner?.back?.[idx];
                                  const layRunner = event.market.consolidatedRunner?.lay?.[idx];
                                  return (
                                    <div key={idx} className="flex flex-col gap-1 flex-1 min-w-[80px]">
                                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-2 text-center transition-colors hover:bg-blue-500/20">
                                        <div className="text-blue-400 font-black text-base leading-none">{backRunner?.price || "-"}</div>
                                        <div className="text-[7px] text-blue-400/50 font-black tracking-tighter uppercase">Back</div>
                                      </div>
                                      <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-2 text-center transition-colors hover:bg-pink-500/20">
                                        <div className="text-pink-400 font-black text-base leading-none">{layRunner?.price || "-"}</div>
                                        <div className="text-[7px] text-pink-400/50 font-black tracking-tighter uppercase">Lay</div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </td>

                            <td className="px-6 md:px-10 py-8 text-right">
                              <a 
                                href={waLink("Hello Fairplay! I want to Join Now and get my ID.")} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-4 bg-primary text-primary-foreground hover:scale-105 active:scale-95 transition-all rounded-xl text-[9px] font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/20 whitespace-nowrap"
                              >
                                JOIN NOW <Zap className="w-3 h-3 fill-current" />
                              </a>
                            </td>
                          </motion.tr>
                        ))}
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
