import { createFileRoute, Link } from '@tanstack/react-router';
import { pageHeadFor } from '@/utils/page-seo';
import { motion } from 'framer-motion';
import { 
  Search, 
  ChevronRight, 
  TrendingUp,
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
    () => sortedArticles.slice(1, 4).map(toBlogPostState),
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

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 border-b border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
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
              Fairplay betting <br />
              <span className="text-primary not-italic">guides.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/40 leading-relaxed max-w-2xl mx-auto mb-12 font-medium"
            >
              How to get a Fairplay ID, fund the wallet with UPI, and bet cricket, football, tennis and live casino — written for Indian players in 2026.
            </motion.p>
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            <AIOverview 
              title="Fairplay blog — what you will find"
              content="The Fairplay blog is a searchable help centre for cricket IDs, IPL and T20 markets, football and tennis books, live casino tables, deposits, withdrawals and login fixes. Guides are updated through 2026 so market names and settlement rules match what you see on the exchange."
            />
          </div>

          {featuredPost ? <BlogPostList.Featured post={toBlogPostState(featuredPost)} /> : null}
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
                  placeholder="Search ID, UPI, IPL..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/5 border border-white/5 rounded-xl py-6 pl-16 pr-8 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all font-bold"
                />
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-8 px-2">
                  Topics
                </h3>
                <div className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`flex items-center justify-between px-6 py-4 rounded-xl text-xs font-bold tracking-tight uppercase transition-all ${
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
              <div className="p-8 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                <TrendingUp className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-xl font-bold tracking-tight mb-6">Trending now</h3>
                <BlogPostList.Trending posts={trendingPosts} />
              </div>
            </div>
          </aside>

          {/* Grid Content */}
          <div className="lg:col-span-9">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl font-bold tracking-tight">
                {activeCategory === 'All' ? 'Latest guides' : `${activeCategory} guides`}
                <span className="ml-4 text-primary text-sm not-italic opacity-50 font-bold">{filteredArticles.length} GUIDES</span>
              </h2>
            </div>

            <BlogPostList.Grid posts={gridPosts} />

            {filteredArticles.length === 0 ? <BlogPostList.Empty /> : null}
          </div>
        </div>
      </main>

      {/* Newsletter Footer */}
      <section className="container max-w-7xl mx-auto px-4 pb-32">
        <div className="relative p-12 md:p-24 bg-primary rounded-xl text-black overflow-hidden group">
          <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-1000 rounded-xl" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.85] mb-8">
                Fixture notes <br />
                <span className="text-white">on WhatsApp.</span>
              </h2>
              <p className="text-xl font-bold tracking-tight opacity-70 max-w-md">
                IDs and UPI still go through the published WhatsApp. This list is for schedule pointers, not deposits.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="you@email.com" 
                  className="flex-1 bg-black/10 border-2 border-black/20 rounded-xl px-8 py-6 placeholder:text-black/30 text-black font-bold tracking-tight focus:outline-none focus:border-black/50 transition-all"
                />
                <button className="bg-black text-white px-12 py-6 rounded-xl font-bold tracking-tight hover:bg-white hover:text-black transition-all active:scale-95 shadow-2xl">
                  Subscribe
                </button>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 text-center sm:text-left">
                No spam. Cricket desk notes only.
              </p>
            </div>
          </div>
        </div>
      </section>
    
      {/* Blog SEO Quick Links */}
      <section className="py-24 px-4 bg-primary/5 border-t border-white/5">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Quick links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Betting Guides", href: "/blog", category: "Guide" },
              { title: "IPL Live Updates", href: "/ipl-betting", category: "Events" },
              { title: "Casino Strategy", href: "/casino", category: "Strategy" },
              { title: "Login Help", href: "/support", category: "Support" },
            ].map((link) => (
              <Link 
                key={link.title} 
                to={link.href}
                className="glass-card p-8 rounded-xl border border-white/10 hover:border-primary transition-all text-center group"
              >
                <span className="block text-primary text-[10px] font-bold uppercase tracking-widest mb-2">{link.category}</span>
                <span className="text-xl font-bold tracking-tight group-hover:text-white transition-colors">{link.title}</span>
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
