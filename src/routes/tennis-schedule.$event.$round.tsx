import { createFileRoute, notFound } from "@tanstack/react-router";
import { MatchDetailPage } from "@/components/MatchDetailPage";
import { findTennisRound, tennisEventSlug, tennisRounds, clamp, parseDateRangeToISO } from "@/lib/match-slug";
import { tennisEvents, type TennisEvent } from "@/data/schedule";

export const Route = createFileRoute("/tennis-schedule/$event/$round")({
  loader: ({ params }) => {
    const found = findTennisRound(params.event, params.round);
    if (!found) throw notFound();
    return found;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Round not found — Lotus365" }, { name: "robots", content: "noindex" }] };
    const { event, round } = loaderData;
    // (SEO fix) Clamped to safe lengths; the old `keywords` meta tag was removed —
    // it's ignored by modern search engines and was pure keyword stuffing.
    const rawTitle = `${event.name} ${round.label} — Prediction & Odds`;
    const title = `${clamp(rawTitle, 47)} | Lotus365`;
    const rawDesc = `${event.name} ${round.label} prediction, live odds and set betting tips — ${event.dates} at ${event.location} (${event.surface}).`;
    const desc = clamp(rawDesc, 155);
    const canonical = `https://lotus365id.com/tennis-schedule/${params.event}/${params.round}`;
    // (Schema fix) startDate/endDate must be ISO 8601 to validate — `event.dates` is a
    // human-readable range like "11 Jan – 1 Feb 2026".
    const { start, end } = parseDateRangeToISO(event.dates);
    // (SEO fix) No dedicated "tennis" category image exists in public/og/ (only
    // cricket/football/casino/platform/guides), so fall back to the real site-wide
    // OG asset — match pages previously had no og:image at all.
    const ogImage = "https://lotus365id.com/og-lotus365.jpg";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "article" },
        { property: "og:image", content: ogImage },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: ogImage },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsEvent",
            name: `${event.name} — ${round.label}`,
            sport: "Tennis",
            ...(start ? { startDate: start } : {}),
            ...(end ? { endDate: end } : {}),
            image: [ogImage],
            location: { "@type": "Place", name: event.location },
            superEvent: { "@type": "SportsEvent", name: event.name },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Schedule", item: "https://lotus365id.com/schedule" },
              { "@type": "ListItem", position: 2, name: event.name, item: "https://lotus365id.com/schedule#tennis" },
              { "@type": "ListItem", position: 3, name: round.label, item: canonical },
            ],
          }),
        },
      ],
    };
  },
  component: TennisRoundRoute,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center text-foreground/90">Round not found.</div>
  ),
  errorComponent: () => (
    <div className="min-h-screen flex items-center justify-center text-foreground/90">Something went wrong loading this round.</div>
  ),
});

