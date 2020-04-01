import React from 'react';
import './HeaderComponent.scss';
import IsoLogo from '../../assets/images/isologo.png';

const HeaderComponent = props => {
    return (
        <header className="HeaderComponent">
            <div className="ColorLine"></div>
            <div className="IsologoContainer">
                <div className="ImgContainer">
                    <img src={IsoLogo} alt="My Covid Risk"/>
                </div>
            </div>
        </header>
    );
}

export default HeaderComponent;
