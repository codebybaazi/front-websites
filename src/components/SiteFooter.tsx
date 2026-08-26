import { siteName } from "@/data/site";
import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Youtube, Send, MessageCircle } from "lucide-react";
import logoUrl from "@/assets/mahadev-logo.gif";
import { useWhatsApp } from "@/components/WhatsAppProvider";

export function SiteFooter() {
  const { whatsappUrl } = useWhatsApp();
  const socials = [
    { label: "WhatsApp", href: whatsappUrl, Icon: MessageCircle },
    { label: "Telegram", href: "https://t.me/", Icon: Send },
    { label: "Instagram", href: "https://instagram.com/", Icon: Instagram },
    { label: "Facebook", href: "https://facebook.com/", Icon: Facebook },
    { label: "Twitter", href: "https://twitter.com/", Icon: Twitter },
    { label: "YouTube", href: "https://youtube.com/", Icon: Youtube },
  ];
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt={siteName} className="h-10 w-auto" />
          </div>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            India's trusted Mahadev Book ID provider — instant UPI payouts, 24/7 WhatsApp support and exchange-grade odds across sports and live casino.
          </p>
          <div className="mt-5">
            <div className="text-[11px] font-bold uppercase tracking-widest text-primary/80 mb-2">Follow Us</div>
            <div className="flex flex-wrap gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-3">Product</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#in-play" className="hover:text-foreground">In-Play & Upcoming</a></li>
            <li><Link to="/matches" className="hover:text-foreground">All Matches Index</Link></li>
            <li><Link to="/predictions" className="hover:text-foreground">Match Predictions</Link></li>
            <li><Link to="/schedule" className="hover:text-foreground">2026 Match Schedule</Link></li>
            <li><Link to="/mahadev-betting-app" className="hover:text-foreground">Mahadev Betting App</Link></li>
            <li><Link to="/mahadev-book-vs-lotus-365" className="hover:text-foreground">Mahadev Book vs Lotus 365</Link></li>
            <li><Link to="/mahadev-book-vs-skyexchange-247" className="hover:text-foreground">Mahadev Book vs SkyExchange 247</Link></li>
            <li><a href="#betting-options" className="hover:text-foreground">Betting Options</a></li>
            <li><a href="#our-casinos" className="hover:text-foreground">Live Casino</a></li>
            <li><a href="#promotions" className="hover:text-foreground">Promotions</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Company</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            <li><Link to="/login" className="hover:text-foreground">Login</Link></li>
            <li><a href="#why" className="hover:text-foreground">Why Choose Us</a></li>
            <li><a href="#testimonials" className="hover:text-foreground">Testimonials</a></li>
            <li><Link to="/all-links" className="hover:text-foreground">All Links (Sitemap)</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Support</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">WhatsApp Support</a></li>
            <li><a href="#steps" className="hover:text-foreground">How It Works</a></li>
            <li><Link to="/contact" className="hover:text-foreground">Live Chat</Link></li>
            <li><a href="#faq" className="hover:text-foreground">FAQs</a></li>
            <li><a href="#payments" className="hover:text-foreground">Deposit & Withdrawal</a></li>
            <li><a href="#kyc" className="hover:text-foreground">KYC & Security</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} {siteName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
