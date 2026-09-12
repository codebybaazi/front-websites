import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { parse, compareDesc } from "date-fns";
import { ArrowLeft, Briefcase, CalendarClock, Sparkles } from "lucide-react";
import { getAuthorBySlug, AUTHORS } from "@/lib/authors";
import { blogArticles } from "@/lib/blog-data";
import { getBlogSeo } from "@/utils/blog-seo";
import { toBlogPostState } from "@/components/blog/blog-post-context";
import { BlogPostList } from "@/components/blog/BlogPostList";
import { AuthorAvatar } from "@/components/AuthorAvatar";
import { JsonLd } from "@/components/JsonLd";
import { authorPersonJsonLd, authorPageUrl } from "@/utils/author-schema";
import { OG_IMAGE } from "@/utils/page-seo";

export const Route = createFileRoute("/authors/$slug")({
  loader: ({ params }: { params: { slug: string } }) => {
    const author = getAuthorBySlug(params.slug);
    if (!author) throw notFound();
    return { slug: params.slug };
  },
  head: ({ loaderData }) => {
    const author = getAuthorBySlug(loaderData?.slug ?? "");
    if (!author) return { meta: [{ title: "Author not found | Fairplay" }] };
    const title = `${author.name} | ${author.role} at Fairplay`;
    const description = author.shortBio;
    const url = authorPageUrl(author.slug);
    return {
      title,
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
        { property: "og:url", content: url },
        { property: "og:image", content: OG_IMAGE },
        { property: "og:locale", content: "en_IN" },
        { property: "og:site_name", content: "Fairplay" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: OG_IMAGE },
        { name: "robots", content: "index, follow" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: AuthorDetail,
});

function AuthorDetail() {
  const { slug } = Route.useLoaderData();
  const author = getAuthorBySlug(slug);
  if (!author) return null;

  const posts = blogArticles
    .filter((article) => article.category === author.category)
    .sort((a, b) => compareDesc(parse(a.date, "MMM dd, yyyy", new Date()), parse(b.date, "MMM dd, yyyy", new Date())))
    .slice(0, 6)
    .map((article) => {
      const seo = getBlogSeo(article.slug);
      return toBlogPostState({
        slug: article.slug,
        title: seo.h1,
        description: seo.description,
        date: article.date,
        category: article.category,
        icon: article.icon,
      });
    });

  const otherAuthors = AUTHORS.filter((a) => a.slug !== author.slug);

  return (
    <div className="flex flex-col bg-background text-foreground overflow-hidden">
      <JsonLd data={authorPersonJsonLd(author)} />

      <section className="relative pt-24 pb-16 overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.705_0.198_142_/_0.08),transparent_55%)]" />
        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <Link
            to="/authors"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden />
            All authors
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-6 sm:flex-row sm:items-center"
          >
            <AuthorAvatar name={author.name} className="size-20 text-2xl" />
            <div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">{author.name}</h1>
              <p className="mt-2 text-lg text-primary">{author.role}</p>
              <p className="mt-1 text-sm text-muted-foreground">Writing for Fairplay since {author.joined}</p>
            </div>
          </motion.div>

          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">{author.shortBio}</p>
          <p className="mt-4 max-w-2xl text-xs text-muted-foreground/60 leading-relaxed">
            {author.name} is the working byline for this beat on the Fairplay content desk — a fixed
            specialist and voice assigned to {author.category.toLowerCase()} content, published without an
            individual photo.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
                  <Briefcase className="size-4" /> Background
                </h2>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{author.background}</p>
              </div>
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
                  <CalendarClock className="size-4" /> Experience
                </h2>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{author.experience}</p>
              </div>
            </div>

            <div className="rounded-xl border border-white/8 bg-card/50 p-6 h-fit">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4 flex items-center gap-2">
                <Sparkles className="size-4 text-primary" /> Covers
              </h3>
              <ul className="space-y-2.5 text-sm text-foreground/80">
                {author.focus.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {posts.length > 0 ? (
        <section className="py-16 border-t border-white/8 bg-card/20">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold tracking-tight mb-8">Articles by {author.name}</h2>
            <BlogPostList.Grid posts={posts} />
          </div>
        </section>
      ) : null}

      <section className="py-16 border-t border-white/8">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">
            Rest of the desk
          </h2>
          <div className="flex flex-wrap gap-3">
            {otherAuthors.map((other) => (
              <Link
                key={other.slug}
                to="/authors/$slug"
                params={{ slug: other.slug }}
                className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-card/60 px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
              >
                <AuthorAvatar name={other.name} className="size-6 text-[10px]" />
                {other.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
