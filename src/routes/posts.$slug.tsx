import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowLeft, ShieldCheck, Zap, Info } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { AIOverview } from '@/components/AIOverview';
import { getBlogArticleBlocks, getBlogSeo } from '@/utils/blog-seo';
import { InternalLinkGrid } from '@/components/InternalLinkGrid';
import { JsonLd } from '@/components/JsonLd';
import { faqPageNode } from '@/utils/faq-schema';
import { getHubLinksForSlug, relatedBlogCards } from '@/utils/internal-links';
import { BLOG_POST_DATES, blogPostIsoDate } from '@/utils/blog-post-dates';
import { OG_IMAGE, absolutePageUrl } from '@/utils/page-seo';
import { waLink } from "@/lib/whatsapp";


export const Route = createFileRoute('/posts/$slug')({
  loader: ({ params }: { params: { slug: string } }) => {
    return { slug: params.slug }
  },
  head: ({ loaderData }) => {
    const slug = loaderData?.slug || '';
    const seo = getBlogSeo(slug);
    const url = absolutePageUrl(`/posts/${slug}`);

    return {
      title: seo.title,
      meta: [
        { title: seo.title },
        { name: "description", content: seo.description },
        { property: "og:title", content: seo.title },
        { property: "og:description", content: seo.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:locale", content: "en_IN" },
        { property: "og:site_name", content: "Fairplay" },
        { property: "og:image", content: OG_IMAGE },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: seo.title },
        { name: "twitter:description", content: seo.description },
        { name: "twitter:image", content: OG_IMAGE },
        { name: "robots", content: "index, follow" }
      ],
      links: [{ rel: "canonical", href: url }],
    }
  },
  component: PostDetail,
})

