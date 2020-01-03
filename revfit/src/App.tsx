import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollableTabsButtonAuto from './components/tab-component/WeekOneComponent';
import WeekTwo from './components/tab-component/WeekTwoComponent';
import Links from './components/week-component/WeekComponent';
import { store } from './Store';
import LoginComponent from './components/login-component/LoginContainer'
import { SignUpComponent } from './components/signup-component/SignUpComponent';

const App: React.FC = () => {
  return (
    <div className="App">
          <Links/>
        <Router>
          <Switch>
            <Route path='/WeekOne' component={ScrollableTabsButtonAuto}/>
            <Route path='/WeekTwo' component={WeekTwo}/>
            <Route path='/signup' component={SignUpComponent} />
            <Route path='/login' component={LoginComponent} />
            <Route path='/' component={LoginComponent} />
          </Switch>
        </Router>
      
    </div>
  );
}

export default App;