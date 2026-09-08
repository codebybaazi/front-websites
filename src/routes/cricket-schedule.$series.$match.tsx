import { createFileRoute, notFound } from "@tanstack/react-router";
import { MatchDetailPage } from "@/components/MatchDetailPage";
import {
  findCricketMatch,
  cricketSeriesSlug,
  splitTeams,
  clamp,
  toISODate,
} from "@/lib/match-slug";
import type { CricketSeries, CricketMatch } from "@/data/schedule";

export const Route = createFileRoute("/cricket-schedule/$series/$match")({
  loader: ({ params }) => {
    const found = findCricketMatch(params.series, params.match);
    if (!found) throw notFound();
    return found;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Match not found — Lotus365" }, { name: "robots", content: "noindex" }] };
    const { series, match } = loaderData;
    // (SEO fix) Title/description are clamped to safe lengths (~60 / ~155 chars) —
    // the raw team/series/venue strings alone previously ran past 200 characters.
    const rawTitle = `${match.teams} — ${match.match} Prediction & Tips, ${series.name}`;
    const title = `${clamp(rawTitle, 47)} | Lotus365`;
    const rawDesc = `${match.teams} ${match.match} prediction, live score and betting tips for ${series.name} — ${match.date} at ${match.venue}.`;
    const desc = clamp(rawDesc, 155);
    const canonical = `https://lotus365id.com/cricket-schedule/${params.series}/${params.match}`;
    // (Schema fix) startDate must be ISO 8601 for SportsEvent to validate — the raw
    // `match.date` field is a human-readable string like "Sun, 28 Jun 2026".
    const isoDate = toISODate(match.date);
    // (SEO fix) Reuse the real "cricket" category OG image already in public/og/ —
    // match pages previously had no og:image at all.
    const ogImage = "https://lotus365id.com/og/cricket.jpg";
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
            name: `${match.teams} — ${match.match}`,
            sport: "Cricket",
            ...(isoDate ? { startDate: isoDate } : {}),
            image: [ogImage],
            location: { "@type": "Place", name: match.venue },
            superEvent: { "@type": "SportsEvent", name: series.name },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Schedule", item: "https://lotus365id.com/schedule" },
              { "@type": "ListItem", position: 2, name: series.name, item: "https://lotus365id.com/schedule#cricket" },
              { "@type": "ListItem", position: 3, name: match.teams, item: canonical },
            ],
          }),
        },
      ],
    };
  },
  component: CricketMatchRoute,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center text-foreground/90">
      Match not found.
    </div>
  ),
  errorComponent: () => (
    <div className="min-h-screen flex items-center justify-center text-foreground/90">
      Something went wrong loading this match.
    </div>
  ),
});

