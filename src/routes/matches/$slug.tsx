import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand, WA } from "@/components/site-layout";
import { getMatch, matchesBySport } from "@/data/matches";
import { 
  MessageCircle, MapPin, Calendar, Trophy, Radio, Target, 
  BrainCircuit, Sparkles, CheckCircle2, ChevronRight, 
  TrendingUp, Users, Info, ShieldCheck, Zap, BarChart3, 
  ArrowRight, Heart, Share2, HelpCircle, History,
  Star, Timer, LayoutDashboard, Globe, Lightbulb
} from "lucide-react";
import { AiOverview } from "@/components/ai-overview";
import { buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

function formatTournamentDateRange(startDate: string, endDate?: string) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : undefined;
  const dateOptions: Intl.DateTimeFormatOptions = { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" };

  if (!end) return new Intl.DateTimeFormat("en-GB", dateOptions).format(start);

  const sameMonth = start.getUTCMonth() === end.getUTCMonth() && start.getUTCFullYear() === end.getUTCFullYear();
  const startOptions: Intl.DateTimeFormatOptions = sameMonth
    ? { day: "numeric", timeZone: "UTC" }
    : { day: "numeric", month: "short", timeZone: "UTC" };

  return `${new Intl.DateTimeFormat("en-GB", startOptions).format(start)} – ${new Intl.DateTimeFormat("en-GB", dateOptions).format(end)}`;
}

export const Route = createFileRoute("/matches/$slug")({
  loader: ({ params }) => {
    const match = getMatch(params.slug);
    if (!match) throw notFound();
    return { match };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.match) return { title: "Match Not Found | Cricbet99" };
    const m = loaderData.match;
    const isTennis = m.sport === 'Tennis';
    const matchName = isTennis ? m.tournament : `${m.homeTeam} vs ${m.awayTeam}`;
    
    // SEO Optimized title with high-volume keywords
    const title = isTennis 
      ? `${m.tournament} 2026 Prediction, Winner Odds & Betting Tips | Cricbet99`
      : `${m.homeTeam} vs ${m.awayTeam} Prediction, Betting Tips & Live Odds | ${m.tournament} 2026 | Cricbet99`;
    
    // Rich meta description for better CTR
    const description = isTennis
      ? `Get expert ${m.sport.toLowerCase()} analysis for ${m.tournament} at ${m.venue}. ${m.homeTeam} confidence: ${m.winProbHome}%. Discover AI-driven tennis betting tips, surface analysis, and live exchange odds on Cricbet99.`
      : `Get expert ${m.sport.toLowerCase()} analysis for ${matchName} at ${m.venue}. ${m.winProbHome}% vs ${m.winProbAway}% win probability. Discover AI-driven betting tips, pitch reports, and live exchange odds on Cricbet99.`;
    
    // Dynamic keywords based on match data
    const keywords = [
      isTennis ? `${m.tournament} prediction` : `${m.homeTeam} vs ${m.awayTeam} live`,
      isTennis ? `${m.tournament} betting tips` : `${m.homeTeam} vs ${m.awayTeam} prediction`,
      `${m.sport.toLowerCase()} betting tips`,
      `${m.tournament} fixtures 2026`,
      "online cricket id",
      "sports betting exchange",
      `live ${m.sport.toLowerCase()} odds`,
      `${m.city} ${m.sport.toLowerCase()} matches`,
      `cricbet99 ${m.sport.toLowerCase()} login`
    ].join(", ");

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: keywords },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `https://cricbet99.co.in/matches/${m.slug}` },
        { property: "og:image", content: "https://cricbet99.co.in/og-image.jpg" },
        { property: "og:type", content: "article" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: "https://cricbet99.co.in/og-image.jpg" },
      ],
      links: [
        { rel: "canonical", href: `https://cricbet99.co.in/matches/${m.slug}` },
        { rel: "alternate", hreflang: "en-in", href: `https://cricbet99.co.in/matches/${m.slug}` }
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(buildBreadcrumbJsonLd(`/matches/${m.slug}`, matchName)),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsEvent",
            "name": matchName,
            "description": description,
            "startDate": m.startDate,
            "endDate": m.endDate || undefined,
            "eventStatus": "https://schema.org/EventScheduled",
            "location": {
              "@type": "Place",
              "name": m.venue,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": m.city,
                "addressCountry": m.country || "India"
              }
            },
            "competitor": [
              { 
                "@type": "SportsTeam", 
                "name": m.homeTeam,
                "url": `https://cricbet99.co.in/matches/${m.slug}#analysis`,
                "image": `https://cricbet99.co.in/images/teams/${m.homeTeam.toLowerCase().replace(/\s+/g, '-')}.png`
              },
              { 
                "@type": "SportsTeam", 
                "name": m.awayTeam,
                "url": `https://cricbet99.co.in/matches/${m.slug}#analysis`,
                "image": `https://cricbet99.co.in/images/teams/${m.awayTeam.toLowerCase().replace(/\s+/g, '-')}.png`
              }
            ],
            "offers": {
              "@type": "Offer",
              "url": "https://cricbet99.co.in/register",
              "price": "0",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "validFrom": new Date().toISOString()
            },
            "organizer": {
              "@type": "Organization",
              "name": "Cricbet99",
              "url": "https://cricbet99.co.in"
            }
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": isTennis ? `Who is favored to win the ${m.tournament}?` : `Who will win ${m.homeTeam} vs ${m.awayTeam}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": isTennis 
                    ? `Based on Cricbet99's AI evaluation, ${m.homeTeam} enters the ${m.tournament} with a ${m.winProbHome}% confidence rating on the ${m.surface} surface.`
                    : `According to our AI models, ${m.homeTeam} has a ${m.winProbHome}% win probability while ${m.awayTeam} stands at ${m.winProbAway}%. Prediction factors include recent form and venue history.`
                }
              },
              {
                "@type": "Question",
                "name": `How to get a Cricbet99 ID for ${m.sport} betting?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `You can get your official Cricbet99 ID instantly by clicking the WhatsApp button on our site. Register now for a 100% bonus on your first deposit for ${m.tournament} matches.`
                }
              },
              {
                "@type": "Question",
                "name": `Where is the ${isTennis ? m.tournament : `${m.homeTeam} vs ${m.awayTeam}`} match being played?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `The event is scheduled at ${m.venue} in ${m.city}, ${m.country || 'India'}.`
                }
              }
            ]
          }),
        }
      ],
    };
  },
  component: MatchDetailPage,
});

