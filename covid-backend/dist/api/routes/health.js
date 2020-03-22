"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.get('/health', function (_req, res) {
  return res.json({
    api: {
      name: _config["default"].get('app').name,
      version: _config["default"].get('app').version
    }
  });
});
var _default = router;
exports["default"] = _default;