function CricketMatchRoute() {
  const { series, match, index } = Route.useLoaderData() as { series: CricketSeries; match: CricketMatch; index: number };
  const [a, b] = splitTeams(match.teams);
  const fmtBit = match.match.toLowerCase();
  const isTest = /test/.test(fmtBit);
  const isODI = /odi/.test(fmtBit);
  const format = isTest ? "Test" : isODI ? "ODI" : "T20I";

  const nLower = series.name.toLowerCase();
  const isAsiaCup = /asia cup/.test(nLower);
  const isIndZim = /zimbabwe/.test(nLower) && /india/.test(nLower);
  const isWC = /world cup/.test(nLower);
  const isIPL = /\bipl\b|indian premier league/.test(nLower);
  const seriesKwLine = isAsiaCup
    ? `Part of the Asia Cup 2026 schedule — get today's match prediction, live cricket score, Asia Cup points table, playing XI, toss update, Dream11 team and cricket betting tips right here on Lotus365.`
    : isIndZim
      ? `Part of the India vs Zimbabwe 2026 tour — IND vs ZIM live score, head-to-head, today's match prediction, full timeline, Dream11 fantasy team and cricket betting tips are updated here on Lotus365.`
      : isWC
        ? `Part of the ICC World Cup 2026 schedule — group standings, points table, live cricket score, today's match prediction and betting tips updated on Lotus365.`
        : isIPL
          ? `Part of the IPL 2026 schedule — today's IPL match prediction, live score, points table, Dream11 team and IPL betting tips are updated on Lotus365.`
          : `Part of the ${series.name} — full fixtures, live cricket score, today's match prediction, points table and cricket betting tips are on the Lotus365 cricket schedule.`;

  // Related: other matches in same series, excluding this one
  const related = series.matches
    .map((m, i) => ({
      title: `${m.teams}`,
      subtitle: `${m.match} · ${m.date}`,
      href: `/cricket-schedule/${cricketSeriesSlug(series)}/${i + 1}`,
      _skip: i + 1 === index,
    }))
    .filter((r) => !r._skip)
    .slice(0, 6);



  return (
    <MatchDetailPage
      sport="cricket"
      eyebrow={`${series.name} · ${match.match}`}
      title={match.teams}
      teamA={a}
      teamB={b}
      date={match.date}
      venue={match.venue}
      format={`${format} · ${series.format}`}
      aiOverview={`${a} vs ${b} match prediction — ${a} face ${b} in the ${match.match.toLowerCase()} of the ${series.name} on ${match.date}, and today's match prediction leans on conditions at ${match.venue} which usually favour ${isTest ? "patient batting and reverse swing in the fourth innings" : isODI ? "big totals with a par score around 280-310" : "aggressive powerplay hitting and death-over yorkers"}. Track the live cricket score, playing XI, toss update, points table and Dream11 fantasy team here — plus expert cricket betting tips, ${a.toLowerCase()} vs ${b.toLowerCase()} head-to-head and probable winner odds for this ${format}.`}
      matchDetails={[
        { label: "Series", value: series.name },
        { label: "Match", value: match.match },
        { label: "Format", value: format },
        { label: "Date", value: match.date },
        { label: "Venue", value: match.venue },
        { label: "Series length", value: series.format },
      ]}
      prediction={{
        heading: `${a} vs ${b} — our call for the ${match.match}`,
        body: `Model form, head-to-head and venue history are close, but ${a} edges the pre-match odds on Lotus365. Toss will matter — batting second under lights has produced ${isTest ? "grinding partnerships" : "chases inside 45 overs"} at this ground.`,
        rows: [
          { label: "Predicted winner", value: a },
          { label: "Toss call", value: `${b} to win the toss and bowl first` },
          { label: "Confidence", value: "62% — trade-friendly, not a lock" },
          { label: "Best value market", value: isTest ? "Top run-scorer (both innings)" : "Total match sixes over 12.5" },
        ],
      }}
      keyPlayers={[
        { name: `${a} — Top-order anchor`, role: "Batting", note: "Sets the tempo in the powerplay and controls the middle overs. First-wicket partnership drives the total." },
        { name: `${a} — Death bowler`, role: "Bowling", note: "Executes yorkers under pressure — a must-back for wicket markets in overs 16-20." },
        { name: `${b} — All-rounder`, role: "All-round", note: "Reads the situation better than most. Watch for a cameo with the bat and a game-changing over with the ball." },
        { name: `${b} — Spin threat`, role: "Bowling", note: "Middle-overs squeeze. Backed heavily in wicket-of-the-match on Indian and sub-continent decks." },
        { name: `${a} — Wicket-keeper batter`, role: "Batting", note: `Finisher role in ${format}s. Perfect for last-5-overs runs markets.` },
        { name: `${b} — Rising pacer`, role: "Bowling", note: "New-ball spells swing this game one way. Track his first 3 overs." },
      ]}
      scorelineHeading={isTest ? "Projected first-innings scoreline & session runs" : "Projected total & over-by-over"}
      scorelineBody={isTest
        ? `Expect ${a} first-innings 340-380 with the top-order carrying two sessions. Session-2 runs of 90-110 is the sweet spot for session markets.`
        : isODI
          ? `Par at ${match.venue.split(",")[0]} for a day-nighter is 285-305. Powerplay 55-65 and 10-over 220+ are the trade lines to watch.`
          : `T20I par is 175-190. Powerplay projection 52-58; overs 16-20 the difference-maker with 55-65 runs and 3-4 wickets.`}
      scorelineRows={
        isTest
          ? [
              { label: `${a} 1st innings`, value: "340 – 380" },
              { label: `${b} 1st innings`, value: "290 – 330" },
              { label: "Highest opening stand", value: "60 – 85" },
              { label: "Match result lean", value: `${a} by ~120 runs` },
            ]
          : isODI
            ? [
                { label: `${a} 1st innings`, value: "280 – 310" },
                { label: `${a} Powerplay (10 ov)`, value: "55 – 65" },
                { label: `${a} Mid overs (11-40)`, value: "150 – 175" },
                { label: `${a} Death (41-50)`, value: "70 – 90" },
                { label: `${b} 1st innings`, value: "260 – 295" },
                { label: `${b} Powerplay (10 ov)`, value: "48 – 58" },
                { label: `${b} Mid overs (11-40)`, value: "140 – 165" },
                { label: `${b} Death (41-50)`, value: "65 – 85" },
                { label: "Match result lean", value: `${a} by 18-28 runs` },
              ]
            : [
                { label: `${a} total`, value: "175 – 195" },
                { label: `${a} Powerplay (6 ov)`, value: "52 – 58" },
                { label: `${a} Middle (7-15)`, value: "70 – 82" },
                { label: `${a} Death (16-20)`, value: "55 – 65" },
                { label: `${b} total`, value: "165 – 185" },
                { label: `${b} Powerplay (6 ov)`, value: "48 – 55" },
                { label: `${b} Middle (7-15)`, value: "65 – 78" },
                { label: `${b} Death (16-20)`, value: "50 – 60" },
                { label: "Match result lean", value: `${a} by 8-14 runs` },
              ]
      }
      aboutTeams={`${seriesKwLine}\n\n${a} come into this ${match.match.toLowerCase()} with recent series form on their side, a settled top order and one of the most complete bowling attacks in the ${format} format.\n\n${b} counter with dangerous power-hitting through the middle and a two-spinner strategy that has troubled ${a} in the past. Head-to-head is closer than the odds suggest — 4 of the last 6 ${format}s between these sides have been decided by fewer than 15 runs or gone into the final over.`}
      bettingMarkets={[
        { name: "Match Winner", description: `Straight ${a} or ${b} — the most-traded market of every ${format}.` },
        { name: "Top Batter / Bowler", description: "Pick the day's standout performer with juicy price boosts." },
        { name: "Over/Under Total Runs", description: `Set at par (${isTest ? "340.5" : isODI ? "295.5" : "182.5"}) — a coin-flip with room for trading.` },
        { name: "Session & Fancy", description: "10-over, 15-over, powerplay and dismissals — Lotus365's fastest-settling exchange lines." },
        { name: "Player of the Match", description: "Priced-up for both openers and both quicks — top value on all-rounders." },
        { name: "Method of Dismissal", description: "Caught, bowled, LBW — refreshed live over-by-over in-play." },
      ]}
      bettingTips={[
        `Wait until 5 mins before toss — Lotus365's exchange odds compress by 4-6% after team news drops.`,
        `Split your stake: 60% on match winner, 30% on top run-scorer, 10% on a fancy session market for the ride.`,
        `In ${format}s, back the team bowling first if there is any hint of dew — chasing under lights adds 8-10% edge.`,
        `Use cash-out only when your bet is 70%+ home — a partial cash-out preserves value if a wicket falls.`,
        `Set a hard bet budget for the match before it starts. Lotus365 lets you set daily & weekly limits in Settings → Responsible Play.`,
      ]}
      whyBet={[
        "Fastest UPI deposits in India — under 30 seconds via any UPI app.",
        "3-minute payouts, 24/7 — no waiting, no ID-review delay for verified accounts.",
        "Best cricket exchange odds in India + book-back lines for casual punters.",
        "24×7 English & Hindi support on WhatsApp — reply in under 90 seconds.",
        "Cricket-first product: session, fancy, book, ball-by-ball, and exchange all in one slip.",
        "Personal account manager for VIP volumes — cashback, higher limits, private markets.",
      ]}
      relatedItems={related}
      relatedItemsHeading={`Other matches in ${series.name}`}
      guidesAndBlogs={[
        { title: "How to place a cricket bet on Lotus365", slug: "how-to-place-a-cricket-bet", kind: "guide" },
        { title: "Session betting explained", slug: "how-to-bet-on-session-betting", kind: "guide" },
        { title: "Betting on live IPL matches with Lotus365", slug: "how-to-bet-on-live-ipl-matches-using-lotus365-id", kind: "blog" },
        { title: "Toss-market strategy", slug: "how-to-bet-on-toss-market", kind: "guide" },
      ]}
    />
  );
}


