import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/responsible-gaming.json";
import { getRequestOrigin } from "@/lib/origin.functions";

export const Route = createFileRoute("/responsible-gaming")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const canonical = `${origin}/responsible-gaming`;
    return {
      meta: [
        { title: "Responsible Gaming — Play Safely with Cricbet99" },
        { name: "description", content: "Cricbet99 is committed to responsible gaming. Use our tools for deposit limits, session timers, and self-exclusion to keep your betting fun and safe." },
        { name: "keywords", content: "responsible gaming, cricbet99 play safe, deposit limits betting, gambling support india, play smart cricbet99" },
        { property: "og:title", content: "Play Smart: Responsible Gaming at Cricbet99" },
        { property: "og:description", content: "Your well-being matters. Explore our built-in tools for healthy betting habits and expert support resources." },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(buildBreadcrumbJsonLd("/responsible-gaming", "Responsible Gaming")),
        }
      ],
    };
  },
  component: ResponsibleGamingPage,
});

function ResponsibleGamingPage() {
  return <LongFormPage content={content} />;
}

