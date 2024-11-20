# broadage-widget-react
Broadage widgets react wrapper

* Tournament list widget
* Livescore widget
* Tournament Info widget
* Tournament Teams widget
* Tournament Fixture widget
* Team Fixture widget
* Tournament Standings widget
* Leaderboard widget
* Leaderboard Points widget
* Match Summary widget
* Match Boxscore widget
* Match Play by Play widget
* Team Squad widget
* Team Schedule widget
* Leaderboard widget
* Leaderboard Goals widget
* Leaderboard Assists widget
* Leaderboard Yellow Cards widget
* Leaderboard Red Cards widget
* Team Squad with Statistics widget
* Timeline widget
* Lineup widget
* Formation widget
* Lead Tracker widget
* Match Center widget
* Match Center widget
* [more](https://www.broadage.com/sports-data-widgets)

### Installation

`yarn add broadage-widget-react`
<br/>or<br/>
`npm install broadage-widget-react --save`

### Products and Documentations

[Main Page](https://www.broadage.com)
<br/>
[Developers Guide](https://developers.broadage.com)
<br/>
[Widget Guide](https://developers.broadage.com/widget)

### Usage

```javascript
import React, { Component } from 'react';
import BroadageWidget from 'broadage-widget-react';

export default function SampleSoccerFixture() {
    const onActionCallback = (widgetType, actionType, actionPayload) => {
        console.log(widgetType, actionType, actionPayload);
    };

    // Soccer Fixture Sample
    
    return (
        <BroadageWidget
            requiredFields={{ tournamentId: 1 }}
            options={{ lang: 'en-US' }}
            widget="soccerFixture"
            bundleId="soccer-fx"
            accountId="0000-0000-0000"
            className="widget-wrapper"
            queryStringParse={{ tournamentId: "tid" }}
            onActionCallback={this.onActionCallback}
        />
    )
}

export class SampleBasketballMatchCenter extends Component {
     onActionCallback = (widgetType, actionType, actionPayload) => {
         console.log(widgetType, actionType, actionPayload);
     };
     
     render() {
         // Basketball Match Center Sample
         return (
             <BroadageWidget
                 requiredFields={{ matchId: 286298 }}
                 options={{ lang: 'fr-FR', theme: "darkBlue" }}
                 widget="basketballMatchCenter"
                 bundleId="basketball-mc"
                 accountId="0000-0000-0000"
                 className="widget-wrapper"
                 queryStringParse={{ matchId: "mid" }}
                 onActionCallback={this.onActionCallback}
             />
         )
     }
}
```


### Props

| Name                               | Type        | Description                                                                        |
|------------------------------------|-------------|------------------------------------------------------------------------------------|
|`requiredFields`                    | Object      | Mandatory fields for widget in work are defined in this field                      |
|`options`   (optional using)        | Object      | Language, theme, etc. properties are assigned in this field.                       |
|`widget`                            | String      | The type of widget is define in this field                                         |
|`bundleId`                          | String      | The widget bundle id is define in this field                                       |
|`accountId`                         | String      | Broadage account number is defined in this field                                   |
|`className` (optional using)        | String      | Assigns class name to main container                                               |
|`queryStringParse` (optional using) | Object      | Match the URL query string and widget mandatory fields to each other.              |
|`onActionCallback` (optional using) | Function    | This callback function is triggered by user changed filters, score change etc.     |
   
           
### Widget type to bundleId

In the json object below: 
`key: widget type` `value: bundle id`

```javascript
{
   soccerFixture: "soccer-fx",
   soccerTeamSchedule: "soccer-ts",
   soccerTeamMatchDaySchedule: "soccer-tmds",
   soccerStandings: "soccer-st",
   soccerLiveStandings: "soccer-lstd",
   soccerTeamStandings: "soccer-tst",
   soccerH2hStandings: "soccer-hst",
   soccerSquadStats: "soccer-sqs",
   soccerLeaderboardGoals: "soccer-lbg",
   soccerLeaderboardAssists: "soccer-lba",
   soccerLeaderboardCards: "soccer-lbc",
   soccerTeamGoalsLeaderboard: "soccer-tglb",
   soccerTeamAssistsLeaderboard: "soccer-talb",
   soccerTeamCardsLeaderboard: "soccer-tclb",
   soccerLiveFixture: "soccer-lfx",
   soccerCommentary: "soccer-cm",
   soccerScoreboard: "soccer-sb",
   soccerLiveMatchStatistics: "soccer-lmsts",
   soccerTimeline: "soccer-tl",
   soccerLineup: "soccer-lu",
   soccerFormation: "soccer-fmt",
   soccerMatchInfo: "soccer-mi",
   soccerMatchCenter: "soccer-mc",
   soccerMissingPlayers: "soccer-mp",
   soccerH2hResults: "soccer-hr",
   soccerH2hStats: "soccer-hs",
   soccerMarketStats: "soccer-ms",
   soccerTeamForm: "soccer-tf",
   soccerSeasonalMarketStats: "soccer-sms",
   soccerTeamSeasonalStats: "soccer-tss",
   soccerMatchHeader: "soccer-mh",
   soccerTotalGoalTable: "soccer-tgt",
   soccerBothTeamsToScore: "soccer-btts",
   soccerFullTimeUnderOverTable: "soccer-ftuot",
   soccerHalfTimeUnderOverTable: "soccer-htuot",
   soccerRefereeStats: "soccer-rs",
   soccerStreaks: "soccer-strk",
   soccerGoalsRound: "soccer-gr",
   soccerSeasonalGoalAnalysis: "soccer-sga",
   soccerGoalAnalysis: "soccer-ga",
   soccerTournamentGoalAnalysis: "soccer-tga",
   soccerRefereeMatchStats: "soccer-rms",
   soccerH2hRivalsStandings: "soccer-hrs",
   soccerPositionMatrix: "soccer-pm",
   basketballFixture: "basketball-fx",
   basketballTeamSchedule: "basketball-ts",
   basketballTeamMatchDaySchedule: "basketball-tmds",
   basketballStandings: "basketball-st",
   basketballTeamStandings: "basketball-tst",
   basketballH2hStandings: "basketball-hst",
   basketballSquadStats: "basketball-sqs",
   basketballLeaderboardPointsPerGame: "basketball-lbppg",
   basketballLeaderboardAssistsPerGame: "basketball-lbapg",
   basketballLeaderboardReboundsPerGame: "basketball-lbrpg",
   basketballTeamAssistsLeaderboardPerGame: "basketball-talbpg",
   basketballTeamPointsLeaderboardPerGame: "basketball-tplbpg",
   basketballTeamReboundsLeaderboardPerGame: "basketball-trlbpg",
   basketballScoreboard: "basketball-sb",
   basketballMatchInfo: "basketball-mi",
   basketballBoxScore: "basketball-bs",
   basketballLeadTracker: "basketball-lt",
   basketballGameLeaders: "basketball-gl",
   basketballLiveMatchStatistics: "basketball-lmsts",
   basketballPlayByPlay: "basketball-pbp",
   basketballMatchCenter: "basketball-mc",
   basketballH2hResults: "basketball-hr",
   basketballH2hStats: "basketball-hs",
   basketballTeamSeasonalStats: "basketball-tss",
   basketballSeasonalMarketStats: "basketball-sms",
   basketballTeamForm: "basketball-tf",
   basketballMarketStats: "basketball-ms",
   basketballMatchHeader: "basketball-mh",
   basketballMissingPlayers: "basketball-mp",
   basketballH2hBasedPointsAnalysis: "basketball-hbpa",
   basketballH2hSeasonalPointsAnalysis: "basketball-hspa",
   basketballH2hTournamentMatchMargin: "basketball-tmm",
   basketballSeasonalTeamAdvancedStats: "basketball-stas",
   basketballFullTimeUnderOverAnalysis: "basketball-ftuoa",
   basketballHalfTimeUnderOverAnalysis: "basketball-htuoa",
   handballFixture: "handball-fx",
   handballTeamSchedule: "handball-ts",
   handballTeamMatchDaySchedule: "handball-tmds",
   handballStandings: "handball-st",
   handballTeamStandings: "handball-tst",
   handballH2hStandings: "handball-hst",
   handballH2hResults: "handball-hr",
   handballMatchHeader: "handball-mh",
   handballH2hStats: "handball-hs",
   handballTeamForm: "handball-tf",
   handballTeamSeasonalStats: "handball-tss",
   handballScoreboard: "handball-sb",
   volleyballFixture: "volleyball-fx",
   volleyballTeamSchedule: "volleyball-ts",
   volleyballTeamMatchDaySchedule: "volleyball-tmds",
   volleyballStandings: "volleyball-st",
   volleyballTeamStandings: "volleyball-tst",
   volleyballH2hStandings: "volleyball-hst",
   volleyballH2hResults: "volleyball-hr",
   volleyballMatchHeader: "volleyball-mh",
   volleyballH2hStats: "volleyball-hs",
   volleyballTeamForm: "volleyball-tf",
   volleyballTeamSeasonalStats: "volleyball-tss",
   volleyballScoreboard: "volleyball-sb",
   footballFixture: "football-fx",
   footballStandings: "football-st",
   footballScoreboard: "football-sb",
   footballBoxScore: "football-bs",
   footballLiveMatchStatistics: "football-lmsts",
   footballLiveTeamStatistics: "football-ltsts",
   footballGameLeaders: "football-gl",
   footballPlayByPlay: "football-pbp",
   footballH2hStandings: "football-hst",
   footballTeamSchedule: "football-ts",
   footballTeamStandings: "football-tst",
   baseballFixture: "baseball-fx",
   baseballStandings: "baseball-st",
   baseballScoreboard: "baseball-sb",
   baseballH2hStandings: "baseball-hst",
   baseballTeamSchedule: "baseball-ts",
   baseballTeamStandings: "baseball-tst",
   iceHockeyFixture: "iceHockey-fx",
   iceHockeyStandings: "iceHockey-st",
   iceHockeyScoreboard: "iceHockey-sb",
   iceHockeyH2hResults: "iceHockey-hr",
   iceHockeyH2hStats: "iceHockey-hs",
   iceHockeyMatchHeader: "iceHockey-mh",
   iceHockeyTeamSeasonalStats: "iceHockey-tss",
   iceHockeyTeamForm: "iceHockey-tf",
   iceHockeyH2hStandings: "iceHockey-hst",
   iceHockeyTeamSchedule: "iceHockey-ts",
   iceHockeyTeamStandings: "iceHockey-tst",
   tableTennisH2hResults: "tableTennis-hr",
   tableTennisH2hStats: "tableTennis-hs",
   tableTennisMatchHeader: "tableTennis-mh",
   tableTennisTeamSeasonalStats: "tableTennis-tss",
   tableTennisTeamForm: "tableTennis-tf",
   leagueOfLegendsH2hResults: "leagueOfLegends-hr",
   leagueOfLegendsH2hStats: "leagueOfLegends-hs",
   leagueOfLegendsMatchHeader: "leagueOfLegends-mh",
   leagueOfLegendsTeamSeasonalStats: "leagueOfLegends-tss",
   leagueOfLegendsTeamForm: "leagueOfLegends-tf",
   dotaH2hResults: "dota-hr",
   dotaH2hStats: "dota-hs",
   dotaMatchHeader: "dota-mh",
   dotaTeamSeasonalStats: "dota-tss",
   dotaTeamForm: "dota-tf",
   counterStrikeH2hResults: "counterStrike-hr",
   counterStrikeH2hStats: "counterStrike-hs",
   counterStrikeMatchHeader: "counterStrike-mh",
   counterStrikeTeamSeasonalStats: "counterStrike-tss",
   counterStrikeTeamForm: "counterStrike-tf",
   callOfDutyH2hResults: "callOfDuty-hr",
   callOfDutyH2hStats: "callOfDuty-hs",
   callOfDutyMatchHeader: "callOfDuty-mh",
   callOfDutyTeamSeasonalStats: "callOfDuty-tss",
   callOfDutyTeamForm: "callOfDuty-tf",
   overWatchH2hResults: "overWatch-hr",
   overWatchH2hStats: "overWatch-hs",
   overWatchMatchHeader: "overWatch-mh",
   overWatchTeamSeasonalStats: "overWatch-tss",
   overWatchTeamForm: "overWatch-tf",
   hearthstoneH2hResults: "hearthstone-hr",
   hearthstoneH2hStats: "hearthstone-hs",
   hearthstoneMatchHeader: "hearthstone-mh",
   hearthstoneTeamSeasonalStats: "hearthstone-tss",
   hearthstoneTeamForm: "hearthstone-tf",
   starCraftH2hResults: "starCraft-hr",
   starCraftH2hStats: "starCraft-hs",
   starCraftMatchHeader: "starCraft-mh",
   starCraftTeamSeasonalStats: "starCraft-tss",
   starCraftTeamForm: "starCraft-tf",
   fifaH2hResults: "fifa-hr",
   fifaH2hStats: "fifa-hs",
   fifaMatchHeader: "fifa-mh",
   fifaTeamSeasonalStats: "fifa-tss",
   fifaTeamForm: "fifa-tf",
   liveScore: "all-ls",
   liveScoreDetailed: "all-lsd",
   liveScoreTicker: "all-lst",
   trioCombo: "all-tc"
}

