import React from 'react';
import { Box } from 'grommet';
import { useTranslation } from 'react-i18next';
import withSiteLayout from '../../components/withSiteLayout';

const Discover = () => {
  const { t } = useTranslation();

  return (
    <Box overflow="auto">Discover</Box>
  );
};

export default withSiteLayout(Discover);