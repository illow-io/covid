import React from 'react';
import { Box } from 'grommet';
import { useTranslation } from 'react-i18next';
import GoogleLogin from 'react-google-login';
import Config from '../../Config';
import use from '../../state/use';
import withSiteLayout from '../../components/withSiteLayout';

const SignIn = () => {
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
      {!user && (
        <GoogleLogin
          clientId={Config.googleClientId}
          onSuccess={onSuccess}
          onFailure={onFailure}
          isSignedIn={true}
        />
      )}
    </Box>
  );
};

export default withSiteLayout(SignIn);