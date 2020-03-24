import React from 'react';
import { Heading, Grid, Image } from 'grommet';
import { useTranslation } from 'react-i18next';

const sponsors = [
  {
    name: "Wibson",
    path: "/wibson.png",
    url: "https://www.wibson.org"
  },
  {
    name: "MIT",
    path: "/mit.png",
    url: "https://www.mit.edu"
  },
  {
    name: "Bill & Melinda Gates Foundation",
    path: "/bill_and_melinda.png",
    url: "https://www.gatesfoundation.org"
  },
  {
    name: "Sapienza",
    path: "/sapienza.png",
    url: "https://www.uniroma1.it"
  }
];

const Sponsors = ({ showTitle = true, ...props }) => {
  const { t } = useTranslation();

  return (
    <Grid pad="large" gap="medium" {...props} >
      {showTitle && <Heading level={3} margin={{ horizontal: "xlarge", vertical: "none" }} size="medium" textAlign="center">{t('HOME_SPONSORS')}</Heading>}
      <Grid columns={{ count: 4, size: "auto" }} gap="xsmall" align="center" justify="center">
        {sponsors.map(sponsor => (
          <a key={sponsor.name} href={sponsor.url} target="_blank" rel="noopener noreferrer">
            <Image src={sponsor.path} alt={sponsor.name} opacity="0.3" style={{ width: "100%", height: "auto", filter: "grayscale(100%)" }} />
          </a>
        ))}
      </Grid>
    </Grid>
  );
};

export default Sponsors;