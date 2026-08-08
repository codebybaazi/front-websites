import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd } from "@/components/long-form-page";
import content from "@/data/pages/login-issues.json";

export const Route = createFileRoute("/login-issues")({
  head: () => ({
    meta: [
      { title: "Fix Cricbet99 Login Issues | 24/7 Account Recovery" },
      { name: "description", content: "Troubleshoot Cricbet99 login errors, forgotten passwords, and OTP delays. Get back into your ID instantly with our human-led WhatsApp support." },
      { property: "og:title", content: "Having Trouble Logging In? | Cricbet99 Help Center" },
      { property: "og:description", content: "Immediate solutions for Cricbet99 account access issues. Restore your trading ID and secure your funds with our 2026 security protocols." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.win/login-issues" }],
    scripts: content.faqs && content.faqs.length ? [{
      type: "application/ld+json",
      children: JSON.stringify(buildFaqJsonLd(content.faqs)),
    }] : [],
  }),
  component: Page_login_issues,
});

function Page_login_issues() {
  return <LongFormPage content={content} />;
}
