import { abs, ogImageMeta } from "@/lib/site-url";
import { buildPageFaqLd } from "@/data/pageFaqs";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MessageCircle, ShieldCheck, Wallet } from "lucide-react";
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

const PATH = "/sprinters-book-deposit-number";
const CHAT_TEXT =
  "Hi, I need the official Sprinters Book deposit number for my ID.";

const howToLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to get the Sprinters Book deposit number",
  description:
    "Get the current Sprinters Book deposit number on WhatsApp, pay by UPI, and credit your betting ID.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Open the official WhatsApp chat",
      text: "Use the Chat on WhatsApp button on the Sprinters Book deposit number page. The chat opens the live desk for this website.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Ask for the deposit number Sprinters Book",
      text: "Send your username or registered mobile and ask for the Sprinters Book deposit number.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Pay only the details sent in chat",
      text: "Complete the UPI or bank transfer using the payment details the agent sends in that same thread.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Share the payment proof",
      text: "Send the UTR or screenshot in the same WhatsApp chat so the Sprinters Book wallet can be credited.",
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
      name: "Sprinters Book deposit number",
      item: abs(PATH),
    },
  ],
};

export const Route = createFileRoute("/sprinters-book-deposit-number")({
  loader: async () => {
    const map = await fetchHostNumbers();
    const href = hrefFromNumbers(map, siteFallbackHost());
    return { whatsapp: withWhatsAppText(href, CHAT_TEXT) };
  },
  head: () => ({
    meta: [
      {
        title:
          "Sprinters Book Deposit Number | Official WhatsApp Chat",
      },
      {
        name: "description",
        content:
          "Get the official Sprinters Book deposit number on WhatsApp. Chat for today's UPI details, credit your Sprinters Book ID from ₹100, and skip fake call numbers.",
      },
      {
        name: "keywords",
        content:
          "Sprinters book, Sprinters book deposit number, deposit number sprinters book, Sprinters Book UPI, Sprinters Book WhatsApp deposit",
      },
      {
        property: "og:title",
        content: "Sprinters Book Deposit Number",
      },
      {
        property: "og:description",
        content:
          "Official Sprinters Book deposit number via WhatsApp chat. Live UPI details, no published phone number, no call button.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: abs(PATH) },
      ...ogImageMeta("Sprinters Book deposit number, WhatsApp chat for official UPI details"),
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
  component: DepositNumberPage,
});

function DepositNumberPage() {
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
            Sprinters Book <span className="text-primary">deposit number</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            The deposit number Sprinters Book uses is the live WhatsApp desk
            for this site. Tap the number to open chat. The agent then sends
            today's UPI details for your ID.
          </p>
          <WhatsAppNumberCard
            href={whatsapp}
            displayNumber={displayNumber}
            kicker="WhatsApp deposit number"
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-10">
          <article className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-card-foreground">
              What Sprinters Book is
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Sprinters Book is the verified betting ID Indian players use for
              cricket, football, tennis, live casino and Indian card games. You
              get one login, a wallet that takes UPI from ₹100, and a support
              thread that handles deposits and withdrawals. If you landed here
              from a search for Sprinters Book, this page is only for the
              deposit number workflow.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              New IDs still start the same way: name, mobile, OTP, first
              deposit. Existing users skip the ID step and ask for a top-up.
              Either way, payment details come from the same WhatsApp desk that
              issued the account.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-card-foreground">
              How to get the deposit number Sprinters Book
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Payment IDs rotate. Publishing a static number on Google would
              leave stale UPI handles in search results. The chat button on
              this page loads the current WhatsApp number for this host from
              our live numbers file, then opens a message asking for the
              Sprinters Book deposit number.
            </p>
            <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                "Tap Chat on WhatsApp. Do not dial a number from an ad or a forwarded list.",
                "Send your Sprinters Book username, or your name and mobile if you are new.",
                "Ask for the Sprinters Book deposit number or today's UPI details.",
                "Pay only what arrives in that chat. Then send the UTR or screenshot in the same thread.",
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
              Company menus now point here instead of showing a number in the
              header. There is no call button and no tel link. Voice calls are
              easy to spoof; WhatsApp keeps the payment trail in one encrypted
              thread with the desk that actually credits Sprinters Book
              wallets.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "The WhatsApp chat uses the live number mapped to this website.",
                "Agents send deposit details only after they see your ID or registered mobile.",
                "Old QR codes and Telegram forwards are treated as invalid.",
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
              How a Sprinters Book deposit works
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              First deposits start at ₹100. PhonePe, Google Pay, Paytm and bank
              UPI all work. Sprinters does not add a deposit fee, so the amount
              you send is the amount that should hit the ID. Credit usually
              lands within a few minutes after the screenshot is checked.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Once the wallet updates you can use cricket markets, sports IDs
              and casino tables on the same balance. Withdrawals reverse the
              flow: request in WhatsApp on the{" "}
              <Link
                to="/sprinters-book-withdrawl-number"
                className="text-primary hover:underline"
              >
                Sprinters Book withdrawl number
              </Link>{" "}
              page and receive UPI within 24 hours. For
              platform choice see{" "}
              <Link to="/sports-id" className="text-primary hover:underline">
                Sports ID
              </Link>{" "}
              and{" "}
              <Link to="/cricket-betting" className="text-primary hover:underline">
                cricket betting
              </Link>
              . General support is on the{" "}
              <Link to="/contact" className="text-primary hover:underline">
                contact
              </Link>{" "}
              page.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-card-foreground">
              Fake Sprinters Book deposit numbers
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Search results and social ads often show a deposit number
              Sprinters Book never issued. If a handle, QR or bank account did
              not arrive from the Chat on WhatsApp button on this page, do not
              pay it. Bookmark this URL and start the chat again if you are
              unsure.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Sprinters will never ask you to call a personal mobile, share
              your ID password, or pay a third-party name that does not match
              the chat. If a deposit sits pending, stay in the same WhatsApp
              thread with the UTR. Opening a new chat with a random number
              delays the credit.
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
              text: "Deposit number Sprinters Book requests stay in chat. No call, no published digits.",
            },
            {
              icon: Wallet,
              title: "From ₹100 on UPI",
              text: "PhonePe, GPay, Paytm and bank UPI. No deposit fee on Sprinters Book top-ups.",
            },
            {
              icon: ShieldCheck,
              title: "Live desk mapping",
              text: "The chat opens the current number for this site, so you are not paying last month's UPI.",
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
            Need the Sprinters Book deposit number?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            {displayNumber
              ? `Tap ${displayNumber} to open WhatsApp, ask for today's UPI details, pay, and send the screenshot in the same chat.`
              : "Open WhatsApp, ask for today's details, pay, and send the screenshot in the same chat."}
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
