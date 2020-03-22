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
    default: 6000,
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
  aws: {
    region: {
      doc: 'AWS region',
      format: String,
      default: 'eu-west-2',
      env: 'AWS_REGION'
    },
    endpoint: {
      doc: 'AWS endpoint',
      format: String,
      default: 'http://localhost:6000',
      env: 'AWS_ENDPOINT'
    },
    accessKeyID: {
      doc: 'AWS access key ID',
      format: String,
      default: 'AKIAIOSFODNN7EXAMPLE',
      env: 'AWS_ACCESS_KEY_ID'
    },
    secretAccessKey: {
      doc: 'AWS secret access key',
      format: String,
      default: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
      env: 'AWS_SECRET_ACCESS_KEY'
    }
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
