import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { matches } from "@/data/matches";
import { Calendar, MapPin, Trophy, Clock, ArrowRight, ExternalLink } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "2026 Sports Schedule — IPL, World Cup & Major Events | Cricbet99" },
      { name: "description", content: "Official 2026 sports calendar. IPL 2026 fixtures, FIFA World Cup, T20 World Cup, and major tennis events. View dates, venues, and live betting markets on Cricbet99." },
      { property: "og:title", content: "2026 Sports Schedule — Cricbet99" },
      { property: "og:description", content: "The definitive 2026 sports betting calendar. From IPL to FIFA World Cup." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cricbet99.co.in/schedule" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/schedule" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/schedule", "2026 Sports Schedule")),
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
  const [activeTab, setActiveTab] = useState<"All" | "Cricket" | "Football" | "Tennis">("All");
  
  const filteredEvents = activeTab === "All" 
    ? majorEvents 
    : majorEvents.filter(e => e.cat === activeTab);

  const upcomingMatches = matches
    .filter(m => m.status === 'upcoming' && (activeTab === "All" || m.sport === activeTab))
    .slice(0, 10);

  const tabs = ["All", "Cricket", "Football", "Tennis"] as const;

  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow="Intelligence Hub"
        title={<>2026 Master <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Sports Calendar.</span></>}
        subtitle="Your essential guide to the biggest betting events of 2026. Real-time fixtures for IPL, FIFA World Cup, and International Cricket with Cricbet99 analytics."
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
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Schedule Column */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">
                  {activeTab === "All" ? "Major 2026 Championships" : `${activeTab} Fixtures 2026`}
                </h2>
              </div>
              
              <div className="space-y-4">
                {activeTab === "Football" ? (
                  <div className="overflow-x-auto rounded-2xl border border-primary/10 bg-background/40">
                    <table className="w-full text-left border-collapse">
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
                        {matches
                          .filter(m => m.sport === "Football")
                          .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
                          .map((match) => (
                            <tr key={match.slug} className="border-b border-primary/5 hover:bg-primary/5 transition-colors">
                              <td className="p-4 text-sm font-medium text-foreground/80">{match.stage}</td>
                              <td className="p-4 font-bold text-foreground">{match.homeTeam} vs {match.awayTeam}</td>
                              <td className="p-4 text-sm text-foreground/60">{format(new Date(match.startDate), 'MMM dd, HH:mm')}</td>
                              <td className="p-4 text-sm text-foreground/60">{match.venue}, {match.city}</td>
                              <td className="p-4">
                                <Link 
                                  to="/matches/$slug"
                                  params={{ slug: match.slug }}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                                >
                                  View <ArrowRight className="w-3 h-3" />
                                </Link>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
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

            {/* Betting Analysis Section */}
            <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-4">Strategic Betting Insights</h2>
              <p className="text-foreground/70 leading-relaxed mb-8">
                The 2026 season represents a unique convergence of major tournaments. With the IPL shifting to a longer window and the FIFA World Cup expanding to 48 teams, market volatility will be at an all-time high. Our analysts recommend focusing on <span className="text-primary font-semibold">Toss-based outcomes in Ahmedabad</span> and <span className="text-primary font-semibold">BTTS (Both Teams To Score) markets in Mexico City</span> during the opening week.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl border border-primary/10 bg-background/20">
                  <div className="font-bold text-primary mb-1">IPL 2026 Focus</div>
                  <div className="text-sm text-foreground/60">Expect higher par scores as boundaries are standardized across venues.</div>
                </div>
                <div className="p-4 rounded-xl border border-primary/10 bg-background/20">
                  <div className="font-bold text-primary mb-1">World Cup Logistics</div>
                  <div className="text-sm text-foreground/60">Altitude in Mexico City will impact long-range shooting and player fatigue.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar / Detailed Fixtures */}
          <div className="space-y-8">
            <div className="sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold">Upcoming {activeTab !== "All" ? activeTab : ""} Fixtures</h3>
              </div>
              
              <div className="space-y-4">
                {upcomingMatches.length > 0 ? (
                  upcomingMatches.map((match) => (
                    <Link 
                      key={match.slug}
                      to="/matches/$slug"
                      params={{ slug: match.slug }}
                      className="block group p-4 rounded-2xl border border-primary/10 bg-background/40 hover:border-primary/40 hover:bg-background/80 transition-all"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary/70">{match.tournament}</span>
                        <span className="text-[10px] font-medium text-foreground/40">{format(new Date(match.startDate), 'MMM dd, HH:mm')}</span>
                      </div>
                      <div className="font-bold text-foreground mb-3 flex items-center justify-between">
                        <span>{match.homeTeam} <span className="text-primary">vs</span> {match.awayTeam}</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-foreground/50 flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {match.city}
                        </span>
                        <span className="text-primary flex items-center gap-1 font-bold">
                          Analyze <ExternalLink className="w-3 h-3" />
                        </span>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-foreground/40 text-center py-8">No specific {activeTab} fixtures available.</p>
                )}
              </div>

              <div className="mt-8 p-6 rounded-2xl border border-primary/20 bg-primary/5 text-center">
                <div className="text-sm font-medium mb-4">Want the full raw CSV schedule?</div>
                <button className="w-full py-3 rounded-xl border border-primary/30 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all">
                  Download Full 2026 PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand 
        heading="Experience 2026 with Cricbet99" 
        sub="The world's most sophisticated sports exchange for the world's biggest sports year." 
      />
    </SiteLayout>
  );
}
