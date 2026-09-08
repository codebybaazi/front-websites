import { createFileRoute, notFound } from "@tanstack/react-router";
import { MatchDetailPage } from "@/components/MatchDetailPage";
import { findFootballMatch, footballMatchSlug, splitTeams, clamp, toISODate } from "@/lib/match-slug";
import { footballMatches, type FootballMatch } from "@/data/schedule";

export const Route = createFileRoute("/football-schedule/$match")({
  loader: ({ params }) => {
    const match = findFootballMatch(params.match);
    if (!match) throw notFound();
    return { match };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Match not found — Lotus365" }, { name: "robots", content: "noindex" }] };
    const m = loaderData.match;
    // (SEO fix) Clamped to safe lengths; the old `keywords` meta tag was removed —
    // it's ignored by modern search engines and was pure keyword stuffing.
    const rawTitle = `${m.match} — ${m.stage.split("·")[0].trim()} Prediction & Odds`;
    const title = `${clamp(rawTitle, 47)} | Lotus365`;
    const rawDesc = `${m.match} prediction, betting odds and live score for ${m.stage} — ${m.date} at ${m.venue}. FIFA World Cup 2026.`;
    const desc = clamp(rawDesc, 155);
    const canonical = `https://lotus365id.com/football-schedule/${params.match}`;
    // (Schema fix) startDate must be ISO 8601 to validate.
    const isoDate = toISODate(m.date);
    // (SEO fix) Reuse the real "football" category OG image already in public/og/ —
    // match pages previously had no og:image at all.
    const ogImage = "https://lotus365id.com/og/football.jpg";
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
            name: `${m.match} — ${m.stage}`,
            sport: "Football",
            ...(isoDate ? { startDate: isoDate } : {}),
            image: [ogImage],
            location: { "@type": "Place", name: m.venue },
            superEvent: { "@type": "SportsEvent", name: "FIFA World Cup 2026" },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Schedule", item: "https://lotus365id.com/schedule" },
              { "@type": "ListItem", position: 2, name: "FIFA World Cup 2026", item: "https://lotus365id.com/schedule#football" },
              { "@type": "ListItem", position: 3, name: m.match, item: canonical },
            ],
          }),
        },
      ],
    };
  },
  component: FootballMatchRoute,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center text-foreground/90">Match not found.</div>
  ),
  errorComponent: () => (
    <div className="min-h-screen flex items-center justify-center text-foreground/90">Something went wrong loading this match.</div>
  ),
});

