import AWS from 'aws-sdk';
import * as DynamoDBGeo from 'dynamodb-geo';
import config from '../config';

const dynamodb = new AWS.DynamoDB({
  region: config.get('aws.region'),
  accessKeyId: config.get('aws.accessKeyID'),
  secretAccessKey: config.get('aws.secretAccessKey'),
  endpoint: config.get('aws.endpoint')
});

const tableExists = async (TableName) => {
  try {
    await dynamodb.describeTable({ TableName }).promise();
    return true;
  } catch (err) {
    return false;
  }
};

const createTable = async (config) => {
  const createTableInput = DynamoDBGeo.GeoTableUtil.getCreateTableRequest(config);
  console.log('Creating table with schema:');
  console.dir(createTableInput, { depth: null });
  await dynamodb.createTable(createTableInput).promise();
}

export class GeoStore {
  constructor(tableName) {
    this.tableName = tableName;
    this.config = new DynamoDBGeo.GeoDataManagerConfiguration(dynamodb, this.tableName);
    // @TODO: Read!
    // @see https://www.npmjs.com/package/dynamodb-geo#choosing-a-hashkeylength-optimising-for-performance-and-cost
    // @see https://github.com/rh389/dynamodb-geo.js/blob/master/test/integration/hashKeyLength.ts
    this.config.hashKeyLength = 11; // 10m radius searches
    this.db = new DynamoDBGeo.GeoDataManager(this.config);
  }

  init = async () => {
    if (!(await tableExists(this.tableName))) {
      await createTable(this.config);
    }
  };

  /**
   * @param {string} id
   * @param {object} point
   * @param {object} data
   */
  store = async (id, point, data) => this.db.putPoint({
    // Use this to ensure uniqueness of the hash/range pairs.
    RangeKeyValue: { S: id }, 
    GeoPoint: point,
    PutItemInput: { 
      Item: data,
      // ... Anything else to pass through to `putItem`, eg ConditionExpression
    }
  }).promise();

  batchStore = async (records) => this.db.batchWritePoints(
    records.map(({ id, point, data }) => ({
      // Use this to ensure uniqueness of the hash/range pairs.
      RangeKeyValue: { S: id },
      GeoPoint: point,
      PutItemInput: {
        Item: data
        // ... Anything else to pass through to `putItem`, eg ConditionExpression
      }
    })
  )).promise()

  /**
   * @param {number} radius
   * @param {object} point
   */
  queryRadius = async (radius, point) => this.db.queryRadius({
    RadiusInMeter: radius,
    CenterPoint: point
  });
}
