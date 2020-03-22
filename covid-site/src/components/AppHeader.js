import React from 'react';
import { Heading, Header } from "grommet";
import { useTranslation } from 'react-i18next';

export default () => {
  const { t } = useTranslation();

  return (
    <Header background="light-2" pad="medium" align="center" justify="center" style={{ minHeight: "60px" }}>
      <Heading level={5} color="dark-5" margin="none" size="small" style={{ fontFamily: "Rockwell", fontWeight: "normal", display: "flex", alignItems: "center" }}>
        {t('SITE_TITLE_1')}
        <img src="/logo.png" alt="logo" style={{ width: "34pt", height: "auto", marginHorizontal: "10px" }} />
        {t('SITE_TITLE_2')}
      </Heading>
    </Header>
  );
};
