export interface CricketSeries {
  name: string;
  details: string;
  matches: {
    match: string;
    teams: string;
    date: string;
    venue: string;
    details: string;
    slug: string;
  }[];
}

export const cricketFixtures: CricketSeries[] = [
  {
    name: "Afghanistan tour of Ireland, 2026",
    details: "5 ODIs · Aug 2026",
    matches: [
      {
        match: "1st ODI",
        teams: "Ireland vs Afghanistan",
        date: "Wed, 5 Aug 2026",
        venue: "Bready, Northern Ireland, Bready Cricket Club",
        details: "Match Details",
        slug: "ire-vs-afg-1st-odi-2026"
      },
      {
        match: "2nd ODI",
        teams: "Ireland vs Afghanistan",
        date: "Fri, 7 Aug 2026",
        venue: "Bready, Northern Ireland, Bready Cricket Club",
        details: "Match Details",
        slug: "ire-vs-afg-2nd-odi-2026"
      },
      {
        match: "3rd ODI",
        teams: "Ireland vs Afghanistan",
        date: "Mon, 10 Aug 2026",
        venue: "Belfast, Civil Service Cricket Club",
        details: "Match Details",
        slug: "ire-vs-afg-3rd-odi-2026"
      },
      {
        match: "4th ODI",
        teams: "Ireland vs Afghanistan",
        date: "Wed, 12 Aug 2026",
        venue: "Belfast, Civil Service Cricket Club",
        details: "Match Details",
        slug: "ire-vs-afg-4th-odi-2026"
      },
      {
        match: "5th ODI",
        teams: "Ireland vs Afghanistan",
        date: "Fri, 14 Aug 2026",
        venue: "Belfast, Civil Service Cricket Club",
        details: "Match Details",
        slug: "ire-vs-afg-5th-odi-2026"
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
        venue: "Harare, Harare Sports Club",
        details: "Match Details",
        slug: "zim-vs-ind-1st-t20i-2026"
      },
      {
        match: "2nd T20I",
        teams: "Zimbabwe vs India",
        date: "Jul 25, 2026",
        venue: "Harare, Harare Sports Club",
        details: "Match Details",
        slug: "zim-vs-ind-2nd-t20i-2026"
      },
      {
        match: "3rd T20I",
        teams: "Zimbabwe vs India",
        date: "Jul 26, 2026",
        venue: "Harare, Harare Sports Club",
        details: "Match Details",
        slug: "zim-vs-ind-3rd-t20i-2026"
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
        slug: "wi-vs-pak-warmup-2026"
      },
      {
        match: "1st Test",
        teams: "West Indies vs Pakistan",
        date: "Jul 25-29, 2026",
        venue: "Tarouba, Trinidad, Brian Lara Stadium",
        details: "Match Details",
        slug: "wi-vs-pak-1st-test-2026"
      },
      {
        match: "2nd Test",
        teams: "West Indies vs Pakistan",
        date: "Aug 02-06, 2026",
        venue: "Port of Spain, Trinidad, Queen's Park Oval",
        details: "Match Details",
        slug: "wi-vs-pak-2nd-test-2026"
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
        venue: "Harare, Harare Sports Club",
        details: "Match Details",
        slug: "zim-vs-ban-test-2026"
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
    details: "India vs West Indies - 3 Tests, 5 ODIs",
    matches: [
      {
        match: "1st Test",
        teams: "India vs West Indies",
        date: "Sep 2026",
        venue: "Narendra Modi Stadium, Ahmedabad",
        details: "Upcoming Series",
        slug: "ind-vs-wi-1st-test-2026"
      }
    ]
  },
  {
    name: "Australia tour of South Africa, 2026",
    details: "South Africa vs Australia - 3 Tests, 3 ODIs",
    matches: [
      {
        match: "1st Test",
        teams: "South Africa vs Australia",
        date: "Sep 2026",
        venue: "Wanderers Stadium, Johannesburg",
        details: "Upcoming Series",
        slug: "sa-vs-aus-1st-test-2026"
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
    details: "South Africa vs Bangladesh - 2 Tests, 3 ODIs, 3 T20Is",
    matches: [
      {
        match: "1st Test",
        teams: "South Africa vs Bangladesh",
        date: "Oct 2026",
        venue: "Kingsmead, Durban",
        details: "Upcoming Series",
        slug: "sa-vs-ban-1st-test-2026"
      }
    ]
  },
  {
    name: "England tour of Australia, 2026-27 (The Ashes)",
    details: "Australia vs England - 5 Tests",
    matches: [
      {
        match: "1st Test",
        teams: "Australia vs England",
        date: "Nov 2026",
        venue: "The Gabba, Brisbane",
        details: "Upcoming Series",
        slug: "aus-vs-eng-1st-test-ashes-2026"
      }
    ]
  },
  {
    name: "India tour of New Zealand, 2026-27",
    details: "New Zealand vs India - 2 Tests, 3 ODIs, 5 T20Is",
    matches: [
      {
        match: "1st Test",
        teams: "New Zealand vs India",
        date: "Dec 2026",
        venue: "Eden Park, Auckland",
        details: "Upcoming Series",
        slug: "nz-vs-ind-1st-test-2026"
      }
    ]
  },
  {
    name: "Australia tour of India, 2027",
    details: "India vs Australia - 5 Tests (Border-Gavaskar Trophy)",
    matches: [
      {
        match: "1st Test",
        teams: "India vs Australia",
        date: "Feb 2027",
        venue: "Wankhede Stadium, Mumbai",
        details: "Upcoming Series",
        slug: "ind-vs-aus-1st-test-2027"
      }
    ]
  },
  {
    name: "Australia vs England 150th Anniversary Test, 2027",
    details: "One-off Test Match celebrating 150 years of Test Cricket",
    matches: [
      {
        match: "Anniversary Test",
        teams: "Australia vs England",
        date: "Mar 2027",
        venue: "MCG, Melbourne",
        details: "Historic Match",
        slug: "aus-vs-eng-150th-test-2027"
      }
    ]
  },
  {
    name: "Sri Lanka tour of New Zealand, 2027",
    details: "New Zealand vs Sri Lanka - 2 Tests, 3 ODIs, 3 T20Is",
    matches: [
      {
        match: "1st Test",
        teams: "New Zealand vs Sri Lanka",
        date: "Mar 2027",
        venue: "Hagley Oval, Christchurch",
        details: "Upcoming Series",
        slug: "nz-vs-sl-1st-test-2027"
      }
    ]
  },
  {
    name: "Zimbabwe tour of India, 2027",
    details: "India vs Zimbabwe - 1 Test, 3 ODIs",
    matches: [
      {
        match: "Only Test",
        teams: "India vs Zimbabwe",
        date: "Mar 2027",
        venue: "TBC, India",
        details: "Upcoming Series",
        slug: "ind-vs-zim-test-2027"
      }
    ]
  },
  {
    name: "New Zealand tour of Australia, 2026-27",
    details: "Australia vs New Zealand - 3 ODIs, 3 T20Is",
    matches: [
      {
        match: "1st ODI",
        teams: "Australia vs New Zealand",
        date: "Jan 2027",
        venue: "SCG, Sydney",
        details: "Upcoming Series",
        slug: "aus-vs-nz-1st-odi-2027"
      }
    ]
  },
  {
    name: "England tour of South Africa, 2026-27",
    details: "South Africa vs England - 3 Tests, 3 ODIs, 3 T20Is",
    matches: [
      {
        match: "1st Test",
        teams: "South Africa vs England",
        date: "Dec 2026",
        venue: "Centurion, Pretoria",
        details: "Upcoming Series",
        slug: "sa-vs-eng-1st-test-2026"
      }
    ]
  },
  {
    name: "Sri Lanka tour of India, 2026",
    details: "India vs Sri Lanka - 3 ODIs, 3 T20Is",
    matches: [
      {
        match: "1st T20I",
        teams: "India vs Sri Lanka",
        date: "Jan 2026",
        venue: "TBC, India",
        details: "Upcoming Series",
        slug: "ind-vs-sl-1st-t20i-2026"
      }
    ]
  }
];