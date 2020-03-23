import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const learnClass = {
    textAlign: 'center',
    textDecoration: 'none',
    color: 'blue',
    fontSize: 12
};

export default ({ linkUrl, ...props }) => {
  const { t } = useTranslation();

  return <NavLink style={learnClass} to={linkUrl} {...props}>{t("LEARN_MORE")}</NavLink>;
};