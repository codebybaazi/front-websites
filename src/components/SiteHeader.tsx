import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/sprinters-logo.jpg?w=280&format=webp&quality=80";
import { useWhatsAppHref } from "@/hooks/use-whatsapp";

export const TELEGRAM = "https://t.me/+fF-1at2eJJo3YjNl";

type MenuItem = { to: string; label: string; description?: string };
type MenuGroup = { label: string; to?: string; columns?: { heading: string; items: MenuItem[] }[] };

const MENU: MenuGroup[] = [
  { label: "Home", to: "/" },
  {
    label: "Platforms",
    columns: [
      {
        heading: "Popular IDs",
        items: [
          { to: "/platforms", label: "All Platforms", description: "Browse every gaming ID" },
          { to: "/sprinters-club", label: "Sprinters Club", description: "Premium cricket ID" },
          { to: "/sprinters-login", label: "Sprinters Login", description: "Existing member access" },
          { to: "/cricbet99", label: "Cricbet99", description: "Live cricket odds" },
          { to: "/laser247", label: "Laser247", description: "All-in-one exchange" },
          { to: "/11xplay", label: "11xplay", description: "Multi-sport betting" },
          { to: "/sports-id", label: "Sports ID", description: "Universal sports account" },
        ],
      },
    ],
  },
  {
    label: "Compare",
    columns: [
      {
        heading: "Head-to-head guides",
        items: [
          { to: "/sprinters-vs-lotus365", label: "Sprinters vs Lotus 365", description: "Cricket ID head-to-head" },
          { to: "/sprinters-vs-skyexchange247", label: "Sprinters vs Skyexchange 247", description: "Betting exchange comparison" },
        ],
      },
    ],
  },
  {
    label: "Sports & Games",
    columns: [
      {
        heading: "Sports",
        items: [
          { to: "/cricket-betting", label: "Cricket Betting" },
          { to: "/cricket-betting-app", label: "Cricket Betting App" },
          { to: "/football-betting", label: "Football Betting" },
          { to: "/tennis-betting", label: "Tennis Betting" },
          { to: "/horse-race-betting", label: "Horse Race Betting" },
        ],
      },
      {
        heading: "Casino & Cards",
        items: [
          { to: "/casino", label: "Live Casino" },
          { to: "/indian-card-games", label: "Indian Card Games" },
          { to: "/predictions", label: "Match Predictions" },
          { to: "/services", label: "Our Services" },
        ],
      },
    ],
  },
  {
    label: "Company",
    columns: [
      {
        heading: "Support",
        items: [
          { to: "/about", label: "About Us" },
          { to: "/blog", label: "Blog" },
          { to: "/contact", label: "Contact" },
          { to: "/sprinters-book-deposit-number", label: "Deposit Number" },
          { to: "/sprinters-book-withdrawl-number", label: "Withdrawal Number" },
          { to: "/sprinters-book-customer-care-number", label: "Customer Care Number" },
        ],
      },
      {
        heading: "Policies",
        items: [
          { to: "/responsible-gambling", label: "Responsible Gambling" },
          { to: "/privacy-policy", label: "Privacy Policy" },
          { to: "/terms-and-conditions", label: "Terms & Conditions" },
          { to: "/disclaimer", label: "Disclaimer" },
        ],
      },
    ],
  },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const whatsapp = useWhatsAppHref();
  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <div className="h-1 w-full" style={{ background: "var(--gradient-hero)" }} />
      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <Link to="/" className="flex min-w-0 items-center" onClick={closeMobile}>
            <img
              src={logo}
              alt="Sprinters Online Gaming official logo"
              width={512}
              height={512}
              className="h-10 w-auto shrink-0 object-contain sm:h-14"
            />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {MENU.map((group) =>
              group.to ? (
                <Link
                  key={group.label}
                  to={group.to}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: true }}
                >
                  {group.label}
                </Link>
              ) : (
                <div key={group.label} className="group relative">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-primary"
                  >
                    {group.label}
                    <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
                  </button>
                  <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div
                      className="rounded-2xl border border-border/60 bg-background/95 p-5 shadow-2xl backdrop-blur-xl"
                      style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${group.columns!.length}, minmax(220px, 1fr))`,
                        gap: "1.5rem",
                      }}
                    >
                      {group.columns!.map((col) => (
                        <div key={col.heading}>
                          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary/80">
                            {col.heading}
                          </div>
                          <ul className="space-y-1">
                            {col.items.map((item) => (
                              <li key={item.to}>
                                <Link
                                  to={item.to}
                                  className="block rounded-lg px-3 py-2 text-sm text-foreground/90 transition hover:bg-primary/10 hover:text-primary"
                                >
                                  <div className="font-medium">{item.label}</div>
                                  {item.description && (
                                    <div className="mt-0.5 text-xs text-muted-foreground">{item.description}</div>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={whatsapp}
              className="group relative inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-black transition hover:scale-[1.03] hover:opacity-95 sm:px-5 sm:py-2.5 sm:text-sm"
              style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow-secondary)" }}
            >
              <span
                className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-70 blur-md animate-pulse"
                style={{ background: "var(--gradient-hero)" }}
                aria-hidden
              />
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/70 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-black" />
              </span>
              <span className="hidden sm:inline">Get Your Sprinters ID</span>
              <span className="sm:hidden">Get ID</span>
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-background/60 text-foreground transition hover:bg-primary/10 hover:text-primary md:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
            <nav className="mx-auto max-h-[calc(100vh-4rem)] max-w-7xl overflow-y-auto px-4 py-4">
              {MENU.map((group) =>
                group.to ? (
                  <Link
                    key={group.label}
                    to={group.to}
                    onClick={closeMobile}
                    className="block rounded-lg px-3 py-2.5 text-base font-semibold text-foreground transition hover:bg-primary/10 hover:text-primary"
                  >
                    {group.label}
                  </Link>
                ) : (
                  <div key={group.label} className="mt-3 first:mt-0">
                    <div className="px-3 pb-1 text-sm font-bold uppercase tracking-wider text-primary/80">
                      {group.label}
                    </div>
                    {group.columns!.map((col) => (
                      <div key={col.heading} className="mt-1">
                        <div className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {col.heading}
                        </div>
                        <ul>
                          {col.items.map((item) => (
                            <li key={item.to}>
                              <Link
                                to={item.to}
                                onClick={closeMobile}
                                className="block rounded-lg px-3 py-2 text-sm text-foreground/90 transition hover:bg-primary/10 hover:text-primary"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )
              )}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