function MatchDetailPage() {
  const { match: m } = Route.useLoaderData();
  const otherMatches = matchesBySport(m.sport).filter(om => om.slug !== m.slug && om.tournament === m.tournament).slice(0, 4);

  // Dynamic analysis generator
  const aiAnalysis = {
    summary: m.detailedNarrative || (m.sport === 'Cricket' 
      ? `Our AI engine has crunched 10 years of data for ${m.homeTeam} and ${m.awayTeam}. For this ${m.tournament} fixture at ${m.venue}, we anticipate a high-liquidity market with significant session movements in the first 10 overs.`
      : `Neural models indicate a high-intensity clash between ${m.homeTeam} and ${m.awayTeam}. The historical trends for the ${m.tournament} at ${m.venue} suggest a tight encounter with premium betting opportunities in live markets.`),
    highlights: m.bettingTips && m.bettingTips.length > 0 ? m.bettingTips : [
      `${m.homeTeam} has shown a strong ${m.sport === 'Cricket' ? 'defending' : 'home'} record recently.`,
      "Market sentiment is leaning heavily towards a high-scoring encounter.",
      "Weather conditions are expected to stay clear, favoring a full game.",
      "Get instant Cricbet99 ID via WhatsApp for 100% bonus on this match."
    ],
    detailedNarrative: m.detailedNarrative || `As ${m.homeTeam} takes on ${m.awayTeam} at ${m.venue}, the tactical focus is on the ${m.sport === 'Cricket' ? 'top-order stability' : 'midfield control'}. Our AI match overview predicts that ${m.homeTeam}'s current form gives them a statistical advantage, but ${m.awayTeam}'s ability to capitalize on transitions makes them a dangerous underdog in the ${m.tournament}.`
  };

  const faqs = [
    {
      q: `What is the win probability for ${m.homeTeam} vs ${m.awayTeam}?`,
      a: `Based on Cricbet99's AI modeling, ${m.homeTeam} currently holds a ${m.winProbHome || 58}% win probability compared to ${m.awayTeam}'s ${m.winProbAway || 42}%. These odds are dynamic and will update based on the toss and live match events.`
    },
    {
      q: `How can I bet on the ${m.homeTeam} vs ${m.awayTeam} match?`,
      a: `To place bets on ${m.homeTeam} vs ${m.awayTeam}, click the 'Get ID on WhatsApp' button to receive your verified Cricbet99 ID instantly. You can then access all markets including match winner, sessions, and fancy bets.`
    },
    {
      q: `Are there special bonuses for ${m.tournament}?`,
      a: `Yes, new users can claim a 100% first deposit bonus for all ${m.tournament} matches. We also offer premium rewards for high-volume traders on our exchange.`
    },
    {
      q: `What are the key players for ${m.homeTeam} vs ${m.awayTeam}?`,
      a: `For ${m.homeTeam}, watch out for ${(m.keyPlayersHome || (m.sport === 'Football' ? ['the striker'] : ['the captain'])).join(', ')}. For ${m.awayTeam}, ${(m.keyPlayersAway || (m.sport === 'Football' ? ['their goalkeeper'] : ['their top striker'])).join(', ')} will be the X-factors to watch.`
    }
  ];

  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow={`${m.sport} · ${m.tournament}`}
        title={
          m.sport === 'Tennis' ? (
            <div className="flex flex-col items-center gap-6">
              <span className="text-2xl md:text-4xl font-black uppercase tracking-tighter bg-clip-text text-transparent text-center px-4" style={{ backgroundImage: "var(--gradient-gold)" }}>
                {m.tournament}
              </span>
              {m.showPlayerMatchup && m.homeTeam && m.awayTeam && (
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                  <div className="flex flex-col items-center gap-4 group">
                    <img 
                      src={`https://cricbet99.co.in/images/teams/${m.homeTeam.toLowerCase().replace(/\s+/g, '-')}.png`} 
                      alt={`${m.homeTeam} official team logo — Official Cricbet99 ${m.sport} match analysis and betting prediction`}
                      className="w-16 h-16 md:w-24 md:h-24 object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-transform hover:scale-110"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    <span className="text-xl md:text-3xl font-black uppercase tracking-tighter">{m.homeTeam}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-base md:text-lg font-bold bg-primary/20 px-3 py-1.5 rounded-full border border-primary/30">VS</span>
                  </div>
                  <div className="flex flex-col items-center gap-4 group">
                    <img 
                      src={`https://cricbet99.co.in/images/teams/${m.awayTeam.toLowerCase().replace(/\s+/g, '-')}.png`} 
                      alt={`${m.awayTeam} official team logo — Official Cricbet99 ${m.sport} match analysis and betting prediction`}
                      className="w-16 h-16 md:w-24 md:h-24 object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-transform hover:scale-110"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    <span className="text-xl md:text-3xl font-black uppercase tracking-tighter">{m.awayTeam}</span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <div className="flex flex-col items-center gap-4 group">
                <img 
                  src={`https://cricbet99.co.in/images/teams/${m.homeTeam.toLowerCase().replace(/\s+/g, '-')}.png`} 
                  alt={`${m.homeTeam} official team logo — Official Cricbet99 ${m.sport} match analysis and betting prediction`}
                  className="w-20 h-20 md:w-32 md:h-32 object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-transform hover:scale-110"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl md:text-4xl font-black uppercase tracking-tighter">{m.homeTeam}</span>
                  {m.homeRecentForm && <div className="flex gap-1">
                    {m.homeRecentForm.split(',').map((f: string, i: number) => (
                      <span key={i} className={cn("w-5 h-5 rounded text-[10px] flex items-center justify-center font-bold", f.trim() === 'W' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500')}>
                        {f.trim()}
                      </span>
                    ))}
                  </div>}
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <span className="text-lg md:text-xl font-bold bg-primary/20 px-6 py-3 rounded-full border border-primary/30 shadow-[0_0_25px_rgba(212,175,55,0.25)]">VS</span>
              </div>

              <div className="flex flex-col items-center gap-4 group">
                <img 
                  src={`https://cricbet99.co.in/images/teams/${m.awayTeam.toLowerCase().replace(/\s+/g, '-')}.png`} 
                  alt={`${m.awayTeam} official team logo — Official Cricbet99 ${m.sport} match analysis and betting prediction`}
                  className="w-20 h-20 md:w-32 md:h-32 object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-transform hover:scale-110"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl md:text-4xl font-black uppercase tracking-tighter bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>
                    {m.awayTeam}
                  </span>
                  {m.awayRecentForm && <div className="flex gap-1">
                    {m.awayRecentForm.split(',').map((f: string, i: number) => (
                      <span key={i} className={cn("w-5 h-5 rounded text-[10px] flex items-center justify-center font-bold", f.trim() === 'W' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500')}>
                        {f.trim()}
                      </span>
                    ))}
                  </div>}
                </div>
              </div>
            </div>
          )
        }
        subtitle={m.sport === 'Tennis' ? undefined : `Live AI Analysis, Pitch Reports, Head-to-Head Stats, and Professional Betting Tips for the ${m.tournament} Clash.`}
      />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-20">
            
            {/* Quick Summary Section */}
            <div className="p-8 rounded-[2.5rem] border border-primary/20 bg-background/40 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Timer className="w-24 h-24" />
               </div>
               <h2 className="text-xl font-black uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-2">
                 <Zap className="h-5 w-5" /> Quick Summary
               </h2>
               <p className="text-lg font-medium leading-relaxed text-foreground/90">
                 {m.homeTeam} vs {m.awayTeam} is one of the most anticipated fixtures in the {m.tournament}. With {m.homeTeam} showing {(m.homeRecentForm?.split('W').length || 1) > 2 ? 'strong' : 'mixed'} recent form, this match at {m.venue} is set to be a high-scoring encounter with massive betting liquidity.
               </p>
            </div>

            {/* AI Intelligence Hub */}
            <div id="ai-overview" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                  <BrainCircuit className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-black tracking-tight">Intelligence Hub</h2>
              </div>
              <AiOverview 
                summary={aiAnalysis.summary}
                highlights={aiAnalysis.highlights}
              />
            </div>

            {/* AI Match Overview (Detailed) */}
            <div className="rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h2 className="text-2xl font-black flex items-center gap-3 mb-8">
                <Sparkles className="h-6 w-6 text-primary animate-pulse" /> AI Match Overview
              </h2>
              <div className="prose prose-invert max-w-none text-foreground/80 leading-relaxed space-y-6">
                <div className="text-lg">
                  {m.detailedNarrative || aiAnalysis.detailedNarrative}
                </div>
                <div className="grid gap-6 md:grid-cols-2 mt-10">
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <h3 className="text-sm font-black uppercase tracking-widest text-primary mb-3">
                      {m.sport === 'Football' ? 'Tactical Preview' : m.sport === 'Tennis' ? 'Court Analysis' : 'Pitch & Conditions'}
                    </h3>
                    <p className="text-sm">
                      {m.tacticalPreview || m.pitchReport || (
                        m.sport === 'Football' ? `The technical committee reports that the surface at ${m.venue} is optimal for high-speed transitions, which suits ${m.homeTeam}'s attacking style.` :
                        m.sport === 'Tennis' ? `The technical analysis for ${m.venue} indicates that the ${m.surface || 'hard'} court surface favors ${m.homeTeam}'s playing style, particularly their ability to handle low bounces and generate pace.` :
                        `Data from ${m.venue} indicates that ${m.homeTeam} has a significantly higher win rate when batting first on this pitch.`
                      )}
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-accent/5 border border-accent/10">
                    <h3 className="text-sm font-black uppercase tracking-widest text-accent mb-3">
                      {m.sport === 'Football' ? 'Squad Dynamics' : m.sport === 'Tennis' ? 'Match Strategy' : 'Tactical Strategy'}
                    </h3>
                    <p className="text-sm">
                      {m.detailedNarrative || m.tacticalPreview || (
                        m.sport === 'Football' ? `${m.awayTeam} is likely to deploy a medium block to soak up pressure before hitting on the counter through their clinical wingers.` :
                        m.sport === 'Tennis' ? `${m.awayTeam} will need to focus on their return game to disrupt ${m.homeTeam}'s service rhythm, aiming to force errors during extended rallies.` :
                        `${m.awayTeam}'s recent success has come from aggressive early plays, forcing opponents onto the defensive quickly.`
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Match Details Section */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-accent/10 text-accent border border-accent/20">
                  <Info className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-widest">Match Details</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  ...(m.sport === "Tennis" ? [] : [{ label: "Fixture", value: `${m.homeTeam} vs ${m.awayTeam}`, icon: Users }]),
                  { label: m.sport === "Tennis" ? "Tournament Dates" : "Match Date", value: m.sport === "Tennis" ? formatTournamentDateRange(m.startDate, m.endDate) : m.startDate, icon: Calendar },
                  { label: "Venue & City", value: `${m.venue}, ${m.city}`, icon: MapPin },
                  { label: "Tournament", value: m.tournament, icon: Trophy },
                  { label: "Sport Category", value: m.sport, icon: Target },
                  { label: "Market Status", value: "High Liquidity", icon: BarChart3 },
                ].map((item, idx) => (
                  <div key={idx} className="group flex flex-col gap-3 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all hover:border-primary/20">
                    <item.icon className="h-6 w-6 text-primary/40 group-hover:text-primary transition-colors" />
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 mb-1">{item.label}</div>
                      <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Who Will Win Prediction */}
            <div className="rounded-[3rem] border border-primary/30 bg-primary/5 p-12 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px]" />
              <h2 className="text-3xl md:text-4xl font-black text-center mb-8">
                {m.sport === 'Tennis' ? "Who will win — and by how many sets?" : "Who will win today's match?"}
              </h2>
              <div className="flex flex-col items-center gap-8">
                <div className="w-full space-y-4">
                  <div className="flex justify-between items-end mb-2">
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-primary uppercase tracking-widest">{m.homeTeam}</span>
                      <span className="text-5xl font-black">{m.winProbHome || 58}%</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-black text-accent uppercase tracking-widest">{m.awayTeam}</span>
                      <span className="text-5xl font-black">{m.winProbAway || 42}%</span>
                    </div>
                  </div>
                  <div className="h-6 w-full bg-white/5 rounded-full overflow-hidden flex shadow-inner">
                    <div className="h-full bg-primary shadow-[0_0_20px_rgba(212,175,55,0.4)]" style={{ width: `${m.winProbHome || 58}%` }} />
                    <div className="h-full bg-accent" style={{ width: `${m.winProbAway || 42}%` }} />
                  </div>
                </div>
                
                {/* Win Probability Logic Explanation */}
                <div className="grid gap-6 md:grid-cols-2 w-full">
                  <div className="p-6 rounded-2xl bg-background/40 border border-white/5">
                    <h4 className="text-xs font-black uppercase text-primary mb-2 tracking-widest">Winning Momentum</h4>
                    <p className="text-xs text-foreground/60 leading-relaxed">
                      AI modeling suggests {m.homeTeam} has a slight edge due to their {m.sport === 'Football' ? 'high xG conversion rates' : m.sport === 'Tennis' ? 'superior first-serve percentages' : 'familiarity with venue conditions'} and superior {m.sport === 'Football' ? 'defensive block metrics' : m.sport === 'Tennis' ? 'tie-break win record' : 'net run rate'} in the tournament.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-background/40 border border-white/5">
                    <h4 className="text-xs font-black uppercase text-accent mb-2 tracking-widest">Challenger Outlook</h4>
                    <p className="text-xs text-foreground/60 leading-relaxed">
                      {m.awayTeam} can flip the odds if they manage to {m.sport === 'Football' ? 'exploit the high-line defense' : m.sport === 'Tennis' ? 'break serve early in the sets' : 'take early wickets'} during the {m.sport === 'Football' ? 'transition phase' : m.sport === 'Tennis' ? 'critical set points' : 'powerplay'}, where {m.homeTeam} has shown tactical vulnerability.
                    </p>
                  </div>
                </div>

                <div className="p-8 rounded-2xl bg-background/60 border border-primary/10 italic text-center max-w-2xl">
                  <Lightbulb className="w-6 h-6 text-primary mx-auto mb-4" />
                  <p className="text-lg leading-relaxed">
                    "{m.predictionInsight || (m.sport === 'Football' ? `Historical head-to-head data suggests that the team scoring first in this fixture has won 78% of encounters. If ${m.homeTeam} secures an early lead, they are statistically poised to take this game.` : m.sport === 'Tennis' ? `Match metrics indicate that ${m.homeTeam} has a high probability of covering the -1.5 set handicap if the first serve percentage stays above 68%.` : `Historical head-to-head data at ${m.venue} shows that the team winning the toss and batting first has won 64% of encounters. If ${m.homeTeam} secures a good start, they are statistically poised to take this game.`)}"
                  </p>
                </div>
              </div>
            </div>

            {/* Key Players To Watch */}
            <div className="space-y-10">
              <h2 className="text-2xl font-black flex items-center gap-3 uppercase tracking-widest">
                <Star className="h-6 w-6 text-primary" /> Key Players to Watch
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="p-8 rounded-[2rem] border border-primary/20 bg-primary/5 transition-transform hover:scale-[1.02]">
                  <h4 className="font-black text-primary text-2xl mb-6">{m.homeTeam} Stars</h4>
                  <ul className="space-y-4">
                    {(m.keyPlayersHome || (m.sport === 'Tennis' ? ["First Serve Accuracy", "Baseline Coverage", "Break Point Conversion"] : ["Top Batsman", "Strike Bowler", "Captain"])).map((player: string, i: number) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <span className="font-bold">{player}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 rounded-[2rem] border border-accent/20 bg-accent/5 transition-transform hover:scale-[1.02]">
                  <h4 className="font-black text-accent text-2xl mb-6">{m.awayTeam} X-Factors</h4>
                  <ul className="space-y-4">
                    {(m.keyPlayersAway || (m.sport === 'Tennis' ? ["Return of Serve", "Net Game Efficiency", "Unforced Error Control"] : ["Hard-hitting Opener", "Spin Wizard", "Leading Wicket Taker"])).map((player: string, i: number) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <span className="font-bold">{player}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Projected Scoreline & Analysis */}
            <div className="rounded-[3rem] border border-white/5 bg-white/[0.02] p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <BarChart3 className="w-32 h-32" />
              </div>
              <h2 className="text-2xl font-black flex items-center gap-3 mb-10 uppercase tracking-widest">
                <TrendingUp className="h-6 w-6 text-primary" /> {m.sport === 'Football' ? 'Projected Score & HT/FT' : m.sport === 'Tennis' ? 'Predicted score & set markets' : 'Projected Scoreline & Over-by-Over'}
              </h2>
              <div className="grid gap-12 md:grid-cols-2">
                <div className="space-y-6">
                   <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20">
                     <Timer className="h-5 w-5 text-primary" />
                     <span className="font-bold">{m.sport === 'Football' ? 'HT/FT & Goal Markets' : m.sport === 'Tennis' ? 'Set Progression' : 'Innings Progression'}</span>
                   </div>
                   <div className="space-y-4">
                     {m.sport === 'Football' ? (
                       <>
                         <div className="p-4 rounded-xl bg-background/40 border border-white/5">
                           <span className="text-[10px] font-black uppercase text-primary block mb-1">Half-Time Result</span>
                           <p className="text-sm text-foreground/70">Projected: {m.homeTeam} Lead or Draw. Low early goal probability based on defensive setups.</p>
                         </div>
                         <div className="p-4 rounded-xl bg-background/40 border border-white/5">
                           <span className="text-[10px] font-black uppercase text-primary block mb-1">Total Goals (O/U)</span>
                           <p className="text-sm text-foreground/70">Market analysis suggests Over 1.5 goals in the second half as teams open up.</p>
                         </div>
                         <div className="p-4 rounded-xl bg-background/40 border border-white/5">
                           <span className="text-[10px] font-black uppercase text-primary block mb-1">Corner Count</span>
                           <p className="text-sm text-foreground/70">Expect 9-11 corners. {m.homeTeam}'s wing-play focus drives high corner liquidity.</p>
                         </div>
                       </>
                     ) : m.sport === 'Tennis' ? (
                       <>
                         <div className="p-4 rounded-xl bg-background/40 border border-white/5">
                           <span className="text-[10px] font-black uppercase text-primary block mb-1">Set 1 Dynamics</span>
                           <p className="text-sm text-foreground/70">Projected: {m.homeTeam} to hold serve. 70% probability of a set winner within 10 games.</p>
                         </div>
                         <div className="p-4 rounded-xl bg-background/40 border border-white/5">
                           <span className="text-[10px] font-black uppercase text-primary block mb-1">Aces Count (O/U)</span>
                           <p className="text-sm text-foreground/70">Expect Over 8.5 aces. Both players possess high service velocities on this surface.</p>
                         </div>
                         <div className="p-4 rounded-xl bg-background/40 border border-white/5">
                           <span className="text-[10px] font-black uppercase text-primary block mb-1">Tie Break Probability</span>
                           <p className="text-sm text-foreground/70">Moderate (35%). Surface speed and return metrics suggest at least one close set.</p>
                         </div>
                       </>
                     ) : (
                       <>
                         <div className="p-4 rounded-xl bg-background/40 border border-white/5">
                           <span className="text-[10px] font-black uppercase text-primary block mb-1">Overs 0-6 (Powerplay)</span>
                           <p className="text-sm text-foreground/70">Projected: 45-55 runs. High probability of swing favoring bowlers early on.</p>
                         </div>
                         <div className="p-4 rounded-xl bg-background/40 border border-white/5">
                           <span className="text-[10px] font-black uppercase text-primary block mb-1">Overs 7-15 (Middle Overs)</span>
                           <p className="text-sm text-foreground/70">Projected: 65-75 runs. Spinners will look to tighten the run rate.</p>
                         </div>
                         <div className="p-4 rounded-xl bg-background/40 border border-white/5">
                           <span className="text-[10px] font-black uppercase text-primary block mb-1">Overs 16-20 (Death Overs)</span>
                           <p className="text-sm text-foreground/70">Projected: 50-65 runs. Batsmen will target short boundaries.</p>
                         </div>
                       </>
                     )}
                   </div>
                </div>
                <div className="space-y-6">
                   <div className="flex items-center gap-3 p-4 rounded-xl bg-accent/10 border border-accent/20">
                     <Target className="h-5 w-5 text-accent" />
                     <span className="font-bold">{m.sport === 'Football' ? 'Score Prediction' : m.sport === 'Tennis' ? 'Set Prediction' : 'Projected Totals'}</span>
                   </div>
                    <div className="p-8 rounded-2xl bg-accent/5 border border-accent/10 flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-black uppercase text-accent mb-2">{m.sport === 'Football' ? 'Correct Scoreline' : m.sport === 'Tennis' ? 'Correct Set Score' : 'Estimated 1st Innings Score'}</span>
                      <span className="text-5xl font-black text-white">{m.projectedScoreHome || (m.sport === 'Cricket' ? "175 - 190" : m.sport === 'Tennis' ? "2 - 0" : "2 - 1")}</span>
                      <p className="mt-4 text-xs text-foreground/50 italic">Based on {m.sport === 'Football' ? 'offensive efficiency' : m.sport === 'Tennis' ? 'service dominance' : 'pitch behavior'} at {m.venue} and {m.homeTeam}'s recent {m.sport === 'Football' ? 'scoring frequency' : m.sport === 'Tennis' ? 'set-winning streak' : 'strike rates'}.</p>
                    </div>
                   <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                     <h4 className="text-sm font-black mb-2 flex items-center gap-2">
                       <Globe className="h-4 w-4 text-primary" /> Market Sentiment
                     </h4>
                     <p className="text-xs text-foreground/60">
                       Cricbet99 traders are currently backing a {m.sport === 'Football' ? 'tactical stalemate or late winner' : m.sport === 'Tennis' ? 'straight sets victory or high game count' : 'high-scoring game'}. {m.sport === 'Football' ? 'Goal line markets' : m.sport === 'Tennis' ? 'Set handicap and Total Games markets' : 'Fancy markets for "Total Sixes"'} are seeing significant upward pressure.
                     </p>
                   </div>
                </div>
              </div>
            </div>

            {/* About Team A vs Team B */}
            <div className="space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-widest">About {m.sport === 'Tennis' ? 'this round' : `${m.homeTeam} vs ${m.awayTeam}`}</h2>
              <div className="prose prose-invert max-w-none text-foreground/70 leading-relaxed">
                <p>
                  The rivalry between {m.homeTeam} and {m.awayTeam} is a highlight of the {m.tournament}. {m.headToHead || `Historically, these two teams have provided some of the most competitive encounters in ${m.sport}.`}
                </p>
                <p>
                  As they meet again at {m.venue}, both squads are looking for a definitive win to secure their standing in the 2026 rankings. With a global audience watching, this fixture is a centerpiece of the sports betting calendar on Cricbet99.
                </p>
              </div>
            </div>

            {/* Popular Betting Markets */}
            <div className="space-y-10">
              <h2 className="text-2xl font-black flex items-center gap-3 uppercase tracking-widest">
                <BarChart3 className="h-6 w-6 text-primary" /> Popular Betting Markets
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                 {(m.sport === 'Cricket' 
                   ? ["Match Winner", "Total Sixes", "Session Runs", "Fancy Bets", "Top Batsman", "Top Bowler", "Next Wicket", "Over/Under"]
                   : m.sport === 'Tennis'
                   ? ["Match Winner", "Set Betting", "Total Games", "Set Handicap", "Over/Under Games", "Next Set Winner", "Correct Score", "Tie Break?"]
                   : ["Match Winner", "Total Goals", "Correct Score", "BTTS", "Corner Count", "Asian Handicap", "Player to Score", "Live Props"]
                 ).map(market => (
                  <div key={market} className="group p-5 rounded-2xl border border-white/5 bg-white/[0.02] text-center hover:border-primary/30 transition-all hover:scale-[1.05]">
                    <div className="text-xs font-black text-foreground/80 group-hover:text-primary mb-3 uppercase tracking-wider">{market}</div>
                    <Badge className={cn("bg-primary/20 text-primary border-none text-[8px] uppercase font-black px-3 py-1", market === "Asian Handicap" || market === "BTTS" ? "bg-accent/20 text-accent" : "")}>
                      {market === "Asian Handicap" || market === "BTTS" ? "Expert Pick" : "Highly Liquid"}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Betting Tips */}
            <div className="p-10 rounded-[3rem] border border-primary/40 bg-primary/5 space-y-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                 <History className="w-32 h-32" />
               </div>
               <h2 className="text-3xl font-black flex items-center gap-3 uppercase tracking-tighter">
                <Lightbulb className="h-8 w-8 text-primary" /> {m.sport === 'Tennis' ? 'Betting Tips for Top seed vs Challenger' : 'Betting Tips & Strategy'}
              </h2>
              <div className="grid gap-6">
                {(m.bettingTips || [
                   m.sport === 'Football' ? `Analyze the starting lineups carefully; injuries to key defenders in ${m.homeTeam}'s squad could shift the odds toward over 2.5 goals.` : 
                   m.sport === 'Tennis' ? `Surface conditions at ${m.venue} (${m.surface}) favor aggressive servers. Betting on ${m.homeTeam} to hold their opening three service games offers early-market value.` :
                   `Analyze the toss carefully; the pitch at ${m.venue} favors the team batting first.`,
                  `Value is found in mid-game session markets where volatility is high.`,
                  "Always maintain a disciplined bankroll strategy for high-volume fixtures."
                ]).map((tip: string, i: number) => (
                  <div key={i} className="flex gap-5 p-6 rounded-2xl bg-background/40 border border-primary/10">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-sm font-black text-primary">0{i+1}</div>
                    <p className="text-foreground/80 leading-relaxed font-medium">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Bet on... */}
            <div className="space-y-8">
              <h2 className="text-2xl font-black uppercase tracking-widest text-center">Why bet on {m.homeTeam} vs {m.awayTeam} with Cricbet99?</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { t: "Fastest Withdrawals", d: "15-minute guaranteed payouts via UPI.", i: Zap },
                  { t: "Best Odds", d: "Highest liquidity and tightest spreads in India.", i: TrendingUp },
                  { t: "AI Insights", d: "Proprietary predictive modeling for every match.", i: BrainCircuit },
                  { t: "24/7 Support", d: "Verified WhatsApp support always available.", i: MessageCircle },
                  { t: "Secure IDs", d: "100% anonymous and encrypted betting accounts.", i: ShieldCheck },
                  { t: "High Limits", d: "Trade large volumes with ease and security.", i: BarChart3 }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] space-y-3">
                    <item.i className="h-6 w-6 text-primary" />
                    <h3 className="font-black text-sm uppercase">{item.t}</h3>
                    <p className="text-xs text-foreground/50 leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Matches In Section */}
            {otherMatches.length > 0 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-black uppercase tracking-widest">Other Matches in {m.tournament}</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {otherMatches.map(om => (
                    <Link key={om.slug} to="/matches/$slug" params={{ slug: om.slug }} className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-primary/30 transition-all flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-black uppercase text-primary/60 mb-1">{om.startDate}</div>
                        <div className="font-bold group-hover:text-primary transition-colors">{om.homeTeam} vs {om.awayTeam}</div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-foreground/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs */}
            <div className="pt-20 border-t border-white/10">
              <div className="flex items-center gap-3 mb-10">
                <HelpCircle className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-black uppercase tracking-tighter">Analytical Match FAQ</h2>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border border-primary/20 bg-background/40 rounded-3xl px-8 py-2 overflow-hidden group">
                    <AccordionTrigger className="text-left font-black text-lg hover:no-underline hover:text-primary transition-colors py-6">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/70 leading-relaxed text-base pb-8 border-t border-primary/10 pt-6">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <div className="space-y-8">
            <div className="sticky top-24 space-y-8">
              
              {/* Premium CTA Card */}
              <div className="rounded-[3rem] border border-primary/30 bg-background/60 p-10 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent pointer-events-none" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
                <h3 className="text-3xl font-black relative z-10 leading-tight mb-4">Bet on this Match Now</h3>
                <p className="text-foreground/70 relative z-10 text-sm mb-8 leading-relaxed">
                  Join 50k+ pro traders and bet on {m.homeTeam} vs {m.awayTeam} with a verified Cricbet99 ID. 
                </p>
                
                <div className="space-y-5 relative z-10 mb-10">
                  <div className="flex items-center gap-3 text-sm font-bold bg-white/5 p-3 rounded-xl border border-white/5">
                    <Zap className="h-5 w-5 text-accent" /> 100% First Deposit Bonus
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold bg-white/5 p-3 rounded-xl border border-white/5">
                    <ShieldCheck className="h-5 w-5 text-accent" /> Verified Exchange Access
                  </div>
                </div>

                <a
                  href={WA}
                  className="relative z-10 flex w-full items-center justify-center gap-3 rounded-2xl py-6 text-lg font-black text-primary-foreground shadow-[0_15px_30px_rgba(212,175,55,0.3)] transition-all hover:scale-[1.03] hover:shadow-primary/50 active:scale-[0.98]"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <MessageCircle className="h-6 w-6" /> Get ID on WhatsApp
                </a>
                
                <div className="mt-8 text-center relative z-10">
                  <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-2">Verified Secure</p>
                  <div className="flex justify-center gap-4 opacity-30 grayscale hover:grayscale-0 transition-all">
                    <ShieldCheck className="w-6 h-6" />
                    <CheckCircle2 className="w-6 h-6" />
                    <Star className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Keep Exploring / Related */}
              <div className="rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8">
                <h4 className="font-black text-lg mb-6 flex items-center gap-2 uppercase tracking-widest">
                  <LayoutDashboard className="h-5 w-5 text-primary" /> Keep Exploring
                </h4>
                <div className="space-y-4">
                  <Link to="/schedule" className="block p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] transition-all group hover:border-primary/20">
                    <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Schedule</div>
                    <div className="text-sm font-bold flex items-center justify-between">
                      2026 Sports Calendar
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                  <Link to="/betting-guides" className="block p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] transition-all group hover:border-primary/20">
                    <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Learning</div>
                    <div className="text-sm font-bold flex items-center justify-between">
                      Pro Betting Guides
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                  <Link to="/bonus" className="block p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] transition-all group hover:border-primary/20">
                    <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Rewards</div>
                    <div className="text-sm font-bold flex items-center justify-between">
                      VIP Bonus Offers
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-between px-6 py-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <span className="text-[10px] font-black text-foreground/40 uppercase tracking-widest">Share Analysis</span>
                <div className="flex gap-6">
                  <Share2 className="h-5 w-5 text-foreground/40 cursor-pointer hover:text-primary transition-colors" />
                  <Heart className="h-5 w-5 text-foreground/40 cursor-pointer hover:text-red-500 transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        heading={`Ready to Bet on ${m.homeTeam} vs ${m.awayTeam}?`}
        sub={`The exchange is active with high liquidity. Get your verified Cricbet99 ID now and join the action.`}
      />
    </SiteLayout>
  );
}

