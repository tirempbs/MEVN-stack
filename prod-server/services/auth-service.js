"use strict";

var _interopRequireDefault3 = require("C:\\Users\\TiremBareno-Sosna\\Development\\mevn-stack\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

var _interopRequireDefault2 = _interopRequireDefault3(require("C:\\Users\\TiremBareno-Sosna\\Development\\mevn-stack\\node_modules\\@babel\\runtime-corejs2/helpers/esm/interopRequireDefault"));

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateJWT = generateJWT;

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = (0, _interopRequireDefault2.default)(_jsonwebtoken);

function generateJWT(user) {
  var tokenData = {
    username: user.username,
    id: user._id
  };
  return _jsonwebtoken2.default.sign({
    user: tokenData
  }, process.env.TOKEN_SECRET);
}