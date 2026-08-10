export interface CricketSeries {
  name: string;
  details: string;
  matches: CricketMatch[];
}

export interface CricketMatch {
  match: string;
  teams: string;
  date: string;
  venue: string;
  details: string;
  slug: string;
  homeTeam?: string;
  awayTeam?: string;
  format?: string;
  tournament?: string;
  city?: string;
  country?: string;
  headToHead?: string;
  homeRecentForm?: string;
  awayRecentForm?: string;
  keyPlayersHome?: string[];
  keyPlayersAway?: string[];
  bettingTips?: string[];
  relatedMatches?: string[];
  detailedNarrative?: string;
  pitchReport?: string;
  tacticalPreview?: string;
  winProbHome?: number;
  winProbAway?: number;
  predictionInsight?: string;
  projectedScoreHome?: string;
  projectedScoreAway?: string;
}

export const getCricketMatch = (slug: string) => {
  for (const series of cricketFixtures) {
    const match = series.matches.find(m => m.slug === slug);
    if (match) return match;
  }
  return null;
};

export const cricketFixtures: CricketSeries[] = [
  {
    name: "Afghanistan tour of Ireland, 2026",
    details: "5 ODIs · Aug 2026",
    matches: [
      {
        match: "1st ODI",
        teams: "Ireland vs Afghanistan",
        date: "Wed, 5 Aug 2026",
        venue: "Bready Cricket Club",
        details: "Match Details",
        slug: "ire-vs-afg-1st-odi-2026",
        homeTeam: "Ireland",
        awayTeam: "Afghanistan",
        format: "ODI",
        tournament: "Afghanistan tour of Ireland, 2026",
        city: "Bready",
        country: "Northern Ireland",
        headToHead: "In their last 5 ODIs, Afghanistan leads 4-1 against Ireland.",
        homeRecentForm: "L, W, L, L, L",
        awayRecentForm: "W, W, L, W, W",
        keyPlayersHome: ["Paul Stirling", "Joshua Little", "Harry Tector"],
        keyPlayersAway: ["Rashid Khan", "Rahmanullah Gurbaz", "Fazalhaq Farooqi"],
        bettingTips: [
          "Afghanistan's spin duo expected to dominate the middle overs.",
          "High probability of a high-scoring match if Ireland bats first.",
          "Rashid Khan to take 2+ wickets looks like a value bet."
        ],
        detailedNarrative: "The 1st ODI between Ireland and Afghanistan at Bready is set to be a tactical masterclass. Ireland, playing in familiar home conditions, will look to exploit the early morning moisture, while Afghanistan's spin-heavy attack is expected to come alive as the pitch dries out. Our AI models predict a high-intensity start with the powerplay determining the momentum for the rest of the game.",
        pitchReport: "Bready is known for its balanced nature. Expect some grass cover to help the seamers early on, transitioning into a batting paradise by the second session.",
        tacticalPreview: "Ireland must neutralize Rashid Khan's middle overs to stand a chance. Afghanistan will likely use aggressive field placements during the first 10 to force errors.",
        winProbHome: 45,
        winProbAway: 55,
        predictionInsight: "Afghanistan's superior spin variety gives them the edge on a drying pitch. If they bat first and post 280+, Ireland might struggle to chase under pressure.",
        projectedScoreHome: "240-260",
        projectedScoreAway: "275-295"
      },
      {
        match: "2nd ODI",
        teams: "Ireland vs Afghanistan",
        date: "Fri, 7 Aug 2026",
        venue: "Bready Cricket Club",
        details: "Match Details",
        slug: "ire-vs-afg-2nd-odi-2026",
        homeTeam: "Ireland",
        awayTeam: "Afghanistan",
        format: "ODI",
        tournament: "Afghanistan tour of Ireland, 2026",
        city: "Bready",
        country: "Northern Ireland",
        headToHead: "Afghanistan maintained their dominance in the 1st ODI, leading the series 1-0.",
        homeRecentForm: "L, L, W, L, L",
        awayRecentForm: "W, W, W, L, W",
        keyPlayersHome: ["Harry Tector", "Curtis Campher", "George Dockrell"],
        keyPlayersAway: ["Mohammad Nabi", "Mujeeb Ur Rahman", "Azmatullah Omarzai"],
        bettingTips: [
          "Expect Ireland to push harder in the 2nd game to stay in the series.",
          "Mujeeb Ur Rahman's powerplay overs will be critical.",
          "High probability of 280+ total score if pitch remains dry."
        ],
        detailedNarrative: "The 2nd ODI continues at Bready with Afghanistan holding the lead. Ireland showed promise in the first encounter but needs more stability in their top order. Afghanistan's balanced side looks hard to beat, but home advantage for Ireland could play a role if they can execute their plans better under pressure.",
        pitchReport: "Slightly more wear on the surface compared to the 1st ODI. Spinners might get more assistance as the match progresses.",
        tacticalPreview: "Ireland needs to bowl straighter to curb the Afghan openers. Afghanistan will rely on their middle-order to stabilize if early wickets fall.",
        winProbHome: 40,
        winProbAway: 60,
        predictionInsight: "Afghanistan is likely to stick to their winning formula. Ireland needs a miracle from their middle order to level the series.",
        projectedScoreHome: "235-255",
        projectedScoreAway: "270-290"
      },
      {
        match: "3rd ODI",
        teams: "Ireland vs Afghanistan",
        date: "Mon, 10 Aug 2026",
        venue: "Civil Service Cricket Club",
        details: "Match Details",
        slug: "ire-vs-afg-3rd-odi-2026",
        homeTeam: "Ireland",
        awayTeam: "Afghanistan",
        format: "ODI",
        tournament: "Afghanistan tour of Ireland, 2026",
        city: "Belfast",
        country: "Northern Ireland",
        headToHead: "The series moves to Belfast where the bounce favors Ireland's seamers.",
        homeRecentForm: "W, L, L, W, L",
        awayRecentForm: "L, W, W, W, W",
        keyPlayersHome: ["Mark Adair", "Andy Balbirnie", "Lorcan Tucker"],
        keyPlayersAway: ["Gulbadin Naib", "Hashmatullah Shahidi", "Rashid Khan"],
        bettingTips: [
          "Seam movement under overcast Belfast skies will be key.",
          "Mark Adair to take 2+ wickets is a strong probability.",
          "Afghanistan's middle order depth to be tested on a livelier track."
        ],
        detailedNarrative: "The 3rd ODI in Belfast introduces new dynamics with a livelier pitch. Ireland's seamers will relish the extra bounce, while Afghanistan's batters will need to adjust their technique quickly. With the series in a critical phase, the tactical battle between Ireland's pace and Afghanistan's resilience will be the highlight.",
        pitchReport: "Civil Service Cricket Club offers a hard surface with good carry. Pace bowlers will find joy in the early overs, but it levels out to a high-scoring deck later.",
        tacticalPreview: "Ireland will likely stack their pace attack. Afghanistan might consider bringing in an extra seamer to exploit the Belfast conditions.",
        winProbHome: 52,
        winProbAway: 48,
        predictionInsight: "Ireland has a statistical advantage in Belfast due to the bounce. If Joshua Little finds his rhythm early, Afghanistan could be in trouble.",
        projectedScoreHome: "270-290",
        projectedScoreAway: "255-275"
      },
      {
        match: "4th ODI",
        teams: "Ireland vs Afghanistan",
        date: "Wed, 12 Aug 2026",
        venue: "Civil Service Cricket Club",
        details: "Match Details",
        slug: "ire-vs-afg-4th-odi-2026",
        homeTeam: "Ireland",
        awayTeam: "Afghanistan",
        format: "ODI",
        tournament: "Afghanistan tour of Ireland, 2026",
        city: "Belfast",
        country: "Northern Ireland",
        headToHead: "Historically, the 4th match of the series sees tactical shifts from both sides.",
        homeRecentForm: "L, W, L, L, W",
        awayRecentForm: "W, L, W, W, W",
        keyPlayersHome: ["Paul Stirling", "Joshua Little", "Craig Young"],
        keyPlayersAway: ["Rahmanullah Gurbaz", "Rashid Khan", "Fazalhaq Farooqi"],
        bettingTips: [
          "Gurbaz to score 50+ runs is a value bet based on current form.",
          "Spinners might find less grip if there's evening dew.",
          "Toss winner should consider bowling first to exploit early moisture."
        ],
        detailedNarrative: "Entering the 4th ODI, the tactical shifts become evident. Both teams are now familiar with each other's weaknesses. Ireland's reliance on Paul Stirling's start and Afghanistan's middle-order stability under Rashid Khan's leadership will define this encounter. The match promises high volatility in the betting markets as momentum swings frequently.",
        pitchReport: "The pitch is expected to slow down slightly for the 4th game. Change of pace will be a vital weapon for the bowlers.",
        tacticalPreview: "Afghanistan will look to target the Ireland tail early. Ireland needs to rotate strike effectively against the Afghan spinners in the middle phase.",
        winProbHome: 47,
        winProbAway: 53,
        predictionInsight: "Afghanistan's ability to adapt to slower tracks gives them a slight edge here. Watch for Rahmanullah Gurbaz's intent in the first powerplay.",
        projectedScoreHome: "250-270",
        projectedScoreAway: "265-285"
      },
      {
        match: "5th ODI",
        teams: "Ireland vs Afghanistan",
        date: "Fri, 14 Aug 2026",
        venue: "Civil Service Cricket Club",
        details: "Match Details",
        slug: "ire-vs-afg-5th-odi-2026",
        homeTeam: "Ireland",
        awayTeam: "Afghanistan",
        format: "ODI",
        tournament: "Afghanistan tour of Ireland, 2026",
        city: "Belfast",
        country: "Northern Ireland",
        headToHead: "Final series deciders often see high-pressure performances.",
        homeRecentForm: "W, L, W, L, L",
        awayRecentForm: "L, W, W, W, W",
        keyPlayersHome: ["Harry Tector", "Mark Adair", "Lorcan Tucker"],
        keyPlayersAway: ["Rashid Khan", "Fazalhaq Farooqi", "Mohammad Nabi"],
        bettingTips: [
          "Look for 'Man of the Match' odds for Rashid Khan in deciders.",
          "High stakes lead to cautious batting in the first 10 overs.",
          "Premium ID users should watch for live session movements around 35th over."
        ],
        detailedNarrative: "The series decider in Belfast brings everything to the table. Both teams have shown flashes of brilliance, and this final clash at the Civil Service Cricket Club will test their temperament. With the series potentially on the line, expect conservative strategies early on, followed by an explosive finish in the death overs.",
        pitchReport: "Belfast pitches tend to stay true throughout the 100 overs. Good bounce for pace bowlers and a fast outfield will reward aggressive stroke play.",
        tacticalPreview: "High-pressure decider requires experience. Both teams will lean on their veterans to stabilize the innings during crucial transitions.",
        winProbHome: 50,
        winProbAway: 50,
        predictionInsight: "A true 50-50 clash. The team that handles the pressure of the final 10 overs better will likely take the series trophy home.",
        projectedScoreHome: "265-285",
        projectedScoreAway: "260-280"
      }
    ]
  },
  {
    name: "India tour of Zimbabwe, 2026",
    details: "3 T20Is · Jul 2026",
    matches: [
      {
        match: "1st T20I",
        teams: "Zimbabwe vs India",
        date: "Jul 23, 2026",
        venue: "Harare Sports Club",
        details: "Match Details",
        slug: "zim-vs-ind-1st-t20i-2026",
        homeTeam: "Zimbabwe",
        awayTeam: "India",
        format: "T20I",
        tournament: "India tour of Zimbabwe, 2026",
        city: "Harare",
        country: "Zimbabwe",
        headToHead: "India has won all previous 5 T20Is against Zimbabwe.",
        homeRecentForm: "L, L, W, L, L",
        awayRecentForm: "W, W, W, W, W",
        keyPlayersHome: ["Sikandar Raza", "Blessing Muzarabani", "Ryan Burl"],
        keyPlayersAway: ["Shubman Gill", "Yashasvi Jaiswal", "Arshdeep Singh"],
        bettingTips: [
          "India is strong favorites; look for player performance markets.",
          "Sikandar Raza to be the top run-scorer for Zimbabwe.",
          "High probability of 180+ score if India bats first."
        ]
      },
      {
        match: "2nd T20I",
        teams: "Zimbabwe vs India",
        date: "Jul 25, 2026",
        venue: "Harare Sports Club",
        details: "Match Details",
        slug: "zim-vs-ind-2nd-t20i-2026",
        homeTeam: "Zimbabwe",
        awayTeam: "India",
        format: "T20I",
        tournament: "India tour of Zimbabwe, 2026",
        city: "Harare",
        country: "Zimbabwe",
        headToHead: "India continues their dominance with a 1-0 lead in the series.",
        homeRecentForm: "L, L, L, W, L",
        awayRecentForm: "W, W, W, W, W",
        keyPlayersHome: ["Sikandar Raza", "Richard Ngarava"],
        keyPlayersAway: ["Shubman Gill", "Ravi Bishnoi"],
        bettingTips: [
          "India to win the toss and bowl first if there is overcast condition.",
          "Bishnoi to be the top wicket-taker in the middle overs.",
          "High intensity game expected with 170+ par score."
        ],
        detailedNarrative: "The 2nd T20I at Harare will test Zimbabwe's resilience. After a tough first game, the hosts need their veterans to step up. India's young brigade looks unstoppable, but the Harare surface can be unpredictable if the sun stays out. Our AI expects a dominant show from the Indian top order.",
        pitchReport: "Flatter than the 1st T20I. Batsmen will enjoy the true bounce, but spinners might find some grip late in the evening.",
        tacticalPreview: "Zimbabwe must target the powerplay to restrict India. India will likely use their spinners to choke the run rate in the middle overs.",
        winProbHome: 35,
        winProbAway: 65,
        predictionInsight: "India's bench strength gives them a massive advantage. If they bat first, expect a 190+ total.",
        projectedScoreHome: "155-170",
        projectedScoreAway: "185-205"
      },
      {
        match: "3rd T20I",
        teams: "Zimbabwe vs India",
        date: "Jul 26, 2026",
        venue: "Harare Sports Club",
        details: "Match Details",
        slug: "zim-vs-ind-3rd-t20i-2026",
        homeTeam: "Zimbabwe",
        awayTeam: "India",
        format: "T20I",
        tournament: "India tour of Zimbabwe, 2026",
        city: "Harare",
        country: "Zimbabwe",
        headToHead: "Final match of the T20 series; India looking for a clean sweep.",
        homeRecentForm: "L, L, L, L, W",
        awayRecentForm: "W, W, W, W, W",
        keyPlayersHome: ["Blessing Muzarabani", "Sikandar Raza"],
        keyPlayersAway: ["Yashasvi Jaiswal", "Arshdeep Singh"],
        bettingTips: [
          "Jaiswal to score 30+ runs in the powerplay.",
          "Muzarabani to exploit the morning moisture if Zimbabwe bowls first.",
          "Clean sweep for India is the most likely outcome."
        ],
        detailedNarrative: "The T20I series concludes at the Harare Sports Club. India has been clinical, and Zimbabwe is playing for pride. The tactical focus for India will be testing their depth, while Zimbabwe aims to find a winning combination before the ODIs. A high-scoring game is on the cards.",
        pitchReport: "Worn out slightly due to continuous play. Change of pace will be effective for bowlers.",
        tacticalPreview: "India might rest some seniors. Zimbabwe will look to attack the newcomers early on.",
        winProbHome: 30,
        winProbAway: 70,
        predictionInsight: "India's superior tactical execution makes them the favorites. A comfortable win for the Men in Blue is predicted.",
        projectedScoreHome: "150-165",
        projectedScoreAway: "190-210"
      }
    ]
  },
  {
    name: "Pakistan tour of West Indies, 2026",
    details: "2 Tests · Jul – Aug 2026",
    matches: [
      {
        match: "4-Day Warm-up match",
        teams: "Pakistan vs West Indies Select XI",
        date: "Jul 18, 2026",
        venue: "Tarouba, Trinidad, Brian Lara Stadium",
        details: "Match Details",
        slug: "wi-vs-pak-warmup-2026",
        homeTeam: "West Indies Select XI",
        awayTeam: "Pakistan",
        format: "Warm-up",
        tournament: "Pakistan tour of West Indies, 2026"
      },
      {
        match: "1st Test",
        teams: "West Indies vs Pakistan",
        date: "Jul 25-29, 2026",
        venue: "Tarouba, Trinidad, Brian Lara Stadium",
        details: "Match Details",
        slug: "wi-vs-pak-1st-test-2026",
        homeTeam: "West Indies",
        awayTeam: "Pakistan",
        format: "Test",
        tournament: "Pakistan tour of West Indies, 2026"
      },
      {
        match: "2nd Test",
        teams: "West Indies vs Pakistan",
        date: "Aug 02-06, 2026",
        venue: "Port of Spain, Trinidad, Queen's Park Oval",
        details: "Match Details",
        slug: "wi-vs-pak-2nd-test-2026",
        homeTeam: "West Indies",
        awayTeam: "Pakistan",
        format: "Test",
        tournament: "Pakistan tour of West Indies, 2026"
      }
    ]
  },
  {
    name: "Bangladesh tour of Zimbabwe, 2026",
    details: "1 Test, 3 ODIs, 3 T20Is · Jun – Jul 2026",
    matches: [
      {
        match: "Only Test",
        teams: "Bangladesh vs Zimbabwe",
        date: "Jun 28, 2026",
        venue: "Harare Sports Club",
        details: "Match Details",
        slug: "zim-vs-ban-test-2026",
        homeTeam: "Zimbabwe",
        awayTeam: "Bangladesh",
        format: "Test",
        tournament: "Bangladesh tour of Zimbabwe, 2026",
        city: "Harare",
        country: "Zimbabwe",
        headToHead: "In recent Tests, Bangladesh has a slight advantage over Zimbabwe.",
        homeRecentForm: "L, D, L, W, L",
        awayRecentForm: "W, L, D, W, L",
        keyPlayersHome: ["Craig Ervine", "Sean Williams"],
        keyPlayersAway: ["Shakib Al Hasan", "Litton Das"],
        bettingTips: [
          "Expect a slow pitch favoring spinners from Day 3.",
          "Draw is a high-probability outcome if weather intervenes.",
          "Shakib Al Hasan to be the leading wicket-taker."
        ]
      },
      {
        match: "1st ODI",
        teams: "Zimbabwe vs Bangladesh",
        date: "Jul 06, 2026",
        venue: "Harare Sports Club",
        details: "Match Details",
        slug: "zim-vs-ban-1st-odi-2026",
        homeTeam: "Zimbabwe",
        awayTeam: "Bangladesh",
        format: "ODI",
        tournament: "Bangladesh tour of Zimbabwe, 2026",
        city: "Harare",
        country: "Zimbabwe",
        headToHead: "Bangladesh has a strong record in Zimbabwe, winning 4 of their last 5 ODIs here.",
        homeRecentForm: "L, W, L, L, L",
        awayRecentForm: "W, W, L, W, W",
        keyPlayersHome: ["Craig Ervine", "Blessing Muzarabani"],
        keyPlayersAway: ["Shakib Al Hasan", "Litton Das"],
        bettingTips: [
          "Shakib Al Hasan to score 40+ and take 1+ wicket.",
          "Early moisture will help Muzarabani; look for early wickets.",
          "Bangladesh are favorites due to their spin variety."
        ],
        detailedNarrative: "The ODI series kicks off in Harare. Zimbabwe's top order must find a way to tackle the spin of Shakib and Mehidy. Bangladesh looks balanced, but the bouncy Harare track might favor Zimbabwe's pacers if they hit the right lengths. A high-stakes encounter for both teams.",
        pitchReport: "Fresh wicket with some green tinge. Will assist seamers in the first hour.",
        tacticalPreview: "Zimbabwe will look to bowl short at the Bangladeshi openers. Bangladesh will rely on rotating strike during the middle overs.",
        winProbHome: 42,
        winProbAway: 58,
        predictionInsight: "Bangladesh's experience in 50-over cricket gives them the edge. They should chase comfortably if the target is under 260.",
        projectedScoreHome: "245-265",
        projectedScoreAway: "270-290"
      },
      {
        match: "2nd ODI",
        teams: "Zimbabwe vs Bangladesh",
        date: "Jul 09, 2026",
        venue: "Harare Sports Club",
        details: "Match Details",
        slug: "zim-vs-ban-2nd-odi-2026",
        homeTeam: "Zimbabwe",
        awayTeam: "Bangladesh",
        format: "ODI",
        tournament: "Bangladesh tour of Zimbabwe, 2026",
        city: "Harare",
        country: "Zimbabwe",
        headToHead: "The series is reaching a boiling point; Bangladesh led 1-0 after the first game.",
        homeRecentForm: "L, L, W, L, L",
        awayRecentForm: "W, W, W, L, W",
        keyPlayersHome: ["Sean Williams", "Richard Ngarava"],
        keyPlayersAway: ["Mushfiqur Rahim", "Mustafizur Rahman"],
        bettingTips: [
          "Mustafizur's cutters will be deadly in the death overs.",
          "Sean Williams is a good bet for top run-scorer for Zimbabwe.",
          "Over 260 runs likely in the first innings."
        ],
        detailedNarrative: "As the 2nd ODI approaches, Zimbabwe needs a win to keep the series alive. The pitch has settled, making it a batting-friendly deck. Bangladesh's depth in both departments makes them a tough nut to crack, but Zimbabwe's senior players like Sean Williams are due for a big one.",
        pitchReport: "Hard surface, good for batting. Par score will be around 280.",
        tacticalPreview: "Bangladesh will look to exploit the reverse swing later in the innings. Zimbabwe needs to build solid partnerships in the middle order.",
        winProbHome: 40,
        winProbAway: 60,
        predictionInsight: "Bangladesh's clinical approach in death overs often decides the game. If they bat first, they are set to post a big total.",
        projectedScoreHome: "250-270",
        projectedScoreAway: "285-305"
      },
      {
        match: "3rd ODI",
        teams: "Zimbabwe vs Bangladesh",
        date: "Jul 11, 2026",
        venue: "Harare Sports Club",
        details: "Match Details",
        slug: "zim-vs-ban-3rd-odi-2026",
        homeTeam: "Zimbabwe",
        awayTeam: "Bangladesh",
        format: "ODI",
        tournament: "Bangladesh tour of Zimbabwe, 2026",
        city: "Harare",
        country: "Zimbabwe",
        headToHead: "Series decider or dead rubber, the rivalry remains intense.",
        homeRecentForm: "W, L, L, W, L",
        awayRecentForm: "L, W, W, W, W",
        keyPlayersHome: ["Sikandar Raza", "Blessing Muzarabani"],
        keyPlayersAway: ["Mehidy Hasan Miraz", "Najmul Hossain Shanto"],
        bettingTips: [
          "Mehidy Hasan Miraz to be the X-factor with both bat and ball.",
          "Sikandar Raza to play a captain's knock.",
          "Look for session markets around the 15th over."
        ],
        detailedNarrative: "The final ODI at Harare Sports Club. Both teams have shown tactical brilliance. The focus will be on the middle-order battle. Zimbabwe's spinners need to match the quality of their counterparts to restrict a free-flowing Bangladeshi batting lineup.",
        pitchReport: "Dry surface, will assist spinners from the start. Batting might get difficult in the second half.",
        tacticalPreview: "Spin from both ends after the powerplay. Zimbabwe must avoid losing wickets in clusters.",
        winProbHome: 45,
        winProbAway: 55,
        predictionInsight: "A close contest expected. The team that handles the spin better in the middle overs will prevail.",
        projectedScoreHome: "240-260",
        projectedScoreAway: "255-275"
      },
      {
        match: "1st T20I",
        teams: "Zimbabwe vs Bangladesh",
        date: "Jul 15, 2026",
        venue: "Queens Sports Club",
        details: "Match Details",
        slug: "zim-vs-ban-1st-t20i-2026",
        homeTeam: "Zimbabwe",
        awayTeam: "Bangladesh",
        format: "T20I",
        tournament: "Bangladesh tour of Zimbabwe, 2026",
        city: "Bulawayo",
        country: "Zimbabwe",
        headToHead: "T20 record is quite even between these two sides in recent years.",
        homeRecentForm: "W, L, W, L, L",
        awayRecentForm: "L, W, W, L, W",
        keyPlayersHome: ["Sikandar Raza", "Ryan Burl"],
        keyPlayersAway: ["Towhid Hridoy", "Rishad Hossain"],
        bettingTips: [
          "Towhid Hridoy to be a high-impact player in the middle order.",
          "Sikandar Raza to take 2+ wickets.",
          "Total match sixes over 10."
        ],
        detailedNarrative: "The T20 action moves to Bulawayo. The Queens Sports Club usually provides more bounce. Zimbabwe's aggressive T20 approach under Sikandar Raza's leadership will be tested by a youthful and energetic Bangladeshi side. Expect a fast-paced game with lots of boundaries.",
        pitchReport: "Good bounce and carry. High scoring ground with fast outfields.",
        tacticalPreview: "Zimbabwe will look to attack from Ball 1. Bangladesh will use their pace variations to control the flow.",
        winProbHome: 48,
        winProbAway: 52,
        predictionInsight: "Bulawayo conditions slightly favor Zimbabwe's power hitters. A very tight game is expected.",
        projectedScoreHome: "175-190",
        projectedScoreAway: "170-185"
      },
      {
        match: "2nd T20I",
        teams: "Bangladesh vs Zimbabwe",
        date: "Jul 17, 2026",
        venue: "Queens Sports Club",
        details: "Match Details",
        slug: "zim-vs-ban-2nd-t20i-2026",
        homeTeam: "Zimbabwe",
        awayTeam: "Bangladesh",
        format: "T20I",
        tournament: "Bangladesh tour of Zimbabwe, 2026",
        city: "Bulawayo",
        country: "Zimbabwe",
        headToHead: "Momentum shift is key in back-to-back T20Is.",
        homeRecentForm: "L, W, L, W, L",
        awayRecentForm: "W, L, W, W, L",
        keyPlayersHome: ["Sean Williams", "Luke Jongwe"],
        keyPlayersAway: ["Shoriful Islam", "Soumya Sarkar"],
        bettingTips: [
          "Shoriful Islam's opening spell will be crucial.",
          "Sean Williams to stabilize the innings if early wickets fall.",
          "Total match fours over 25."
        ],
        detailedNarrative: "The 2nd T20I in Bulawayo. Teams are now familiar with the bounce. Bangladesh might rotate their bowlers to manage workloads. Zimbabwe needs more consistency from their top three to post a challenging total. The tactical battle in the powerplay will set the tone.",
        pitchReport: "Similar to the 1st T20I, but maybe a bit slower. Batting first is a good option.",
        tacticalPreview: "Bangladesh will look to bowl more cutters. Zimbabwe needs to be wary of the off-pace deliveries.",
        winProbHome: 45,
        winProbAway: 55,
        predictionInsight: "Bangladesh's superior bowling variations give them a slight edge in a high-scoring ground.",
        projectedScoreHome: "165-180",
        projectedScoreAway: "175-195"
      },
      {
        match: "3rd T20I",
        teams: "Zimbabwe vs Bangladesh",
        date: "Jul 19, 2026",
        venue: "Queens Sports Club",
        details: "Match Details",
        slug: "zim-vs-ban-3rd-t20i-2026",
        homeTeam: "Zimbabwe",
        awayTeam: "Bangladesh",
        format: "T20I",
        tournament: "Bangladesh tour of Zimbabwe, 2026",
        city: "Bulawayo",
        country: "Zimbabwe",
        headToHead: "Final match of the tour; pride and series standings at stake.",
        homeRecentForm: "W, L, L, L, W",
        awayRecentForm: "L, W, W, W, W",
        keyPlayersHome: ["Sikandar Raza", "Richard Ngarava"],
        keyPlayersAway: ["Shakib Al Hasan", "Mustafizur Rahman"],
        bettingTips: [
          "Shakib Al Hasan to perform in high-pressure games.",
          "Sikandar Raza to contribute in all three departments.",
          "A thrilling finish likely in the final over."
        ],
        detailedNarrative: "The tour of Bangladesh in Zimbabwe concludes with this T20I. Both teams have had their moments. The series has been a test of temperament. Zimbabwe's home crowd in Bulawayo will be expecting a grand finale. Bangladesh will look to end on a high before their next assignment.",
        pitchReport: "A bit dry, may assist spinners more than the previous games.",
        tacticalPreview: "High-pressure game, both teams will look for early wickets. Zimbabwe must capitalize on the powerplay.",
        winProbHome: 50,
        winProbAway: 50,
        predictionInsight: "A true 50-50 game. The team that holds their nerve in the death overs will take the series trophy.",
        projectedScoreHome: "170-185",
        projectedScoreAway: "170-185"
      }
    ]
  },
  {
    name: "India tour of England, 2026",
    details: "5 T20Is, 3 ODIs · Jul 2026",
    matches: [
      {
        match: "1st T20I",
        teams: "India vs England",
        date: "Jul 01, 2026",
        venue: "Chester-le-Street, Riverside Ground",
        details: "Match Details",
        slug: "eng-vs-ind-1st-t20i-2026",
        homeTeam: "England",
        awayTeam: "India",
        format: "T20I",
        tournament: "India tour of England, 2026",
        city: "Durham",
        country: "England",
        headToHead: "In T20Is in England, the record is balanced at 3-3.",
        homeRecentForm: "W, L, W, W, L",
        awayRecentForm: "W, W, W, W, W",
        keyPlayersHome: ["Jos Buttler", "Jofra Archer", "Harry Brook"],
        keyPlayersAway: ["Suryakumar Yadav", "Jasprit Bumrah", "Hardik Pandya"],
        bettingTips: [
          "Expect a high-scoring encounter on a flat Durham track.",
          "Jos Buttler's performance in powerplay will be key.",
          "India's death bowling is statistically superior."
        ]
      },
      {
        match: "2nd T20I",
        teams: "India vs England",
        date: "Jul 04, 2026",
        venue: "Emirates Old Trafford",
        details: "Match Details",
        slug: "eng-vs-ind-2nd-t20i-2026",
        homeTeam: "England",
        awayTeam: "India",
        format: "T20I",
        tournament: "India tour of England, 2026",
        city: "Manchester",
        country: "England",
        headToHead: "Old Trafford has seen some high-scoring T20Is between these two giants.",
        homeRecentForm: "L, W, L, W, W",
        awayRecentForm: "W, W, W, W, L",
        keyPlayersHome: ["Liam Livingstone", "Adil Rashid", "Jos Buttler"],
        keyPlayersAway: ["Virat Kohli", "Jasprit Bumrah", "Suryakumar Yadav"],
        bettingTips: [
          "Adil Rashid to be the most economical bowler.",
          "Virat Kohli to score a half-century.",
          "High total expected in the first 6 overs."
        ],
        detailedNarrative: "The series moves to Manchester. Old Trafford usually assists spinners more than other English tracks. England's middle order power vs India's spin twins will be the highlight. Both teams are looking to dominate the rankings, making every ball a tactical contest.",
        pitchReport: "Dry surface with some turn. Par score is around 175.",
        tacticalPreview: "India will use Bumrah to target Buttler early. England will rely on Livingstone's big hitting against the spinners.",
        winProbHome: 45,
        winProbAway: 55,
        predictionInsight: "India's recent T20 form is superior. They are expected to win a close contest.",
        projectedScoreHome: "170-185",
        projectedScoreAway: "180-200"
      },
      {
        match: "3rd T20I",
        teams: "England vs India",
        date: "Jul 07, 2026",
        venue: "Trent Bridge",
        details: "Match Details",
        slug: "eng-vs-ind-3rd-t20i-2026",
        homeTeam: "England",
        awayTeam: "India",
        format: "T20I",
        tournament: "India tour of England, 2026",
        city: "Nottingham",
        country: "England",
        headToHead: "Trent Bridge is a paradise for batsmen; expect boundaries galore.",
        homeRecentForm: "W, L, W, L, W",
        awayRecentForm: "W, W, W, L, W",
        keyPlayersHome: ["Harry Brook", "Mark Wood"],
        keyPlayersAway: ["Hardik Pandya", "Rishabh Pant"],
        bettingTips: [
          "Total match sixes to exceed 15.",
          "Mark Wood to bowl the fastest delivery of the match.",
          "Rishabh Pant to play an aggressive cameo."
        ],
        detailedNarrative: "The 3rd T20I at Trent Bridge, one of the smallest grounds in England. This is where records are broken. India's aggressive approach will meet England's relentless power-hitting. The tactical focus will be on the death bowling, as no score is safe here.",
        pitchReport: "Extremely flat. Short boundaries. 200+ is definitely on the cards.",
        tacticalPreview: "Bowlers must use their variations and slower balls to survive. Powerplay score will be crucial.",
        winProbHome: 50,
        winProbAway: 50,
        predictionInsight: "A true toss-up. The team batting second has a significant advantage due to the small boundaries.",
        projectedScoreHome: "205-225",
        projectedScoreAway: "210-230"
      },
      {
        match: "4th T20I",
        teams: "India vs England",
        date: "Jul 09, 2026",
        venue: "County Ground",
        details: "Match Details",
        slug: "eng-vs-ind-4th-t20i-2026",
        homeTeam: "England",
        awayTeam: "India",
        format: "T20I",
        tournament: "India tour of England, 2026",
        city: "Bristol",
        country: "England",
        headToHead: "Bristol's unique dimensions often lead to interesting tactical battles.",
        homeRecentForm: "L, W, L, W, L",
        awayRecentForm: "W, L, W, W, W",
        keyPlayersHome: ["Will Jacks", "Chris Jordan"],
        keyPlayersAway: ["Kuldeep Yadav", "Rohit Sharma"],
        bettingTips: [
          "Kuldeep Yadav to take 3+ wickets.",
          "Rohit Sharma to provide a flying start.",
          "England to chase successfully if target is under 180."
        ],
        detailedNarrative: "The 4th T20I at Bristol. The series is heating up. England might bring in some fresh faces. India's spin attack led by Kuldeep will be the main threat for the English batsmen. The tactical use of the short straight boundaries will be key for the hitters.",
        pitchReport: "Slowish surface. Will help slow-ball specialists.",
        tacticalPreview: "India will pack the middle overs with spin. England will look to maximize the powerplay.",
        winProbHome: 48,
        winProbAway: 52,
        predictionInsight: "India's spin dominance gives them a slight edge on this surface.",
        projectedScoreHome: "160-175",
        projectedScoreAway: "170-185"
      },
      {
        match: "5th T20I",
        teams: "England vs India",
        date: "Jul 11, 2026",
        venue: "The Rose Bowl",
        details: "Match Details",
        slug: "eng-vs-ind-5th-t20i-2026",
        homeTeam: "England",
        awayTeam: "India",
        format: "T20I",
        tournament: "India tour of England, 2026",
        city: "Southampton",
        country: "England",
        headToHead: "The series finale at the Rose Bowl. All eyes on the trophy.",
        homeRecentForm: "W, L, W, L, W",
        awayRecentForm: "L, W, W, W, W",
        keyPlayersHome: ["Sam Curran", "Jos Buttler"],
        keyPlayersAway: ["Jasprit Bumrah", "Suryakumar Yadav"],
        bettingTips: [
          "Jos Buttler to be the man of the match.",
          "Bumrah to bowl a maiden over in the powerplay.",
          "High intensity game with both teams at full strength."
        ],
        detailedNarrative: "The T20 series reaches its climax at Southampton. Both teams have shown why they are the best in the world. The Rose Bowl offers a fair contest between bat and ball. The tactical focus will be on the captaincy decisions under pressure. Expect a grand finale.",
        pitchReport: "Balanced pitch. Good for both seamers and batsmen.",
        tacticalPreview: "High-pressure finale. Both teams will rely on their most experienced players.",
        winProbHome: 52,
        winProbAway: 48,
        predictionInsight: "England's home advantage in a pressure game might just tip the scales in their favor.",
        projectedScoreHome: "185-200",
        projectedScoreAway: "180-195"
      },
      {
        match: "1st ODI",
        teams: "England vs India",
        date: "Jul 14, 2026",
        venue: "Edgbaston",
        details: "Match Details",
        slug: "eng-vs-ind-1st-odi-2026",
        homeTeam: "England",
        awayTeam: "India",
        format: "ODI",
        tournament: "India tour of England, 2026",
        city: "Birmingham",
        country: "England",
        headToHead: "The ODI series starts at the historic Edgbaston.",
        homeRecentForm: "W, W, L, W, L",
        awayRecentForm: "W, L, W, W, W",
        keyPlayersHome: ["Ben Stokes", "Jofra Archer"],
        keyPlayersAway: ["Virat Kohli", "Mohammed Shami"],
        bettingTips: [
          "Ben Stokes to perform in his comeback ODI series.",
          "Virat Kohli to cross 13,000 ODI runs.",
          "Match winner to be the team batting second."
        ],
        detailedNarrative: "Switching formats to the 50-over game. Edgbaston is known for its electric atmosphere. England's aggressive ODI style meets India's balanced approach. The tactical focus will be on the middle-order consolidation and the use of the new ball in English conditions.",
        pitchReport: "Good pace and carry. Will assist swing bowlers early on.",
        tacticalPreview: "India will look to bowl first and exploit the morning swing. England will look to post a 350+ total.",
        winProbHome: 55,
        winProbAway: 45,
        predictionInsight: "England's familiarity with ODI conditions gives them a slight advantage in the opener.",
        projectedScoreHome: "320-350",
        projectedScoreAway: "310-330"
      },
      {
        match: "2nd ODI",
        teams: "India vs England",
        date: "Jul 16, 2026",
        venue: "Sophia Gardens",
        details: "Match Details",
        slug: "eng-vs-ind-2nd-odi-2026",
        homeTeam: "England",
        awayTeam: "India",
        format: "ODI",
        tournament: "India tour of England, 2026",
        city: "Cardiff",
        country: "Wales",
        headToHead: "Sophia Gardens has been a happy hunting ground for India in the past.",
        homeRecentForm: "L, W, W, L, W",
        awayRecentForm: "W, W, L, W, W",
        keyPlayersHome: ["Joe Root", "Reece Topley"],
        keyPlayersAway: ["KL Rahul", "Mohammed Siraj"],
        bettingTips: [
          "Joe Root to be the anchor for England.",
          "Siraj to take 3+ wickets with the new ball.",
          "Total match score to exceed 550."
        ],
        detailedNarrative: "The 2nd ODI at Cardiff. The ground is known for its long boundaries. India's middle order will be tested by the height and bounce of Reece Topley. England's tactical approach will revolve around Joe Root's ability to rotate strike. A crucial game for both sides.",
        pitchReport: "Slow and low. Will help spinners and medium pacers.",
        tacticalPreview: "India will use their spinners to control the middle overs. England will look to attack the pacers.",
        winProbHome: 48,
        winProbAway: 52,
        predictionInsight: "India's balanced middle order is expected to master the Cardiff conditions.",
        projectedScoreHome: "280-300",
        projectedScoreAway: "295-315"
      },
      {
        match: "3rd ODI",
        teams: "England vs India",
        date: "Jul 19, 2026",
        venue: "Lord's",
        details: "Match Details",
        slug: "eng-vs-ind-3rd-odi-2026",
        homeTeam: "England",
        awayTeam: "India",
        format: "ODI",
        tournament: "India tour of England, 2026",
        city: "London",
        country: "England",
        headToHead: "The grand finale at the Home of Cricket, Lord's.",
        homeRecentForm: "W, L, W, W, L",
        awayRecentForm: "L, W, W, L, W",
        keyPlayersHome: ["Jos Buttler", "Jofra Archer"],
        keyPlayersAway: ["Rohit Sharma", "Jasprit Bumrah"],
        bettingTips: [
          "Jofra Archer to take 4+ wickets.",
          "Rohit Sharma to score a century at Lord's.",
          "Clean sweep or series decider, Lord's always delivers."
        ],
        detailedNarrative: "The ODI series concludes at the historic Lord's Cricket Ground. The atmosphere is unmatched. The tactical battle will be between the best bowling attack in the world (India) and the most aggressive batting lineup (England). A legendary finish to a great tour.",
        pitchReport: "Slope will play a major role for the bowlers. True batting surface.",
        tacticalPreview: "High-pressure finale at the Home of Cricket. Both teams at full strength.",
        winProbHome: 50,
        winProbAway: 50,
        predictionInsight: "A true 50-50 game. The team that masters the Lord's slope will take the series trophy.",
        projectedScoreHome: "300-320",
        projectedScoreAway: "300-320"
      }
    ]
  },
  {
    name: "New Zealand tour of West Indies, 2026",
    details: "5 ODIs · Jul 2026",
    matches: [
      {
        match: "1st ODI",
        teams: "New Zealand vs West Indies",
        date: "Jul 11, 2026",
        venue: "Providence Stadium",
        details: "Match Details",
        slug: "wi-vs-nz-1st-odi-2026",
        homeTeam: "West Indies",
        awayTeam: "New Zealand",
        format: "ODI",
        tournament: "New Zealand tour of West Indies, 2026",
        city: "Guyana",
        country: "West Indies",
        headToHead: "West Indies have historically been strong at home against the Black Caps.",
        homeRecentForm: "W, L, W, L, L",
        awayRecentForm: "L, W, W, W, L",
        keyPlayersHome: ["Shai Hope", "Alzarri Joseph"],
        keyPlayersAway: ["Kane Williamson", "Trent Boult"],
        bettingTips: [
          "Shai Hope to anchor the West Indies innings.",
          "Trent Boult to be lethal in the powerplay.",
          "Slow pitch expected in Guyana."
        ],
        detailedNarrative: "New Zealand's tour of the Caribbean begins in Guyana. The Providence Stadium is known for its slow and low nature, which will challenge the New Zealand batsmen. West Indies' pace battery led by Alzarri Joseph will look to exploit the conditions. A series where tactical patience will be rewarded.",
        pitchReport: "Slow surface, will help spinners and change-of-pace bowlers.",
        tacticalPreview: "New Zealand must avoid early wickets. West Indies will rely on their spin duo to squeeze the middle overs.",
        winProbHome: 45,
        winProbAway: 55,
        predictionInsight: "New Zealand's superior tactical discipline in ODIs makes them favorites despite the tricky surface.",
        projectedScoreHome: "230-250",
        projectedScoreAway: "250-270"
      },
      {
        match: "2nd ODI",
        teams: "West Indies vs New Zealand",
        date: "Jul 13, 2026",
        venue: "Providence Stadium",
        details: "Match Details",
        slug: "wi-vs-nz-2nd-odi-2026",
        homeTeam: "West Indies",
        awayTeam: "New Zealand",
        format: "ODI",
        tournament: "New Zealand tour of West Indies, 2026",
        city: "Guyana",
        country: "West Indies",
        headToHead: "West Indies looking to bounce back in the second encounter.",
        homeRecentForm: "L, W, L, W, L",
        awayRecentForm: "W, L, W, W, W",
        keyPlayersHome: ["Nicholas Pooran", "Gudakesh Motie"],
        keyPlayersAway: ["Tom Latham", "Mitchell Santner"],
        bettingTips: [
          "Nicholas Pooran to play an aggressive role in the middle order.",
          "Mitchell Santner to be the most economical bowler.",
          "Total match sixes likely to be under 12."
        ],
        detailedNarrative: "The 2nd ODI stays in Guyana. The surface might get even slower. New Zealand's ability to rotate strike will be crucial. West Indies need Pooran to stay at the crease longer. The tactical battle between Santner and the West Indian hitters will define the middle overs.",
        pitchReport: "Dry and dusty. Spinners' paradise.",
        tacticalPreview: "Spin from both ends after the powerplay. West Indies must target the New Zealand middle order early.",
        winProbHome: 40,
        winProbAway: 60,
        predictionInsight: "New Zealand's spin variety (Santner and Sodhi) is perfectly suited for Guyana.",
        projectedScoreHome: "220-240",
        projectedScoreAway: "245-265"
      },
      {
        match: "3rd ODI",
        teams: "West Indies vs New Zealand",
        date: "Jul 16, 2026",
        venue: "Providence Stadium",
        details: "Match Details",
        slug: "wi-vs-nz-3rd-odi-2026",
        homeTeam: "West Indies",
        awayTeam: "New Zealand",
        format: "ODI",
        tournament: "New Zealand tour of West Indies, 2026",
        city: "Guyana",
        country: "West Indies",
        headToHead: "The Guyana leg of the series concludes; high stakes for both teams.",
        homeRecentForm: "W, L, W, L, L",
        awayRecentForm: "L, W, W, W, L",
        keyPlayersHome: ["Brandon King", "Akeal Hosein"],
        keyPlayersAway: ["Daryl Mitchell", "Trent Boult"],
        bettingTips: [
          "Akeal Hosein to be effective on the wearing track.",
          "Daryl Mitchell to be the stabilizer for NZ.",
          "Expect a lower-than-average score if spin dominates."
        ],
        detailedNarrative: "The final game in Guyana. The pitch is showing clear signs of wear, making it a dream for slow bowlers. West Indies need their openers to provide a solid base, while New Zealand's tactical use of their spin resources will be the deciding factor. A game of attrition and mental toughness.",
        pitchReport: "Dry, crumbly surface. Turn and bounce for spinners.",
        tacticalPreview: "Spin heavy strategy for both sides. Batting will be toughest in the middle overs.",
        winProbHome: 45,
        winProbAway: 55,
        predictionInsight: "New Zealand's experience in such conditions gives them a marginal advantage.",
        projectedScoreHome: "210-230",
        projectedScoreAway: "235-255"
      },
      {
        match: "4th ODI",
        teams: "West Indies vs New Zealand",
        date: "Jul 19, 2026",
        venue: "Kensington Oval",
        details: "Match Details",
        slug: "wi-vs-nz-4th-odi-2026",
        homeTeam: "West Indies",
        awayTeam: "New Zealand",
        format: "ODI",
        tournament: "New Zealand tour of West Indies, 2026",
        city: "Bridgetown",
        country: "Barbados",
        headToHead: "The series moves to the historic Kensington Oval with its characteristic bounce.",
        homeRecentForm: "L, W, W, L, W",
        awayRecentForm: "W, L, L, W, L",
        keyPlayersHome: ["Kyle Mayers", "Jason Holder"],
        keyPlayersAway: ["Glenn Phillips", "Matt Henry"],
        bettingTips: [
          "Kyle Mayers to enjoy the bounce at Barbados.",
          "Matt Henry to pick early wickets.",
          "Faster pitch than Guyana; expect more boundaries."
        ],
        detailedNarrative: "A change of scenery and conditions as the teams arrive in Barbados. The Kensington Oval offers more pace and bounce, favoring the fast bowlers and stroke-makers. West Indies will look to use the home support to their advantage, while New Zealand's pace battery will be eager to show their quality on a livelier track.",
        pitchReport: "True bounce, good pace. Best batting deck of the series so far.",
        tacticalPreview: "Teams will return to a pace-heavy attack. Using the short ball effectively will be key.",
        winProbHome: 50,
        winProbAway: 50,
        predictionInsight: "A high-scoring thriller is on the cards. The team winning the toss should bat first.",
        projectedScoreHome: "285-305",
        projectedScoreAway: "290-310"
      },
      {
        match: "5th ODI",
        teams: "West Indies vs New Zealand",
        date: "Jul 21, 2026",
        venue: "Kensington Oval",
        details: "Match Details",
        slug: "wi-vs-nz-5th-odi-2026",
        homeTeam: "West Indies",
        awayTeam: "New Zealand",
        format: "ODI",
        tournament: "New Zealand tour of West Indies, 2026",
        city: "Bridgetown",
        country: "Barbados",
        headToHead: "The final showdown in the Caribbean. A series decider likely.",
        homeRecentForm: "W, L, W, W, L",
        awayRecentForm: "L, W, W, L, W",
        keyPlayersHome: ["Shai Hope", "Alzarri Joseph"],
        keyPlayersAway: ["Kane Williamson", "Trent Boult"],
        bettingTips: [
          "Shai Hope's record at Barbados is exemplary.",
          "Kane Williamson to play a match-winning innings in the decider.",
          "High intensity game; premium ID holders should monitor live odds closely."
        ],
        detailedNarrative: "The tour of the Black Caps in the Caribbean reaches its grand finale at Bridgetown. The series has been a roller-coaster of tactical battles and individual brilliance. In this high-pressure decider, the experience of the senior players like Williamson and Hope will be invaluable. A fitting end to an epic rivalry.",
        pitchReport: "Hard surface with good carry. Will stay true throughout the day.",
        tacticalPreview: "Maximum pressure game. Both teams will rely on their trusted match-winners.",
        winProbHome: 50,
        winProbAway: 50,
        predictionInsight: "A true 50-50 game. The team that wins the tactical battle in the final 10 overs will lift the trophy.",
        projectedScoreHome: "275-295",
        projectedScoreAway: "275-295"
      }
    ]
  },
  {
    name: "ICC Men's T20 World Cup Europe Sub Regional Qualifier B, 2026",
    details: "20 T20s · Jul 2026",
    matches: [
      {
        match: "1st Match",
        teams: "Denmark vs Estonia",
        date: "Jul 08, 2026",
        venue: "Brondby, Svanholm Park",
        details: "Match Details",
        slug: "t20-wc-eur-qual-b-m1"
      },
      {
        match: "2nd Match",
        teams: "Gibraltar vs Belgium",
        date: "Jul 08, 2026",
        venue: "Koge, Koge Cricket Club",
        details: "Match Details",
        slug: "t20-wc-eur-qual-b-m2"
      },
      {
        match: "3rd Match",
        teams: "Hungary vs Norway",
        date: "Jul 08, 2026",
        venue: "Brondby, Svanholm Park",
        details: "Match Details",
        slug: "t20-wc-eur-qual-b-m3"
      },
      {
        match: "4th Match",
        teams: "Serbia vs Romania",
        date: "Jul 08, 2026",
        venue: "Koge, Koge Cricket Club",
        details: "Match Details",
        slug: "t20-wc-eur-qual-b-m4"
      },
      {
        match: "5th Match",
        teams: "Denmark vs Turkey",
        date: "Jul 09, 2026",
        venue: "Koge, Koge Cricket Club",
        details: "Match Details",
        slug: "t20-wc-eur-qual-b-m5"
      },
      {
        match: "6th Match",
        teams: "Estonia vs Norway",
        date: "Jul 09, 2026",
        venue: "Koge, Koge Cricket Club",
        details: "Match Details",
        slug: "t20-wc-eur-qual-b-m6"
      },
      {
        match: "7th Match",
        teams: "Gibraltar vs Romania",
        date: "Jul 10, 2026",
        venue: "Brondby, Svanholm Park",
        details: "Match Details",
        slug: "t20-wc-eur-qual-b-m7"
      },
      {
        match: "8th Match",
        teams: "Hungary vs Estonia",
        date: "Jul 10, 2026",
        venue: "Koge, Koge Cricket Club",
        details: "Match Details",
        slug: "t20-wc-eur-qual-b-m8"
      },
      {
        match: "9th Match",
        teams: "Belgium vs Serbia",
        date: "Jul 10, 2026",
        venue: "Brondby, Svanholm Park",
        details: "Match Details",
        slug: "t20-wc-eur-qual-b-m9"
      },
      {
        match: "10th Match",
        teams: "Turkey vs Norway",
        date: "Jul 10, 2026",
        venue: "Koge, Koge Cricket Club",
        details: "Match Details",
        slug: "t20-wc-eur-qual-b-m10"
      },
      {
        match: "11th Match",
        teams: "Denmark vs Norway",
        date: "Jul 12, 2026",
        venue: "Brondby, Svanholm Park",
        details: "Match Details",
        slug: "t20-wc-eur-qual-b-m11"
      },
      {
        match: "12th Match",
        teams: "Belgium vs Romania",
        date: "Jul 12, 2026",
        venue: "Koge, Koge Cricket Club",
        details: "Match Details",
        slug: "t20-wc-eur-qual-b-m12"
      },
      {
        match: "13th Match",
        teams: "Hungary vs Turkey",
        date: "Jul 12, 2026",
        venue: "Brondby, Svanholm Park",
        details: "Match Details",
        slug: "t20-wc-eur-qual-b-m13"
      },
      {
        match: "14th Match",
        teams: "Serbia vs Gibraltar",
        date: "Jul 12, 2026",
        venue: "Koge, Koge Cricket Club",
        details: "Match Details",
        slug: "t20-wc-eur-qual-b-m14"
      },
      {
        match: "15th Match",
        teams: "Denmark vs Hungary",
        date: "Jul 13, 2026",
        venue: "Brondby, Svanholm Park",
        details: "Match Details",
        slug: "t20-wc-eur-qual-b-m15"
      },
      {
        match: "16th Match",
        teams: "Turkey vs Estonia",
        date: "Jul 13, 2026",
        venue: "Brondby, Svanholm Park",
        details: "Match Details",
        slug: "t20-wc-eur-qual-b-m16"
      },
      {
        match: "7th Place Play-off",
        teams: "Serbia vs Estonia",
        date: "Jul 14, 2026",
        venue: "Koge, Koge Cricket Club",
        details: "Match Details",
        slug: "t20-wc-eur-qual-b-7th"
      },
      {
        match: "5th Place Play-off",
        teams: "Norway vs Gibraltar",
        date: "Jul 14, 2026",
        venue: "Koge, Koge Cricket Club",
        details: "Match Details",
        slug: "t20-wc-eur-qual-b-5th"
      },
      {
        match: "3rd Place Play-off",
        teams: "Hungary vs Belgium",
        date: "Jul 14, 2026",
        venue: "Brondby, Svanholm Park",
        details: "Match Details",
        slug: "t20-wc-eur-qual-b-3rd"
      },
      {
        match: "Final",
        teams: "Denmark vs Romania",
        date: "Jul 14, 2026",
        venue: "Brondby, Svanholm Park",
        details: "Match Details",
        slug: "t20-wc-eur-qual-b-final"
      }
    ]
  },
  {
    name: "West Indies tour of India, 2026",
    details: "3 ODIs, 5 T20Is · Sep – Oct 2026",
    matches: [
      {
        match: "1st ODI",
        teams: "India vs West Indies",
        date: "Sun, 27 Sep 2026",
        venue: "Greenfield International Stadium",
        details: "Match Details",
        slug: "ind-vs-wi-1st-odi-2026",
        homeTeam: "India",
        awayTeam: "West Indies",
        format: "ODI",
        tournament: "West Indies tour of India, 2026",
        city: "Thiruvananthapuram",
        country: "India",
        headToHead: "India have a formidable record against West Indies at home.",
        homeRecentForm: "W, W, W, L, W",
        awayRecentForm: "L, W, L, W, L",
        keyPlayersHome: ["Virat Kohli", "Jasprit Bumrah"],
        keyPlayersAway: ["Shai Hope", "Nicholas Pooran"],
        bettingTips: [
          "India to start as heavy favorites.",
          "Virat Kohli to anchor the innings.",
          "Greenfield pitch to offer some help to the seamers early on."
        ],
        detailedNarrative: "The West Indies tour of India kicks off in the southern tip of the country. India, at full strength, will be a hard side to beat in these conditions. West Indies will need their power hitters to fire early to put pressure on the Indian bowlers. A high-stakes ODI series ahead of the T20s.",
        pitchReport: "Balanced pitch, good carry. Seamers will get some help in the first powerplay.",
        tacticalPreview: "India will look to bat first and set a big total. West Indies will rely on their spinners to control the middle phase.",
        winProbHome: 65,
        winProbAway: 35,
        predictionInsight: "India's overall balance gives them a clear advantage in the opener.",
        projectedScoreHome: "310-330",
        projectedScoreAway: "260-280"
      },
      {
        match: "2nd ODI",
        teams: "India vs West Indies",
        date: "Wed, 30 Sep 2026",
        venue: "Barsapara Cricket Stadium",
        details: "Match Details",
        slug: "ind-vs-wi-2nd-odi-2026",
        homeTeam: "India",
        awayTeam: "West Indies",
        format: "ODI",
        tournament: "West Indies tour of India, 2026",
        city: "Guwahati",
        country: "India",
        headToHead: "Barsapara is known for high-scoring encounters.",
        homeRecentForm: "W, W, W, W, L",
        awayRecentForm: "L, L, W, L, W",
        keyPlayersHome: ["Rohit Sharma", "Kuldeep Yadav"],
        keyPlayersAway: ["Shimron Hetmyer", "Alzarri Joseph"],
        bettingTips: [
          "Over 300 runs expected in the first innings.",
          "Rohit Sharma to play a long innings.",
          "Toss winner should consider batting first."
        ],
        detailedNarrative: "The action moves to the Northeast. Guwahati has always been a batting paradise. West Indies' aggressive approach might find success here if they can avoid losing wickets in clusters. India's spin duo will be tested on a flat deck.",
        pitchReport: "Flat track, fast outfield. High scoring match guaranteed.",
        tacticalPreview: "Both teams will look to maximize the powerplays. Bowlers must use their variations to survive.",
        winProbHome: 60,
        winProbAway: 40,
        predictionInsight: "A high-scoring thriller where the team batting first has the advantage.",
        projectedScoreHome: "330-350",
        projectedScoreAway: "315-335"
      },
      {
        match: "3rd ODI",
        teams: "India vs West Indies",
        date: "Sat, 3 Oct 2026",
        venue: "Mullanpur Stadium",
        details: "Match Details",
        slug: "ind-vs-wi-3rd-odi-2026",
        homeTeam: "India",
        awayTeam: "West Indies",
        format: "ODI",
        tournament: "West Indies tour of India, 2026",
        city: "New Chandigarh",
        country: "India",
        headToHead: "The series finale at a brand new venue in Chandigarh.",
        homeRecentForm: "W, W, W, W, W",
        awayRecentForm: "L, L, L, W, L",
        keyPlayersHome: ["Hardik Pandya", "Shubman Gill"],
        keyPlayersAway: ["Jason Holder", "Nicholas Pooran"],
        bettingTips: [
          "Hardik Pandya to be the X-factor with both bat and ball.",
          "Shubman Gill to continue his home dominance.",
          "Check live odds for late session movements."
        ],
        detailedNarrative: "The ODI series concludes in Chandigarh. The new Mullanpur stadium offers a fresh challenge for both teams. India will look to complete a clean sweep, while West Indies will play for pride. The pitch is expected to be a balanced one, offering something for everyone.",
        pitchReport: "Fresh surface, balanced contest between bat and ball.",
        tacticalPreview: "India might test their bench strength. West Indies will look for a consolation win.",
        winProbHome: 70,
        winProbAway: 30,
        predictionInsight: "India's clinical execution makes them favorites to sweep the series.",
        projectedScoreHome: "290-310",
        projectedScoreAway: "250-270"
      },
      {
        match: "1st T20I",
        teams: "India vs West Indies",
        date: "Tue, 6 Oct 2026",
        venue: "Ekana Cricket Stadium",
        details: "Match Details",
        slug: "ind-vs-wi-1st-t20i-2026",
        homeTeam: "India",
        awayTeam: "West Indies",
        format: "T20I",
        tournament: "West Indies tour of India, 2026",
        city: "Lucknow",
        country: "India",
        headToHead: "The T20 series starts in Lucknow, a ground that has favored spin in the past.",
        homeRecentForm: "W, W, W, W, L",
        awayRecentForm: "L, W, W, L, W",
        keyPlayersHome: ["Suryakumar Yadav", "Ravi Bishnoi"],
        keyPlayersAway: ["Nicholas Pooran", "Rovman Powell"],
        bettingTips: [
          "Suryakumar Yadav to be the top run-scorer.",
          "Ravi Bishnoi to exploit the Lucknow pitch.",
          "Under 160 runs likely if the pitch is slow."
        ],
        detailedNarrative: "The T20I series kicks off at the Ekana Stadium. Lucknow's pitch has a history of being a bit sluggish, which will suit India's spin-heavy attack. West Indies will need to adapt their power-hitting game to the conditions. A tactical battle in the middle overs is expected.",
        pitchReport: "Slow and low. Spinners will find plenty of grip.",
        tacticalPreview: "India will look to choke the run rate with spin. West Indies must target the pacers in the powerplay.",
        winProbHome: 58,
        winProbAway: 42,
        predictionInsight: "India's superior spin variety gives them the edge on this surface.",
        projectedScoreHome: "155-170",
        projectedScoreAway: "145-160"
      },
      {
        match: "2nd T20I",
        teams: "India vs West Indies",
        date: "Fri, 9 Oct 2026",
        venue: "JSCA Stadium",
        details: "Match Details",
        slug: "ind-vs-wi-2nd-t20i-2026",
        homeTeam: "India",
        awayTeam: "West Indies",
        format: "T20I",
        tournament: "West Indies tour of India, 2026",
        city: "Ranchi",
        country: "India",
        headToHead: "Ranchi usually offers a balanced contest between bat and ball.",
        homeRecentForm: "W, W, W, W, W",
        awayRecentForm: "L, L, W, L, W",
        keyPlayersHome: ["Hardik Pandya", "Axar Patel"],
        keyPlayersAway: ["Andre Russell", "Jason Holder"],
        bettingTips: [
          "Andre Russell to be the X-factor in the death overs.",
          "Axar Patel to be the most economical bowler.",
          "Toss winner should consider bowling first due to potential dew."
        ],
        detailedNarrative: "The series moves to Ranchi. The JSCA stadium has a large outfield, rewarding smart running and placing. West Indies' big hitters like Russell will look to clear the boundaries, while India's all-rounders like Hardik and Axar will be key to maintaining the balance. Potential dew could affect the second innings.",
        pitchReport: "Fair pitch with good carry. Dew might play a factor in the second half.",
        tacticalPreview: "Teams will look to keep wickets in hand for a late charge. Spinners will be used strategically.",
        winProbHome: 55,
        winProbAway: 45,
        predictionInsight: "A close encounter expected, with the toss playing a significant role if dew is present.",
        projectedScoreHome: "170-185",
        projectedScoreAway: "165-180"
      },
      {
        match: "3rd T20I",
        teams: "India vs West Indies",
        date: "Sun, 11 Oct 2026",
        venue: "Holkar Stadium",
        details: "Match Details",
        slug: "ind-vs-wi-3rd-t20i-2026",
        homeTeam: "India",
        awayTeam: "West Indies",
        format: "T20I",
        tournament: "West Indies tour of India, 2026",
        city: "Indore",
        country: "India",
        headToHead: "Indore is a high-scoring venue with very short boundaries.",
        homeRecentForm: "W, W, W, W, L",
        awayRecentForm: "L, W, L, W, L",
        keyPlayersHome: ["Yashasvi Jaiswal", "Arshdeep Singh"],
        keyPlayersAway: ["Johnson Charles", "Alzarri Joseph"],
        bettingTips: [
          "Total match sixes to exceed 18.",
          "Yashasvi Jaiswal to score 40+ runs in the powerplay.",
          "Par score is 200+ on this small ground."
        ],
        detailedNarrative: "Expect a run-fest at the Holkar Stadium. With short boundaries, Indore is a nightmare for bowlers and a paradise for batsmen. Jaiswal and Charles will look to maximize the powerplay. The tactical focus will be on the bowlers' ability to bowl Yorkers and slower bouncers under pressure.",
        pitchReport: "Extremely flat. Tiny boundaries. High scoring game guaranteed.",
        tacticalPreview: "Bowlers must use their variations to survive. Powerplay score will be crucial.",
        winProbHome: 52,
        winProbAway: 48,
        predictionInsight: "A true toss-up in a high-scoring ground. The team batting second has a slight advantage.",
        projectedScoreHome: "200-220",
        projectedScoreAway: "195-215"
      },
      {
        match: "4th T20I",
        teams: "India vs West Indies",
        date: "Wed, 14 Oct 2026",
        venue: "Rajiv Gandhi Stadium",
        details: "Match Details",
        slug: "ind-vs-wi-4th-t20i-2026",
        homeTeam: "India",
        awayTeam: "West Indies",
        format: "T20I",
        tournament: "West Indies tour of India, 2026",
        city: "Hyderabad",
        country: "India",
        headToHead: "Hyderabad offers a true surface with good bounce and carry.",
        homeRecentForm: "L, W, W, W, W",
        awayRecentForm: "W, L, W, L, W",
        keyPlayersHome: ["Sanju Samson", "Jasprit Bumrah"],
        keyPlayersAway: ["Akeal Hosein", "Shimron Hetmyer"],
        bettingTips: [
          "Jasprit Bumrah to take 2+ wickets in the death overs.",
          "Sanju Samson to enjoy the bounce and carry.",
          "West Indies to perform better on this truer surface."
        ],
        detailedNarrative: "The 4th T20I at Hyderabad. The Rajiv Gandhi Stadium provides a balanced deck. West Indies' pace battery will find some help, while India's batsmen will enjoy the ball coming onto the bat. The tactical battle in the death overs between Bumrah and Hetmyer will be the highlight.",
        pitchReport: "Good bounce, true surface. Fair contest between bat and ball.",
        tacticalPreview: "India will rely on Bumrah's clinical execution. West Indies will look to use Akeal Hosein to choke the powerplay.",
        winProbHome: 55,
        winProbAway: 45,
        predictionInsight: "India's depth in bowling gives them the edge in a balanced ground.",
        projectedScoreHome: "180-195",
        projectedScoreAway: "170-185"
      },
      {
        match: "5th T20I",
        teams: "India vs West Indies",
        date: "Sat, 17 Oct 2026",
        venue: "M.Chinnaswamy Stadium",
        details: "Match Details",
        slug: "ind-wi-5th-t20i-2026",
        homeTeam: "India",
        awayTeam: "West Indies",
        format: "T20I",
        tournament: "West Indies tour of India, 2026",
        city: "Bengaluru",
        country: "India",
        headToHead: "The series finale at the high-altitude Chinnaswamy Stadium.",
        homeRecentForm: "W, W, L, W, W",
        awayRecentForm: "L, W, W, L, W",
        keyPlayersHome: ["Virat Kohli", "Kuldeep Yadav"],
        keyPlayersAway: ["Nicholas Pooran", "Andre Russell"],
        bettingTips: [
          "Virat Kohli to score big at his home IPL ground.",
          "Total match sixes likely to exceed 20.",
          " clean sweep or series decider, Bengaluru always delivers."
        ],
        detailedNarrative: "The T20 series concludes at the M.Chinnaswamy Stadium. Known for its small boundaries and high altitude, the ball flies here. India's Virat Kohli will be the crowd favorite. West Indies' power hitters will look to end the tour on a high. A tactical high-stakes encounter where no score is safe.",
        pitchReport: "Batting paradise. Small boundaries. 200 is par.",
        tacticalPreview: "Bowlers must be very precise with their lengths. High-pressure game with both teams at full strength.",
        winProbHome: 50,
        winProbAway: 50,
        predictionInsight: "A true 50-50 game in a high-scoring ground. The team winning the toss will likely bowl first.",
        projectedScoreHome: "210-230",
        projectedScoreAway: "210-230"
      }
    ]
  },
  {
    name: "Australia tour of South Africa, 2026",
    details: "3 Tests, 3 ODIs · Sep – Oct 2026",
    matches: [
      {
        match: "1st ODI",
        teams: "South Africa vs Australia",
        date: "Thu, 24 Sep 2026",
        venue: "Kingsmead",
        details: "Match Details",
        slug: "sa-vs-aus-1st-odi-2026",
        homeTeam: "South Africa",
        awayTeam: "Australia",
        format: "ODI",
        tournament: "Australia tour of South Africa, 2026",
        city: "Durban",
        country: "South Africa",
        headToHead: "A classic rivalry renewed; South Africa have the upper hand at Kingsmead.",
        homeRecentForm: "W, L, W, W, L",
        awayRecentForm: "L, W, W, L, W",
        keyPlayersHome: ["Quinton de Kock", "Kagiso Rabada"],
        keyPlayersAway: ["Travis Head", "Adam Zampa"],
        bettingTips: [
          "Quinton de Kock to score 50+ runs.",
          "Rabada to pick early wickets under the lights.",
          "Durban's sea breeze to help the swing bowlers."
        ],
        detailedNarrative: "The tour of Australia in South Africa begins in Durban. Kingsmead is famous for its swing and seam, especially under the lights. Quinton de Kock's aggressive start and Rabada's opening spell will be crucial for the Proteas. Australia's middle order led by Travis Head will look to counter-attack.",
        pitchReport: "Good bounce and carry. Sea breeze will aid swing bowlers in the second innings.",
        tacticalPreview: "South Africa will look to bowl first. Australia needs Zampa to be effective in the middle overs.",
        winProbHome: 52,
        winProbAway: 48,
        predictionInsight: "A close contest, but South Africa's familiarity with Kingsmead gives them a slight edge.",
        projectedScoreHome: "270-290",
        projectedScoreAway: "265-285"
      },
      {
        match: "2nd ODI",
        teams: "South Africa vs Australia",
        date: "Sun, 27 Sep 2026",
        venue: "The Wanderers Stadium",
        details: "Match Details",
        slug: "sa-vs-aus-2nd-odi-2026",
        homeTeam: "South Africa",
        awayTeam: "Australia",
        format: "ODI",
        tournament: "Australia tour of South Africa, 2026",
        city: "Johannesburg",
        country: "South Africa",
        headToHead: "The high-altitude Bullring usually produces high-scoring ODIs.",
        homeRecentForm: "W, W, L, W, L",
        awayRecentForm: "L, L, W, L, W",
        keyPlayersHome: ["Aiden Markram", "Anrich Nortje"],
        keyPlayersAway: ["Mitchell Marsh", "Josh Hazlewood"],
        bettingTips: [
          "Over 300 runs expected in the first innings.",
          "Anrich Nortje to bowl the fastest delivery.",
          "Aiden Markram to enjoy the true bounce."
        ],
        detailedNarrative: "The action moves to the Bullring. Johannesburg is known for its true bounce and fast outfields. Australia's power hitters like Mitchell Marsh will thrive in these conditions. South Africa will rely on Nortje's raw pace to unsettle the visitors. A high-scoring thriller is on the cards.",
        pitchReport: "Extremely flat, high altitude. Batting paradise.",
        tacticalPreview: "Bowlers must be precise with their yorkers. Both teams will look to maximize the high scoring boundaries.",
        winProbHome: 50,
        winProbAway: 50,
        predictionInsight: "A true toss-up in a high-scoring ground. The team batting first has no safety.",
        projectedScoreHome: "320-350",
        projectedScoreAway: "325-355"
      },
      {
        match: "3rd ODI",
        teams: "South Africa vs Australia",
        date: "Wed, 30 Sep 2026",
        venue: "Senwes Park",
        details: "Match Details",
        slug: "sa-vs-aus-3rd-odi-2026",
        homeTeam: "South Africa",
        awayTeam: "Australia",
        format: "ODI",
        tournament: "Australia tour of South Africa, 2026",
        city: "Potchefstroom",
        country: "South Africa",
        headToHead: "Potchefstroom offers a different challenge with its slowish nature.",
        homeRecentForm: "L, W, W, W, L",
        awayRecentForm: "W, L, L, W, L",
        keyPlayersHome: ["David Miller", "Tabraiz Shamsi"],
        keyPlayersAway: ["Marnus Labuschagne", "Adam Zampa"],
        bettingTips: [
          "Tabraiz Shamsi to be the game-changer on this surface.",
          "David Miller to provide the late flourish.",
          "Total match score likely to be under 550."
        ],
        detailedNarrative: "The ODI series concludes in Potchefstroom. The pitch here is generally slower than Durban or Jo'burg, making spin more effective. Shamsi and Zampa will be the key tactical weapons for their respective captains. The middle-order battle will determine the series outcome.",
        pitchReport: "Slow surface. Spinners will find some assistance.",
        tacticalPreview: "Teams will look for more rotation of strike. Spin from both ends after the powerplay.",
        winProbHome: 48,
        winProbAway: 52,
        predictionInsight: "Australia's experience on slower tracks (like Zampa) gives them a slight advantage here.",
        projectedScoreHome: "250-270",
        projectedScoreAway: "260-280"
      },
      {
        match: "1st Test",
        teams: "South Africa vs Australia",
        date: "Fri, 9 Oct 2026",
        venue: "Kingsmead",
        details: "Match Details",
        slug: "sa-vs-aus-1st-test-2026",
        homeTeam: "South Africa",
        awayTeam: "Australia",
        format: "Test",
        tournament: "Australia tour of South Africa, 2026",
        city: "Durban",
        country: "South Africa",
        headToHead: "Kingsmead Test matches are legendary for their pace and swing.",
        homeRecentForm: "D, W, L, W, L",
        awayRecentForm: "W, W, D, W, L",
        keyPlayersHome: ["Temba Bavuma", "Kagiso Rabada"],
        keyPlayersAway: ["Steve Smith", "Pat Cummins"],
        bettingTips: [
          "Seam movement will be significant in the first two days.",
          "Steve Smith to be the most critical wicket for South Africa.",
          "Draw is unlikely unless weather intervenes."
        ],
        detailedNarrative: "The Test series begins in Durban. Kingsmead's unique conditions, including the coastal breeze and local humidity, will test the techniques of the world's best. South Africa's pace battery is ready to challenge the Australian middle order. A battle of endurance and tactical discipline.",
        pitchReport: "Green top expected. Significant help for seamers early on, flattening out for batting on Days 3 and 4.",
        tacticalPreview: "High-pressure Test cricket. Australia will rely on their world-class pace trio.",
        winProbHome: 45,
        winProbAway: 55,
        predictionInsight: "Australia's superior Test experience gives them a slight advantage.",
        projectedScoreHome: "300 / 250",
        projectedScoreAway: "350 / 200"
      },
      {
        match: "2nd Test",
        teams: "South Africa vs Australia",
        date: "Sun, 18 Oct 2026",
        venue: "St George's Park",
        details: "Match Details",
        slug: "sa-vs-aus-2nd-test-2026",
        homeTeam: "South Africa",
        awayTeam: "Australia",
        format: "Test",
        tournament: "Australia tour of South Africa, 2026",
        city: "Gqeberha",
        country: "South Africa",
        headToHead: "St George's Park is known for its reverse swing later in the day.",
        homeRecentForm: "W, D, L, W, L",
        awayRecentForm: "W, W, W, D, L",
        keyPlayersHome: ["Dean Elgar", "Marco Jansen"],
        keyPlayersAway: ["Marnus Labuschagne", "Mitchell Starc"],
        bettingTips: [
          "Reverse swing will be the main weapon from Day 3.",
          "Dean Elgar to play a gritty opening innings.",
          "Toss winner should consider batting first."
        ],
        detailedNarrative: "The 2nd Test at Gqeberha. The ground is famous for its lively atmosphere and the brass band. Tactical use of the old ball will be key here. Marco Jansen's height and angle could be a major threat to the Australian left-handers.",
        pitchReport: "A bit slower than Durban. Will offer reverse swing for the fast bowlers.",
        tacticalPreview: "Teams will look for early wickets with the new ball but the real battle starts after 40 overs.",
        winProbHome: 48,
        winProbAway: 52,
        predictionInsight: "A close battle expected with both teams fighting for every run.",
        projectedScoreHome: "320 / 280",
        projectedScoreAway: "310 / 250"
      },
      {
        match: "3rd Test",
        teams: "South Africa vs Australia",
        date: "Tue, 27 Oct 2026",
        venue: "Newlands",
        details: "Match Details",
        slug: "sa-vs-aus-3rd-test-2026",
        homeTeam: "South Africa",
        awayTeam: "Australia",
        format: "Test",
        tournament: "Australia tour of South Africa, 2026",
        city: "Cape Town",
        country: "South Africa",
        headToHead: "The Newlands Test is the jewel of South African cricket.",
        homeRecentForm: "L, W, D, W, L",
        awayRecentForm: "W, W, W, W, L",
        keyPlayersHome: ["Aiden Markram", "Kagiso Rabada"],
        keyPlayersAway: ["Travis Head", "Nathan Lyon"],
        bettingTips: [
          "Nathan Lyon to be effective on the fourth and fifth days.",
          "Aiden Markram to score big on his favorite ground.",
          "High intensity series finale expected."
        ],
        detailedNarrative: "The series concludes at the foot of Table Mountain. Newlands is one of the most beautiful cricket grounds in the world. The tactical battle between South Africa's pacers and Australia's spinners will reach its peak. A historic finale to an epic Test series.",
        pitchReport: "Balanced deck. Will offer something for both pace and spin as the game progresses.",
        tacticalPreview: "Maximum pressure game. Both teams will rely on their most experienced players.",
        winProbHome: 50,
        winProbAway: 50,
        predictionInsight: "A true 50-50 game in one of the most iconic venues in world cricket.",
        projectedScoreHome: "350 / 220",
        projectedScoreAway: "340 / 230"
      }
    ]
  },
  {
    name: "Sri Lanka tour of England, 2026",
    details: "3 T20Is, 3 ODIs · Sep 2026",
    matches: [
      {
        match: "1st T20I",
        teams: "England vs Sri Lanka",
        date: "Tue, 15 Sep 2026",
        venue: "The Rose Bowl",
        details: "Match Details",
        slug: "eng-vs-sl-1st-t20i-2026",
        homeTeam: "England",
        awayTeam: "Sri Lanka",
        format: "T20I",
        tournament: "Sri Lanka tour of England, 2026",
        city: "Southampton",
        country: "England",
        headToHead: "England have a strong record at home in T20Is against Sri Lanka.",
        homeRecentForm: "W, L, W, W, L",
        awayRecentForm: "L, W, L, W, W",
        keyPlayersHome: ["Jos Buttler", "Sam Curran"],
        keyPlayersAway: ["Wanindu Hasaranga", "Pathum Nissanka"],
        bettingTips: [
          "Jos Buttler to be the top run-scorer for England.",
          "Wanindu Hasaranga to be the main threat for English middle order.",
          "High intensity powerplay expected."
        ],
        detailedNarrative: "Sri Lanka's tour of England begins in Southampton. The Rose Bowl is known for its true bounce, which will suit England's aggressive style. Sri Lanka's spin magic, especially through Hasaranga, will be the biggest challenge for the hosts. A tactical opener to a high-voltage T20 series.",
        pitchReport: "True bounce, good batting surface. Par score is 180.",
        tacticalPreview: "England will look to maximize the powerplay. Sri Lanka will rely on Hasaranga to squeeze the middle overs.",
        winProbHome: 60,
        winProbAway: 40,
        predictionInsight: "England's home advantage and power hitters make them favorites.",
        projectedScoreHome: "185-200",
        projectedScoreAway: "165-180"
      },
      {
        match: "2nd T20I",
        teams: "England vs Sri Lanka",
        date: "Thu, 17 Sep 2026",
        venue: "Sophia Gardens",
        details: "Match Details",
        slug: "eng-vs-sl-2nd-t20i-2026",
        homeTeam: "England",
        awayTeam: "Sri Lanka",
        format: "T20I",
        tournament: "Sri Lanka tour of England, 2026",
        city: "Cardiff",
        country: "Wales",
        headToHead: "Cardiff often produces lower-scoring T20Is compared to other English grounds.",
        homeRecentForm: "W, W, L, W, L",
        awayRecentForm: "L, L, W, L, W",
        keyPlayersHome: ["Harry Brook", "Adil Rashid"],
        keyPlayersAway: ["Maheesh Theekshana", "Charith Asalanka"],
        bettingTips: [
          "Adil Rashid to be the most economical bowler.",
          "Charith Asalanka to stabilize the Sri Lankan innings.",
          "Total match fours to be under 22."
        ],
        detailedNarrative: "The series moves to Cardiff. Sophia Gardens usually offers a slower track, which might suit Sri Lanka's spinners. England's tactical adjustment to the conditions will be key. Harry Brook's ability to rotate strike against spin will be crucial for the hosts.",
        pitchReport: "Slow and low. Spinners will find plenty of assistance.",
        tacticalPreview: "Teams will look for more strike rotation. Powerplay scores will be lower than usual.",
        winProbHome: 55,
        winProbAway: 45,
        predictionInsight: "A closer contest expected on a slower surface.",
        projectedScoreHome: "160-175",
        projectedScoreAway: "155-170"
      },
      {
        match: "3rd T20I",
        teams: "England vs Sri Lanka",
        date: "Sat, 19 Sep 2026",
        venue: "Emirates Old Trafford",
        details: "Match Details",
        slug: "eng-vs-sl-3rd-t20i-2026",
        homeTeam: "England",
        awayTeam: "Sri Lanka",
        format: "T20I",
        tournament: "Sri Lanka tour of England, 2026",
        city: "Manchester",
        country: "England",
        headToHead: "The series finale at Manchester, a ground that supports both pace and spin.",
        homeRecentForm: "L, W, W, L, W",
        awayRecentForm: "W, L, L, W, L",
        keyPlayersHome: ["Phil Salt", "Mark Wood"],
        keyPlayersAway: ["Matheesha Pathirana", "Kusal Mendis"],
        bettingTips: [
          "Phil Salt to provide a flying start.",
          "Pathirana's slingy action to be effective in the death overs.",
          "High intensity series decider expected."
        ],
        detailedNarrative: "The T20I series concludes at Old Trafford. Manchester usually provides a fair contest. Mark Wood's raw pace vs Pathirana's yorkers will be a fascinating tactical sub-plot. A high-stakes game with the series trophy on the line.",
        pitchReport: "Good bounce and carry. Fair contest between bat and ball.",
        tacticalPreview: "Maximum pressure game. Both teams will rely on their trusted match-winners.",
        winProbHome: 52,
        winProbAway: 48,
        predictionInsight: "England's depth in all departments gives them a slight edge in the finale.",
        projectedScoreHome: "175-190",
        projectedScoreAway: "170-185"
      },
      {
        match: "1st ODI",
        teams: "England vs Sri Lanka",
        date: "Tue, 22 Sep 2026",
        venue: "Chester-le-Street, Riverside Ground",
        details: "Match Details",
        slug: "eng-vs-sl-1st-odi-2026"
      },
      {
        match: "2nd ODI",
        teams: "England vs Sri Lanka",
        date: "Thu, 24 Sep 2026",
        venue: "Leeds, Headingley",
        details: "Match Details",
        slug: "eng-vs-sl-2nd-odi-2026"
      },
      {
        match: "3rd ODI",
        teams: "England vs Sri Lanka",
        date: "Sun, 27 Sep 2026",
        venue: "London, Kennington Oval",
        details: "Match Details",
        slug: "eng-vs-sl-3rd-odi-2026"
      }
    ]
  },
  {
    name: "Australia tour of Zimbabwe, 2026",
    details: "3 ODIs · Sep 2026",
    matches: [
      {
        match: "1st ODI",
        teams: "Zimbabwe vs Australia",
        date: "Tue, 15 Sep 2026",
        venue: "Harare, Harare Sports Club",
        details: "Match Details",
        slug: "zim-vs-aus-1st-odi-2026"
      },
      {
        match: "2nd ODI",
        teams: "Zimbabwe vs Australia",
        date: "Fri, 18 Sep 2026",
        venue: "Harare, Harare Sports Club",
        details: "Match Details",
        slug: "zim-vs-aus-2nd-odi-2026"
      },
      {
        match: "3rd ODI",
        teams: "Zimbabwe vs Australia",
        date: "Sun, 20 Sep 2026",
        venue: "Harare, Harare Sports Club",
        details: "Match Details",
        slug: "zim-vs-aus-3rd-odi-2026"
      }
    ]
  },
  {
    name: "Pakistan tour of England, 2026",
    details: "3 Tests · Aug – Sep 2026",
    matches: [
      {
        match: "1st Test",
        teams: "England vs Pakistan",
        date: "Wed, 19 Aug 2026",
        venue: "Headingley",
        details: "Match Details",
        slug: "eng-vs-pak-1st-test-2026",
        homeTeam: "England",
        awayTeam: "Pakistan",
        format: "Test",
        tournament: "Pakistan tour of England, 2026",
        city: "Leeds",
        country: "England",
        headToHead: "Headingley is famous for dramatic finishes and help for swing bowlers.",
        homeRecentForm: "W, W, D, W, L",
        awayRecentForm: "L, D, L, W, W",
        keyPlayersHome: ["Joe Root", "Ben Stokes"],
        keyPlayersAway: ["Babar Azam", "Shaheen Afridi"],
        bettingTips: [
          "Joe Root to score a century in his home ground.",
          "Shaheen Afridi to take early wickets with the new ball.",
          "The match to be decided on the fourth or fifth day."
        ],
        detailedNarrative: "Pakistan's Test series in England starts at Headingley. The conditions in Leeds often favor swing and seam, especially if the skies are overcast. Joe Root's technique vs Shaheen Afridi's pace and swing will be the defining battle. Ben Stokes' tactical leadership and all-round ability will be vital for the hosts.",
        pitchReport: "Good grass cover. Significant movement for fast bowlers in the first two sessions.",
        tacticalPreview: "England will look to exploit the moving ball. Pakistan needs Babar Azam to anchor the middle order.",
        winProbHome: 55,
        winProbAway: 45,
        predictionInsight: "England's home comfort and superior swing bowling depth make them slight favorites.",
        projectedScoreHome: "350 / 250",
        projectedScoreAway: "320 / 220"
      },
      {
        match: "2nd Test",
        teams: "England vs Pakistan",
        date: "Thu, 27 Aug 2026",
        venue: "Lord's",
        details: "Match Details",
        slug: "eng-vs-pak-2nd-test-2026",
        homeTeam: "England",
        awayTeam: "Pakistan",
        format: "Test",
        tournament: "Pakistan tour of England, 2026",
        city: "London",
        country: "England",
        headToHead: "The Home of Cricket, Lord's is a ground where every player wants to excel.",
        homeRecentForm: "W, W, W, D, L",
        awayRecentForm: "D, L, D, W, W",
        keyPlayersHome: ["Ollie Pope", "James Anderson"],
        keyPlayersAway: ["Mohammad Rizwan", "Naseem Shah"],
        bettingTips: [
          "James Anderson to master the Lord's slope.",
          "Mohammad Rizwan to be the key lower-order resistance.",
          "Toss winner should bowl first under cloudy conditions."
        ],
        detailedNarrative: "The 2nd Test at Lord's. The iconic slope and the prestige of the venue add a layer of tactical pressure. James Anderson's mastery of the conditions will be a massive factor. Pakistan's Naseem Shah will look to use the extra bounce and carry. A fascinating contest of skill and temperament.",
        pitchReport: "Classic Lord's pitch with the slope. Will help pace early on, flattening out later.",
        tacticalPreview: "Mastery of the slope is key. Bowlers must adjust their lines accordingly.",
        winProbHome: 60,
        winProbAway: 40,
        predictionInsight: "England's record at Lord's is formidable.",
        projectedScoreHome: "380 / 200",
        projectedScoreAway: "310 / 240"
      },
      {
        match: "3rd Test",
        teams: "England vs Pakistan",
        date: "Wed, 9 Sep 2026",
        venue: "Edgbaston",
        details: "Match Details",
        slug: "eng-vs-pak-3rd-test-2026",
        homeTeam: "England",
        awayTeam: "Pakistan",
        format: "Test",
        tournament: "Pakistan tour of England, 2026",
        city: "Birmingham",
        country: "England",
        headToHead: "Edgbaston is known for its lively atmosphere and results-oriented pitches.",
        homeRecentForm: "W, W, W, W, L",
        awayRecentForm: "L, D, L, L, W",
        keyPlayersHome: ["Harry Brook", "Mark Wood"],
        keyPlayersAway: ["Abdullah Shafique", "Abrar Ahmed"],
        bettingTips: [
          "Harry Brook to maintain a high strike rate.",
          "Abrar Ahmed to be effective in the second innings.",
          "Expect a high-intensity series finale."
        ],
        detailedNarrative: "The series concludes in Birmingham. Edgbaston often provides more pace and bounce. Harry Brook's aggressive batting could take the game away from Pakistan quickly. Abrar Ahmed's mystery spin will be Pakistan's tactical trump card as the pitch wears down.",
        pitchReport: "Hard and fast. Will offer turn and bounce from Day 3 onwards.",
        tacticalPreview: "Maximum pressure Test. England will look to play their aggressive 'Bazball' style.",
        winProbHome: 58,
        winProbAway: 42,
        predictionInsight: "England's aggressive approach often yields results at Edgbaston.",
        projectedScoreHome: "400 / 180",
        projectedScoreAway: "330 / 200"
      }
    ]
  },
  {
    name: "India tour of Sri Lanka, 2026",
    details: "2 Tests · Aug 2026",
    matches: [
      {
        match: "1st Test",
        teams: "Sri Lanka vs India",
        date: "Sat, 15 Aug 2026",
        venue: "Galle International Stadium",
        details: "Match Details",
        slug: "sl-vs-ind-1st-test-2026",
        homeTeam: "Sri Lanka",
        awayTeam: "India",
        format: "Test",
        tournament: "India tour of Sri Lanka, 2026",
        city: "Galle",
        country: "Sri Lanka",
        headToHead: "Galle is a fortress for Sri Lankan spinners, but India have found success there before.",
        homeRecentForm: "L, W, L, W, D",
        awayRecentForm: "W, W, D, W, L",
        keyPlayersHome: ["Prabath Jayasuriya", "Dimuth Karunaratne"],
        keyPlayersAway: ["Rohit Sharma", "Ravindra Jadeja"],
        bettingTips: [
          "Prabath Jayasuriya to take a 5-wicket haul.",
          "Ravindra Jadeja to be India's most effective bowler.",
          "First innings total will be crucial; 300+ is a winning score."
        ],
        detailedNarrative: "India's Test series in Sri Lanka begins in the scenic Galle. The pitch here is notorious for its turn from Day 1. India's world-class spinners vs Sri Lanka's local masters will be the tactical highlight. Rohit Sharma's leadership and ability to handle spin will be key for India's start.",
        pitchReport: "Classic Galle deck. Dry and abrasive; will turn sharply from the afternoon of Day 1.",
        tacticalPreview: "Spin will dominate. Both teams will likely play three specialist spinners.",
        winProbHome: 48,
        winProbAway: 52,
        predictionInsight: "India's superior spin variety (Ashwin/Jadeja/Kuldeep) gives them a slight edge even in Galle.",
        projectedScoreHome: "280 / 210",
        projectedScoreAway: "320 / 190"
      },
      {
        match: "2nd Test",
        teams: "Sri Lanka vs India",
        date: "Sun, 23 Aug 2026",
        venue: "Sinhalese Sports Club",
        details: "Match Details",
        slug: "sl-vs-ind-2nd-test-2026",
        homeTeam: "Sri Lanka",
        awayTeam: "India",
        format: "Test",
        tournament: "India tour of Sri Lanka, 2026",
        city: "Colombo",
        country: "Sri Lanka",
        headToHead: "SSC is usually a high-scoring ground with something for everyone.",
        homeRecentForm: "L, L, W, L, W",
        awayRecentForm: "W, W, W, D, L",
        keyPlayersHome: ["Angelo Mathews", "Maheesh Theekshana"],
        keyPlayersAway: ["Yashasvi Jaiswal", "Jasprit Bumrah"],
        bettingTips: [
          "Yashasvi Jaiswal to score a century.",
          "Jasprit Bumrah to be effective with reverse swing.",
          "High intensity series finale expected."
        ],
        detailedNarrative: "The 2nd Test at the SSC in Colombo. Traditionally a batting paradise, this ground tests the patience of bowlers. Yashasvi Jaiswal's aggressive intent will be India's tactical weapon. Sri Lanka will rely on the experience of Mathews and the mystery of Theekshana. A battle of endurance and skill.",
        pitchReport: "Batting-friendly for the first three days. Will offer reverse swing and some turn later.",
        tacticalPreview: "Teams will look to bat big in the first innings. Reverse swing will be a major weapon on Day 4.",
        winProbHome: 45,
        winProbAway: 55,
        predictionInsight: "India's balanced attack makes them favorites on a more traditional pitch.",
        projectedScoreHome: "350 / 240",
        projectedScoreAway: "420 / 180"
      }
    ]
  },
  {
    name: "Bangladesh tour of Australia, 2026",
    details: "2 Tests · Aug 2026",
    matches: [
      {
        match: "1st Test",
        teams: "Australia vs Bangladesh",
        date: "Thu, 13 Aug 2026",
        venue: "Marrara Cricket Ground",
        details: "Match Details",
        slug: "aus-vs-ban-1st-test-2026",
        homeTeam: "Australia",
        awayTeam: "Bangladesh",
        format: "Test",
        tournament: "Bangladesh tour of Australia, 2026",
        city: "Darwin",
        country: "Australia",
        headToHead: "The Top End of Australia hosts its first Test in years; conditions will be humid.",
        homeRecentForm: "W, W, D, W, L",
        awayRecentForm: "L, L, W, L, W",
        keyPlayersHome: ["Pat Cummins", "Usman Khawaja"],
        keyPlayersAway: ["Shakib Al Hasan", "Litton Das"],
        bettingTips: [
          "Australia to dominate the first innings with the bat.",
          "Pat Cummins to exploit the extra bounce.",
          "The match likely to finish within four days."
        ],
        detailedNarrative: "Bangladesh's rare Test tour of Australia starts in Darwin. The conditions will be tropical and humid, slightly different from the traditional Australian summer. Usman Khawaja's stability at the top will be vital. Bangladesh's spinners, led by Shakib, will look for any assistance from the surface. A historic game for the Northern Territory.",
        pitchReport: "Fresh deck. Will offer significant bounce and carry for the fast bowlers.",
        tacticalPreview: "Australia's pace attack will be too hot to handle for the visitors. Bangladesh needs to show grit with the bat.",
        winProbHome: 85,
        winProbAway: 15,
        predictionInsight: "Australia's overwhelming strength at home makes them heavy favorites.",
        projectedScoreHome: "450 / 200",
        projectedScoreAway: "180 / 150"
      },
      {
        match: "2nd Test",
        teams: "Australia vs Bangladesh",
        date: "Sat, 22 Aug 2026",
        venue: "Great Barrier Reef Arena",
        details: "Match Details",
        slug: "aus-vs-ban-2nd-test-2026",
        homeTeam: "Australia",
        awayTeam: "Bangladesh",
        format: "Test",
        tournament: "Bangladesh tour of Australia, 2026",
        city: "Mackay",
        country: "Australia",
        headToHead: "Another regional venue hosts a Test match; atmosphere will be festive.",
        homeRecentForm: "W, W, W, D, L",
        awayRecentForm: "L, L, L, W, L",
        keyPlayersHome: ["Mitchell Starc", "Marnus Labuschagne"],
        keyPlayersAway: ["Mehidy Hasan Miraz", "Mushfiqur Rahim"],
        bettingTips: [
          "Mitchell Starc to be the top wicket-taker.",
          "Marnus Labuschagne to score a big ton.",
          "Bangladesh to struggle against the moving pink ball if applicable."
        ],
        detailedNarrative: "The series concludes in Mackay. Australia will look to sweep the series in these regional fixtures. Mitchell Starc's swing and pace will be a major threat. Mushfiqur Rahim's experience will be key for Bangladesh's middle order resistance. A great opportunity for fans in Queensland to witness Test cricket.",
        pitchReport: "Good batting track with some help for the new ball.",
        tacticalPreview: "Complete dominance expected from Australia. Bangladesh will look to improve their defensive technique.",
        winProbHome: 90,
        winProbAway: 10,
        predictionInsight: "A one-sided contest on paper; Australia to win comfortably.",
        projectedScoreHome: "500 / 150",
        projectedScoreAway: "160 / 140"
      }
    ]
  },
  {
    name: "Bangladesh tour of South Africa, 2026",
    details: "2 Tests, 3 ODIs, 3 T20Is · Nov – Dec 2026",
    matches: [
      {
        match: "1st Test",
        teams: "South Africa vs Bangladesh",
        date: "Sun, 15 Nov 2026",
        venue: "Johannesburg, The Wanderers Stadium",
        details: "Match Details",
        slug: "sa-vs-ban-1st-test-2026"
      },
      {
        match: "2nd Test",
        teams: "South Africa vs Bangladesh",
        date: "Mon, 23 Nov 2026",
        venue: "Centurion, SuperSport Park",
        details: "Match Details",
        slug: "sa-vs-ban-2nd-test-2026"
      },
      {
        match: "1st ODI",
        teams: "South Africa vs Bangladesh",
        date: "Tue, 1 Dec 2026",
        venue: "East London, Buffalo Park",
        details: "Match Details",
        slug: "sa-vs-ban-1st-odi-2026"
      },
      {
        match: "2nd ODI",
        teams: "South Africa vs Bangladesh",
        date: "Fri, 4 Dec 2026",
        venue: "Gqeberha, St George's Park",
        details: "Match Details",
        slug: "sa-vs-ban-2nd-odi-2026"
      },
      {
        match: "3rd ODI",
        teams: "South Africa vs Bangladesh",
        date: "Mon, 7 Dec 2026",
        venue: "Cape Town, Newlands",
        details: "Match Details",
        slug: "sa-vs-ban-3rd-odi-2026"
      },
      {
        match: "1st T20I",
        teams: "South Africa vs Bangladesh",
        date: "Thu, 10 Dec 2026",
        venue: "Kimberley, Diamond Oval",
        details: "Match Details",
        slug: "sa-vs-ban-1st-t20i-2026"
      },
      {
        match: "2nd T20I",
        teams: "South Africa vs Bangladesh",
        date: "Sat, 12 Dec 2026",
        venue: "Benoni, Willowmoore Park",
        details: "Match Details",
        slug: "sa-vs-ban-2nd-t20i-2026"
      },
      {
        match: "3rd T20I",
        teams: "South Africa vs Bangladesh",
        date: "Sun, 13 Dec 2026",
        venue: "Centurion, SuperSport Park",
        details: "Match Details",
        slug: "sa-vs-ban-3rd-t20i-2026"
      }
    ]
  },
  {
    name: "England tour of Australia, 2026",
    details: "3 ODIs, 5 T20Is · Nov – Dec 2026",
    matches: [
      {
        match: "1st ODI",
        teams: "Australia vs England",
        date: "Thu, 12 Nov 2026",
        venue: "Perth, Perth Stadium",
        details: "Match Details",
        slug: "aus-vs-eng-1st-odi-2026"
      },
      {
        match: "2nd ODI",
        teams: "Australia vs England",
        date: "Sun, 15 Nov 2026",
        venue: "Adelaide, Adelaide Oval",
        details: "Match Details",
        slug: "aus-vs-eng-2nd-odi-2026"
      },
      {
        match: "3rd ODI",
        teams: "Australia vs England",
        date: "Wed, 18 Nov 2026",
        venue: "Hobart, Bellerive Oval",
        details: "Match Details",
        slug: "aus-vs-eng-3rd-odi-2026"
      },
      {
        match: "1st T20I",
        teams: "Australia vs England",
        date: "Sat, 21 Nov 2026",
        venue: "Melbourne, Melbourne Cricket Ground",
        details: "Match Details",
        slug: "aus-vs-eng-1st-t20i-2026"
      },
      {
        match: "2nd T20I",
        teams: "Australia vs England",
        date: "Tue, 24 Nov 2026",
        venue: "Queensland, Carrara Oval",
        details: "Match Details",
        slug: "aus-vs-eng-2nd-t20i-2026"
      },
      {
        match: "3rd T20I",
        teams: "Australia vs England",
        date: "Fri, 27 Nov 2026",
        venue: "Brisbane, The Gabba",
        details: "Match Details",
        slug: "aus-vs-eng-3rd-t20i-2026"
      },
      {
        match: "4th T20I",
        teams: "Australia vs England",
        date: "Sun, 29 Nov 2026",
        venue: "Sydney, Sydney Cricket Ground",
        details: "Match Details",
        slug: "aus-vs-eng-4th-t20i-2026"
      },
      {
        match: "5th T20I",
        teams: "Australia vs England",
        date: "Wed, 2 Dec 2026",
        venue: "Canberra, Manuka Oval",
        details: "Match Details",
        slug: "aus-vs-eng-5th-t20i-2026"
      }
    ]
  },
  {
    name: "India tour of New Zealand, 2026",
    details: "5 T20Is, 5 ODIs, 2 Tests · Oct – Nov 2026",
    matches: [
      {
        match: "1st T20I",
        teams: "New Zealand vs India",
        date: "Thu, 22 Oct 2026",
        venue: "Christchurch, Hagley Oval",
        details: "Match Details",
        slug: "nz-vs-ind-1st-t20i-2026"
      },
      {
        match: "2nd T20I",
        teams: "New Zealand vs India",
        date: "Sat, 24 Oct 2026",
        venue: "Christchurch, Hagley Oval",
        details: "Match Details",
        slug: "nz-vs-ind-2nd-t20i-2026"
      },
      {
        match: "3rd T20I",
        teams: "New Zealand vs India",
        date: "Tue, 27 Oct 2026",
        venue: "Wellington, Sky Stadium",
        details: "Match Details",
        slug: "nz-vs-ind-3rd-t20i-2026"
      },
      {
        match: "4th T20I",
        teams: "New Zealand vs India",
        date: "Fri, 30 Oct 2026",
        venue: "Auckland, Eden Park",
        details: "Match Details",
        slug: "nz-vs-ind-4th-t20i-2026"
      },
      {
        match: "5th T20I",
        teams: "New Zealand vs India",
        date: "Sun, 1 Nov 2026",
        venue: "Hamilton, Seddon Park",
        details: "Match Details",
        slug: "nz-vs-ind-5th-t20i-2026"
      },
      {
        match: "1st ODI",
        teams: "New Zealand vs India",
        date: "Wed, 4 Nov 2026",
        venue: "Auckland, Eden Park",
        details: "Match Details",
        slug: "nz-vs-ind-1st-odi-2026"
      },
      {
        match: "2nd ODI",
        teams: "New Zealand vs India",
        date: "Sat, 7 Nov 2026",
        venue: "Wellington, Sky Stadium",
        details: "Match Details",
        slug: "nz-vs-ind-2nd-odi-2026"
      },
      {
        match: "3rd ODI",
        teams: "New Zealand vs India",
        date: "Tue, 10 Nov 2026",
        venue: "Hamilton, Seddon Park",
        details: "Match Details",
        slug: "nz-vs-ind-3rd-odi-2026"
      },
      {
        match: "4th ODI",
        teams: "New Zealand vs India",
        date: "Fri, 13 Nov 2026",
        venue: "Mount Maunganui, Bay Oval",
        details: "Match Details",
        slug: "nz-vs-ind-4th-odi-2026"
      },
      {
        match: "5th ODI",
        teams: "New Zealand vs India",
        date: "Sun, 15 Nov 2026",
        venue: "Mount Maunganui, Bay Oval",
        details: "Match Details",
        slug: "nz-vs-ind-5th-odi-2026"
      },
      {
        match: "1st Test",
        teams: "New Zealand vs India",
        date: "Thu, 19 Nov 2026",
        venue: "Wellington, Basin Reserve",
        details: "Match Details",
        slug: "nz-vs-ind-1st-test-2026"
      },
      {
        match: "2nd Test",
        teams: "New Zealand vs India",
        date: "Fri, 27 Nov 2026",
        venue: "Christchurch, Hagley Oval",
        details: "Match Details",
        slug: "nz-vs-ind-2nd-test-2026"
      }
    ]
  },
  {
    name: "Australia tour of India, 2027",
    details: "5 Tests · Jan – Feb 2027",
    matches: [
      {
        match: "1st Test",
        teams: "India vs Australia",
        date: "Thu, 21 Jan 2027",
        venue: "Nagpur, Vidarbha Cricket Association Stadium",
        details: "View",
        slug: "ind-vs-aus-1st-test-2027",
        homeTeam: "India",
        awayTeam: "Australia",
        format: "Test",
        tournament: "Australia tour of India, 2027"
      },
      {
        match: "2nd Test",
        teams: "India vs Australia",
        date: "Fri, 29 Jan 2027",
        venue: "Chennai, MA Chidambaram Stadium",
        details: "View",
        slug: "ind-vs-aus-2nd-test-2027"
      },
      {
        match: "3rd Test",
        teams: "India vs Australia",
        date: "Thu, 11 Feb 2027",
        venue: "Guwahati, Barsapara Cricket Stadium",
        details: "View",
        slug: "ind-vs-aus-3rd-test-2027"
      },
      {
        match: "4th Test",
        teams: "India vs Australia",
        date: "Fri, 19 Feb 2027",
        venue: "Ranchi, JSCA International Stadium Complex",
        details: "View",
        slug: "ind-vs-aus-4th-test-2027"
      },
      {
        match: "5th Test",
        teams: "India vs Australia",
        date: "Sat, 27 Feb 2027",
        venue: "Ahmedabad, Narendra Modi Stadium",
        details: "View",
        slug: "ind-vs-aus-5th-test-2027"
      }
    ]
  },
  {
    name: "Australia vs England — 150th Anniversary One-off Test",
    details: "1 Test · Mar 2027",
    matches: [
      {
        match: "Only Test",
        teams: "Australia vs England",
        date: "Thu, 11 Mar 2027",
        venue: "Melbourne, Melbourne Cricket Ground",
        details: "View",
        slug: "aus-vs-eng-150th-test-2027"
      }
    ]
  },
  {
    name: "Sri Lanka tour of New Zealand, 2027",
    details: "3 ODIs, 3 T20Is, 2 Tests · Jan – Feb 2027",
    matches: [
      {
        match: "1st ODI",
        teams: "New Zealand vs Sri Lanka",
        date: "Sat, 16 Jan 2027",
        venue: "Napier, McLean Park",
        details: "Match Details",
        slug: "nz-vs-sl-1st-odi-2027"
      },
      {
        match: "2nd ODI",
        teams: "New Zealand vs Sri Lanka",
        date: "Tue, 19 Jan 2027",
        venue: "Wellington, Sky Stadium",
        details: "Match Details",
        slug: "nz-vs-sl-2nd-odi-2027"
      },
      {
        match: "3rd ODI",
        teams: "New Zealand vs Sri Lanka",
        date: "Fri, 22 Jan 2027",
        venue: "Dunedin, University Oval",
        details: "Match Details",
        slug: "nz-vs-sl-3rd-odi-2027"
      },
      {
        match: "1st T20I",
        teams: "New Zealand vs Sri Lanka",
        date: "Tue, 26 Jan 2027",
        venue: "Christchurch, Hagley Oval",
        details: "Match Details",
        slug: "nz-vs-sl-1st-t20i-2027"
      },
      {
        match: "2nd T20I",
        teams: "New Zealand vs Sri Lanka",
        date: "Fri, 29 Jan 2027",
        venue: "Nelson, Saxton Oval",
        details: "Match Details",
        slug: "nz-vs-sl-2nd-t20i-2027"
      },
      {
        match: "3rd T20I",
        teams: "New Zealand vs Sri Lanka",
        date: "Sun, 31 Jan 2027",
        venue: "Nelson, Saxton Oval",
        details: "Match Details",
        slug: "nz-vs-sl-3rd-t20i-2027"
      },
      {
        match: "1st Test",
        teams: "New Zealand vs Sri Lanka",
        date: "Thu, 4 Feb 2027",
        venue: "Mount Maunganui, Bay Oval",
        details: "Match Details",
        slug: "nz-vs-sl-1st-test-2027"
      },
      {
        match: "2nd Test",
        teams: "New Zealand vs Sri Lanka",
        date: "Fri, 12 Feb 2027",
        venue: "Hamilton, Seddon Park",
        details: "Match Details",
        slug: "nz-vs-sl-2nd-test-2027"
      }
    ]
  },
  {
    name: "Zimbabwe tour of India, 2027",
    details: "3 ODIs · Jan 2027",
    matches: [
      {
        match: "1st ODI",
        teams: "India vs Zimbabwe",
        date: "Sun, 3 Jan 2027",
        venue: "Kolkata, Eden Gardens",
        details: "Match Details",
        slug: "ind-vs-zim-1st-odi-2027"
      },
      {
        match: "2nd ODI",
        teams: "India vs Zimbabwe",
        date: "Wed, 6 Jan 2027",
        venue: "Hyderabad, Rajiv Gandhi International Stadium",
        details: "Match Details",
        slug: "ind-vs-zim-2nd-odi-2027"
      },
      {
        match: "3rd ODI",
        teams: "India vs Zimbabwe",
        date: "Sat, 9 Jan 2027",
        venue: "Mumbai, Wankhede Stadium",
        details: "Match Details",
        slug: "ind-vs-zim-3rd-odi-2027"
      }
    ]
  },
  {
    name: "New Zealand tour of Australia, 2026-27",
    details: "4 Tests · Dec 2026 – Jan 2027",
    matches: [
      {
        match: "1st Test",
        teams: "Australia vs New Zealand",
        date: "Wed, 9 Dec 2026",
        venue: "Perth, Perth Stadium",
        details: "Match Details",
        slug: "aus-vs-nz-1st-test-2026"
      },
      {
        match: "2nd Test",
        teams: "Australia vs New Zealand",
        date: "Thu, 17 Dec 2026",
        venue: "Adelaide, Adelaide Oval",
        details: "Match Details",
        slug: "aus-vs-nz-2nd-test-2026"
      },
      {
        match: "3rd Test",
        teams: "Australia vs New Zealand",
        date: "Sat, 26 Dec 2026",
        venue: "Melbourne, Melbourne Cricket Ground",
        details: "Match Details",
        slug: "aus-vs-nz-3rd-test-2026"
      },
      {
        match: "4th Test",
        teams: "Australia vs New Zealand",
        date: "Mon, 4 Jan 2027",
        venue: "Sydney, Sydney Cricket Ground",
        details: "Match Details",
        slug: "aus-vs-nz-4th-test-2027"
      }
    ]
  },
  {
    name: "England tour of South Africa, 2026-27",
    details: "3 Tests, 3 ODIs · Dec 2026 – Jan 2027",
    matches: [
      {
        match: "1st Test",
        teams: "South Africa vs England",
        date: "Thu, 17 Dec 2026",
        venue: "Johannesburg, The Wanderers Stadium",
        details: "Match Details",
        slug: "sa-vs-eng-1st-test-2026"
      },
      {
        match: "2nd Test",
        teams: "South Africa vs England",
        date: "Sat, 26 Dec 2026",
        venue: "Centurion, SuperSport Park",
        details: "Match Details",
        slug: "sa-vs-eng-2nd-test-2026"
      },
      {
        match: "3rd Test",
        teams: "South Africa vs England",
        date: "Sun, 3 Jan 2027",
        venue: "Cape Town, Newlands",
        details: "Match Details",
        slug: "sa-vs-eng-3rd-test-2027"
      },
      {
        match: "1st ODI",
        teams: "South Africa vs England",
        date: "Sun, 10 Jan 2027",
        venue: "Paarl, Boland Park",
        details: "Match Details",
        slug: "sa-vs-eng-1st-odi-2027"
      },
      {
        match: "2nd ODI",
        teams: "South Africa vs England",
        date: "Wed, 13 Jan 2027",
        venue: "Bloemfontein, Mangaung Oval",
        details: "Match Details",
        slug: "sa-vs-eng-2nd-odi-2027"
      },
      {
        match: "3rd ODI",
        teams: "South Africa vs England",
        date: "Fri, 15 Jan 2027",
        venue: "Bloemfontein, Mangaung Oval",
        details: "Match Details",
        slug: "sa-vs-eng-3rd-odi-2027"
      }
    ]
  },
  {
    name: "Sri Lanka tour of India, 2026",
    details: "3 ODIs, 3 T20Is · Dec 2026",
    matches: [
      {
        match: "1st ODI",
        teams: "India vs Sri Lanka",
        date: "Sun, 13 Dec 2026",
        venue: "Arun Jaitley Stadium",
        details: "Match Details",
        slug: "ind-vs-sl-1st-odi-2026",
        homeTeam: "India",
        awayTeam: "Sri Lanka",
        format: "ODI",
        tournament: "Sri Lanka tour of India, 2026",
        city: "Delhi",
        country: "India",
        headToHead: "India have a dominant home record against Sri Lanka in ODIs.",
        homeRecentForm: "W, W, L, W, W",
        awayRecentForm: "L, W, W, L, L",
        keyPlayersHome: ["Shubman Gill", "Mohammed Siraj"],
        keyPlayersAway: ["Kusal Mendis", "Dilshan Madushanka"],
        bettingTips: [
          "Shubman Gill to score a half-century.",
          "Mohammed Siraj to pick early wickets with the new ball.",
          "India to win the series opener comfortably."
        ],
        detailedNarrative: "Sri Lanka's limited-overs tour of India starts in Delhi. The winter conditions will offer some help to the seamers under lights. Shubman Gill's prolific form in home conditions will be India's biggest asset. Sri Lanka will look to Kusal Mendis to lead their batting charge against a formidable Indian attack.",
        pitchReport: "Balanced deck. Slows down as the game progresses. Some dew expected in the second innings.",
        tacticalPreview: "India will look to bat big. Sri Lanka must target the Indian middle order early.",
        winProbHome: 70,
        winProbAway: 30,
        predictionInsight: "India's strength in every department makes them heavy favorites in Delhi.",
        projectedScoreHome: "310-330",
        projectedScoreAway: "250-270"
      },
      {
        match: "2nd ODI",
        teams: "India vs Sri Lanka",
        date: "Wed, 16 Dec 2026",
        venue: "M.Chinnaswamy Stadium",
        details: "Match Details",
        slug: "ind-vs-sl-2nd-odi-2026",
        homeTeam: "India",
        awayTeam: "Sri Lanka",
        format: "ODI",
        tournament: "Sri Lanka tour of India, 2026",
        city: "Bengaluru",
        country: "India",
        headToHead: "High-scoring thrillers are the norm in Bengaluru.",
        homeRecentForm: "W, W, W, L, W",
        awayRecentForm: "L, L, W, W, L",
        keyPlayersHome: ["Virat Kohli", "Kuldeep Yadav"],
        keyPlayersAway: ["Charith Asalanka", "Wanindu Hasaranga"],
        bettingTips: [
          "Total match sixes likely to exceed 15.",
          "Virat Kohli to score big at one of his favorite venues.",
          "Kuldeep Yadav to be the match-winner in the middle overs."
        ],
        detailedNarrative: "The 2nd ODI at the Chinnaswamy. With small boundaries and a flat track, bowlers will have a tough time. Virat Kohli returning to Bengaluru is always a spectacle. Sri Lanka's spinners will need to be extremely precise to contain the Indian power hitters.",
        pitchReport: "Batting paradise. Small boundaries. 330 is a par score.",
        tacticalPreview: "Bowlers must focus on variations. Batters will target the short boundaries.",
        winProbHome: 75,
        winProbAway: 25,
        predictionInsight: "India's firepower in Bengaluru is almost impossible to stop.",
        projectedScoreHome: "340-360",
        projectedScoreAway: "280-300"
      },
      {
        match: "3rd ODI",
        teams: "India vs Sri Lanka",
        date: "Sat, 19 Dec 2026",
        venue: "Narendra Modi Stadium",
        details: "Match Details",
        slug: "ind-vs-sl-3rd-odi-2026",
        homeTeam: "India",
        awayTeam: "Sri Lanka",
        format: "ODI",
        tournament: "Sri Lanka tour of India, 2026",
        city: "Ahmedabad",
        country: "India",
        headToHead: "The world's largest stadium provides a grand stage for the series finale.",
        homeRecentForm: "W, W, W, W, L",
        awayRecentForm: "L, L, L, W, W",
        keyPlayersHome: ["Hardik Pandya", "Jasprit Bumrah"],
        keyPlayersAway: ["Pathum Nissanka", "Dunith Wellalage"],
        bettingTips: [
          "Jasprit Bumrah to be the most economical bowler.",
          "Hardik Pandya to provide the late flourish with the bat.",
          "India likely to complete a series sweep."
        ],
        detailedNarrative: "The ODI series concludes in Ahmedabad. The massive stadium and the tactical use of the black soil vs red soil pitch will be interesting. Hardik Pandya playing in front of his home crowd will be a major highlight. India will look to fine-tune their combinations before the T20Is.",
        pitchReport: "Large ground, help for pacers early on. Turns a bit in the evening.",
        tacticalPreview: "Teams will look for consistent rotation of strike. Boundary hitting is harder due to large dimensions.",
        winProbHome: 80,
        winProbAway: 20,
        predictionInsight: "India's dominance in Ahmedabad is well-documented.",
        projectedScoreHome: "290-310",
        projectedScoreAway: "220-240"
      },
      {
        match: "1st T20I",
        teams: "India vs Sri Lanka",
        date: "Tue, 22 Dec 2026",
        venue: "Niranjan Shah Stadium",
        details: "Match Details",
        slug: "ind-vs-sl-1st-t20i-2026",
        homeTeam: "India",
        awayTeam: "Sri Lanka",
        format: "T20I",
        tournament: "Sri Lanka tour of India, 2026",
        city: "Rajkot",
        country: "India",
        headToHead: "Rajkot is historically a flat deck with very high scores in T20Is.",
        homeRecentForm: "W, W, L, W, W",
        awayRecentForm: "L, W, W, L, W",
        keyPlayersHome: ["Suryakumar Yadav", "Arshdeep Singh"],
        keyPlayersAway: ["Wanindu Hasaranga", "Kusal Perera"],
        bettingTips: [
          "Suryakumar Yadav to hit at least three sixes.",
          "Over 380 runs combined in the match.",
          "Arshdeep Singh to excel in the death overs."
        ],
        detailedNarrative: "The T20I series kicks off in Rajkot. Known for producing high-scoring games, this will be a test of nerve for the bowlers. Suryakumar Yadav's 360-degree batting will be the main attraction. Sri Lanka's Wanindu Hasaranga will be the key to stopping the Indian juggernaut.",
        pitchReport: "Absolutely flat. High-scoring game expected. Par score 210.",
        tacticalPreview: "Batters will look to target the short boundaries. Variations are key for bowlers.",
        winProbHome: 72,
        winProbAway: 28,
        predictionInsight: "India's T20 firepower on flat decks is world-class.",
        projectedScoreHome: "210-230",
        projectedScoreAway: "190-210"
      },
      {
        match: "2nd T20I",
        teams: "India vs Sri Lanka",
        date: "Thu, 24 Dec 2026",
        venue: "Barabati Stadium",
        details: "Match Details",
        slug: "ind-vs-sl-2nd-t20i-2026",
        homeTeam: "India",
        awayTeam: "Sri Lanka",
        format: "T20I",
        tournament: "Sri Lanka tour of India, 2026",
        city: "Cuttack",
        country: "India",
        headToHead: "Cuttack can be unpredictable with dew and slow pitch conditions.",
        homeRecentForm: "W, W, W, L, W",
        awayRecentForm: "L, L, W, W, L",
        keyPlayersHome: ["Rishabh Pant", "Axar Patel"],
        keyPlayersAway: ["Charith Asalanka", "Maheesh Theekshana"],
        bettingTips: [
          "Axar Patel to be the most effective spinner.",
          "Rishabh Pant to finish the game for India.",
          "Dew to play a major role in the second innings."
        ],
        detailedNarrative: "Christmas Eve T20I in Cuttack. The pitch here often helps the spinners and the medium-pacers who can use the variations. Axar Patel's local knowledge and Pant's explosive hitting in the middle order will be crucial. Sri Lanka will rely on Theekshana to control the run rate.",
        pitchReport: "Slightly slow, help for spinners. Dew expected after 8 PM.",
        tacticalPreview: "The team winning the toss will likely bowl first due to the dew factor.",
        winProbHome: 68,
        winProbAway: 32,
        predictionInsight: "India's depth and adaptability give them the edge in varied conditions.",
        projectedScoreHome: "170-185",
        projectedScoreAway: "160-175"
      },
      {
        match: "3rd T20I",
        teams: "India vs Sri Lanka",
        date: "Sun, 27 Dec 2026",
        venue: "Maharashtra Cricket Association Stadium",
        details: "Match Details",
        slug: "ind-vs-sl-3rd-t20i-2026",
        homeTeam: "India",
        awayTeam: "Sri Lanka",
        format: "T20I",
        tournament: "Sri Lanka tour of India, 2026",
        city: "Pune",
        country: "India",
        headToHead: "Pune typically offers high-scoring games with some assistance for the pacers.",
        homeRecentForm: "W, W, W, W, L",
        awayRecentForm: "L, L, L, W, W",
        keyPlayersHome: ["Hardik Pandya", "Jasprit Bumrah"],
        keyPlayersAway: ["Wanindu Hasaranga", "Pathum Nissanka"],
        bettingTips: [
          "Hardik Pandya to lead with both bat and ball.",
          "Jasprit Bumrah to deliver a match-winning spell.",
          "India to complete a clean sweep of the T20I series."
        ],
        detailedNarrative: "The series concludes in Pune. The MCA Stadium usually provides a great contest between bat and ball. Hardik Pandya's captaincy and Jasprit Bumrah's lethal bowling will be India's main tactical strengths. Sri Lanka will look to finish the tour on a high note with Hasaranga leading the fight.",
        pitchReport: "Good bounce, slightly favorable for pacers early on. High-scoring venue.",
        tacticalPreview: "Maximum pressure series finale. Both teams will rely on their most experienced performers.",
        winProbHome: 78,
        winProbAway: 22,
        predictionInsight: "India's overall strength and home advantage make them strong favorites to win the final game.",
        projectedScoreHome: "190-210",
        projectedScoreAway: "170-190"
      }
    ]
  }
];