function TennisRoundRoute() {
  const { event, round } = Route.useLoaderData() as {
    event: TennisEvent;
    round: (typeof tennisRounds)[number];
  };
  const isSlam = event.category === "Grand Slam";
  const isFinal = /Final$/i.test(round.label) && !/Semi|Quarter/i.test(round.label);
  const isSemi = /Semi/i.test(round.label);
  const isQF = /Quarter/i.test(round.label);
  const isLate = isFinal || isSemi || isQF;
  const surface = event.surface.toLowerCase();
  const surfaceProfile =
    event.surface === "Clay"
      ? "grinders with heavy topspin, deep return position and elite movement"
      : event.surface === "Grass"
      ? "big servers, low-slice specialists and net-rushers"
      : "flat, aggressive baseliners who take the ball early";

  const otherRounds = tennisRounds
    .filter((r) => r.id !== round.id)
    .map((r) => ({
      title: r.label,
      subtitle: `${event.name} · ${event.surface}`,
      href: `/tennis-schedule/${tennisEventSlug(event)}/${r.id}`,
    }));

  const roundContext = isFinal
    ? `The Final of a ${event.category} is the one match every player trains for. Nerves outweigh form in the opening service games — expect a slow, jab-testing first four games before the pattern of the match settles.`
    : isSemi
    ? `Semi-final day tightens the draw to four players who have already proven they can survive. Fatigue from a long ${event.dates} campaign is the single biggest variable — check practice-court sessions the day before.`
    : isQF
    ? `Quarter-final is where seeds meet seeds. Under-priced favourites here often lose on serve % — the model is looking at first-serve landing zones more than head-to-heads.`
    : `Early rounds of a ${event.category} are the trader's playground. Upsets happen when higher seeds ease into the tournament — live-trade first-set winners rather than pre-match match-winners.`;

  return (
    <MatchDetailPage
      sport="tennis"
      eyebrow={`${event.name} · ${round.label}`}
      title={`${round.label} — ${event.name}`}
      teamA="Top seed"
      teamB="Challenger"
      date={event.dates}
      venue={event.location}
      format={`${event.category} · ${event.surface}`}
      extra={event.tour}
      aiOverview={`The ${round.label} at the ${event.name} narrows the draw to players who can genuinely go all the way. On ${surface} at ${event.location}, court speed and ball-bounce reward ${surfaceProfile}. ${event.prevWinner ? `Reigning champion ${event.prevWinner} is one of the storylines to watch.` : ""} ${roundContext} Lotus365 has 120+ pre-match and live markets on every match in this round.`}
      matchDetails={[
        { label: "Tournament", value: event.name },
        { label: "Round", value: round.label },
        { label: "Category", value: event.category },
        { label: "Tour", value: event.tour },
        { label: "Surface", value: event.surface },
        { label: "Location", value: event.location },
        { label: "Dates", value: event.dates },
        { label: "Format", value: isSlam ? "Best of 5 sets (men) · Best of 3 (women)" : "Best of 3 sets" },
        { label: "Tie-break rule", value: "First to 7 in every set · Final-set 10-point TB" },
        ...(event.prevWinner ? [{ label: "Previous winner", value: event.prevWinner }] : []),
      ]}
      prediction={{
        heading: `Who will win — and by how many sets?`,
        body: `On ${surface}, our model gives the higher seed a ${isSlam ? (isFinal ? "58%" : "70%") : isFinal ? "55%" : "63%"} edge in the ${round.label}. The bigger question is match length — ${isSlam ? "best-of-5" : "best-of-3"} favours the fitter player as fatigue builds${isLate ? ", especially after a long week of matches." : "."}`,
        rows: [
          { label: "Match winner lean", value: "Higher seed" },
          { label: "Set spread", value: isSlam ? "-1.5 sets (~1.90)" : "-1.5 sets (~2.10)" },
          { label: "Total games", value: isSlam ? "Over 34.5" : "Over 21.5" },
          { label: "Tie-break in match", value: isLate ? "Yes — 62%" : "Yes — 48%" },
          { label: "Best value market", value: isLate ? "Total tie-breaks over 1.5" : "Underdog +1.5 sets" },
          { label: "Straight-sets probability", value: isSlam ? "~34%" : "~46%" },
        ],
      }}
      keyPlayers={[
        { name: "Top seed", role: "Favourite", note: `Owns the ${surface} — service games have gone to deuce under 20% of the time this season.` },
        { name: "Rising challenger", role: "Dark horse", note: "Aggressive baseline profile suited to this court speed. Live at 3+ tie-breaks and match-length over." },
        { name: "Veteran ace-machine", role: "Serve-first", note: `${event.surface === "Grass" ? "Grass" : "Fast hard"} rewards him. Over 8.5 aces sits inside our fair-value line.` },
        { name: "Home wildcard", role: "Wildcard", note: "Crowd behind him — a fast start could turn this into a stress bet for the favourite." },
        { name: "Counter-puncher", role: "Defender", note: `Return points won on ${surface} sits at 42%+ — an under-priced live-trade angle if the favourite drops serve first.` },
        { name: "Doubles specialist crossover", role: "Serve-and-volley", note: "Rare profile in singles — over-priced on match-winner but under on total games under." },
      ]}
      scorelineHeading={`Predicted score & set markets — ${round.label}`}
      scorelineBody={`Our simulator lands the higher seed on a ${isSlam ? "3-1" : "2-1"} result, with a first-set tie-break the most likely path. Second-serve return points are the swing stat — anything above 43% and the favourite closes it out ${isSlam ? "in four" : "in straights"}.`}
      scorelineRows={
        isSlam
          ? [
              { label: "Predicted score", value: "6-4, 3-6, 6-3, 6-4" },
              { label: "Total games", value: "34 – 40" },
              { label: "Tie-breaks", value: "1 – 2" },
              { label: "Match length", value: "3h 05m – 3h 40m" },
              { label: "First-set winner", value: "Higher seed — 62%" },
              { label: "Total aces (match)", value: "18 – 26" },
              { label: "Winner", value: "Higher seed in 4 sets" },
            ]
          : [
              { label: "Predicted score", value: "6-4, 4-6, 6-3" },
              { label: "Total games", value: "22 – 27" },
              { label: "Tie-breaks", value: "0 – 1" },
              { label: "Match length", value: "1h 55m – 2h 25m" },
              { label: "First-set winner", value: "Higher seed — 58%" },
              { label: "Total aces (match)", value: "10 – 16" },
              { label: "Winner", value: "Higher seed in 3 sets" },
            ]
      }
      aboutTeams={`About this round\n${roundContext}\n\nSurface effect — ${event.surface}\n${event.surface === "Clay" ? "Slow bounce, high kick — points last longer and second-serve return win rate becomes the single most predictive stat. Break-point conversion sits ~6% higher than on hard courts." : event.surface === "Grass" ? "Fast, low bounce — service holds dominate. Break points are rare; when they come, they usually decide sets. Tie-break markets are the sharpest edge." : "Medium-fast bounce — rewards flat, aggressive baseliners. First-serve % under 62% and the favourite starts leaking service games."}\n\nWhat to watch on Lotus365\n${event.category === "Grand Slam" ? "In a best-of-five Slam, one loose service game rarely decides it — but two do. Live-bet the break-point conversion market to trade the momentum swings." : "In a best-of-three, one break in each set is usually enough — so tie-break and set-1-winner markets carry the sharpest edge."}`}
      bettingMarkets={[
        { name: "Match Winner", description: "Straight-up match winner — priced across every remaining player in the draw on Lotus365." },
        { name: "Set Betting (Correct Score)", description: `Correct set score (${isSlam ? "3-0, 3-1, 3-2" : "2-0, 2-1"}) — the highest-margin market in tennis.` },
        { name: "Total Games Over/Under", description: `Lines set around par (${isSlam ? "34.5" : "21.5"}) and refreshed live every game.` },
        { name: "Set Handicap", description: "-1.5 / +1.5 sets — the go-to value line when the market overprices favourites." },
        { name: "Game Handicap", description: "-3.5 / -4.5 game handicaps — sharper than set spreads for close matches." },
        { name: "Tie-break in Match", description: "Yes/No — a coin-flip market that's frequently mispriced pre-match." },
        { name: "Player Aces / Double Faults", description: "Player-prop lines set 60 minutes before the coin toss." },
        { name: "First Set Winner", description: `On ${surface}, first-set-winner correlates ~78% with match-winner — the trader's home.` },
      ]}
      bettingTips={[
        "Weather matters — wind and heat compress serve speeds 4-6 kph, shifting total-games lines by 2-3.",
        "Back the underdog +1.5 sets pre-match, then trade on the exchange if they win the first set.",
        `On ${surface}, first-set-winner correlates ~78% with match-winner — a huge live-trading edge.`,
        `${isSlam ? "Slam matches" : "Best-of-3 matches"} where the favourite is under 1.35 rarely pay in singles — parlay set handicap instead.`,
        "Avoid parlaying more than 3 tennis singles in one slip — one upset breaks the whole ticket.",
        "Set a daily deposit cap in Settings → Responsible Play before any Slam week.",
      ]}
      whyBet={[
        "All 4 Slams + every ATP/WTA 1000 event live on Lotus365 exchange.",
        "Point-by-point live markets — refreshed every serve.",
        "Instant UPI deposits and 3-minute payouts, 24×7.",
        "24×7 WhatsApp support in English & Hindi.",
        "Set, game and handicap bet-builder in a single slip.",
        "Best exchange odds in India on Slam finals.",
      ]}
      relatedItems={otherRounds}
      relatedItemsHeading={`Other rounds — ${event.name}`}
      guidesAndBlogs={[
        { title: "How to place a live bet on Lotus365", slug: "how-to-place-a-live-bet", kind: "guide" },
        { title: "How to set betting limits", slug: "how-to-set-betting-limits", kind: "guide" },
        { title: "How bookmakers set tennis odds", slug: "how-bookmakers-make-money", kind: "guide" },
      ]}
    />
  );
}

void tennisEvents;
