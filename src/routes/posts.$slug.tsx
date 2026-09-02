import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { parse, compareDesc } from "date-fns";
import { getBlogArticleBlocks, getBlogSeo } from "@/utils/blog-seo";
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
import { motion } from "framer-motion";
import { Sparkles, BookOpen, Clock, Shield } from "lucide-react";

export const Route = createFileRoute("/posts/$slug")({
  loader: ({ params }: { params: { slug: string } }) => {
    return { slug: params.slug };
  },
  head: ({ loaderData }) => {
    const slug = loaderData?.slug || "";
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
        { name: "robots", content: "index, follow" },
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

  const recentArticles = sorted.filter((article) => article.slug !== slug).slice(0, 4);
  const recent = recentArticles.map(articleToState);
  const recentSlugs = new Set(recentArticles.map((article) => article.slug));

  const related = sorted
    .filter(
      (article) =>
        article.slug !== slug && article.category === category && !recentSlugs.has(article.slug),
    )
    .slice(0, 4)
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
      <div className="min-h-screen bg-[#0B1120] text-white selection:bg-primary/30">
        <JsonLd data={jsonLd} />

        <div className="container mx-auto max-w-7xl px-4 pb-20 pt-28 md:px-6 md:pt-32">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back to guides
          </Link>

          <BlogPost.Frame>
            <BlogPost.Header>
              <BlogPost.Title
                as="h1"
                className="font-display max-w-[22ch] text-3xl font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-4xl md:text-5xl"
              />
              <BlogPost.Meta className="mt-5" />
            </BlogPost.Header>

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

                <aside className="mt-12 rounded-xl border border-primary/25 bg-card/50 p-7">
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
