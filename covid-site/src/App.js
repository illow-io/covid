import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Grommet } from "grommet";
import theme from './theme.js';

import Discover from './screens/Discover';
import Enrich from './screens/Enrich';
import Home from './screens/Home';
import Score from './screens/Score';
import SignIn from './screens/SignIn';
import Upload from './screens/Upload';
import Privacy from './screens/Privacy';

import Loader from './components/Loader/Loader';

function App() {
  return (
    <Router>
      <Grommet theme={theme} full>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/privacy">
              <Privacy />
            </Route>
            <Route path="/discover">
              <Discover />
            </Route>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <Route path="/upload">
              <Upload />
            </Route>
            <Route path="/enrich">
              <Enrich />
            </Route>
            <Route path="/score">
              <Score />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Suspense>
      </Grommet>
    </Router>
  );
}

export default App;
