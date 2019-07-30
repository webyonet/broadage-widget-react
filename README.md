# broadage-widget-react
Broadage widgets react wrapper

### Installation

`yarn add broadage-widget-react`
<br/>or<br/>
`npm install broadage-widget-react --save`

### Products and Documentations

[Main Page](https://developers.broadage.com)
<br/>
[Developers Guide](https://developers.broadage.com)
<br/>
[Widget Guide](https://developers.broadage.com/widget)

### Usage

```javascript
import React, { Component } from 'react';
import BroadageWidget from 'broadage-widget-react';

export class SampleSoccerFixture extends Component {
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
             />
         )
     }
}

export class SampleBasketballMatchCenter extends Component {
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
             />
         )
     }
}
```


### Props

| Name                               | Type        | Description                                                         |
|------------------------------------|-------------|---------------------------------------------------------------------|
|`requiredFields`                    | Object      | Mandatory fields for widget in work are defined in this field       |
|`options`   (optional using)        | Object      | Language, theme, etc. properties are assigned in this field.        |
|`widget`                            | String      | The type of widget is define in this field                          |
|`bundleId`                          | String      | The widget bundle id is define in this field                        |
|`accountId`                         | String      | Broadage account number is defined in this field                    |
|`className` (optional using)        | String      | Assigns class name to main container                                |
