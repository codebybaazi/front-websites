import { createFileRoute, Link } from '@tanstack/react-router';
import { pageHeadFor } from '@/utils/page-seo';
import { motion } from 'framer-motion';
import { 
  Search, 
  TrendingUp,
  ArrowRight,
  Calendar,
  Clock,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { useState, useMemo } from 'react';
import { parse, compareDesc } from 'date-fns';
import { blogArticles as articles } from '@/lib/blog-data';
import { AIOverview } from '@/components/AIOverview';
import { FAQSection } from '@/components/FAQSection';
import { BlogPostList } from '@/components/blog/BlogPostList';
import { toBlogPostState } from '@/components/blog/blog-post-context';

export const Route = createFileRoute('/blog')({
  component: BlogPage,
  head: () => pageHeadFor('/blog')
});

function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Strategy', 'Guide', 'Platform', 'Analysis', 'News', 'Events', 'Support'];

  const sortedArticles = useMemo(() => {
    return [...articles].sort((a, b) => {
      const dateA = parse(a.date, 'MMM dd, yyyy', new Date());
      const dateB = parse(b.date, 'MMM dd, yyyy', new Date());
      return compareDesc(dateA, dateB);
    });
  }, []);

  const filteredArticles = useMemo(() => {
    return sortedArticles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.desc.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory, sortedArticles]);

  const featuredPost = sortedArticles[0];
  const trendingPosts = useMemo(
    () => sortedArticles.slice(1, 7).map(toBlogPostState),
    [sortedArticles],
  );
  const gridPosts = useMemo(
    () => filteredArticles.slice(1).map(toBlogPostState),
    [filteredArticles],
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#0B1120] text-white selection:bg-primary/30">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] animate-pulse opacity-50" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[130px] opacity-30" />
      </div>

      {/* Hero Section - Redesigned without sidebar */}
      <section className="relative pt-32 pb-20 border-b border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Fairplay cricket desk
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.85] mb-12"
            >
              Your <span className="text-primary">playbook</span> <br />
              for <span className="text-primary">winning.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/40 leading-relaxed max-w-2xl mx-auto mb-12 font-medium"
            >
              Master your Fairplay ID — from instant registration to smart betting strategies across cricket, football, tennis and live casino.
            </motion.p>

            {/* Search Bar - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="max-w-2xl mx-auto mb-12"
            >
              <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-primary transition-colors" />
                <input 
                  type="text"
                  placeholder="Search guides..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/5 border border-white/8 rounded-2xl py-5 pl-16 pr-8 text-white placeholder:text-white/25 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all font-medium text-lg"
                />
              </div>
            </motion.div>

            {/* Category Pills - Horizontal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {categories.map((cat, index) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeCategory === cat 
                    ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105' 
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white hover:scale-102'
                  }`}
                >
                  {cat}
                  {activeCategory === cat && (
                    <span className="ml-2 text-xs opacity-70">{filteredArticles.filter(a => cat === 'All' || a.category === cat).length}</span>
                  )}
                </button>
              ))}
            </motion.div>
          </div>

          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <BlogPostList.Featured post={toBlogPostState(featuredPost)} />
            </motion.div>
          )}
        </div>
      </section>

      {/* Trending Section - Horizontal Scroll */}
      <section className="py-16 border-b border-white/5 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold tracking-tight">Trending now</h2>
            <span className="text-xs text-white/40 ml-auto">Scroll to explore</span>
          </div>
          <div className="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4 custom-scrollbar">
            {trendingPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="flex-shrink-0 w-72"
              >
                <Link to="/posts/$slug" params={{ slug: post.slug }} className="group block">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-3">
                    {post.bannerSrc ? (
                      <img 
                        src={post.bannerSrc} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-flame/20" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <span className="absolute top-3 left-3 bg-primary/90 text-white text-[10px] font-bold px-2 py-1 rounded">
                      0{index + 1}
                    </span>
                    <span className="absolute bottom-3 left-3 right-3">
                      <span className="text-xs text-white/70 font-medium">{post.category}</span>
                    </span>
                  </div>
                  <h3 className="font-bold text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-white/40 mt-1">{post.date}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Powerview Section */}
      <section className="py-16 container max-w-7xl mx-auto px-4">
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-flame/5 rounded-3xl blur-3xl" />
          
          <div className="relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/8 rounded-3xl p-10 md:p-14">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-flame flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-flame rounded-xl blur opacity-40 -z-10" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1 block">Exclusive insight</span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">AI Powerview</h2>
              </div>
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white/90">What our desk covers</h3>
                <p className="text-white/50 leading-relaxed mb-6">
                  The Fairplay blog is your searchable cricket desk — a living guide for IPL markets, football odds, tennis bookie tips, live casino tables and wallet operations. Every guide is refreshed through 2026 so the steps match what you see on the exchange.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Cricket ID', 'IPL 2026', 'Live Casino', 'UPI Wallet', 'Football'].map((tag) => (
                    <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white/90">Why our guides work</h3>
                <ul className="space-y-4">
                  {[
                    { icon: '01', text: 'Step-by-step instructions written for real players' },
                    { icon: '02', text: 'Updated when odds formats or markets change' },
                    { icon: '03', text: 'No jargon — plain language from the desk' },
                  ].map((item) => (
                    <li key={item.icon} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center text-primary text-sm font-bold">
                        {item.icon}
                      </span>
                      <span className="text-white/60 leading-relaxed pt-1">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-white/80 font-semibold">Need help getting started?</p>
                <p className="text-white/40 text-sm mt-1">WhatsApp our desk for a verified Fairplay ID</p>
              </div>
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-flame text-white font-bold hover:shadow-lg hover:shadow-primary/25 transition-all active:scale-95">
                Get Fairplay ID
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Grid without Sidebar */}
      <main className="container max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-bold tracking-tight">
            {activeCategory === 'All' ? 'Latest guides' : `${activeCategory} guides`}
            <span className="ml-4 text-primary text-sm not-italic opacity-50 font-bold">{filteredArticles.length} GUIDES</span>
          </h2>
        </div>

        <BlogPostList.Grid posts={gridPosts} />

        {filteredArticles.length === 0 ? <BlogPostList.Empty /> : null}
      </main>

      {/* Newsletter Footer */}
      <section className="container max-w-7xl mx-auto px-4 pb-16">
        <div className="relative p-12 md:p-20 bg-primary rounded-2xl text-black overflow-hidden group">
          <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-1000 rounded-2xl" />
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <Sparkles className="w-12 h-12 text-black/40 mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[0.9] mb-6">
              Fixture notes <br />
              <span className="text-white">on WhatsApp.</span>
            </h2>
            <p className="text-lg font-medium opacity-60 mb-10">
              IDs and UPI still go through the published WhatsApp. This list is for schedule pointers, not deposits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="you@email.com" 
                className="flex-1 bg-black/10 border-2 border-black/20 rounded-xl px-6 py-4 placeholder:text-black/30 text-black font-medium focus:outline-none focus:border-black/50 transition-all"
              />
              <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition-all active:scale-95 shadow-xl whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-30 mt-4">
              No spam. Cricket desk notes only.
            </p>
          </div>
        </div>
      </section>
    
      {/* Blog SEO Quick Links */}
      <section className="py-20 px-4 bg-primary/5 border-t border-white/5">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Quick links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Betting Guides", href: "/blog", category: "Guide", icon: "📖" },
              { title: "IPL Live Updates", href: "/ipl-betting", category: "Events", icon: "🏏" },
              { title: "Casino Strategy", href: "/casino", category: "Strategy", icon: "🎰" },
              { title: "Login Help", href: "/support", category: "Support", icon: "🔐" },
            ].map((link) => (
              <Link 
                key={link.title} 
                to={link.href}
                className="glass-card p-8 rounded-xl border border-white/10 hover:border-primary/40 transition-all text-center group"
              >
                <span className="block text-3xl mb-3">{link.icon}</span>
                <span className="block text-primary text-[10px] font-bold uppercase tracking-widest mb-2">{link.category}</span>
                <span className="text-lg font-bold tracking-tight group-hover:text-white transition-colors">{link.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection 
        title="Blog questions"
        faqs={[
          { q: "What are these Fairplay guides for?", a: "They explain Fairplay ID, login, UPI deposits, IPL and cricket betting, football, tennis and casino in ordinary language — not brochure copy." },
          { q: "I am new. Where should I start?", a: "Get a Fairplay ID, then the login guide and deposit guide. After that, open IPL betting or the 2026 schedule for a live fixture." },
          { q: "Are the posts unique?", a: "Each slug has its own heading, description and related links. Cricket guides point at cricket hubs; login guides point at login and ID pages." },
          { q: "Can I use this on the Fairplay app?", a: "Yes. The same Fairplay ID works on the app and desktop. The steps in a guide do not change." }
        ]}
      />
    </div>
  );
}
