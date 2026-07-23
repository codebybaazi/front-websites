import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Compass, Layers, LifeBuoy, ShieldCheck, Sparkles, Trophy, Wallet } from "lucide-react";
import { pages } from "@/data/pages";
import { posts } from "@/data/posts";

type LinkItem = { label: string; to: string; kind: "page" | "post" };
type Group = {
  heading: string;
  icon: React.ComponentType<{ className?: string }>;
  items: LinkItem[];
};

const pickPages = (categories: string[], limit: number, excludePath?: string): LinkItem[] =>
  pages
    .filter((p) => categories.includes(p.category) && p.path !== excludePath)
    .slice(0, limit)
    .map((p) => ({ label: p.title, to: p.path, kind: "page" as const }));

const pickPosts = (categories: string[], limit: number, excludeSlug?: string): LinkItem[] =>
  posts
    .filter((p) => categories.includes(p.category) && p.slug !== excludeSlug)
    .slice(0, limit)
    .map((p) => ({ label: p.title, to: `/blog/${p.slug}`, kind: "post" as const }));

function buildGroups(context?: { pageCategory?: string; postCategory?: string; excludePath?: string; excludeSlug?: string }): Group[] {
  const { pageCategory, postCategory, excludePath, excludeSlug } = context ?? {};

  const contextual: Group[] = [];

  if (pageCategory) {
    const items = pickPages([pageCategory], 5, excludePath);
    if (items.length) contextual.push({ heading: `More in ${pageCategory}`, icon: Compass, items });
  }

  if (postCategory) {
    const items = pickPosts([postCategory], 5, excludeSlug);
    if (items.length) contextual.push({ heading: `More ${postCategory} guides`, icon: Compass, items });
  }

  const evergreen: Group[] = [
    { heading: "Popular Platforms", icon: Layers, items: pickPages(["Platform"], 5) },
    { heading: "Cricket & Sports", icon: Trophy, items: [...pickPages(["Cricket", "Sports"], 3), ...pickPosts(["IPL", "Football", "T20 & World Cup"], 2)] },
    { heading: "Wallet, Deposits & KYC", icon: Wallet, items: [...pickPages(["Wallet", "Account"], 3), ...pickPosts(["Deposits & UPI", "Withdrawals", "KYC & Security"], 2)] },
    { heading: "Trust & Safety", icon: ShieldCheck, items: pickPages(["Company", "Policies"], 5) },
    { heading: "Help & Support", icon: LifeBuoy, items: [...pickPages(["Support", "Agents"], 3), ...pickPosts(["Mobile & App", "Getting Started"], 2)] },
    { heading: "Latest Guides", icon: Sparkles, items: pickPosts(["Guides", "Getting Started", "Live Casino", "Match Predictions"], 5, excludeSlug) },
  ];

  return [...contextual, ...evergreen].filter((g) => g.items.length > 0).slice(0, 6);
}

export function QuickLinks(props: {
  pageCategory?: string;
  postCategory?: string;
  excludePath?: string;
  excludeSlug?: string;
  title?: string;
  subtitle?: string;
}) {
  const groups = buildGroups(props);
  if (!groups.length) return null;

  return (
    <section aria-labelledby="quick-links-heading" className="mx-auto max-w-7xl px-4 sm:px-6 py-14 border-t border-border/60">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <div className="text-xs uppercase tracking-widest text-primary font-semibold">Quick links</div>
          <h2 id="quick-links-heading" className="mt-2 font-display text-2xl sm:text-3xl font-bold">
            {props.title ?? "Explore more of Mahadev Book"}
          </h2>
          {props.subtitle && <p className="mt-2 text-sm text-muted-foreground max-w-2xl">{props.subtitle}</p>}
        </div>
      </div>

      <nav aria-label="Site quick links" className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((group) => {
          const Icon = group.icon;
          return (
            <div key={group.heading} className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5 hover:border-primary/40 transition">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span className="grid place-items-center h-8 w-8 rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <span>{group.heading}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={`${item.kind}:${item.to}`}>
                    {item.kind === "post" ? (
                      <Link
                        to="/blog/$slug"
                        params={{ slug: item.to.replace("/blog/", "") }}
                        className="group inline-flex items-start gap-1.5 text-sm text-foreground/80 hover:text-primary transition"
                      >
                        <ArrowUpRight className="h-3.5 w-3.5 mt-0.5 text-primary/70 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        <span className="leading-snug">{item.label}</span>
                      </Link>
                    ) : (
                      <Link
                        to="/$"
                        params={{ _splat: item.to.replace(/^\//, "") }}
                        className="group inline-flex items-start gap-1.5 text-sm text-foreground/80 hover:text-primary transition"
                      >
                        <ArrowUpRight className="h-3.5 w-3.5 mt-0.5 text-primary/70 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        <span className="leading-snug">{item.label}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </nav>
    </section>
  );
}

export default QuickLinks;
