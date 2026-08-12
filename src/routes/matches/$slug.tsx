import { createFileRoute, Link } from '@tanstack/react-router'
import { getMatch } from '@/data/matches'
import { SiteLayout, PageHero, CTABand } from '@/components/site-layout'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Trophy, 
  Calendar, 
  MapPin, 
  TrendingUp, 
  Target, 
  Users, 
  ShieldCheck, 
  ChevronRight,
  Info,
  Clock
} from 'lucide-react'
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from '@/components/long-form-page'
import { AiOverview } from '@/components/ai-overview'

export const Route = createFileRoute('/matches/$slug')({
  loader: ({ params }) => {
    const match = getMatch(params.slug)
    if (!match) throw new Error('Match not found')
    return { match }
  },
  head: ({ loaderData }: { loaderData: { match: any } }) => {
    const { match } = loaderData
    if (!match) return {}
    const description = `Live betting analysis for ${match.homeTeam} vs ${match.awayTeam} in ${match.tournament}. Get expert predictions, tactical previews, and top markets on Cricbet99.`
    
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `https://cricbet99.co.in/matches/${match.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `https://cricbet99.co.in/matches/${match.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(buildBreadcrumbJsonLd(`/matches/${match.slug}`, `${match.homeTeam} vs ${match.awayTeam}`)),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsEvent",
            "name": `${match.homeTeam} vs ${match.awayTeam}`,
            "startDate": match.startDate,
            "location": {
              "@type": "Place",
              "name": match.venue,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": match.city,
                "addressCountry": match.country
              }
            },
            "sport": match.sport,
            "homeTeam": { "@type": "SportsTeam", "name": match.homeTeam },
            "awayTeam": { "@type": "SportsTeam", "name": match.awayTeam }
          }),
        }
      ],
    }
  },
  component: MatchDetail,
})

