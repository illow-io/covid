import AWS from 'aws-sdk';
import config from '../config';

AWS.config.update({
  region: config.get('aws.region'),
  endpoint: config.get('aws.endpoint')
});

const dynamodb = new AWS.DynamoDB();
const tableName = 'covid-enrich-data';
const docClient = new AWS.DynamoDB.DocumentClient();

const createTable = () => {
  const params = {
    TableName: tableName,
    KeySchema: [
      { AttributeName: 'id', KeyType: 'HASH' }, //Partition key
      { AttributeName: 'since', KeyType: 'RANGE' } //Sort key
    ],
    AttributeDefinitions: [
      { AttributeName: 'id', AttributeType: 'S' },
      { AttributeName: 'since', AttributeType: 'S' }
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 10,
      WriteCapacityUnits: 10
    }
  };

  dynamodb.createTable(params, function(err, data) {
    if (err) {
      console.error('Unable to create table. Error JSON:', JSON.stringify(err, null, 2));
    } else {
      console.log('Created table. Table description JSON:', JSON.stringify(data, null, 2));
    }
  });
};

export default {
  save: data => {
    var params = {
      TableName: tableName,
      Item: {
        ...data
      }
    };
    docClient.put(params, function(err, data) {
      if (err) {
        console.error('Unable to add', JSON.stringify(err, null, 2));
      } else {
        console.log('PutItem succeeded:', data);
      }
    });
  },
  update: () => {},
  remove: () => {},
  get: () => {},
  getById: () => {}
};
