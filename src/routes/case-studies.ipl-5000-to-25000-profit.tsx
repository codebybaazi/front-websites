import { createFileRoute } from "@tanstack/react-router";
import { LongFormPage, buildFaqJsonLd, buildBreadcrumbJsonLd } from "@/components/long-form-page";
import { AiOverview } from "@/components/ai-overview";
import content from "@/data/pages/case-studies__ipl-5000-to-25000-profit.json";

export const Route = createFileRoute("/case-studies/ipl-5000-to-25000-profit")({
  head: () => ({
    meta: [
      { title: "IPL Trading Case Study: ₹5K to ₹25K Bankroll Growth" },
      { name: "description", content: "How one Cricbet99 member achieved a 400% ROI during the IPL season using disciplined session trading and bankroll management. Real results, real data." },
      { property: "og:title", content: "Small Bankroll to Big Wins: An IPL Case Study on Cricbet99" },
      { property: "og:description", content: "Step-by-step breakdown of an IPL trading strategy that turned a ₹5,000 starting balance into ₹25,000 profit. Learn the discipline of professional trading." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://cricbet99.co.in/case-studies/ipl-5000-to-25000-profit" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/case-studies/ipl-5000-to-25000-profit", "IPL Trading Case Study: ₹5K to ₹25K Bankroll Growth")),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbJsonLd("/case-studies/ipl-5000-to-25000-profit", "IPL Trading Case Study: ₹5K to ₹25K Bankroll Growth")),
      },
      ...(content.faqs && content.faqs.length ? [{
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd(content.faqs)),
      }] : [])
    ],
  }),
  component: Page_case_studies_ipl_5000_to_25000_profit,
});

function Page_case_studies_ipl_5000_to_25000_profit() {
  return (
    <LongFormPage 
      content={content} 
      extra={
        <AiOverview 
          summary={content.subtitle} 
          highlights={content.features.slice(0, 4).map(f => f.desc)} 
        />
      } 
    />
  );
}
