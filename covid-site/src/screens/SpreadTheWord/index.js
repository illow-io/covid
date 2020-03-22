import React from 'react';
import { Box } from 'grommet';
import { useTranslation } from 'react-i18next';
import withSiteLayout from '../../components/withSiteLayout';

const SpreadTheWord = () => {
  const { t } = useTranslation();

  return (
    <Box overflow="auto">SpreadTheWord</Box>
  );
};

export default withSiteLayout(SpreadTheWord);