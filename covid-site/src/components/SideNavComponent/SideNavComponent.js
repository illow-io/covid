import React from 'react';
import { useTranslation } from 'react-i18next';
import './SideNavComponent.scss';
import CardComponent from '../CardComponent/CardComponent';
import RRSSComponent from '../RRSSComponent/RRSSComponent';
import CTACardImage from '../../assets/images/discover-your-risk-home.png';

const SideNavComponent = props => {
    const { t } =  useTranslation();

    return (
        <div className="SideNavComponent">
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
    );
};

export default SideNavComponent;