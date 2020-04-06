export const INTERNAL_ERROR = 'internal_error';
export const DATA_NOT_FOUND = 'data_not_found';

/**
 * @typedef ErrorProps
 * @property {string} message Error message
 * @property {string} code Error code
 */
export class WibsonError extends Error {
  constructor (message, code = INTERNAL_ERROR) {
    super(message);
    this.code = code;
  }

  asParams (includeStack = false) {
    return {
      message: this.message,
      code: this.code,
      ...(includeStack ? { stack: this.stack } : {})
    };
  }
}

export class NotFoundError extends WibsonError {
  constructor (message, code = DATA_NOT_FOUND) {
    super(message, code);
  }
}
