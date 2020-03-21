import React from 'react';
import { Grid } from 'grommet';
import { useTranslation } from 'react-i18next';
import AppHeader from './AppHeader';

export default Screen => props => {
  const { t } = useTranslation();

  return (
    <Grid fill rows={["auto", "flex"]}>
      <AppHeader />
      <Screen {...props} />
    </Grid>
  );
};