import React from 'react';
import { Heading, Grid, Image } from 'grommet';
import { useTranslation } from 'react-i18next';

const Steps = () => {
  const { t } = useTranslation();

  return (
    <Grid pad="large" gap="medium">
      <Heading level={3} margin={{ horizontal: "xlarge", vertical: "none" }} size="medium" textAlign="center">{t('HOME_SPONSORS')}</Heading>
      <Grid columns={{ count: 4, size: "auto" }} gap="xsmall" align="center" justify="center">
        <Image src="/wibson.png" alt="Wibson" opacity="0.3" style={{ width: "100%", height: "auto", filter: "grayscale(100%)" }} />
        <Image src="/mit.png" alt="MIT" opacity="0.3" pad="medium" style={{ width: "100%", height: "auto", filter: "grayscale(100%)" }} />
        <Image src="/bill_and_melinda.png" alt="Bill & Melinda Gates Foundation" opacity="0.3" style={{ width: "100%", height: "auto", filter: "grayscale(100%)" }} />
        <Image src="/sapienza.png" alt="Sapienza" opacity="0.3" style={{ width: "100%", height: "auto", filter: "grayscale(100%)" }} />
      </Grid>
    </Grid>
  );
};

export default Steps;