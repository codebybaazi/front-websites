import { createFileRoute, Link } from '@tanstack/react-router';
import { pageHeadFor } from '@/utils/page-seo';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Calendar, 
  Search, 
  ChevronRight, 
  Bookmark,
  Star,
  TrendingUp,
  Trophy,
  Zap,
  Target,
  Crown,
  ZapIcon,
  BookOpen,
  ShieldCheck,
  MessageCircle,
  Clock
} from 'lucide-react';
import { useState, useMemo } from 'react';
import { parse, compareDesc } from 'date-fns';
import { blogArticles as articles, ICON_MAP } from '@/lib/blog-data';
import { POST_BANNERS } from '@/lib/blog-banners';
import { AIOverview } from '@/components/AIOverview';
import { FAQSection } from '@/components/FAQSection';
import { AuthorByline } from '@/components/AuthorByline';
import { authorForCategory } from '@/lib/authors';


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

  const featuredPost = sortedArticles[0] || { slug: '', title: '', category: '', desc: '', date: '', icon: '' };
  const trendingPosts = sortedArticles.slice(1, 4);

  return (
    <div className="flex flex-col min-h-screen bg-[#070708] text-white selection:bg-primary/30">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] animate-pulse opacity-50" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[130px] opacity-30" />
      </div>

      {/* Modern Hero Section */}
      <section className="relative pt-40 pb-20 border-b border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                Fairplay intelligence Hub
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85] mb-12"
            >
              Fairplay betting <br />
              <span className="text-primary not-italic">guides.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/40 leading-relaxed max-w-2xl mx-auto mb-8 font-medium"
            >
              How to get a Fairplay ID, fund the wallet, and bet cricket, football, tennis and live casino. Written for Indian players in 2026, with a named writer on every post.
            </motion.p>
            <Link
              to="/authors"
              className="inline-flex text-[11px] font-black uppercase tracking-widest text-primary hover:underline mb-12"
            >
              Meet the writers
            </Link>
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            <AIOverview 
              title="Fairplay blog — what you will find"
              content="The Fairplay blog is a searchable help centre for cricket IDs, IPL and T20 markets, football and tennis books, live casino tables, deposits, withdrawals and login fixes. Guides are updated through 2026 so market names and settlement rules match what you see on the exchange."
            />
          </div>

          {/* Featured Post Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="group relative w-full bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden"
          >
            <Link
              to="/posts/$slug"
              params={{ slug: featuredPost.slug }}
              className="relative block aspect-[16/9] overflow-hidden"
              aria-label={featuredPost.title}
            >
              {POST_BANNERS[featuredPost.slug] ? (
                <img
                  src={POST_BANNERS[featuredPost.slug]}
                  alt={featuredPost.title}
                  width={1600}
                  height={900}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
              ) : (
                <img
                  src="/og-banner.jpg"
                  alt={featuredPost.title}
                  width={1376}
                  height={768}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
              )}
            </Link>
            <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest">
                    Featured Insight
                  </span>
                  <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">
                    {featuredPost.date}
                  </span>
                  <AuthorByline author={authorForCategory(featuredPost.category)} />
                </div>
                <h2 className="sr-only">{featuredPost.title}</h2>
                <p className="text-white/60 leading-relaxed font-medium max-w-3xl">
                  {featuredPost.desc}
                </p>
              </div>
              <Link
                to="/posts/$slug"
                params={{ slug: featuredPost.slug }}
                className="shrink-0 inline-flex items-center gap-3 px-6 py-3.5 bg-white text-black rounded-2xl font-black italic uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all"
              >
                Read Masterclass <ArrowRight className="w-4 h-4" />
              </Link>
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
                      <div className="flex gap-4 items-center">
                        {POST_BANNERS[post.slug] && (
                          <img
                            src={POST_BANNERS[post.slug]}
                            alt={post.title}
                            loading="lazy"
                            className="w-20 h-14 rounded-xl object-cover border border-white/10 shrink-0"
                          />
                        )}
                        <div>
                          <span className="text-primary text-[10px] font-black mb-1 block">0{idx + 1}</span>
                          <h4 className="text-xs font-black italic uppercase leading-tight group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                        </div>
                      </div>
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

            <div className="grid sm:grid-cols-2 gap-8">
              {filteredArticles.slice(1).map((post, i) => {
                const Icon = ICON_MAP[post.icon] || Star;
                const banner = POST_BANNERS[post.slug];
                const readMins = Math.max(4, Math.min(12, Math.round(post.desc.length / 40)));
                return (
                  <motion.article 
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(i % 10 * 0.05, 0.4) }}
                    className="group relative flex flex-col bg-white/[0.03] border border-white/5 rounded-[2rem] overflow-hidden hover:bg-white/[0.07] hover:border-primary/30 transition-all duration-500"
                  >
                    <Link
                      to="/posts/$slug"
                      params={{ slug: post.slug }}
                      className="block relative aspect-[16/9] overflow-hidden bg-primary/5"
                      aria-label={post.title}
                    >
                      {banner ? (
                        <img
                          src={banner}
                          alt={post.title}
                          width={1600}
                          height={900}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-transparent">
                          <Icon className="w-14 h-14 text-primary/40" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-white text-[9px] font-black uppercase tracking-[0.2em]">
                        {post.category}
                      </span>
                    </Link>

                    <div className="flex flex-col flex-1 p-7">
                      <div className="flex items-center gap-4 mb-4 text-[9px] font-black uppercase tracking-widest text-white/30">
                        <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{post.date}</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{readMins} min read</span>
                      </div>
                      <div className="mb-4 normal-case tracking-normal">
                        <AuthorByline author={authorForCategory(post.category)} />
                      </div>
                      <h3 className="text-xl font-black italic uppercase tracking-tight leading-tight mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        <Link to="/posts/$slug" params={{ slug: post.slug }}>{post.title}</Link>
                      </h3>
                      <p className="text-white/40 text-sm leading-relaxed line-clamp-3 font-medium mb-6">
                        {post.desc}
                      </p>

                      <div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-between">
                        <Link 
                          to="/posts/$slug"
                          params={{ slug: post.slug }}
                          className="text-[10px] font-black uppercase tracking-widest text-white/70 group-hover:text-primary transition-colors flex items-center gap-2"
                        >
                          Read Full Guide <ArrowRight className="w-3 h-3" />
                        </Link>
                        <button className="p-2 rounded-full bg-white/5 hover:bg-primary/20 text-white/30 hover:text-primary transition-all" aria-label="Save for later">
                          <Bookmark className="w-3.5 h-3.5" />
                        </button>
                      </div>
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
    
      {/* Blog SEO Quick Links */}
      <section className="py-24 px-4 bg-primary/5 border-t border-white/5">
        <div className="container max-w-7xl mx-auto">
          <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-12 text-center">Direct Navigation Resources</h2>
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
                className="glass-card p-8 rounded-3xl border border-white/10 hover:border-primary transition-all text-center group"
              >
                <span className="block text-primary text-[10px] font-black uppercase tracking-widest mb-2">{link.category}</span>
                <span className="text-xl font-black italic uppercase tracking-tighter group-hover:text-white transition-colors">{link.title}</span>
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

