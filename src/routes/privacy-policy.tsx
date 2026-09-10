import { abs } from "@/lib/site-url";
import { buildPageFaqLd } from "@/data/pageFaqs";
import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Sprinters Online Gaming" },
      { name: "description", content: "How Sprinters collects, uses and protects your personal information — full privacy policy." },
      { property: "og:title", content: "Privacy Policy | Sprinters" },
      { property: "og:description", content: "How Sprinters handles your data — full privacy policy." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: abs("/privacy-policy") }
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
    scripts: [
        ...(buildPageFaqLd("/privacy-policy") ? [{ type: "application/ld+json", children: JSON.stringify(buildPageFaqLd("/privacy-policy")) }] : []),
    ],
  }),
  component: () => (
    <ContentPage
      kicker="Legal"
      title="Privacy Policy"
      intro="Your privacy matters. This policy explains what information we collect, how we use it, and the controls you have."
      sections={[
        {
          heading: "Information we collect",
          bullets: [
            "Contact details you share on WhatsApp (name, phone)",
            "KYC information required for account verification",
            "Payment reference details for deposits and withdrawals",
          ],
        },
        {
          heading: "How we use it",
          bullets: [
            "To verify and create your betting ID",
            "To process deposits and withdrawals",
            "To provide customer support",
            "To meet legal and compliance obligations",
          ],
        },
        {
          heading: "Data protection",
          body: "We store data on encrypted servers, never sell your information to third parties, and only share with payment or platform partners strictly on a need-to-know basis.",
        },
        {
          heading: "Your rights",
          body: "You can request access, correction or deletion of your data at any time by messaging our support team.",
        },
      ]}
      cta="Questions about how we handle your data? Message us — we'll answer within the day."
    />
  ),
});
