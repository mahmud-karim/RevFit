import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { store } from './Store';
import LoginComponent from './components/login-component/LoginContainer'
import { HomeComponent } from './components/home-component/HomeComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/home' component={HomeComponent} />
            <Route path='/login' component={LoginComponent} />
            <Route path='/' component={LoginComponent} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;