import React from 'react';
import MapImg from '../../assets/images/risk-map.png';
import './MapComponent.scss';

const MapComponent = props => {
    return (
        <div className="MapComponent">
            <img src={MapImg} alt="My Covid Risk Map" />
        </div>
    );
}

export default MapComponent;
