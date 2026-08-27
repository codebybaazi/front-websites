import { createFileRoute, Link } from '@tanstack/react-router'
import { pageHeadFor } from '@/utils/page-seo'
import { Swords, Star, Zap, Flame, Trophy, PlayCircle, Grid3X3, Filter } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

import { z } from 'zod'
import { AIOverview } from '@/components/AIOverview'
import { FAQSection } from '@/components/FAQSection'


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
  { name: 'Live Casino', icon: PlayCircle },
  { name: 'Slots', icon: Zap },
  { name: 'Table Games', icon: Swords },
  { name: 'New', icon: Flame },
  { name: 'Popular', icon: Trophy },
]

const games = [
  { id: 1, name: 'Lightning Roulette', provider: 'Evolution', image: 'https://images.unsplash.com/photo-1596838132731-dd9fd7a8c44c?q=80&w=800&auto=format&fit=crop', category: 'Live Casino', isHot: true },
  { id: 2, name: 'Book of Dead', provider: 'Play\'n GO', image: 'https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=800&auto=format&fit=crop', category: 'Slots', isHot: false },
  { id: 3, name: 'Blackjack VIP', provider: 'Pragmatic Play', image: 'https://images.unsplash.com/photo-1518893063934-f7142c29c1c1?q=80&w=800&auto=format&fit=crop', category: 'Live Casino', isHot: true },
  { id: 4, name: 'Starburst', provider: 'NetEnt', image: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=800&auto=format&fit=crop', category: 'Slots', isHot: false },
  { id: 5, name: 'Crazy Time', provider: 'Evolution', image: 'https://images.unsplash.com/photo-1596838132731-dd9fd7a8c44c?q=80&w=800&auto=format&fit=crop', category: 'Live Casino', isHot: true },
  { id: 6, name: 'Mega Moolah', provider: 'Microgaming', image: 'https://images.unsplash.com/photo-1533073526757-2c8ca1dfbdff?q=80&w=800&auto=format&fit=crop', category: 'Slots', isHot: true },
]

function CasinoPage() {
  const { type } = Route.useSearch() as { type?: string }
  const [activeCategory, setActiveCategory] = useState(
    type === 'live' ? 'Live Casino' : 
    type === 'slots' ? 'Slots' : 
    'All Games'
  )

  useEffect(() => {
    if (type) {
      setActiveCategory(
        type === 'live' ? 'Live Casino' : 
        type === 'slots' ? 'Slots' : 
        'All Games'
      )
    }
  }, [type])

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
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
              <Star className="w-4 h-4 fill-primary" /> Same ID as cricket
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic mb-8 leading-[0.9] uppercase">
              Fairplay <span className="text-primary not-italic">live casino</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 font-medium">
              Teen Patti, Andar Bahar, roulette and HD tables on the same Fairplay ID you use for cricket.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto mb-12 px-4">
            <AIOverview title="AI Overview: Casino" />
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
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all border ${
                  activeCategory === cat.name 
                    ? 'bg-primary text-primary-foreground border-primary shadow-[0_0_15px_rgba(255,100,0,0.3)]' 
                    : 'bg-background border-border text-muted-foreground hover:border-primary/50'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.name}
              </button>
            ))}
            <div className="h-8 w-px bg-border mx-2" />
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-muted-foreground hover:text-foreground">
              <Filter className="w-4 h-4" /> Providers
            </button>
          </div>
        </div>
      </div>

      <main className="container max-w-7xl mx-auto px-4 py-8">
        {/* Banner Section */}
        <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden mb-12 group">
          <img 
            src="https://images.unsplash.com/photo-1596838132731-dd9fd7a8c44c?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt="Casino Banner"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent flex flex-col justify-center p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-4">
              Weekly <span className="text-primary not-italic">Cashback</span>
            </h2>
            <p className="text-white/80 max-w-md mb-8 text-lg">Get up to 10% back on all casino losses every Monday. Play smarter, win bigger.</p>
            <button className="w-fit px-8 py-3 bg-primary text-primary-foreground font-black rounded-lg shadow-xl hover:scale-105 transition-transform">
              CLAIM NOW
            </button>
          </div>
        </div>

        {/* Game Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black italic uppercase tracking-tight">
              {activeCategory} <span className="text-primary not-italic">Games</span>
            </h3>
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{games.length} Results</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {games.map((game, i) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-primary/20 transition-all border border-border hover:border-primary/50 cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {game.isHot && (
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-red-600 text-white text-[8px] font-black uppercase rounded shadow-lg flex items-center gap-1">
                      <Flame className="w-2.5 h-2.5 fill-current" /> HOT
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="p-3 bg-primary rounded-full text-white shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform">
                      <PlayCircle className="w-10 h-10" />
                    </button>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-xs truncate group-hover:text-primary transition-colors">{game.name}</h4>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-tight">{game.provider}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pt-12 text-center">
            <button className="px-12 py-4 bg-card border border-border rounded-xl font-black text-sm hover:bg-accent transition-all uppercase tracking-widest">
              Load More Games
            </button>
          </div>
        </div>
      </main>

      {/* Winners Feed - Desktop Only */}
      <section className="bg-card/30 border-t border-border py-8 mt-12 overflow-hidden hidden md:block">
        <div className="container max-w-7xl mx-auto px-4 flex items-center gap-8">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Star className="w-5 h-5 text-primary fill-current" />
            <h4 className="font-black italic uppercase text-sm tracking-tight">Recent <span className="text-primary not-italic">Winners</span></h4>
          </div>
          <div className="flex-1 overflow-hidden relative">
            <div className="flex gap-12 animate-marquee whitespace-nowrap">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="flex items-center gap-3 text-xs font-bold">
                  <span className="text-muted-foreground">User****{i}29</span>
                  <span className="text-green-500">₹{Math.floor(Math.random() * 50000)}</span>
                  <span className="text-muted-foreground opacity-50 italic">in Book of Dead</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection 
        title="Live Casino FAQ"
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
