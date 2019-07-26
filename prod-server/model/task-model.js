"use strict";

var _interopRequireDefault3 = require("C:\\Users\\TiremBareno-Sosna\\Development\\mevn-stack\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

var _interopRequireDefault2 = _interopRequireDefault3(require("C:\\Users\\TiremBareno-Sosna\\Development\\mevn-stack\\node_modules\\@babel\\runtime-corejs2/helpers/esm/interopRequireDefault"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = (0, _interopRequireDefault2.default)(_mongoose);

var taskSchema = new _mongoose2.default.Schema({
  title: String,
  body: String,
  dueDate: {
    type: Date,
    default: Date.now
  },
  completed: {
    type: Boolean,
    default: false
  },
  author: {
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'user'
  }
});
taskSchema.set('timestamps', true);
exports.default = _mongoose2.default.model('task', taskSchema);