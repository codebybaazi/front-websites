import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { parse, compareDesc } from "date-fns";
import { AIOverview } from "@/components/AIOverview";
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
import { Sparkles } from "lucide-react";

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

function getPostSummary(blocks: BlogBlock[], maxLength = 300): string {
  // Extract first meaningful paragraph from actual content blocks
  for (const block of blocks) {
    if (block.t === 'p' && typeof block.c === 'string' && block.c.length > 50) {
      const text = block.c.trim();
      if (text.length > maxLength) {
        return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
      }
      return text;
    }
    if (block.t === 'ul' && block.items && block.items.length > 0) {
      const firstItem = block.items[0];
      if (typeof firstItem === 'string' && firstItem.length > 50) {
        return firstItem.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
      }
    }
  }
  return '';
}

interface AIPowerviewContent {
  title: string;
  summary: string;
  tags: string[];
  benefits: { num: string; text: string }[];
  ctaText: string;
}

function getAIPowerviewContent(
  slug: string,
  blocks: BlogBlock[],
  category: string,
  title: string
): AIPowerviewContent {
  // Extract key points from content blocks for dynamic bullets
  const keyPoints: string[] = [];
  let extractedSteps: string[] = [];
  
  for (const block of blocks) {
    if (block.t === 'ul' && block.items) {
      block.items.forEach((item) => {
        if (typeof item === 'string' && item.length > 20 && item.length < 150) {
          keyPoints.push(item.trim());
        }
        if (typeof item === 'string') {
          const stepMatch = item.match(/^(step\s*\d+|\d+\.|first|second|third|then|next|finally|after|before)\s+/i);
          if (stepMatch) {
            extractedSteps.push(item.trim());
          }
        }
      });
    }
    if (block.t === 'ol' && block.items) {
      block.items.forEach((item) => {
        if (typeof item === 'string' && item.length > 20) {
          extractedSteps.push(item.trim());
        }
      });
    }
  }

  // Extract keywords from title for tags
  const titleWords = title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split('\s')
    .filter(w => w.length > 3)
    .filter(w => !['fairplay', 'guide', 'with', 'from', 'your', 'this', 'that', 'using', 'about'].includes(w));
  
  const baseTags = ['Fairplay ID'];
  if (category === 'Events') baseTags.push('Live Betting');
  if (category === 'Guide') baseTags.push('Betting Tips');
  if (category === 'Analysis') baseTags.push('Match Prediction');
  if (category === 'Support') baseTags.push('Help Center');
  if (category === 'Strategy') baseTags.push('Winning Tips');
  
  const titleTags = titleWords.slice(0, 3).map(w => w.charAt(0).toUpperCase() + w.slice(1));
  const allTags = [...new Set([...baseTags, ...titleTags])].slice(0, 5);

  // Generate category-specific benefits
  const categoryBenefits: Record<string, { num: string; text: string }[]> = {
    Events: [
      { num: '01', text: 'Live match odds and real-time betting markets covered' },
      { num: '02', text: 'Expert analysis for upcoming tournaments and fixtures' },
      { num: '03', text: 'Tactical breakdowns to inform your in-play decisions' },
    ],
    Guide: [
      { num: '01', text: 'Clear step-by-step instructions from account setup to first bet' },
      { num: '02', text: 'Platform features and tools explained in plain language' },
      { num: '03', text: 'Tips verified against current platform interface' },
    ],
    Analysis: [
      { num: '01', text: 'Data-backed match previews with team form analysis' },
      { num: '02', text: 'Head-to-head records and pitch conditions factored in' },
      { num: '03', text: 'Betting market movements and value bets identified' },
    ],
    Support: [
      { num: '01', text: 'Common issues diagnosed with verified workarounds' },
      { num: '02', text: 'Contact methods and response times clearly explained' },
      { num: '03', text: 'Account security best practices included' },
    ],
    Strategy: [
      { num: '01', text: 'Bankroll management principles for long-term play' },
      { num: '02', text: 'Market-specific betting approaches explained' },
      { num: '03', text: 'Risk assessment frameworks for smarter wagers' },
    ],
  };

  const defaultBenefits: { num: string; text: string }[] = [
    { num: '01', text: 'Comprehensive coverage of essential concepts and terms' },
    { num: '02', text: 'Practical examples based on real betting scenarios' },
    { num: '03', text: 'Actionable insights to improve your betting outcomes' },
  ];

  const benefits = categoryBenefits[category] || defaultBenefits;

  // Generate SEO-friendly title
  const seoTitle = `${title.split(' ').slice(0, 6).join(' ')} — Quick Overview`;

  // Generate CTA based on content
  const ctaMap: Record<string, string> = {
    Events: 'Get Live Betting ID',
    Guide: 'Get Your Fairplay ID',
    Analysis: 'Start Betting Today',
    Support: 'Contact Support Now',
    Strategy: 'Apply These Strategies',
  };
  const ctaText = ctaMap[category] || 'Get Fairplay ID';

  return {
    title: seoTitle,
    summary: getPostSummary(blocks, 400) || `${title} — comprehensive guide covering all essential aspects, strategies, and insider tips for getting the most out of your Fairplay experience.`,
    tags: allTags,
    benefits,
    ctaText,
  };
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

  // Generate dynamic AI Powerview content based on post specifics
  const powerviewContent = getAIPowerviewContent(slug, content, category, seo.h1);

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

            {/* AI Powerview Section - Dynamic Post-Specific Content */}
            <section className="mt-10 mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-flame/5 rounded-2xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/8 rounded-2xl p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-flame flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-flame rounded-xl blur opacity-30 -z-10" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-0.5 block">AI Powerview</span>
                    <h2 className="text-lg md:text-xl font-bold tracking-tight">{powerviewContent.title}</h2>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-semibold mb-3 text-white/80">This guide covers</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">
                      {powerviewContent.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {powerviewContent.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-3 text-white/80">Why this guide helps</h3>
                    <ul className="space-y-3">
                      {powerviewContent.benefits.map((item) => (
                        <li key={item.num} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-md bg-primary/20 border border-primary/30 flex items-center justify-center text-primary text-xs font-bold">
                            {item.num}
                          </span>
                          <span className="text-white/50 text-sm leading-relaxed pt-0.5">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-white/60 text-sm">Ready to implement what you learned?</p>
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-flame text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all active:scale-95"
                  >
                    {powerviewContent.ctaText}
                  </a>
                </div>
              </div>
            </section>

            <BlogPost.Hero className="mt-2" />

            <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(14rem,1fr)] lg:gap-10 xl:gap-14">
              <BlogPost.Content>
                <AIOverview title={`${seo.h1} — quick summary`} content={postSummary || seo.description} />

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
