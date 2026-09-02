import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Crown, ArrowRight, Flame } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

import cricketImg from "@/assets/betting/cricket.jpg";
import footballImg from "@/assets/betting/football.jpg";
import tennisImg from "@/assets/betting/tennis.jpg";
import kabaddiImg from "@/assets/betting/kabaddi.jpg";
import horseRacingImg from "@/assets/betting/horse-racing.jpg";
import fancyBetsImg from "@/assets/betting/fancy-bets.jpg";
import liveCasinoImg from "@/assets/betting/live-casino.jpg";
import teenPattiImg from "@/assets/betting/teen-patti.jpg";
import andarBaharImg from "@/assets/play/andar-bahar.jpg";
import rouletteImg from "@/assets/play/roulette.jpg";
import slotsImg from "@/assets/play/slots.jpg";
import esportsImg from "@/assets/play/esports.jpg";

type Tile = {
  name: string;
  tag: string;
  hot?: boolean;
  image: string;
  href: { to: string; search?: Record<string, string> };
};

const rowOne: Tile[] = [
  { name: "Cricket exchange", tag: "In-play", hot: true, image: cricketImg, href: { to: "/betting", search: { category: "cricket" } } },
  { name: "IPL books", tag: "Season", hot: true, image: fancyBetsImg, href: { to: "/ipl-betting" } },
  { name: "Football", tag: "Club & cup", image: footballImg, href: { to: "/betting", search: { category: "football" } } },
  { name: "Tennis", tag: "ATP · WTA", image: tennisImg, href: { to: "/betting", search: { category: "tennis" } } },
  { name: "Kabaddi", tag: "Pro league", image: kabaddiImg, href: { to: "/kabaddi-betting" } },
  { name: "Horse racing", tag: "Win & place", image: horseRacingImg, href: { to: "/horse-racing" } },
];

const rowTwo: Tile[] = [
  { name: "Live casino", tag: "HD dealers", hot: true, image: liveCasinoImg, href: { to: "/casino", search: { type: "live" } } },
  { name: "Teen Patti", tag: "Card table", hot: true, image: teenPattiImg, href: { to: "/casino", search: { type: "indian" } } },
  { name: "Andar Bahar", tag: "Classic", image: andarBaharImg, href: { to: "/casino", search: { type: "indian" } } },
  { name: "Roulette", tag: "European", image: rouletteImg, href: { to: "/casino", search: { type: "live" } } },
  { name: "Slots", tag: "Spin reels", image: slotsImg, href: { to: "/casino", search: { type: "slots" } } },
  { name: "Esports", tag: "Tournaments", image: esportsImg, href: { to: "/esports-betting" } },
];

function GameTile({ tile }: { tile: Tile }) {
  return (
    <Link
      to={tile.href.to}
      search={tile.href.search ?? {}}
      className="group relative mr-4 block h-[220px] w-[168px] flex-shrink-0 overflow-hidden rounded-xl border border-white/8 bg-card sm:h-[260px] sm:w-[200px]"
    >
      <img
        src={tile.image}
        alt={`${tile.name} on Fairplay`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/45 to-transparent" />
      <div className="absolute inset-0 rounded-xl ring-0 ring-primary/0 transition-all duration-300 group-hover:ring-2 group-hover:ring-primary/60" />

      {tile.hot && (
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-flame px-2 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-flame-foreground">
          <Flame className="h-3 w-3" /> Hot
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 p-4">
        <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-primary">{tile.tag}</span>
        <h3 className="mt-1 text-[15px] font-semibold tracking-tight text-foreground group-hover:text-primary">
          {tile.name}
        </h3>
      </div>
    </Link>
  );
}

function MarqueeRow({ tiles, direction }: { tiles: Tile[]; direction: "left" | "right" }) {
  return (
    <div className="elite-row relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-ink-deep to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-ink-deep to-transparent sm:w-28" />
      <div className={`elite-track ${direction === "left" ? "elite-track-left" : "elite-track-right"}`}>
        {[...tiles, ...tiles, ...tiles, ...tiles].map((tile, i) => (
          <GameTile key={`${tile.name}-${i}`} tile={tile} />
        ))}
      </div>
    </div>
  );
}

export function EliteGamingSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/8 bg-ink-deep py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/8 blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 h-[380px] w-[380px] translate-x-1/2 rounded-full bg-flame/8 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto mb-12 max-w-7xl px-4">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-5 flex items-center gap-3"
              >
                <span className="tabular-nums text-[11px] font-semibold text-flame">02</span>
                <span className="brand-rule h-[2px] w-8" />
                <span className="kicker">Elite gaming floor</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl"
              >
                Every table and book,{" "}
                <span className="text-primary">running on one Fairplay ID</span>
              </motion.h2>

              <p className="mt-5 border-l-2 border-flame/50 pl-5 text-[15px] leading-relaxed text-muted-foreground">
                Exchange cricket, club football, tennis, Indian card tables and live dealer rooms sit side by side. Pick a floor, tap in with the same login and the same UPI wallet — nothing to install twice.
              </p>
            </div>

            <a
              href={waLink("Hi Fairplay — I want a Fairplay ID for cricket and live tables.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-flame hover:text-flame-foreground"
            >
              <Crown className="h-4 w-4" />
              Open your ID
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <MarqueeRow tiles={rowOne} direction="left" />
          <MarqueeRow tiles={rowTwo} direction="right" />
        </div>
      </div>
    </section>
  );
}
