import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Spade, Dice5, Crown } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

import teenPattiImg from "@/assets/betting/teen-patti.jpg";
import andarBaharImg from "@/assets/play/andar-bahar.jpg";
import dragonTigerImg from "@/assets/play/dragon-tiger.jpg";
import baccaratImg from "@/assets/play/baccarat.jpg";
import lucky7Img from "@/assets/play/lucky-7.jpg";
import cards32Img from "@/assets/play/32-cards.jpg";
import liveCasinoImg from "@/assets/betting/live-casino.jpg";
import rouletteImg from "@/assets/play/roulette.jpg";
import blackjackImg from "@/assets/play/blackjack.jpg";
import wheelShowImg from "@/assets/play/wheel-show.jpg";
import sicBoImg from "@/assets/play/sic-bo.jpg";
import slotsImg from "@/assets/play/slots.jpg";

type Tile = {
  name: string;
  tag: string;
  note: string;
  image: string;
  to: string;
  search?: Record<string, string>;
};

const liveCards: Tile[] = [
  { name: "Teen Patti", tag: "Dealt live", note: "Two-hand classic, side bets open", image: teenPattiImg, to: "/casino", search: { type: "indian" } },
  { name: "Andar Bahar", tag: "Fast round", note: "Cut card, pick a side, settle", image: andarBaharImg, to: "/casino", search: { type: "indian" } },
  { name: "Dragon Tiger", tag: "One card", note: "Quickest table on the ID", image: dragonTigerImg, to: "/casino", search: { type: "indian" } },
  { name: "Baccarat", tag: "Studio", note: "Player, banker or tie", image: baccaratImg, to: "/casino", search: { type: "live" } },
  { name: "Lucky 7", tag: "High / low", note: "Single-card call, instant result", image: lucky7Img, to: "/casino", search: { type: "indian" } },
  { name: "32 Cards", tag: "Desi table", note: "Four players, running score", image: cards32Img, to: "/casino", search: { type: "indian" } },
];

const liveCasino: Tile[] = [
  { name: "Live dealer floor", tag: "HD stream", note: "Real tables, real croupiers", image: liveCasinoImg, to: "/casino", search: { type: "live" } },
  { name: "Roulette", tag: "European", note: "Inside, outside and neighbours", image: rouletteImg, to: "/casino", search: { type: "live" } },
  { name: "Blackjack", tag: "Seat open", note: "Split, double, insurance", image: blackjackImg, to: "/casino", search: { type: "live" } },
  { name: "Wheel shows", tag: "Game show", note: "Multiplier spins with a host", image: wheelShowImg, to: "/casino", search: { type: "live" } },
  { name: "Sic Bo", tag: "Dice", note: "Three dice, spread your stake", image: sicBoImg, to: "/casino", search: { type: "live" } },
  { name: "Slots", tag: "Reels", note: "Jackpot and buy-bonus reels", image: slotsImg, to: "/casino", search: { type: "slots" } },
];

