"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notFoundHandler = exports.errorHandler = void 0;

var _logger = _interopRequireDefault(require("../../utils/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @function errorHandler Handles app errors and responds with standard format
 */
var errorHandler = function errorHandler(err, _req, res, _next) {
  _logger["default"].error(err.stack);

  if (err.failedValidation) {
    res.boom.badData('Unprocessable');
  } else {
    res.boom.badImplementation(err.message);
  }
};
/**
 * @function notFoundHandler Responds a 404 status when route is not found
 */


exports.errorHandler = errorHandler;

var notFoundHandler = function notFoundHandler(req, res, next) {
  if (!req.route) {
    res.boom.notFound();
  } else {
    next();
  }
};

exports.notFoundHandler = notFoundHandler;