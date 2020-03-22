import React from 'react';
import { Box } from 'grommet';
import { useTranslation } from 'react-i18next';
import withSiteLayout from '../../components/withSiteLayout';

const Upload = () => {
  const { t } = useTranslation();

  return (
    <Box overflow="auto">Upload</Box>
  );
};

export default withSiteLayout(Upload);