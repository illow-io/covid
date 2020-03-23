import React from 'react';
import { useHistory } from "react-router-dom";
import { Box, Heading, Text, Button } from 'grommet';
import { useTranslation } from 'react-i18next';
import withSiteLayout from '../../components/withSiteLayout';
import CustomButton from '../../components/CustomButton';
import circulo from '../Score/circulo.css';


const Score = () => {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    
    <Box overflow="auto" >
      <Heading level={3} margin={{ horizontal: "44px", bottom: "none" }} size="small" textAlign="center">{t('Your Result')}</Heading>
      <Box elevation="small" background="#fbfbfb" margin="10px" pad="medium" round="small" style={{}}>
      <div className="circulo">
      <Text size="50px" color="#24ff54" weight="bold" >{t('--%')}</Text> 
      <Text  size="25px" color="black" weight="bold">{t('COVID-19')}</Text>
      <Text  size="15px" color="black" weight="bold">{t('Risk Score')}</Text>
      </div>
      <div style={{height:"50px"}}><br></br></div>
      <Text textAlign="center" size="17px" color="black">{t('Thanks for your collaboration! You can always come back to check how your score changed')}</Text>
      </Box>
      <Box overflow="auto" background="#c6f3cf" pad="medium" round="small" margin="10px">
        <Text textAlign="center" size="14px" color="#55ba59">{t('Remember, your score will changes as more people upload their location data')}</Text>
      </Box>
      <Box style={{width: "100%", position: "fixed", bottom: 0}}>
        <CustomButton
            primary
            text={t("Close and Share")}
            size="20px"
            pad="20px"
            margin="10px"
            onClick={() => history.push("/home")}
            
          />    
          <CustomButton
            tertiary
            text={t("Maybe Later")}
            size="20px"
            pad="20px"
            margin="10px"
            onClick={() => history.push("/home")}
          />
        </Box>
        
    </Box>
    
  );
};

export default withSiteLayout(Score);