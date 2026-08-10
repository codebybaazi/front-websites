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
        ]
      },
      {
        match: "2nd ODI",
        teams: "Ireland vs Afghanistan",
        date: "Fri, 7 Aug 2026",
        venue: "Bready, Northern Ireland, Bready Cricket Club",
        details: "Match Details",
        slug: "ire-vs-afg-2nd-odi-2026",
        homeTeam: "Ireland",
        awayTeam: "Afghanistan",
        format: "ODI",
        tournament: "Afghanistan tour of Ireland, 2026",
        city: "Bready",
        country: "Northern Ireland",
        headToHead: "Afghanistan has won 4 out of the last 5 ODIs against Ireland.",
        homeRecentForm: "L, W, L, L, L",
        awayRecentForm: "W, W, L, W, W",
        keyPlayersHome: ["Harry Tector", "Curtis Campher", "George Dockrell"],
        keyPlayersAway: ["Mohammad Nabi", "Mujeeb Ur Rahman", "Azmatullah Omarzai"],
        bettingTips: [
          "Spinners to play a major role in the middle overs.",
          "Ireland needs a strong start from their openers.",
          "Afghanistan's middle order looks very solid."
        ]
      },
      {
        match: "3rd ODI",
        teams: "Ireland vs Afghanistan",
        date: "Mon, 10 Aug 2026",
        venue: "Belfast, Civil Service Cricket Club",
        details: "Match Details",
        slug: "ire-vs-afg-3rd-odi-2026",
        homeTeam: "Ireland",
        awayTeam: "Afghanistan",
        format: "ODI",
        tournament: "Afghanistan tour of Ireland, 2026",
        city: "Belfast",
        country: "Northern Ireland",
        headToHead: "In Belfast, matches have been more evenly contested between these two.",
        homeRecentForm: "L, W, L, W, L",
        awayRecentForm: "W, L, W, W, W",
        keyPlayersHome: ["Mark Adair", "Andy Balbirnie", "Lorcan Tucker"],
        keyPlayersAway: ["Gulbadin Naib", "Hashmatullah Shahidi", "Rashid Khan"],
        bettingTips: [
          "Belfast pitch offers more bounce; pace bowlers might thrive.",
          "Check weather conditions; moisture can favor early swing.",
          "Toss winner likely to bowl first under cloudy skies."
        ]
      },
      {
        match: "4th ODI",
        teams: "Ireland vs Afghanistan",
        date: "Wed, 12 Aug 2026",
        venue: "Belfast, Civil Service Cricket Club",
        details: "Match Details",
        slug: "ire-vs-afg-4th-odi-2026",
        homeTeam: "Ireland",
        awayTeam: "Afghanistan",
        format: "ODI",
        tournament: "Afghanistan tour of Ireland, 2026",
        city: "Belfast",
        country: "Northern Ireland",
        headToHead: "Afghanistan leads the series historically by a significant margin.",
        homeRecentForm: "L, L, W, L, L",
        awayRecentForm: "W, W, W, L, W",
        keyPlayersHome: ["Paul Stirling", "Joshua Little"],
        keyPlayersAway: ["Rashid Khan", "Rahmanullah Gurbaz"],
        bettingTips: [
          "Spin dominates the latter half of the innings.",
          "Expect high liquidity in the match-winner market.",
          "Gurbaz to score 30+ runs is a high probability bet."
        ]
      },
      {
        match: "5th ODI",
        teams: "Ireland vs Afghanistan",
        date: "Fri, 14 Aug 2026",
        venue: "Belfast, Civil Service Cricket Club",
        details: "Match Details",
        slug: "ire-vs-afg-5th-odi-2026",
        homeTeam: "Ireland",
        awayTeam: "Afghanistan",
        format: "ODI",
        tournament: "Afghanistan tour of Ireland, 2026"
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
        venue: "Harare, Harare Sports Club",
        details: "Match Details",
        slug: "zim-vs-ind-2nd-t20i-2026",
        homeTeam: "Zimbabwe",
        awayTeam: "India",
        format: "T20I",
        tournament: "India tour of Zimbabwe, 2026"
      },
      {
        match: "3rd T20I",
        teams: "Zimbabwe vs India",
        date: "Jul 26, 2026",
        venue: "Harare, Harare Sports Club",
        details: "Match Details",
        slug: "zim-vs-ind-3rd-t20i-2026",
        homeTeam: "Zimbabwe",
        awayTeam: "India",
        format: "T20I",
        tournament: "India tour of Zimbabwe, 2026"
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
        venue: "Harare, Harare Sports Club",
        details: "Match Details",
        slug: "zim-vs-ban-1st-odi-2026"
      },
      {
        match: "2nd ODI",
        teams: "Zimbabwe vs Bangladesh",
        date: "Jul 09, 2026",
        venue: "Harare, Harare Sports Club",
        details: "Match Details",
        slug: "zim-vs-ban-2nd-odi-2026"
      },
      {
        match: "3rd ODI",
        teams: "Zimbabwe vs Bangladesh",
        date: "Jul 11, 2026",
        venue: "Harare, Harare Sports Club",
        details: "Match Details",
        slug: "zim-vs-ban-3rd-odi-2026"
      },
      {
        match: "1st T20I",
        teams: "Zimbabwe vs Bangladesh",
        date: "Jul 15, 2026",
        venue: "Bulawayo, Queens Sports Club",
        details: "Match Details",
        slug: "zim-vs-ban-1st-t20i-2026"
      },
      {
        match: "2nd T20I",
        teams: "Bangladesh vs Zimbabwe",
        date: "Jul 17, 2026",
        venue: "Bulawayo, Queens Sports Club",
        details: "Match Details",
        slug: "zim-vs-ban-2nd-t20i-2026"
      },
      {
        match: "3rd T20I",
        teams: "Zimbabwe vs Bangladesh",
        date: "Jul 19, 2026",
        venue: "Bulawayo, Queens Sports Club",
        details: "Match Details",
        slug: "zim-vs-ban-3rd-t20i-2026"
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
        slug: "eng-vs-ind-1st-t20i-2026"
      },
      {
        match: "2nd T20I",
        teams: "India vs England",
        date: "Jul 04, 2026",
        venue: "Manchester, Emirates Old Trafford",
        details: "Match Details",
        slug: "eng-vs-ind-2nd-t20i-2026"
      },
      {
        match: "3rd T20I",
        teams: "England vs India",
        date: "Jul 07, 2026",
        venue: "Nottingham, Trent Bridge",
        details: "Match Details",
        slug: "eng-vs-ind-3rd-t20i-2026"
      },
      {
        match: "4th T20I",
        teams: "India vs England",
        date: "Jul 09, 2026",
        venue: "Bristol, County Ground",
        details: "Match Details",
        slug: "eng-vs-ind-4th-t20i-2026"
      },
      {
        match: "5th T20I",
        teams: "England vs India",
        date: "Jul 11, 2026",
        venue: "Southampton, The Rose Bowl",
        details: "Match Details",
        slug: "eng-vs-ind-5th-t20i-2026"
      },
      {
        match: "1st ODI",
        teams: "England vs India",
        date: "Jul 14, 2026",
        venue: "Birmingham, Edgbaston",
        details: "Match Details",
        slug: "eng-vs-ind-1st-odi-2026"
      },
      {
        match: "2nd ODI",
        teams: "India vs England",
        date: "Jul 16, 2026",
        venue: "Cardiff, Sophia Gardens",
        details: "Match Details",
        slug: "eng-vs-ind-2nd-odi-2026"
      },
      {
        match: "3rd ODI",
        teams: "England vs India",
        date: "Jul 19, 2026",
        venue: "London, Lord's",
        details: "Match Details",
        slug: "eng-vs-ind-3rd-odi-2026"
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
        venue: "Guyana, Providence Stadium",
        details: "Match Details",
        slug: "wi-vs-nz-1st-odi-2026"
      },
      {
        match: "2nd ODI",
        teams: "West Indies vs New Zealand",
        date: "Jul 13, 2026",
        venue: "Guyana, Providence Stadium",
        details: "Match Details",
        slug: "wi-vs-nz-2nd-odi-2026"
      },
      {
        match: "3rd ODI",
        teams: "West Indies vs New Zealand",
        date: "Jul 16, 2026",
        venue: "Guyana, Providence Stadium",
        details: "Match Details",
        slug: "wi-vs-nz-3rd-odi-2026"
      },
      {
        match: "4th ODI",
        teams: "West Indies vs New Zealand",
        date: "Jul 19, 2026",
        venue: "Bridgetown, Barbados, Kensington Oval",
        details: "Match Details",
        slug: "wi-vs-nz-4th-odi-2026"
      },
      {
        match: "5th ODI",
        teams: "West Indies vs New Zealand",
        date: "Jul 21, 2026",
        venue: "Bridgetown, Barbados, Kensington Oval",
        details: "Match Details",
        slug: "wi-vs-nz-5th-odi-2026"
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
        venue: "Thiruvananthapuram, Greenfield International Stadium",
        details: "Match Details",
        slug: "ind-vs-wi-1st-odi-2026"
      },
      {
        match: "2nd ODI",
        teams: "India vs West Indies",
        date: "Wed, 30 Sep 2026",
        venue: "Guwahati, Barsapara Cricket Stadium",
        details: "Match Details",
        slug: "ind-vs-wi-2nd-odi-2026"
      },
      {
        match: "3rd ODI",
        teams: "India vs West Indies",
        date: "Sat, 3 Oct 2026",
        venue: "New Chandigarh, Mullanpur Stadium",
        details: "Match Details",
        slug: "ind-vs-wi-3rd-odi-2026"
      },
      {
        match: "1st T20I",
        teams: "India vs West Indies",
        date: "Tue, 6 Oct 2026",
        venue: "Lucknow, Ekana Cricket Stadium",
        details: "Match Details",
        slug: "ind-vs-wi-1st-t20i-2026"
      },
      {
        match: "2nd T20I",
        teams: "India vs West Indies",
        date: "Fri, 9 Oct 2026",
        venue: "Ranchi, JSCA Stadium",
        details: "Match Details",
        slug: "ind-vs-wi-2nd-t20i-2026"
      },
      {
        match: "3rd T20I",
        teams: "India vs West Indies",
        date: "Sun, 11 Oct 2026",
        venue: "Indore, Holkar Stadium",
        details: "Match Details",
        slug: "ind-vs-wi-3rd-t20i-2026"
      },
      {
        match: "4th T20I",
        teams: "India vs West Indies",
        date: "Wed, 14 Oct 2026",
        venue: "Hyderabad, Rajiv Gandhi Stadium",
        details: "Match Details",
        slug: "ind-vs-wi-4th-t20i-2026"
      },
      {
        match: "5th T20I",
        teams: "India vs West Indies",
        date: "Sat, 17 Oct 2026",
        venue: "Bengaluru, M.Chinnaswamy Stadium",
        details: "Match Details",
        slug: "ind-vs-wi-5th-t20i-2026"
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
        venue: "Durban, Kingsmead",
        details: "Match Details",
        slug: "sa-vs-aus-1st-odi-2026"
      },
      {
        match: "2nd ODI",
        teams: "South Africa vs Australia",
        date: "Sun, 27 Sep 2026",
        venue: "Johannesburg, The Wanderers Stadium",
        details: "Match Details",
        slug: "sa-vs-aus-2nd-odi-2026"
      },
      {
        match: "3rd ODI",
        teams: "South Africa vs Australia",
        date: "Wed, 30 Sep 2026",
        venue: "Potchefstroom, Senwes Park",
        details: "Match Details",
        slug: "sa-vs-aus-3rd-odi-2026"
      },
      {
        match: "1st Test",
        teams: "South Africa vs Australia",
        date: "Fri, 9 Oct 2026",
        venue: "Durban, Kingsmead",
        details: "Match Details",
        slug: "sa-vs-aus-1st-test-2026"
      },
      {
        match: "2nd Test",
        teams: "South Africa vs Australia",
        date: "Sun, 18 Oct 2026",
        venue: "Gqeberha, St George's Park",
        details: "Match Details",
        slug: "sa-vs-aus-2nd-test-2026"
      },
      {
        match: "3rd Test",
        teams: "South Africa vs Australia",
        date: "Tue, 27 Oct 2026",
        venue: "Cape Town, Newlands",
        details: "Match Details",
        slug: "sa-vs-aus-3rd-test-2026"
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
        venue: "Southampton, The Rose Bowl",
        details: "Match Details",
        slug: "eng-vs-sl-1st-t20i-2026"
      },
      {
        match: "2nd T20I",
        teams: "England vs Sri Lanka",
        date: "Thu, 17 Sep 2026",
        venue: "Cardiff, Sophia Gardens",
        details: "Match Details",
        slug: "eng-vs-sl-2nd-t20i-2026"
      },
      {
        match: "3rd T20I",
        teams: "England vs Sri Lanka",
        date: "Sat, 19 Sep 2026",
        venue: "Manchester, Emirates Old Trafford",
        details: "Match Details",
        slug: "eng-vs-sl-3rd-t20i-2026"
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
        venue: "Leeds, Headingley",
        details: "Match Details",
        slug: "eng-vs-pak-1st-test-2026"
      },
      {
        match: "2nd Test",
        teams: "England vs Pakistan",
        date: "Thu, 27 Aug 2026",
        venue: "London, Lord's",
        details: "Match Details",
        slug: "eng-vs-pak-2nd-test-2026"
      },
      {
        match: "3rd Test",
        teams: "England vs Pakistan",
        date: "Wed, 9 Sep 2026",
        venue: "Birmingham, Edgbaston",
        details: "Match Details",
        slug: "eng-vs-pak-3rd-test-2026"
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
        venue: "Galle, Galle International Stadium",
        details: "Match Details",
        slug: "sl-vs-ind-1st-test-2026"
      },
      {
        match: "2nd Test",
        teams: "Sri Lanka vs India",
        date: "Sun, 23 Aug 2026",
        venue: "Colombo, Sinhalese Sports Club",
        details: "Match Details",
        slug: "sl-vs-ind-2nd-test-2026"
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
        venue: "Darwin, Marrara Cricket Ground",
        details: "Match Details",
        slug: "aus-vs-ban-1st-test-2026"
      },
      {
        match: "2nd Test",
        teams: "Australia vs Bangladesh",
        date: "Sat, 22 Aug 2026",
        venue: "Mackay, Great Barrier Reef Arena",
        details: "Match Details",
        slug: "aus-vs-ban-2nd-test-2026"
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
        venue: "Delhi, Arun Jaitley Stadium",
        details: "Match Details",
        slug: "ind-vs-sl-1st-odi-2026"
      },
      {
        match: "2nd ODI",
        teams: "India vs Sri Lanka",
        date: "Wed, 16 Dec 2026",
        venue: "Bengaluru, M.Chinnaswamy Stadium",
        details: "Match Details",
        slug: "ind-vs-sl-2nd-odi-2026"
      },
      {
        match: "3rd ODI",
        teams: "India vs Sri Lanka",
        date: "Sat, 19 Dec 2026",
        venue: "Ahmedabad, Narendra Modi Stadium",
        details: "Match Details",
        slug: "ind-vs-sl-3rd-odi-2026"
      },
      {
        match: "1st T20I",
        teams: "India vs Sri Lanka",
        date: "Tue, 22 Dec 2026",
        venue: "Rajkot, Niranjan Shah Stadium, Khandheri",
        details: "Match Details",
        slug: "ind-vs-sl-1st-t20i-2026"
      },
      {
        match: "2nd T20I",
        teams: "India vs Sri Lanka",
        date: "Thu, 24 Dec 2026",
        venue: "Cuttack, Barabati Stadium",
        details: "Match Details",
        slug: "ind-vs-sl-2nd-t20i-2026"
      },
      {
        match: "3rd T20I",
        teams: "India vs Sri Lanka",
        date: "Sun, 27 Dec 2026",
        venue: "Pune, Maharashtra Cricket Association Stadium",
        details: "Match Details",
        slug: "ind-vs-sl-3rd-t20i-2026"
      }
    ]
  }
];