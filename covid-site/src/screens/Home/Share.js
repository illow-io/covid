import React from 'react';
import { Box, Heading } from 'grommet';
import { useTranslation } from 'react-i18next';
import ShareLinks from '../../components/Share';

const Share = () => {
  const { t } = useTranslation();

  return (
    <Box pad="xlarge" gap="xlarge" background="linear-gradient(270deg, #3b219e, #a54792)">
      <Heading level={3} margin={{ horizontal: "large", vertical: "none" }} color="white" size="medium" textAlign="center">{t('HOME_SHARE_TITLE')}</Heading>
      <ShareLinks />
    </Box>
  );
};

export default Share;