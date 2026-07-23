import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";

export const Route = createFileRoute("/responsible-gambling")({
  head: () => ({
    meta: [
      { title: "Responsible Gambling — Play Safe with Sprinters" },
      { name: "description", content: "Sprinters is committed to safer play. Learn about limits, self-exclusion, warning signs and where to get help." },
      { property: "og:title", content: "Responsible Gambling | Sprinters" },
      { property: "og:description", content: "Limits, self-exclusion and support — play safe with Sprinters." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/responsible-gambling" }
    ],
    links: [{ rel: "canonical", href: "/responsible-gambling" }],
  }),
  component: () => (
    <ContentPage
      kicker="Play Safe"
      title="Responsible Gambling"
      intro="Betting should be entertainment — not a way to make money or escape stress. Sprinters is committed to giving you the tools and information to play safe."
      sections={[
        {
          heading: "Our commitment",
          bullets: [
            "Strict 18+ age verification on every ID",
            "Deposit, session and loss limits available on request",
            "Self-exclusion — permanent or timed",
            "Zero tolerance for underage or coerced play",
          ],
        },
        {
          heading: "Warning signs",
          bullets: [
            "Betting more than you can afford to lose",
            "Chasing losses with larger bets",
            "Hiding your play from family or friends",
            "Feeling anxious, guilty or depressed about betting",
          ],
        },
        {
          heading: "Getting help",
          body: "If gambling is affecting you or someone you love, help is available. India: iCall (9152987821). Global: GamCare (gamcare.org.uk), Gamblers Anonymous (gamblersanonymous.org).",
        },
        {
          heading: "Set limits with us",
          body: "Message Sprinters support to set deposit limits, session limits or trigger a self-exclusion. Limits apply within 24 hours and cannot be reversed for the exclusion period.",
        },
      ]}
      cta="Need to set limits or self-exclude? Message us on WhatsApp — no judgment, no delay."
    />
  ),
});
