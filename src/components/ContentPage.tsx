import { Link } from "@tanstack/react-router";
import { ChevronRight, Sparkles, Check } from "lucide-react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { QuickLinks } from "./QuickLinks";
import { RelatedContent } from "./RelatedContent";
import { AiOverview } from "./AiOverview";
import type { PageContent } from "@/data/pages";

export function ContentPage({ page }: { page: PageContent }) {
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(60% 60% at 20% 0%, oklch(0.82 0.15 88 / 0.18), transparent 60%), radial-gradient(60% 60% at 80% 20%, oklch(0.55 0.09 165 / 0.4), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-4 inline-flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5" />
            {page.eyebrow}
          </div>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05]">
            {page.hero.split(" ").map((word, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className="gold-text">
                  {word}
                </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/90 leading-relaxed max-w-3xl">
            {page.intro}
          </p>
        </div>
      </section>

      <AiOverview
        summary={page.intro || page.description}
        points={page.sections.slice(0, 4).map((s) => s.heading)}
      />
      <div className="pb-12 md:pb-16" />

      {/* Sections */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="space-y-5">
          {page.sections.map((section, idx) => (
            <article
              key={section.heading}
              className="glass-card rounded-2xl p-8 md:p-10 relative"
            >
              <div className="absolute top-8 md:top-10 left-8 md:left-10 text-[10px] uppercase tracking-[0.3em] text-primary/60">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="pt-6">
                <h2 className="font-display text-2xl md:text-3xl mb-4">
                  {section.heading}
                </h2>
                <p className="text-foreground/90 leading-relaxed text-[15px] md:text-base">
                  {section.body}
                </p>
                {section.points && section.points.length > 0 && (
                  <ul className="mt-5 space-y-2.5">
                    {section.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm text-foreground/95"
                      >
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

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
              {page.cta?.title ?? "Ready to step onto the gold table?"}
            </h2>
            <p className="text-foreground/90 mt-4 max-w-xl mx-auto">
              {page.cta?.body ??
                "Create your Lotus365 account in under a minute and unlock instant payouts, VIP concierge, and a curated library of premium games."}
            </p>
            <Link
              to="/$page"
              params={{ page: "register" }}
              className="btn-gold btn-gold-hover mt-8 px-7 py-3.5 rounded-full inline-flex items-center gap-2 text-base"
            >
              {page.cta?.label ?? "Create your account"}{" "}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <RelatedContent currentPath={`/${page.slug}`} />
      <QuickLinks
        currentPath={`/${page.slug}`}
        heading={`More from Lotus365 related to ${page.eyebrow}`}
      />
      <SiteFooter />
    </div>
  );
}

export function ContentNotFound({ slug }: { slug: string }) {
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-6 py-32 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-4">
          Page not found
        </div>
        <h1 className="font-display text-4xl md:text-6xl mb-6">
          Nothing at <span className="gold-text">/{slug}</span>
        </h1>
        <p className="text-foreground/90 mb-8">
          The page you're looking for isn't part of the Lotus365 hub. Head back
          to the homepage or explore the sections below.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/" className="btn-gold btn-gold-hover px-6 py-3 rounded-full">
            Homepage
          </Link>
          <Link
            to="/$page"
            params={{ page: "services" }}
            className="px-6 py-3 rounded-full gold-border text-primary hover:bg-primary/10"
          >
            Services
          </Link>
          <Link
            to="/$page"
            params={{ page: "support" }}
            className="px-6 py-3 rounded-full gold-border text-primary hover:bg-primary/10"
          >
            Support
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
