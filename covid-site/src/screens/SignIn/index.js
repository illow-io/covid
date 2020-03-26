import React from 'react';
import { useHistory, NavLink } from "react-router-dom";
import { Grid, Heading, Text, Box, Footer } from 'grommet';
import { useTranslation } from 'react-i18next';
import GoogleLogin from 'react-google-login';
import Config from '../../Config';
import use from '../../state/use';
import api from '../../services/api';
import withSiteLayout from '../../components/withSiteLayout';
import CustomButton from '../../components/CustomButton';
import SimpleLoader from '../../components/Loader/SimpleLoader/SimpleLoader';

const SignIn = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const setUser = use('user')[1];

  const onSuccess = async (res) => {
    setUser(res.profileObj);
    await api.authenticate(res.tokenId);
    history.push("/discover");
  };

  const onFailure = err => setUser();

  return (
    <Grid pad="large" rows={["flex", "auto"]}>
      <div>
        <Heading level={3} margin={{ horizontal: "30px", bottom: "none", height: 'auto' }} size="medium" textAlign="center">{t('SIGNIN_TITLE')}</Heading>

        <Box style={{marginTop: '150px'}}>
          <GoogleLogin
            clientId={Config.googleClientId}
            scope="profile email openid"
            render={renderProps => (
              renderProps.disabled 
                ? <SimpleLoader /> 
                : <CustomButton
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
          <Text style={{marginTop: '20px', textAlign: 'center', fontSize: '16px'}} color="dark-5">
            <NavLink style={{textDecoration: 'none', color: 'blue'}} to="/privacy">{t('PRIVACY_PROMISE')}</NavLink>
            <br/>
            {t('USING_THE_DATA_FOR')}
          </Text>
        </Box>
      </div>
      <Footer justify="center" gap="small">
        <Text weight="bold" size="18px" color="#505050" margin={{ bottom: "8px" }}>Powered By</Text>
        <a href="https://www.wibson.org" target="_blank" rel="noopener noreferrer" style={{ width: "90px" }}>
          <img src="/wibson.png" alt="Wibson" style={{ width: "100%", height: "auto" }} />
        </a>
      </Footer>
    </Grid>
  );
};

export default withSiteLayout(SignIn);