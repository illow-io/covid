import tj from '@mapbox/togeojson';
import { DOMParser } from 'xmldom';
// import uuid from 'uuid/v4';
// import toUuid from 'uuid-by-string';

import { usersLocationHistory } from '../db/stores';
import { generateGeohash } from '../utils/geo';

const storeTimeline = async (user, kmlData) => {
  const kml = (new DOMParser()).parseFromString(kmlData);
  const converted = tj.kml(kml);

  const itemsToPut = converted.features.map(({ type, geometry, properties }) => {
    const timestamp = Math.floor(Date.parse(properties.timespan.begin) / 1000);

    return {
      id: user.id,
      data: {
        timestamp: { S: `${timestamp}` },
        feature: { S: JSON.stringify({ type, geometry, properties }) }
      }
    };

    // return {
    //   id: toUuid(`${user.id}:${uuid()}`),
    //   point: { longitude, latitude },
    //   data: {
    //     timestamp: { N: `${timestamp}` },
    //     feature: { S: `${JSON.stringify({ type, geometry, properties })}` }
    //   }
    // }
  });

  // return Promise.all(itemsToPut.map(({ userId, ...data }) => {
  //   console.log({ userId, ...data })
  //   return usersLocationHistory.store(userId, data);
  // }))
  const { id, data } = itemsToPut[0];
  return usersLocationHistory.store(id, data);

  return usersLocationHistory.batchStore(itemsToPut);
};

export default storeTimeline;
