import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Gift, Trophy, RefreshCcw, ShieldCheck } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const bonusFaqs: FAQItem[] = [
  { q: "What welcome bonus does Mahadev Book offer?", a: "A 5% instant deposit bonus plus a ₹500 free bet on your first deposit, with a low rollover requirement compared to most platforms." },
  { q: "How does the reload bonus work?", a: "A 3% weekly reload bonus is credited on top-up deposits made after your first one, so returning players keep getting a small boost, not just new sign-ups." },
  { q: "Is there a cashback offer?", a: "Yes, a 5% weekly loss cashback on qualifying accounts, credited automatically rather than something you need to claim manually." },
  { q: "What does rollover or turnover requirement mean?", a: "It's the amount you need to bet before a bonus becomes withdrawable. Mahadev Book's welcome bonus carries a 1x turnover requirement, meaning you bet the bonus amount once before cashing out any of it." },
  { q: "Can I withdraw a bonus immediately after claiming it?", a: "No. Bonuses need to clear the turnover requirement first. Once that's met, the bonus amount and any winnings from it become withdrawable like regular funds." },
  { q: "Do bonuses expire?", a: "Most bonuses have a validity window. Ask on WhatsApp when claiming one so you know exactly how long you have to clear the rollover." },
  { q: "How do I claim a bonus?", a: "Message support on WhatsApp before or right after your deposit and mention which bonus you want. Some are applied automatically, others need a quick confirmation." },
];

export const Route = createFileRoute("/mahadev-book-bonuses")({
  head: () => ({
    meta: [
      { title: "Mahadev Book Bonuses — Welcome Offer, Reload & Cashback" },
      { name: "description", content: "Mahadev Book bonuses explained — welcome deposit bonus, weekly reload, loss cashback and rollover terms. How to claim each one on WhatsApp." },
      { property: "og:title", content: "Mahadev Book Bonuses — Welcome Offer, Reload & Cashback" },
        { name: "twitter:title", content: "Mahadev Book Bonuses — Welcome Offer, Reload & Cashback" },
      { property: "og:description", content: "Every Mahadev Book bonus explained — welcome offer, reload, cashback and what the rollover actually means." },
      { property: "og:url", content: "https://mahadevbookss.com/mahadev-book-bonuses" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book bonuses — welcome offer, reload and cashback" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/mahadev-book-bonuses" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(bonusFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Support", item: "https://mahadevbookss.com/support" },
            { "@type": "ListItem", position: 3, name: "Bonuses", item: "https://mahadevbookss.com/mahadev-book-bonuses" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/mahadev-book-bonuses",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: BonusesPage,
});

const bonuses: [string, string, string][] = [
  ["Welcome bonus", "5% instant + ₹500 free bet", "1x turnover"],
  ["Weekly reload", "3% on top-up deposits", "1x turnover"],
  ["Loss cashback", "5% of weekly net loss", "Credited automatically"],
  ["Referral bonus", "₹300 per verified friend", "See referral program"],
];

const points = [
  { icon: Gift, t: "Welcome offer", d: "A first-deposit bonus plus a free bet, aimed at getting new players started without a heavy catch." },
  { icon: RefreshCcw, t: "Weekly reload", d: "A small boost on top-up deposits, so loyal players get something too, not just new sign-ups." },
  { icon: Trophy, t: "Loss cashback", d: "A percentage back on a rough week, credited automatically rather than requiring a claim." },
  { icon: ShieldCheck, t: "Clear rollover terms", d: "A 1x turnover on most bonuses, explained plainly on WhatsApp before you claim, not buried in fine print." },
];

function BonusesPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Wallet
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Mahadev Book <span className="text-gradient-gold">Bonuses</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Welcome bonus, weekly reload, loss cashback and referral rewards — here's what each one
          actually pays out and what the rollover requirement means before you claim.
        </p>
        <div className="mt-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <span className="btn-glow-content flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> Claim a Bonus on WhatsApp
            </span>
          </a>
        </div>
      </section>

      <AIOverview
        title="AI Overview — Mahadev Book Bonuses"
        summary="Mahadev Book runs a 5% instant welcome bonus plus a ₹500 free bet on first deposit, a 3% weekly reload bonus on top-up deposits, a 5% weekly loss cashback credited automatically, and a ₹300 referral bonus per verified friend. Most bonuses carry a 1x turnover requirement, meaning the bonus amount needs to be bet once before it becomes withdrawable. Bonuses are claimed by messaging the official WhatsApp support line."
        points={[
          "5% instant welcome bonus + ₹500 free bet",
          "3% weekly reload bonus on top-up deposits",
          "5% weekly loss cashback, credited automatically",
          "₹300 referral bonus per verified friend",
          "1x turnover requirement on most bonuses",
          "Claimed by messaging the official WhatsApp line",
        ]}
        keywords={["mahadev book bonus", "mahadev book welcome bonus", "mahadev book cashback", "mahadev book reload bonus"]}
      />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">What's on offer</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {points.map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-6">
              <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary grid place-items-center">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-foreground">{c.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-border/60">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Bonuses at a glance</h2>
        <div className="mt-6 overflow-hidden rounded-xl border border-border/70">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-semibold">Bonus</th>
                <th className="px-4 py-3 font-semibold">Value</th>
                <th className="px-4 py-3 font-semibold">Rollover</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {bonuses.map(([m, val, roll]) => (
                <tr key={m} className="bg-background">
                  <td className="px-4 py-3 font-medium text-foreground">{m}</td>
                  <td className="px-4 py-3 text-muted-foreground">{val}</td>
                  <td className="px-4 py-3 text-muted-foreground">{roll}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <FAQSection title="Mahadev Book Bonuses — FAQs" items={bonusFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Ready to claim yours?</h2>
        <p className="mt-3 text-muted-foreground">Message support before or after your deposit and mention the bonus you want.</p>
        <div className="mt-6 flex justify-center flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><Gift className="h-4 w-4" /> Claim Now</span>
          </a>
          <Link to="/mahadev-book-referral-program" className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
            See the referral program
          </Link>
        </div>
      </section>

      <QuickLinks
        pageCategory="Support"
        excludePath="/mahadev-book-bonuses"
        title="Keep exploring"
        subtitle="Deposits, withdrawals, limits and everything else on the support desk."
      />
    </>
  );
}
