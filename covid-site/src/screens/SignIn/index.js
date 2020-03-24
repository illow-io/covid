import React from 'react';
import { useHistory, Redirect } from "react-router-dom";
import { Grid, Heading, Text, Box, Footer } from 'grommet';
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
    history.push("/discover");
  };

  const onFailure = err => setUser();

  return (
    <Grid pad="large">
      <div>
        <Heading level={3} margin={{ horizontal: "30px", bottom: "none", height: 'auto' }} size="medium" textAlign="center">{t('SIGNIN_TITLE')}</Heading>

        <Box style={{marginTop: '150px'}}>
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
          <Text style={{marginTop: '20px', textAlign: 'center', fontSize: '16px'}} color="dark-5">Privacy promise. <br/>What are we going to use the data for.{t('PRIVACY_PROMISE')}</Text>
        </Box>
      </div>
      <Footer style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end'}}>
        <p style={{fontWeight: 'bold', margin: '0 0 10px 0', fontSize: '18px', color: '#505050'}}>Powered By</p><img width="90px" src="/wibson.png" alt="Powered by Wibson" />
      </Footer>
    </Grid>
  );
};

export default withSiteLayout(SignIn);