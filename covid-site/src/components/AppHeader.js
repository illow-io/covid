import React from 'react';
import { Heading, Header } from "grommet";
import { useTranslation } from 'react-i18next';

export default () => {
  const { t } = useTranslation();

  return (
    <Header background="light-2" pad="medium" align="center" justify="center" style={{ minHeight: "60px", background: "linear-gradient(270deg, #512ed4, #3b219e)" }}>
      <Heading level={5} color="dark-5" margin="none" size="small" style={{ fontFamily: "Rockwell", fontWeight: "normal", display: "flex", alignItems: "center" }}>
        <img src="/isologo.png" alt="logo" style={{ width: "250px", height: "auto", marginHorizontal: "10px" }} />
      </Heading>
    </Header>
  );
};
