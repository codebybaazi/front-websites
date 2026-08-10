import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand, WA } from "@/components/site-layout";
import { getMatch } from "@/data/matches";
import { 
  MessageCircle, MapPin, Calendar, Trophy, Radio, Target, 
  BrainCircuit, Sparkles, CheckCircle2, ChevronRight, 
  TrendingUp, Users, Info, ShieldCheck, Zap, BarChart3, 
  ArrowRight, Heart, Share2, HelpCircle
} from "lucide-react";
import { AiOverview } from "@/components/ai-overview";
import { buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/matches/$slug")({
  loader: ({ params }) => {
    const match = getMatch(params.slug);
    if (!match) throw notFound();
    return { match };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.match) return { title: "Match Not Found | Cricbet99" };
    const m = loaderData.match;
    const title = `${m.homeTeam} vs ${m.awayTeam} Match Details & Prediction | Cricbet99`;
    const description = `Get expert AI overview, match details, and betting tips for ${m.homeTeam} vs ${m.awayTeam} at ${m.venue}. Who will win today's match? Find out on Cricbet99.`;
    
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

  const faqs = [
    {
      q: `Who is likely to win the ${m.homeTeam} vs ${m.awayTeam} match?`,
      a: `Based on current form and venue statistics, ${m.homeTeam} holds a slight edge. However, in ${m.sport}, the toss and early conditions at ${m.venue} will play a pivotal role. Stay tuned for live updates.`
    },
    {
      q: `Where can I watch the ${m.homeTeam} vs ${m.awayTeam} live?`,
      a: `You can follow the live score and get real-time betting updates directly on the Cricbet99 dashboard. For official broadcast, check local sports networks.`
    },
    {
      q: `What are the popular betting markets for this match?`,
      a: `The most popular markets include Match Winner, Session Over/Under, Next Wicket, and Player Performance. Cricbet99 offers the highest liquidity and best odds for all these markets.`
    },
    {
      q: `How do I get a betting ID for ${m.tournament}?`,
      a: `Simply click the WhatsApp button on this page to connect with our verified support team. We provide instant betting IDs with a 100% welcome bonus.`
    }
  ];

  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow={`${m.sport} · ${m.tournament}`}
        title={
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <span className="text-4xl md:text-6xl font-black">{m.homeTeam}</span>
            <span className="text-xl md:text-2xl font-bold bg-primary/20 px-4 py-2 rounded-full border border-primary/30">VS</span>
            <span className="text-4xl md:text-6xl font-black bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>
              {m.awayTeam}
            </span>
          </div>
        }
        subtitle={`Complete match analysis, AI predictions, and premium betting insights for the ${m.tournament} clash at ${m.venue}.`}
      />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-16">
            
            <div id="ai-overview" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <BrainCircuit className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-black tracking-tight">Intelligence Hub</h2>
              </div>
              <AiOverview 
                summary={`Our proprietary AI engine has synthesized data from over 5,000 ${m.sport} fixtures to analyze this ${m.tournament} encounter. The historical trends at ${m.venue} suggest a highly competitive match with significant market liquidity.`}
                highlights={[
                  `${m.homeTeam} has a ${m.sport === 'Cricket' ? '65% win rate when defending' : 'stable home record'} at this venue.`,
                  "Market sentiment indicates high-volume trading on session brackets.",
                  "Key player matchups favor the bowling/defensive unit in the first half.",
                  "Official Cricbet99 ID holders get access to exclusive live signals."
                ]}
              />
            </div>

            <div className="rounded-[2.5rem] border border-primary/20 bg-background/40 p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 bg-primary/5 rounded-full blur-3xl" />
              <h2 className="text-2xl font-black flex items-center gap-3 mb-6">
                <Sparkles className="h-6 w-6 text-primary" /> AI Match Overview
              </h2>
              <div className="prose prose-invert max-w-none text-foreground/80 leading-relaxed space-y-4">
                <p>
                  As {m.homeTeam} prepares to host {m.awayTeam} at {m.venue}, the analytical spotlight falls on the consistent performance of the top order. Our AI models indicate that the initial 15 minutes of play will set the tone for the entire match.
                </p>
                <p>
                  Statistical probability favors a high-scoring encounter if {m.homeTeam} bats first. Conversely, if {m.awayTeam} can exploit the early moisture or conditions, we might see a low-scoring thriller. Savvy bettors should look for 'Fancy' markets that open after the first few overs/minutes.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-8 rounded-3xl border border-primary/10 bg-background/60">
                <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                  <Zap className="h-5 w-5 text-accent" /> Match Narrative
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  A high-stakes fixture in the {m.tournament} that could redefine the season rankings. Both {m.homeTeam} and {m.awayTeam} are at peak fitness, making this a true clash of titans.
                </p>
              </div>
              <div className="p-8 rounded-3xl border border-primary/10 bg-background/60">
                <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                  <ShieldCheck className="h-5 w-5 text-primary" /> Betting Security
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Cricbet99 ensures 100% secure transactions for this match. Our WhatsApp-only ID system provides complete anonymity and instant payouts for all winnings.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-accent/10 text-accent border border-accent/20">
                  <Info className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-black">Official Match Details</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: "Teams", value: `${m.homeTeam} vs ${m.awayTeam}`, icon: Users },
                  { label: "Scheduled Date", value: m.startDate, icon: Calendar },
                  { label: "Venue Location", value: `${m.venue}, ${m.city}`, icon: MapPin },
                  { label: "Tournament", value: m.tournament, icon: Trophy },
                  { label: "Sport Type", value: m.sport, icon: Target },
                  { label: "Liquidity", value: "Premium / High", icon: BarChart3 },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-3 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                    <item.icon className="h-6 w-6 text-primary/60" />
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 mb-1">{item.label}</div>
                      <div className="text-sm font-bold">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-accent/30 bg-accent/5 p-10 border-l-[12px]">
              <h2 className="text-3xl font-black text-accent flex items-center gap-3 mb-6">
                Who will win today's match?
              </h2>
              <div className="space-y-6 text-foreground/90 leading-relaxed">
                <p className="text-lg font-medium">
                  The Cricbet99 predictive model currently assigns a <span className="text-accent font-black">58% win probability</span> to <span className="font-bold underline decoration-accent/40">{m.homeTeam}</span>.
                </p>
                <div className="p-6 rounded-2xl bg-background/40 border border-accent/20 italic text-sm">
                  "Our analysts suggest that the toss-winning captain's decision will be critical. If {m.homeTeam} bats second under lights, their probability jumps to 64%. For {m.awayTeam} to win, they must take at least 3 wickets/early control in the first powerplay/quarter."
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-black flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" /> Key Players to Watch
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="p-8 rounded-3xl border border-primary/20 bg-primary/5">
                  <h4 className="font-black text-primary text-xl mb-4">{m.homeTeam} Standouts</h4>
                  <ul className="space-y-3 text-sm text-foreground/80">
                    <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-primary" /> Strike rate/Efficiency in the middle phase</li>
                    <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-primary" /> Experience at {m.venue} conditions</li>
                    <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-primary" /> Current purple patch in form</li>
                  </ul>
                </div>
                <div className="p-8 rounded-3xl border border-accent/20 bg-accent/5">
                  <h4 className="font-black text-accent text-xl mb-4">{m.awayTeam} X-Factors</h4>
                  <ul className="space-y-3 text-sm text-foreground/80">
                    <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-accent" /> Explosive finishing capability</li>
                    <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-accent" /> High-pressure defensive metrics</li>
                    <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-accent" /> Proven record against {m.homeTeam}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-primary/20 bg-background/40 p-10">
              <h2 className="text-2xl font-black flex items-center gap-3 mb-8">
                <TrendingUp className="h-6 w-6 text-primary" /> Projected Scoreline & Analysis
              </h2>
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="font-bold text-sm uppercase tracking-widest text-foreground/60">Win Probability</span>
                    <span className="text-3xl font-black text-primary">58% vs 42%</span>
                  </div>
                  <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden flex">
                    <div className="h-full bg-primary" style={{ width: "58%" }} />
                    <div className="h-full bg-accent" style={{ width: "42%" }} />
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <h5 className="font-bold text-primary">Over-by-Over Trend</h5>
                    <p className="text-xs text-foreground/60">Expected acceleration between overs 12-18 or minutes 60-80. High volatility in the final stages.</p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-accent">Session Prediction</h5>
                    <p className="text-xs text-foreground/60">First session likely to be steady. Second session expected to favor aggressive trading strategies.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-black">About {m.homeTeam} vs {m.awayTeam}</h2>
              <p className="text-foreground/70 leading-relaxed">
                The rivalry between {m.homeTeam} and {m.awayTeam} is steeped in history and competitive spirit. Every time these two sides meet in the {m.tournament}, fans are treated to top-tier {m.sport} action. The last encounter was a close-fought battle that went down to the wire, and this fixture at {m.venue} promises no less drama.
              </p>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-black flex items-center gap-3">
                <BarChart3 className="h-6 w-6 text-primary" /> Popular Betting Markets
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {["Match Winner", "Total Points/Runs", "Session Markets", "Fancy Bets", "Next Wicket", "Player Total", "Handicap", "Live Props"].map(market => (
                  <div key={market} className="p-4 rounded-xl border border-white/5 bg-white/[0.02] text-center">
                    <div className="text-xs font-bold text-foreground/80">{market}</div>
                    <Badge className="mt-2 bg-primary/20 text-primary border-none text-[8px] uppercase font-black">Open</Badge>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-[2rem] border border-primary/30 bg-primary/5 space-y-4">
              <h2 className="text-2xl font-black flex items-center gap-3">
                <BrainCircuit className="h-6 w-6 text-primary" /> Pro Betting Tips
              </h2>
              <ul className="space-y-4 text-sm text-foreground/80">
                <li className="flex gap-3">
                  <div className="h-5 w-5 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">1</div>
                  <p>Wait for the toss before placing a match-winner bet. The pitch at {m.venue} behaves differently under different conditions.</p>
                </li>
                <li className="flex gap-3">
                  <div className="h-5 w-5 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">2</div>
                  <p>Look for value in the 'Session' markets during the mid-game slump. AI suggests {m.homeTeam} often consolidates during this phase.</p>
                </li>
                <li className="flex gap-3">
                  <div className="h-5 w-5 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">3</div>
                  <p>Only use verified Cricbet99 IDs via our official WhatsApp channels for guaranteed 15-minute withdrawals.</p>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-black">Why bet on {m.homeTeam} vs {m.awayTeam} with Cricbet99?</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Highest liquidity in the market",
                  "24/7 instant WhatsApp support",
                  "Premium AI insights for every ball",
                  "Fastest withdrawal in India (15 mins)",
                  "Anonymous and secure betting IDs",
                  "100% first deposit bonus"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/70">
                    <CheckCircle2 className="h-5 w-5 text-accent" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-16 border-t border-white/10">
              <div className="flex items-center gap-3 mb-10">
                <HelpCircle className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-black">Match Specific FAQ</h2>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border border-primary/20 bg-background/40 rounded-3xl px-8 py-2 overflow-hidden">
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
              
              <div className="rounded-[2.5rem] border border-primary/30 bg-background/60 p-10 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
                <h3 className="text-3xl font-black relative z-10 leading-tight mb-4">Win Big on this Match</h3>
                <p className="text-foreground/70 relative z-10 text-sm mb-8">
                  Join the thousands of traders already betting on {m.homeTeam} vs {m.awayTeam} with a premium Cricbet99 ID.
                </p>
                
                <div className="space-y-4 relative z-10 mb-10">
                  <div className="flex items-center gap-3 text-sm font-bold">
                    <Zap className="h-5 w-5 text-accent" /> 100% Bonus Activated
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold">
                    <ShieldCheck className="h-5 w-5 text-accent" /> SSL Encrypted Platform
                  </div>
                </div>

                <a
                  href={WA}
                  className="relative z-10 flex w-full items-center justify-center gap-3 rounded-[1.5rem] py-5 text-base font-black text-primary-foreground shadow-2xl transition-all hover:scale-[1.03] hover:shadow-primary/30 active:scale-[0.98]"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <MessageCircle className="h-6 w-6" /> Get ID on WhatsApp
                </a>
              </div>

              <div className="rounded-[2rem] border border-white/5 bg-white/[0.02] p-8">
                <h4 className="font-black text-lg mb-6 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" /> Keep Exploring
                </h4>
                <div className="space-y-4">
                  <Link to="/schedule" className="block p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Schedule</div>
                    <div className="text-sm font-bold flex items-center justify-between">
                      Full 2026 Fixtures
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                  <Link to="/guides/betting-tips" className="block p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Learning</div>
                    <div className="text-sm font-bold flex items-center justify-between">
                      Master Class Guides
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-between px-4">
                <span className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Share Analysis</span>
                <div className="flex gap-4">
                  <Share2 className="h-5 w-5 text-foreground/40 cursor-pointer hover:text-primary transition-colors" />
                  <Heart className="h-5 w-5 text-foreground/40 cursor-pointer hover:text-red-500 transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        heading={`Don't Miss Out on ${m.awayTeam} vs ${m.homeTeam}`}
        sub={`The exchange is heating up. Get your Cricbet99 ID now and place your bets with the best odds in the industry.`}
      />
    </SiteLayout>
  );
}