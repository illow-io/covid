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
                    <img src={FacebookLogo} />
                    <img src={WhatsappLogo} />
                    <img src={TwitterLogo} />
                </div>
            </div>
        </div>
    );
}

export default RRSSComponent;
