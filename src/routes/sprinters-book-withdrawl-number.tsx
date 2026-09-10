import { abs, ogImageMeta } from "@/lib/site-url";
import { buildPageFaqLd } from "@/data/pageFaqs";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownToLine, Check, MessageCircle, ShieldCheck } from "lucide-react";
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

const PATH = "/sprinters-book-withdrawl-number";
const CHAT_TEXT =
  "Hi, I need the official Sprinters Book withdrawl number to cash out my ID.";

const howToLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to get the Sprinters Book withdrawl number",
  description:
    "Request a Sprinters Book withdrawal on WhatsApp, share your UPI, and receive payout within 24 hours.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Open the official WhatsApp chat",
      text: "Use the Chat on WhatsApp button on the Sprinters Book withdrawl number page. The chat opens the live desk for this website.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Ask for the withdrawl number Sprinters Book",
      text: "Send your username and the amount you want to cash out. Ask for the Sprinters Book withdrawl number or payout confirmation.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Share your UPI or bank details",
      text: "Send the UPI ID or bank account that should receive the payout. Use the same name as your Sprinters Book ID where possible.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Wait for the UPI credit",
      text: "Support processes the withdrawal in the same WhatsApp thread. Payouts typically land within 24 hours.",
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
      name: "Sprinters Book withdrawl number",
      item: abs(PATH),
    },
  ],
};

export const Route = createFileRoute("/sprinters-book-withdrawl-number")({
  loader: async () => {
    const map = await fetchHostNumbers();
    const href = hrefFromNumbers(map, siteFallbackHost());
    return { whatsapp: withWhatsAppText(href, CHAT_TEXT) };
  },
  head: () => ({
    meta: [
      {
        title: "Sprinters Book Withdrawl Number | Official WhatsApp Chat",
      },
      {
        name: "description",
        content:
          "Get the official Sprinters Book withdrawl number on WhatsApp. Request a payout, share your UPI, and cash out your Sprinters Book ID within 24 hours. No call button.",
      },
      {
        name: "keywords",
        content:
          "Sprinters book, Sprinters book withdrawl number, withdrawl number sprinters book, Sprinters Book withdrawal number, Sprinters Book UPI withdrawal, Sprinters Book WhatsApp payout",
      },
      {
        property: "og:title",
        content: "Sprinters Book Withdrawl Number",
      },
      {
        property: "og:description",
        content:
          "Official Sprinters Book withdrawl number via WhatsApp chat. Same-day UPI payouts, no published phone number, no call button.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: abs(PATH) },
      ...ogImageMeta("Sprinters Book withdrawl number, WhatsApp chat for official UPI payouts"),
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
  component: WithdrawlNumberPage,
});

function WithdrawlNumberPage() {
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
            Sprinters Book <span className="text-primary">withdrawl number</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            The withdrawl number Sprinters Book uses is the live WhatsApp desk
            for this site. Tap the number to open chat and start your cash-out
            on the same ID.
          </p>
          <WhatsAppNumberCard
            href={whatsapp}
            displayNumber={displayNumber}
            kicker="WhatsApp withdrawl number"
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-10">
          <article className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-card-foreground">
              What Sprinters Book payouts are
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Sprinters Book is the verified betting ID Indian players use for
              cricket, football, tennis, live casino and Indian card games.
              Winnings sit in that wallet until you ask support to send them
              out. If you searched for Sprinters Book withdrawl number, this
              page is the official start of that cash-out chat.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              You do not need a second account to withdraw. The same WhatsApp
              desk that opened the ID handles the payout. Top-ups use a
              different flow on the{" "}
              <Link
                to="/sprinters-book-deposit-number"
                className="text-primary hover:underline"
              >
                Sprinters Book deposit number
              </Link>{" "}
              page.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-card-foreground">
              How to get the withdrawl number Sprinters Book
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Payout contacts change. A number copied from Google or a
              forwarded list is often stale. The chat button here loads the
              current WhatsApp number for this host from our live numbers
              file, then opens a message asking for the Sprinters Book
              withdrawl number.
            </p>
            <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                "Tap Chat on WhatsApp. Do not call a number from an ad.",
                "Send your Sprinters Book username and the amount you want out.",
                "Share the UPI ID or bank account that should receive the money.",
                "Stay in that thread until support confirms the payout. Typical turnaround is within 24 hours.",
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
              Why this page has no phone number
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              The company menu links here instead of showing digits in the
              header. There is no call button and no tel link. A voice call
              leaves no payout trail. WhatsApp keeps the request, UPI details
              and confirmation in one thread with the desk that actually
              sends Sprinters Book withdrawals.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "The WhatsApp chat uses the live number mapped to this website.",
                "Agents process a withdrawl only after they match your ID or registered mobile.",
                "Anyone asking you to cash out to a stranger's UPI is not Sprinters.",
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
              How a Sprinters Book withdrawal works
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Payouts go to PhonePe, Google Pay, Paytm or bank UPI. Sprinters
              does not take a withdrawal fee, so the amount you request should
              be the amount that lands. Most requests complete within 24
              hours. Club players get priority in the same queue.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              KYC can be asked for larger cash-outs. Have your registered
              mobile handy. For markets after you reload, see{" "}
              <Link to="/sports-id" className="text-primary hover:underline">
                Sports ID
              </Link>{" "}
              and{" "}
              <Link to="/cricket-betting" className="text-primary hover:underline">
                cricket betting
              </Link>
              . Other queries sit on{" "}
              <Link to="/contact" className="text-primary hover:underline">
                contact
              </Link>
              .
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-card-foreground">
              Fake Sprinters Book withdrawl numbers
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Search ads often list a withdrawl number Sprinters Book never
              used. If someone DMs you a payout contact that did not come
              from the Chat on WhatsApp button on this page, ignore it.
              Bookmark this URL and start the chat again if the thread looks
              wrong.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Sprinters will not ask for your ID password, a remote-access
              app, or a call to a personal mobile before sending money. If a
              payout is pending, stay in the original WhatsApp thread with
              your UPI ID. A new chat with a random number delays the
              transfer.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: MessageCircle,
              title: "WhatsApp only",
              text: "Withdrawl number Sprinters Book requests stay in chat. No call, no published digits.",
            },
            {
              icon: ArrowDownToLine,
              title: "Payouts within 24 hours",
              text: "PhonePe, GPay, Paytm and bank UPI. No withdrawal fee on Sprinters Book cash-outs.",
            },
            {
              icon: ShieldCheck,
              title: "Live desk mapping",
              text: "The chat opens the current number for this site, so you are not messaging last month's desk.",
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
            Need the Sprinters Book withdrawl number?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            {displayNumber
              ? `Tap ${displayNumber} to open WhatsApp, send your ID and amount, share your UPI, and wait for the payout in the same chat.`
              : "Open WhatsApp, send your ID and amount, share your UPI, and wait for the payout in the same chat."}
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
