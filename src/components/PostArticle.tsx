import { Link } from "@tanstack/react-router";
import { ChevronRight, Home, Calendar, Clock, User, Tag, Check, Share2, Sparkles } from "lucide-react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { QuickLinks } from "./QuickLinks";
import { RelatedContent } from "./RelatedContent";
import { AiOverview } from "./AiOverview";
import { authorSlugForName } from "@/data/authors";
import type { Post } from "@/data/posts";

function formatDate(d: string) {
  try {
    return new Date(d).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return d;
  }
}

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function PostArticle({ post, related }: { post: Post; related: Post[] }) {
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-6 pt-8 text-xs text-foreground/95">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link to="/" className="hover:text-primary inline-flex items-center gap-1">
              <Home className="h-3 w-3" /> Home
            </Link>
          </li>
          <li>
            <ChevronRight className="h-3 w-3" />
          </li>
          <li>
            <Link to="/blog" className="hover:text-primary">
              Blog
            </Link>
          </li>
          <li>
            <ChevronRight className="h-3 w-3" />
          </li>
          <li>
            <Link
              to="/blog/category/$category"
              params={{ category: post.category.toLowerCase() }}
              className="hover:text-primary"
            >
              {post.category}
            </Link>
          </li>
          <li>
            <ChevronRight className="h-3 w-3" />
          </li>
          <li className="text-foreground/95 truncate max-w-[40ch]">{post.h1}</li>
        </ol>
      </nav>

      {/* Header */}
      <header className="mx-auto max-w-4xl px-6 pt-8">
        <div className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-4 inline-flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5" />
          {post.category}
        </div>
        <h1 id="page-h1" className="font-display text-3xl md:text-5xl leading-[1.1]">
          {post.h1.split(" ").map((w, i, arr) =>
            i === arr.length - 1 ? (
              <span key={i} className="gold-text">
                {w}
              </span>
            ) : (
              <span key={i}>{w} </span>
            )
          )}
        </h1>
        <p className="mt-5 text-lg text-foreground/90 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Meta strip */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-foreground/90 border-y border-primary/15 py-4">
          <Link
            to="/authors/$slug"
            params={{ slug: authorSlugForName(post.author) }}
            className="flex items-center gap-2.5 group"
          >
            <div className="h-9 w-9 rounded-full grid place-items-center bg-primary/15 text-primary text-xs font-semibold gold-border">
              {initials(post.author)}
            </div>
            <div className="leading-tight">
              <div className="text-foreground font-medium group-hover:text-primary transition-colors">{post.author}</div>
              <div className="text-[11px] text-foreground/85">{post.authorRole}</div>
            </div>
          </Link>
          <div className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-primary/70" />
            {formatDate(post.date)}
          </div>
          <div className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-primary/70" />
            {post.readMinutes} min read
          </div>
          <div className="inline-flex items-center gap-1.5">
            <Tag className="h-4 w-4 text-primary/70" />
            {post.category}
          </div>
          <button
            className="ml-auto inline-flex items-center gap-1.5 text-primary hover:text-primary/80"
            onClick={() => {
              if (typeof navigator !== "undefined" && navigator.share) {
                navigator.share({ title: post.h1, url: window.location.href }).catch(() => {});
              } else if (typeof navigator !== "undefined") {
                navigator.clipboard?.writeText(window.location.href);
              }
            }}
          >
            <Share2 className="h-4 w-4" /> Share
          </button>
        </div>
      </header>

      {/* Banner */}
      <div className="mx-auto max-w-4xl px-6 mt-8">
        <div
          className="relative h-56 md:h-80 rounded-2xl overflow-hidden gold-border"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.36 0.08 165), oklch(0.26 0.06 165))",
          }}
        >
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(60% 60% at 15% 20%, oklch(0.82 0.15 88 / 0.35), transparent 60%), radial-gradient(60% 60% at 85% 80%, oklch(0.55 0.09 165 / 0.5), transparent 60%)",
            }}
          />
          <div className="absolute inset-0 grid place-items-center px-8 text-center">
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-primary/80 mb-3">
                Lotus365 · {post.category}
              </div>
              <div className="font-display text-2xl md:text-4xl gold-text max-w-2xl">
                {post.h1}
              </div>
            </div>
          </div>
        </div>
      </div>

      <AiOverview
        summary={post.excerpt}
        points={post.sections.slice(0, 4).map((s) => s.heading)}
        sources={post.sources}
      />
      <div className="pb-12 md:pb-16" />

      {/* Body */}
      <article className="mx-auto max-w-4xl px-6 py-12 space-y-5">
        {post.sections.map((sec, i) => (
          <section key={i} className="glass-card rounded-2xl p-7 md:p-9 relative">
            <div className="absolute top-7 md:top-9 left-7 md:left-9 text-[10px] uppercase tracking-[0.3em] text-primary/60">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="pt-6">
              <h2 className="font-display text-xl md:text-2xl mb-3">{sec.heading}</h2>
              <p className="text-foreground/95 leading-relaxed text-[15px] md:text-base">
                {sec.body}
              </p>
              {sec.points && (
                <ul className="mt-4 space-y-2.5">
                  {sec.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-foreground/95">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              )}
              {sec.table && (
                <div className="mt-5 overflow-x-auto rounded-xl border border-primary/15">
                  <table className="w-full text-sm text-left border-collapse">
                    <thead>
                      <tr className="bg-primary/10">
                        {sec.table.headers.map((h) => (
                          <th
                            key={h}
                            scope="col"
                            className="px-4 py-2.5 font-semibold text-foreground text-xs uppercase tracking-wide whitespace-nowrap"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {sec.table.rows.map((row, ri) => (
                        <tr key={ri} className={ri % 2 ? "bg-transparent" : "bg-primary/5"}>
                          {row.map((cell, ci) => (
                            <td key={ci} className="px-4 py-2.5 text-foreground/90">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </section>
        ))}
      </article>

      {/* Author card */}
      <section className="mx-auto max-w-4xl px-6 pb-14">
        <Link
          to="/authors/$slug"
          params={{ slug: authorSlugForName(post.author) }}
          className="glass-card rounded-2xl p-7 flex items-start gap-5 group hover:border-primary/40 transition-colors"
        >
          <div className="h-14 w-14 rounded-full grid place-items-center bg-primary/15 text-primary text-base font-semibold gold-border shrink-0">
            {initials(post.author)}
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary/70 mb-1">
              Written by
            </div>
            <div className="font-display text-lg group-hover:text-primary transition-colors">{post.author}</div>
            <div className="text-sm text-foreground/95 mb-2">{post.authorRole}</div>
            <p className="text-sm text-foreground/90 max-w-xl">
              Part of the Lotus365 editorial desk — covering onboarding, payments, live
              markets and player safety with hands-on experience.
            </p>
            <div className="mt-3 text-primary text-sm inline-flex items-center gap-1">
              View full bio & articles <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        </Link>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h3 className="font-display text-2xl md:text-3xl mb-6">
            More from the <span className="gold-text">Lotus365</span> desk
          </h3>
          <div className="grid md:grid-cols-3 gap-5">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/blog/$slug"
                params={{ slug: r.slug }}
                className="glass-card rounded-2xl p-6 group hover:-translate-y-1 transition-transform"
              >
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary/60 mb-3">
                  {r.category} · {formatDate(r.date)}
                </div>
                <div className="font-display text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {r.h1}
                </div>
                <p className="text-sm text-foreground/90 line-clamp-3">{r.excerpt}</p>
                <div className="mt-3 text-primary text-sm inline-flex items-center gap-1">
                  Read <ChevronRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div
          className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden gold-border"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.36 0.08 165), oklch(0.28 0.06 165))",
          }}
        >
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 0%, oklch(0.82 0.15 88 / 0.35), transparent 60%)",
            }}
          />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-4xl max-w-2xl mx-auto">
              Ready to play on the <span className="gold-text">gold table</span>?
            </h2>
            <p className="text-foreground/90 mt-4 max-w-xl mx-auto">
              Get your verified Lotus365 ID in under a minute — instant UPI payouts,
              VIP concierge, and 24/7 human support.
            </p>
            <Link
              to="/$page"
              params={{ page: "register" }}
              className="btn-gold btn-gold-hover mt-8 px-7 py-3.5 rounded-full inline-flex items-center gap-2 text-base"
            >
              Create your account <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <RelatedContent
        currentPath={`/blog/${post.slug}`}
        heading="Guides, case studies and pages tied to this post"
      />
      <QuickLinks
        currentPath={`/blog/${post.slug}`}
        heading="Keep reading across the Lotus365 network"
        subheading="Deep-dive guides, sport pages and account tools tied to this post."
      />
      <SiteFooter />
    </div>
  );
}
