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
    default: 'wJalrXUtnFEMI-K7MDENG/bPxdfadLEKEY',
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
