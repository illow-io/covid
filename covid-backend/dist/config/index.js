"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _convict = _interopRequireDefault(require("convict"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _process = process,
    env = _process.env;
var config = (0, _convict["default"])({
  env: {
    doc: 'The application environment',
    format: ['production', 'development', 'test'],
    "default": 'development',
    env: 'NODE_ENV',
    arg: 'env'
  },
  port: {
    doc: 'The port to bind',
    format: 'port',
    "default": 6000,
    env: 'PORT',
    arg: 'port'
  },
  host: {
    doc: 'The host name/IP',
    format: '*',
    "default": '0.0.0.0',
    env: 'HOST',
    arg: 'host'
  },
  app: {
    name: {
      doc: 'The application name',
      format: String,
      "default": env.npm_package_name
    },
    version: {
      doc: 'The application version',
      format: String,
      "default": env.npm_package_version
    }
  }
});

try {
  // Load environment specific settings
  config.loadFile("".concat(__dirname, "/").concat(config.get('env'), ".json"));
} catch (error) {} // No environment settings found
// Perform validation


config.validate({
  allowed: 'strict'
});
var _default = config;
exports["default"] = _default;