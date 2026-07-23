import { Link } from "@tanstack/react-router";

type QuickLink = { to: string; label: string; title: string };

const GROUPS: { heading: string; links: QuickLink[] }[] = [
  {
    heading: "Popular Betting IDs",
    links: [
      { to: "/laser247", label: "Laser247 ID", title: "Get Laser247 betting ID online" },
      { to: "/cricbet99", label: "Cricbet99 ID", title: "Cricbet99 cricket betting ID" },
      { to: "/11xplay", label: "11xplay ID", title: "11xplay multi-sport betting ID" },
      { to: "/sprinters-club", label: "Sprinters Club", title: "Sprinters premium club membership" },
      { to: "/sprinters-login", label: "Sprinters Login", title: "Sprinters betting ID login" },
      { to: "/platforms", label: "All Platforms", title: "All supported betting platforms" },
      { to: "/sports-id", label: "Online Sports ID", title: "Online sports betting ID India" },
    ],
  },

  {
    heading: "Sports & Markets",
    links: [
      { to: "/cricket-schedule", label: "2026–27 Match Schedule", title: "Cricket 2026–27 match schedule, fixtures & predictions" },
      { to: "/cricket-betting", label: "Cricket Betting", title: "Online cricket betting ID" },
      { to: "/football-betting", label: "Football Betting", title: "Football betting ID India" },
      { to: "/tennis-betting", label: "Tennis Betting", title: "Tennis betting online" },
      { to: "/horse-race-betting", label: "Horse Racing", title: "Horse racing betting ID" },
      { to: "/predictions", label: "Daily Predictions", title: "Free daily cricket predictions" },
      { to: "/casino", label: "Live Casino", title: "Live casino games online India" },
    ],
  },

  {
    heading: "Guides & Support",
    links: [
      { to: "/indian-card-games", label: "Indian Card Games", title: "Teen Patti, Andar Bahar & more" },
      { to: "/blog", label: "Betting Blog", title: "Cricket previews & betting tips blog" },
      { to: "/about", label: "About Sprinters", title: "About Sprinters Online Gaming" },
      { to: "/services", label: "Our Services", title: "Sprinters services overview" },
      { to: "/contact", label: "Contact Us", title: "Contact Sprinters support" },
      { to: "/all-links", label: "All Links", title: "All Sprinters pages & links" },
      { to: "/responsible-gambling", label: "Play Responsibly", title: "Responsible gambling guidelines" },
    ],
  },

];

export function QuickLinks() {
  return (
    <aside
      aria-label="Quick links"
      className="border-t border-border/60 bg-card/40"
    >
      <div className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
          Quick Links
        </h2>
        <div className="mt-6 grid gap-8 md:grid-cols-3">
          {GROUPS.map((g) => (
            <nav key={g.heading} aria-label={g.heading}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">
                {g.heading}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-sm">
                {g.links.map((l, i) => (
                  <li key={l.to} className="flex items-center gap-3">
                    <Link
                      to={l.to}
                      title={l.title}
                      className="text-muted-foreground transition hover:text-primary"
                    >
                      {l.label}
                    </Link>
                    {i < g.links.length - 1 ? (
                      <span aria-hidden className="text-border">•</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
    </aside>
  );
}
