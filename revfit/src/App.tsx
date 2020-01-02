import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { store } from './Store';
import { LoginComponent } from './components/login-component/LoginComponent'

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}></Provider>
      <Router>
        <Switch>

          <Route path='/login' component={LoginComponent} />
          <Route path='/' component={LoginComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;