import tj from '@mapbox/togeojson';
import { DOMParser } from 'xmldom';
import uuid from 'uuid/v4';

import { usersLocationHistory } from '../db/stores';

export const storeLocationHistory = async (userId, kmlData) => {
  const kml = (new DOMParser()).parseFromString(kmlData);
  const converted = tj.kml(kml);

  const itemsToStore = converted.features.map(({ type, geometry, properties }) => {
    const [longitude, latitude] = geometry.type === 'Point'
      ? geometry.coordinates
      : geometry.coordinates[0];

    return {
      id: uuid(),
      point: { latitude, longitude },
      data: {
        userId: { S: userId },
        timestamp: { N: `${Date.parse(properties.timespan.begin)}` },
        type: { S: type },
        geometry: {
          M: {
            type: { S: geometry.type },
            coordinates: { S: JSON.stringify(geometry.coordinates) }
          }
        }
      }
    };
  });

  return usersLocationHistory.batchStore(itemsToStore);
};

export const fetchLocationHistory = async (userId) => {
  const { Items: items } = await usersLocationHistory.query({
    IndexName: 'userId-geohash-index',
    KeyConditionExpression: 'userId = :hkey',
    ExpressionAttributeValues: { ':hkey': { S: userId } }
  });

  return {
    type: 'FeatureCollection',
    features: items.map(({ type, geometry }) => ({
      type: type.S,
      geometry: {
        type: geometry.M.type.S,
        coordinates: JSON.parse(geometry.M.coordinates.S)
      }
    }))
  };
};
