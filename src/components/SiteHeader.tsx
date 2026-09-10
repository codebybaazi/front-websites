import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Zap,
  Clock,
  Headset,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { navItems, supportLine, siteName } from "@/data/site";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { formatWhatsAppDisplay } from "@/lib/whatsapp";
import logoUrl from "@/assets/mahadev-logo.gif";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const { whatsappUrl, number } = useWhatsApp();
  const phoneDisplay = formatWhatsAppDisplay(number);

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-10 md:h-12 flex items-center justify-between gap-3 text-[11px] sm:text-sm">
          <div className="flex items-center gap-2 min-w-0">
            <Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current shrink-0" />
            <span className="font-medium truncate">{supportLine}</span>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ml-1 sm:ml-2 hidden xs:inline-flex items-center gap-1 font-semibold underline underline-offset-4 hover:opacity-80 shrink-0">
              Join Now <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </a>
          </div>
          <div className="flex items-center gap-3 sm:gap-6 shrink-0">
            <span className="inline-flex items-center gap-1.5 sm:gap-2">
              <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">24 / 7 Support Available</span>
              <span className="sm:hidden">24/7</span>
            </span>
            <span className="hidden sm:inline-block h-4 w-px bg-primary-foreground/30" />
            {phoneDisplay ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 font-semibold hover:opacity-80"
              >
                {phoneDisplay}
              </a>
            ) : null}
            <Link to="/contact" className="inline-flex items-center gap-1.5 sm:gap-2 hover:opacity-80">
              <Headset className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> <span className="hidden sm:inline">Support</span>
            </Link>
          </div>
        </div>
      </div>


      <div className="backdrop-blur-xl bg-background/80 border-b border-border">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-6">
          <Link to="/" className="flex items-center gap-3 shrink-0 min-w-0">
            <img src={logoUrl} alt={siteName} className="h-10 sm:h-12 w-auto" />
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label} className="group/nav relative">
                <a href={item.to} className="nav-link">
                  <span>{item.label}</span>
                  {item.mega && <ChevronDown className="h-3.5 w-3.5 opacity-70 transition-transform duration-300 group-hover/nav:rotate-180" />}
                </a>

                {item.mega && (
                  <div className="mega-panel">
                    <div className="mega-card">
                      <div className={`grid gap-8 ${item.mega.feature ? "md:grid-cols-[1fr_1fr_260px]" : `md:grid-cols-${item.mega.groups.length}`}`}>
                        {item.mega.groups.map((g) => (
                          <div key={g.heading}>
                            <div className="mega-heading">{g.heading}</div>
                            <ul className="mt-4 space-y-1">
                              {g.items.map((mi) => (
                                <li key={mi.label}>
                                  <a href={mi.to} className="mega-link group/link">
                                    {mi.icon && (
                                      <span className="mega-icon">
                                        <mi.icon className="h-4 w-4" />
                                      </span>
                                    )}
                                    <span className="min-w-0">
                                      <span className="block font-semibold text-foreground group-hover/link:text-primary transition-colors">{mi.label}</span>
                                      {mi.desc && <span className="block text-xs text-muted-foreground mt-0.5">{mi.desc}</span>}
                                    </span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}

                        {item.mega.feature && (
                          <a href={item.mega.feature.to} className="mega-feature group/feat">
                            <div className="relative z-10">
                              <Sparkles className="h-6 w-6 text-primary-foreground" />
                              <div className="mt-4 font-display text-lg font-bold text-primary-foreground leading-tight">
                                {item.mega.feature.title}
                              </div>
                              <p className="mt-2 text-xs text-primary-foreground/80">
                                {item.mega.feature.desc}
                              </p>
                              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-foreground">
                                {item.mega.feature.cta}
                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/feat:translate-x-0.5 group-hover/feat:-translate-y-0.5" />
                              </span>
                            </div>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>



          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow group hidden sm:inline-flex items-center gap-2 rounded-full pl-6 pr-2 py-2 text-primary-foreground font-semibold transition"
            >
              <span className="btn-glow-content inline-flex items-center gap-2">
                Get Started
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-background/25 group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </span>
            </a>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className={`menu-bars lg:hidden ${menuOpen ? "is-open" : ""}`}
            >
              <span /><span /><span />
            </button>
          </div>
        </nav>
      </div>

      <div
        className={`mobile-shell lg:hidden ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-16 font-display text-[18rem] font-black leading-none text-primary/[0.05] select-none">
            {siteName.slice(0, 2).toUpperCase()}
          </div>
        </div>

        <div className="relative h-full max-h-screen overflow-y-auto flex flex-col">
          <div className="flex items-center justify-between px-6 pt-8 pb-4 border-b border-border/50">
            <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 min-w-0">
              <img src={logoUrl} alt={siteName} className="h-11 w-auto shrink-0" />
              <span className="font-display text-xl font-bold text-gradient-gold truncate">{siteName}</span>
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="menu-bars is-open"
            >
              <span /><span /><span />
            </button>
          </div>

          <div className="px-6 pt-8 pb-10 flex-1">
            <div className="text-xs uppercase tracking-[0.3em] text-primary/70 mb-6 font-display">— Menu</div>

            <nav>
              {navItems.map((item, i) => {
                const open = mobileOpen === item.label;
                return (
                  <div
                    key={item.label}
                    className="border-b border-border/40 last:border-0"
                    style={{
                      animation: menuOpen
                        ? `menu-item-in 0.6s ${0.08 * i + 0.15}s both cubic-bezier(0.7,0,0.2,1)`
                        : undefined,
                    }}
                  >
                    <div className="flex items-center">
                      {item.mega ? (
                        <button
                          type="button"
                          onClick={() => setMobileOpen(open ? null : item.label)}
                          data-open={open}
                          className="mobile-item flex-1 text-left"
                        >
                          <span className="m-num">{String(i + 1).padStart(2, "0")}</span>
                          <span>{item.label}</span>
                          <ArrowUpRight className="m-arrow h-6 w-6" />
                        </button>
                      ) : (
                        <a
                          href={item.to}
                          onClick={() => setMenuOpen(false)}
                          className="mobile-item flex-1"
                        >
                          <span className="m-num">{String(i + 1).padStart(2, "0")}</span>
                          <span>{item.label}</span>
                          <ArrowUpRight className="m-arrow h-6 w-6" />
                        </a>
                      )}
                      {item.mega && (
                        <button
                          type="button"
                          onClick={() => setMobileOpen(open ? null : item.label)}
                          aria-label={`Toggle ${item.label} submenu`}
                          className={`ml-2 h-9 w-9 shrink-0 grid place-items-center rounded-full border border-border transition-all duration-300 ${
                            open ? "bg-primary text-primary-foreground border-transparent rotate-180" : "text-muted-foreground"
                          }`}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </button>
                      )}
                    </div>

                    {item.mega && (
                      <div
                        className={`grid transition-all duration-500 ease-out ${
                          open ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="pl-4 border-l-2 border-primary/40 ml-2 space-y-5 pt-1">
                            {item.mega.groups.map((g, gi) => (
                              <div
                                key={g.heading}
                                style={{
                                  animation: open
                                    ? `menu-sub-in 0.4s ${0.05 * gi + 0.05}s both ease-out`
                                    : undefined,
                                }}
                              >
                                <div className="mega-heading">{g.heading}</div>
                                <ul className="mt-2 space-y-1">
                                  {g.items.map((mi) => (
                                    <li key={mi.label}>
                                      <a
                                        href={mi.to}
                                        onClick={() => setMenuOpen(false)}
                                        className="mega-link"
                                      >
                                        {mi.icon && (
                                          <span className="mega-icon">
                                            <mi.icon className="h-4 w-4" />
                                          </span>
                                        )}
                                        <span className="min-w-0">
                                          <span className="block font-semibold text-foreground">{mi.label}</span>
                                          {mi.desc && (
                                            <span className="block text-xs text-muted-foreground mt-0.5">{mi.desc}</span>
                                          )}
                                        </span>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="btn-glow mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-primary-foreground font-semibold"
            >
              <span className="btn-glow-content inline-flex items-center gap-2">
                Get Started <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>

            <div className="mt-8 flex items-center justify-between text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-primary" /> 24/7 Support
              </span>
              <span className="inline-flex items-center gap-2">
                <Headset className="h-3.5 w-3.5 text-primary" /> WhatsApp · Telegram
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
