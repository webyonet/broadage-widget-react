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

export class SampleSoccerFixture extends Component {
     onActionCallback = (widgetType, actionType, actionPayload) => {
        console.log(widgetType, actionType, actionPayload);
     };
    
     render() {
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

| Type                                         | Bundle Id           |
|----------------------------------------------|---------------------|
|`soccerFixture`                               | soccer-fx           |
|`trioCombo`                                   | all-tc              | 
|`liveScoreTicker`                             | all-lst             | 
|`liveScoreDetailed`                           | all-lsd             | 
|`liveScore`                                   | all-ls              | 
|`iceHockeyScoreboard`                         | iceHockey-sb        | 
|`iceHockeyStandings`                          | iceHockey-st        | 
|`iceHockeyFixture`                            | iceHockey-fx        | 
|`baseballScoreboard`                          | baseball-sb         | 
|`baseballStandings`                           | baseball-st         | 
|`baseballFixture`                             | baseball-fx         | 
|`footballPlayByPlay`                          | football-pbp        | 
|`footballGameLeaders`                         | football-gl         | 
|`footballLiveTeamStatistics`                  | football-ltsts      | 
|`footballLiveMatchStatistics`                 | football-lmsts      | 
|`footballBoxScore`                            | football-bs         | 
|`footballScoreboard`                          | football-sb         | 
|`footballStandings`                           | football-st         | 
|`footballFixture`                             | football-fx         | 
|`volleyballH2hStandings`                      | volleyball-hst      | 
|`volleyballTeamStandings`                     | volleyball-tst      | 
|`volleyballStandings`                         | volleyball-st       | 
|`volleyballTeamSchedule`                      | volleyball-ts       | 
|`volleyballFixture`                           | volleyball-fx       | 
|`handballH2hStandings`                        | handball-hst        | 
|`handballStandings`                           | handball-st         | 
|`handballTeamSchedule`                        | handball-ts         | 
|`handballFixture`                             | handball-fx         | 
|`basketballMatchCenter`                       | basketball-mc       | 
|`basketballPlayByPlay`                        | basketball-pbp      | 
|`basketballLiveMatchStatistics`               | basketball-lmsts    | 
|`basketballGameLeaders`                       | basketball-gl       | 
|`basketballLeadTracker`                       | basketball-lt       | 
|`basketballBoxScore`                          | basketball-bs       | 
|`basketballMatchInfo`                         | basketball-mi       | 
|`basketballScoreboard`                        | basketball-sb       | 
|`basketballTeamReboundsLeaderboardPerGame`    | basketball-trlbpg   | 
|`basketballTeamPointsLeaderboardPerGame`      | basketball-tplbpg   | 
|`basketballTeamAssistsLeaderboardPerGame`     | basketball-talbpg   | 
|`basketballLeaderboardReboundsPerGame`        | basketball-lbrpg    | 
|`basketballLeaderboardAssistsPerGame`         | basketball-lbapg    | 
|`basketballLeaderboardPointsPerGame`          | basketball-lbppg    | 
|`basketballSquadStats`                        | basketball-sqs      | 
|`basketballH2hStandings`                      | basketball-hst      | 
|`basketballTeamStandings`                     | basketball-tst      | 
|`basketballStandings`                         | basketball-st       | 
|`basketballTeamSchedule`                      | basketball-ts       | 
|`basketballFixture`                           | basketball-fx       | 
|`soccerMatchCenter`                           | soccer-mc           | 
|`soccerMatchInfo`                             | soccer-mi           | 
|`soccerFormation`                             | soccer-fmt          | 
|`soccerLineup`                                | soccer-lu           | 
|`soccerTimeline`                              | soccer-tl           | 
|`soccerLiveMatchStatistics`                   | soccer-lmsts        | 
|`soccerScoreboard`                            | soccer-sb           | 
|`soccerCommentary`                            | soccer-cm           | 
|`soccerLiveFixture`                           | soccer-lfx          | 
|`soccerTeamCardsLeaderboard`                  | soccer-tclb         | 
|`soccerTeamAssistsLeaderboard`                | soccer-talb         | 
|`soccerTeamGoalsLeaderboard`                  | soccer-tglb         | 
|`soccerLeaderboardCards`                      | soccer-lbc          | 
|`soccerLeaderboardAssists`                    | soccer-lba          | 
|`soccerLeaderboardGoals`                      | soccer-lbg          | 
|`soccerSquadStats`                            | soccer-sqs          | 
|`soccerH2hStandings`                          | soccer-hst          | 
|`soccerTeamStandings`                         | soccer-tst          | 
|`soccerStandings`                             | soccer-st           | 
|`soccerTeamSchedule`                          | soccer-ts           | 
