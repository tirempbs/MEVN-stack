"use strict";

var _interopRequireDefault = require("C:\\Users\\TiremBareno-Sosna\\Development\\mevn-stack\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var router = _express.default.Router();

router.post('/register', function (req, res) {
  res.send('post.register - register a user');
});
var _default = router;
exports.default = _default;