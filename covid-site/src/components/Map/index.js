import React, { useState, useEffect } from 'react';
import Config from '../../Config';
import mapStyles from '../../assets/mapStyle.json';

import MapGL, { Source, Layer } from 'react-map-gl';

const onError = (event) =>
  console.error({ error: event.error, data: event.source?.data });

const defaultViewport = {
  width: 800,
  height: 600,
  latitude: -34.5468697,
  longitude: -58.51662295,
  zoom: 14,
};

export default function Map({ layers, center }) {
  const [viewport, setViewport] = useState({
    ...defaultViewport,
    longitude: center[0],
    latitude: center[1],
  });

  useEffect(() => {
    const [longitude, latitude] = center;
    setViewport((state) => ({ ...state, longitude, latitude }));
  }, [center]);

  return (
    <MapGL
      mapboxApiAccessToken={Config.mapboxAccessToken}
      {...viewport}
      mapStyle={mapStyles}
      onError={onError}
      onViewportChange={setViewport}>
      {layers.map(({ data, config }, idx) => (
        <Source key={idx} type="geojson" data={data}>
          <Layer {...config} />
        </Source>
      ))}
    </MapGL>
  );
}
