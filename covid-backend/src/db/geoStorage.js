import AWS from 'aws-sdk';
import * as DynamoDBGeo from 'dynamodb-geo';
import config from '../config';

const dynamodb = new AWS.DynamoDB({
  region: config.get('aws.region'),
  accessKeyId: config.get('aws.accessKeyID'),
  secretAccessKey: config.get('aws.secretAccessKey'),
  endpoint: config.get('aws.dynamoEndpoint')
});

const tableExists = async (TableName) => {
  try {
    await dynamodb.describeTable({ TableName }).promise();
    return true;
  } catch (err) {
    return false;
  }
};

/**
 * ProvisionedThroughput: { ReadCapacityUnits: 10, WriteCapacityUnits: 5 }
 * KeySchema: [
 *   { KeyType: 'HASH', AttributeName: 'hashKey' },
 *   { KeyType: 'RANGE', AttributeName: 'rangeKey' }
 * ],
 * AttributeDefinitions: [
 *   { AttributeName: 'hashKey', AttributeType: 'N' },
 *   { AttributeName: 'rangeKey', AttributeType: 'S' },
 *   { AttributeName: 'geohash', AttributeType: 'N' },
 *   { AttributeName: 'userId', AttributeType: 'S' }
 * ],
 * LocalSecondaryIndexes: [
 *   {
 *     IndexName: 'geohash-index',
 *     KeySchema: [
 *       { KeyType: 'HASH', AttributeName: 'hashKey' },
 *       { KeyType: 'RANGE', AttributeName: 'geohash' }
 *     ],
 *     Projection: { ProjectionType: 'ALL' }
 *   }
 * ],
 * GlobalSecondaryIndexes: [
 *   {
 *     IndexName: 'userId-geohash-index',
 *     KeySchema: [
 *       { KeyType: 'HASH', AttributeName: 'userId' },
 *       { KeyType: 'RANGE', AttributeName: 'geohash' }
 *     ]
 *     Projection: { ProjectionType: 'ALL' }
 *     ProvisionedThroughput: { ReadCapacityUnits: 10, WriteCapacityUnits: 5 }
 *   }
 * ]
 */
const createTable = async (
  config,
  { KeySchema = [], AttributeDefinitions = [], GlobalSecondaryIndexes = [] } = {}
) => {
  const createTableInput = DynamoDBGeo.GeoTableUtil.getCreateTableRequest(config);
  if (!createTableInput.GlobalSecondaryIndexes && GlobalSecondaryIndexes.length > 0) {
    createTableInput.GlobalSecondaryIndexes = [];
  }

  Object.entries({ 
    KeySchema, 
    AttributeDefinitions, 
    GlobalSecondaryIndexes
  }).forEach(([name, params]) => {
    if (createTableInput[name] && params) {
      const applyParams = typeof params === 'function' 
        ? params(createTableInput)
        : params;
      applyParams.map(field => createTableInput[name].push(field));
    }
  })
  console.log('Creating table with schema:');
  console.dir(createTableInput, { depth: null });
  await dynamodb.createTable(createTableInput).promise();
}

export class GeoStore {
  constructor(tableName, schema) {
    this.tableName = tableName;
    this.schema = schema;
    this.config = new DynamoDBGeo.GeoDataManagerConfiguration(dynamodb, this.tableName);
    // @TODO: Read!
    // @see https://www.npmjs.com/package/dynamodb-geo#choosing-a-hashkeylength-optimising-for-performance-and-cost
    // @see https://github.com/rh389/dynamodb-geo.js/blob/master/test/integration/hashKeyLength.ts
    this.config.hashKeyLength = 11; // 10m radius searches
    this.db = new DynamoDBGeo.GeoDataManager(this.config);
  }

  init = async () => {
    if (!(await tableExists(this.tableName))) {
      await createTable(this.config, this.schema);
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

  query = async (params) => this.config.dynamoDBClient.query({
    TableName: this.tableName,
    ...params
  }).promise();


  /**
   * @param {number} radius
   * @param {object} point
   */
  queryRadius = async (radius, point) => this.db.queryRadius({
    RadiusInMeter: radius,
    CenterPoint: point
  });
}
