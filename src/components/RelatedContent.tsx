import { Link } from "@tanstack/react-router";
import { BookOpen, FileText, Compass, ArrowUpRight } from "lucide-react";
import { GUIDES } from "@/data/guides";
import { CASES } from "@/data/cases";

// Curated hub pages — highest-intent internal targets to link into
// deeper content. Keep this list short and evergreen.
const HUB_PAGES: { slug: string; label: string }[] = [
  { slug: "lotus365-id", label: "Get a Lotus365 ID" },
  { slug: "lotus365-cricket", label: "Cricket Betting" },
  { slug: "ipl-betting", label: "IPL 2026 Betting" },
  { slug: "casino", label: "Live Casino" },
  { slug: "lotus365-exchange", label: "Lotus365 Exchange" },
  { slug: "how-to-deposit", label: "How to Deposit" },
  { slug: "how-to-withdraw-safely", label: "How to Withdraw" },
  { slug: "is-lotus365-safe", label: "Is Lotus365 Safe?" },
  { slug: "why-choose-lotus365-book", label: "Why Choose Lotus365" },
  { slug: "support", label: "Support Hub" },
];

function pickGuides(currentPath: string, n = 3) {
  return Object.values(GUIDES)
    .filter((g) => `/betting-guides/${g.slug}` !== currentPath)
    .slice(0, n);
}
function pickCases(currentPath: string, n = 3) {
  return Object.values(CASES)
    .filter((c) => `/case-study/${c.slug}` !== currentPath)
    .slice(0, n);
}
function pickHubs(currentPath: string, n = 6) {
  return HUB_PAGES.filter((h) => `/${h.slug}` !== currentPath).slice(0, n);
}

export function RelatedContent({
  currentPath,
  heading = "Related on the Lotus365 network",
  subheading = "Hand-picked guides, real player case studies and the pages most readers open next.",
}: {
  currentPath: string;
  heading?: string;
  subheading?: string;
}) {
  const guides = pickGuides(currentPath);
  const cases = pickCases(currentPath);
  const hubs = pickHubs(currentPath);

  return (
    <section className="mx-auto max-w-6xl px-6 pb-16">
      <div className="mb-8">
        <div className="text-[11px] uppercase tracking-[0.3em] text-primary/80 mb-2">
          Keep exploring
        </div>
        <h2 className="font-display text-2xl md:text-3xl">{heading}</h2>
        <p className="text-foreground/90 mt-2 max-w-2xl text-sm md:text-base">
          {subheading}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4 text-primary">
            <BookOpen className="h-4 w-4" />
            <span className="text-[11px] uppercase tracking-[0.25em]">
              Betting Guides
            </span>
          </div>
          <ul className="space-y-3">
            {guides.map((g) => (
              <li key={g.slug}>
                <Link
                  to="/betting-guides/$slug"
                  params={{ slug: g.slug }}
                  className="group inline-flex items-start gap-2 text-sm text-foreground/95 hover:text-primary"
                >
                  <ArrowUpRight className="h-3.5 w-3.5 mt-1 text-primary/70 shrink-0" />
                  <span className="leading-snug">{g.hero}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/betting-guides"
            className="mt-5 inline-flex items-center gap-1 text-xs text-primary hover:underline"
          >
            All guides →
          </Link>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4 text-primary">
            <FileText className="h-4 w-4" />
            <span className="text-[11px] uppercase tracking-[0.25em]">
              Player Case Studies
            </span>
          </div>
          <ul className="space-y-3">
            {cases.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/case-study/$slug"
                  params={{ slug: c.slug }}
                  className="group inline-flex items-start gap-2 text-sm text-foreground/95 hover:text-primary"
                >
                  <ArrowUpRight className="h-3.5 w-3.5 mt-1 text-primary/70 shrink-0" />
                  <span className="leading-snug">{c.hero}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/case-study"
            className="mt-5 inline-flex items-center gap-1 text-xs text-primary hover:underline"
          >
            All case studies →
          </Link>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4 text-primary">
            <Compass className="h-4 w-4" />
            <span className="text-[11px] uppercase tracking-[0.25em]">
              Popular Hubs
            </span>
          </div>
          <ul className="space-y-3">
            {hubs.map((h) => (
              <li key={h.slug}>
                <Link
                  to="/$page"
                  params={{ page: h.slug }}
                  className="group inline-flex items-start gap-2 text-sm text-foreground/95 hover:text-primary"
                >
                  <ArrowUpRight className="h-3.5 w-3.5 mt-1 text-primary/70 shrink-0" />
                  <span className="leading-snug">{h.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/blog"
            className="mt-5 inline-flex items-center gap-1 text-xs text-primary hover:underline"
          >
            Latest from the blog →
          </Link>
        </div>
      </div>
    </section>
  );
}
