import React, { useState } from "react";
import Config from "../../Config";
import mapStyles from "../../assets/mapStyle.json";

import MapGL, { Source, Layer, WebMercatorViewport } from "react-map-gl";

const onError = event => console.error({ error: event.error, data: event.source?.data });

const defaultViewport = {
  width: 800,
  height: 600,
  latitude: -38.4160957,
  longitude: -63.6166725,
  zoom: 4,
};

const extractBounds = (coordinates = []) => {
  const [northWest, , southEast] = coordinates.sort((a, b) => {
    if (a[0] < b[0] && a[1] >= b[1]) return -1;
    if (a[0] >= b[0] && a[1] < b[1]) return  1;
    return 0;
  });

  return [northWest, southEast];
};

const extractCoordinates = (layers) => 
  layers.reduce((accum, { data: { features } }) => [
    ...accum, 
    ...features.map(({ geometry: { type, coordinates } }) => type === 'Point' 
      ? coordinates : coordinates[0])
  ], []);

export default function Map({ layers }) {
  const [viewport, setViewport] = useState(defaultViewport);
  let useViewport = viewport;

  const bounds = extractBounds(extractCoordinates(layers));
  if (bounds[0]) {
    useViewport = new WebMercatorViewport(viewport).fitBounds(bounds, {
      padding: 20,
      offset: [0, -100]
    });
  }

  return (
    <MapGL
      mapboxApiAccessToken={Config.mapboxAccessToken}
      {...useViewport}
      mapStyle={mapStyles}
      onError={onError}
      onViewportChange={setViewport}>
      {layers.map(({ data, config }, idx) => 
        <Source key={idx} type='geojson' data={data}>
          <Layer {...config} />
        </Source>
      )}
    </MapGL>
  );
}
