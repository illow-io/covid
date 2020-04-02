import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        const isAuthenticated = localStorage.getItem('token');
        return isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/sign-in',
              state: { from: location }
            }}
          />
        );
      }}
    />
  );
}
