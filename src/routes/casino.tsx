import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHeadFor } from '@/utils/page-seo'
import { Swords, Star, Zap, Flame, Trophy, PlayCircle, Grid3X3, Filter, Spade, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

import { z } from 'zod'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'
import { ReviewedBadge } from '@/components/ReviewedBadge'
import { CONTENT_REVIEWED } from '@/lib/content-review-dates'
import { waLink } from '@/lib/whatsapp'

import teenPattiImg from '@/assets/betting/teen-patti.jpg'
import liveCasinoImg from '@/assets/betting/live-casino.jpg'
import andarBaharImg from '@/assets/play/andar-bahar.jpg'
import dragonTigerImg from '@/assets/play/dragon-tiger.jpg'
import baccaratImg from '@/assets/play/baccarat.jpg'
import lucky7Img from '@/assets/play/lucky-7.jpg'
import cards32Img from '@/assets/play/32-cards.jpg'
import rouletteImg from '@/assets/play/roulette.jpg'
import blackjackImg from '@/assets/play/blackjack.jpg'
import wheelShowImg from '@/assets/play/wheel-show.jpg'
import sicBoImg from '@/assets/play/sic-bo.jpg'
import slotsImg from '@/assets/play/slots.jpg'

const searchSchema = z.object({
  type: z.string().optional(),
})

export const Route = createFileRoute('/casino')({
  validateSearch: (search) => searchSchema.parse(search),
  component: CasinoPage,
  head: () => pageHeadFor('/casino')
})


const categories = [
  { name: 'All Games', icon: Grid3X3 },
  { name: 'Indian Cards', icon: Spade },
  { name: 'Live Casino', icon: PlayCircle },
  { name: 'Slots', icon: Zap },
  { name: 'Table Games', icon: Swords },
  { name: 'Popular', icon: Trophy },
]

type Game = {
  id: number
  name: string
  provider: string
  image: string
  category: 'Indian Cards' | 'Live Casino' | 'Slots' | 'Table Games'
  isHot?: boolean
  popular?: boolean
}

const games: Game[] = [
  { id: 1, name: 'Teen Patti', provider: 'Live dealer', image: teenPattiImg, category: 'Indian Cards', isHot: true, popular: true },
  { id: 2, name: 'Andar Bahar', provider: 'Live dealer', image: andarBaharImg, category: 'Indian Cards', isHot: true, popular: true },
  { id: 3, name: 'Dragon Tiger', provider: 'Live dealer', image: dragonTigerImg, category: 'Indian Cards', popular: true },
  { id: 4, name: 'Lucky 7', provider: 'Live dealer', image: lucky7Img, category: 'Indian Cards' },
  { id: 5, name: '32 Cards', provider: 'Live dealer', image: cards32Img, category: 'Indian Cards' },
  { id: 6, name: 'Baccarat', provider: 'Studio table', image: baccaratImg, category: 'Live Casino', popular: true },
  { id: 7, name: 'Live dealer floor', provider: 'HD stream', image: liveCasinoImg, category: 'Live Casino', isHot: true },
  { id: 8, name: 'Roulette', provider: 'European', image: rouletteImg, category: 'Live Casino', popular: true },
  { id: 9, name: 'Blackjack', provider: 'Seat open', image: blackjackImg, category: 'Table Games', popular: true },
  { id: 10, name: 'Wheel shows', provider: 'Game show', image: wheelShowImg, category: 'Live Casino', isHot: true },
  { id: 11, name: 'Sic Bo', provider: 'Dice table', image: sicBoImg, category: 'Table Games' },
  { id: 12, name: 'Slots', provider: 'Reels & jackpots', image: slotsImg, category: 'Slots', popular: true },
]

function CasinoPage() {
  const { type } = Route.useSearch() as { type?: string }
  const categoryFor = (t?: string) =>
    t === 'live' ? 'Live Casino' :
    t === 'slots' ? 'Slots' :
    t === 'indian' ? 'Indian Cards' :
    'All Games'
  const [activeCategory, setActiveCategory] = useState(categoryFor(type))

  useEffect(() => {
    if (type) setActiveCategory(categoryFor(type))
  }, [type])

  const visibleGames = games.filter((g) =>
    activeCategory === 'All Games' ? true :
    activeCategory === 'Popular' ? g.popular :
    g.category === activeCategory
  )


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.705_0.198_142_/_0.08),transparent_55%)]" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-[2px] w-8 brand-rule" />
              <span className="kicker">Same ID as cricket</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]">
              Live tables on the same cricket ID
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Teen Patti, Andar Bahar, roulette and blackjack use the Fairplay wallet you already fund with UPI.
            </p>
            <ReviewedBadge iso={CONTENT_REVIEWED["/casino"]} className="justify-center" />
          </motion.div>

          <div className="max-w-5xl mx-auto mb-12 px-4">
            <AIOverview title="Live casino" />
          </div>
        </div>
      </section>

      {/* Casino Sub-Header / Categories */}
      <div className="sticky top-16 z-40 w-full bg-card border-b border-border shadow-md">
        <div className="container max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex items-center gap-2 py-3">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-2 px-5 py-2 rounded-md text-sm font-semibold whitespace-nowrap transition-all border ${
                  activeCategory === cat.name 
                    ? 'bg-primary text-primary-foreground border-primary' 
                    : 'bg-background border-border text-muted-foreground hover:border-primary/50'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.name}
              </button>
            ))}
            <div className="h-8 w-px bg-border mx-2" />
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground">
              <Filter className="w-4 h-4" /> Providers
            </button>
          </div>
        </div>
      </div>

      <main className="container max-w-7xl mx-auto px-4 py-8">
        {/* Banner Section */}
        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-12 group">
          <img 
            src={liveCasinoImg}
            width={1024}
            height={1024}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt="Fairplay live casino floor"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent flex flex-col justify-center p-8 md:p-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Monday <span className="text-primary">cashback</span>
            </h2>
            <p className="text-white/80 max-w-md mb-8 text-lg">A share of net table losses can return on Monday if the Fairplay ID is verified. Ask WhatsApp whether it is on your account.</p>
            <Link to="/bonus" className="w-fit px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-flame hover:text-flame-foreground transition-colors">
              Bonus terms
            </Link>
          </div>
        </div>

        {/* Game Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold tracking-tight">
              {activeCategory}
            </h3>
            <span className="text-xs font-semibold text-muted-foreground">{visibleGames.length} tables</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {visibleGames.map((game, i) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-primary/20 transition-all border border-border hover:border-primary/50 cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={`${game.name} table on Fairplay`}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {game.isHot && (
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-flame text-flame-foreground text-[8px] font-semibold rounded-md shadow-lg flex items-center gap-1">
                      <Flame className="w-2.5 h-2.5 fill-current" /> Busy
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-3 bg-primary rounded-md text-primary-foreground shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform">
                      <PlayCircle className="w-10 h-10" />
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-semibold text-xs truncate group-hover:text-primary transition-colors">{game.name}</h4>
                  <p className="text-[10px] text-muted-foreground tracking-tight">{game.provider}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 flex flex-col items-start justify-between gap-4 rounded-xl border border-white/8 bg-card/70 p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h3 className="text-xl font-bold tracking-tight">Take a seat — get your Fairplay ID</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                One ID opens every table above plus cricket markets. The desk sets it up on WhatsApp in about two minutes, funded over UPI.
              </p>
            </div>
            <a
              href={waLink('I want a Fairplay ID for the live casino tables')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-flame hover:text-flame-foreground"
            >
              Get your ID on WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
          </div>

        </div>
      </main>

      {/* Winners Feed - Desktop Only */}
      <section className="bg-card/30 border-t border-border py-8 mt-12 overflow-hidden hidden md:block">
        <div className="container max-w-7xl mx-auto px-4 flex items-center gap-8">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Star className="w-5 h-5 text-primary fill-current" />
            <h4 className="font-semibold text-sm tracking-tight">Recent results</h4>
          </div>
          <div className="flex-1 overflow-hidden relative">
            <div className="flex gap-12 animate-marquee whitespace-nowrap">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="flex items-center gap-3 text-xs font-semibold">
                  <span className="text-muted-foreground">User****{i}29</span>
                  <span className="text-green-500">₹{Math.floor(Math.random() * 50000)}</span>
                  <span className="text-muted-foreground opacity-50">in Book of Dead</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection 
        title="Live casino questions"
        faqs={[
          { q: "Is Fairplay live casino on the same ID as cricket?", a: "Yes. Teen Patti, Andar Bahar, roulette and tables use the Fairplay ID and UPI wallet you already use for IPL." },
          { q: "Can I play Teen Patti and Andar Bahar?", a: "Yes. Fairplay lists Indian tables with live dealers, plus roulette and blackjack. Limits start low on some tables (often ₹10–₹50)." },
          { q: "How do I deposit for casino?", a: "Same deposit guide as sports. Credit the Fairplay wallet, then open the casino lobby. Do not send UPI to a dealer chat." },
          { q: "Does the Fairplay app include casino?", a: "The same ID works on the app. Stream quality follows your connection; it does not need a second registration." }
        ]}
      />


      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
