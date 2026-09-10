import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ShieldCheck, Wallet, Clock, AlertTriangle } from "lucide-react";
import { fetchWhatsAppNumber, formatWhatsAppDisplay } from "@/lib/whatsapp";
import { ogImageMeta } from "@/lib/seo";
import { OfficialNumberCard } from "@/components/OfficialNumberCard";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const depositFaqs: FAQItem[] = [
  { q: "What is the Mahadev Book deposit number?", a: "It is the live WhatsApp and phone line used to confirm UPI, IMPS and e-wallet deposits. The current digits are printed on this page, with a WhatsApp chat link and a call link." },
  { q: "How do I deposit using the Mahadev Book deposit number?", a: "Open the WhatsApp link next to the printed number, say your amount and method (UPI, IMPS or e-wallet), pay the detail the desk sends, and share the screenshot. Most UPI credits land within minutes." },
  { q: "Does the deposit number change?", a: "It can rotate. Trust the number shown on this page today, not an old screenshot or a forwarded chat." },
  { q: "What happens if I send money to the wrong number?", a: "Only deposits started through the official number on this page can be matched to your ID. Money sent to any other number cannot be traced or refunded by the desk." },
  { q: "Which payment methods work with this deposit number?", a: "UPI, PhonePe, Google Pay, Paytm, IMPS and NEFT all go through the same line. UPI deposits start at ₹100." },
  { q: "How long does a deposit take to reflect in my wallet?", a: "Most UPI deposits reflect within a few minutes after the screenshot is confirmed. IMPS and NEFT can take longer depending on the bank." },
  { q: "Can I use the deposit number for withdrawals too?", a: "Yes. The same line handles withdrawal requests. UPI payouts typically settle in 5 to 30 minutes." },
  { q: "Is it safe to save the number in my contacts?", a: "You can save it, but if a saved contact goes quiet, come back here and use the number currently listed." },
];

export const Route = createFileRoute("/mahadev-book-deposit-number")({
  loader: async () => ({ waNumber: await fetchWhatsAppNumber() }),
  head: ({ loaderData }) => {
    const title = "Mahadev Book Deposit Number — Official WhatsApp Deposit Line";
    const display = loaderData?.waNumber ? formatWhatsAppDisplay(loaderData.waNumber) : "";
    return {
    meta: [
      { title },
      { name: "description", content: `Official Mahadev Book deposit number${display ? ` ${display}` : ""} on WhatsApp for UPI, IMPS and e-wallet. Chat or call the live line listed on this page.` },
      { property: "og:title", content: title },
        { name: "twitter:title", content: title },
      { property: "og:description", content: "Chat or call the official Mahadev Book deposit line. Deposit via UPI, IMPS or e-wallet and get your cricket ID funded in minutes." },
      { property: "og:url", content: "https://mahadevbookss.com/mahadev-book-deposit-number" },
      ...ogImageMeta("Mahadev Book Deposit Number — official WhatsApp deposit line"),
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/mahadev-book-deposit-number" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(depositFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Support", item: "https://mahadevbookss.com/support" },
            { "@type": "ListItem", position: 3, name: "Mahadev Book Deposit Number", item: "https://mahadevbookss.com/mahadev-book-deposit-number" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/mahadev-book-deposit-number",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
      ...(loaderData?.waNumber
        ? [{
            type: "application/ld+json" as const,
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPoint",
              contactType: "sales",
              name: "Mahadev Book deposit desk",
              telephone: `+${loaderData.waNumber}`,
              url: `https://wa.me/${loaderData.waNumber}`,
              areaServed: "IN",
              availableLanguage: ["en", "hi"],
            }),
          }]
        : []),
    ],
  };
  },
  component: DepositNumberPage,
});

const depositSteps = [
  { n: "01", t: "Open WhatsApp", d: "Tap the WhatsApp button on this page to start a chat with the official Mahadev Book deposit line." },
  { n: "02", t: "Tell us your amount", d: "Say how much you want to deposit and which method you're using — UPI, PhonePe, Google Pay, Paytm or bank transfer." },
  { n: "03", t: "Send the payment", d: "Our team shares the correct payment detail for that deposit. Pay from your own account and send a screenshot on WhatsApp." },
  { n: "04", t: "Wallet gets credited", d: "Once confirmed, your Mahadev Book wallet is credited, usually within minutes for UPI." },
];

