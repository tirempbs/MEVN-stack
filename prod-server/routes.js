"use strict";

var _interopRequireDefault3 = require("C:\\Users\\TiremBareno-Sosna\\Development\\mevn-stack\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

var _interopRequireDefault2 = _interopRequireDefault3(require("C:\\Users\\TiremBareno-Sosna\\Development\\mevn-stack\\node_modules\\@babel\\runtime-corejs2/helpers/esm/interopRequireDefault"));

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerRoutes = registerRoutes;

var _tasksRoutes = require("./api/task/tasks-routes");

var _tasksRoutes2 = (0, _interopRequireDefault2.default)(_tasksRoutes);

var _registerRoutes = require("./api/register/register-routes");

var _registerRoutes2 = (0, _interopRequireDefault2.default)(_registerRoutes);

var _authRoutes = require("./api/auth/auth-routes");

var _authRoutes2 = (0, _interopRequireDefault2.default)(_authRoutes);

var _userRoutes = require("./api/user/user-routes");

var _userRoutes2 = (0, _interopRequireDefault2.default)(_userRoutes);

function registerRoutes(app) {
  app.use('/api', _tasksRoutes2.default);
  app.use('/api', _registerRoutes2.default);
  app.use('/api', _authRoutes2.default);
  app.use('/api', _userRoutes2.default);
}