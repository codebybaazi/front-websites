import { abs, ogImageMeta } from "@/lib/site-url";
import { buildPageFaqLd } from "@/data/pageFaqs";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";

const platforms = [
  { to: "/cricbet99", name: "Cricbet99", tag: "Cricket exchange" },
  { to: "/laser247", name: "Laser247", tag: "Sports + casino" },
  { to: "/11xplay", name: "11xplay", tag: "Multi-sport" },
  { to: "/sprinters-club", name: "Sprinters Club", tag: "Members-only" },
] as const;

export const Route = createFileRoute("/platforms")({
  head: () => ({
    meta: [
      { title: "Supported Platforms — Sprinters Online Gaming" },
      { name: "description", content: "Sprinters supports every major Indian betting platform. Get a verified ID across Cricbet99, Laser247, 11xplay and more with one WhatsApp message." },
      { property: "og:title", content: "Supported Platforms | Sprinters" },
      { property: "og:description", content: "One WhatsApp. Every platform. Verified IDs across India's leading exchanges." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: abs("/platforms") },
      ...ogImageMeta("Supported platforms on Sprinters Online Gaming — Cricbet99, Laser247, 11xplay and more"),
    ],
    links: [{ rel: "canonical", href: "/platforms" }],
    scripts: [
        ...(buildPageFaqLd("/platforms") ? [{ type: "application/ld+json", children: JSON.stringify(buildPageFaqLd("/platforms")) }] : []),
    ],
  }),
  component: () => (
    <ContentPage
      kicker="Platforms"
      title="Every Major Exchange. One Support Team."
      intro="Sprinters delivers verified IDs across every leading Indian betting platform — with a single point of contact for deposits, withdrawals and support."
      sections={[
        {
          heading: "How it works",
          body: "Tell us the platform you want. We deliver a verified ID within minutes. You get one dedicated Sprinters manager for every platform you use.",
        },
      ]}
      extra={
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {platforms.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">{p.tag}</span>
              <h3 className="mt-2 text-xl font-bold text-card-foreground group-hover:text-primary">{p.name} →</h3>
            </Link>
          ))}
        </div>
      }
    />
  ),
});
