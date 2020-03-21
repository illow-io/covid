import React from 'react';
import Config from '../Config';
import use from '../state/use';
import AppHeader from '../components/AppHeader';
import GoogleLogin from 'react-google-login';

const Home = () => {
  const [user, setUser] = use('user');

  const onSuccess = res => {
    setUser({
      ...res.profileObj,
      token: res.tokenObj
    });
  };

  const onFailure = err => setUser();

  return (
    <div>
      <AppHeader />
  
      {!user && (
        <GoogleLogin
          clientId={Config.googleClientId}
          onSuccess={onSuccess}
          onFailure={onFailure}
          isSignedIn={true}
        />
      )}
    </div>
  );
};

export default Home;