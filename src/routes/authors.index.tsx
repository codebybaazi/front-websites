import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHeadFor } from "@/utils/page-seo";
import { SITE_AUTHORS, authorsCollectionJsonLd, postsWrittenBy } from "@/lib/authors";
import { AuthorAvatar } from "@/components/AuthorByline";
import { JsonLd } from "@/components/JsonLd";
import { AIOverview } from "@/components/AIOverview";

export const Route = createFileRoute("/authors/")({
  head: () => pageHeadFor("/authors"),
  component: AuthorsIndexPage,
});

function AuthorsIndexPage() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      <JsonLd data={authorsCollectionJsonLd()} />
      <section className="relative pt-32 pb-16 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.08),transparent_70%)]" />
        <div className="container max-w-5xl mx-auto px-4 relative z-10">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6">Fairplay India desk</p>
          <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-[0.9] mb-6">
            Our writers
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
            Blog posts on this site are credited to named people on the Fairplay India desk. Each blog category has one
            writer. Open a profile for background, what they cover, and every post under their name.
          </p>
          <AIOverview
            title="Who writes Fairplay India"
            content="Fairplay India names a writer per blog category: how-to, support desk, cricket events, markets, strategy, app/platform, and desk news. Profiles are public. Posts link to the person who owns that category."
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-5xl mx-auto px-4 space-y-10">
          {SITE_AUTHORS.map((author) => {
            const count = postsWrittenBy(author.slug).length;
            return (
              <article
                key={author.slug}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <AuthorAvatar author={author} size="lg" />
                  <div className="min-w-0 flex-1">
                    <h2 className="text-2xl md:text-3xl font-black italic tracking-tight uppercase">
                      <Link
                        to="/authors/$slug"
                        params={{ slug: author.slug }}
                        className="hover:text-primary transition-colors"
                      >
                        {author.name}
                      </Link>
                    </h2>
                    <p className="text-primary text-sm font-bold mt-1">{author.role}</p>
                    <p className="text-[11px] uppercase tracking-widest text-white/35 mt-1">
                      {author.category} · {count} {count === 1 ? "post" : "posts"}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {author.focus.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-bold text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-5 text-muted-foreground leading-relaxed">{author.shortBio}</p>
                    <p className="mt-3 text-muted-foreground leading-relaxed hidden md:block">{author.about[0]}</p>
                    <Link
                      to="/authors/$slug"
                      params={{ slug: author.slug }}
                      className="inline-flex mt-6 text-[11px] font-black uppercase tracking-widest text-primary hover:underline"
                    >
                      {author.firstName}'s profile and posts
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
