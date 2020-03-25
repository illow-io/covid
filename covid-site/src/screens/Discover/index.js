import React from 'react';
import { useHistory } from "react-router-dom";
import { Grid, Heading, Text } from 'grommet';
import { CloudUpload } from 'grommet-icons';
import { useTranslation } from 'react-i18next';
import withSiteLayout from '../../components/withSiteLayout';
import CustomButton from '../../components/CustomButton';
import Sponsors from '../../components/Sponsors';
import howToRiskVideo from '../../assets/media/how-to-get-data-google.mp4';

const googleTakeout = "https://takeout.google.com";

const Discover = () => {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <Grid pad="large" gap="large">
      <Heading level={3} margin={{ horizontal: "44px", bottom: "none" }} size="medium" textAlign="center">{t('DISCOVER_TITLE')}</Heading>

      <video width="100%" height="200px" controls poster="/video-poster.png">
        <source src={howToRiskVideo} type="video/mp4"/>
      </video>

      <Grid gap="medium">
        <Text textAlign="center" size="16px" color="dark-5">{t('DONT_HAVE_DATA')}</Text>
        <CustomButton
          inverted
          icon={<img src="/google.png" alt="google" style={{ width: "34px", height: "auto" }} />}
          text={t("GET_IT_FROM_GOOGLE")}
          size="16px"
          pad="20px"
          elevation="small"
          onClick={(event) => {event.preventDefault(); window.open(googleTakeout);}}
        />
        <Text textAlign="center" size="16px" color="dark-5">{t('HAVE_DATA')}</Text>
        <CustomButton
          secondary
          icon={<CloudUpload size="22px" />}
          text={t("UPLOAD_IT")}
          size="16px"
          pad="20px"
          onClick={() => history.push("/upload")}
        />
      </Grid>

      <Text textAlign="center" size="14px" color="dark-5">{t('FOOTER_NOTE')}</Text>
      <Sponsors showTitle={false} pad={{ horizontal: "none", vertical: "large"}} />
    </Grid>
  );
};

export default withSiteLayout(Discover);