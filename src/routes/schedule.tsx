import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { matches } from "@/data/matches";
import { footballFixtures } from "@/data/football-fixtures";
import { tennisFixtures } from "@/data/tennis-fixtures";
import { cricketFixtures } from "@/data/cricket-fixtures";
import { Calendar, MapPin, Trophy, Clock, ArrowRight, ExternalLink, BrainCircuit, Sparkles, TrendingUp } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AiOverview } from "@/components/ai-overview";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "2026 Cricket Schedule & Live Sports Calendar | IPL & T20 World Cup 2026 | Cricbet99" },
      { name: "description", content: "Official 2026 cricket schedule and live sports calendar. Get IPL 2026 fixtures, T20 World Cup 2026 dates, football, and tennis match details with real-time betting updates on Cricbet99." },
      { property: "og:title", content: "2026 Cricket Schedule & Live Sports Calendar — Cricbet99" },
      { property: "og:description", content: "Your definitive guide to the 2026 sports calendar. IPL fixtures, T20 World Cup 2026, and major tennis/football events with live betting analytics." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cricbet99.co.in/schedule" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/schedule" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/schedule", "2026 Cricket Schedule & Sports Calendar")),
      },
    ],
  }),
  component: Schedule,
});

const majorEvents = [
  { m: "Mar 2026", e: "IPL 2026 — Season Opener", v: "Ahmedabad", cat: "Cricket" },
  { m: "Mar–May 2026", e: "IPL 2026 League Stage", v: "Pan-India", cat: "Cricket" },
  { m: "May 2026", e: "IPL 2026 Playoffs & Final", v: "Kolkata / Mumbai", cat: "Cricket" },
  { m: "Jun 11, 2026", e: "FIFA World Cup 2026 Opener", v: "Mexico City", cat: "Football" },
  { m: "Jun–Jul 2026", e: "FIFA World Cup 2026", v: "North America", cat: "Football" },
  { m: "Jul 19, 2026", e: "FIFA World Cup 2026 Final", v: "New York/NJ", cat: "Football" },
  { m: "Oct–Nov 2026", e: "ICC T20 World Cup 2026", v: "India & Sri Lanka", cat: "Cricket" },
  { m: "Jun–Jul 2026", e: "Wimbledon Championships", v: "London", cat: "Tennis" },
  { m: "Aug–Sep 2026", e: "US Open 2026", v: "New York", cat: "Tennis" },
];

