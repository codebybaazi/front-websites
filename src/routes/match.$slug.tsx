import { createFileRoute, Link, notFound, redirect, useParams } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, MapPin, Trophy, Swords, Star, 
  ChevronRight, Zap, Target, TrendingUp, Users, 
  BarChart3, ShieldCheck, ArrowLeft,
  Flame, Sparkles, Activity, AlertCircle, Info,
  BookOpen, ExternalLink, ArrowRight
} from 'lucide-react';
import { useMemo } from 'react';
import { findMatchBySlug, getCanonicalMatchSlug } from '@/utils/slugify';
import { AIOverview } from '@/components/AIOverview';
import { FAQSection } from '@/components/FAQSection';
import { CRICKET_SCHEDULE_DATA } from '@/lib/cricket-schedule';
import { FOOTBALL_SCHEDULE_DATA } from '@/lib/sports-data';
import { TENNIS_SCHEDULE_DATA } from '@/lib/tennis-schedule';
import { getKeyWatchPlayers } from '@/utils/cricket-players';
import { blogArticles } from '@/lib/blog-data';
import { CricketMatchDetail } from '@/components/CricketMatchDetail';
import {
  getCricketPageSeo,
  getCricketProjection,
  getWhyBetReasons,
  isCricketFixture,
  parseMatchTeams,
} from '@/utils/match-projections';
import { getRelatedFixtures, getRelatedMatchBlogs } from '@/utils/related-fixtures';
import { getMatchFaqs } from '@/utils/match-faqs';
import { FootballMatchDetail } from '@/components/FootballMatchDetail';
import { TennisMatchDetail } from '@/components/TennisMatchDetail';
import {
  getFootballFaqs,
  getFootballMatchModel,
  getFootballPageSeo,
  getRelatedFootballBlogs,
  isFootballFixture,
} from '@/utils/football-match';
import {
  getRelatedTennisBlogs,
  getRelatedTennisFixtures,
  getTennisFaqs,
  getTennisMatchModel,
  getTennisPageSeo,
  isTennisFixture,
} from '@/utils/tennis-match';
import { matchDocumentHead, missingMatchHead } from '@/utils/match-seo';

export const Route = createFileRoute('/match/$slug')({
  component: MatchDetailPage,
  beforeLoad: ({ params }) => {
    const slug = params.slug;
    const matchData = findMatchBySlug(slug);
    if (!matchData) throw notFound();
    const canonical = getCanonicalMatchSlug(matchData);
    if (slug !== canonical) {
      throw redirect({
        to: '/match/$slug',
        params: { slug: canonical },
        replace: true,
      });
    }
  },
  head: ({ match }) => {
    const slug = (match.params as { slug: string }).slug;
    const matchData = findMatchBySlug(slug);
    if (!matchData) return missingMatchHead();

    if (isFootballFixture(matchData.seriesName, FOOTBALL_SCHEDULE_DATA)) {
      return matchDocumentHead(getFootballPageSeo({
        slug,
        event: matchData.event,
        seriesName: matchData.seriesName,
        venue: matchData.venue,
        date: matchData.date,
        time: matchData.time,
      }), slug);
    }

    if (isCricketFixture(matchData.seriesName, CRICKET_SCHEDULE_DATA)) {
      return matchDocumentHead(getCricketPageSeo({
        slug,
        event: matchData.event,
        seriesName: matchData.seriesName,
        venue: matchData.venue,
        date: matchData.date,
        time: matchData.time,
      }), slug);
    }

    if (isTennisFixture(matchData.seriesName, TENNIS_SCHEDULE_DATA)) {
      return matchDocumentHead(getTennisPageSeo({
        slug,
        event: matchData.event,
        seriesName: matchData.seriesName,
        venue: matchData.venue,
        date: matchData.date,
        time: matchData.time,
      }), slug);
    }

    return matchDocumentHead({
      title: `${matchData.event} | Fairplay`,
      description: `${matchData.event} at ${matchData.venue}. Open this fixture on a Fairplay ID after you fund with UPI.`,
      keywords: `${matchData.event}, Fairplay betting, ${matchData.seriesName}`,
    }, slug);
  }
});

