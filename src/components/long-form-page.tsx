import { SiteLayout, PageHero, CTABand, WA } from "./site-layout";
import { CheckCircle2, MessageCircle, ChevronRight } from "lucide-react";
import { AiOverview } from "./ai-overview";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export interface PageContent {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  intro: string[];
  features: { title: string; desc: string }[];
  sections?: { heading: string; body: string[] }[];
  faqs?: { q: string; a: string }[];
  ctaHeading: string;
  ctaSub: string;
}

export function LongFormPage({ content, extra }: { content: PageContent; extra?: ReactNode }) {
  const { eyebrow, title, titleAccent, subtitle, intro, features, sections, faqs, ctaHeading, ctaSub } = content;
  return (
    <SiteLayout>
      <PageHero
        eyebrow={eyebrow}
        title={
          titleAccent ? (
            <>
              {title}{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>
                {titleAccent}
              </span>
            </>
          ) : (
            title
          )
        }
        subtitle={subtitle}
      />

      <AiOverview 
        summary={subtitle}
        highlights={features.slice(0, 4).map(f => f.desc)}
      />

      <section className="mx-auto max-w-4xl px-4 py-6 space-y-4 text-foreground/80 leading-relaxed sm:px-6 sm:py-8 sm:space-y-5">
        {intro.map((p, i) => (
          <p key={i} className="text-base sm:text-lg">{p}</p>
        ))}
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
          style={{ background: "var(--gradient-gold)" }}
        >
          <MessageCircle className="h-4 w-4" /> Get Your Cricbet99 ID
        </a>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">Key highlights</h2>
        <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-primary/25 bg-background/50 p-5 backdrop-blur sm:p-6">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg text-primary-foreground" style={{ background: "var(--gradient-gold)" }}>
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {sections?.map((s) => (
        <section key={s.heading} className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black">{s.heading}</h2>
          <div className="mt-4 space-y-4 text-sm text-foreground/80 leading-relaxed sm:text-base">
            {s.body.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        </section>
      ))}

      {extra}

      <section className="mx-auto max-w-4xl px-4 py-8 border-t border-primary/10 sm:px-6">
        <h2 className="text-xl font-black md:text-2xl">Quick Links & Resources</h2>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
          <Link to="/" className="text-sm font-bold text-primary hover:underline">Cricbet99 Official Home</Link>
          <Link to="/cricket" className="text-sm font-bold text-primary hover:underline">Live Cricket Odds</Link>
          <Link to="/ipl-betting" className="text-sm font-bold text-primary hover:underline">IPL 2026 Betting</Link>
          <Link to="/casino" className="text-sm font-bold text-primary hover:underline">Live Casino Games</Link>
          <Link to="/cricbet99-app" className="text-sm font-bold text-primary hover:underline">Cricbet99 APK Download</Link>
          <Link to="/how-it-works" className="text-sm font-bold text-primary hover:underline">How It Works</Link>
          <Link to="/login" className="text-sm font-bold text-primary hover:underline">Cricbet99 Login Access</Link>
          <Link to="/register" className="text-sm font-bold text-primary hover:underline">Create Official ID</Link>
          <Link to="/whatsapp-number" className="text-sm font-bold text-primary hover:underline">Official WhatsApp Support</Link>
          <Link to="/all-links" className="text-sm font-bold text-primary hover:underline">Sitemap & Directory</Link>
        </div>
      </section>

      {faqs && faqs.length > 0 && (
        <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">Frequently asked questions</h2>
          <div className="mt-5 space-y-3 sm:mt-6">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-xl border border-primary/25 bg-background/50 p-4 open:bg-background/70 sm:p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-foreground sm:text-base">
                  {f.q}
                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <CTABand heading={ctaHeading} sub={ctaSub} />
    </SiteLayout>
  );
}

export function buildFaqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function buildArticleJsonLd(content: PageContent, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: content.title,
    description: content.subtitle,
    datePublished: "2024-01-01T08:00:00+08:00",
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Organization",
      "name": "Cricbet99",
      "url": "https://cricbet99.co.in"
    },
    publisher: {
      "@type": "Organization",
      "name": "Cricbet99",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cricbet99.co.in/favicon.png"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    }
  };
}

export function buildBreadcrumbJsonLd(path: string, title: string) {
  const parts = path.split('/').filter(Boolean);
  const items = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://cricbet99.co.in/"
    }
  ];

  if (parts.length > 1) {
    const parentName = parts[0].charAt(0).toUpperCase() + parts[0].slice(1).replace('-', ' ');
    items.push({
      "@type": "ListItem",
      "position": 2,
      "name": parentName,
      "item": `https://cricbet99.co.in/${parts[0]}`
    });
    items.push({
      "@type": "ListItem",
      "position": 3,
      "name": title,
      "item": `https://cricbet99.co.in${path}`
    });
  } else {
    items.push({
      "@type": "ListItem",
      "position": 2,
      "name": title,
      "item": `https://cricbet99.co.in${path}`
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items
  };
}
