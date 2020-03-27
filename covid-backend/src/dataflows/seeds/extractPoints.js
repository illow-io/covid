import csv from 'csv-parser';
import fs from 'fs';
import toUuid from 'uuid-by-string';

import { seedsLocationHistory } from '../../db/stores';
import logger from '../../utils/logger';

// Files to download from s3-mx-covid
// ar_mar_01.csv.gz ar_mar_02.csv.gz ar_mar_03.csv.gz ar_mar_04.csv.gz ar_mar_05.csv.gz ar_mar_06.csv.gz ar_mar_07.csv.gz ar_mar_08.csv.gz ar_mar_09.csv.gz ar_mar_10.csv.gz ar_mar_11.csv.gz ar_mar_12.csv.gz ar_mar_13.csv.gz ar_mar_14.csv.gz ar_mar_15.csv.gz ar_mar_16.csv.gz ar_mar_17.csv.gz ar_mar_18.csv.gz ar_mar_19.csv.gz ar_mar_20.csv.gz ar_mar_21.csv.gz ar_mar_22.csv.gz ar_mar_23.csv.gz

const parseCsv = async (path, dateFrom, pageSize) => {
  logger.info(`Parsing file ${path}`);
  const existingUuids = {};
  let count = 0;
  let pointsToPut = [];

  const store = async (records) => {
    await seedsLocationHistory.batchStore(
      records
    ).then(() => {
      logger.info(`Added ${records.length}`);
      // logger.debug(records);
    });
    return records.length;
  }
  
  const readable = fs.createReadStream(path).pipe(csv({ separator: '\t' }));
  for await (const row of readable) {
    const { 
      'hex(SHA1(advertiser_id))': advertiserId, 
      timestamp: rawTimestamp, 
      latitude: rawLatitude,
      longitude: rawLongitude,
      country
    } = row;
    const timestamp = Number(rawTimestamp);
    const latitude = Number(rawLatitude);
    const longitude = Number(rawLongitude);
    const uuid = toUuid(`${advertiserId}:${timestamp}`);
    if (timestamp > dateFrom && !existingUuids[uuid]) {
      existingUuids[uuid] = true;
      pointsToPut.push({
        id: uuid,
        point: { latitude, longitude },
        data: {
          advertiserId: { S: advertiserId },
          timestamp: { S: rawTimestamp },
          country: { S: country }
        }
      });
      if (pointsToPut.length === pageSize) {
        count += await store([...pointsToPut]);
        pointsToPut = [];
      }
    }
  }
  count += await store([...pointsToPut]);
  logger.info(`Parsing file ${path} ended. ${count} points added to the SeedsLocationHistory DB`);
  // fs.createReadStream(path)
  //   .pipe(csv({ separator: '\t' }))
  //   .on('data', async (row) => {
  //     const { 
  //       'hex(SHA1(advertiser_id))': advertiserId, 
  //       timestamp: rawTimestamp, 
  //       latitude: rawLatitude,
  //       longitude: rawLongitude,
  //       country
  //     } = row;
  //     const timestamp = Number(rawTimestamp);
  //     const latitude = Number(rawLatitude);
  //     const longitude = Number(rawLongitude);
  //     if (timestamp > dateFrom) {
  //       const uuid = toUuid(`${advertiserId}:${timestamp}`);
  //       pointsToPut.push({
  //         id: uuid,
  //         point: { latitude, longitude },
  //         data: {
  //           advertiserId: { S: advertiserId },
  //           timestamp: { S: rawTimestamp },
  //           country: { S: country }
  //         }
  //       });
  //       if (pointsToPut.length === pageSize) {
  //         await store([...pointsToPut]);
  //         pointsToPut = [];
  //       }
  //     }
  //   })
  //   .on('end', () => logger.info(`Parsing file ${path} ended`));  
}

const [path, from, pageSize] = process.argv.slice(2);
parseCsv(path, Date.parse(from) / 1000, pageSize ? Number(pageSize) : 25);