function MatchDetail() {
  const { match } = Route.useLoaderData()

  return (
    <SiteLayout>
      <nav className="mx-auto max-w-7xl px-6 py-3" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs font-medium text-foreground/60">
          <li>
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          </li>
          <ChevronRight className="h-3 w-3 shrink-0" />
          <li>
            <Link to="/matches" className="hover:text-primary transition-colors">Matches</Link>
          </li>
          <ChevronRight className="h-3 w-3 shrink-0" />
          <li className="text-primary font-bold" aria-current="page">
            {match.homeTeam} vs {match.awayTeam}
          </li>
        </ol>
      </nav>

      <div className="bg-black text-white py-12 border-b border-zinc-800">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <Badge variant="outline" className="text-[#D4AF37] border-[#D4AF37] mb-4">
                {match.tournament}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-black mb-4">
                {match.homeTeam} <span className="text-zinc-600">vs</span> {match.awayTeam}
              </h1>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-zinc-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {match.startDate}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> {match.venue}, {match.city}
                </div>
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  <Trophy className="w-4 h-4" /> {match.sport} Fixture
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-4 min-w-[300px] p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800">
              <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Win Probability</div>
              <div className="w-full flex items-center gap-4">
                <div className="flex-1 text-center">
                  <div className="text-2xl font-black text-[#D4AF37]">{match.winProbHome}%</div>
                  <div className="text-[10px] text-zinc-500 truncate">{match.homeTeam}</div>
                </div>
                <div className="h-8 w-[1px] bg-zinc-800" />
                <div className="flex-1 text-center">
                  <div className="text-2xl font-black text-white">{match.winProbAway}%</div>
                  <div className="text-[10px] text-zinc-500 truncate">{match.awayTeam}</div>
                </div>
              </div>
              <Button asChild className="w-full bg-[#D4AF37] hover:bg-[#B8962E] text-black font-bold mt-2">
                <a href="https://wa.me/918000000000" target="_blank" rel="noopener noreferrer">Place Your Bet</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-6 h-6 text-[#D4AF37]" />
                <h2 className="text-2xl font-black">AI Match Overview</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-zinc-300 leading-relaxed italic border-l-4 border-[#D4AF37] pl-6 py-2 bg-zinc-900/30">
                  {match.predictionInsight}
                </p>
                <div className="mt-8 space-y-4 text-zinc-400">
                  <p>{match.detailedNarrative || "Expert tactical analysis forthcoming..."}</p>
                </div>
              </div>
            </section>

            <section className="bg-zinc-900/50 rounded-3xl p-8 border border-zinc-800">
              <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                Tactical Preview & Head-to-Head
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-bold text-zinc-500 uppercase mb-3">Recent Performance</h4>
                  <p className="text-sm text-zinc-300">{match.homeRecentForm || "N/A"}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-500 uppercase mb-3">Head-to-Head Record</h4>
                  <p className="text-sm text-zinc-300">{match.headToHead || "N/A"}</p>
                </div>
              </div>
              <div className="mt-8 p-4 bg-black/40 rounded-xl border border-zinc-800">
                <h4 className="text-sm font-bold text-[#D4AF37] uppercase mb-2">Pitch & Conditions</h4>
                <p className="text-sm text-zinc-400">{match.pitchReport || match.surface || "Standard international conditions expected."}</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-black mb-6">Popular Betting Markets</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {match.marketHighlights.map((market, idx) => (
                  <div key={idx} className="p-4 bg-zinc-900/30 border border-zinc-800 rounded-xl text-center hover:border-[#D4AF37]/50 transition-colors">
                    <div className="text-xs text-[#D4AF37] font-bold mb-1">Available</div>
                    <div className="text-sm font-medium">{market}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="p-6 bg-[#D4AF37]/5 rounded-3xl border border-[#D4AF37]/20">
              <h3 className="text-lg font-black mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#D4AF37]" />
                Betting Tips
              </h3>
              <ul className="space-y-4">
                {(match.bettingTips || ["Back the chasing team under lights", "Watch the first 10 overs before trading"]).map((tip, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-zinc-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-zinc-900/50 rounded-3xl border border-zinc-800">
              <h3 className="text-lg font-black mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-zinc-500" />
                Key Players to Watch
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase mb-2 font-bold">{match.homeTeam}</div>
                  <div className="flex flex-wrap gap-2">
                    {(match.keyPlayersHome || ["TBA"]).map((p, i) => (
                      <Badge key={i} variant="secondary" className="bg-zinc-800 text-zinc-300">{p}</Badge>
                    ))}
                  </div>
                </div>
                <div className="h-[1px] bg-zinc-800" />
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase mb-2 font-bold">{match.awayTeam}</div>
                  <div className="flex flex-wrap gap-2">
                    {(match.keyPlayersAway || ["TBA"]).map((p, i) => (
                      <Badge key={i} variant="secondary" className="bg-zinc-800 text-zinc-300">{p}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-black rounded-3xl border border-zinc-800">
              <h3 className="text-lg font-black mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-zinc-500" />
                Quick Summary
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-zinc-500">Format:</span>
                  <span className="text-zinc-300">{match.sport}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-zinc-500">Venue:</span>
                  <span className="text-zinc-300 truncate ml-4">{match.venue}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-zinc-500">Start Time:</span>
                  <span className="text-zinc-300">{match.startDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <AiOverview 
            summary={`${match.homeTeam} vs ${match.awayTeam} Tactical Intelligence: Our analysis identifies critical performance markers at ${match.venue} that will dictate market movements.`}
            highlights={[
              "Historical head-to-head bias detection",
              "Surface condition impact modeling",
              "Real-time squad form evaluation",
              "Market liquidity indicators for safe trading"
            ]}
          />
        </div>
      </div>

      <CTABand 
        heading={`Ready to bet on ${match.homeTeam} vs ${match.awayTeam}?`}
        sub="Get your Cricbet99 ID in 60 seconds and start trading with India's most trusted exchange." 
      />
    </SiteLayout>
  )
}
