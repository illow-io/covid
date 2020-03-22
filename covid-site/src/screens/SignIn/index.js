import React from 'react';
import { useHistory, Redirect } from "react-router-dom";
import { Grid, Heading, Text, Box } from 'grommet';
import { useTranslation } from 'react-i18next';
import GoogleLogin from 'react-google-login';
import Config from '../../Config';
import use from '../../state/use';
import withSiteLayout from '../../components/withSiteLayout';
import CustomButton from '../../components/CustomButton';

const SignIn = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [user, setUser] = use('user');

  if (user) {
    return <Redirect to="/upload" />;
  }

  const onSuccess = res => {
    setUser({
      ...res.profileObj,
      token: res.tokenObj
    });
    history.push("/upload");
  };

  const onFailure = err => setUser();

  return (
    <Grid pad="large" gap="large">
      <Heading level={3} margin={{ horizontal: "30px", bottom: "none" }} size="medium" textAlign="center">{t('SIGNIN_TITLE')}</Heading>

      <Text textAlign="center" size="16px" color="dark-5">{t('PRIVACY_PROMISE')}</Text>

      <Box>
        <GoogleLogin
          clientId={Config.googleClientId}
          render={renderProps => (
            <CustomButton
              inverted
              icon={<img src="/google.png" alt="google" style={{ width: "34px", height: "auto" }} />}
              text={t("SIGN_IN_WITH_GOOGLE")}
              size="16px"
              pad="20px"
              elevation="small"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            />
          )}
          onSuccess={onSuccess}
          onFailure={onFailure}
        />
      </Box>
    </Grid>
  );
};

export default withSiteLayout(SignIn);