import React from 'react';
import { Button } from 'carbon-components-react';
import './CardComponent.scss';

const CardComponent = props => {
    return (
        <div className="CardComponent">
            {props.cardImage && <img src={props.cardImage} alt={props.cardImageAlt}/>}
            <div className="CopyButtonsContainer">
                {props.cardTitle && <p className="CardTitle">{props.cardTitle}</p>}
                {props.cardText && <p className="CardText">{props.cardText}</p>}
                {props.primaryCardButton && <Button className="ActionButtonCards">{props.primaryCardButton}</Button>}
            </div>
        </div>
    );
}

export default CardComponent;
