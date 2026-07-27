import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTABand } from "@/components/site-layout";

export const Route = createFileRoute("/platforms")({
  head: () => ({
    meta: [
      { title: "Cricbet99 Platforms — Curated Exchanges for Indian Players" },
      { name: "description", content: "One Cricbet99 ID gives you access to a curated set of premium betting exchanges and casino platforms trusted by Indian players." },
      { property: "og:title", content: "Cricbet99 Platforms" },
      { property: "og:description", content: "A curated network of premium exchanges accessible with a single Cricbet99 login." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Platforms,
});

const platforms = [
  { name: "Exchange sports", desc: "Peer-to-peer style back/lay markets on cricket, football and tennis with sharp odds and deep liquidity." },
  { name: "Sportsbook", desc: "Traditional fixed-odds sports betting with pre-match and in-play markets across every major sport." },
  { name: "Live casino", desc: "HD-streamed live dealer tables covering Teen Patti, Andar Bahar, Roulette, Baccarat, Blackjack and Dragon Tiger." },
  { name: "Slots & instant games", desc: "A curated slots library plus crash, mine and dice-style instant games from leading providers." },
  { name: "Virtual sports", desc: "24/7 virtual cricket, football and horse racing with rapid-fire results and betting markets." },
  { name: "Fancy bet markets", desc: "Session bets, over-by-over runs, player performance and fall-of-wicket markets — the pulse of Indian cricket betting." },
];

function Platforms() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Platforms"
        title={<>One Cricbet99 ID, a curated network of <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>premium platforms.</span></>}
        subtitle="Instead of juggling half a dozen logins, Cricbet99 gives you access to a curated network of the most trusted sports exchanges, sportsbooks and casino products used by Indian players — all through one verified account."
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {platforms.map((p) => (
            <div key={p.name} className="rounded-2xl border border-primary/20 bg-background/60 p-7">
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className="mt-2 text-sm text-foreground/70">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <CTABand heading="One ID. Every platform." sub="Get your Cricbet99 login on WhatsApp and explore the full network today." />
    </SiteLayout>
  );
}
