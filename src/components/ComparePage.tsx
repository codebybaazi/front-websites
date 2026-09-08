import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { SiteFooter } from "@/components/SiteFooter";
import { QuickLinks } from "@/components/QuickLinks";
import { AiOverview } from "@/components/AiOverview";
import { useWhatsAppUrl } from "@/components/WhatsAppProvider";
import { toFaqPageJsonLd } from "@/lib/derive-page-faqs";
import {
  Check,
  X,
  ShieldCheck,
  Zap,
  Wallet,
  Headphones,
  Trophy,
  MessageCircle,
} from "lucide-react";

export type CompareRow = { feature: string; lotus: string; rival: string };
export type CompareFaq = { q: string; a: string };
export type CompareNarrative = { title: string; body: string };

export type CompareData = {
  slug: string;
  rival: string;
  rows: CompareRow[];
  faq: CompareFaq[];
  narratives: CompareNarrative[];
};

const HIGHLIGHTS = [
  { Icon: Zap, title: "Instant UPI payouts", copy: "Avg. under 4 minutes — no batched queues or manual review." },
  { Icon: ShieldCheck, title: "Human-vetted KYC", copy: "Every withdrawal signed off by a risk officer, not a bot." },
  { Icon: Wallet, title: "₹100 minimum", copy: "Start small on UPI, IMPS or Net-banking." },
  { Icon: Headphones, title: "24/7 WhatsApp", copy: "Sub-2-min reply time — no ticket queues." },
];

export function ComparePageView({ data }: { data: CompareData }) {
  const whatsappUrl = useWhatsAppUrl();
  const url = `https://lotus365id.com/${data.slug}`;
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />


      <section className="relative mx-auto max-w-6xl px-6 pt-20 pb-12">
        <div className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-4 inline-flex items-center gap-2">
          <Trophy className="h-3.5 w-3.5" /> Head-to-head
        </div>
        <h1 className="font-display text-4xl md:text-6xl mb-5">
          Lotus365 vs <span className="gold-text">{data.rival}</span>
        </h1>
        <p className="text-lg text-foreground/90 max-w-2xl">
          An honest, no-nonsense 2026 comparison for Indian players — payouts,
          cricket odds, UPI deposits, live casino and support, side by side.
        </p>
        <div className="mt-7">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-green inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition"
          >
            <WhatsAppIcon className="h-4 w-4" /> Switch to Lotus365 on WhatsApp
          </a>
        </div>
      </section>

      <AiOverview
        title={`Lotus365 vs ${data.rival} — AI Overview`}
        summary={`A quick, AI-generated summary of how Lotus365 stacks up against ${data.rival} for Indian players — payouts, cricket depth, casino, support and loyalty.`}
        points={[
          "Instant UPI payouts averaging under 4 minutes",
          "40+ IPL fancy markets per match with deeper session lines",
          "24/7 WhatsApp + Telegram concierge, sub-2-min reply",
          "Lotus Club tiers with cashback, free bets and birthday bonuses",
        ]}
        sources={[
          { label: "Feature table", to: "#" },
          { label: "FAQ", to: "#" },
        ]}
      />

      <section className="mx-auto max-w-6xl px-6 pb-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {HIGHLIGHTS.map(({ Icon, title, copy }) => (
          <div key={title} className="glass-card rounded-2xl p-5">
            <Icon className="h-5 w-5 text-primary mb-3" />
            <div className="font-display text-lg mb-1">{title}</div>
            <p className="text-sm text-foreground/90 leading-relaxed">{copy}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="font-display text-2xl md:text-3xl mb-6">
          Feature-by-feature comparison
        </h2>
        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-primary/10 text-left">
                <tr>
                  <th className="p-4 font-semibold">Feature</th>
                  <th className="p-4 font-semibold text-primary">Lotus365</th>
                  <th className="p-4 font-semibold text-foreground/90">{data.rival}</th>
                </tr>
              </thead>
              <tbody>
                {data.rows.map((r) => (
                  <tr key={r.feature} className="border-t border-border/40 align-top">
                    <td className="p-4 font-medium">{r.feature}</td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{r.lotus}</span>
                      </div>
                    </td>
                    <td className="p-4 text-foreground/90">
                      <div className="flex gap-2">
                        <X className="h-4 w-4 text-foreground/85 shrink-0 mt-0.5" />
                        <span>{r.rival}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="font-display text-2xl md:text-3xl mb-6">
          Why Indian players are switching to Lotus365
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {data.narratives.map((n) => (
            <div key={n.title} className="glass-card rounded-2xl p-6">
              <h3 className="font-display text-xl mb-3">{n.title}</h3>
              <p className="text-sm text-foreground/90 leading-relaxed">{n.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="font-display text-2xl md:text-3xl mb-6">
          Frequently asked questions
        </h2>
        <div className="space-y-3">
          {data.faq.map((f) => (
            <details key={f.q} className="glass-card rounded-2xl p-5 group">
              <summary className="cursor-pointer font-semibold list-none flex justify-between items-center">
                {f.q}
                <span className="text-primary group-open:rotate-45 transition-transform text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-foreground/90 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-display text-2xl md:text-4xl mb-4">
            Make the switch in <span className="gold-text">60 seconds</span>
          </h2>
          <p className="text-foreground/90 max-w-xl mx-auto mb-6">
            Message the Lotus365 concierge on WhatsApp — we will match your
            {" "}{data.rival} tier and set up your Lotus ID before your next match.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition"
          >
            <MessageCircle className="h-4 w-4" /> Get my Lotus365 ID
          </a>
        </div>
      </section>

      <QuickLinks currentPath={url} heading="Explore more Lotus365 resources" />
      <SiteFooter />
    </div>
  );
}

export function compareHead(data: CompareData) {
  const url = `https://lotus365id.com/${data.slug}`;
  const title = `Lotus365 vs ${data.rival} — Honest 2026 Comparison`;
  const desc = `Lotus365 vs ${data.rival} compared on payouts, cricket odds, UPI deposits, live casino, support and loyalty — see why Indian punters are switching in 2026.`;
  return {
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { property: "og:image", content: "https://lotus365id.com/og-lotus365.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://lotus365id.com/og-lotus365.jpg" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: `Lotus365 vs ${data.rival}`,
          url,
          description: desc,
          isPartOf: { "@type": "WebSite", name: "Lotus365", url: "https://lotus365id.com/" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://lotus365id.com/" },
            { "@type": "ListItem", position: 2, name: `Lotus365 vs ${data.rival}`, item: url },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(toFaqPageJsonLd(data.faq)),
      },
    ],
  };
}