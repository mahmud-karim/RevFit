import React, { Component } from 'react';
import './App.css';
import { Exam } from './Youtubeexapl/ReactYoutubeExampleComponent';
import TabsWrappedLabel from './Tab-Component/TabComponent';
import DisabledTabs from './Tab-Component/TabComponent';
import PersistentDrawerLeft from './Tab-Component/TabComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <PersistentDrawerLeft/>
        <Exam/>
      </header>
    </div>
  );
}

export default App;