const paymentMethods: [string, string, string][] = [
  ["UPI (any app)", "₹100", "Instant, 24/7"],
  ["PhonePe / Google Pay", "₹100", "Instant"],
  ["Paytm Wallet", "₹100", "Instant"],
  ["IMPS / NEFT bank transfer", "₹500", "5–30 minutes"],
  ["USDT / Crypto", "On request", "Confirmed on WhatsApp"],
];

function DepositNumberPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Deposit Support
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Mahadev Book <span className="text-gradient-gold">Deposit Number</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          The Mahadev Book deposit number is the live WhatsApp and phone line used to confirm
          UPI, IMPS and e-wallet deposits. The digits below come from our official number list.
          Chat on WhatsApp or tap Call if you prefer voice.
        </p>
        <OfficialNumberCard
          heading="Official deposit number"
          blurb="Use this line for deposits only after you start the chat from this page. If a saved contact stops answering, come back here."
        />
      </section>

      <AIOverview
        title="AI Overview — Mahadev Book Deposit Number"
        summary="The Mahadev Book deposit number is printed on this page as a live WhatsApp and phone line. Use it to fund a cricket ID via UPI, PhonePe, Google Pay, Paytm or IMPS/NEFT, starting at ₹100 on UPI. If the listed number ever differs from an old screenshot, trust this page."
        points={[
          "Live number plus WhatsApp and call links",
          "Accepts UPI, PhonePe, Google Pay, Paytm, IMPS/NEFT",
          "₹100 minimum deposit over UPI",
          "Deposits usually reflect within minutes",
          "Same line also handles withdrawal requests",
          "Ignore numbers from forwarded chats",
        ]}
        keywords={["mahadev book deposit number", "deposit number mahadev book", "mahadev book", "mahadev book whatsapp number"]}
      />

      {/* How to deposit */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">How to deposit using this number</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">Four steps, usually done inside one WhatsApp chat.</p>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {depositSteps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-2xl font-bold text-gradient-gold">{s.n}</span>
              <h3 className="mt-3 font-semibold text-foreground">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Payment methods table */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-border/60">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Deposit methods on this number</h2>
        <p className="mt-2 text-muted-foreground">Every method below is confirmed through the same Mahadev Book deposit number.</p>
        <div className="mt-6 overflow-hidden rounded-xl border border-border/70">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-semibold">Method</th>
                <th className="px-4 py-3 font-semibold">Minimum deposit</th>
                <th className="px-4 py-3 font-semibold">Speed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {paymentMethods.map(([m, min, speed]) => (
                <tr key={m} className="bg-background">
                  <td className="px-4 py-3 font-medium text-foreground">{m}</td>
                  <td className="px-4 py-3 text-muted-foreground">{min}</td>
                  <td className="px-4 py-3 text-muted-foreground">{speed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Safety */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-border/60">
        <div className="rounded-2xl border border-warning/40 bg-warning/5 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <h2 className="text-xl font-bold text-foreground">Only deposit through the WhatsApp button on this page</h2>
          </div>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Mahadev Book rotates its deposit line from time to time to keep accounts and payment
            rails secure. That's why we never print it as a number anywhere on this site.
            Screenshots of old numbers circulate on social media and forwarded messages, and some
            of them are no longer active or, worse, belong to someone else entirely. Always start
            your deposit from the WhatsApp button above rather than a number saved from an old
            chat. We can only trace and credit deposits confirmed through that official chat.
          </p>
          <div className="mt-5 flex flex-wrap gap-6 text-sm text-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> KYC-verified accounts only</div>
            <div className="flex items-center gap-2"><Wallet className="h-4 w-4 text-primary" /> No shared or resold IDs</div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Confirmations 24/7</div>
          </div>
        </div>
      </section>

      <FAQSection title="Mahadev Book Deposit Number — FAQs" items={depositFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Ready to fund your Mahadev ID?</h2>
        <p className="mt-3 text-muted-foreground">Chat with the deposit line above and your wallet is usually credited within minutes.</p>
        <div className="mt-6 flex justify-center flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Deposit Now</span>
          </a>
          <Link to="/contact" className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
            Other ways to reach us
          </Link>
        </div>
      </section>

      <QuickLinks
        pageCategory="Support"
        excludePath="/mahadev-book-deposit-number"
        title="Keep exploring"
        subtitle="Withdrawals, KYC, bonuses and everything else on the support desk."
      />
    </>
  );
}
