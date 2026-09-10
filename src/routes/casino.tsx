import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";
import { abs, ogImageMeta } from "@/lib/site-url";

const FAQS = [
  {
    q: "How do I get an online casino ID in India?",
    a: "Message Sprinters on WhatsApp, share your name and mobile number, verify with OTP and deposit via UPI, GPay, PhonePe or Paytm. Your casino ID lands on WhatsApp within minutes of your first deposit.",
  },
  {
    q: "Which live casino games can I play?",
    a: "Live Roulette, Blackjack, Baccarat, Dragon Tiger, Andar Bahar, Teen Patti, Sic Bo and Evolution game-shows like Crazy Time, Monopoly Live and Lightning Roulette — streamed 24/7 with real dealers, many in Hindi.",
  },
  {
    q: "Is Aviator available on Sprinters?",
    a: "Yes. Aviator, JetX, Spaceman, Mines, Plinko and every popular crash game are live in the Sprinters casino lobby with instant bets and real-time cash-out.",
  },
  {
    q: "What is the minimum deposit for casino play?",
    a: "You can start with as little as ₹100 via UPI. Deposits reflect in seconds and there are no hidden fees on your bankroll.",
  },
  {
    q: "How long do casino withdrawals take?",
    a: "All withdrawal requests are processed within 24 hours to your UPI or bank account. VIP players on the Sprinters Club get priority processing.",
  },
];

export const Route = createFileRoute("/casino")({
  head: () => ({
    meta: [
      { title: "Online Casino ID — Live Casino, Slots & Aviator | Sprinters" },
      { name: "description", content: "Live dealer roulette, blackjack, baccarat, Andar Bahar, Teen Patti, Aviator and 1000+ slots. Get your Sprinters Casino ID today." },
      { property: "og:title", content: "Online Casino ID | Sprinters" },
      { property: "og:description", content: "100+ live tables, real dealers, instant payouts — with one Sprinters Casino ID." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: abs("/casino") },
      ...ogImageMeta("Sprinters Online Casino — live dealers, slots and Aviator"),
    ],
    links: [{ rel: "canonical", href: "/casino" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
            { "@type": "ListItem", position: 2, name: "Live Casino", item: abs("/casino") },
          ],
        }),
      },
    ],
  }),
  component: () => (
    <ContentPage
      kicker="Live Casino"
      title="Real Dealers. Real Wins."
      intro="Step into India's biggest live casino lobby — 100+ tables streamed 24/7 with real dealers, Indian-language hosts, instant deposits and 24-hour withdrawals on your Sprinters ID."
      sections={[
        {
          heading: "Live tables",
          bullets: [
            "Live Roulette, Blackjack, Baccarat, Dragon Tiger",
            "Andar Bahar, Teen Patti, Sic Bo",
            "Crazy Time, Monopoly Live, Lightning Roulette",
            "Speed variants and VIP high-roller tables",
          ],
        },
        {
          heading: "Slots & instant games",
          body: "1000+ slots from Pragmatic, Evolution, PG Soft, Betsoft — plus Aviator, Mines, Plinko and other crash favourites.",
        },
        {
          heading: "Why Sprinters Casino",
          bullets: [
            "Instant UPI deposits from ₹100",
            "24-hour withdrawals, no hidden fees",
            "Dedicated casino support desk",
            "One ID for casino + sports",
          ],
        },
        ...FAQS.map((f) => ({ heading: f.q, body: f.a })),
      ]}
    />
  ),
});
