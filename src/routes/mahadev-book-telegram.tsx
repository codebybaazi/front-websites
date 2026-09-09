import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Send, Trophy, Bell, ShieldCheck, AlertTriangle } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const telegramFaqs: FAQItem[] = [
  { q: "What is the Mahadev Book Telegram channel for?", a: "It's a broadcast channel for match updates, odds movement, promotions and general announcements. It's a good add-on to WhatsApp support, not a replacement for it." },
  { q: "Can I get account help through Telegram?", a: "Telegram is mainly one-way broadcast, so account-specific requests like deposits, withdrawals or KYC should still go through the official WhatsApp support line for a faster, verified response." },
  { q: "Is the Telegram channel official?", a: "Yes, it's run by the same team behind Mahadev Book. Only trust the handle linked from this page or the official WhatsApp chat, since impersonator channels do exist." },
  { q: "What kind of updates does the channel post?", a: "Match schedules, odds highlights for IPL and other major tournaments, bonus announcements and occasional platform updates." },
  { q: "Do I need to join Telegram to use Mahadev Book?", a: "No. It's entirely optional. Everything needed to deposit, withdraw and get support runs through WhatsApp." },
  { q: "Why do some fake Telegram channels use the Mahadev Book name?", a: "Impersonator channels copy the name to promote unrelated groups or scams. Always confirm the handle from this page or your WhatsApp chat before joining, and never send payments or KYC documents inside Telegram." },
];

export const Route = createFileRoute("/mahadev-book-telegram")({
  head: () => ({
    meta: [
      { title: "Mahadev Book Telegram — Official Channel for Updates" },
      { name: "description", content: "Join the official Mahadev Book Telegram channel for match updates, odds and promotions. For deposits, withdrawals and account help, use the official WhatsApp support line." },
      { property: "og:title", content: "Mahadev Book Telegram — Official Channel for Updates" },
      { property: "og:description", content: "The official Mahadev Book Telegram channel for match updates and odds. Account support still runs through WhatsApp." },
      { property: "og:url", content: "https://mahadevbookss.com/mahadev-book-telegram" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book official Telegram channel" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/mahadev-book-telegram" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(telegramFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Support", item: "https://mahadevbookss.com/support" },
            { "@type": "ListItem", position: 3, name: "Telegram", item: "https://mahadevbookss.com/mahadev-book-telegram" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/mahadev-book-telegram",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: TelegramPage,
});

const channelPoints = [
  { icon: Trophy, t: "Match & odds updates", d: "IPL, international cricket and other major fixtures, with odds highlights as they move." },
  { icon: Bell, t: "Promotions & bonuses", d: "New offers and reload bonuses posted as they go live, before they hit other channels." },
  { icon: Send, t: "One-way broadcast", d: "It's built for reading, not chatting — think of it as a live noticeboard rather than a support line." },
  { icon: ShieldCheck, t: "Account help stays on WhatsApp", d: "Deposits, withdrawals and KYC are handled on the official WhatsApp line, not inside Telegram." },
];

function TelegramPage() {
  const { whatsappUrl } = useWhatsApp();
  const telegramUrl = "https://t.me/mahadevbook_official";

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Updates Channel
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Mahadev Book <span className="text-gradient-gold">Telegram</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          The official Mahadev Book Telegram channel posts match updates, odds highlights and
          promotions. It's a good way to stay on top of what's live, but account help — deposits,
          withdrawals, KYC — still goes through the official WhatsApp support line.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <span className="btn-glow-content flex items-center gap-2">
              <Send className="h-4 w-4" /> Join the Telegram Channel
            </span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent transition"
          >
            <MessageCircle className="h-4 w-4" /> Account Help on WhatsApp
          </a>
        </div>
      </section>

      <AIOverview
        title="AI Overview — Mahadev Book Telegram"
        summary="The official Mahadev Book Telegram channel is a broadcast feed for match updates, odds highlights and promotions, run by the same team behind the platform. It's a one-way channel rather than a support line, so deposits, withdrawals, KYC and account-specific requests are still handled on the official WhatsApp support line. Joining the channel is optional and not required to use Mahadev Book."
        points={[
          "Broadcast channel for match updates and odds",
          "Promotions and bonus announcements posted here first",
          "Not a support line — it's read-only, not two-way chat",
          "Account help stays on the official WhatsApp line",
          "Joining is optional, not required to use the platform",
          "Only trust the handle linked from this page",
        ]}
        keywords={["mahadev book telegram", "mahadev book telegram channel", "mahadev book updates", "mahadev book"]}
      />

      {/* What's on the channel */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">What the channel is for</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">A quick way to stay updated, separate from account support.</p>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {channelPoints.map((c) => (
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

      {/* Safety note */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-border/60">
        <div className="rounded-2xl border border-warning/40 bg-warning/5 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <h2 className="text-xl font-bold text-foreground">Watch out for impersonator channels</h2>
          </div>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Channels copying the Mahadev Book name do exist on Telegram, often used to push
            unrelated groups or scams. Only join the handle linked from this page, and never send
            a deposit, KYC document or password inside Telegram — that always stays on the
            official WhatsApp line.
          </p>
        </div>
      </section>

      <FAQSection title="Mahadev Book Telegram — FAQs" items={telegramFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Stay on top of every match</h2>
        <p className="mt-3 text-muted-foreground">Join the channel for updates, or message support for anything account-related.</p>
        <div className="mt-6 flex justify-center flex-wrap gap-3">
          <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><Send className="h-4 w-4" /> Join Telegram</span>
          </a>
          <Link to="/contact" className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
            Other ways to reach us
          </Link>
        </div>
      </section>

      <QuickLinks
        pageCategory="Support"
        excludePath="/mahadev-book-telegram"
        title="Keep exploring"
        subtitle="Deposits, withdrawals, KYC and everything else on the support desk."
      />
    </>
  );
}
