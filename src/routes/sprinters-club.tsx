import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";

export const Route = createFileRoute("/sprinters-club")({
  head: () => ({
    meta: [
      { title: "Sprinters Club — VIP Betting Membership" },
      { name: "description", content: "Join the Sprinters Club for VIP odds, priority payouts, exclusive markets and a dedicated relationship manager." },
      { property: "og:title", content: "Sprinters Club | VIP Membership" },
      { property: "og:description", content: "Priority payouts, VIP odds, exclusive markets — Sprinters Club members-only." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/sprinters-club" }
    ],
    links: [{ rel: "canonical", href: "/sprinters-club" }],
  }),
  component: () => (
    <ContentPage
      kicker="Members Club"
      title="Sprinters Club — VIP Only"
      intro="Serious players deserve a serious tier. The Sprinters Club unlocks priority payouts, exclusive markets and personal concierge support."
      sections={[
        {
          heading: "Member benefits",
          bullets: [
            "Priority same-day withdrawals",
            "Higher table limits across casino and sports",
            "Access to exclusive high-roller markets",
            "Personal relationship manager on WhatsApp",
            "Custom cashback and loss-back offers",
          ],
        },
        {
          heading: "How to qualify",
          body: "Sprinters Club is invitation-only. Message our support team on WhatsApp to request a review — we'll assess your play history and reach back within 24 hours.",
        },
      ]}
    />
  ),
});
