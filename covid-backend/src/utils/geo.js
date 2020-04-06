import { S2Cell, S2LatLng } from 'nodes2ts';

export const generateGeohash = (geoPoint) => {
  const latLng = S2LatLng.fromDegrees(geoPoint.latitude, geoPoint.longitude);
  const cell = S2Cell.fromLatLng(latLng);
  const cellId = cell.id;
  return cellId.id;
};
