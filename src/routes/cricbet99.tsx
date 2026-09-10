import { abs } from "@/lib/site-url";
import { buildPageFaqLd } from "@/data/pageFaqs";
import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";

export const Route = createFileRoute("/cricbet99")({
  head: () => ({
    meta: [
      { title: "Cricbet99 ID via Sprinters — Verified in Minutes" },
      { name: "description", content: "Get a verified Cricbet99 ID through Sprinters. Instant deposits, 24-hour withdrawals, dedicated Indian support." },
      { property: "og:title", content: "Cricbet99 ID | Sprinters" },
      { property: "og:description", content: "Verified Cricbet99 ID — delivered on WhatsApp in minutes." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: abs("/cricbet99") }
    ],
    links: [{ rel: "canonical", href: "/cricbet99" }],
    scripts: [
        ...(buildPageFaqLd("/cricbet99") ? [{ type: "application/ld+json", children: JSON.stringify(buildPageFaqLd("/cricbet99")) }] : []),
    ],
  }),
  component: () => (
    <ContentPage
      kicker="Cricbet99"
      title="Your Cricbet99 ID, via Sprinters"
      intro="Cricbet99 is one of India's most trusted cricket exchanges. Sprinters delivers verified Cricbet99 IDs on WhatsApp — with local support and instant payments."
      sections={[
        {
          heading: "What you get",
          bullets: [
            "Full Cricbet99 exchange access",
            "Best-of-market cricket odds",
            "IPL, ICC, international and domestic coverage",
            "Casino, card games and slots included",
          ],
        },
        {
          heading: "Why Sprinters over direct signup",
          bullets: [
            "Local UPI, GPay, PhonePe, Paytm deposits",
            "24-hour bank withdrawals",
            "Hindi-speaking support manager",
            "One point of contact for every platform you use",
          ],
        },
      ]}
    />
  ),
});
