"use strict";

require("core-js/stable");

require("regenerator-runtime/runtime");

var _api = _interopRequireDefault(require("./api"));

var _config = _interopRequireDefault(require("./config"));

var _logger = _interopRequireDefault(require("./utils/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _config$getProperties = _config["default"].getProperties(),
    name = _config$getProperties.app.name,
    port = _config$getProperties.port,
    host = _config$getProperties.host,
    env = _config$getProperties.env;

_api["default"].listen({
  port: port,
  host: host
}, function () {
  return _logger["default"].log("".concat(name, " listening on ").concat(host, ":").concat(port, " (").concat(env, ")"));
});