import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Send, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { SiteHeader, TELEGRAM } from "@/components/SiteHeader";
import { useWhatsAppHref } from "@/hooks/use-whatsapp";
import { SiteFooter } from "@/components/SiteFooter";
import { PageFaqs } from "@/components/PageFaqs";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sprinters Online Gaming — 24/7 Support" },
      {
        name: "description",
        content:
          "Get in touch with Sprinters Book on WhatsApp or Telegram. 24/7 support for IDs, deposits, withdrawals and everything in between.",
      },
      { property: "og:title", content: "Contact Sprinters Online Gaming" },
      {
        property: "og:description",
        content: "Reach the Sprinters team on WhatsApp or Telegram — support available 24/7.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/contact" }
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const whatsapp = useWhatsAppHref();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
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
            Reach out on WhatsApp or Telegram for instant assistance with IDs, payments, or
            anything else. Real humans, no bots, no waiting.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-6 md:pt-24">
        <div className="grid gap-6 md:grid-cols-2">
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
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary">
              Message on WhatsApp →
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
              Open in Telegram →
            </div>
          </a>
        </div>
      </section>

      {/* Promises */}
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

      {/* Bottom CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div
          className="rounded-3xl p-10 text-center md:p-14"
          style={{ background: "var(--gradient-hero)" }}
        >
          <h2 className="text-3xl font-black text-white md:text-4xl">
            Ready to get your Sprinters ID?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            One message. A few details. You're in — with the sharpest odds in the game.
          </p>
          <a
            href={whatsapp}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-primary transition hover:opacity-90"
          >
            <MessageCircle className="h-5 w-5" /> Start on WhatsApp
          </a>
        </div>
      </section>

      <PageFaqs />
      <SiteFooter />
    </div>
  );
}