function TableTile({ tile, i }: { tile: Tile; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: i * 0.04 }}
    >
      <Link
        to={tile.to}
        search={tile.search ?? {}}
        aria-label={`${tile.name} — ${tile.note}`}
        className="group relative block h-52 overflow-hidden rounded-xl border border-white/8 bg-card transition-colors hover:border-primary/45 sm:h-60"
      >
        <img
          src={tile.image}
          alt={`${tile.name} table on Fairplay`}
          loading="lazy"
          width={768}
          height={768}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/50 to-transparent" />
        <div className="absolute inset-0 rounded-xl ring-0 ring-primary/0 transition-all duration-300 group-hover:ring-2 group-hover:ring-primary/50" />

        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-deep/70 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-primary backdrop-blur">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          {tile.tag}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="flex items-center gap-1.5 text-[16px] font-semibold tracking-tight group-hover:text-primary">
            {tile.name}
            <ArrowRight className="h-3.5 w-3.5 -translate-x-1 text-primary opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
          </h3>
          <p className="mt-1 text-[11.5px] leading-snug text-white/55 group-hover:text-white/80">{tile.note}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export function LiveTablesSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/8 px-4 py-16 sm:px-6 sm:py-24" id="live-tables">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-flame/10 blur-[110px]" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-[11px] font-semibold tabular-nums text-flame">02</span>
            <span className="h-[2px] w-8 brand-rule" />
            <span className="kicker">Dealt on stream</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight leading-[1.08] sm:text-4xl md:text-5xl">
            Live cards and the <span className="text-primary">live casino floor</span>
          </h2>
          <p className="mt-5 max-w-xl border-l-2 border-primary/50 pl-5 text-[15px] leading-relaxed text-muted-foreground sm:text-lg">
            Indian card tables and studio casino games run around the clock on the same Fairplay ID — one wallet, one login, dealers on camera.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-ink-deep/60 text-primary">
              <Spade className="h-4 w-4" />
            </span>
            <h3 className="text-lg font-semibold tracking-tight sm:text-xl">Live cards</h3>
          </div>
          <Link to="/casino" search={{ type: "indian" }} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:text-flame">
            All card tables <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
          {liveCards.map((t, i) => (
            <TableTile key={t.name} tile={t} i={i} />
          ))}
        </div>

        <div className="mb-6 mt-14 flex flex-wrap items-end justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-ink-deep/60 text-flame">
              <Dice5 className="h-4 w-4" />
            </span>
            <h3 className="text-lg font-semibold tracking-tight sm:text-xl">Live casino</h3>
          </div>
          <Link to="/casino" search={{ type: "live" }} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-flame hover:text-primary">
            All live tables <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
          {liveCasino.map((t, i) => (
            <TableTile key={t.name} tile={t} i={i} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-xl border border-white/8 bg-card/70 p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h3 className="text-xl font-bold tracking-tight">Take a seat in about two minutes</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Ask the desk for a Fairplay ID, fund it over UPI and the tables open straight away — sports and casino on the same balance.
            </p>
          </div>
          <a
            href={waLink("I want a Fairplay ID for the live casino tables")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-flame hover:text-flame-foreground"
          >
            Get an ID on WhatsApp <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Partner Books Section */}
        <section className="mt-24">
          <div className="mb-10 flex items-center gap-3">
            <span className="text-[11px] font-semibold tabular-nums text-flame">03</span>
            <span className="h-[2px] w-8 brand-rule" />
            <span className="kicker">Partner books</span>
          </div>

          {/* Animated Marquee Header */}
          <div className="relative mb-10 overflow-hidden rounded-xl border border-white/8 bg-ink-deep/80 py-6">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-deep to-transparent z-20 pointer-events-none"/>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-deep to-transparent z-20 pointer-events-none"/>
            <div className="flex py-2 relative z-10">
              <motion.div 
                animate={{ x: [0, -1600] }} 
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="flex items-center gap-8 pr-8"
              >
                {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                  <div key={`${partner.name}-${index}`} className="flex-shrink-0 w-52 h-36 flex flex-col items-center justify-center bg-card/70 border border-white/8 rounded-lg p-4 hover:border-primary/40 transition-all hover:bg-card group cursor-pointer">
                    <div className="relative w-full h-16 flex items-center justify-center mb-2">
                      <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-muted-foreground/70 text-[10px] font-semibold uppercase tracking-[0.16em] group-hover:text-primary transition-colors">
                      {partner.url}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Premium Partner Cards Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold tracking-tight flex items-center gap-3">
                <Crown className="h-6 w-6 text-flame" />
                Partner exchanges
              </h3>
              <a href={waLink("Hi Fairplay — I want to open a verified Fairplay ID.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-flame transition-colors">
                Ask for a verified ID <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Asymmetric Premium Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {partners.slice(0, 4).map((partner, i) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`group relative overflow-hidden rounded-xl border border-white/8 bg-card/60 backdrop-blur-sm p-5 hover:bg-card/90 hover:border-primary/50 transition-all duration-300 cursor-pointer ${i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-flame/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Animated top border */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-flame to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  
                  <div className="relative z-10">
                    <div className={`relative w-full ${i === 0 ? 'h-32 sm:h-44' : 'h-20 sm:h-24'} flex items-center justify-center mb-3`}>
                      <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105" />
                    </div>
                    <div className="text-center">
                      <h4 className="text-sm font-bold tracking-tight group-hover:text-primary transition-colors">{partner.name}</h4>
                      <p className="text-[10px] text-muted-foreground/70 mt-1 uppercase tracking-wider group-hover:text-flame transition-colors">{partner.url}</p>
                    </div>
                    {i === 0 && (
                      <div className="mt-3 pt-3 border-t border-white/5">
                        <div className="flex items-center justify-center gap-1.5 text-[10px] font-semibold text-flame">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flame opacity-70" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-flame" />
                          </span>
                          Featured Partner
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Second Row - More Partners */}
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
            {partners.slice(4).map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-lg border border-white/8 bg-card/40 backdrop-blur-sm p-3 hover:bg-card/80 hover:border-primary/40 transition-all duration-300 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative w-full h-12 sm:h-14 flex items-center justify-center mb-2">
                    <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                  <p className="text-[9px] text-muted-foreground/60 uppercase tracking-wider text-center group-hover:text-primary transition-colors truncate w-full">{partner.url}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
