import React from 'react';
import { Grommet } from "grommet";
import theme from './theme.js';
import Home from './screens/Home';


function App() {
  return (
    <Grommet theme={theme}>
      <Home />
    </Grommet>
  );
}

export default App;
