import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Sprinters Online Gaming" },
      { name: "description", content: "Verified betting IDs, instant deposits, 24-hour withdrawals, dedicated managers and 24/7 support. Explore what Sprinters offers." },
      { property: "og:title", content: "Services | Sprinters" },
      { property: "og:description", content: "Everything Sprinters delivers — from ID creation to 24-hour payouts." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" }
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: () => (
    <ContentPage
      kicker="Services"
      title="What We Deliver"
      intro="Sprinters isn't just an ID service — it's a full-stack betting concierge. Here's what's included with every account."
      sections={[
        {
          heading: "Verified betting IDs",
          bullets: [
            "Access to India's leading exchanges",
            "One ID for sports, casino and card games",
            "KYC-verified, delivered in minutes",
          ],
        },
        {
          heading: "Money movement",
          bullets: [
            "Instant UPI, GPay, PhonePe and Paytm deposits",
            "24-hour bank transfer withdrawals",
            "No hidden fees, no minimum lock-ins",
          ],
        },
        {
          heading: "Human support",
          bullets: [
            "Dedicated account manager",
            "24/7 WhatsApp and Telegram support",
            "Hindi, English, Telugu, Tamil, Kannada",
          ],
        },
      ]}
    />
  ),
});
