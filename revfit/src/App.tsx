import React, { Component } from 'react';
import './App.css';

import TabsWrappedLabel from './component/Tab-Component/WeekOneComponent';
import DisabledTabs from './component/Tab-Component/WeekOneComponent';
import PersistentDrawerLeft from './component/Tab-Component/WeekOneComponent';
import Facebook from './component/Week-One-Component/WeekOneComponent';
import VerticalTabs from './component/Tab-Component/WeekOneComponent';
import NavTabs from './component/Tab-Component/WeekOneComponent';
import FullWidthTabs from './component/Tab-Component/WeekOneComponent';
import SimpleTabs from './component/Tab-Component/WeekOneComponent';


import MenuPopupState from './component/Week-Component/WeekComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ButtonLink from './component/Week-Component/WeekComponent';
import Links from './component/Week-Component/WeekComponent';
import { DayTwo } from './component/Youtubeexapl/DayTwoComponent';
import ScrollableTabsButtonAuto from './component/Tab-Component/WeekOneComponent';
import WeekTwo from './component/Tab-Component/WeekTwoComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      
      <header className="App-header">
      
      <Router>
      <Links/>
        
        <Switch>
          <Route path='/WeekOne' component={ScrollableTabsButtonAuto}/>
          <Route path='/WeekTwo' component={WeekTwo}/>
      

     </Switch>
     </Router>
     
      </header>
      
    </div>
  );
}

export default App;