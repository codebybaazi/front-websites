import { abs } from "@/lib/site-url";
import { buildPageFaqLd } from "@/data/pageFaqs";
import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";

export const Route = createFileRoute("/sprinters-login")({
  head: () => ({
    meta: [
      { title: "Sprinters Login — Access Your Betting ID" },
      { name: "description", content: "Access your Sprinters betting ID securely. Login credentials are shared privately over WhatsApp after verification." },
      { property: "og:title", content: "Sprinters Login" },
      { property: "og:description", content: "Access your Sprinters ID. Credentials shared privately after WhatsApp verification." },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex" },
      { property: "og:url", content: abs("/sprinters-login") }
    ],
    links: [{ rel: "canonical", href: "/sprinters-login" }],
    scripts: [
        ...(buildPageFaqLd("/sprinters-login") ? [{ type: "application/ld+json", children: JSON.stringify(buildPageFaqLd("/sprinters-login")) }] : []),
    ],
  }),
  component: () => (
    <ContentPage
      kicker="Account Access"
      title="Sprinters Login"
      intro="For your security, Sprinters IDs never ship with a public login form. Your credentials are delivered privately over WhatsApp once your ID is verified."
      sections={[
        {
          heading: "New user?",
          body: "Message us on WhatsApp with your name and preferred username. We'll verify with OTP and deliver your ID and login details within minutes.",
        },
        {
          heading: "Existing user?",
          body: "Lost your password or can't reach your dashboard? Ping our support team — we'll reset securely after identity verification.",
        },
        {
          heading: "Security tips",
          bullets: [
            "Never share your password with anyone",
            "Change your password after first login",
            "Report suspicious messages to our support team immediately",
          ],
        },
      ]}
    />
  ),
});
