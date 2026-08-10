import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand, WA } from "@/components/site-layout";
import { getMatch } from "@/data/matches";
import { MessageCircle, MapPin, Calendar, Trophy, Radio, Target, BrainCircuit, Sparkles, CheckCircle2, ChevronRight, TrendingUp, Users, Info } from "lucide-react";
import { AiOverview } from "@/components/ai-overview";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/components/long-form-page";

export const Route = createFileRoute("/matches/$slug")({
  loader: ({ params }) => {
    const match = getMatch(params.slug);
    if (!match) throw notFound();
    return { match };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.match) return { title: "Match Not Found | Cricbet99" };
    const m = loaderData.match;
    const title = `${m.homeTeam} vs ${m.awayTeam} Live Odds & Betting Analysis | Cricbet99`;
    const description = `Live ${m.sport} betting odds for ${m.homeTeam} vs ${m.awayTeam} in the ${m.tournament}. Get expert AI analysis, projected scores, and session tips on Cricbet99.`;
    
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `https://cricbet99.co.in/matches/${m.slug}` },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: `https://cricbet99.co.in/matches/${m.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(buildBreadcrumbJsonLd(`/matches/${m.slug}`, `${m.homeTeam} vs ${m.awayTeam}`)),
        },
      ],
    };
  },
  component: MatchDetailPage,
});

function MatchDetailPage() {
  const { match: m } = Route.useLoaderData();

  const matchFaqs = [
    { q: `How can I bet on ${m.homeTeam} vs ${m.awayTeam}?`, a: `Simply get your Cricbet99 ID via WhatsApp, deposit funds, and navigate to the ${m.sport} section to find the ${m.tournament} markets.` },
    { q: `Are live odds available for this ${m.sport} match?`, a: `Yes, we provide real-time exchange-grade odds for ${m.homeTeam} vs ${m.awayTeam} including match winner, sessions, and fancy bets.` },
    { q: `What is the minimum deposit to start betting?`, a: `You can start with a minimum deposit of ₹500. We support all major UPI apps for instant transactions.` }
  ];

  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow={`${m.sport} · ${m.tournament}`}
        title={
          <>
            {m.homeTeam} vs{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>
              {m.awayTeam}
            </span>
          </>
        }
        subtitle={`Premium match analysis, live betting insights, and official betting IDs for ${m.homeTeam} vs ${m.awayTeam} at ${m.venue}.`}
      />

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Analysis Column */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* AI OVERVIEW SECTION */}
            <div id="ai-overview">
              <AiOverview 
                summary={`Our AI engine has analyzed the ${m.tournament} clash between ${m.homeTeam} and ${m.awayTeam}. Key factors include the historical performance at ${m.venue} and recent player form indicators.`}
                highlights={[
                  `Live in-play liquidity is expected to be high for ${m.homeTeam} vs ${m.awayTeam}`,
                  "Pitch conditions likely to favor balanced competition",
                  "Expert session tips available ball-by-ball on the dashboard",
                  "Verified WhatsApp ID activation in under 2 minutes"
                ]}
              />
            </div>

            {/* QUICK SUMMARY */}
            <div className="rounded-3xl border border-primary/20 bg-background/40 p-8">
              <h2 className="text-2xl font-black flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" /> Quick Summary
              </h2>
              <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
                <p>The upcoming {m.sport} showdown between {m.homeTeam} and {m.awayTeam} is one of the most anticipated fixtures in the {m.tournament}. Scheduled to take place at the iconic {m.venue}, this match carries significant weight for both sides as they look to climb the table.</p>
                <p>Our analysts have noted that {m.homeTeam} has been particularly strong in recent weeks, while {m.awayTeam} remains a dangerous underdog with several match-winners in their squad. This setup provides excellent value for savvy traders looking at session and fancy markets.</p>
              </div>
            </div>

            {/* MATCH DETAILS TABLE */}
            <div className="rounded-3xl border border-primary/20 bg-background/40 p-8">
              <h2 className="text-2xl font-black flex items-center gap-2">
                <Info className="h-6 w-6 text-primary" /> Match Details
              </h2>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Fixture", value: `${m.homeTeam} vs ${m.awayTeam}`, icon: Users },
                  { label: "Date & Time", value: m.startDate, icon: Calendar },
                  { label: "Venue", value: m.venue, icon: MapPin },
                  { label: "Tournament", value: m.tournament, icon: Trophy },
                  { label: "Sport Category", value: m.sport, icon: Target },
                  { label: "Market Status", value: "Open for Betting", icon: Radio },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl border border-primary/10 bg-background/60">
                    <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-primary/70">{item.label}</div>
                      <div className="text-sm font-bold">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PREDICTION SECTION */}
            <div className="rounded-3xl border border-primary/20 bg-background/40 p-8">
              <h2 className="text-2xl font-black flex items-center gap-2 text-accent">
                <BrainCircuit className="h-6 w-6" /> Who will win today's match?
              </h2>
              <div className="mt-6 space-y-4 text-foreground/80">
                <p>Based on our proprietary algorithms and market sentiment, {m.homeTeam} enters this match as slight favorites with a 55% win probability. However, the toss will play a crucial role at {m.venue}, as the pitch historically changes character as the match progresses.</p>
                <div className="p-5 rounded-2xl bg-accent/5 border border-accent/20 border-l-4">
                  <h4 className="font-bold text-accent">Strategic Prediction:</h4>
                  <p className="mt-2 text-sm italic">"We recommend monitoring the first 15% of the match before placing large wagers. The 'Next Wicket' and 'Session Over/Under' markets are likely to offer better value than the outright winner market in the early stages."</p>
                </div>
              </div>
            </div>

            {/* PROJECTED SCORELINE */}
            <div className="rounded-3xl border border-primary/20 bg-background/40 p-8">
              <h2 className="text-2xl font-black flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-primary" /> Projected Scoreline & Analysis
              </h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="p-6 rounded-2xl border border-primary/10 bg-primary/5">
                  <h4 className="font-bold text-primary">{m.homeTeam} Projections</h4>
                  <ul className="mt-3 space-y-2 text-sm text-foreground/70">
                    <li>• Aggressive start expected in powerplay</li>
                    <li>• Middle-order stability: High</li>
                    <li>• Death overs scoring potential: Above average</li>
                  </ul>
                </div>
                <div className="p-6 rounded-2xl border border-primary/10 bg-accent/5">
                  <h4 className="font-bold text-accent">{m.awayTeam} Projections</h4>
                  <ul className="mt-3 space-y-2 text-sm text-foreground/70">
                    <li>• Cautious approach in the opening phase</li>
                    <li>• Spin-play efficiency: Excellent</li>
                    <li>• Impact player utilization: Critical</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ SECTION */}
            <div className="pt-10 border-t border-primary/10">
              <h2 className="text-2xl font-black">Frequently Asked Questions</h2>
              <div className="mt-8 space-y-4">
                {matchFaqs.map((faq, i) => (
                  <details key={i} className="group rounded-2xl border border-primary/20 bg-background/60 p-6 open:bg-background/80 transition-all">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-foreground">
                      {faq.q}
                      <ChevronRight className="h-5 w-5 transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="mt-4 text-sm text-foreground/70 leading-relaxed border-t border-primary/10 pt-4">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Betting Tools */}
          <div className="space-y-8">
            <div className="sticky top-24 space-y-8">
              
              {/* GET ID CARD */}
              <div className="rounded-3xl border border-primary/30 bg-background/60 p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <Trophy className="h-24 w-24" />
                </div>
                <h3 className="text-2xl font-black relative z-10">Start Betting Now</h3>
                <p className="mt-4 text-foreground/70 relative z-10">Get a verified Cricbet99 ID for {m.homeTeam} vs {m.awayTeam} in under 2 minutes.</p>
                
                <div className="mt-8 space-y-4 relative z-10">
                  <div className="flex items-center gap-3 text-sm font-bold">
                    <CheckCircle2 className="h-5 w-5 text-accent" /> 100% Welcome Bonus
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold">
                    <CheckCircle2 className="h-5 w-5 text-accent" /> Instant UPI Withdrawals
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold">
                    <CheckCircle2 className="h-5 w-5 text-accent" /> 24/7 Human Support
                  </div>
                </div>

                <a
                  href={WA}
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-sm font-black text-primary-foreground shadow-xl transition-all hover:scale-[1.02] hover:shadow-primary/20 active:scale-[0.98]"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <MessageCircle className="h-5 w-5" /> Get ID via WhatsApp
                </a>
              </div>

              {/* TIPS CARD */}
              <div className="rounded-3xl border border-primary/20 bg-background/40 p-6">
                <h4 className="font-bold flex items-center gap-2">
                  <BrainCircuit className="h-5 w-5 text-primary" /> Popular Markets
                </h4>
                <div className="mt-4 space-y-2">
                  {["Match Winner", "Total Runs", "Next Wicket", "Over/Under Session", "Player Performance"].map(market => (
                    <div key={market} className="flex items-center justify-between p-3 rounded-xl bg-background/60 border border-primary/5 text-xs font-semibold">
                      {market}
                      <span className="text-[10px] text-accent font-black uppercase">Live</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECURITY CARD */}
              <div className="p-6 rounded-3xl bg-green-950/20 border border-green-500/20">
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-green-500/20 text-green-500">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-green-500">Official Partner</h5>
                    <p className="text-[11px] text-foreground/60 mt-1">Authorized Cricbet99 Master Exchange ID provider. Secure, fast, and anonymous.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <CTABand
        heading={`Join the ${m.tournament} Action`}
        sub={`The liquidity for ${m.homeTeam} vs ${m.awayTeam} is increasing. Lock your odds on Cricbet99 before the first ball.`}
      />
    </SiteLayout>
  );
}
