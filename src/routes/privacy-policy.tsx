import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/privacy-policy.json";
import { getRequestOrigin } from "@/lib/origin.functions";

export const Route = createFileRoute("/privacy-policy")({
  loader: async () => ({
    origin: await getRequestOrigin(),
  }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const canonical = `${origin}/privacy-policy`;
    return {
      meta: [
        { title: "Privacy Policy — Official Cricbet99 Data Protection & Security" },
        { name: "description", content: "Read the official Cricbet99 Privacy Policy. Learn how we protect your personal information, banking details, and WhatsApp communication with bank-grade encryption." },
        { name: "keywords", content: "cricbet99 privacy policy, data security betting, secure cricket id, betting privacy india, encrypted withdrawals" },
        { property: "og:title", content: "Cricbet99 Privacy Policy — Your Data is Secure" },
        { property: "og:description", content: "We use 256-bit encryption and human-led security to keep your account data private. Zero data sharing with third parties." },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("      links: [{ rel: "canonical", href: canonical }],", "Privacy Policy — Official Cricbet99 Data Protection & Security")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
    };
  },
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return <LongFormPage content={content} />;
}

