import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Box, Grid, Heading, Text } from 'grommet';
import { useTranslation } from 'react-i18next';
import withSiteLayout from '../../components/withSiteLayout';
import CustomButton from '../../components/CustomButton';
import StickyFooter from '../../components/StickyFooter';
import Map from './Map';
import Steps from './Steps';
import Share from './Share';
import Sponsors from '../../components/Sponsors';

const Home = props => {
  const { t } = useTranslation();
  const [closedFooter, setClosedFooter] = useState(false);
  const history = useHistory();

  return (
    <Box overflow="auto">
      <Grid margin={{ top: "large", bottom: "160px" }}>
        <Heading level={3} margin="none" size="medium" textAlign="center">{t('HOME_SMALL_TITLE')}</Heading>
        <Heading level={2} margin={{ top: "medium", bottom: "33px" }} textAlign="center">{t('HOME_BIG_TITLE')}</Heading>

        <Map />
        <Steps />
        <Share />
        <Sponsors />
      </Grid>

      <Box style={{width: "100%", position: "fixed", bottom: 0}}>
        <Box pad={{ horizontal: "large", bottom: "xlarge", top: "70px" }} background = "linear-gradient(0deg, #fff, rgba(0,0,0,0))">
          <CustomButton primary text={t("DISCOVER_SCORE")} onClick={() => history.push("/discover")} />
        </Box>

        {!closedFooter && (
          <StickyFooter onClose={() => setClosedFooter(true)}>
            <Text size="15px">{t('FOOTER_NOTE')}</Text>
          </StickyFooter>
        )}
      </Box>
    </Box>
  );
};

export default withSiteLayout(Home);