"use strict";

var _interopRequireDefault3 = require("C:\\Users\\TiremBareno-Sosna\\Development\\mevn-stack\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

var _interopRequireWildcard2 = _interopRequireDefault3(require("C:\\Users\\TiremBareno-Sosna\\Development\\mevn-stack\\node_modules\\@babel\\runtime-corejs2/helpers/esm/interopRequireWildcard"));

var _interopRequireDefault2 = _interopRequireDefault3(require("C:\\Users\\TiremBareno-Sosna\\Development\\mevn-stack\\node_modules\\@babel\\runtime-corejs2/helpers/esm/interopRequireDefault"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = (0, _interopRequireDefault2.default)(_express);

var _tasksController = require("./tasks-controller");

var controller = (0, _interopRequireWildcard2.default)(_tasksController);

var _authService = require("../../services/auth-service");

var auth = (0, _interopRequireWildcard2.default)(_authService);

var router = _express2.default.Router();

router.post('/task', auth.requireLogin, controller.create);
router.get('/task', auth.requireLogin, controller.index);
router.get('/task/:id', auth.requireLogin, controller.show);
router.put('/task', auth.requireLogin, controller.update);
router.delete('/task', auth.requireLogin, controller.remove);
exports.default = router;