import React from 'react';
import './SideNavComponent.scss';
import FooterSideComponent from './FooterSideComponent/FooterSideComponent';
import LogoComponent from '../LogoComponent/LogoComponent';
import RLetterLogo from '../../assets/images/r-mycovidrisk-letter-logo.svg';
import MyCovidRisk from '../../assets/images/my-covid-risk.svg';
import LogoWibson from '../../assets/images/logo-wibson.svg';

const SideNavComponent = props => {
    return (
        <div className="SideNavComponent">
            <div className="LogoContainer">
                <div className="Logo">
                    <LogoComponent logoUrl={RLetterLogo} altText="My Covid Risk"/>
                    <span style={{display: 'block', height: '32px'}}></span>
                    <LogoComponent logoUrl={MyCovidRisk} altText="My Covid Risk"/>
                </div>
            </div>
            <FooterSideComponent>
                <div className="LogoFooterContainer">
                    <div className="Logo">
                        <p className="FooterText">powered by</p><LogoComponent logoUrl={LogoWibson} altText="Powered by Wibson"/>
                    </div>
                </div>
            </FooterSideComponent>
        </div>
    );
};

export default SideNavComponent;