import React from 'react';
import TwitterLogo from '../../assets/images/twt.svg';
import FacebookLogo from '../../assets/images/fbk.svg';
import WhatsappLogo from '../../assets/images/wssp.svg';
import './RRSSComponent.scss';

const RRSSComponent = props => {
    return (
        <div className="RRSSComponent">
            <div className="CopyTextComponent">
                {props.cardTitle && <p className="CardTitle">{props.cardTitle}</p>}
                {props.cardText && <p className="CardText">{props.cardText}</p>}
                <div className="SocialMediaIconsContainer">
                    <img src={FacebookLogo} alt="Share with Facebook"/>
                    <img src={WhatsappLogo} alt="Share with Whatsapp"/>
                    <img src={TwitterLogo} alt="Share with Twitter"/>
                </div>
            </div>
        </div>
    );
}

export default RRSSComponent;
