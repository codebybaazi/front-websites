import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Sprinters Online Gaming" },
      { name: "description", content: "The terms governing use of the Sprinters website, ID services and customer support." },
      { property: "og:title", content: "Terms & Conditions | Sprinters" },
      { property: "og:description", content: "Terms governing your use of Sprinters services." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms-and-conditions" }
    ],
    links: [{ rel: "canonical", href: "/terms-and-conditions" }],
  }),
  component: () => (
    <ContentPage
      kicker="Legal"
      title="Terms & Conditions"
      intro="By using Sprinters services, you agree to these terms. Please read carefully before requesting an ID."
      sections={[
        {
          heading: "Eligibility",
          bullets: [
            "You must be 18 or older",
            "You must reside in a jurisdiction where online gaming is permitted",
            "You are responsible for verifying local laws before using our services",
          ],
        },
        {
          heading: "Account use",
          bullets: [
            "One account per person",
            "You are responsible for keeping your credentials secure",
            "Any activity on your account is your responsibility",
          ],
        },
        {
          heading: "Payments",
          bullets: [
            "Deposits and withdrawals must use accounts in your name",
            "Withdrawals are processed within 24 hours of KYC clearance",
            "Sprinters reserves the right to hold funds pending fraud checks",
          ],
        },
        {
          heading: "Fair play",
          body: "Bonus abuse, collusion, use of bots or any breach of platform terms may result in account suspension and forfeiture of balances.",
        },
        {
          heading: "Changes",
          body: "Sprinters may update these terms at any time. Continued use of our services constitutes acceptance of the updated terms.",
        },
      ]}
    />
  ),
});
