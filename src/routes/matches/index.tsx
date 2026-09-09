import { createFileRoute } from '@tanstack/react-router'
import { matches } from '@/data/matches'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import { Play, Trophy, Calendar, TrendingUp } from 'lucide-react'
import { buildBreadcrumbJsonLd } from '@/components/long-form-page'
import { AiOverview } from '@/components/ai-overview'

export const Route = createFileRoute('/matches/')({
  head: () => ({
    meta: [
      { title: "Live Matches & Betting Predictions | Cricbet99 Official" },
      { name: "description", content: "Stay updated with live cricket, football, and tennis matches. Get expert betting predictions, tactical previews, and real-time odds on Cricbet99." },
      { property: "og:title", content: "Live Matches & Betting Predictions — Cricbet99" },
      { property: "og:description", content: "Expert match analysis and live betting predictions for today's top sports events." },
      { property: "og:url", content: "https://cricbet99.co.in/matches" },

    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/matches" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/matches", "Live Matches")),
      },
    ],
  }),
  component: MatchesDashboard,
})

function MatchesDashboard() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <Badge variant="outline" className="text-[#D4AF37] border-[#D4AF37] mb-2">
              <Play className="w-3 h-3 mr-1 fill-current animate-pulse" /> Live & Upcoming
            </Badge>
            <h1 className="text-4xl break-words md:text-5xl break-words font-bold text-white mb-2">
              Sports Betting <span className="text-[#D4AF37]">Intelligence</span>
            </h1>
            <p className="text-zinc-400 max-w-2xl text-lg">
              Data-driven match analysis and predictive insights across Cricket, Football, and Tennis.
            </p>
          </div>
          <div className="flex gap-4">
            <Button asChild className="bg-[#D4AF37] hover:bg-[#B8962E] text-black font-bold">
              <Link to="/schedule">View Full Schedule</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {matches.map((match) => (
            <Card key={match.slug} className="bg-zinc-900/50 border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-300 group overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-3">
                  <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">
                    {match.sport}
                  </Badge>
                  <div className="flex items-center text-xs text-zinc-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    {match.startDate}
                  </div>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                  {match.homeTeam} vs {match.awayTeam}
                </CardTitle>
                <div className="text-sm text-zinc-500 font-medium">
                  {match.tournament}
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-6 p-3 bg-black/40 rounded-xl border border-zinc-800/50">
                  <div className="flex-1 text-center">
                    <div className="w-12 h-12 bg-zinc-800 rounded-full mx-auto mb-2 flex items-center justify-center text-[#D4AF37] font-bold border border-zinc-700">
                      {match.homeTeam.charAt(0)}
                    </div>
                    <div className="text-xs text-zinc-300 font-medium truncate">{match.homeTeam}</div>
                  </div>
                  <div className="text-[#D4AF37] font-bold text-lg italic">VS</div>
                  <div className="flex-1 text-center">
                    <div className="w-12 h-12 bg-zinc-800 rounded-full mx-auto mb-2 flex items-center justify-center text-[#D4AF37] font-bold border border-zinc-700">
                      {match.awayTeam.charAt(0)}
                    </div>
                    <div className="text-xs text-zinc-300 font-medium truncate">{match.awayTeam}</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                    <p className="text-sm text-zinc-400 italic line-clamp-2">
                      "{match.predictionInsight || "Expert tactical preview available..."}"
                    </p>
                  </div>
                </div>

                <div className="mt-auto">
                  <Button asChild className="w-full bg-zinc-800 hover:bg-[#D4AF37] text-white hover:text-black border-none transition-all duration-300">
                    <Link to="/matches/$slug" params={{ slug: match.slug }}>
                      Analysis & Predictions
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <AiOverview 
          summary="Cricbet99 Match Analytics Engine: Live processing of historical data, venue conditions, and squad form to deliver edge-based betting insights."
          highlights={[
            "Real-time Probability Adjustments",
            "Expert Tactical Deconstructions",
            "Market Sentiment Indicators",
            "Weather & Ground Impact Assessment"
          ]}
        />
      </div>
    </div>
  )
}
