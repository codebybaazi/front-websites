import json
import os

def redesign_blog():
    file_path = 'src/routes/blog.tsx'
    
    # Read the existing file to keep the massive articles array
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Identify the start and end of the articles array to preserve it
    # It starts with 'const articles = [' and ends with '];' before 'function BlogPage()'
    start_marker = 'const articles = ['
    end_marker = '];'
    
    start_idx = content.find(start_marker)
    end_idx = content.find(end_marker, start_idx) + 2
    
    if start_idx == -1 or end_idx == -1:
        print("Could not find articles array markers")
        return
        
    articles_content = content[start_idx:end_idx]
    
    new_template = """import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Calendar, 
  User, 
  Search, 
  TrendingUp, 
  Trophy, 
  Zap,
  Target,
  Crown,
  Star,
  ZapIcon,
  BookOpen,
  ChevronRight,
  Clock,
  ShieldCheck,
  MessageCircle
} from 'lucide-react';
import { useState, useMemo } from 'react';

const ICON_MAP: Record<string, any> = {
  TrendingUp,
  Trophy,
  Zap,
  Target,
  Crown,
  Star,
  ZapIcon,
  BookOpen,
  ShieldCheck,
  MessageCircle,
  Calendar,
  Clock
};

""" + articles_content + """

export const Route = createFileRoute('/blog')({
  component: BlogPage,
  head: () => ({
    title: 'Fairplay Blog | Expert Betting Insights & Strategies',
    meta: [
      { name: 'description', content: 'Master the game with Fairplay Insights. Over 150+ expert guides on cricket, casino, and sports betting strategies for the 2026 season.' },
      { property: 'og:title', content: 'Fairplay Blog - Elite Betting Intelligence' },
      { property: 'og:description', content: 'Professional analysis and winning strategies for the ultimate betting edge.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ]
  })
});

function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Strategy', 'Guide', 'Platform', 'Analysis', 'News'];

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.desc.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0B] text-white">
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        </div>

        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <Zap className="w-4 h-4 text-primary fill-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">
                Elite Intelligence Hub
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.9] mb-8"
            >
              Master The <br />
              <span className="text-primary not-italic">Fairplay</span> Edge
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl text-lg text-white/50 leading-relaxed mb-12"
            >
              Dive into our massive archive of 150+ professional guides. From IPL analytics to high-stakes casino mechanics, we provide the intelligence you need to win.
            </motion.p>

            {/* Premium Search & Filter Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-[2rem] shadow-2xl"
            >
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                  <input 
                    type="text"
                    placeholder="Search guides, strategies, or platforms..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-transparent border-none py-6 pl-16 pr-8 text-white placeholder:text-white/20 focus:outline-none"
                  />
                </div>
                <div className="flex items-center gap-2 p-2 w-full md:w-auto overflow-x-auto no-scrollbar">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                        activeCategory === cat 
                        ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                        : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <main className="container max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((post, i) => {
              const Icon = ICON_MAP[post.icon] || Star;
              return (
                <motion.article 
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.05, 0.5) }}
                  className="group relative flex flex-col bg-white/5 border border-white/5 rounded-[2.5rem] overflow-hidden hover:bg-white/[0.08] hover:border-primary/30 transition-all duration-500"
                >
                  <div className="p-8 pb-0">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                        <Clock className="w-3 h-3 text-white/40" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-white/60">{post.date}</span>
                      </div>
                    </div>
                    
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3 block">
                      {post.category}
                    </span>
                    
                    <h2 className="text-2xl font-black italic uppercase tracking-tight leading-none group-hover:text-primary transition-colors mb-4 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-white/40 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
                      {post.desc}
                    </p>
                  </div>
                  
                  <div className="mt-auto p-8 pt-0">
                    <Link 
                      to="/posts/$slug"
                      params={{ slug: post.slug }}
                      className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-widest text-white/80 group-hover:text-primary transition-all group-hover:gap-6"
                    >
                      Explore Strategy <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Decorative background accent */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.article>
              );
            })
          ) : (
            <div className="col-span-full py-20 text-center">
              <Search className="w-16 h-16 text-white/10 mx-auto mb-6" />
              <h3 className="text-2xl font-black uppercase italic text-white/40">No Insights Found</h3>
              <p className="text-white/20 mt-2">Try adjusting your search or category filters.</p>
            </div>
          )}
        </div>

        {/* Premium Newsletter CTA */}
        <section className="mt-40 relative">
          <div className="absolute inset-0 bg-primary rounded-[4rem] -rotate-1 scale-105 opacity-10 blur-2xl" />
          <div className="relative bg-[#111112] border border-white/5 rounded-[4rem] p-12 md:p-20 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
              <div className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] bg-primary rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
                >
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                    Insider Intelligence
                  </span>
                </motion.div>
                
                <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-[0.9] mb-6">
                  Elite Data <br />
                  <span className="text-primary not-italic">Straight To You</span>
                </h2>
                
                <p className="text-lg text-white/40 font-medium max-w-md">
                  Join 50,000+ elite players receiving weekly winning strategies and exclusive bonus codes.
                </p>
              </div>

              <div className="w-full">
                <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-3 flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Elite Email Address" 
                    className="flex-1 bg-transparent px-8 py-5 text-white placeholder:text-white/20 focus:outline-none font-bold"
                  />
                  <button className="bg-primary hover:bg-primary/90 text-white font-black italic uppercase tracking-widest px-10 py-5 rounded-[2rem] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
                    Get Access
                  </button>
                </div>
                <p className="text-[10px] text-white/20 mt-6 text-center font-bold uppercase tracking-widest">
                  Secure. Private. Elite Access Only.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
"""
    
    with open(file_path, 'w') as f:
        f.write(new_template)
    print("Redesigned blog page with premium UI and search/filter.")

if __name__ == "__main__":
    redesign_blog()
