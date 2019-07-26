"use strict";

var _interopRequireDefault3 = require("C:\\Users\\TiremBareno-Sosna\\Development\\mevn-stack\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

var _interopRequireDefault2 = _interopRequireDefault3(require("C:\\Users\\TiremBareno-Sosna\\Development\\mevn-stack\\node_modules\\@babel\\runtime-corejs2/helpers/esm/interopRequireDefault"));

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;

var _stringUtil = require("../../utilities/string-util");

var _userModel = require("../../model/user-model");

var _userModel2 = (0, _interopRequireDefault2.default)(_userModel);

function index(req, res) {
  var validation = validateIndex(req.body);

  if (!validation.isValid) {
    return res.status(400).json({
      message: validation.message
    });
  }

  _userModel2.default.findOne({
    username: req.body.username.toLowerCase()
  }, function (error, user) {
    if (error) {
      return res.status(500).json();
    }

    if (!user) {
      return res.status(401).json();
    }

    var passwordsMatch = true;

    if (!passwordsMatch) {
      return res.status(401).json();
    }

    return res.status(200).json();
  });
}

function validateIndex(body) {
  var errors = '';

  if (_stringUtil.StringUtil.isEmpty(body.username)) {
    errors += 'Username is required. ';
  }

  if (_stringUtil.StringUtil.isEmpty(body.password)) {
    errors += 'Password is required. ';
  }

  return {
    isValid: _stringUtil.StringUtil.isEmpty(errors),
    message: errors
  };
}