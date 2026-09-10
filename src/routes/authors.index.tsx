import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { authors } from "@/data/authors";
import { ogImageMeta } from "@/lib/seo";
import { posts } from "@/data/posts";

function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export const Route = createFileRoute("/authors/")({
  head: () => ({
    meta: [
      { title: "Our Writers — Mahadev Book" },
      { name: "description", content: "Meet the analysts and support staff behind Mahadev Book's betting guides, each covering the category they actually work in day to day." },
      { property: "og:title", content: "Our Writers — Mahadev Book" },
        { name: "twitter:title", content: "Our Writers — Mahadev Book" },
      { property: "og:description", content: "Meet the analysts and support staff behind Mahadev Book's betting guides." },
      { property: "og:url", content: "https://mahadevbookss.com/authors" },
      { property: "og:type", content: "website" },
      ...ogImageMeta("Our Writers — Mahadev Book"),
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/authors" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://mahadevbookss.com/blog" },
            { "@type": "ListItem", position: 3, name: "Authors", item: "https://mahadevbookss.com/authors" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: authors.map((a, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Person",
              name: a.name,
              jobTitle: a.role,
              url: `https://mahadevbookss.com/authors/${a.slug}`,
            },
          })),
        }),
      },
    ],
  }),
  component: AuthorsIndex,
});

function AuthorsIndex() {
  const categories = ["All", ...authors.map((a) => a.category)];
  const [active, setActive] = useState("All");
  const visible = active === "All" ? authors : authors.filter((a) => a.category === active);

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Our writers
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          The people behind the <span className="text-gradient-gold">guides</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Every category on the Mahadev Book blog is written by someone who actually works that desk, whether that's payments, KYC, live casino or match analysis. Here's who they are.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
                active === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((author) => {
            const articleCount = posts.filter((p) => p.category === author.category).length;
            return (
              <Link
                key={author.slug}
                to="/authors/$slug"
                params={{ slug: author.slug }}
                className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary/15 text-primary font-display text-lg font-bold">
                    {initials(author.name)}
                  </div>
                  <div>
                    <h2 className="font-display text-lg font-bold group-hover:text-primary transition">
                      {author.name}
                    </h2>
                    <p className="text-sm text-primary font-semibold">{author.role}</p>
                  </div>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs uppercase tracking-widest text-primary font-semibold">
                  {author.category}
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{author.bio}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{articleCount} article{articleCount === 1 ? "" : "s"}</span>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold">
                    View profile <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
