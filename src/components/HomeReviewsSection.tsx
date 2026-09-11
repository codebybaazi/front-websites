import { motion } from "framer-motion";
import { Star } from "lucide-react";

const playerReviews = [
  {
    name: "Varun Kapoor",
    city: "Ludhiana",
    detail: "Fairplay ID on WhatsApp, UPI after OTP",
    rating: 5,
    body: "I messaged the WhatsApp on this site for a Fairplay ID. Login was my mobile and OTP. The first UPI deposit sat until I forwarded the UTR. Cricket and casino sit on that same wallet.",
  },
  {
    name: "Ishita Bose",
    city: "Howrah",
    detail: "IPL and live tables on one Fairplay ID",
    rating: 4,
    body: "I use one Fairplay ID for IPL and for live casino. Football and tennis are on it too. I confirm the slip in play. Partner books only if the desk says they issued one. I asked before I funded a second wallet.",
  },
  {
    name: "Karthik Raman",
    city: "Tiruchirappalli",
    detail: "Payout after an official T20 result",
    rating: 5,
    body: "After the official result, the Fairplay payout usually took about 180 minutes. Open markets held cash until they settled. I wait for that window before I message WhatsApp about a delay.",
  },
  {
    name: "Bindya Choudhary",
    city: "Udaipur",
    detail: "App from this site, first withdrawal on KYC",
    rating: 4,
    body: "I installed Fairplay from this site's app page, not a random store. The same ID works in the browser. First withdrawal sat until I sent KYC on WhatsApp. Then it moved.",
  },
];

export function HomeReviewsSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-background border-t border-white/5">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-12 bg-primary" />
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Fairplay ID · UPI · Payouts</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.85] mb-8">
            FAIRPLAY <br />
            <span className="text-primary not-italic">REVIEWS</span>
          </h2>
          <p className="text-muted-foreground text-xl border-l-2 border-primary/40 pl-8 italic max-w-xl">
            Four players who opened a Fairplay ID on this site. They mention OTP login, UPI UTRs, and payouts that usually take about 180 minutes after settlement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {playerReviews.map((review, i) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col bg-white/[0.03] border border-white/5 rounded-[2rem] p-8 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-1 mb-5" aria-label={`${review.rating} out of 5`}>
                {Array.from({ length: 5 }).map((_, star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${star < review.rating ? "text-primary fill-primary" : "text-white/15"}`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed flex-1">{review.body}</p>
              <footer className="mt-6 pt-6 border-t border-white/5">
                <div className="text-white font-bold">{review.name}</div>
                <div className="text-sm text-white/50">{review.city}</div>
                <div className="text-xs text-primary/70 mt-1">{review.detail}</div>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
