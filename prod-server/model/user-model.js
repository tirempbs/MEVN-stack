"use strict";

var _interopRequireDefault3 = require("C:\\Users\\TiremBareno-Sosna\\Development\\mevn-stack\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

var _interopRequireDefault2 = _interopRequireDefault3(require("C:\\Users\\TiremBareno-Sosna\\Development\\mevn-stack\\node_modules\\@babel\\runtime-corejs2/helpers/esm/interopRequireDefault"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = (0, _interopRequireDefault2.default)(_mongoose);

var _stringUtil = require("../utilities/string-util");

var userSchema = new _mongoose2.default.Schema({
  username: String,
  first: String,
  last: String,
  password: String
});
userSchema.set('timestamps', true);
userSchema.virtual('fullName').get(function () {
  var first = _stringUtil.StringUtil.capitalize(this.first.toLowerCase());

  var last = _stringUtil.StringUtil.capitalize(this.last.toLowerCase());

  return "".concat(first, " ").concat(last);
});
userSchema.pre('save', function (next) {
  this.username = this.username.toLowerCase();
  this.first = this.first.toLowerCase();
  this.last = this.last.toLowerCase();
  next();
});
exports.default = _mongoose2.default.model('user', userSchema);