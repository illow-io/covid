import React, { useState } from "react";
import Config from "../../Config";
import mapStyles from "../../assets/mapStyle.json";

import MapGL, { Source, Layer } from "react-map-gl";

const circleLayer = {
  id: "covid_risk-point-layer",
  type: "circle",
  paint: {
    "circle-radius": 8,
    "circle-color": "#007cbf"
  }
};

export default function Map({ data }) {
  const [viewport, setViewport] = useState({
    width: 800,
    height: 600,
    latitude: -38.4160957,
    longitude: -63.6166725,
    zoom: 4
  });

  const features = data || {
    type: 'FeatureCollection',
    features: []
  };

  return (
    <MapGL
      mapboxApiAccessToken={Config.mapboxAccessToken}
      {...viewport}
      mapStyle={mapStyles}
      onViewportChange={setViewport}>
      <Source type='geojson' data={features}>
        <Layer {...circleLayer} />
      </Source>
    </MapGL>
  );
}
