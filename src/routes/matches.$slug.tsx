import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand, WA } from "@/components/site-layout";
import { getCricketMatch } from "@/data/cricket-fixtures";
import { MessageCircle, MapPin, Calendar, Trophy, Radio, Target, BrainCircuit, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import { AiOverview } from "@/components/ai-overview";

export const Route = createFileRoute("/matches/$slug")({
  loader: ({ params }) => {
    const match = getCricketMatch(params.slug);
    if (!match) throw notFound();
    return { match };
  },
  component: MatchDetailPage,
  notFoundComponent: () => (
    <SiteLayout>
      <PageHero eyebrow="Match" title="Match not found" subtitle="The match details you're looking for aren't available." />
      <div className="mx-auto max-w-3xl px-6 pb-16 text-center">
        <Link to="/schedule" className="text-primary hover:underline">← Back to schedule</Link>
      </div>
    </SiteLayout>
  ),
});

function MatchDetailPage() {
  const { match: m } = Route.useLoaderData();

  return (
    <SiteLayout>
      <PageHero
        wide
        eyebrow={`${m.format} · ${m.tournament}`}
        title={
          <>
            {m.homeTeam} vs{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>
              {m.awayTeam}
            </span>
          </>
        }
        subtitle={`Detailed match analysis, live betting insights, and betting IDs for ${m.homeTeam} vs ${m.awayTeam} at ${m.venue}.`}
      />

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <AiOverview 
              summary={`Detailed preview of the ${m.match} between ${m.homeTeam} and ${m.awayTeam}. Our analysis covers pitch conditions, team form, and strategic betting markets for this encounter at ${m.venue}.`}
              highlights={[
                "Expert team form analysis",
                "Verified venue & pitch report",
                "Deep-dive betting market insights",
                "24/7 WhatsApp ID support"
              ]}
            />

            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-black">Quick Summary</h2>
              <p>The {m.match} promises high-stakes action between {m.homeTeam} and {m.awayTeam}. As both teams prepare at the {m.venue}, traders are closely watching the opening odds and session markets for any early value.</p>
              
              <h2 className="text-3xl font-black">Match Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-primary/20 bg-background/60">
                  <div className="text-xs font-bold uppercase tracking-widest text-primary">Teams</div>
                  <div className="mt-1 font-bold">{m.homeTeam} vs {m.awayTeam}</div>
                </div>
                <div className="p-4 rounded-xl border border-primary/20 bg-background/60">
                  <div className="text-xs font-bold uppercase tracking-widest text-primary">Date</div>
                  <div className="mt-1 font-bold">{m.date}</div>
                </div>
                <div className="col-span-2 p-4 rounded-xl border border-primary/20 bg-background/60">
                  <div className="text-xs font-bold uppercase tracking-widest text-primary">Venue</div>
                  <div className="mt-1 font-bold">{m.venue}</div>
                </div>
              </div>

              <h2 className="text-3xl font-black">Who will win today's match?</h2>
              <p>Predicting the winner in {m.format} requires deep analysis. While {m.homeTeam} holds the home-field advantage, {m.awayTeam}'s recent form makes them a formidable opponent. Traders should wait for the toss before locking in major positions.</p>
            </div>

            {/* Betting CTA */}
            <div className="rounded-3xl border border-primary/25 bg-background/60 p-8">
              <h3 className="text-2xl font-black">Ready to place your bet?</h3>
              <p className="mt-2 text-foreground/80">Get your Cricbet99 betting ID now for live session rates, fancy markets, and instant settlements.</p>
              <a
                href={WA}
                className="mt-6 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-primary-foreground shadow-2xl transition-transform hover:scale-[1.03]"
                style={{ background: "var(--gradient-gold)" }}
              >
                <MessageCircle className="h-5 w-5" /> Get ID for {m.match}
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="rounded-3xl border border-primary/20 bg-background/60 p-6">
              <h3 className="font-bold flex items-center gap-2">
                <BrainCircuit className="h-5 w-5 text-primary" /> Betting Tips
              </h3>
              <ul className="mt-4 space-y-3">
                {["Monitor toss impact", "Check pitch reports", "Look for value in session", "Diversify your stakes"].map(t => (
                  <li key={t} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="h-4 w-4 text-accent" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        heading={`Live action on ${m.match}`}
        sub={`Don't miss the best odds for ${m.tournament}. Message us to trade live.`}
      />
    </SiteLayout>
  );
}
