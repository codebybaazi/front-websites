import { Link } from "@tanstack/react-router";
import { MessageCircle, Send, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/sprinters-logo.jpg?w=280&format=webp&quality=80";
import { TELEGRAM } from "./SiteHeader";
import { QuickLinks } from "./QuickLinks";
import { useWhatsAppHref } from "@/hooks/use-whatsapp";

export function SiteFooter() {
  const whatsapp = useWhatsAppHref();
  return (
    <>
    <QuickLinks />
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-6">
        <div className="md:col-span-2">
          <div className="flex items-center">
            <img src={logo} alt="Sprinters Online Gaming official logo" width={512} height={512} loading="lazy" className="h-14 w-auto object-contain" />
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Your ultimate destination for secure online betting IDs, best odds, and instant
            withdrawals across India.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              { href: "https://facebook.com/sprintersonline", label: "Facebook", Icon: Facebook },
              { href: "https://instagram.com/sprintersonline", label: "Instagram", Icon: Instagram },
              { href: "https://twitter.com/sprintersonline", label: "Twitter", Icon: Twitter },
              { href: "https://youtube.com/@sprintersonline", label: "YouTube", Icon: Youtube },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="mt-4 flex gap-3">
            <a href={whatsapp} className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a href={TELEGRAM} className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">
              <Send className="h-4 w-4" /> Telegram
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Sports</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/matches" className="hover:text-primary">Live Match Center</Link></li>
            <li><Link to="/sports-id" className="hover:text-primary">Multi-Sport ID</Link></li>
            <li><Link to="/cricket-betting" className="hover:text-primary">Cricket IDs</Link></li>
            <li><Link to="/football-betting" className="hover:text-primary">Football IDs</Link></li>
            <li><Link to="/tennis-betting" className="hover:text-primary">Tennis IDs</Link></li>
            <li><Link to="/horse-race-betting" className="hover:text-primary">Horse Race IDs</Link></li>
            <li><Link to="/schedule" className="hover:text-primary">2026 Fixtures</Link></li>
            <li><Link to="/cricket-schedule" className="hover:text-primary">Cricket Fixtures</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Gaming</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/casino" className="hover:text-primary">Live Casino Tables</Link></li>
            <li><Link to="/indian-card-games" className="hover:text-primary">Teen Patti & Andar Bahar</Link></li>
            <li><Link to="/platforms" className="hover:text-primary">Supported Exchanges</Link></li>
            <li><Link to="/cricbet99" className="hover:text-primary">Cricbet99 Account</Link></li>
            <li><Link to="/laser247" className="hover:text-primary">Laser247 Account</Link></li>
            <li><Link to="/11xplay" className="hover:text-primary">11xplay Account</Link></li>
            <li><Link to="/cricket-betting-app" className="hover:text-primary">Mobile Betting App</Link></li>
          </ul>

        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Compare</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/sprinters-vs-lotus365" className="hover:text-primary">vs Lotus 365</Link></li>
            <li><Link to="/sprinters-vs-skyexchange247" className="hover:text-primary">vs Skyexchange 247</Link></li>
            <li><Link to="/sports-id" className="hover:text-primary">Sports ID Guide</Link></li>
            <li><Link to="/predictions" className="hover:text-primary">Today's Predictions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About Sprinters</Link></li>
            <li><Link to="/services" className="hover:text-primary">What We Offer</Link></li>
            <li><Link to="/sprinters-club" className="hover:text-primary">VIP Club</Link></li>
            <li><Link to="/blog" className="hover:text-primary">Blog & News</Link></li>
            <li><Link to="/authors" className="hover:text-primary">Our Writers</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact Support</Link></li>
            <li><Link to="/sprinters-book-deposit-number" className="hover:text-primary">Deposit Number</Link></li>
            <li><Link to="/sprinters-book-withdrawl-number" className="hover:text-primary">Withdrawal Number</Link></li>
            <li><Link to="/sprinters-book-customer-care-number" className="hover:text-primary">Customer Care Number</Link></li>
            <li><Link to="/responsible-gambling" className="hover:text-primary">Play Responsibly</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sprinters Online Gaming. All rights reserved.
        </p>
      </div>
    </footer>
    </>
  );
}

