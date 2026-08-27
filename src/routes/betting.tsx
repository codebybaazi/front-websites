import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHeadFor } from '@/utils/page-seo'
import { Trophy, Swords, Zap, Search, ChevronRight, PlayCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

import { z } from 'zod'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'


const searchSchema = z.object({
  category: z.string().optional(),
})

export const Route = createFileRoute('/betting')({
  validateSearch: (search) => searchSchema.parse(search),
  component: BettingPage,
  head: () => pageHeadFor('/betting')
})


const sports = [
  { name: 'Cricket', icon: Trophy, count: 42 },
  { name: 'Soccer', icon: Zap, count: 128 },
  { name: 'Tennis', icon: Zap, count: 15 },
  { name: 'Basketball', icon: Zap, count: 24 },
  { name: 'eSports', icon: Zap, count: 8 },
]

const liveMatches = [
  {
    id: 1,
    sport: 'Cricket',
    league: 'IPL 2026',
    teams: ['Mumbai Indians', 'Chennai Super Kings'],
    score: '154/4 (17.2) - 148/8 (20)',
    odds: { 1: '1.85', x: '12.0', 2: '2.10' },
    isLive: true
  },
  {
    id: 2,
    sport: 'Soccer',
    league: 'Premier League',
    teams: ['Liverpool', 'Arsenal'],
    score: '2 - 1',
    odds: { 1: '1.45', x: '4.20', 2: '6.50' },
    isLive: true
  }
]

function BettingPage() {
  const { category } = Route.useSearch() as { category?: string }
  const [selectedSport, setSelectedSport] = useState(category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Cricket')

  useEffect(() => {
    if (category) {
      setSelectedSport(category.charAt(0).toUpperCase() + category.slice(1))
    }
  }, [category])

  return (
    <div className="flex flex-col bg-background text-foreground overflow-hidden">
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.08),transparent_70%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-widest uppercase mb-8">
              <Trophy className="w-4 h-4 fill-primary" /> Cricket, football, tennis
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9]">
              Sports <span className="text-primary not-italic">exchange</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Cricket, football and tennis on one Fairplay ID. Live odds, IPL books, FIFA and set betting — same wallet as casino.
            </p>
          </motion.div>

          <div className="container max-w-5xl mx-auto px-4 mb-12">
            <AIOverview title="AI Overview: Betting" />
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar - Sports List */}
      <aside className="w-full lg:w-64 bg-card border-r border-border p-4 lg:sticky lg:top-16 lg:h-[calc(100vh-64px)] overflow-y-auto">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search sports..." 
            className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary"
          />
        </div>
        
        <div className="space-y-1">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-2 mb-2">All Sports</p>
          {sports.map((sport) => (
            <button
              key={sport.name}
              onClick={() => setSelectedSport(sport.name)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedSport === sport.name ? 'bg-primary/10 text-primary font-bold' : 'hover:bg-accent text-muted-foreground'
              }`}
            >
              <div className="flex items-center gap-3">
                <sport.icon className="w-4 h-4" />
                {sport.name}
              </div>
              <span className="text-[10px] bg-background px-1.5 py-0.5 rounded border border-border">{sport.count}</span>
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content - Odds & Matches */}
      <main className="flex-1 bg-background p-4 lg:p-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black italic uppercase tracking-tight">
                Live <span className="text-primary not-italic">{selectedSport}</span>
              </h2>
              <p className="text-sm text-muted-foreground">Highest odds and real-time score updates</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">ALL EVENTS</button>
              <button className="px-4 py-2 bg-card text-muted-foreground text-xs font-bold rounded-full border border-border">OUTRIGHTS</button>
            </div>
          </header>

          <div className="space-y-4">
            {liveMatches.map((match) => (
              <motion.div 
                key={match.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all shadow-lg"
              >
                <div className="bg-primary/5 px-4 py-2 flex items-center justify-between border-b border-border/50">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-1.5">
                    <PlayCircle className="w-3 h-3 fill-current animate-pulse" /> LIVE
                  </span>
                  <span className="text-[10px] text-muted-foreground font-bold">{match.league}</span>
                </div>
                
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="flex items-center justify-between">
                    <div className="space-y-4 flex-1">
                      {match.teams.map((team, idx) => (
                        <div key={team} className="flex items-center justify-between">
                          <span className="font-bold text-lg">{team}</span>
                          <span className={idx === 0 ? "text-primary font-black" : "text-muted-foreground"}>
                            {match.score.split(' - ')[idx]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    {Object.entries(match.odds).map(([key, value]) => (
                      <button 
                        key={key}
                        className="p-3 bg-background border border-border rounded-lg group hover:bg-primary hover:border-primary transition-all shadow-inner"
                      >
                        <span className="block text-[10px] text-muted-foreground group-hover:text-primary-foreground mb-1 uppercase font-bold">
                          {key === '1' ? 'Home' : key === '2' ? 'Away' : 'Draw'}
                        </span>
                        <span className="text-lg font-black group-hover:text-primary-foreground">{value}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-8 border-2 border-dashed border-border rounded-3xl text-center">
            <Trophy className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="font-bold text-muted-foreground">More events loading...</h3>
          </div>
        </div>
      </main>

      {/* Right Sidebar - Bet Slip (Simplified) */}
      <aside className="w-full lg:w-80 bg-card border-l border-border p-6 lg:sticky lg:top-16 lg:h-[calc(100vh-64px)]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-black italic uppercase tracking-tight text-xl">Bet <span className="text-primary not-italic">Slip</span></h2>
          <span className="bg-primary text-primary-foreground text-[10px] font-black px-2 py-0.5 rounded">0</span>
        </div>
        
        <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-border rounded-2xl bg-background/50 text-center px-4">
          <Zap className="w-8 h-8 text-muted-foreground/20 mb-4" />
          <p className="text-sm text-muted-foreground">Your bet slip is empty. Select odds to start betting.</p>
        </div>

        <div className="mt-8 space-y-4">
          <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
            <h4 className="text-xs font-black uppercase text-primary mb-2">Quick Deposit</h4>
            <div className="grid grid-cols-3 gap-2">
              {['₹500', '₹1000', '₹5000'].map(val => (
                <button key={val} className="py-2 bg-background border border-border rounded text-[10px] font-bold hover:border-primary">{val}</button>
              ))}
            </div>
          </div>
        </div>
      </aside>
      </div>

      <FAQSection 
        title="Sports Exchange FAQ"
        faqs={[
          { q: "What can I bet on the Fairplay exchange?", a: "Cricket (IPL, T20, ODI, Test), football and tennis on one Fairplay ID. Live odds and in-play books when the fixture is listed. Casino is a separate lobby on the same wallet." },
          { q: "What is back and lay on Fairplay?", a: "Back means you are with the outcome (for example India to win). Lay means you are against it. Unmatched bets can be cancelled; matched bets stay on the exchange." },
          { q: "Do I need a Fairplay ID first?", a: "Yes. Get the ID, deposit with UPI, then open cricket or football. The schedule links each fixture to a match page." },
          { q: "Minimum stake on the sports exchange?", a: "Often around ₹10 on main cricket books. Check the slip. Withdraw after settlement, usually within 180 minutes of the result." }
        ]}
      />
    </div>

  )
}
