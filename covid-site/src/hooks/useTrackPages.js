import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Config from '../Config';
import { useLocation } from 'react-router-dom';

ReactGA.initialize(Config.googleAnalyticsID);

export default function useTrackPages(options) {
  let location = useLocation();
  const trackPage = page => {
    ReactGA.set({
      page,
      ...options
    });
    ReactGA.pageview(page);
  };
  useEffect(() => {
    trackPage(location.pathname);
  }, [location]);
}
