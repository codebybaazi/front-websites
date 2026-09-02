import { Link } from "@tanstack/react-router";
import { ArrowRight, Send } from "lucide-react";
import { footerColumns, footerExploreGroups } from "@/lib/nav";
import { waLink } from "@/lib/whatsapp";

const socials = [
  {
    label: "Instagram",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  { label: "Telegram", icon: Send },
  {
    label: "Twitter",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "Youtube",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    label: "Facebook",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink-deep pb-8 pt-12 sm:pt-16 lg:pt-20">
      <div className="absolute left-0 right-0 top-0 h-[3px] brand-rule" />
      <div className="pointer-events-none absolute -top-32 left-1/4 h-64 w-64 rounded-full bg-primary/[0.07] blur-[100px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 rounded-xl border border-white/8 bg-card/50 p-5 sm:mb-12 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="min-w-0">
            <p className="font-display text-lg font-semibold tracking-tight sm:text-xl">Need a Fairplay ID?</p>
            <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
              WhatsApp opens it. UPI funds it. Same login for cricket and tables.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:shrink-0">
            <a
              href={waLink("Hi Fairplay — I want to open an ID.")}
              className="inline-flex items-center justify-center rounded-md border border-white/12 px-4 py-2.5 text-sm font-semibold transition-colors hover:border-primary/40"
            >
              WhatsApp
            </a>
            <Link
              to="/fairplay-id"
              className="inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-flame hover:text-flame-foreground"
            >
              Open an ID
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-5 sm:col-span-2 lg:col-span-4">
            <Link to="/" className="inline-block">
              <img src="/logo.png" alt="Fairplay" className="h-8 w-auto object-contain sm:h-10" />
            </Link>
            <p className="max-w-md text-[14px] leading-relaxed text-muted-foreground sm:text-[14.5px]">
              Fairplay is a cricket ID and sports exchange used in India since 2017. One login covers IPL, football, tennis and live tables. UPI in, WhatsApp for the desk, payouts after the official result.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-muted-foreground transition-colors hover:border-primary/45 hover:text-primary"
                >
                  <span className="sr-only">{social.label}</span>
                  {social.icon ? (
                    <social.icon className="h-4 w-4" />
                  ) : (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d={social.path} />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">{col.title}</h4>
              <ul className="space-y-2.5 text-[13.5px] text-muted-foreground sm:text-[14px]">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="transition-colors hover:text-foreground">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <nav
          aria-label="Explore Fairplay"
          className="grid grid-cols-1 gap-8 border-t border-white/[0.07] py-10 min-[480px]:grid-cols-2 lg:grid-cols-4"
        >
          {footerExploreGroups.map((group) => (
            <div key={group.title}>
              <h4 className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground/70">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-2 text-[13px] text-muted-foreground/80">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="transition-colors hover:text-primary">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="flex flex-col gap-5 border-t border-white/[0.06] pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[12.5px] font-medium text-muted-foreground">
            <Link to="/privacy-policy" className="transition-colors hover:text-foreground">Privacy</Link>
            <Link to="/terms-conditions" className="transition-colors hover:text-foreground">Terms</Link>
            <Link to="/responsible-gaming" className="transition-colors hover:text-foreground">Play within limits</Link>
            <Link to="/legal-status" className="transition-colors hover:text-foreground">Legal</Link>
            <Link to="/all-links" className="transition-colors hover:text-foreground">Site index</Link>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 md:flex-col md:items-end">
            <p className="text-[12.5px] font-medium text-muted-foreground">© 2026 Fairplay. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded border border-flame/30 px-2 py-0.5 text-[10px] font-bold text-flame">18+</span>
              <span className="rounded border border-white/15 px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">Curaçao licence</span>
              <span className="rounded border border-primary/30 px-2 py-0.5 text-[10px] font-semibold text-primary">SSL secured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
