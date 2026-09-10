import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Users, Gift, ShieldCheck, Share2 } from "lucide-react";
import { useWhatsApp } from "@/components/WhatsAppProvider";
import { AIOverview } from "@/components/AIOverview";
import { QuickLinks } from "@/components/QuickLinks";
import { FAQSection, faqJsonLd, type FAQItem } from "@/components/FAQSection";

const referralFaqs: FAQItem[] = [
  { q: "How does the Mahadev Book referral program work?", a: "Share your registered mobile number with a friend. Once they sign up and complete their first verified deposit, you get ₹300 credited to your wallet." },
  { q: "How much do I earn per referral?", a: "₹300 per verified friend, credited once their account is KYC-verified and their first deposit clears. There's no cap mentioned on how many friends you can refer." },
  { q: "Does my friend need to deposit a minimum amount to count?", a: "They need to complete a standard first deposit and KYC. Message support on WhatsApp if you want the exact current threshold confirmed for your case." },
  { q: "Do I need a referral code or link?", a: "Just have your friend mention your registered mobile number when they message support to set up their account. The team links the referral manually." },
  { q: "When does the referral bonus get credited?", a: "Usually within a day of your friend's first deposit and KYC being confirmed. If it's taking longer, ask support to check the status." },
  { q: "Can I refer someone who already has a Mahadev Book account?", a: "No, the bonus applies to genuinely new accounts only. Referring an existing player's second account isn't eligible and can flag both accounts for review." },
  { q: "Is there a limit to how many people I can refer?", a: "No fixed cap has been set. Active referrers who bring in several verified friends can also ask support about priority handling on their own account." },
];

export const Route = createFileRoute("/mahadev-book-referral-program")({
  head: () => ({
    meta: [
      { title: "Mahadev Book Referral Program — Earn ₹300 Per Friend" },
      { name: "description", content: "How the Mahadev Book referral program works — earn ₹300 for every verified friend who signs up and deposits. How to refer and when the bonus is credited." },
      { property: "og:title", content: "Mahadev Book Referral Program — Earn ₹300 Per Friend" },
        { name: "twitter:title", content: "Mahadev Book Referral Program — Earn ₹300 Per Friend" },
      { property: "og:description", content: "Invite friends to Mahadev Book and earn ₹300 per verified sign-up. Here's exactly how it works." },
      { property: "og:url", content: "https://mahadevbookss.com/mahadev-book-referral-program" },
      { property: "og:image", content: "https://mahadevbookss.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Mahadev Book referral program — earn per friend invited" },
      { name: "twitter:image", content: "https://mahadevbookss.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mahadevbookss.com/mahadev-book-referral-program" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(referralFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookss.com/" },
            { "@type": "ListItem", position: 2, name: "Support", item: "https://mahadevbookss.com/support" },
            { "@type": "ListItem", position: 3, name: "Referral", item: "https://mahadevbookss.com/mahadev-book-referral-program" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://mahadevbookss.com/mahadev-book-referral-program",
          speakable: { "@type": "SpeakableSpecification", cssSelector: [".ai-overview-speakable"] },
        }),
      },
    ],
  }),
  component: ReferralProgramPage,
});

const steps = [
  { n: "01", t: "Share your number", d: "Give your friend the mobile number registered on your Mahadev Book account." },
  { n: "02", t: "They sign up on WhatsApp", d: "Your friend messages support, mentions your number, and completes their own ID setup." },
  { n: "03", t: "They deposit and verify", d: "Once their first deposit clears and KYC is confirmed, the referral is locked in." },
  { n: "04", t: "You get ₹300", d: "The bonus lands in your wallet, usually within a day of their verification." },
];

const points = [
  { icon: Users, t: "No cap on referrals", d: "Bring in as many verified friends as you like, there's no stated limit." },
  { icon: Gift, t: "₹300 per friend", d: "A flat amount per successful referral, credited once their account is verified." },
  { icon: Share2, t: "No code needed", d: "Just your registered mobile number — the team links new sign-ups to you manually." },
  { icon: ShieldCheck, t: "Genuine accounts only", d: "The bonus is for real new players, not second accounts or self-referrals." },
];

function ReferralProgramPage() {
  const { whatsappUrl } = useWhatsApp();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Wallet
        </span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Mahadev Book <span className="text-gradient-gold">Referral Program</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Bring a friend onto Mahadev Book and earn ₹300 once they're verified and make their
          first deposit. No code, no app to install — just your registered number.
        </p>
        <div className="mt-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <span className="btn-glow-content flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> Ask About Referrals
            </span>
          </a>
        </div>
      </section>

      <AIOverview
        title="AI Overview — Mahadev Book Referral Program"
        summary="The Mahadev Book referral program pays ₹300 for every friend who signs up using a referrer's registered mobile number, completes KYC and makes their first deposit. There's no referral code or app link involved — the team matches new sign-ups to the referrer manually on WhatsApp. The bonus is credited within about a day of the friend's account being verified, and applies only to genuinely new accounts."
        points={[
          "₹300 credited per verified referred friend",
          "No referral code, just your registered mobile number",
          "Friend needs to complete KYC and a first deposit",
          "Bonus usually lands within a day of verification",
          "No stated cap on how many friends you can refer",
          "Applies to genuinely new accounts only",
        ]}
        keywords={["mahadev book referral program", "mahadev book refer a friend", "mahadev book referral bonus", "mahadev book invite friends"]}
      />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">How it works</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {points.map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-6">
              <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary grid place-items-center">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-foreground">{c.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 border-t border-border/60">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Four steps to your ₹300</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-2xl font-bold text-gradient-gold">{s.n}</span>
              <h3 className="mt-3 font-semibold text-foreground">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQSection title="Mahadev Book Referral Program — FAQs" items={referralFaqs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center border-t border-border/60">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Know someone who'd like Mahadev Book?</h2>
        <p className="mt-3 text-muted-foreground">Send them your number and let support know once they've signed up.</p>
        <div className="mt-6 flex justify-center flex-wrap gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-primary-foreground">
            <span className="btn-glow-content flex items-center gap-2"><Users className="h-4 w-4" /> Chat Now</span>
          </a>
          <Link to="/mahadev-book-bonuses" className="inline-flex items-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent">
            See all bonuses
          </Link>
        </div>
      </section>

      <QuickLinks
        pageCategory="Support"
        excludePath="/mahadev-book-referral-program"
        title="Keep exploring"
        subtitle="Deposits, withdrawals, bonuses and everything else on the support desk."
      />
    </>
  );
}
