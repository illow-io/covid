import tj from '@mapbox/togeojson';
import { DOMParser } from 'xmldom';

import { usersLocationHistory } from '../db/stores';
import { NotFoundError } from '../utils/errors';

const NoLocationHistory = { geoJsonData: { S: null } };

export const storeLocationHistory = async (userId, kmlData) => {
  const kml = (new DOMParser()).parseFromString(kmlData);
  const converted = tj.kml(kml);

  return usersLocationHistory.store(userId, {
    geoJsonFeatures: { S: JSON.stringify(converted.features) }
  });
};

export const fetchLocationHistory = async (userId) => {
  const { Item: item = NoLocationHistory } = await usersLocationHistory.fetch(userId);
  const { geoJsonFeatures: { S: geoJsonFeatures } } = item;
  if (!geoJsonFeatures) throw new NotFoundError('No GeoJSON data found');

  return {
    type: 'FeatureCollection',
    features: JSON.parse(geoJsonFeatures)
  };
};
