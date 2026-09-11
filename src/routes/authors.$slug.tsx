import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  authorForCategory,
  authorProfileJsonLd,
  getAuthorBySlug,
  postsWrittenBy,
  SITE_AUTHORS,
} from "@/lib/authors";
import { AuthorAvatar } from "@/components/AuthorByline";
import { JsonLd } from "@/components/JsonLd";
import { clipMetaDescription, pageHead } from "@/utils/page-seo";
import { Calendar } from "lucide-react";

export const Route = createFileRoute("/authors/$slug")({
  loader: ({ params }) => {
    const author = getAuthorBySlug(params.slug);
    if (!author) throw notFound();
    return { author, posts: postsWrittenBy(author.slug) };
  },
  head: ({ loaderData }) => {
    const author = loaderData?.author;
    if (!author) {
      return pageHead({ title: "Writer | Fairplay India", description: "Fairplay India writer profile." }, "/authors");
    }
    const title = `${author.name} | ${author.role} | Fairplay India`;
    return pageHead(
      {
        title,
        description: clipMetaDescription(author.shortBio),
      },
      `/authors/${author.slug}`,
    );
  },
  component: AuthorProfilePage,
});

function AuthorProfilePage() {
  const { author, posts } = Route.useLoaderData();
  const others = SITE_AUTHORS.filter((person) => person.slug !== author.slug);

  return (
    <div className="flex flex-col bg-background text-foreground">
      <JsonLd data={authorProfileJsonLd(author)} />
      <section className="relative pt-32 pb-16 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,100,0,0.1),transparent_60%)]" />
        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <Link
            to="/authors"
            className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-8 inline-block"
          >
            All writers
          </Link>
          <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
            <AuthorAvatar author={author} size="lg" />
            <div>
              <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase leading-none">
                {author.name}
              </h1>
              <p className="text-primary font-bold mt-3">{author.role}</p>
              <p className="text-sm text-white/45 mt-1">
                {author.category} posts · {author.pronouns}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-8">
            {author.focus.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-bold text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <article className="container max-w-4xl mx-auto px-4 py-16 space-y-14">
        <section>
          <h2 className="text-2xl font-black italic uppercase tracking-tight mb-5">About</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            {author.about.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black italic uppercase tracking-tight mb-5">Professional background</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            {author.background.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black italic uppercase tracking-tight mb-5">Experience</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            {author.experience.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black italic uppercase tracking-tight mb-5">Other details</h2>
          <ul className="space-y-3 text-muted-foreground leading-relaxed text-lg list-disc pl-5">
            {author.other.map((item) => (
              <li key={item.slice(0, 40)}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-white/40">Languages: {author.languages.join(", ")}</p>
        </section>

        <section>
          <h2 className="text-2xl font-black italic uppercase tracking-tight mb-3">
            Posts by {author.firstName}
          </h2>
          <p className="text-muted-foreground mb-8">
            Everything in the {author.category} category is credited to {author.name}.
          </p>
          {posts.length === 0 ? (
            <p className="text-muted-foreground border border-dashed border-white/10 rounded-2xl p-8">
              No {author.category} posts are live in that filter yet. {author.firstName} still owns this beat on the
              desk. See the{" "}
              <Link to="/blog" className="text-primary hover:underline">
                blog
              </Link>{" "}
              for other categories.
            </p>
          ) : (
            <ul className="space-y-4">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    to="/posts/$slug"
                    params={{ slug: post.slug }}
                    className="block rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-primary/40 transition-colors"
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                      {post.category}
                    </span>
                    <span className="block font-bold text-white mt-1">{post.title}</span>
                    <span className="mt-2 flex items-center gap-2 text-xs text-white/40">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section>
          <h2 className="text-2xl font-black italic uppercase tracking-tight mb-6">Other writers</h2>
          <div className="flex flex-wrap gap-3">
            {others.map((person) => (
              <Link
                key={person.slug}
                to="/authors/$slug"
                params={{ slug: person.slug }}
                className="px-4 py-2 rounded-full border border-white/10 text-sm hover:border-primary/40 hover:text-primary"
              >
                {person.name}
                <span className="text-white/40"> · {authorForCategory(person.category).category}</span>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
