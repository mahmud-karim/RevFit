import React, { Component } from 'react';
import './App.css';
import { Exam } from './component/Youtubeexapl/ReactYoutubeExampleComponent';
import TabsWrappedLabel from './component/Tab-Component/TabComponent';
import DisabledTabs from './component/Tab-Component/TabComponent';
import PersistentDrawerLeft from './component/Tab-Component/TabComponent';
import Facebook from './component/Week-One-Component/WeekOneComponent';
import VerticalTabs from './component/Tab-Component/TabComponent';
import NavTabs from './component/Tab-Component/TabComponent';
import FullWidthTabs from './component/Tab-Component/TabComponent';
import SimpleTabs from './component/Tab-Component/TabComponent';
import ScrollableTabsButtonAuto from './component/Tab-Component/TabComponent';
import SimpleDialogDemo from './component/Week-Component/WeekComponent';
import MenuPopupState from './component/Week-Component/WeekComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ButtonLink from './component/Week-Component/WeekComponent';
import Links from './component/Week-Component/WeekComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      
      <header className="App-header">
      
      <Router>
      <Links/>
        {/* <Facebook/> */}
        <Switch>
          <Route path='/WorkOut' component={ScrollableTabsButtonAuto}/>
         
      

     </Switch>
     </Router>
      </header>
      
    </div>
  );
}

export default App;