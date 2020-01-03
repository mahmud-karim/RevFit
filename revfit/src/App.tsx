import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { store } from './Store';
import LoginComponent from './components/login-component/LoginContainer'
import { HomeComponent } from './components/home-component/HomeComponent';
import ScrollableTabsButtonAuto from './component/Tab-Component/WeekOneComponent';
import WeekTwo from './component/Tab-Component/WeekTwoComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/home' component={HomeComponent} />
            <Route path='/WeekOne' component={ScrollableTabsButtonAuto} />
            <Route path='/WeekTwo' component={WeekTwo} />
            <Route path='/login' component={LoginComponent} />
            <Route path='/' component={LoginComponent} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;