import { abs, ogImageMeta } from "@/lib/site-url";
import { buildPageFaqLd } from "@/data/pageFaqs";
import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Send, Clock, ShieldCheck, Sparkles, Mail } from "lucide-react";
import { SiteHeader, TELEGRAM } from "@/components/SiteHeader";
import { useWhatsAppHref } from "@/hooks/use-whatsapp";
import { SiteFooter } from "@/components/SiteFooter";
import { PageFaqs } from "@/components/PageFaqs";
import { WhatsAppNumberCard } from "@/components/WhatsAppNumberCard";
import {
  FALLBACK_WHATSAPP_HREF,
  displayNumberFromHref,
  fetchHostNumbers,
  hrefFromNumbers,
  siteFallbackHost,
} from "@/lib/whatsapp";

const SUPPORT_EMAIL = "help@sprintersbokk.com";

export const Route = createFileRoute("/contact")({
  loader: async () => {
    const map = await fetchHostNumbers();
    return { whatsapp: hrefFromNumbers(map, siteFallbackHost()) };
  },
  head: () => ({
    meta: [
      { title: "Contact Sprinters Online Gaming — 24/7 Support" },
      {
        name: "description",
        content:
          "Get in touch with Sprinters Book on WhatsApp, email help@sprintersbokk.com, or Telegram. 24/7 support for IDs, deposits, withdrawals and everything in between.",
      },
      { property: "og:title", content: "Contact Sprinters Online Gaming" },
      {
        property: "og:description",
        content: "Reach the Sprinters team on WhatsApp, email or Telegram — support available 24/7.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: abs("/contact") },
      ...ogImageMeta("Contact Sprinters Online Gaming — 24/7 WhatsApp and Telegram support"),
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
        ...(buildPageFaqLd("/contact") ? [{ type: "application/ld+json", children: JSON.stringify(buildPageFaqLd("/contact")) }] : []),
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { whatsapp: loadedHref } = Route.useLoaderData();
  const liveHref = useWhatsAppHref();
  const whatsapp =
    liveHref && liveHref !== FALLBACK_WHATSAPP_HREF ? liveHref : loadedHref;
  const displayNumber =
    displayNumberFromHref(whatsapp) || displayNumberFromHref(loadedHref);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center md:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-primary backdrop-blur">
            Get In Touch
          </span>
          <h1 className="mt-6 text-4xl font-black uppercase leading-tight text-foreground md:text-6xl">
            We're here <span className="text-primary">24/7</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Reach out on WhatsApp, email or Telegram for IDs, payments, or
            anything else. Real humans, no bots, no waiting.
          </p>
          <WhatsAppNumberCard
            href={whatsapp}
            displayNumber={displayNumber}
            kicker="WhatsApp customer care"
          />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pt-16 pb-6 md:pt-24">
        <div className="grid gap-6 md:grid-cols-3">
          <a
            href={whatsapp}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-secondary"
          >
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
              <MessageCircle className="h-7 w-7" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-card-foreground">WhatsApp</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fastest way to reach us. Chat with the support team in seconds.
            </p>
            {displayNumber ? (
              <p className="mt-4 text-lg font-black tracking-wide text-card-foreground">
                {displayNumber}
              </p>
            ) : null}
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary">
              Chat on WhatsApp
            </div>
          </a>

          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-primary"
          >
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
              <Mail className="h-7 w-7" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-card-foreground">Email</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Write to us for account queries that are easier in a longer note.
            </p>
            <p className="mt-4 break-all text-lg font-black tracking-wide text-card-foreground">
              {SUPPORT_EMAIL}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Send an email
            </div>
          </a>

          <a
            href={TELEGRAM}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-accent"
          >
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent">
              <Send className="h-7 w-7" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-card-foreground">Telegram</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Prefer Telegram? Join our channel for updates and instant support.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
              Open in Telegram
            </div>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { icon: Clock, title: "Under 2 min response", text: "Average support reply time, day or night." },
            { icon: ShieldCheck, title: "Verified & Secure", text: "Every conversation is private and encrypted." },
            { icon: Sparkles, title: "Real humans", text: "No bots. Speak to trained gaming specialists." },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div
          className="rounded-3xl p-10 text-center md:p-14"
          style={{ background: "var(--gradient-hero)" }}
        >
          <h2 className="text-3xl font-black text-white md:text-4xl">
            Ready to get your Sprinters ID?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            One message. A few details. You're in with the sharpest odds in the game.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={whatsapp}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-primary transition hover:opacity-90"
            >
              <MessageCircle className="h-5 w-5" />{" "}
              {displayNumber ? `Chat ${displayNumber}` : "Start on WhatsApp"}
            </a>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3 font-semibold text-white transition hover:bg-white/20"
            >
              <Mail className="h-5 w-5" /> {SUPPORT_EMAIL}
            </a>
          </div>
        </div>
      </section>

      <PageFaqs />
      <SiteFooter />
    </div>
  );
}