function MatchDetailPage() {
  const { slug } = useParams({ from: '/match/$slug' });
  const match = useMemo(() => findMatchBySlug(slug), [slug]);

  const derived = useMemo(() => {
    if (!match) return null;
    const { teamA, teamB } = parseMatchTeams(match.event);
    const cricketMatch = isCricketFixture(match.seriesName, CRICKET_SCHEDULE_DATA);
    const footballMatch = isFootballFixture(match.seriesName, FOOTBALL_SCHEDULE_DATA);
    const tennisMatch = isTennisFixture(match.seriesName, TENNIS_SCHEDULE_DATA);
    const projection = cricketMatch
      ? getCricketProjection({
          slug,
          event: match.event,
          seriesName: match.seriesName,
          venue: match.venue,
          teamA,
          teamB,
        })
      : null;
    const football = footballMatch
      ? getFootballMatchModel({
          slug,
          event: match.event,
          seriesName: match.seriesName,
          venue: match.venue,
          date: match.date,
          time: match.time,
        })
      : null;
    const tennis = tennisMatch
      ? getTennisMatchModel({
          slug,
          event: match.event,
          seriesName: match.seriesName,
          venue: match.venue,
          date: match.date,
          time: match.time,
        })
      : null;
    const watchPlayers = cricketMatch && projection
      ? getKeyWatchPlayers({
          slug,
          teamA,
          teamB,
          format: projection.format,
          surface: projection.surface,
          venue: match.venue,
        })
      : [];
    const whyBet = cricketMatch && projection
      ? getWhyBetReasons({
          slug,
          event: match.event,
          seriesName: match.seriesName,
          venue: match.venue,
          teamA,
          teamB,
          format: projection.format,
          formatLabel: projection.formatLabel,
          surface: projection.surface,
          winA: projection.winA,
          winB: projection.winB,
          totalA: projection.totalA,
          totalB: projection.totalB,
        })
      : [
          "Same Fairplay ID as IPL — fund with UPI before you open this book.",
          "Match winner and in-play sit on the exchange; confirm the price on the slip.",
          "Withdrawals usually settle within 180 minutes of the official result.",
          "WhatsApp the Fairplay ID if a market looks closed or a payout is delayed.",
        ];
    const relatedFixtures = tennisMatch
      ? getRelatedTennisFixtures({
          slug,
          seriesName: match.seriesName,
          venue: match.venue,
        })
      : getRelatedFixtures({
      slug,
      seriesName: match.seriesName,
      event: match.event,
      venue: match.venue,
      schedule: cricketMatch
        ? CRICKET_SCHEDULE_DATA
        : FOOTBALL_SCHEDULE_DATA.some((series) => series.series === match.seriesName)
          ? FOOTBALL_SCHEDULE_DATA
          : TENNIS_SCHEDULE_DATA,
    });
    const relatedBlogs = cricketMatch && projection
      ? getRelatedMatchBlogs(blogArticles, {
          slug,
          event: match.event,
          seriesName: match.seriesName,
          teamA,
          teamB,
          format: projection.format,
        })
      : football && footballMatch
        ? getRelatedFootballBlogs(blogArticles, {
            slug,
            event: match.event,
            seriesName: match.seriesName,
            teamA: football.teamA,
            teamB: football.teamB,
          })
      : tennis
        ? getRelatedTennisBlogs(blogArticles, {
            slug,
            event: match.event,
            seriesName: match.seriesName,
            playerA: tennis.playerA,
            playerB: tennis.playerB,
          })
      : blogArticles.filter((a) => a.category === "Guide" || a.category === "Events").slice(0, 3);
    const faqs = cricketMatch && projection
      ? getMatchFaqs({
          slug,
          event: match.event,
          seriesName: match.seriesName,
          venue: match.venue,
          time: match.time,
          date: match.date,
          teamA,
          teamB,
          format: projection.format,
          formatLabel: projection.formatLabel,
          surface: projection.surface,
          winA: projection.winA,
          winB: projection.winB,
          totalA: projection.totalA,
          totalB: projection.totalB,
          players: watchPlayers,
        })
      : football
        ? getFootballFaqs({
            slug,
            event: match.event,
            teamA: football.teamA,
            teamB: football.teamB,
            stage: football.stage,
            venue: match.venue,
            predictedWinner: football.predictedWinner,
            confidence: football.confidence,
            btts: football.btts,
            over25: football.over25,
          })
      : tennis
        ? getTennisFaqs({
            slug,
            event: match.event,
            venue: match.venue,
            playerA: tennis.playerA,
            playerB: tennis.playerB,
            round: tennis.round,
            tournament: tennis.tournament,
            predictedWinner: tennis.predictedWinner,
            confidence: tennis.confidence,
            predictedScore: tennis.predictedScore,
            setSpread: tennis.setSpread,
          })
      : [
          { q: `How do I secure a verified Fairplay ID for ${match.event}?`, a: `Connect with our elite support desk on WhatsApp. We provide instant verification and your premium trading ID within 180 seconds.` },
          { q: `Are the AI win probabilities for ${match.event} real-time?`, a: `Yes, our neural engine updates every 30 seconds based on live market liquidity, player momentum, and surface telemetry.` },
          { q: `What is the settlement timeline for ${match.event}?`, a: `Fairplay Elite members enjoy guaranteed settlement within 180 minutes post-match completion, directly to your primary exchange wallet.` },
          { q: `Can I access professional market depth for this match?`, a: `Absolutely. The Fairplay trading terminal provides full liquidity ladders for all major cricket fixtures globally.` },
        ];
    return {
      teamA,
      teamB,
      cricketMatch,
      footballMatch,
      tennisMatch,
      football,
      tennis,
      projection,
      watchPlayers,
      whyBet,
      relatedFixtures,
      relatedBlogs,
      faqs,
    };
  }, [match, slug]);

  if (!match || !derived) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
        <h1 className="text-4xl font-black italic uppercase text-white mb-4">Match Not Found</h1>
        <Link to="/schedule" className="text-primary font-bold flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Schedule
        </Link>
      </div>
    );
  }

  const { teamA, teamB, projection, watchPlayers, whyBet, relatedFixtures, relatedBlogs, faqs, footballMatch, football, cricketMatch, tennisMatch, tennis } = derived;
  const winProbabilityA = projection?.winA ?? 52;
  const winProbabilityB = projection?.winB ?? 48;

  if (footballMatch && football) {
    return (
      <FootballMatchDetail
        match={match}
        model={football}
        relatedFixtures={relatedFixtures}
        relatedBlogs={relatedBlogs}
        faqs={faqs}
      />
    );
  }

  if (cricketMatch && projection) {
    return (
      <CricketMatchDetail
        match={match}
        teamA={teamA}
        teamB={teamB}
        projection={projection}
        watchPlayers={watchPlayers}
        whyBet={whyBet}
        relatedFixtures={relatedFixtures}
        relatedBlogs={relatedBlogs}
        faqs={faqs}
      />
    );
  }

  if (tennisMatch && tennis) {
    return (
      <TennisMatchDetail
        match={match}
        model={tennis}
        relatedFixtures={relatedFixtures}
        relatedBlogs={relatedBlogs}
        faqs={faqs}
      />
    );
  }

  return (
    <div className="flex flex-col bg-background text-foreground min-h-screen">
      {/* Hero Header */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.08),transparent_70%)]" />
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <Link to="/schedule" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-primary transition-colors mb-10">
            <ArrowLeft className="w-3 h-3" /> Back to Schedule
          </Link>
          
          <div className="flex flex-col items-center text-center space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 text-primary text-[10px] font-black uppercase tracking-[0.4em]"
            >
              <div className="h-[2px] w-8 bg-primary" />
              {match.seriesName}
              <div className="h-[2px] w-8 bg-primary" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-5xl md:text-8xl font-black italic uppercase text-white tracking-tighter leading-[0.85]"
            >
              {teamA} <br />
              <span className="text-primary not-italic">VS</span> <br />
              {teamB}
              <span className="mt-6 block text-lg md:text-2xl not-italic font-black tracking-[0.12em] text-primary/90">
                {match.seriesName} prediction
              </span>
            </motion.h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> {match.date || 'TBD'}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> {match.time || '19:30 IST'}</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> {match.venue}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container max-w-6xl mx-auto px-4 py-16 space-y-24">
        
        {/* AI Overview */}
        <AIOverview 
          title={`${teamA} vs ${teamB} — match summary`}
          content={projection
            ? `${teamA} vs ${teamB} at ${match.venue}. Format: ${projection.formatLabel}. Fairplay lean uses ${teamA} ${projection.totalA} / ${teamB} ${projection.totalB} as a scoring band, not a promise. Check the live slip before you send.`
            : `Open ${teamA} vs ${teamB} on Fairplay after you fund the wallet. Confirm the price on the slip. Withdrawals usually follow about 180 minutes after the official result.`
          }
        />

        {/* Prediction Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card/30 border border-white/5 rounded-[3rem] p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
            <h2 className="text-2xl font-black italic uppercase tracking-tight mb-8 flex items-center gap-3">
              <Target className="w-6 h-6 text-primary" /> Win Probability
            </h2>
            <div className="space-y-8">
              {[ {name: teamA, p: winProbabilityA}, {name: teamB, p: winProbabilityB} ].map(t => (
                <div key={t.name} className="space-y-3">
                  <div className="flex justify-between text-[12px] font-black uppercase tracking-widest">
                    <span className="text-white/80">{t.name}</span>
                    <span className="text-primary">{t.p}%</span>
                  </div>
                  <div className="h-4 w-full bg-black/50 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: `${t.p}%` }} 
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full ${t.p > 50 ? 'bg-gradient-to-r from-primary/80 to-primary' : 'bg-white/20'}`} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card/30 border border-white/5 rounded-[3rem] p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
            <h2 className="text-2xl font-black italic uppercase tracking-tight mb-8 flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-primary" /> Projected Scoreline
            </h2>
            <div className="space-y-4">
              {projection ? (
                <table className="w-full text-center text-[11px] font-black uppercase tracking-widest text-white/40">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="pb-4 text-left">Match Phase</th>
                      <th className="pb-4 text-right max-w-[28%] truncate">{teamA}</th>
                      <th className="pb-4 text-right max-w-[28%] truncate">{teamB}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projection.phases.map((row) => (
                      <tr key={row.phase} className="border-b border-white/5 group/tr hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 text-left text-white/70 font-bold">{row.phase}</td>
                        <td className="py-4 text-right text-primary font-black">{row.teamA}</td>
                        <td className="py-4 text-right text-white font-black">{row.teamB}</td>
                      </tr>
                    ))}
                    <tr className="border-b border-white/5">
                      <td className="py-4 text-left text-white font-black">
                        {projection.format === "TEST" ? "Day 1 Total" : "1st Innings"}
                      </td>
                      <td className="py-4 text-right text-primary font-black">{projection.totalA}</td>
                      <td className="py-4 text-right text-white font-black">{projection.totalB}</td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <table className="w-full text-center text-[12px] font-black uppercase tracking-widest text-white/40">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="pb-4 text-left">Match Phase</th>
                      <th className="pb-4 text-right">Proj. Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-4 text-left text-white/70 font-bold">{teamA}</td>
                      <td className="py-4 text-right text-primary font-black">See live board</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 text-left text-white/70 font-bold">{teamB}</td>
                      <td className="py-4 text-right text-primary font-black">See live board</td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          </motion.section>
        </div>

        {watchPlayers.length > 0 && (
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="h-[2px] w-12 bg-primary" />
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Impact Analysis</span>
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white">
                KEY PLAYERS <span className="text-primary not-italic">TO WATCH</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {watchPlayers.map((player, i) => (
              <motion.div 
                key={`${player.team}-${player.name}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card/20 border border-white/5 rounded-[2.5rem] p-8 hover:border-primary/40 transition-all group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-3">
                    {player.team} · {player.roleLabel}
                  </div>
                  <div className="text-xl font-black italic uppercase text-white mb-6 leading-tight">
                    {player.name}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[9px] font-black uppercase text-white/40 tracking-widest">
                      <span>Performance Index</span>
                      <span className="text-primary">{player.impact}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${player.impact}%` }}
                        className="h-full bg-primary shadow-[0_0_10px_rgba(255,100,0,0.5)]" 
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-gradient-to-br from-primary/15 to-transparent border border-primary/20 rounded-[3rem] p-10"
          >
            <h2 className="text-2xl font-black italic uppercase tracking-tight mb-8 flex items-center gap-3">
              <Zap className="w-7 h-7 text-primary" /> WHY BET THIS MATCH?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[14px] text-white/70 font-medium leading-relaxed italic">
              <div className="space-y-4">
                {whyBet.slice(0, 2).map((line) => (
                  <p key={line} className="border-l-2 border-primary/40 pl-6">{line}</p>
                ))}
              </div>
              <div className="space-y-4">
                {whyBet.slice(2, 4).map((line) => (
                  <p key={line} className="border-l-2 border-primary/40 pl-6">{line}</p>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card/40 border border-white/10 rounded-[3rem] p-10"
          >
            <h2 className="text-xl font-black italic uppercase tracking-tight mb-8 flex items-center gap-3">
              <Info className="w-6 h-6 text-primary" /> MATCH INTEL
            </h2>
            <dl className="space-y-6">
              {[
                { label: 'SERIES', value: match.seriesName },
                { label: 'VENUE', value: match.venue },
                { label: 'FORMAT', value: projection?.formatLabel ?? 'LIMITED OVERS' },
                { label: 'SURFACE', value: projection?.surface ?? 'BALANCED / DRY' }
              ].map(item => (
                <div key={item.label} className="flex justify-between items-end border-b border-white/5 pb-2">
                  <dt className="text-white/30 uppercase text-[10px] font-black tracking-widest">{item.label}</dt>
                  <dd className="font-black text-white text-[13px]">{item.value}</dd>
                </div>
              ))}
            </dl>
          </motion.section>
        </div>

        {relatedFixtures.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter text-white">
              OTHER <span className="text-primary not-italic">UPCOMING FIXTURES</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedFixtures.map((m) => (
              <Link 
                key={m.slug}
                to="/match/$slug"
                params={{ slug: m.slug }}
                className="bg-card/20 border border-white/5 rounded-3xl p-6 hover:border-primary/40 hover:bg-card/30 transition-all group"
              >
                <div className="text-[9px] font-black uppercase text-primary mb-3 tracking-widest line-clamp-1">{m.seriesName}</div>
                <div className="text-[15px] font-black italic uppercase text-white mb-4 line-clamp-2">{m.event}</div>
                <div className="flex items-center justify-between text-[11px] font-bold text-white/40 gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <Calendar className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{m.date || m.venue}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </section>
        )}

        {relatedBlogs.length > 0 && (
        <section className="bg-white/[0.02] border border-white/5 rounded-[3.5rem] p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter text-white mb-12">
              RELATED <span className="text-primary not-italic">GUIDES & BLOGS</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((blog) => (
                <Link 
                  key={blog.slug}
                  to="/posts/$slug"
                  params={{ slug: blog.slug }}
                  className="group block space-y-4"
                >
                  <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary/40 transition-colors">
                    <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h3 className="text-lg font-black italic uppercase text-white group-hover:text-primary transition-colors leading-tight line-clamp-2">
                    {blog.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                    READ ANALYSIS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        )}

        <FAQSection 
          title="Frequently Asked Questions"
          faqs={faqs}
        />
      </div>
    </div>
  );
}
