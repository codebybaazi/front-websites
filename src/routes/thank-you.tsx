import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — Sprinters Online Gaming" },
      { name: "description", content: "Thanks for reaching out. Our team will contact you on WhatsApp within minutes to set up your Sprinters ID." },
      { name: "robots", content: "noindex" },
      { property: "og:url", content: "/thank-you" }
    ],
    links: [{ rel: "canonical", href: "/thank-you" }],
  }),
  component: () => (
    <ContentPage
      kicker="Confirmed"
      title="Thank You!"
      intro="We've received your request. A Sprinters representative will reach out on WhatsApp within a few minutes to verify and set up your ID."
      sections={[
        {
          heading: "What happens next",
          bullets: [
            "Our team reviews your request",
            "You get a WhatsApp from a verified Sprinters number",
            "Confirm your details and preferred username",
            "Deposit and start playing — total time: under 5 minutes",
          ],
        },
      ]}
      cta="Didn't get a message yet? Ping us directly on WhatsApp or Telegram."
    />
  ),
});
