import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import Config from '../../Config';
import mapStyles from '../../assets/mapStyle.json';

export default function Map() {
  const [viewport, setViewport] = useState({
    width: 800,
    height: 600,
    latitude: -34.6131516,
    longitude: -58.3772316,
    zoom: 10
  });

  return (
    <ReactMapGL
      mapboxApiAccessToken={Config.mapboxAccessToken}
      mapStyle={mapStyles}
      {...viewport}
      onViewportChange={setViewport}
    />
  );
}
