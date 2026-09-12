import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { parse, compareDesc } from "date-fns";
import { getBlogArticleBlocks, getBlogSeo, hasUniqueBlogContent } from "@/utils/blog-seo";
import { JsonLd } from "@/components/JsonLd";
import { faqPageNode } from "@/utils/faq-schema";
import { blogArticles } from "@/lib/blog-data";
import { BLOG_POST_DATES, blogPostIsoDate } from "@/utils/blog-post-dates";
import { OG_IMAGE, absolutePageUrl } from "@/utils/page-seo";
import { waLink } from "@/lib/whatsapp";
import { BlogPost } from "@/components/blog/BlogPost";
import { BlogPostBody, readMinutesFromBlocks, type BlogBlock } from "@/components/blog/BlogPostBody";
import { BlogPostList } from "@/components/blog/BlogPostList";
import { toBlogPostState, type BlogPostState } from "@/components/blog/blog-post-context";
import { getAuthorForCategory } from "@/lib/authors";
import { authorRefNode } from "@/utils/author-schema";
import { AuthorAvatar } from "@/components/AuthorAvatar";
import { motion } from "framer-motion";
import { Sparkles, BookOpen, Clock, Shield, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/posts/$slug")({
  loader: ({ params }: { params: { slug: string } }) => {
    return { slug: params.slug };
  },
  head: ({ loaderData }) => {
    const slug = loaderData?.slug || "";
    const seo = getBlogSeo(slug);
    const url = absolutePageUrl(`/posts/${slug}`);
    // Templated posts (no entry in blog-post-overrides.ts yet) stay noindex so
    // thin, near-duplicate bodies don't compete for rankings. Flip to index once
    // a post gets unique, hand-written content — see BLOG_POST_OVERRIDES.
    const indexable = hasUniqueBlogContent(slug);

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
        { name: "robots", content: indexable ? "index, follow" : "noindex, follow" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: PostDetail,
});

function articleToState(article: (typeof blogArticles)[number]): BlogPostState {
  const seo = getBlogSeo(article.slug);
  return toBlogPostState({
    slug: article.slug,
    title: seo.h1,
    description: seo.description,
    date: article.date,
    category: article.category,
    icon: article.icon,
  });
}

function sidebarPosts(slug: string, category: string) {
  const sorted = [...blogArticles].sort((a, b) => {
    const dateA = parse(a.date, "MMM dd, yyyy", new Date());
    const dateB = parse(b.date, "MMM dd, yyyy", new Date());
    return compareDesc(dateA, dateB);
  });

  const recentArticles = sorted.filter((article) => article.slug !== slug).slice(0, 3);
  const recent = recentArticles.map(articleToState);
  const recentSlugs = new Set(recentArticles.map((article) => article.slug));

  const related = sorted
    .filter(
      (article) =>
        article.slug !== slug && article.category === category && !recentSlugs.has(article.slug),
    )
    .slice(0, 3)
    .map(articleToState);

  return { recent, related };
}

function getPostSummary(blocks: BlogBlock[]): string {
  for (const block of blocks) {
    if (block.t === 'p' && typeof block.c === 'string' && block.c.length > 50) {
      const text = block.c.trim();
      if (text.length > 300) {
        return text.substring(0, 300).replace(/\s+\S*$/, '') + '...';
      }
      return text;
    }
    if (block.t === 'ul' && block.items && block.items.length > 0) {
      const firstItem = block.items[0];
      if (typeof firstItem === 'string' && firstItem.length > 50) {
        return firstItem.substring(0, 300).replace(/\s+\S*$/, '') + '...';
      }
    }
  }
  return '';
}

function getPostTags(blocks: BlogBlock[]): string[] {
  const tags: string[] = [];
  const blockText = blocks.map(b => typeof b.c === 'string' ? b.c : '').join(' ').toLowerCase();
  
  if (blockText.includes('cricket') || blockText.includes('ipl') || blockText.includes('t20')) tags.push('Cricket ID');
  if (blockText.includes('football') || blockText.includes('soccer')) tags.push('Football');
  if (blockText.includes('tennis')) tags.push('Tennis');
  if (blockText.includes('casino') || blockText.includes('blackjack') || blockText.includes('roulette')) tags.push('Live Casino');
  if (blockText.includes('deposit') || blockText.includes('upi') || blockText.includes('wallet')) tags.push('UPI Wallet');
  if (blockText.includes('login') || blockText.includes('password')) tags.push('Login');
  if (blockText.includes('bonus') || blockText.includes('promotion')) tags.push('Bonuses');
  if (blockText.includes('security') || blockText.includes('safe')) tags.push('Security');
  
  return tags.length > 0 ? tags.slice(0, 4) : ['Guide', 'Fairplay ID'];
}

interface AIPowerviewProps {
  title: string;
  summary: string;
  tags: string[];
  category: string;
}

function AIPowerview({ title, summary, tags, category }: AIPowerviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-primary/8 via-primary/[0.02] to-transparent mb-10"
    >
      <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/15 blur-[60px] rounded-full" />
      
      <div className="relative p-7 md:p-9">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-flame rounded-xl blur opacity-30 -z-10" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1 block">AI Powerview</span>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">
              {title}
            </h2>
          </div>
        </div>

        <p className="text-[15px] text-white/60 leading-relaxed mb-6 max-w-3xl">
          {summary}
        </p>

        <div className="flex flex-wrap gap-2.5 mb-5">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 pt-5 border-t border-white/5">
          <div className="flex items-center gap-2 text-xs text-white/40">
            <BookOpen className="w-4 h-4" />
            <span>{category} guide</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/40">
            <Shield className="w-4 h-4" />
            <span>Verified content</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PostDetail() {
  const { slug } = Route.useLoaderData();
  const seo = getBlogSeo(slug);
  const content = getBlogArticleBlocks(slug);
  const meta = blogArticles.find((article) => article.slug === slug);
  const postDate = BLOG_POST_DATES[slug] || meta?.date || "Jan 2026";
  const isoDate = blogPostIsoDate(slug);
  const url = absolutePageUrl(`/posts/${slug}`);
  const category = meta?.category ?? "Guide";
  const postSummary = getPostSummary(content);
  const postTags = getPostTags(content);

  const faqNode = faqPageNode(
    content
      .filter((item) => item.t === "faq")
      .flatMap((item) => (item.items || []) as Array<{ q?: string; a?: string }>),
  );
  const byline = getAuthorForCategory(category);
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
        author: authorRefNode(byline),
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

  const post = toBlogPostState({
    slug,
    title: seo.h1,
    description: seo.description,
    date: postDate,
    category,
    ...(meta?.icon ? { icon: meta.icon } : {}),
    readMinutes: readMinutesFromBlocks(content),
  });

  const { recent, related } = sidebarPosts(slug, category);

  return (
    <BlogPost.Provider post={post}>
      <div className="min-h-screen bg-[#05070f] text-white selection:bg-primary/30 relative overflow-hidden">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#060a14] via-[#04080f] to-[#03060d]" />
        
        {/* Primary radial glow - top left */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_15%_10%,rgba(47,185,74,0.15)_0%,transparent_55%)]" />
        
        {/* Secondary glow - bottom right */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_85%_90%,rgba(47,185,74,0.1)_0%,transparent_50%)]" />
        
        {/* Accent glow - center top */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_0%,rgba(47,185,74,0.08)_0%,transparent_45%)]" />
        
        {/* Animated light orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse opacity-60" />
        <div className="absolute bottom-40 right-32 w-80 h-80 bg-primary/8 rounded-full blur-[120px] animate-pulse opacity-50" style={{animationDelay:'1s'}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[150px] animate-pulse opacity-30" style={{animationDelay:'2s'}} />
        
        {/* Subtle geometric grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)',backgroundSize:'60px_60px'}} />
        
        {/* Diagonal accent lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        
        {/* Noise/grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{backgroundImage:'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")',backgroundSize:'200px_200px'}} />
        
        {/* Vignette overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070f] via-transparent to-[#05070f]/30 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,7,15,0.4)_100%)]" />
        <JsonLd data={jsonLd} />

        <div className="container mx-auto max-w-7xl px-4 pb-20 pt-28 md:px-6 md:pt-32 relative z-10">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back to guides
          </Link>

          <BlogPost.Header>
            <BlogPost.Title
              as="h1"
              className="font-display w-full text-3xl font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-4xl md:text-5xl"
            />
            <BlogPost.Meta className="mt-5" />
          </BlogPost.Header>

          <BlogPost.Frame>
            <BlogPost.Hero className="mt-2" />

            <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(14rem,1fr)] lg:gap-10 xl:gap-14">
              <BlogPost.Content>
                <AIPowerview
                  title={`${seo.h1} — quick summary`}
                  summary={postSummary || seo.description}
                  tags={postTags}
                  category={category}
                />

                <BlogPostBody blocks={content} />

                <Link
                  to="/authors/$slug"
                  params={{ slug: byline.slug }}
                  className="mt-12 flex items-start gap-4 rounded-xl border border-white/8 bg-white/[0.02] p-6 transition-colors hover:border-primary/30"
                >
                  <AuthorAvatar name={byline.name} className="size-12 text-sm" />
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-white/30">Written by</p>
                    <p className="mt-1 text-base font-semibold text-white">{byline.name}</p>
                    <p className="text-sm text-white/40">{byline.role}</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{byline.shortBio}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Full bio <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </Link>

                <aside className="mt-8 rounded-xl border border-primary/25 bg-card/50 p-7">
                  <h2 className="font-display text-xl font-semibold tracking-tight text-white">
                    Need a Fairplay ID?
                  </h2>
                  <p className="mt-2 max-w-[52ch] text-[15px] leading-relaxed text-white/70">
                    WhatsApp the published number. Same ID for cricket, football, tennis and live tables.
                  </p>
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Open an ID on WhatsApp
                  </a>
                </aside>
              </BlogPost.Content>

              <aside className="flex flex-col gap-10 lg:sticky lg:top-28 lg:self-start">
                {recent.length > 0 ? (
                  <section aria-labelledby="recent-guides-heading">
                    <h2 id="recent-guides-heading" className="mb-4 text-sm font-semibold text-white">
                      Recent guides
                    </h2>
                    <BlogPostList.Sidebar posts={recent} />
                  </section>
                ) : null}

                {related.length > 0 ? (
                  <section aria-labelledby="related-guides-heading">
                    <h2 id="related-guides-heading" className="mb-4 text-sm font-semibold text-white">
                      More in {category}
                    </h2>
                    <BlogPostList.Sidebar posts={related} />
                  </section>
                ) : null}
              </aside>
            </div>
          </BlogPost.Frame>
        </div>
      </div>
    </BlogPost.Provider>
  );
}
