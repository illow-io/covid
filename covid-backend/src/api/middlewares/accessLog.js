import morgan from 'morgan'
import config from '../../config'
import logger from '../../utils/logger'

export default function accessLog () {
  const { format, skip } = config.get('accessLog');
  return morgan(format, { 
    skip: () => skip,
    stream: {
      write: (message) => {
        logger.info(message.trim());
      },
    }
  });
}
