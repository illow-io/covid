import React, { Suspense } from 'react';
import { Grommet } from "grommet";
import theme from './theme.js';
import Home from './screens/Home';
import Loader from './components/Loader';


function App() {
  return (
    <Grommet theme={theme}>
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
    </Grommet>
  );
}

export default App;
