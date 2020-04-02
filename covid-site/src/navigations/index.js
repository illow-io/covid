import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Discover from '../screens/Discover';
import Enrich from '../screens/Enrich';
import Home from '../screens/Home';
import Score from '../screens/Score';
import SignIn from '../screens/SignIn';
import Upload from '../screens/Upload';
import Privacy from '../screens/Privacy';

import useTrackPages from '../hooks/useTrackPages';
import PrivateRoute from './PrivateRoute';

const screens = [
  { path: '/privacy', component: Privacy },
  { path: '/discover', component: Discover },
  { path: '/upload', component: Upload },
  { path: '/enrich', component: Enrich },
  { path: '/score', component: Score },
  { path: '/sign-in', isPublicRoute: true, component: SignIn },
  { path: '/', isPublicRoute: true, component: Home }
];

export default function Routes() {
  useTrackPages();
  return (
    <Switch>
      {screens.map(screen => {
        if (screen.isPublicRoute) {
          const PublicPage = screen.component;
          return (
            <Route key={screen.path} path={screen.path}>
              <PublicPage />
            </Route>
          );
        } else {
          const ProtectedPage = screen.component;
          return (
            <PrivateRoute key={screen.path} path={screen.path}>
              <ProtectedPage />
            </PrivateRoute>
          );
        }
      })}
    </Switch>
  );
}
