import React from 'react'
import './FooterSideComponent.scss';
import LogoComponent from '../LogoComponent/LogoComponent';
import LogoWibson from '../../assets/images/logo-wibson.svg';

const FooterSideComponent = props => {
    return (
        <footer className="FooterSideComponent">
            <div className="LogoFooterContainer">
                <div className="Logo">
                    <div className="AlignmentFooter">
                        <p className="FooterText">powered by</p><LogoComponent logoUrl={LogoWibson} altText="Powered by Wibson"/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSideComponent;
