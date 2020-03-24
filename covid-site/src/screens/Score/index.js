import React from 'react';
import { useHistory } from "react-router-dom";
import { Box, Heading, Text, Button, Grid } from 'grommet';
import { useTranslation } from 'react-i18next';
import withSiteLayout from '../../components/withSiteLayout';
import CustomButton from '../../components/CustomButton';
import './circle.css';


const Score = () => {
  const score = undefined;
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <Grid rows={["flex", "auto"]}>
      <Box overflow="auto" margin={{ vertical: "medium" }}>
        <Heading level={3} margin="none" size="small" textAlign="center">{t('YOUR_RESULT')}</Heading>
        <Box elevation="small" background="#fbfbfb" margin="10px" pad="medium" round="small">
          {score && (
            <Box className="circle" margin={{ bottom: "large" }}>
              <Text size="50px" color="#24ff54" weight="bold">{score}%</Text> 
              <Text  size="25px" color="black" weight="bold">{t('COVID-19')}</Text>
              <Text  size="15px" color="black" weight="bold">{t('RISK_SCORE')}</Text>
            </Box>
          )}
          <Text textAlign="center" size="17px" color="black">{t(score ? 'SCORE_THANKS' : 'SCORE_WE_NEED_MORE')}</Text>
        </Box>
        <Box background="#c6f3cf" pad="medium" round="small" margin="medium">
          <Text textAlign="center" size="14px" color="#55ba59">{t('SCORE_REMEMBER')}</Text>
        </Box>
      </Box>
      <Box pad="medium" gap="medium">
        <CustomButton 
          primary
          text={t("SHARE_ALT")} 
          onClick={() => history.push("/home")}
        />
        <CustomButton tertiary text={t("GO_BACK_HOME")} onClick={() => history.push("/home")} />
      </Box>
    </Grid>
  );
};

export default withSiteLayout(Score);