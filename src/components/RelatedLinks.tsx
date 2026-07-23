import { Link } from "@tanstack/react-router";

type RelatedLink = {
  to: string;
  label: string;
  description: string;
};

const ALL_LINKS: Record<string, RelatedLink> = {
  "/schedule": {
    to: "/schedule",
    label: "2026 Match Schedule",
    description: "Full international cricket calendar with dates, venues and start times.",
  },
  "/matches": {
    to: "/matches",
    label: "Matches Index",
    description: "Browse every fixture grouped by tournament and sport.",
  },
  "/predictions": {
    to: "/predictions",
    label: "Today's Match Predictions",
    description: "Who will win today — live odds, pitch reports and analyst picks.",
  },
  "/mahadev-betting-app": {
    to: "/mahadev-betting-app",
    label: "Mahadev Betting App",
    description: "Features, deposits and how the Mahadev cricket ID works.",
  },
  "/mahadev-book-vs-skyexchange-247": {
    to: "/mahadev-book-vs-skyexchange-247",
    label: "Mahadev Book vs Skyexchange 247",
    description: "Odds, markets and withdrawal speeds compared side-by-side.",
  },
  "/mahadev-book-vs-lotus-365": {
    to: "/mahadev-book-vs-lotus-365",
    label: "Mahadev Book vs Lotus 365",
    description: "Which platform offers better cricket odds and bonuses.",
  },
  "/blog": {
    to: "/blog",
    label: "Cricket Betting Blog",
    description: "Strategy guides, market breakdowns and platform reviews.",
  },
};

export function RelatedLinks({
  paths,
  title = "Explore more",
}: {
  paths: string[];
  title?: string;
}) {
  const links = paths.map((p) => ALL_LINKS[p]).filter(Boolean);
  if (!links.length) return null;

  return (
    <section aria-label={title} className="border-t border-border/60 bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">{title}</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group rounded-lg border border-border bg-card p-5 transition hover:border-primary hover:shadow-md"
            >
              <div className="mb-1 font-semibold text-foreground group-hover:text-primary">
                {l.label} →
              </div>
              <p className="text-sm text-muted-foreground">{l.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
