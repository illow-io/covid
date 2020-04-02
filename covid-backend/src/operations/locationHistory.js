import tj from '@mapbox/togeojson';
import { DOMParser } from 'xmldom';

import { usersLocationHistory } from '../db/stores';

export const storeLocationHistory = async (userId, kmlData) => {
  const kml = (new DOMParser()).parseFromString(kmlData);
  const converted = tj.kml(kml);

  const itemsToStore = converted.features.map(({ type, geometry, properties }) => {
    return {
      id: userId,
      timestamp: Date.parse(properties.timespan.begin),
      geoJsonFeature: {
        M: {
          type: { S: type },
          geometry: {
            M: {
              type: { S: geometry.type },
              coordinates: { NN: geometry.coordinates }
            }
          }
        }
      }
    };
  });

  return usersLocationHistory.batchStore(itemsToStore);
};

export const fetchLocationHistory = async (userId) => {
  const { Items: items } = await usersLocationHistory.query({
    KeyConditionExpression: 'id = :hkey',
    ExpressionAttributeValues: { ':hkey': userId }
  });

  return {
    type: 'FeatureCollection',
    features: items.map(({ geoJsonFeature }) => ({
      type: geoJsonFeature.M.type.S,
      geometry: {
        type: geoJsonFeature.M.geometry.M.type.S,
        coordinates: geoJsonFeature.M.geometry.M.coordinates.NN
      }
    }))
  };
};
