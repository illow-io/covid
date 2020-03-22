import React from 'react';
import { Box } from 'grommet';
import { useTranslation } from 'react-i18next';
import withSiteLayout from '../../components/withSiteLayout';

const Enrich = () => {
  const { t } = useTranslation();

  return (
    <Box overflow="auto">Enrich</Box>
  );
};

export default withSiteLayout(Enrich);