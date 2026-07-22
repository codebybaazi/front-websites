import { Link } from "@tanstack/react-router";
import {
  Calendar,
  MapPin,
  Trophy,
  Users,
  Sparkles,
  ChevronRight,
  Target,
  TrendingUp,
  Shield,
  BookOpen,
  Zap,
  Flame,
  CheckCircle2,
} from "lucide-react";
import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { RelatedContent } from "./RelatedContent";
import { AiOverview } from "./AiOverview";

export type MatchDetailProps = {
  sport: "cricket" | "football" | "tennis";
  eyebrow: string;
  title: string;
  teamA: string;
  teamB: string;
  date: string;
  venue: string;
  format: string;
  extra?: string;
  aiOverview: string;
  matchDetails: { label: string; value: string }[];
  prediction: {
    heading: string;
    body: string;
    rows?: { label: string; value: string }[];
  };
  keyPlayers: { name: string; role: string; note: string }[];
  scorelineHeading: string;
  scorelineBody: string;
  scorelineRows: { label: string; value: string }[];
  aboutTeams: string;
  bettingMarkets: { name: string; description: string }[];
  bettingTips: string[];
  whyBet: string[];
  relatedItems: { title: string; subtitle: string; href: string; params?: Record<string, string> }[];
  relatedItemsHeading: string;
  guidesAndBlogs: { title: string; slug: string; kind: "guide" | "blog" }[];
};

function initials(name: string): string {
  const cleaned = name.replace(/\([^)]*\)/g, "").trim();
  const words = cleaned.split(/\s+/).filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].slice(0, 3).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

