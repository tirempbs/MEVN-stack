"use strict";

var _interopRequireDefault3 = require("C:\\Users\\TiremBareno-Sosna\\Development\\mevn-stack\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

var _interopRequireDefault2 = _interopRequireDefault3(require("C:\\Users\\TiremBareno-Sosna\\Development\\mevn-stack\\node_modules\\@babel\\runtime-corejs2/helpers/esm/interopRequireDefault"));

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setEnvironment = setEnvironment;

var _express = require("express");

var _express2 = (0, _interopRequireDefault2.default)(_express);

var _morgan = require("morgan");

var _morgan2 = (0, _interopRequireDefault2.default)(_morgan);

var _cors = require("cors");

var _cors2 = (0, _interopRequireDefault2.default)(_cors);

var _bodyParser = require("body-parser");

var _bodyParser2 = (0, _interopRequireDefault2.default)(_bodyParser);

function setEnvironment(app) {
  if (process.env.NODE_ENV !== 'production') {
    setDevEnv(app);
  } else {
    setProdEnv(app);
  }
}

function setDevEnv(app) {
  process.env.NODE_ENV = 'development';
  process.env.DB_URL = 'mongodb://localhost:27017/vue-db';
  app.use(_bodyParser2.default.json());
  app.use((0, _morgan2.default)('dev'));
  app.use((0, _cors2.default)());
}

function setProdEnv(app) {
  process.env.DB_URL = 'mongodb://localhost:27017/prod-db';
  app.use(_bodyParser2.default.json());
  app.use(_express2.default.static(__dirname + '/../dist'));
}