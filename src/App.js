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
import Lyrics from './components/Lyrics';


class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Switch>
            <Route exact path={routes.Home} component={Home} />
            <Route path={`${routes.Lyrics}/:id`} component={Lyrics} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