function PostDetail() {
  const { slug } = Route.useLoaderData()
  const seo = getBlogSeo(slug)
  const content = getBlogArticleBlocks(slug)
  const title = seo.h1
  const postDate = BLOG_POST_DATES[slug] || "Jan 2026";
  const isoDate = blogPostIsoDate(slug);
  const url = absolutePageUrl(`/posts/${slug}`);

  const faqNode = faqPageNode(
    content
      .filter((item) => item.t === "faq")
      .flatMap((item) => (item.items || []) as Array<{ q?: string; a?: string }>),
  );
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: seo.h1,
        description: seo.description,
        url,
        image: OG_IMAGE,
        ...(isoDate ? { datePublished: isoDate, dateModified: isoDate } : {}),
        author: { "@type": "Organization", name: "Fairplay", url: absolutePageUrl("/") },
        publisher: {
          "@type": "Organization",
          name: "Fairplay",
          logo: { "@type": "ImageObject", url: OG_IMAGE },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
      },
      ...(faqNode ? [faqNode] : []),
    ],
  };

  const relatedPosts = relatedBlogCards(slug, 3);

  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={jsonLd} />
      {/* Dynamic Hero Banner for All Posts */}
      <section className="relative min-h-[500px] md:h-[65vh] w-full overflow-hidden flex items-center justify-center">
        {/* Dynamic Background with Cinematic Depth */}
        <div className="absolute inset-0 bg-[#070708]">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(255,100,0,0.15)_0%,transparent_70%)]" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(255,100,0,0.1)_0%,transparent_60%)]" />
          
          {/* Animated Grid / Tech Pattern */}
          <div className="absolute inset-0 opacity-[0.05]" 
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }} 
          />
          
          {/* Cinematic Light Streaks */}
          <div className="absolute top-1/4 -left-20 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent rotate-[35deg] blur-xl animate-pulse" />
          <div className="absolute bottom-1/3 -right-20 w-[800px] h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent -rotate-[25deg] blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Specialized Design for Live Casino Post Hero */}
        {slug === "fairplay-live-casino-features-and-services" ? (
          <div className="container relative z-10 px-4 flex items-center justify-center">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
               className="w-full max-w-6xl aspect-[16/9] md:aspect-[21/9] rounded-[2rem] border border-white/10 overflow-hidden relative shadow-[0_0_100px_rgba(255,100,0,0.2)]"
             >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596838132731-dd9fd7305951?auto=format&fit=crop&q=80&w=2000')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
                
                {/* Content Overlay matching reference style */}
                <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-center max-w-2xl">
                   <div className="flex items-center gap-3 mb-6">
                      <div className="px-3 py-1 bg-primary text-black text-[10px] font-black uppercase tracking-widest rounded">LIVE CASINO</div>
                      <div className="w-1 h-1 rounded-full bg-white/30" />
                      <div className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em]">Masterclass 2026</div>
                   </div>
                   
                   <h1 className="text-4xl md:text-6xl lg:text-7xl font-black italic uppercase tracking-tighter leading-[0.85] text-white mb-6">
                     Fairplay <br />
                     <span className="text-primary not-italic">Live Casino</span> <br />
                     <span className="text-white/80">Premium Guide</span>
                   </h1>

                   <p className="text-white/50 text-sm md:text-lg font-medium leading-relaxed mb-8 max-w-md hidden sm:block">
                     Experience HD streaming, professional dealers, and elite betting markets on India's most trusted live casino platform.
                   </p>

                   <div className="flex flex-wrap gap-4">
                      <a 
                        href={waLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white text-black font-black uppercase text-xs tracking-widest rounded-full hover:bg-primary transition-colors cursor-pointer"
                      >
                        Get Started
                      </a>
                      <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black uppercase text-xs tracking-widest rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                        Watch Live
                      </div>
                   </div>
                </div>

                {/* Corner Badges */}
                <div className="absolute top-8 right-8 hidden md:flex flex-col items-end gap-2">
                   <div className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-3">
                      <Zap className="w-4 h-4 text-primary" />
                      <div className="text-[9px] font-black text-white uppercase tracking-widest">Low Latency HD</div>
                   </div>
                   <div className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-3">
                      <ShieldCheck className="w-4 h-4 text-primary" />
                      <div className="text-[9px] font-black text-white uppercase tracking-widest">Certified Dealers</div>
                   </div>
                </div>

                <div className="absolute bottom-8 right-8 hidden md:block">
                   <div className="text-right">
                      <div className="text-[8px] font-bold text-white/30 uppercase tracking-[0.3em] mb-1">Fairplay</div>
                      <div className="text-xs font-black text-white/60 uppercase">Fairplay Gaming Group</div>
                   </div>
                </div>
             </motion.div>
          </div>
        ) : (
          <div className="container relative z-10 px-4 py-12 flex flex-col md:flex-row items-center gap-10">
            {/* Text Content Area */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 text-center md:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Masterclass Edition</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black italic uppercase tracking-tighter leading-[0.9] text-white mb-6 drop-shadow-2xl">
                {title}
              </h1>
              
              <p className="text-base md:text-lg text-white/50 max-w-xl font-medium leading-relaxed mb-8">
                {seo.description}
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 text-[10px] font-bold text-white/40 uppercase tracking-widest border-t border-white/5 pt-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>Updated: {postDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>Verified Content</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span>Elite Platform</span>
                </div>
              </div>
            </motion.div>

            {/* Visual 3D Component / Mockup Effect */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex-1 relative hidden lg:block"
            >
              <div className="relative aspect-[4/3] w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-3xl rounded-3xl border border-white/10 shadow-[0_0_100px_rgba(255,100,0,0.1)] overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596838132731-dd9fd7305951?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center mix-blend-overlay opacity-30" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                        <Zap className="w-5 h-5 text-primary" />
                      </div>
                      <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-[9px] font-bold border border-primary/30">
                        FAIRPLAY ELITE
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="h-3 w-1/3 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-primary animate-[shimmer_2s_infinite]" />
                      </div>
                      <div className="h-20 w-full bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                         <span className="text-[10px] text-white/20 font-black tracking-widest uppercase">Premium Data Stream</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-9 flex-1 bg-primary/20 rounded-xl border border-primary/30" />
                        <div className="h-9 flex-1 bg-white/10 rounded-xl border border-white/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>


      <article className="container max-w-4xl mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest mb-8 hover:gap-4 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> BACK TO INSIGHTS
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-primary/10 text-primary rounded">INSIGHTS</span>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-bold uppercase">
              <Calendar className="w-3 h-3 text-primary" /> {postDate}
            </div>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-bold uppercase border-l border-border pl-4">
              <ShieldCheck className="w-3 h-3 text-primary" /> VERIFIED CONTENT
            </div>
          </div>
          
          <AIOverview 
            title={`${seo.h1} — quick summary`}
            content={seo.intro}
          />

          <nav aria-label="Related Fairplay pages" className="flex flex-wrap gap-2 mb-10">
            {getHubLinksForSlug(slug, 6).map((link) =>
              link.search ? (
                <Link
                  key={`${link.to}-${link.label}`}
                  to={link.to as never}
                  search={link.search as never}
                  className="text-[11px] font-black uppercase tracking-widest px-3 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-primary hover:border-primary/40 transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={`${link.to}-${link.label}`}
                  to={link.to as never}
                  className="text-[11px] font-black uppercase tracking-widest px-3 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-primary hover:border-primary/40 transition-colors"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
          
          <div className="aspect-video bg-card border border-border rounded-[2rem] overflow-hidden mb-12 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 group-hover:opacity-100 transition-opacity" />
            <div className="w-full h-full flex items-center justify-center">
              <Zap className="w-24 h-24 text-primary/20 group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert prose-orange max-w-none"
        >
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            {content && content.length > 0 ? (
              content.map((item: any, idx: number) => {
                if (item.t === 'h1') return null;
                if (item.t === 'h2') return <h2 key={idx} className="text-3xl font-black italic uppercase tracking-tight text-foreground mt-16 mb-6">{item.c}</h2>;
                if (item.t === 'h3') return <h3 key={idx} className="text-xl font-bold italic uppercase tracking-tight text-primary mt-12 mb-4">{item.c}</h3>;
                if (item.t === 'ul' || item.t === 'ol') {
                  const ListTag = item.t as 'ul' | 'ol';
                  return (
                    <ListTag key={idx} className="list-disc list-inside space-y-2 text-muted-foreground/90 my-6">
                      {(item.c || item.items || [])
                        .filter((li: any) => typeof li === 'string')
                        .map((li: string, liIdx: number) => (
                          <li key={liIdx}>{li}</li>
                        ))}
                    </ListTag>
                  );
                }
                if (item.t === 'faq') {
                  return (
                    <div key={idx} className="space-y-6 my-12">
                      {(item.items || []).map((faq: any, fIdx: number) => (
                        <div key={fIdx} className="bg-card/30 border border-white/5 p-8 rounded-3xl hover:border-primary/20 transition-colors">
                          <h3 className="text-white font-black uppercase text-sm tracking-widest mb-3 flex items-center gap-3">
                            <Zap className="w-4 h-4 text-primary" /> {faq.q}
                          </h3>
                          <p className="text-muted-foreground/80 leading-relaxed italic">
                            {faq.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  );
                }
                return <p key={idx} className="text-muted-foreground/90">{item.c}</p>;

              })
            ) : (
              <div className="p-12 border border-dashed border-border rounded-3xl text-center">
                <Info className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-2">Post Under Review</h3>
                <p>This guide is being updated. Check back shortly or open a related Fairplay article from the blog index.</p>
              </div>
            )}
            
            <div className="bg-card/50 border border-primary/20 p-10 rounded-[2rem] my-16 relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/10 transition-colors" />
              <h3 className="text-primary font-black italic uppercase tracking-tighter text-2xl mb-4 relative z-10">Fairplay note</h3>
              <p className="italic text-foreground/80 text-xl relative z-10 leading-relaxed">
                Check the live price on the slip before you send. Keep stakes small until you have seen one settlement on this market.
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-16 bg-gradient-to-r from-card to-card/50 border border-primary/30 rounded-[3rem] text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px]" />
          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">Ready for a Fairplay ID?</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">WhatsApp for a verified ID, fund with UPI, then open cricket, football, tennis or casino on the same login.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center bg-primary text-primary-foreground font-black px-12 py-5 rounded-2xl hover:scale-105 transition-all shadow-2xl shadow-primary/30 uppercase tracking-widest italic overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10">Get VIP ID Now</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </a>
            <Link 
              to="/fairplay-id"
              className="text-foreground/60 hover:text-primary font-bold uppercase tracking-widest text-sm transition-colors"
            >
              Get Fairplay ID
            </Link>
            <Link 
              to="/schedule"
              className="text-foreground/60 hover:text-primary font-bold uppercase tracking-widest text-sm transition-colors"
            >
              2026 Schedule
            </Link>
            <Link 
              to="/services"
              className="text-foreground/60 hover:text-primary font-bold uppercase tracking-widest text-sm transition-colors"
            >
              Explore All Services
            </Link>
          </div>
        </motion.div>

        <InternalLinkGrid
          title="Related Fairplay pages"
          intro="Cluster hubs that sit next to this guide — ID, wallet, schedule and sport books."
          links={getHubLinksForSlug(slug)}
        />

        {relatedPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-[2px] w-10 bg-primary" />
                  <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">Latest Insights</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter">Related Blog Posts</h2>
              </div>
              <Link to="/blog" className="text-primary font-black uppercase text-xs tracking-widest inline-flex items-center gap-2 hover:gap-3 transition-all">
                View All Posts <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post, i) => (
                  <Link
                    key={post.slug}
                    to="/posts/$slug"
                    params={{ slug: post.slug }}
                    className="group relative bg-card/40 border border-white/5 rounded-[2rem] p-8 overflow-hidden hover:border-primary/30 transition-all hover:-translate-y-1"
                  >
                    <div className="absolute -right-12 -top-12 w-40 h-40 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 mb-5">
                        <Calendar className="w-3 h-3 text-primary" /> {post.date}
                      </div>
                      <h3 className="text-lg font-black italic uppercase tracking-tight text-foreground leading-snug mb-4 group-hover:text-primary transition-colors line-clamp-3">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground/70 leading-relaxed line-clamp-3">{post.desc}</p>
                      <div className="mt-6 text-primary text-[10px] font-black uppercase tracking-[0.25em] inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                        Read Guide <ArrowLeft className="w-3 h-3 rotate-180" />
                      </div>
                    </div>
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500" />
                    <span className="sr-only">{i}</span>
                  </Link>
              ))}
            </div>
          </motion.section>
        )}
      </article>
    </div>
  )
}

