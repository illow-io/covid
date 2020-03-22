import React from 'react';
import { Box, Heading } from 'grommet';
import { useTranslation } from 'react-i18next';
import CustomButton from '../../components/CustomButton';

const Share = () => {
  const { t } = useTranslation();

  return (
    <Box pad="xlarge" gap="xlarge" background="linear-gradient(270deg, #3b219e, #a54792)">
      <Heading level={3} margin={{ horizontal: "large", vertical: "none" }} color="white" size="medium" textAlign="center">{t('HOME_SHARE_TITLE')}</Heading>
      <CustomButton
        inverted
        icon={<img src="/logo_violet.png" alt="globe" style={{ width: "34px", height: "auto" }} />}
        text={t("SHARE_IT")}
        size="medium"
      />
    </Box>
  );
};

export default Share;