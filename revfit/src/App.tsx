import React, { Component } from 'react';
import './App.css';
import { Exam } from './Youtubeexapl/ReactYoutubeExampleComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Exam/>
      </header>
    </div>
  );
}

export default App;