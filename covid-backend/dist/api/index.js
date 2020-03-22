"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressBoomV = _interopRequireDefault(require("express-boom-v2"));

var _helmet = _interopRequireDefault(require("helmet"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("./routes"));

var _error = require("./middlewares/error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _expressBoomV["default"])());
app.use((0, _helmet["default"])());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json({
  limit: '100mb'
})); // as config

app.use(_routes["default"]);
app.use(_error.notFoundHandler);
app.use(_error.errorHandler);
var _default = app;
exports["default"] = _default;