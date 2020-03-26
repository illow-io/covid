import winston from 'winston';
import config from '../config';

const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
});
const buildFormatter = () =>
  winston.format.combine(
    winston.format.simple(),
    winston.format.timestamp(),
    winston.format.printf(info => `${info.timestamp} [${info.level}]: ${info.message}`),
  );

switch (config.get('env')) {
  case 'production':
    logger.add(new winston.transports.Console({ handleExceptions: true }));
    logger.add(new winston.transports.File({
      filename: "/logs/combined.log",
      handleExceptions: true,
      format: buildFormatter(),
    }));
    logger.add(new winston.transports.File({
      filename: "/logs/error.log",
      handleExceptions: true,
      level: 'error',
      format: buildFormatter(),
    }));
    break;
  case 'development':
    logger.add(new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      format: winston.format.combine(
        winston.format.simple(),
        winston.format.colorize(),
        winston.format.timestamp({ format: 'HH:mm:ss.SSS' }),
        winston.format.printf(info => `${info.timestamp} [${info.level}]: ${info.message}`),
      ),
    }));
    break;
  case 'test':
  default:
    logger.add(new winston.transports.Console({ silent: true }));
    break;
}

module.exports = logger;
module.exports.stream = {
  write(message) {
    logger.info(message);
  },
};
