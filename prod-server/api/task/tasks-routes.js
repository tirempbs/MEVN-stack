"use strict";

var _interopRequireDefault = require("C:\\Users\\TiremBareno-Sosna\\Development\\mevn-stack\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var router = _express.default.Router();

router.post('/task', function (req, res) {
  res.send('post.task - create a task');
});
router.get('/task', function (req, res) {
  res.send('get.task - get all tasks');
});
router.get('/task/:id', function (req, res) {
  res.send('get.task/:id - get a task by id');
});
router.put('/task', function (req, res) {
  res.send('put.task - update a task');
});
router.delete('/task', function (req, res) {
  res.send('delete.task - delete a task');
});
var _default = router;
exports.default = _default;