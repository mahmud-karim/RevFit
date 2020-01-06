import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollableTabsButtonAuto from './components/tab-component/WeekOneComponent';
import WeekTwo from './components/tab-component/WeekTwoComponent';
import { SignUpComponent } from './components/signup-component/SignUpComponent';
import { store } from './Store';
import LoginComponent from './components/login-component/LoginContainer'
import HomeComponent from './components/home-component/HomeContainer';
import { Provider } from 'react-redux';
import Links from './components/week-component/WeekComponent';
import Graph from './components/graph-test-component/GraphComponent';
import { ProgressComponent } from './components/progress-component/ProgressComponent';
import { LibraryComponent } from './components/library-component/LibraryComponent';
import ProfileComponent from './components/profile-component/ProfileContainer';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { orange, purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: purple,
  },
});

const App: React.FC = () => {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path='/profile' component={ProfileComponent} />
              <Route path='/progress' component={ProgressComponent} />
              <Route path='/library' component={LibraryComponent} />
              <Route path='/weekone' component={ScrollableTabsButtonAuto} />
              <Route path='/weektwo' component={WeekTwo} />
              <Route path='/graph' component={Graph} />
              <Route path='/workout' component={Links} />
              <Route path='/signup' component={SignUpComponent} />
              <Route path='/home' component={HomeComponent} />
              <Route path='/login' component={LoginComponent} />
              <Route path='/' component={LoginComponent} />
            </Switch>
          </Router>
        </Provider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;