import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, Mail } from "lucide-react";
import type { ReactNode } from "react";
import logo from "@/assets/logo.png";

import { WhatsAppFloat, GetIdSlider } from "./floating-widgets";
import { MegaMenuHeader } from "./mega-menu";



export const WA = "https://wa.me/919999999999";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Cricket", to: "/cricket" },
  { label: "Football", to: "/football" },
  { label: "Casino", to: "/casino" },
  { label: "Matches", to: "/matches" },
  { label: "Predictions", to: "/predictions" },
  { label: "Schedule", to: "/schedule" },
  { label: "App", to: "/cricbet99-app" },
  { label: "vs Lotus 365", to: "/cricbet99-vs-lotus365" },
  { label: "vs SkyExchange", to: "/cricbet99-vs-skyexchange247" },
  { label: "Services", to: "/services" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Login", to: "/login" },
  { label: "All Links", to: "/all-links" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-primary/20 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Cricbet99 — Online Cricket ID" className="h-11 w-auto drop-shadow-[0_4px_14px_rgba(0,0,0,0.4)]" />
        </Link>
        <nav className="hidden flex-wrap items-center gap-6 xl:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/85 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href={WA}
          aria-label="WhatsApp Now"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/30 transition-transform hover:scale-105"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">WhatsApp Now</span>
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-primary/20 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 sm:gap-10 sm:px-6 sm:py-12 md:grid-cols-4 md:py-16">
        <div>
          <img src={logo} alt="Cricbet99 — Online Cricket ID" className="h-12 w-auto" />
          <p className="mt-4 text-sm text-foreground/70">
            India's premium cricket ID platform. Live in-play odds, instant UPI
            payouts and 24/7 human support — all from one verified account.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Sports</h4>
          <ul className="mt-4 space-y-2 text-sm text-foreground/75">
            <li><Link to="/cricket" className="hover:text-primary">Cricket & IPL</Link></li>
            <li><Link to="/football" className="hover:text-primary">Football</Link></li>
            <li><Link to="/tennis" className="hover:text-primary">Tennis</Link></li>
            <li><Link to="/horse-racing" className="hover:text-primary">Horse Racing</Link></li>
            <li><Link to="/casino" className="hover:text-primary">Live Casino</Link></li>
            <li><Link to="/indian-card-games" className="hover:text-primary">Indian Card Games</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-foreground/75">
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/platforms" className="hover:text-primary">Platforms</Link></li>
            <li><Link to="/sports-id" className="hover:text-primary">Sports ID</Link></li>
            <li><Link to="/how-it-works" className="hover:text-primary">How It Works</Link></li>
            <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
            <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Legal & Support</h4>
          <ul className="mt-4 space-y-3 text-sm text-foreground/75">
            <li><Link to="/responsible-gaming" className="hover:text-primary">Responsible Gaming</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-primary">Terms & Conditions</Link></li>
            <li><Link to="/disclaimer" className="hover:text-primary">Disclaimer</Link></li>
            <li className="flex items-center gap-2 pt-2"><MessageCircle className="h-4 w-4 text-accent" /> WhatsApp 24/7</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +91 99999 99999</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> support@cricbet99.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary/15 py-6 text-center text-xs text-foreground/55">
        © {new Date().getFullYear()} Cricbet99. 18+ only. Please play responsibly. Betting involves financial risk.
      </div>
    </footer>
  );
}

export function SiteBackdrop() {
  return (
    <>
      {/* Solid premium dark base */}
      <div className="fixed inset-0 -z-10 bg-[#07090c]" />
      {/* Subtle radial glows for depth */}
      <div
        className="fixed inset-0 -z-10 opacity-80"
        style={{
          background:
            "radial-gradient(60rem 40rem at 15% -10%, oklch(0.55 0.15 88 / 0.20), transparent 60%), radial-gradient(50rem 40rem at 100% 10%, oklch(0.55 0.18 148 / 0.14), transparent 60%), radial-gradient(60rem 50rem at 50% 110%, oklch(0.45 0.15 88 / 0.12), transparent 60%)",
        }}
      />
      {/* Fine grid texture, faded at edges */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.9 0.15 88) 1px, transparent 1px), linear-gradient(90deg, oklch(0.9 0.15 88) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      {/* Grain */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />
    </>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {

  return (
    <div className="min-h-screen overflow-x-hidden text-foreground">
      <SiteBackdrop />
      <MegaMenuHeader />
      {children}
      <SiteFooter />
      <WhatsAppFloat />
      <GetIdSlider />
    </div>
  );
}



export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: ReactNode; subtitle: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-8 pb-8 sm:px-6 sm:pt-14 sm:pb-12 lg:pt-28">
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:px-4 sm:py-1.5 sm:text-xs">
        {eyebrow}
      </span>
      <h1 className="mt-4 max-w-4xl text-3xl font-black leading-[1.08] tracking-tight sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/80 sm:mt-6 sm:text-lg">{subtitle}</p>
    </section>
  );
}

export function CTABand({ heading, sub }: { heading: string; sub: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
      <div
        className="rounded-3xl border border-primary/30 p-6 text-center sm:p-10 md:p-16"
        style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-card)" }}
      >
        <h2 className="text-2xl font-black sm:text-3xl md:text-4xl">{heading}</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-foreground/80 sm:mt-4 sm:text-base">{sub}</p>
        <a
          href={WA}
          className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-primary-foreground shadow-2xl transition-transform hover:scale-[1.03] sm:mt-8 sm:px-8 sm:py-4 sm:text-base"
          style={{ background: "var(--gradient-gold)" }}
        >
          <MessageCircle className="h-5 w-5" /> Get Your ID on WhatsApp
        </a>
      </div>
    </section>
  );
}
