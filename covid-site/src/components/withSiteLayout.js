import React, { useState } from 'react';
import { Grid, Text } from 'grommet';
import { useTranslation } from 'react-i18next';
import AppHeader from './AppHeader';
import StickyFooter from './StickyFooter';

export default Screen => props => {
  const { t } = useTranslation();
  const [closedFooter, setClosedFooter] = useState(false);

  return (
    <Grid fill rows={["auto", "flex", "auto"]}>
      <AppHeader />
      <Screen {...props} />
      {!closedFooter && (
        <StickyFooter onClose={() => setClosedFooter(true)}>
          <Text size="15px">{t('FOOTER_NOTE')}</Text>
        </StickyFooter>
      )}
    </Grid>
  );
};