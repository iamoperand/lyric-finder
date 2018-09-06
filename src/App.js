import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import routes from './config/routes';
import { Provider } from './context';

import Home from './components/Home';
import NotFound from './components/NotFound';


class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Switch>
            <Route path={routes.Home} component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
