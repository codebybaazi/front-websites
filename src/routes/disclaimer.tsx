import { abs } from "@/lib/site-url";
import { buildPageFaqLd } from "@/data/pageFaqs";
import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Sprinters Online Gaming" },
      { name: "description", content: "Legal disclaimer covering Sprinters services, information accuracy and third-party platforms." },
      { property: "og:title", content: "Disclaimer | Sprinters" },
      { property: "og:description", content: "Legal disclaimer for Sprinters services." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: abs("/disclaimer") }
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
    scripts: [
        ...(buildPageFaqLd("/disclaimer") ? [{ type: "application/ld+json", children: JSON.stringify(buildPageFaqLd("/disclaimer")) }] : []),
    ],
  }),
  component: () => (
    <ContentPage
      kicker="Legal"
      title="Disclaimer"
      intro="Please read this disclaimer carefully before using our services."
      sections={[
        {
          heading: "Informational purpose",
          body: "All content on this website is for informational purposes only. Sprinters does not encourage users to gamble or bet in jurisdictions where such activity is prohibited.",
        },
        {
          heading: "Third-party platforms",
          body: "Sprinters facilitates access to third-party betting and gaming platforms. We are not the operator of those platforms and do not control odds, markets, results or payouts on them.",
        },
        {
          heading: "No guarantees",
          body: "All betting and gaming carries risk of loss. Past results do not predict future outcomes. Never wager more than you can afford to lose.",
        },
        {
          heading: "Local law",
          body: "It is your responsibility to check whether online gaming is legal in your jurisdiction. Sprinters is not liable for user activity that violates local laws.",
        },
      ]}
    />
  ),
});
