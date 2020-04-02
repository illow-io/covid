import React, { Suspense } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import 'mapbox-gl/dist/mapbox-gl.css';

import { Grommet } from 'grommet';
import theme from './theme.js';
import Routes from './navigations';

import Loader from './components/Loader/Loader';

function App() {
  return (
    <Router>
      <Grommet theme={theme} full>
        <Suspense fallback={<Loader />}>
          <Routes />
        </Suspense>
      </Grommet>
    </Router>
  );
}

export default App;
