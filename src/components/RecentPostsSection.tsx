import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, TrendingUp, ChevronRight } from "lucide-react";
import { useMemo } from "react";
import { parse, compareDesc } from "date-fns";
import { blogArticles } from "@/lib/blog-data";
import { POST_BANNERS } from "@/lib/blog-banners";

export function RecentPostsSection() {
  const articles = useMemo(() => {
    return [...blogArticles]
      .sort((a, b) => {
        const dateA = parse(a.date, 'MMM dd, yyyy', new Date());
        const dateB = parse(b.date, 'MMM dd, yyyy', new Date());
        return compareDesc(dateA, dateB);
      })
      .slice(0, 6);
  }, []);

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-background">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[2px] w-12 bg-primary" />
              <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Expert Insights · Match Analysis</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.85] mb-8">
              RECENT POSTS <br />
              <span className="text-primary not-italic">& ANALYSIS</span>
            </h2>
            <p className="text-muted-foreground text-xl border-l-2 border-primary/40 pl-8 italic max-w-xl">
              Stay ahead with elite betting strategies, match predictions, and platform guides updated daily.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/blog" 
              className="group flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all text-sm font-black tracking-widest uppercase"
            >
              Explore All Insights
              <TrendingUp className="w-4 h-4 text-primary group-hover:scale-125 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((post, i) => (post && (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col bg-white/[0.03] border border-white/5 rounded-[2rem] overflow-hidden hover:bg-white/[0.07] hover:border-primary/30 transition-all duration-500"
            >
              <Link
                to="/posts/$slug"
                params={{ slug: post.slug }}
                className="block relative aspect-[16/9] overflow-hidden bg-primary/5"
                aria-label={post.title}
              >
                <img
                  src={POST_BANNERS[post.slug] ?? post.img}
                  alt={post.title}
                  width={1600}
                  height={900}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[9px] font-black uppercase tracking-[0.2em]">
                  {post.category}
                </span>
              </Link>

              <div className="flex flex-col flex-1 p-7">
                <div className="flex items-center gap-4 mb-4 text-[9px] font-black uppercase tracking-widest text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3 text-primary" />{post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3 h-3 text-primary" />5 min read</span>
                </div>
                <h3 className="text-xl font-black italic uppercase tracking-tight leading-tight mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  <Link to="/posts/$slug" params={{ slug: post.slug }}>{post.title}</Link>
                </h3>
                {post.desc && (
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 font-medium mb-6">
                    {post.desc}
                  </p>
                )}

                <div className="mt-auto pt-5 border-t border-white/5">
                  <Link
                    to="/posts/$slug"
                    params={{ slug: post.slug }}
                    className="text-[10px] font-black uppercase tracking-widest text-foreground/70 group-hover:text-primary transition-colors flex items-center gap-2"
                  >
                    Read Analysis <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.article>
          )))}
        </div>

      </div>
    </section>
  );
}
