import React, { Component } from 'react';
import './App.css';
import { Exam } from './Components/Youtubeexapl/ReactYoutubeExampleComponent';
import TabsWrappedLabel from './Components/Tab-Component/TabComponent';
import DisabledTabs from './Components/Tab-Component/TabComponent';
import PersistentDrawerLeft from './Components/Tab-Component/TabComponent';
import Facebook from './Components/Week-One-Component/WeekOneComponent';
import VerticalTabs from './Components/Tab-Component/TabComponent';
import NavTabs from './Components/Tab-Component/TabComponent';
import FullWidthTabs from './Components/Tab-Component/TabComponent';
import SimpleTabs from './Components/Tab-Component/TabComponent';
import ScrollableTabsButtonAuto from './Components/Tab-Component/TabComponent';
import SimpleDialogDemo from './Components/Week-Component/WeekComponent';
import MenuPopupState from './Components/Week-Component/WeekComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ButtonLink from './Components/Week-Component/WeekComponent';
import Links from './Components/Week-Component/WeekComponent';

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