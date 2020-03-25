import aws from 'aws-sdk';
import config from '../config';

class AWSWrapper {
  constructor(bucket, s3) {
    this.bucket = bucket;
    this.s3 = s3;
  }

  promisify(methodName, params) {
    return new Promise((res, rej) =>
      this.s3[methodName]({ Bucket: this.bucket, ...params }, (err, data) =>
        (err ? rej : res)(err || data)));
  }

  getObject(key) {
    return this.promisify('getObject', { Key: key.toLowerCase() })
      .catch(() => this.promisify('getObject', { Key: key })); // making it retrocompatible
  }

  putObject(key, headers = {}, obj) {
    return this.promisify('putObject', { Key: key.toLowerCase(), Body: obj, ...headers });
  }

  upload(key, obj) {
    return this.promisify('upload', { Key: key.toLowerCase(), Body: obj });
  }

  async listObjectsAsIs(prefix) {
    const objects = [];
    let ContinuationToken;
    do {
      const params = { Prefix: prefix, ContinuationToken };
      const batch = await this.promisify('listObjectsV2', params); // eslint-disable-line no-await-in-loop
      objects.push(...batch.Contents);
      ContinuationToken = batch.IsTruncated && batch.NextContinuationToken;
    } while (ContinuationToken);
    return objects;
  }

  async listObjects(prefix) { // making it retrocompatible
    const lowerCaseObjects = await this.listObjectsAsIs(prefix.toLowerCase());
    const objects = await this.listObjectsAsIs(prefix);
    return [...lowerCaseObjects, ...objects];
  }
}

export default new AWSWrapper(
  config.get('aws.bucket'),
  new aws.S3({
    region: config.get('aws.region'),
    accessKeyId: config.get('aws.accessKeyID'),
    secretAccessKey: config.get('aws.secretAccessKey'),
    s3ForcePathStyle: true,
  }),
);