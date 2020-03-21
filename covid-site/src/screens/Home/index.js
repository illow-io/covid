import React from 'react';
import { Box, Grid, Heading } from 'grommet';
import { useTranslation } from 'react-i18next';
import GoogleLogin from 'react-google-login';
import Config from '../../Config';
import use from '../../state/use';
import withSiteLayout from '../../components/withSiteLayout';
import Map from './Map';
import Steps from './Steps';

const Home = () => {
  const { t } = useTranslation();
  const [user, setUser] = use('user');

  const onSuccess = res => {
    setUser({
      ...res.profileObj,
      token: res.tokenObj
    });
  };

  const onFailure = err => setUser();

  return (
    <Box overflow="auto">
      <Grid margin={{ vertical: "large" }}>
        <Heading level={3} margin="none" size="medium" textAlign="center">{t('HOME_SMALL_TITLE')}</Heading>
        <Heading level={2} margin={{ top: "medium", bottom: "33px" }} textAlign="center">{t('HOME_BIG_TITLE')}</Heading>

        <Map />
        <Steps />

        {!user && (
          <GoogleLogin
            clientId={Config.googleClientId}
            onSuccess={onSuccess}
            onFailure={onFailure}
            isSignedIn={true}
          />
        )}
      </Grid>
    </Box>
  );
};

export default withSiteLayout(Home);