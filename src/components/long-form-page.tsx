import { SiteLayout, PageHero, CTABand } from "./site-layout";
import { CheckCircle2, MessageCircle, ChevronRight } from "lucide-react";
import { AiOverview } from "./ai-overview";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useWhatsApp } from "@/hooks/use-whatsapp";

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

export interface RelatedLink {
  to: string;
  label: string;
  desc: string;
}

export function LongFormPage({
  content,
  extra,
  relatedLinks,
}: {
  content: PageContent;
  extra?: ReactNode;
  relatedLinks?: RelatedLink[];
}) {
  const { wa } = useWhatsApp();
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

      <nav className="mx-auto max-w-4xl px-4 py-3 sm:px-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-foreground/60">
          <li>
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          </li>
          <ChevronRight className="h-3 w-3 shrink-0" />
          <li className="text-primary font-bold truncate max-w-[200px]" aria-current="page">
            {title}
          </li>
        </ol>
      </nav>

      <AiOverview 
        summary={subtitle}
        highlights={features.slice(0, 4).map(f => f.desc)}
      />

      <section className="mx-auto max-w-4xl px-4 py-6 space-y-4 text-foreground/80 leading-relaxed sm:px-6 sm:py-8 sm:space-y-5">
        {intro.map((p, i) => (
          <p key={i} className="text-base sm:text-lg" dangerouslySetInnerHTML={{ __html: p }} />
        ))}
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
          style={{ background: "var(--gradient-gold)" }}
        >
          <MessageCircle className="h-4 w-4" /> Get Your Cricbet99 ID
        </a>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        <h2 className="text-2xl sm:text-3xl break-words md:text-4xl break-words font-black mb-1 uppercase tracking-tighter">Key highlights</h2>
        <h3 className="text-xs font-black text-primary/60 uppercase tracking-[0.3em] mb-8">Strategic Platform Advantages</h3>
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
          <h2 className="text-xl sm:text-2xl md:text-3xl break-words font-black mb-1 uppercase tracking-tight">{s.heading}</h2>
          <h3 className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.4em] mb-4">Detailed Insights & Analysis</h3>
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
        <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
          <Link to="/" className="text-sm font-bold text-primary hover:underline">Official Home</Link>
          <Link to="/cricket" className="text-sm font-bold text-primary hover:underline">Cricket Odds</Link>
          <Link to="/ipl-betting" className="text-sm font-bold text-primary hover:underline">IPL Betting</Link>
          <Link to="/casino" className="text-sm font-bold text-primary hover:underline">Live Casino</Link>
          <Link to="/cricbet99-app" className="text-sm font-bold text-primary hover:underline">APK Download</Link>
          <Link to="/how-it-works" className="text-sm font-bold text-primary hover:underline">Activation Process</Link>
          <Link to="/login" className="text-sm font-bold text-primary hover:underline">Secure Login</Link>
          <Link to="/register" className="text-sm font-bold text-primary hover:underline">Get New ID</Link>
          <Link to="/whatsapp-number" className="text-sm font-bold text-primary hover:underline">WhatsApp Support</Link>
          <Link to="/all-links" className="text-sm font-bold text-primary hover:underline">Directory</Link>
          <Link to="/schedule" className="text-sm font-bold text-primary hover:underline">Match Schedule</Link>
          <Link to="/matches" className="text-sm font-bold text-primary hover:underline">All Predictions</Link>
        </div>
      </section>

      {relatedLinks && relatedLinks.length > 0 && (
        <section className="mx-auto max-w-4xl px-4 py-8 border-t border-primary/10 sm:px-6">
          <h2 className="text-xl font-black md:text-2xl">Related reading</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {relatedLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="block rounded-xl border border-primary/20 bg-background/50 p-4 transition-colors hover:border-primary/50 hover:bg-primary/5"
              >
                <div className="text-sm font-bold text-primary">{l.label}</div>
                <div className="mt-1 text-xs text-foreground/65">{l.desc}</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {faqs && faqs.length > 0 && (
        <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
          <h2 className="text-2xl sm:text-3xl break-words md:text-4xl break-words font-black mb-1 uppercase tracking-tighter">Frequently asked questions</h2>
          <h3 className="text-xs font-black text-accent/60 uppercase tracking-[0.3em] mb-8">Support Knowledge Base</h3>
          <div className="mt-5 space-y-3 sm:mt-6">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-xl border border-primary/25 bg-background/50 p-4 open:bg-background/70 sm:p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-foreground sm:text-base">
                  <h3 className="m-0 inline text-inherit font-inherit">{f.q}</h3>
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
    datePublished: "2024-01-01T08:00:00+05:30",
    dateModified: "2026-07-27T12:00:00+05:30",
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

export function buildHowToJsonLd(
  content: PageContent,
  url: string,
  options?: { totalTime?: string; image?: string }
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: content.title,
    description: content.subtitle,
    ...(options?.image ? { image: options.image } : {}),
    ...(options?.totalTime ? { totalTime: options.totalTime } : {}),
    step: content.features.map((f, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: f.title,
      text: f.desc,
    })),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
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
