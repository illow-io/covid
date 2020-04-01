import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Grid, Row, Column } from 'carbon-components-react';
import './index.scss';
import SideNavComponent from '../../components/SideNavComponent/SideNavComponent';
import CardComponent from '../../components/CardComponent/CardComponent';
import CTACardImage from '../../assets/images/discover-your-risk-home.png';
import RRSSComponent from '../../components/RRSSComponent/RRSSComponent';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';

import CustomButton from '../../components/CustomButton';
import StickyFooter from '../../components/StickyFooter';
import Map from './Map';
import Steps from './Steps';
import Share from './Share';
import Sponsors from '../../components/Sponsors';
import FooterSideComponent from '../../components/FooterSideComponent/FooterSideComponent';

const Home = props => {
    const { t } = useTranslation();
    const [closedFooter, setClosedFooter] = useState(false);
    const history = useHistory();

    return (
        <>
            <HeaderComponent />
            <Grid fullWidth sm={12} md={4}>
                <Row>
                    <Column sm={12} md={4} lg={4}>
                        <SideNavComponent />
                    </Column>
                    <Column sm={12} md={4} lg={8}>
                        <div className="CardsMobile">
                            <CardComponent 
                                cardImage={CTACardImage}
                                cardImageAlt="Descubrí cual es tu riesgo de COVID-19"
                                cardTitle="Descubrí cual es tu riesgo de COVID-19"
                                cardText="Con tu historial de Ubicaciones y Geolocalización"
                                primaryCardButton={t("SIGN_IN_WITH_GOOGLE")}
                                secondaryCardButton="Iniciar Sesión"
                                />
                            <CardComponent
                                cardTitle="¿Cómo funiona MyCovidRisk?"
                                cardText="Predecimos la propagación del virus basándonos en el contacto con otras personas en riesgo y el tiempo en zonas contaminadas."
                                secondaryCardButton="Quiero saber más"
                                primaryCardButton={t("SIGN_IN_WITH_GOOGLE")}
                                />
                            <RRSSComponent 
                                cardTitle="Seamos más rápidos que el virus"
                                cardText="Compartilo con todos los que quieran participar."
                                />
                        </div>
                    </Column>
                </Row>
            </Grid>
            <FooterSideComponent />
        </>
    );
};

export default Home;

{/* <Box overflow="auto">
    <Grid margin={{ top: "large", bottom: "160px" }}>
        <Heading level={3} margin="none" size="medium" textAlign="center">{t('HOME_SMALL_TITLE')}</Heading>
        <Heading level={2} margin={{ top: "medium", bottom: "33px" }} textAlign="center">{t('HOME_BIG_TITLE')}</Heading>

        <Map />
        <Steps />
        <Share />
        <Sponsors margin={{ bottom: closedFooter ? "none" : "60px" }} />
    </Grid>

    <Box style={{width: "100%", position: "fixed", bottom: 0}}>
        <Box pad={{ horizontal: "large", bottom: "xlarge", top: "70px" }} background = "linear-gradient(0deg, #fff, rgba(0,0,0,0))">
            <CustomButton branded text={t("DISCOVER_SCORE")} onClick={() => history.push("/sign-in")} />
        </Box>

        {!closedFooter && (
            <StickyFooter onClose={() => setClosedFooter(true)}>
                <Text size="15px">{t('FOOTER_NOTE')}</Text>
            </StickyFooter>
        )}
    </Box>
</Box> */}