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
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
            <Link 
                to="/posts/$slug"
                params={{ slug: post.slug }}
                className="group block relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-700 shine-effect glow-border"
              >
                {/* Image background */}
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000"
                  style={{ backgroundImage: `url(${POST_BANNERS[post.slug] ?? post.img})` }}
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <span className="px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-[10px] font-black uppercase tracking-widest text-primary">
                      {post.category}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-white/40 mb-4 group-hover:text-white/60 transition-colors">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        {post.date}
                      </div>
                      <div className="w-1 h-1 rounded-full bg-white/20" />
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        5 MIN READ
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-black italic uppercase leading-[1.1] tracking-tighter group-hover:text-primary transition-colors line-clamp-3">
                      {post.title}
                    </h3>
                    
                    <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      READ ANALYSIS <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-primary group-hover:w-full transition-all duration-1000 ease-in-out" />
              </Link>
            </motion.div>
          )))}
        </div>
      </div>
    </section>
  );
}
