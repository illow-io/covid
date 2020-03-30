import React, { useState } from "react";
import Config from "../../Config";
import mapStyles from "../../assets/mapStyle.json";
import geojsonMock from "../../services/mockData/hotSpots.json";

import MapGL, { Source, Layer } from "react-map-gl";

const circleLayer = {
  id: "covid_risk-point-layer",
  type: "circle",
  paint: {
    "circle-radius": 4,
    "circle-color": "#007cbf"
  }
};

export default function Map({ data }) {
  const [viewport, setViewport] = useState({
    width: 800,
    height: 600,
    latitude: 9.318021,
    longitude: -70.603439,
    zoom: 8
  });

  return (
    <MapGL
      mapboxApiAccessToken={Config.mapboxAccessToken}
      {...viewport}
      mapStyle={mapStyles}
      onViewportChange={setViewport}>
      <Source type='geojson' data={geojsonMock}>
        <Layer {...circleLayer} />
      </Source>
    </MapGL>
  );
}
