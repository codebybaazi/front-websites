import { Suspense, type ReactNode } from "react";
import { MessageCircle, Send, Check, ArrowRight } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { SiteHeader, TELEGRAM } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageFaqs } from "@/components/PageFaqs";
import { AiOverviewSection } from "@/components/AiOverviewSection";
import { useWhatsAppHref } from "@/hooks/use-whatsapp";

const RELATED_LINKS: { to: string; label: string; desc: string }[] = [
  { to: "/sprinters-club", label: "Sprinters Club", desc: "VIP membership perks" },
  { to: "/cricbet99", label: "Cricbet99 ID", desc: "Live cricket odds" },
  { to: "/laser247", label: "Laser247 ID", desc: "All-in-one exchange" },
  { to: "/11xplay", label: "11xplay ID", desc: "Multi-sport betting" },
  { to: "/sports-id", label: "Sports ID", desc: "Universal sports account" },
  { to: "/cricket-betting", label: "Cricket Betting", desc: "IPL, T20, Test markets" },
  { to: "/football-betting", label: "Football Betting", desc: "EPL, UCL, La Liga" },
  { to: "/tennis-betting", label: "Tennis Betting", desc: "Grand Slam markets" },
  { to: "/horse-race-betting", label: "Horse Racing", desc: "Indian & UK tracks" },
  { to: "/casino", label: "Live Casino", desc: "Evolution & Ezugi tables" },
  { to: "/indian-card-games", label: "Indian Card Games", desc: "Teen Patti, Andar Bahar" },
  { to: "/predictions", label: "Match Predictions", desc: "Daily expert tips" },
  { to: "/platforms", label: "All Platforms", desc: "Every gaming ID" },
  { to: "/sprinters-vs-lotus365", label: "Sprinters vs Lotus 365", desc: "Head-to-head guide" },
  { to: "/sprinters-vs-skyexchange247", label: "Sprinters vs Skyexchange 247", desc: "Exchange comparison" },
  { to: "/schedule", label: "Sports Schedule 2026", desc: "All upcoming fixtures" },
  { to: "/cricket-schedule", label: "Cricket Schedule", desc: "India series & ICC events" },
  { to: "/matches", label: "Live Matches", desc: "In-play & upcoming" },
  { to: "/blog", label: "Blog & Guides", desc: "Strategy & news" },
  { to: "/sprinters-book-deposit-number", label: "Deposit Number", desc: "Sprinters Book WhatsApp deposit" },
  { to: "/sprinters-book-withdrawl-number", label: "Withdrawal Number", desc: "Sprinters Book WhatsApp payout" },
  { to: "/sprinters-book-customer-care-number", label: "Customer Care Number", desc: "Sprinters Book WhatsApp support" },

];

export type ContentSection = {
  heading: string;
  body?: string;
  bullets?: string[];
};

export type ContentPageProps = {
  kicker: string;
  title: string;
  intro: string;
  sections: ContentSection[];
  cta?: string;
  extra?: ReactNode;
};

export function ContentPage({
  kicker,
  title,
  intro,
  sections,
  cta = "Ready to get your Sprinters ID? Message us on WhatsApp — verified in minutes.",
  extra,
}: ContentPageProps) {
  const whatsapp = useWhatsAppHref();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/50">
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center md:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-primary backdrop-blur">
            {kicker}
          </span>
          <h1 className="mt-6 text-4xl font-black uppercase leading-tight text-foreground md:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{intro}</p>
        </div>
      </section>

      <Suspense fallback={null}>
        <AiOverviewSection />
      </Suspense>


      {/* Sections */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.heading} className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="text-2xl font-bold text-card-foreground">{s.heading}</h2>
              {s.body && (
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
              )}
              {s.bullets && (
                <ul className="mt-4 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        {extra}
      </section>

      <PageFaqs />

      <RelatedPages />

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div
          className="rounded-3xl p-10 text-center md:p-14"
          style={{ background: "var(--gradient-hero)" }}
        >
          <p className="mx-auto max-w-xl text-lg font-semibold text-white">{cta}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={whatsapp}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary transition hover:opacity-90"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
            <a
              href={TELEGRAM}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
            >
              <Send className="h-5 w-5" /> Telegram
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function RelatedPages() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const items = RELATED_LINKS.filter((l) => l.to !== pathname).slice(0, 8);
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16">
      <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-card-foreground md:text-2xl">Related pages</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Explore more from Sprinters — popular IDs, sports and casino guides.
            </p>
          </div>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="group flex h-full items-start gap-2 rounded-xl border border-border/60 bg-background/60 p-4 transition hover:border-primary/60 hover:bg-primary/5"
              >
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold text-foreground group-hover:text-primary">
                    {l.label}
                  </div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{l.desc}</div>
                </div>
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
