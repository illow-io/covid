import AWS from 'aws-sdk';
import config from '../config';

AWS.config.update({
  region: config.get('aws.region'),
  accessKeyId: config.get('aws.accessKeyID'),
  secretAccessKey: config.get('aws.secretAccessKey'),
  endpoint: config.get('aws.endpoint')
});

const dynamodb = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();

const tableExists = async (TableName) => {
  try {
    await dynamodb.describeTable({ TableName }).promise();
    return true;
  } catch (err) {
    return false;
  }
};

const createTable = async (
  TableName,
  KeySchema = [{ AttributeName: 'id', KeyType: 'HASH' }],
  AttributeDefinitions = [{ AttributeName: 'id', AttributeType: 'S' }],
) => {
  const params = {
    TableName,
    KeySchema,
    AttributeDefinitions,
    ProvisionedThroughput: {
      ReadCapacityUnits: 10,
      WriteCapacityUnits: 10
    }
  };

  await dynamodb.createTable(params).promise();
}

/**
 * @typedef DynamoStore A store that uses DynamoDB
 * @property {() => Promise<void>} init Initiates the store.
 * @property {(id: K) => Promise<V>} fetch Retrieves the value
 * @property {(id: K) => Promise<V>} delete Removes data from the store.
 * @property {(id: K, obj: V) => Promise<V>} store Stores the value or replaces the previous one.
 * @property {(id: K, obj: V) => Promise<V>} upsert Updates or creates the value.
 * @property {(id: K, attr: String, value: Any) => Promise<V>} appendValue Appends the value to the selected attribute as long as it is an array
 * @template K
 * @template V
 */
export class Store {
  constructor(
    tableName,
    primaryKeySchema = [{ AttributeName: 'id', KeyType: 'HASH' }],
    indexes = [{ AttributeName: 'id', AttributeType: 'S' }],
  ) {
    this.tableName = tableName;
    this.primaryKeySchema = primaryKeySchema;
    this.indexes = indexes;
    this.primaryKey = primaryKeySchema[0].AttributeName;
  }

  init = async () => {
    if (!(await tableExists(this.tableName))) {
      await createTable(this.tableName, this.primaryKeySchema, this.indexes);
    }
  };

  _keyMethod = async (id, method) => {
    const params = {
      TableName: this.tableName,
      Key: { [this.primaryKey]: id }
    };
    return docClient[method](params).promise();
  };

  fetch = async (id) => this._keyMethod(id, 'get');
  delete = async (id) => this._keyMethod(id, 'delete');

  store = async (id, data) => {
    const params = {
      TableName: this.tableName,
      Item: {
        [this.primaryKey]: id,
        ...data
      }
    };
    return docClient.put(params).promise();
  }

  upsert = async (id, data) => {
    const updateExpression = Object.keys(data).reduce(
      (expr, key, index) => key === this.primaryKey ? expr : `${expr}${expr !== 'set' ? ',' : ''} ${key} = :new${key}`,
      'set'
    );
    const expressionAttributeValues = Object.entries(data).reduce(
      (values, [key, value]) => key === this.primaryKey ? values : ({
        ...values,
        [`:new${key}`]: value
      }),
      {}
    );

    const params = {
      TableName: this.tableName,
      Key: { [this.primaryKey]: id },
      UpdateExpression: updateExpression,
      ExpressionAttributeValues: expressionAttributeValues
    };
    return docClient.update(params).promise();
  }

  appendValue = async (id, attr, value) => {
    const obj = await this.get(id);
    const oldValues = obj.hasOwnProperty(attr) && Array.isArray(obj[attr]) ? obj[attr] : [];
    const newValues = [...oldValues, value];
    return this.upsert(id, { [attr]: newValues });
  }
}
