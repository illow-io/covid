import convict from 'convict';

const { env } = process;

const config = convict({
  env: {
    doc: 'The application environment',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
    arg: 'env'
  },
  port: {
    doc: 'The port to bind',
    format: 'port',
    default: 9000,
    env: 'PORT',
    arg: 'port'
  },
  host: {
    doc: 'The host name/IP',
    format: '*',
    default: '0.0.0.0',
    env: 'HOST',
    arg: 'host'
  },
  app: {
    name: {
      doc: 'The application name',
      format: String,
      default: env.npm_package_name
    },
    version: {
      doc: 'The application version',
      format: String,
      default: env.npm_package_version
    }
  },
  accessLog: {
    format: {
      doc: 'Access log format',
      format: String,
      default: 'combined' // See https://www.npmjs.com/package/morgan#predefined-formats
    },
    skip: {
      doc: 'Whether to skip access log or not',
      format: Boolean,
      default: false
    }
  },
  aws: {
    region: {
      doc: 'AWS region',
      format: String,
      default: 'eu-central-1',
      env: 'AWS_REGION'
    },
    bucket: {
      doc: 'AWS S3 bucket',
      format: String,
      default: 'mycovidrisk-data',
      env: 'AWS_BUCKET'
    },
    dynamoEndpoint: {
      doc: 'AWS DynamoDB endpoint',
      format: String,
      default: 'http://localhost:9001',
      env: 'AWS_DYNAMO_ENDPOINT'
    },
    accessKeyID: {
      doc: 'AWS access key ID',
      format: String,
      default: 'fakeMyKeyId',
      env: 'AWS_ACCESS_KEY_ID'
    },
    secretAccessKey: {
      doc: 'AWS secret access key',
      format: String,
      default: 'fakeSecretAccessKey',
      env: 'AWS_SECRET_ACCESS_KEY'
    }
  },
  upload: {
    debug: {
      doc: 'Show upload debug info',
      format: Boolean,
      default: true
    },
    path: {
      doc: 'File upload path',
      format: String,
      default: 'tmp/uploads'
    },
    limits: {
      fileSize: {
        doc: 'Max file size',
        format: Number,
        default: 100 * 1024 * 1024
      }
    }
  },
  googleClientId: {
    doc: 'The google client Id',
    format: String,
    default: 'fakeClientID',
    env: 'GOOGLE_CLIENT_ID'
  }
});

try {
  // Load environment specific settings
  config.loadFile(`${__dirname}/${config.get('env')}.json`);
} catch (error) {
  // No environment settings found
}

// Perform validation
config.validate({ allowed: 'strict' });

export default config;
