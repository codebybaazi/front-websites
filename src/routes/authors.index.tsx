import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { QuickLinks } from "@/components/QuickLinks";
import { AUTHORS } from "@/data/authors";
import { POSTS } from "@/data/posts";
import { siteUrl } from "@/data/site";
import { ChevronRight, Home } from "lucide-react";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export const Route = createFileRoute("/authors/")({
  head: () => {
    const url = `${siteUrl}/authors`;
    const title = "Lotus365 Editorial Team — Authors & Contributors";
    const desc =
      "Meet the Lotus365 editorial desk — the named writers behind our cricket, football, casino, platform and payments coverage, with their background and beat.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: title,
            description: desc,
            url,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Lotus365 editorial team",
            itemListElement: AUTHORS.map((a, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${siteUrl}/authors/${a.slug}`,
              item: {
                "@type": "Person",
                name: a.name,
                jobTitle: a.role,
                url: `${siteUrl}/authors/${a.slug}`,
              },
            })),
          }),
        },
      ],
    };
  },
  component: AuthorsIndexRoute,
});

function AuthorsIndexRoute() {
  const counts = new Map<string, number>();
  for (const p of POSTS) counts.set(p.author, (counts.get(p.author) ?? 0) + 1);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <nav className="mx-auto max-w-6xl px-6 pt-8 text-xs text-foreground/85">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link to="/" className="hover:text-primary inline-flex items-center gap-1">
              <Home className="h-3 w-3" /> Home
            </Link>
          </li>
          <li><ChevronRight className="h-3 w-3" /></li>
          <li className="text-primary/90">Authors</li>
        </ol>
      </nav>

      <section className="mx-auto max-w-6xl px-6 pt-8 pb-10">
        <div className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-4">
          Editorial team
        </div>
        <h1 className="font-display text-3xl md:text-5xl mb-4">
          The people writing <span className="gold-text">Lotus365</span>
        </h1>
        <p className="text-foreground/90 leading-relaxed max-w-2xl">
          Every guide, review and match preview on Lotus365 carries a named byline.
          Here's who's behind the desk — what they cover, and what they did before
          this became their beat.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-5">
          {AUTHORS.map((author) => (
            <Link
              key={author.slug}
              to="/authors/$slug"
              params={{ slug: author.slug }}
              className="glass-card rounded-2xl p-7 flex items-start gap-5 group hover:border-primary/40 transition-colors"
            >
              <div className="h-14 w-14 rounded-full grid place-items-center bg-primary/15 text-primary text-base font-semibold gold-border shrink-0">
                {initials(author.name)}
              </div>
              <div className="flex-1">
                <div className="text-[11px] uppercase tracking-[0.25em] text-primary/70 mb-1">
                  {author.role}
                </div>
                <div className="font-display text-xl mb-2 group-hover:text-primary transition-colors">
                  {author.name}
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed mb-3">
                  {author.bio}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {author.focus.map((f) => (
                    <span
                      key={f}
                      className="text-[10px] uppercase tracking-[0.2em] gold-border rounded-full px-2.5 py-1 text-primary"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-foreground/80">
                  {counts.get(author.name) ?? 0} article
                  {(counts.get(author.name) ?? 0) === 1 ? "" : "s"} on Lotus365
                </div>
                <div className="mt-3 text-primary text-sm inline-flex items-center gap-1">
                  View profile & articles <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <QuickLinks currentPath="/authors" heading="Keep exploring Lotus365" />
      <SiteFooter />
    </div>
  );
}