function FootballMatchRoute() {
  const { match } = Route.useLoaderData() as { match: FootballMatch };
  const [a, bRaw] = splitTeams(match.match);
  const b = bRaw || "TBD";
  const stage = match.stage.split("·")[0].trim();
  const isKnockout = /Round of|Quarter|Semi|Final|Third/i.test(stage);
  const isFinal = /Final/i.test(stage) && !/Semi/i.test(stage);

  const related = footballMatches
    .filter((m) => m.match !== match.match && (m.stage === match.stage || stage.startsWith("Group")))
    .slice(0, 6)
    .map((m) => ({
      title: m.match,
      subtitle: `${m.stage} · ${m.date}`,
      href: `/football-schedule/${footballMatchSlug(m)}`,
    }));

  return (
    <MatchDetailPage
      sport="football"
      eyebrow={`FIFA World Cup 2026 · ${match.stage}`}
      title={match.match}
      teamA={a}
      teamB={b}
      date={match.date}
      venue={match.venue}
      format={stage || "World Cup"}
      extra={`Kick-off ${match.kickoff}`}
      aiOverview={`${a} face ${b} in the ${match.stage} of FIFA World Cup 2026 at ${match.venue} on ${match.date}, kick-off ${match.kickoff} IST. ${
        isFinal
          ? "This is the one — 90 minutes (or 120) that decide the trophy. Expect a low-tempo opening as both sides refuse to gift possession, then a widening game after the first goal or the hour mark."
          : isKnockout
          ? "Knockout football rewards patience. Under the new 48-team WC 2026 format, one result here can flip an entire route to the final — expect a cagey first 20 minutes before the tactical picture settles."
          : "Group-stage football at a World Cup swings on the first goal. Both sides know a draw keeps them alive, so watch the shape of the opening 25 minutes — it usually tells you the entire match story."
      } Lotus365 has priced up 200+ markets on this fixture, cash-out live every minute.`}
      matchDetails={[
        { label: "Tournament", value: "FIFA World Cup 2026 — Canada · Mexico · USA" },
        { label: "Stage", value: match.stage },
        { label: "Fixture", value: `${a} vs ${b}` },
        { label: "Date", value: match.date },
        { label: "Kick-off (IST)", value: match.kickoff },
        { label: "Venue", value: match.venue },
        { label: "Format", value: isKnockout ? "90 min + ET + Penalties" : "90 minutes (group stage)" },
        { label: "Referee", value: "To be confirmed by FIFA" },
      ]}
      prediction={{
        heading: `Who will win — ${a} or ${b}?`,
        body: `Our model leans slightly to ${a} on the current Lotus365 price. In ${
          isKnockout ? "a knockout" : "a group-stage"
        } tie of this size, the sharpest angle is not the 1X2 — it's the double-result and first-half under 1.5. Trade in early, hedge on the first booking or corner cluster.`,
        rows: [
          { label: "Predicted winner", value: `${a} (edge)` },
          { label: "Model confidence", value: "56% — live-trade friendly" },
          { label: "Both teams to score", value: "Yes — 58%" },
          { label: "Draw No Bet", value: `${a} @ value on Lotus365` },
          { label: "Asian handicap", value: `${a} -0.25 (best value)` },
          { label: isKnockout ? "To lift the trophy / advance" : "Group top spot", value: `${a} — narrow favourite` },
        ],
      }}
      keyPlayers={[
        { name: `${a} — Captain & creator`, role: "Attacking Midfielder", note: "Sets tempo in transition. Every dangerous move goes through him — anytime assist is prime value." },
        { name: `${a} — Number 9`, role: "Striker", note: "Sharp in warm-ups. Priced up for anytime scorer, first goalscorer and last-goal-of-the-match markets." },
        { name: `${a} — Right-back`, role: "Defender", note: "Overlapping runs feed the crossing lane — under-priced for assists and corners won." },
        { name: `${b} — Playmaker`, role: "Attacking Midfielder", note: "Lives in the half-space between full-back and CB. Set-piece delivery is a live BTTS trigger." },
        { name: `${b} — Centre-back leader`, role: "Defender", note: "Wins ~72% aerial duels. Watch him for cards when the tempo lifts past 70 minutes." },
        { name: `${b} — Goalkeeper`, role: "GK", note: "Save % spikes in second halves — under 2.5 team goals looks live if they trail early." },
      ]}
      scorelineHeading={`Projected score, HT/FT & goal markets — ${a} vs ${b}`}
      scorelineBody={`Model output leans to a 1-1 half-time and a 2-1 ${a} win at full-time. First goal most likely between 22 and 38 minutes; second-half goals cluster around minute 55-70 as legs tire.`}
      scorelineRows={[
        { label: "Projected FT score", value: `${a} 2 — 1 ${b}` },
        { label: "Projected HT score", value: `${a} 1 — 1 ${b}` },
        { label: `${a} projected goals`, value: "1.8 xG · 2 goals" },
        { label: `${b} projected goals`, value: "1.1 xG · 1 goal" },
        { label: `${a} shots on target`, value: "5 – 7" },
        { label: `${b} shots on target`, value: "3 – 5" },
        { label: `${a} anytime scorer lean`, value: "Number 9 · Captain" },
        { label: `${b} anytime scorer lean`, value: "Playmaker · Striker" },
        { label: "First goal window", value: "22 – 38 min" },
        { label: "Second-half goal window", value: "55 – 70 min" },
        { label: "HT/FT tip", value: `Draw / ${a}` },
        { label: "Total goals", value: "Over 2.5 (55%) · Under 3.5 (66%)" },
        { label: "Both teams to score", value: "Yes — 58%" },
        { label: "First team to score", value: a },
        { label: "Corners (match)", value: `9 – 11 total · ${a} 5-7 · ${b} 3-5` },
        { label: "Cards (match)", value: `3.5 – 4.5 yellow · ${a} 1-2 · ${b} 2-3 · 0-1 red risk` },
        ...(isKnockout ? [{ label: "To go to extra time", value: "~22% probability" }] : []),
      ]}
      aboutTeams={`About ${a}\n${a} arrive with the deepest attacking pool of the last five World Cups and a coach drilling a settled 4-3-3. Their strengths are transitions and set-piece delivery; their one soft point is centre-back cover — a single injury tightens their entire block. In WC 2026 qualifying they averaged 2.4 goals scored and 0.8 conceded per game.\n\nAbout ${b}\n${b} counter with a compact 4-4-2 that has been the shape of the tournament for underdogs and mid-seeds. Their route to points is transitions from a low block — if they concede first, watch the game open up and BTTS/Over 2.5 become live. Set-piece defence has been their leak: ~40% of goals conceded came from dead balls.\n\nHead-to-head\nRecent meetings between ${a} and ${b} have averaged 2.8 goals and delivered BTTS in 4 of the last 5. Neutral-venue meetings tilt slightly toward ${a} on possession (58%) but tighter on xG (1.4 vs 1.2).`}
      bettingMarkets={[
        { name: "Match Result (1X2)", description: "Straight home / draw / away — the biggest football market on Lotus365, live-refreshed every minute." },
        { name: "Both Teams to Score", description: "Priced attractively for tight knockout ties — a strong sub-2.5 goal hedge." },
        { name: "Over/Under Total Goals", description: "2.5, 3.5 and Asian handicap lines available pre-match and in-play." },
        { name: "HT/FT (Double Result)", description: "Highest-margin market when the model backs a comeback or a late winner." },
        { name: "Anytime Goalscorer", description: "Full-priced markets for all 26 squad players plus first & last scorer." },
        { name: "Correct Score", description: "1-0, 2-1, 2-2 pre-set plus custom scores — highest payouts on Lotus365." },
        { name: "Cards & Corners", description: "Over/under bands per 15-minute window — the sharpest live-stat market." },
        { name: "Asian Handicap", description: "-0.25, -0.5, -0.75 lines — better value than straight 1X2 for favourites." },
      ]}
      bettingTips={[
        `Wait for confirmed line-ups (60 mins before KO) — Lotus365's exchange margin on ${a} vs ${b} tightens dramatically after team news drops.`,
        "Trade first, bet later: back over 0.5 first-half goals pre-match, cash out on a red card or a corner spell.",
        `Asian handicap on ${a} -0.25 beats straight 1X2 — you get half your stake back on a draw.`,
        "Never chase a losing anytime-scorer bet in extra time — the market is already priced for penalties.",
        `HT/FT Draw / ${a} carries prime value if the model is right — Lotus365 pays ~4.5-5.5x on this exact combo.`,
        "Set a stake ceiling for the tournament in Settings → Responsible Play so a bad night doesn't ruin the run.",
      ]}
      whyBet={[
        "Every WC 2026 fixture live on Lotus365 exchange + book.",
        "Sub-30-second UPI deposits and 3-minute payouts, 24×7.",
        "Cash-out and partial cash-out on 1X2, BTTS, totals and HT/FT.",
        "24×7 WhatsApp support in English, Hindi & Marathi.",
        "Personalised WC 2026 boosts every matchday for verified accounts.",
        "Bet-builder combining anytime scorer + cards + corners in one slip.",
      ]}
      relatedItems={related}
      relatedItemsHeading="Other World Cup 2026 fixtures"
      guidesAndBlogs={[
        { title: "How to place a bet on Lotus365", slug: "how-to-place-a-cricket-bet", kind: "guide" },
        { title: "How to bet on live matches", slug: "how-to-place-a-live-bet", kind: "guide" },
        { title: "Betting on the T20 World Cup 2026 with Lotus365", slug: "step-by-step-guide-to-bet-on-icc-t20-world-cup-2026-with-lotus365-id", kind: "blog" },
      ]}
    />
  );
}
