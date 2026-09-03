import { Link } from "@tanstack/react-router";
import { waLink } from "@/lib/whatsapp";

export function TrustedExchangesSection() {
  return (
    <section className="border-b border-white/5 px-4 py-16 sm:px-6 sm:py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary mb-4">
            One conversation, many books
          </div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Other exchanges, one Fairplay desk</h2>
          <p className="mt-2 max-w-lg mx-auto text-sm text-muted-foreground">
            Partner books listed here are issued by the same WhatsApp desk. Do not fund a link from social media.
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "11xplay", href: "/11xplay" },
              { name: "Laser247", href: "/laser247" },
              { name: "Gold365", href: "/gold365" },
              { name: "Cricbet99", href: "/cricbet99" },
              { name: "Fairdeal", href: "/fairdeal" },
            ].map((partner) => (
              <Link
                key={partner.name}
                to={partner.href}
                className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
              >
                {partner.name}
              </Link>
            ))}
          </div>
          <div className="flex shrink-0 gap-3">
            <a
              href={waLink("Hi Fairplay, I want to check partner book access")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(47,185,74,0.3)]"
            >
              Ask WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
