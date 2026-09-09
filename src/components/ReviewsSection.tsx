import { Star, BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const reviews = [
  {
    name: "Rohit Sharma",
    location: "Nagpur, Maharashtra",
    rating: 5,
    title: "UPI withdrawal actually took under 3 minutes",
    text: "I was skeptical after getting burned on another exchange site last IPL season, but Lotus365 paid out my Mumbai Indians winnings to my UPI in about two and a half minutes. Got my ID over WhatsApp in the evening, deposited ₹500, and was watching the match with a live bet placed before the second over.",
  },
  {
    name: "Priya Menon",
    location: "Kochi, Kerala",
    rating: 5,
    title: "Support picks up the phone, not just a bot",
    text: "What sold me was the WhatsApp concierge. I messaged at 1am about a stuck deposit during the T20 World Cup and a real person replied within a few minutes and sorted it out. Been playing casino games here for eight months now and cash-outs have never taken longer than five minutes.",
  },
  {
    name: "Arjun Verma",
    location: "Lucknow, Uttar Pradesh",
    rating: 4,
    title: "Good odds on cricket, casino floor is solid too",
    text: "I mainly bet on cricket fancy markets and the odds here are noticeably sharper than the two other IDs I've used. Teen Patti tables get a bit crowded during peak hours on weekends, but that's really my only complaint. KYC took maybe ten minutes and my first withdrawal cleared the same night.",
  },
  {
    name: "Sunita Rao",
    location: "Bengaluru, Karnataka",
    rating: 5,
    title: "Been with them since 2019, never had a payout issue",
    text: "My husband and I both have Lotus IDs. We mostly play live roulette and bet on WPL matches, and in five years neither of us has had a withdrawal delayed past ten minutes. The referral bonus is a nice touch too, my brother-in-law joined last month using our code.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < rating ? "fill-primary text-primary" : "text-primary/25"}`}
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary/80 mb-3">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Player Reviews
        </div>
        <h2 className="font-display text-4xl md:text-5xl">
          What real players say about <span className="gold-text">Lotus365</span>.
        </h2>
        <p className="text-foreground/90 mt-5 leading-relaxed">
          Ratings and reviews from verified Lotus365 players across India, on the WhatsApp
          onboarding, UPI payout speed and everyday support they actually experienced.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {reviews.map((r, i) => (
          <Reveal
            key={r.name}
            delay={i * 90}
            className="glass-card hover-lift rounded-2xl p-7 relative overflow-hidden group hover:border-primary/40"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <div className="font-display text-lg">{r.name}</div>
                <div className="text-xs text-foreground/70">{r.location}</div>
              </div>
              <Stars rating={r.rating} />
            </div>
            <div className="text-sm font-semibold text-primary/90 mb-2">{r.title}</div>
            <p className="text-sm text-foreground/90 leading-relaxed mb-5">{r.text}</p>
            <div className="flex items-center gap-1.5 pt-4 border-t border-primary/15 text-[11px] uppercase tracking-wider text-foreground/70">
              <BadgeCheck className="h-3.5 w-3.5 text-primary" />
              Verified Lotus365 player
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
