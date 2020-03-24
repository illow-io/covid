import React from 'react';
import { Grid } from 'grommet';
import AppHeader from './AppHeader';

export default Screen => props => (
  <Grid fill rows={["auto", "flex"]}>
    <AppHeader />
    <Screen {...props} />
  </Grid>
);