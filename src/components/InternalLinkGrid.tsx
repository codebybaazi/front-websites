import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { HubLink } from "@/utils/internal-links";

interface InternalLinkGridProps {
  title?: string;
  intro?: string;
  links: HubLink[];
}

export function InternalLinkGrid({
  title = "Related Fairplay pages",
  intro = "ID, markets, wallet and support that sit next to this topic.",
  links,
}: InternalLinkGridProps) {
  if (!links.length) return null;

  return (
    <section className="py-16 px-4" aria-labelledby="internal-links-heading">
      <div className="container max-w-6xl mx-auto">
        <p className="kicker mb-3">Keep going</p>
        <h2 id="internal-links-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
          {title}
        </h2>
        <p className="text-muted-foreground max-w-3xl mb-8">{intro}</p>
        <nav aria-label="Related Fairplay pages">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {links.map((link) => (
              <li key={`${link.to}-${link.label}`}>
                {link.search ? (
                  <Link
                    to={link.to as never}
                    search={link.search as never}
                    className="group flex items-start justify-between gap-4 rounded-md border border-white/8 bg-card/50 p-4 hover:border-primary/40 transition-colors h-full"
                  >
                    <span>
                      <span className="block text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {link.label}
                      </span>
                      <span className="mt-1 block text-xs text-muted-foreground">{link.desc}</span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <Link
                    to={link.to as never}
                    className="group flex items-start justify-between gap-4 rounded-md border border-white/8 bg-card/50 p-4 hover:border-primary/40 transition-colors h-full"
                  >
                    <span>
                      <span className="block text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {link.label}
                      </span>
                      <span className="mt-1 block text-xs text-muted-foreground">{link.desc}</span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