export function MatchDetailPage(p: MatchDetailProps) {
  const hasTeamB = Boolean(p.teamB);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-primary/10">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1100px 520px at 12% -10%, oklch(0.82 0.15 88 / 0.22), transparent 60%), radial-gradient(900px 460px at 92% 10%, oklch(0.55 0.09 165 / 0.45), transparent 60%), radial-gradient(700px 400px at 50% 110%, oklch(0.82 0.15 88 / 0.10), transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, oklch(0.82 0.15 88) 0 1px, transparent 1px 22px)",
          }}
        />

        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-8 pt-24 pb-16">
          <div className="flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase text-primary/90 font-semibold">
            <span className="h-px w-8 bg-primary/60" />
            <Sparkles className="h-3.5 w-3.5" />
            <span className="truncate">{p.eyebrow}</span>
          </div>

          {/* VS layout for cricket & football */}
          {p.sport !== "tennis" && hasTeamB ? (
            <div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-8 max-w-4xl">
              <TeamBadge name={p.teamA} align="right" />
              <div className="grid place-items-center">
                <div className="h-14 w-14 sm:h-20 sm:w-20 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm grid place-items-center shadow-[0_0_40px_oklch(0.82_0.15_88/0.35)]">
                  <span className="font-serif italic text-primary text-xl sm:text-3xl">vs</span>
                </div>
              </div>
              <TeamBadge name={p.teamB} align="left" />
            </div>
          ) : (
            <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-4xl">
              {p.title}
            </h1>
          )}

          {/* Fact strip */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl">
            <FactChip icon={<Calendar className="h-3.5 w-3.5" />} label="Date" value={p.date} />
            <FactChip icon={<MapPin className="h-3.5 w-3.5" />} label="Venue" value={p.venue} />
            <FactChip icon={<Trophy className="h-3.5 w-3.5" />} label="Format" value={p.format} />
            {p.extra ? (
              <FactChip icon={<Target className="h-3.5 w-3.5" />} label="Info" value={p.extra} />
            ) : (
              <FactChip icon={<Flame className="h-3.5 w-3.5" />} label="Status" value="Upcoming" />
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/$page"
              params={{ page: "register" }}
              className="btn-gold btn-gold-hover px-6 py-3 rounded-full inline-flex items-center gap-2 text-sm font-semibold"
            >
              <Zap className="h-4 w-4" /> Get your Lotus365 ID
            </Link>
            <Link
              to="/schedule"
              className="px-6 py-3 rounded-full gold-border text-primary hover:bg-primary/10 text-sm font-semibold inline-flex items-center gap-2"
            >
              <ChevronRight className="h-4 w-4 rotate-180" /> Back to schedule
            </Link>
          </div>
        </div>
      </section>

      <AiOverview
        summary={p.aiOverview}
        points={(p.bettingTips && p.bettingTips.length > 0
          ? p.bettingTips
          : p.matchDetails.map((r) => `${r.label}: ${r.value}`)
        ).slice(0, 4)}
      />
      <div className="pb-12 md:pb-16" />

      {/* Body with sticky sidebar */}
      <main className="mx-auto max-w-[1200px] px-4 sm:px-8 py-14">
        <div className="grid lg:grid-cols-[1fr_320px] gap-10">
          <div className="space-y-12 min-w-0">
            {/* AI Match Overview */}
            <Card icon={<Sparkles className="h-4 w-4" />} eyebrow="AI Match Overview" title={hasTeamB ? `${p.teamA} vs ${p.teamB} — the story so far` : `${p.title} — the story so far`}>
              <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.06] via-primary/[0.02] to-transparent p-5 sm:p-6">
                <div className="absolute -top-3 left-5 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.2em] font-bold">
                  AI Insight
                </div>
                <p className="text-foreground/95 leading-relaxed">{p.aiOverview}</p>
              </div>
            </Card>

            {/* Match Details */}
            <Card icon={<Calendar className="h-4 w-4" />} eyebrow="Match Details" title="Everything at a glance">
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-0 rounded-2xl border border-primary/15 overflow-hidden">
                {p.matchDetails.map((row, i) => (
                  <div
                    key={row.label}
                    className={`flex items-start justify-between gap-4 px-5 py-3.5 ${i % 2 === 0 ? "bg-primary/[0.04]" : "bg-primary/[0.02]"}`}
                  >
                    <span className="text-[10px] uppercase tracking-[0.2em] text-primary/80 font-semibold">{row.label}</span>
                    <span className="text-sm text-right text-foreground/90 font-medium">{row.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Prediction */}
            <Card
              icon={<TrendingUp className="h-4 w-4" />}
              eyebrow={p.sport === "tennis" ? "Prediction & Markets" : "Who will win today's match?"}
              title={p.prediction.heading}
            >
              <p className="text-foreground/95 leading-relaxed">{p.prediction.body}</p>
              {p.prediction.rows && p.prediction.rows.length > 0 && (
                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  {p.prediction.rows.map((row) => (
                    <div key={row.label} className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/[0.08] to-transparent px-4 py-3.5">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-primary/80 font-semibold">{row.label}</div>
                      <div className="mt-1.5 font-serif text-lg text-foreground/95">{row.value}</div>
                    </div>
                  ))}
                </div>
              )}
            </Card>

            {/* Key players */}
            <Card
              icon={<Users className="h-4 w-4" />}
              eyebrow="Key Players to Watch"
              title={p.sport === "tennis" ? "Player storylines that matter" : "Match-winners on both sides"}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                {p.keyPlayers.map((pl) => (
                  <div
                    key={pl.name}
                    className="group relative rounded-2xl border border-primary/15 bg-card/40 p-5 hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 border border-primary/30 grid place-items-center font-serif text-primary text-sm font-bold">
                        {initials(pl.name)}
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-primary/80 font-semibold">{pl.role}</div>
                        <div className="mt-0.5 font-serif text-lg leading-tight">{pl.name}</div>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-foreground/90 leading-relaxed">{pl.note}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Projected scoreline */}
            <Card
              icon={<Target className="h-4 w-4" />}
              eyebrow={
                p.sport === "cricket"
                  ? "Projected scoreline & over-by-over"
                  : p.sport === "football"
                  ? "Projected score, HT/FT & goal markets"
                  : "Predicted score & set markets"
              }
              title={p.scorelineHeading}
            >
              <p className="text-foreground/95 leading-relaxed">{p.scorelineBody}</p>
              <ul className="mt-6 rounded-2xl border border-primary/15 overflow-hidden divide-y divide-primary/10">
                {p.scorelineRows.map((row, i) => (
                  <li
                    key={row.label}
                    className={`flex items-center justify-between px-5 py-3.5 ${i % 2 === 0 ? "bg-primary/[0.05]" : "bg-primary/[0.02]"}`}
                  >
                    <span className="text-[10px] uppercase tracking-[0.2em] text-primary/80 font-semibold">{row.label}</span>
                    <span className="text-sm text-foreground/95 text-right font-medium">{row.value}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* About teams */}
            <Card
              icon={<BookOpen className="h-4 w-4" />}
              eyebrow={p.sport === "tennis" ? "About this round" : hasTeamB ? `About ${p.teamA} vs ${p.teamB}` : "About this match"}
              title={p.sport === "tennis" ? `Round context — ${p.title}` : "Head-to-head & recent form"}
            >
              <div className="rounded-2xl border border-primary/15 bg-card/30 p-5 sm:p-6">
                <p className="text-foreground/95 leading-relaxed whitespace-pre-line">{p.aboutTeams}</p>
              </div>
            </Card>

            {/* Betting markets */}
            <Card icon={<Trophy className="h-4 w-4" />} eyebrow="Popular Betting Markets" title="Where the action is on Lotus365">
              <div className="grid sm:grid-cols-2 gap-4">
                {p.bettingMarkets.map((m) => (
                  <div
                    key={m.name}
                    className="rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.05] to-transparent p-5 hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-primary">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <div className="font-serif text-lg text-foreground">{m.name}</div>
                    </div>
                    <p className="mt-2 text-sm text-foreground/90 leading-relaxed">{m.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Betting tips */}
            <Card
              icon={<Target className="h-4 w-4" />}
              eyebrow={`Betting Tips for ${hasTeamB ? `${p.teamA} vs ${p.teamB}` : p.title}`}
              title="Sharpen your bets, not your losses"
            >
              <ol className="space-y-3">
                {p.bettingTips.map((tip, i) => (
                  <li
                    key={i}
                    className="flex gap-4 rounded-xl border border-primary/10 bg-primary/[0.02] p-4"
                  >
                    <span className="shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-[0_4px_16px_oklch(0.82_0.15_88/0.35)]">
                      {i + 1}
                    </span>
                    <span className="text-sm text-foreground/95 leading-relaxed pt-1">{tip}</span>
                  </li>
                ))}
              </ol>
            </Card>

            {/* Why bet */}
            <Card icon={<Shield className="h-4 w-4" />} eyebrow="Why bet on Lotus365" title="Trusted by 2M+ Indian punters since 2016">
              <ul className="grid sm:grid-cols-2 gap-3">
                {p.whyBet.map((w, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-primary/15 bg-primary/[0.03] p-4 text-sm text-foreground/95"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Related matches */}
            {p.relatedItems.length > 0 && (
              <Card icon={<Calendar className="h-4 w-4" />} eyebrow={p.relatedItemsHeading} title="Don't miss these next">
                <div className="grid sm:grid-cols-2 gap-3">
                  {p.relatedItems.map((r, i) => (
                    <a
                      key={i}
                      href={r.href}
                      className="group rounded-2xl border border-primary/15 bg-card/40 p-5 hover:border-primary/40 hover:bg-card/60 transition-colors block"
                    >
                      <div className="font-serif text-base leading-snug group-hover:text-primary transition-colors">{r.title}</div>
                      <div className="mt-1 text-xs text-foreground/95">{r.subtitle}</div>
                      <div className="mt-3 text-[11px] uppercase tracking-[0.2em] text-primary font-semibold inline-flex items-center gap-1">
                        View details <ChevronRight className="h-3 w-3" />
                      </div>
                    </a>
                  ))}
                </div>
              </Card>
            )}

            {/* Guides & blogs */}
            {p.guidesAndBlogs.length > 0 && (
              <Card icon={<BookOpen className="h-4 w-4" />} eyebrow="Related Guides & Blogs" title="Read up before you bet">
                <div className="grid sm:grid-cols-2 gap-3">
                  {p.guidesAndBlogs.map((g) => (
                    <Link
                      key={g.slug}
                      to={g.kind === "guide" ? "/betting-guides/$slug" : "/blog/$slug"}
                      params={{ slug: g.slug }}
                      className="rounded-xl border border-primary/15 bg-primary/[0.03] p-4 hover:border-primary/40 transition-colors flex items-center justify-between gap-3"
                    >
                      <span className="text-sm text-foreground/95">{g.title}</span>
                      <ChevronRight className="h-4 w-4 text-primary shrink-0" />
                    </Link>
                  ))}
                </div>
              </Card>
            )}
          </div>

          {/* Sticky sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/[0.08] via-primary/[0.02] to-transparent p-5">
                <div className="text-[10px] uppercase tracking-[0.28em] text-primary font-semibold">Quick summary</div>
                <div className="mt-3 font-serif text-xl leading-tight">
                  {hasTeamB ? `${p.teamA} vs ${p.teamB}` : p.title}
                </div>
                <dl className="mt-4 space-y-2.5 text-sm">
                  <SidebarRow label="Date" value={p.date} />
                  <SidebarRow label="Venue" value={p.venue} />
                  <SidebarRow label="Format" value={p.format} />
                  {p.extra && <SidebarRow label="Info" value={p.extra} />}
                </dl>
              </div>

              <Link
                to="/$page"
                params={{ page: "register" }}
                className="btn-gold btn-gold-hover w-full px-5 py-3.5 rounded-2xl inline-flex items-center justify-center gap-2 text-sm font-semibold"
              >
                <Zap className="h-4 w-4" /> Get your Lotus365 ID
              </Link>

              <div className="rounded-2xl border border-primary/15 bg-card/40 p-5">
                <div className="text-[10px] uppercase tracking-[0.28em] text-primary/80 font-semibold">Why Lotus365</div>
                <ul className="mt-3 space-y-2 text-xs text-foreground/95">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Instant UPI deposits</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-primary" /> 3-minute payouts</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-primary" /> 24/7 WhatsApp support</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Trusted since 2016</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <RelatedContent currentPath="" heading="Keep exploring Lotus365" subheading="Popular guides, real player stories and hub pages fans open next." />
      <SiteFooter />
    </div>
  );
}

function TeamBadge({ name, align }: { name: string; align: "left" | "right" }) {
  return (
    <div className={`flex ${align === "right" ? "flex-row-reverse text-right" : "flex-row text-left"} items-center gap-3 sm:gap-5 min-w-0`}>
      <div className="shrink-0 h-16 w-16 sm:h-24 sm:w-24 rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/25 via-primary/5 to-transparent grid place-items-center shadow-[0_10px_40px_oklch(0.82_0.15_88/0.15)]">
        <span className="font-serif text-primary text-lg sm:text-2xl font-bold tracking-wider">
          {initials(name)}
        </span>
      </div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-[0.24em] text-primary/70 font-semibold">Team</div>
        <div className="mt-0.5 font-serif text-2xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight truncate">
          {name}
        </div>
      </div>
    </div>
  );
}

function FactChip({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-primary/20 bg-background/40 backdrop-blur-sm px-4 py-3">
      <div className="flex items-center gap-1.5 text-primary/80">
        {icon}
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">{label}</span>
      </div>
      <div className="mt-1 text-sm font-medium text-foreground/95 line-clamp-2 leading-snug">{value}</div>
    </div>
  );
}

function SidebarRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-primary/10 pb-2 last:border-b-0 last:pb-0">
      <dt className="text-[10px] uppercase tracking-[0.2em] text-primary/70 font-semibold">{label}</dt>
      <dd className="text-xs text-foreground/90 text-right font-medium">{value}</dd>
    </div>
  );
}

function Card({
  eyebrow,
  title,
  icon,
  children,
}: {
  eyebrow: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <section>
      <div className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.28em] text-primary font-semibold">
        <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-primary/15 border border-primary/30 text-primary">
          {icon}
        </span>
        {eyebrow}
      </div>
      <h2 className="mt-3 font-serif text-2xl sm:text-3xl leading-tight tracking-tight">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