function Schedule() {
  const [activeTab, setActiveTab] = useState<"Cricket" | "Football" | "Tennis">("Cricket");
  
  const filteredEvents = majorEvents.filter(e => e.cat === activeTab);
  
  const upcomingMatches = matches
    .filter(m => m.status === 'upcoming' && m.sport === activeTab)
    .slice(0, 10);
  
  const tabs = ["Cricket", "Football", "Tennis"] as const;

  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="2026 Sports Intelligence Hub"
        title={<>2026 Cricket Schedule & <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Live Sports Calendar.</span></>}
        subtitle="The definitive guide to the IPL 2026 fixtures, T20 World Cup 2026 schedule, and international football/tennis events. Track every live match and betting market on Cricbet99."
      />

      <section className="mx-auto max-w-7xl px-6 py-8 border-b border-primary/10">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 border",
                activeTab === tab
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                  : "bg-background/40 text-foreground/60 border-primary/20 hover:border-primary/50 hover:text-foreground"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="space-y-12">
          {/* Main Schedule Column */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">
                  {`${activeTab} Fixtures 2026`}
                </h2>
              </div>
              
              <div className="space-y-4">
                {activeTab === "Football" ? (
                  <div className="space-y-12">
                    {(["Group Stage", "Round of 32", "Round of 16", "Quarter-finals", "Semi-finals", "Final"] as const).map((category) => (
                      <div key={category} className="space-y-6">
                        <div className="flex items-center gap-3">
                          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                          <h3 className="text-xl font-bold text-primary px-4 py-1 rounded-full border border-primary/20 bg-primary/5 uppercase tracking-widest text-xs">
                            {category}
                          </h3>
                          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                        </div>
                        
                        <div className="rounded-2xl border border-primary/10 bg-background/40 overflow-hidden">
                          <div className="overflow-x-auto">
                            {/* Desktop Table View */}
                            <table className="w-full text-left border-collapse hidden md:table">
                              <thead>
                                <tr className="border-b border-primary/10 bg-primary/5">
                                  <th className="p-4 text-xs font-bold uppercase tracking-widest text-primary">Stage</th>
                                  <th className="p-4 text-xs font-bold uppercase tracking-widest text-primary">Match</th>
                                  <th className="p-4 text-xs font-bold uppercase tracking-widest text-primary">Date & Kickoff</th>
                                  <th className="p-4 text-xs font-bold uppercase tracking-widest text-primary">Venue</th>
                                  <th className="p-4 text-xs font-bold uppercase tracking-widest text-primary">Details</th>
                                </tr>
                              </thead>
                              <tbody>
                                {footballFixtures
                                  .filter(m => m.sport === "Football" && (m as any).category === category)
                                  .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
                                  .map((match) => (
                                    <tr key={match.slug} className="border-b border-primary/5 hover:bg-primary/5 transition-colors text-nowrap">
                                      <td className="p-4 text-sm font-medium text-foreground/80">{match.stage}</td>
                                      <td className="p-4 font-bold text-foreground">{match.homeTeam} vs {match.awayTeam}</td>
                                      <td className="p-4 text-sm text-foreground/60">{format(new Date(match.startDate), 'eee, dd MMM yyyy · HH:mm')}</td>
                                      <td className="p-4 text-sm text-foreground/60">{match.venue}, {match.city}</td>
                                      <td className="p-4">
                                        <Link 
                                          to="/matches/$slug"
                                          params={{ slug: match.slug }}
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                                          >
                                            Match Details <ArrowRight className="w-3 h-3" />
                                          </Link>
                                      </td>
                                    </tr>
                                  ))}
                              </tbody>
                            </table>

                            {/* Mobile Card View */}
                            <div className="md:hidden divide-y divide-primary/10">
                              {footballFixtures
                                .filter(m => m.sport === "Football" && (m as any).category === category)
                                .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
                                .map((match) => (
                                  <div key={match.slug} className="p-4 space-y-3">
                                    <div className="flex justify-between items-start">
                                      <div className="text-[10px] font-bold text-primary uppercase tracking-widest px-2 py-0.5 rounded bg-primary/10 border border-primary/20 w-fit">
                                        {match.stage}
                                      </div>
                                      <div className="text-[10px] text-foreground/60 font-medium">
                                        {format(new Date(match.startDate), 'dd MMM yyyy')}
                                      </div>
                                    </div>
                                    <div className="text-base font-bold text-foreground">
                                      {match.homeTeam} vs {match.awayTeam}
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 text-[11px] text-foreground/60">
                                      <div className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5 text-primary/70" />
                                        {format(new Date(match.startDate), 'HH:mm')}
                                      </div>
                                      <div className="flex items-center gap-1.5">
                                        <MapPin className="w-3.5 h-3.5 text-primary/70" />
                                        {match.city}
                                      </div>
                                    </div>
                                    <Link 
                                      to="/matches/$slug"
                                      params={{ slug: match.slug }}
                                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-xs font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                      View Match Intelligence <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : activeTab === "Tennis" ? (
                  <div className="space-y-6">
                    <div className="rounded-2xl border border-primary/10 bg-background/40 overflow-hidden">
                      <div className="overflow-x-auto xl:overflow-x-visible">
                        {/* Desktop Table View */}
                        <table className="w-full text-left border-collapse hidden md:table">
                          <thead>
                            <tr className="border-b border-primary/10 bg-primary/5">
                              <th className="p-4 text-xs font-bold uppercase tracking-widest text-primary">Dates</th>
                              <th className="p-4 text-xs font-bold uppercase tracking-widest text-primary">Tournament</th>
                              <th className="p-4 text-xs font-bold uppercase tracking-widest text-primary">Tour/Surface</th>
                              <th className="p-4 text-xs font-bold uppercase tracking-widest text-primary">Defending Champ</th>
                              <th className="p-4 text-xs font-bold uppercase tracking-widest text-primary">Venue</th>
                              <th className="p-4 text-xs font-bold uppercase tracking-widest text-primary">Details</th>
                            </tr>
                          </thead>
                          <tbody>
                            {tennisFixtures
                              .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
                              .map((match) => (
                                <tr key={match.slug} className="border-b border-primary/5 hover:bg-primary/5 transition-colors text-nowrap xl:text-wrap">
                                  <td className="p-4 text-sm text-foreground/60 whitespace-nowrap">
                                    {match.endDate ? (
                                      <>
                                        {(() => {
                                          const start = new Date(match.startDate);
                                          const end = new Date(match.endDate);
                                          const sameMonth = start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();
                                          return (
                                            <>
                                              {format(start, sameMonth ? 'd' : 'd MMM')} – {format(end, 'd MMM yyyy')}
                                            </>
                                          );
                                        })()}
                                      </>
                                    ) : (
                                      format(new Date(match.startDate), 'dd MMM yyyy')
                                    )}
                                  </td>
                                  <td className="p-4">
                                    <div className="text-sm font-bold text-foreground">{match.tournament}</div>
                                    <div className="text-[10px] uppercase text-primary font-bold opacity-70 tracking-widest">{match.category}</div>
                                  </td>
                                  <td className="p-4">
                                    <div className="flex flex-col gap-1">
                                      <span className="text-[10px] px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 w-fit font-bold">
                                        {match.tour}
                                      </span>
                                      <span className="text-[10px] px-2 py-0.5 rounded bg-background/60 text-foreground/60 border border-primary/10 w-fit">
                                        {match.surface}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="p-4">
                                    <div className="text-sm font-bold text-foreground">{match.player1}</div>
                                    <div className="text-[10px] text-foreground/40 italic">Prev: {match.player1}</div>
                                  </td>
                                  <td className="p-4 text-sm text-foreground/60">{match.venue}, {match.city}</td>
                                  <td className="p-4">
                                    <div className="flex flex-col gap-2">
                                      <Link 
                                        to="/matches/$slug"
                                        params={{ slug: match.slug }}
                                        className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                                      >
                                        Match Details <ArrowRight className="w-3 h-3" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>

                        {/* Mobile Card View */}
                        <div className="md:hidden divide-y divide-primary/10">
                          {tennisFixtures
                            .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
                            .map((match) => (
                              <div key={match.slug} className="p-4 space-y-4">
                                <div className="flex justify-between items-start gap-4">
                                  <div className="flex-1">
                                    <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{match.category}</div>
                                    <div className="text-base font-bold text-foreground leading-tight">{match.tournament}</div>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-[10px] text-foreground/60 font-bold whitespace-nowrap">
                                      {match.endDate ? (
                                        <>
                                          {format(new Date(match.startDate), 'd')} - {format(new Date(match.endDate), 'd MMM')}
                                        </>
                                      ) : format(new Date(match.startDate), 'dd MMM')}
                                    </div>
                                    <div className="text-[9px] text-foreground/40 uppercase tracking-tighter mt-0.5">2026 Season</div>
                                  </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10">
                                  <div>
                                    <div className="text-[9px] text-foreground/40 uppercase font-bold mb-1 tracking-widest">Defending</div>
                                    <div className="text-xs font-bold text-foreground">{match.player1}</div>
                                  </div>
                                  <div>
                                    <div className="text-[9px] text-foreground/40 uppercase font-bold mb-1 tracking-widest">Surface</div>
                                    <div className="text-xs font-bold text-foreground">{match.surface}</div>
                                  </div>
                                </div>

                                <div className="flex items-center justify-between text-[11px] text-foreground/60 px-1">
                                  <div className="flex items-center gap-1.5">
                                    <MapPin className="w-3.5 h-3.5 text-primary/70" />
                                    {match.city}
                                  </div>
                                  <div className="flex items-center gap-1.5">
                                    <Trophy className="w-3.5 h-3.5 text-primary/70" />
                                    {match.tour}
                                  </div>
                                </div>

                                <Link 
                                  to="/matches/$slug"
                                  params={{ slug: match.slug }}
                                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-xs font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                                >
                                  View Tournament Intelligence <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : activeTab === "Cricket" ? (
                  <div className="space-y-12">
                    {cricketFixtures.map((series) => (
                      <div key={series.name} className="space-y-6">
                        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 border-l-4 border-l-primary shadow-sm">
                          <h3 className="text-2xl font-bold text-foreground mb-2">{series.name}</h3>
                          <p className="text-foreground/60 text-sm leading-relaxed">{series.details}</p>
                        </div>
                        
                        <div className="rounded-2xl border border-primary/10 bg-background/40 overflow-hidden">
                          <div className="overflow-x-auto">
                            {/* Desktop Table View */}
                            <table className="w-full text-left border-collapse hidden md:table">
                              <thead>
                                <tr className="border-b border-primary/10 bg-primary/5">
                                  <th className="p-4 text-xs font-bold uppercase tracking-widest text-primary">Match</th>
                                  <th className="p-4 text-xs font-bold uppercase tracking-widest text-primary">Teams</th>
                                  <th className="p-4 text-xs font-bold uppercase tracking-widest text-primary">Date</th>
                                  <th className="p-4 text-xs font-bold uppercase tracking-widest text-primary">Venue</th>
                                  <th className="p-4 text-xs font-bold uppercase tracking-widest text-primary">Details</th>
                                </tr>
                              </thead>
                              <tbody>
                                {series.matches.map((match) => (
                                  <tr key={match.slug} className="border-b border-primary/5 hover:bg-primary/5 transition-colors text-nowrap">
                                    <td className="p-4 text-sm font-medium text-foreground/80">{match.match}</td>
                                    <td className="p-4 font-bold text-foreground">{match.teams}</td>
                                    <td className="p-4 text-sm text-foreground/60 whitespace-nowrap">{match.date}</td>
                                    <td className="p-4 text-sm text-foreground/60">{match.venue}</td>
                                    <td className="p-4">
                                      <Link 
                                        to="/matches/$slug"
                                        params={{ slug: match.slug }}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                                      >
                                        Match Details <ArrowRight className="w-3 h-3" />
                                      </Link>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>

                            {/* Mobile Card View */}
                            <div className="md:hidden divide-y divide-primary/10">
                              {series.matches.map((match) => (
                                <div key={match.slug} className="p-4 space-y-3">
                                  <div className="flex justify-between items-start">
                                    <div className="text-[10px] font-bold text-primary uppercase tracking-widest px-2 py-0.5 rounded bg-primary/10 border border-primary/20 w-fit">
                                      {match.match}
                                    </div>
                                    <div className="text-[10px] text-foreground/60 font-medium">
                                      {match.date}
                                    </div>
                                  </div>
                                  <div className="text-base font-bold text-foreground">
                                    {match.teams}
                                  </div>
                                  <div className="flex items-center gap-1.5 text-[11px] text-foreground/60">
                                    <MapPin className="w-3.5 h-3.5 text-primary/70" />
                                    {match.venue}
                                  </div>
                                  <Link 
                                    to="/matches/$slug"
                                    params={{ slug: match.slug }}
                                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-xs font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                                  >
                                    Match Analytics <ArrowRight className="w-3.5 h-3.5" />
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  filteredEvents.map((event, i) => (
                    <div 
                      key={i}
                      className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-background/40 p-6 transition-all hover:border-primary/30 hover:bg-background/60"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="mt-1 flex flex-col items-center justify-center min-w-[80px] py-2 rounded-lg bg-primary/5 border border-primary/10 text-primary font-bold">
                            <span className="text-xs uppercase opacity-70 tracking-tighter">Event Date</span>
                            <span className="text-sm">{event.m}</span>
                          </div>
                          <div>
                            <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{event.cat}</div>
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{event.e}</h3>
                            <div className="flex items-center gap-2 text-sm text-foreground/60 mt-1">
                              <MapPin className="w-3.5 h-3.5" />
                              {event.v}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Link 
                            to="/register"
                            className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center gap-2 hover:brightness-110 transition-all"
                          >
                            Bet Live <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                )}
                {filteredEvents.length === 0 && activeTab !== "Football" && (
                  <div className="text-center py-12 border border-dashed border-primary/20 rounded-2xl bg-primary/5">
                    <p className="text-foreground/60">No major {activeTab} events listed for this selection yet.</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <AiOverview 
        summary={`The 2026 ${activeTab} Cricket Schedule and Sports Calendar is optimized for precision betting. Our AI-driven Intelligence Hub integrates live T20 World Cup 2026 scheduling, IPL fixtures, and tennis/football metrics to provide a 360-degree view of today's match and high-authority betting markets.`}
        highlights={[
          "98% Accuracy on Tournament scheduling and venue mapping",
          "Advanced AI Predictions for ATP/WTA match winners and total points",
          "Real-time market volatility tracking for High-Authority betting events",
          "Comprehensive keywords integration for elite SEO performance"
        ]}
      />

      <CTABand 
        heading="Experience 2026 with Cricbet99" 
        sub="The world's most sophisticated sports exchange for the world's biggest sports year." 
      />
    </SiteLayout>
  );
}
