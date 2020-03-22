import React from 'react';
import { Box } from 'grommet';
import { useTranslation } from 'react-i18next';
import withSiteLayout from '../../components/withSiteLayout';

const Score = () => {
  const { t } = useTranslation();

  return (
    <Box overflow="auto">Score</Box>
  );
};

export default withSiteLayout(Score);