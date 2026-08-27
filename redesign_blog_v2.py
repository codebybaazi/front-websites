import json
import os

def redesign_blog_v2():
    file_path = 'src/routes/blog.tsx'
    
    # Read the existing file to keep the articles array
    with open(file_path, 'r') as f:
        content = f.read()
    
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
  MessageCircle,
  Play,
  Share2,
  Bookmark
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

  const categories = ['All', 'Strategy', 'Guide', 'Platform', 'Analysis', 'News', 'Events', 'Support'];

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.desc.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const featuredPost = articles[0];
  const trendingPosts = articles.slice(1, 4);

  return (
    <div className="flex flex-col min-h-screen bg-[#070708] text-white selection:bg-primary/30">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] animate-pulse opacity-50" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[130px] opacity-30" />
      </div>

      {/* Modern Hero Section */}
      <section className="relative pt-40 pb-20 border-b border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                Fairplay intelligence Hub
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.85] mb-10"
            >
              The Science <br />
              <span className="text-primary not-italic">Of Winning.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/40 leading-relaxed max-w-2xl mb-12 font-medium"
            >
              Unlock elite level strategies and data-driven insights. From algorithmic betting to high-stakes casino mechanics, we define the standard for 2026.
            </motion.p>
          </div>

          {/* Featured Post Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="group relative w-full bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[3rem] p-1 overflow-hidden"
          >
            <div className="relative z-10 grid lg:grid-cols-2 gap-0">
              <div className="aspect-[16/9] lg:aspect-auto bg-primary/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent mix-blend-overlay" />
                <BookOpen className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-primary/20 group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-12 md:p-20 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-8">
                  <span className="px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest">
                    Featured Insight
                  </span>
                  <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">
                    {featuredPost.date}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-none mb-6 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-white/50 leading-relaxed mb-10 font-medium">
                  {featuredPost.desc}
                </p>
                <Link
                  to="/posts/$slug"
                  params={{ slug: featuredPost.slug }}
                  className="inline-flex items-center gap-4 px-8 py-4 bg-white text-black rounded-2xl font-black italic uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all w-fit"
                >
                  Read Masterclass <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="container max-w-7xl mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Sidebar / Filters */}
          <aside className="lg:col-span-3 space-y-12">
            <div className="sticky top-32 space-y-12">
              {/* Search */}
              <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary transition-colors" />
                <input 
                  type="text"
                  placeholder="Find strategy..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/5 border border-white/5 rounded-2xl py-6 pl-16 pr-8 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all font-bold italic"
                />
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-8 px-2">
                  Knowledge Domains
                </h3>
                <div className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`flex items-center justify-between px-6 py-4 rounded-2xl text-xs font-black italic uppercase tracking-widest transition-all ${
                        activeCategory === cat 
                        ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                        : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {cat}
                      {activeCategory === cat && <ChevronRight className="w-4 h-4" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending Sidebar */}
              <div className="p-8 rounded-[2rem] bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                <TrendingUp className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-xl font-black italic uppercase tracking-tighter mb-6">Trending Now</h3>
                <div className="space-y-6">
                  {trendingPosts.map((post, idx) => (
                    <Link
                      key={post.slug}
                      to="/posts/$slug"
                      params={{ slug: post.slug }}
                      className="group block"
                    >
                      <span className="text-primary text-[10px] font-black mb-2 block">0{idx + 1}</span>
                      <h4 className="text-sm font-black italic uppercase leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Grid Content */}
          <div className="lg:col-span-9">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl font-black italic uppercase tracking-tighter">
                {activeCategory === 'All' ? 'Latest Intelligence' : `${activeCategory} Vault`}
                <span className="ml-4 text-primary text-sm not-italic opacity-50 font-bold">{filteredArticles.length} GUIDES</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {filteredArticles.slice(1).map((post, i) => {
                const Icon = ICON_MAP[post.icon] || Star;
                return (
                  <motion.article 
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(i * 0.05, 0.4) }}
                    className="group relative flex flex-col bg-white/[0.03] border border-white/5 rounded-[2.5rem] p-8 hover:bg-white/[0.07] hover:border-primary/30 transition-all duration-500"
                  >
                    <div className="flex items-center justify-between mb-10">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex gap-2">
                         <button className="p-2 rounded-full bg-white/5 hover:bg-primary/20 text-white/40 hover:text-primary transition-all">
                           <Bookmark className="w-4 h-4" />
                         </button>
                      </div>
                    </div>

                    <div className="space-y-4 mb-10">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                        {post.category}
                      </span>
                      <h3 className="text-2xl font-black italic uppercase tracking-tight leading-none group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-white/40 text-sm leading-relaxed line-clamp-3 font-medium">
                        {post.desc}
                      </p>
                    </div>

                    <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                      <Link 
                        to="/posts/$slug"
                        params={{ slug: post.slug }}
                        className="text-[10px] font-black uppercase tracking-widest text-white/70 group-hover:text-primary transition-colors flex items-center gap-2"
                      >
                        ANALYZE DATA <ArrowRight className="w-3 h-3" />
                      </Link>
                      <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">
                        {post.date}
                      </span>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-40 border-2 border-dashed border-white/5 rounded-[3rem]">
                <Search className="w-16 h-16 text-white/10 mx-auto mb-6" />
                <h3 className="text-2xl font-black uppercase italic text-white/20">Access Denied</h3>
                <p className="text-white/10 mt-2 font-bold italic uppercase tracking-widest">No intelligence matches your query.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Newsletter Footer */}
      <section className="container max-w-7xl mx-auto px-4 pb-32">
        <div className="relative p-12 md:p-24 bg-primary rounded-[4rem] text-black overflow-hidden group">
          <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-1000 rounded-[4rem]" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.85] mb-8">
                Join The Elite <br />
                <span className="text-white">Insider Network.</span>
              </h2>
              <p className="text-xl font-black italic uppercase tracking-tight opacity-70 max-w-md">
                Get first access to flash bonuses and market volatility reports.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="ELITE@MAIL.COM" 
                  className="flex-1 bg-black/10 border-2 border-black/20 rounded-3xl px-8 py-6 placeholder:text-black/30 text-black font-black italic uppercase tracking-widest focus:outline-none focus:border-black/50 transition-all"
                />
                <button className="bg-black text-white px-12 py-6 rounded-3xl font-black italic uppercase tracking-widest hover:bg-white hover:text-black transition-all active:scale-95 shadow-2xl">
                  SUBSCRIBE
                </button>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 text-center sm:text-left">
                Zero spam. Only high-value intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
"""
    
    with open(file_path, 'w') as f:
        f.write(new_template)
    print("Redesigned blog page v2 with high-end magazine layout.")

if __name__ == "__main__":
    redesign_blog_v2()
