import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";
import { matches, type MatchFixture } from "@/data/matches";
import { 
  ChevronRight, Radio, Trophy, Search, Filter, 
  Calendar, MapPin, ArrowRight, Zap, Target,
  Star, BarChart3, TrendingUp
} from "lucide-react";
import { buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/matches/")({
  head: () => ({
    meta: [
      { title: "Live Matches, Betting Odds & Schedule 2026 | Cricbet99" },
      { name: "description", content: "Get real-time match updates, expert betting predictions, and live exchange odds for Cricket, Football, and Tennis. Access your Cricbet99 ID for the best sports betting experience." },
      { property: "og:title", content: "Live Match Dashboard & Predictions 2026 | Cricbet99" },
      { property: "og:description", content: "Explore real-time match analysis for IPL 2026, World Cup Football, and WTA Tennis. Get AI-driven insights and premium betting IDs instantly." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cricbet99.co.in/matches" },
      { property: "og:image", content: "https://cricbet99.co.in/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Live Matches & Betting Intelligence 2026 | Cricbet99" },
      { name: "twitter:description", content: "Real-time cricket, football, and tennis betting analysis with live odds and AI predictions." },
      { name: "twitter:image", content: "https://cricbet99.co.in/og-image.jpg" },
      { name: "keywords", content: "cricbet99 matches, live cricket betting, football match predictions, tennis betting tips, IPL 2026 schedule, sports exchange odds, live score updates, online cricket ID, cricket prediction today, today match prediction, today match winner" },
    ],
    links: [
      { rel: "canonical", href: "https://cricbet99.co.in/matches" },
      { rel: "alternate", hreflang: "en-in", href: "https://cricbet99.co.in/matches" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/matches", "All Matches & Predictions")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": matches.slice(0, 10).map((m, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://cricbet99.co.in/matches/${m.slug}`,
            "name": `${m.homeTeam} vs ${m.awayTeam} - ${m.tournament}`
          }))
        }),
      },
    ],
  }),
  component: MatchesPage,
});

const categories = ["All", "Cricket", "Football", "Tennis"];

function MatchesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMatches = useMemo(() => {
    return matches.filter(m => {
      const matchesSearch = 
        m.homeTeam.toLowerCase().includes(search.toLowerCase()) ||
        m.awayTeam.toLowerCase().includes(search.toLowerCase()) ||
        m.tournament.toLowerCase().includes(search.toLowerCase()) ||
        m.venue.toLowerCase().includes(search.toLowerCase());
      
      const matchesCategory = activeCategory === "All" || m.sport === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <SiteLayout>
      <div className="hidden">
        <h1>Live Cricket, Football & Tennis Matches 2026 | Betting Predictions</h1>
        <p>Explore the ultimate dashboard for <strong>IPL 2026 live betting</strong>, FIFA World Cup analysis, and WTA tennis odds. Get instant access to your <strong>Cricbet99 ID</strong> for premium sports exchange markets.</p>
      </div>
      <PageHero
        wide
        eyebrow="Intelligence Dashboard"
        title={<>Real-Time <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>Match Analysis</span> & Predictions</>}
        subtitle="Our AI-powered engine processes thousands of data points across global cricket, football, and tennis fixtures to bring you the most accurate betting insights and live exchange odds."
      />

      <section className="mx-auto max-w-7xl px-6 pb-24 relative z-10 -mt-12">
        {/* Premium Filter & Search Bar */}
        <div className="rounded-[2.5rem] border border-primary/30 bg-background/80 backdrop-blur-xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.1)] mb-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-center overflow-hidden">
            {/* Search */}
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/40 group-focus-within:text-primary transition-colors" />
              <Input
                placeholder="Search series, teams or venues..."
                className="pl-12 h-14 bg-white/5 border-white/10 rounded-2xl focus:border-primary/50 transition-all text-lg"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-6 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all border",
                    activeCategory === cat
                      ? "bg-primary text-black border-primary shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                      : "bg-white/5 text-foreground/60 border-white/10 hover:border-primary/40"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Status Info */}
            <div className="flex items-center justify-end gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 hidden lg:flex">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {matches.filter(m => m.status === 'live').length} Live
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/20" />
                {matches.filter(m => m.status === 'upcoming').length} Upcoming
              </div>
            </div>
          </div>
        </div>

        {/* Matches Grid */}
        {filteredMatches.length > 0 ? (
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredMatches.map((m: MatchFixture) => (
              <Link
                key={m.slug}
                to="/matches/$slug"
                params={{ slug: m.slug }}
                className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] transition-all hover:bg-white/[0.05] hover:border-primary/30 hover:scale-[1.02] flex flex-col"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="p-8 flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <Badge variant="outline" className="rounded-lg border-primary/20 text-primary px-3 py-1 font-black text-[9px] uppercase tracking-widest">
                      {m.tournament}
                    </Badge>
                    {m.status === "live" ? (
                      <span className="flex items-center gap-2 text-[9px] font-black text-red-500 uppercase tracking-widest">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        Live Now
                      </span>
                    ) : (
                      <span className="text-[9px] font-black text-foreground/30 uppercase tracking-widest flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> Upcoming
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 truncate">
                        <img 
                          src={`https://cricbet99.co.in/images/teams/${m.homeTeam.toLowerCase().replace(/\s+/g, '-')}.png`} 
                          alt={`${m.homeTeam} official team logo — Official Cricbet99 today's match prediction and betting odds`}
                          className="w-8 h-8 object-contain shrink-0"
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                        <span className="text-lg sm:text-xl font-black uppercase tracking-tighter truncate">{m.homeTeam}</span>
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-bold bg-primary/10 text-primary px-1.5 sm:px-2 py-1 rounded border border-primary/20 shrink-0">VS</span>
                      <div className="flex items-center gap-3 truncate justify-end">
                        <span className="text-lg sm:text-xl font-black uppercase tracking-tighter truncate text-right">{m.awayTeam}</span>
                        <img 
                          src={`https://cricbet99.co.in/images/teams/${m.awayTeam.toLowerCase().replace(/\s+/g, '-')}.png`} 
                          alt={`${m.awayTeam} official team logo — Official Cricbet99 today's match prediction and betting odds`}
                          className="w-8 h-8 object-contain shrink-0"
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] font-bold text-foreground/40 uppercase tracking-widest mt-2">
                      <MapPin className="h-3.5 w-3.5 text-primary/40" />
                      {m.venue} · {m.city}
                    </div>

                    <div className="flex items-center gap-2 text-[10px] font-bold text-foreground/40 uppercase tracking-widest">
                      <Calendar className="h-3.5 w-3.5 text-primary/40" />
                      {m.startDate}
                    </div>
                  </div>

                  {/* Market Preview */}
                  <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                    {m.marketHighlights.slice(0, 3).map((market, idx) => (
                      <span key={idx} className="text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded bg-white/5 text-foreground/40 border border-white/10 group-hover:border-primary/20 transition-colors">
                        {market}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-white/5 flex items-center justify-between group-hover:bg-primary/10 transition-colors">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">View Match Intel</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center rounded-[3rem] border border-dashed border-white/10 bg-white/[0.01]">
            <Search className="h-12 w-12 text-foreground/20 mx-auto mb-6" />
            <h3 className="text-xl font-black mb-2">No matches found</h3>
            <p className="text-foreground/50">Try adjusting your search or filters to find what you're looking for.</p>
            <button 
              onClick={() => {setSearch(""); setActiveCategory("All");}}
              className="mt-8 px-8 py-3 rounded-full bg-primary text-black font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Analytical Features */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3">
          {[
            {
              icon: BrainCircuit,
              title: "AI Match Modeling",
              desc: "Predictive models updated in real-time based on toss results and first-inning momentum."
            },
            {
              icon: Target,
              title: "Exchange Liquidity",
              desc: "Track market volume across major betting exchanges to find the best value odds."
            },
            {
              icon: ShieldCheck,
              title: "Verified Cricbet99 IDs",
              desc: "Instant access to all listed matches with a single, secure betting account."
            }
          ].map((feature, idx) => (
            <div key={idx} className="p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.02] group hover:border-primary/20 transition-all">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-black uppercase tracking-widest mb-4">{feature.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="mx-auto max-w-7xl px-6 pb-24 border-t border-white/5 pt-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tighter leading-none">
              Elite Sports Betting & <span className="text-primary">Match Intelligence</span>
            </h2>
            <div className="prose prose-invert text-foreground/70 text-lg leading-relaxed">
              <p>
                Cricbet99 is the world's most sophisticated sports exchange, providing granular analysis for every 
                <strong> IPL 2026 cricket match</strong>, football league, and tennis grand slam. Our intelligence hub 
                combines historical data with real-time volatility tracking to ensure you stay ahead of the curve.
              </p>
              <p>
                Whether you're looking for <strong>today's cricket match prediction</strong> or high-liquidity football 
                markets, our dashboard offers verified exchange odds and AI-modeled win probabilities.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Live Events", value: "24/7" },
              { label: "Market Speed", value: "<100ms" },
              { label: "AI Accuracy", value: "94%" },
              { label: "Verified IDs", value: "50k+" },
            ].map((stat, i) => (
              <div key={i} className="p-8 rounded-3xl border border-primary/20 bg-primary/5 text-center group hover:bg-primary/10 transition-colors">
                <div className="text-3xl font-black text-primary mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 space-y-12">
          <h2 className="text-3xl font-black text-center uppercase tracking-tighter">Matches FAQ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] space-y-4">
              <h3 className="text-xl font-bold text-primary">How do I find live cricket matches today?</h3>
              <p className="text-foreground/60 leading-relaxed">Simply use our category filters or search bar at the top of the matches page to instantly find all live and upcoming cricket, football, and tennis fixtures.</p>
            </div>
            <div className="p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] space-y-4">
              <h3 className="text-xl font-bold text-primary">Are these match predictions 100% accurate?</h3>
              <p className="text-foreground/60 leading-relaxed">Our AI models provide the highest statistical win probability based on live data, but sports outcomes always carry variance. We recommend using our insights as a guide for your own betting strategy.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABand heading="Ready to capitalize on these insights?" sub="Get your premium Cricbet99 ID on WhatsApp and start betting with AI-driven intelligence." />
    </SiteLayout>
  );
}

// Helper icons for the feature section
function BrainCircuit(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .52 8.105 4 4 0 0 0 5.327 3.69 4 4 0 0 0 5.326-3.69 4 4 0 0 0 .52-8.105 4 4 0 0 0-2.526-5.77A3 3 0 0 0 12 5Z" />
      <path d="M9 13h6" />
      <path d="M12 10v6" />
      <path d="M12 13h.01" />
    </svg>
  );
}

function ShieldCheck(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

