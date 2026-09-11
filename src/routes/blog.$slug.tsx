import { createFileRoute, notFound } from "@tanstack/react-router";
import { PostArticle } from "@/components/PostArticle";
import { ContentNotFound } from "@/components/ContentPage";
import { getPost, POSTS } from "@/data/posts";
import { authorSlugForName } from "@/data/authors";
import { toFaqPageJsonLd } from "@/lib/derive-page-faqs";

// (4) High-volume Semrush keyword sets per category (India market).
const CATEGORY_KEYWORDS: Record<string, string[]> = {
  Platform: [
    "lotus365",
    "lotus365.in",
    "lotus 365",
    "lotus365 login",
    "lotus365 app",
    "lotus365 apk",
    "lotus365 download apk",
    "lotus365 win",
    "lotus365 register",
    "lotus 365 id",
  ],
  Cricket: ["cricket satta", "ipl betting", "cricket betting app", "t20 world cup betting", "online cricket betting"],
  Casino: ["online casino india", "teen patti real money", "andar bahar", "live casino india", "casino app india"],
  Football: ["football betting india", "epl betting", "football odds", "isl betting"],
  Guides: ["betting id", "online betting india", "betting apps india", "best betting site india"],
};

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    // (8) Internal linking — same category first, then fill from other categories to always show 6.
    const sameCat = POSTS.filter(
      (p) => p.slug !== post.slug && p.category === post.category
    );
    const others = POSTS.filter(
      (p) => p.slug !== post.slug && p.category !== post.category
    );
    const related = [...sameCat, ...others].slice(0, 6);
    return { post, related };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Post not found — Lotus365" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.post;
    const url = `https://lotus365id.com/blog/${params.slug}`;
    // (3) Per-category OG image; falls back to the site-wide banner.
    const ogImage = `https://lotus365id.com/og/${p.category.toLowerCase()}.jpg`;
    // (2) Real last-modified date when provided, otherwise the publish date.
    const modified = p.updated ?? p.date;
    // (7) Word count + ISO-8601 reading time for Article rich results.
    const wordCount = p.sections.reduce(
      (n, s) => n + s.body.split(/\s+/).length + (s.points?.join(" ").split(/\s+/).length ?? 0),
      0
    );
    const timeRequired = `PT${p.readMinutes}M`;
    const clamp = (s: string, max: number) =>
      s.length <= max ? s : s.slice(0, max - 1).replace(/\s+\S*$/, "").trimEnd() + "…";

    // (1) Unique, keyword-led meta title (≤60 chars).
    // If the H1 is already title-length, do not append "| Lotus365" and clip the keyword.
    const metaTitle = clamp(p.h1.length >= 50 ? p.h1 : `${p.h1} | Lotus365`, 60);
    // (2) Unique description from the post's excerpt (not the templated description)
    const metaDesc = clamp(p.excerpt || p.description, 155);
    const ogTitle = clamp(p.h1, 60);

    // (4) Keywords: high-volume Semrush terms for the category + slug tokens.
    const semrushKws = CATEGORY_KEYWORDS[p.category] ?? CATEGORY_KEYWORDS.Guides;
    const keywords = Array.from(
      new Set([
        "lotus365",
        ...semrushKws,
        `lotus365 ${p.category.toLowerCase()}`,
        ...p.slug.split("-").filter((w) => w.length > 3),
      ])
    )
      .slice(0, 14)
      .join(", ");

    // (5) FAQPage JSON-LD from any "Frequently asked questions" section
    const faqSection = p.sections.find((s) =>
      /frequently asked questions/i.test(s.heading)
    );
    const faqPairs =
      faqSection?.points
        ?.map((pt) => {
          const [q, ...rest] = pt.split(/\s—\s|\s-\s|\?\s+/);
          const a = rest.join(" ").trim();
          const question = pt.includes("?") ? pt.split("?")[0].trim() + "?" : q.trim();
          const answer = a || pt.replace(question, "").trim();
          return question && answer ? { q: question, a: answer } : null;
        })
        .filter((f): f is { q: string; a: string } => f !== null) ?? [];

    const scripts: Array<{ type: string; children: string }> = [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.h1,
          description: metaDesc,
          image: [ogImage], // (3)
          datePublished: p.date,
          dateModified: modified, // (2)
          author: {
            "@type": "Person",
            name: p.author,
            jobTitle: p.authorRole,
            url: `https://lotus365id.com/authors/${authorSlugForName(p.author)}`,
          },
          publisher: {
            "@type": "Organization",
            name: "Lotus365",
            logo: {
              "@type": "ImageObject",
              url: "https://lotus365id.com/favicon.png",
            },
          },
          articleSection: p.category,
          keywords,
          wordCount, // (7)
          timeRequired, // (7)
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          inLanguage: "en-IN",
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["#page-h1", "#ai-overview-summary"],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://lotus365id.com/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://lotus365id.com/blog" },
            {
              "@type": "ListItem",
              position: 3,
              name: p.category,
              item: `https://lotus365id.com/blog/category/${p.category.toLowerCase()}`,
            },
            { "@type": "ListItem", position: 4, name: p.h1, item: url },
          ],
        }),
      },
      // (8) ItemList of related posts — structured internal-linking signal.
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `Related reads on Lotus365 ${p.category}`,
          itemListElement: loaderData.related.map((r, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `https://lotus365id.com/blog/${r.slug}`,
            name: r.h1,
          })),
        }),
      },
    ];

    if (faqPairs.length > 0) {
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify(toFaqPageJsonLd(faqPairs)),
      });
    }

    // (AEO fix) HowTo schema for posts that are genuinely step-by-step guides —
    // matched by title rather than applied blog-wide, so it only covers posts
    // that are actually instructional. Excludes the FAQ/closing sections.
    if (
      /^how (to|do|does)\b/i.test(p.h1) ||
      /^how (to|do|does)\b/i.test(p.title) ||
      /complete guide to getting/i.test(`${p.h1} ${p.title}`) ||
      /lotus365 app guide/i.test(`${p.h1} ${p.title}`) ||
      /complete beginner's guide/i.test(`${p.h1} ${p.title}`)
    ) {
      const stepSections = p.sections.filter(
        (s) => !/frequently asked questions/i.test(s.heading) && !/bottom line/i.test(s.heading)
      );
      if (stepSections.length >= 2) {
        scripts.push({
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: p.h1,
            description: metaDesc,
            step: stepSections.map((s, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: s.heading,
              text: s.body,
            })),
          }),
        });
      }
    }

    return {
      meta: [
        { title: metaTitle },
        { name: "description", content: metaDesc },
        { name: "keywords", content: keywords },
        { name: "author", content: p.author },
        // (3) Social preview image
        { property: "og:title", content: ogTitle },
        { property: "og:description", content: metaDesc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: ogImage },
        { property: "og:image:alt", content: `${p.h1} — Lotus365` },
        { property: "og:site_name", content: "Lotus365" },
        { property: "og:locale", content: "en_IN" },
        { property: "article:published_time", content: p.date },
        { property: "article:modified_time", content: modified },
        { property: "article:author", content: p.author },
        { property: "article:section", content: p.category },
        { property: "article:tag", content: keywords },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: ogTitle },
        { name: "twitter:description", content: metaDesc },
        { name: "twitter:image", content: ogImage },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts,
    };
  },
  component: PostRoute,
  notFoundComponent: () => <ContentNotFound slug="blog post" />,
  errorComponent: ({ error }) => <ContentNotFound slug={String(error)} />,
});

function PostRoute() {
  const { post, related } = Route.useLoaderData();
  return <PostArticle post={post} related={related} />;
}
