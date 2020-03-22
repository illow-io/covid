import React from 'react';
import { Grid, Heading, Text } from 'grommet';
import { CloudUpload } from 'grommet-icons';
import { useTranslation } from 'react-i18next';
import withSiteLayout from '../../components/withSiteLayout';
import CustomButton from '../../components/CustomButton';
import Sponsors from '../../components/Sponsors';

const Discover = () => {
  const { t } = useTranslation();

  return (
    <Grid pad="large" gap="large">
      <Heading level={3} margin={{ horizontal: "44px", bottom: "none" }} size="medium" textAlign="center">{t('DISCOVER_TITLE')}</Heading>

      <Grid gap="medium">
        <Text textAlign="center" size="16px" color="dark-5">{t('DONT_HAVE_DATA')}</Text>
        <CustomButton
          inverted
          icon={<img src="/google.png" alt="google" style={{ width: "34px", height: "auto" }} />}
          text={t("GET_IT_FROM_GOOGLE")}
          size="16px"
          pad="20px"
          elevation="small"
        />
        <Text textAlign="center" size="16px" color="dark-5">{t('HAVE_DATA')}</Text>
        <CustomButton
          secondary
          icon={<CloudUpload size="22px" />}
          text={t("UPLOAD_IT")}
          size="16px"
          pad="20px"
        />
      </Grid>

      <Text textAlign="center" size="14px" color="dark-5">{t('FOOTER_NOTE')}</Text>
      <Sponsors showTitle={false} pad={{ horizontal: "none", vertical: "large"}} />
    </Grid>
  );
};

export default withSiteLayout(Discover);