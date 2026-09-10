import { abs, ogImageMeta } from "@/lib/site-url";
import { buildPageFaqLd } from "@/data/pageFaqs";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Headphones, MessageCircle, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
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
  withWhatsAppText,
} from "@/lib/whatsapp";

const PATH = "/sprinters-book-customer-care-number";
const CHAT_TEXT =
  "Hi, I need Sprinters Book customer care. I have a query about my ID.";

const howToLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to reach the Sprinters Book customer care number",
  description:
    "Open the official Sprinters Book customer care WhatsApp chat, send your ID query, and get a reply from the live desk.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Open the official WhatsApp chat",
      text: "Use the Chat on WhatsApp button or the customer care number on this page. Both open the live desk for this website.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Send your Sprinters Book query",
      text: "Share your username or registered mobile and describe the issue: ID, deposit, withdrawal, login or odds.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Stay in the same chat",
      text: "Replies come in that WhatsApp thread. Do not call a number from an ad or start a new chat with a forwarded contact.",
    },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: abs("/"),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Sprinters Book customer care number",
      item: abs(PATH),
    },
  ],
};

export const Route = createFileRoute("/sprinters-book-customer-care-number")({
  loader: async () => {
    const map = await fetchHostNumbers();
    const href = hrefFromNumbers(map, siteFallbackHost());
    return { whatsapp: withWhatsAppText(href, CHAT_TEXT) };
  },
  head: () => ({
    meta: [
      {
        title: "Sprinters Book Customer Care Number | WhatsApp Support",
      },
      {
        name: "description",
        content:
          "Sprinters Book customer care number on WhatsApp. Chat the official desk for ID, deposit, withdrawal and login help. Customer care number Sprinters Book, 24/7.",
      },
      {
        name: "keywords",
        content:
          "Sprinters book, Sprinters book customer care number, customer care number sprinters book, Sprinters Book WhatsApp support, Sprinters Book helpline",
      },
      {
        property: "og:title",
        content: "Sprinters Book Customer Care Number",
      },
      {
        property: "og:description",
        content:
          "Official Sprinters Book customer care number via WhatsApp chat. Live desk for this site, no call button.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: abs(PATH) },
      ...ogImageMeta("Sprinters Book customer care number, WhatsApp chat for official support"),
    ],
    links: [{ rel: "canonical", href: PATH }],
    scripts: [
      ...(buildPageFaqLd(PATH)
        ? [{ type: "application/ld+json", children: JSON.stringify(buildPageFaqLd(PATH)) }]
        : []),
      { type: "application/ld+json", children: JSON.stringify(howToLd) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbLd) },
    ],
  }),
  component: CustomerCareNumberPage,
});

function CustomerCareNumberPage() {
  const { whatsapp: loadedHref } = Route.useLoaderData();
  const liveHref = useWhatsAppHref(CHAT_TEXT);
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
            Sprinters Book
          </span>
          <h1 className="mt-6 text-4xl font-black uppercase leading-tight text-foreground md:text-6xl">
            Sprinters Book{" "}
            <span className="text-primary">customer care number</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            The customer care number Sprinters Book uses is the live WhatsApp
            desk for this site. Tap the number to open chat. There is no call
            button.
          </p>
          <WhatsAppNumberCard
            href={whatsapp}
            displayNumber={displayNumber}
            kicker="WhatsApp customer care"
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-10">
          <article className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-card-foreground">
              What Sprinters Book customer care handles
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Sprinters Book is the verified betting ID Indian players use for
              cricket, football, tennis, live casino and Indian card games.
              Customer care on this page is the WhatsApp desk that opened the
              ID. If you searched for Sprinters Book customer care number, this
              is the official chat, loaded from the live numbers file for this
              domain.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Typical threads: new ID, OTP, login, password reset, a stuck
              deposit, or a payout that has not landed. Money movement has its
              own pages for{" "}
              <Link
                to="/sprinters-book-deposit-number"
                className="text-primary hover:underline"
              >
                deposit number
              </Link>{" "}
              and{" "}
              <Link
                to="/sprinters-book-withdrawl-number"
                className="text-primary hover:underline"
              >
                withdrawal number
              </Link>
              . Use this page when you need a person on the desk.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-card-foreground">
              How to use the customer care number Sprinters Book
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Tap the number above. WhatsApp opens with a starter message to
              the current desk. Support runs around the clock in Hindi, English
              and Hinglish. Average replies are under a couple of minutes
              during IPL nights as well as weekday afternoons.
            </p>
            <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                "Tap the customer care number or Chat on WhatsApp.",
                "Send your Sprinters Book username or registered mobile.",
                "Describe the issue in one message. Add a screenshot if a payment is stuck.",
                "Wait in that thread. Do not dial the digits as a voice call.",
              ].map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-card-foreground">
              Why the number opens WhatsApp, not a call
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              The company menu lists this page, the deposit page and the
              withdrawal page. The digits you see here are a WhatsApp link.
              Voice calls are easy to spoof and leave no chat history. The desk
              that credits wallets and resets logins works in WhatsApp, so that
              is where customer care lives.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "The number is mapped to this website in the live numbers file.",
                "Agents reply after they match your ID or registered mobile.",
                "A forwarded 'Sprinters helpline' from Telegram is not this desk.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-card-foreground">
              Fake Sprinters Book customer care numbers
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Search ads and WhatsApp forwards often list a customer care
              number Sprinters Book never used. If the chat did not open from
              this page, do not share your password, OTP or a payment
              screenshot. Bookmark this URL and tap the number here again.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Sprinters will not ask you to install a remote-access app or
              transfer money to a personal name that does not match the chat.
              For sports IDs see{" "}
              <Link to="/sports-id" className="text-primary hover:underline">
                Sports ID
              </Link>
              . Other contact options are on{" "}
              <Link to="/contact" className="text-primary hover:underline">
                contact
              </Link>
              .
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: MessageCircle,
              title: "WhatsApp desk",
              text: "The Sprinters Book customer care number opens chat. No voice call from this page.",
            },
            {
              icon: Headphones,
              title: "24/7 replies",
              text: "Hindi, English and Hinglish. Same thread for ID, login, deposit and payout questions.",
            },
            {
              icon: ShieldCheck,
              title: "Live mapping",
              text: "The digits come from the current numbers file for this site, so you are not messaging last month's desk.",
            },
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

      <PageFaqs />

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div
          className="rounded-3xl p-10 text-center md:p-14"
          style={{ background: "var(--gradient-hero)" }}
        >
          <h2 className="text-3xl font-black text-white md:text-4xl">
            Need the Sprinters Book customer care number?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            {displayNumber
              ? `Tap ${displayNumber} to open WhatsApp and send your query in chat.`
              : "Open WhatsApp from this page and send your query in chat."}
          </p>
          <a
            href={whatsapp}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-primary transition hover:opacity-90"
          >
            <MessageCircle className="h-5 w-5" />
            {displayNumber ? `Chat ${displayNumber}` : "Chat on WhatsApp"}
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
