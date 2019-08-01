"use strict";

var _interopRequireDefault3 = require("C:\\Users\\TiremBareno-Sosna\\Development\\mevn-stack\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

var _interopRequireWildcard2 = _interopRequireDefault3(require("C:\\Users\\TiremBareno-Sosna\\Development\\mevn-stack\\node_modules\\@babel\\runtime-corejs2/helpers/esm/interopRequireWildcard"));

var _interopRequireDefault2 = _interopRequireDefault3(require("C:\\Users\\TiremBareno-Sosna\\Development\\mevn-stack\\node_modules\\@babel\\runtime-corejs2/helpers/esm/interopRequireDefault"));

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
exports.create = create;
exports.update = update;
exports.remove = remove;
exports.show = show;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.array.find");

var _userModel = require("../../model/user-model");

var _userModel2 = (0, _interopRequireDefault2.default)(_userModel);

var _taskModel = require("../../model/task-model");

var _taskModel2 = (0, _interopRequireDefault2.default)(_taskModel);

var _moment = require("moment");

var _moment2 = (0, _interopRequireDefault2.default)(_moment);

var _authService = require("../../services/auth-service");

var auth = (0, _interopRequireWildcard2.default)(_authService);

function index(req, res) {
  //Find all tasks
  _taskModel2.default.find({}, function (error, tasks) {
    if (error) {
      return res.status(500).json();
    }

    return res.status(200).json({
      tasks: tasks
    });
  }).populate('author', 'username', 'user');
}

function create(req, res) {
  var id = auth.getUserId(req);

  _userModel2.default.findOne({
    _id: id
  }, function (error, user) {
    if (error && !user) {
      return res.status(500).json();
    }

    var task = new _taskModel2.default(req.body.task);
    task.author = user._id;
    task.dueDate = (0, _moment2.default)(task.dueDate);
    task.save(function (error) {
      if (error) {
        return res.status(500).json();
      }

      return res.status(201).json();
    });
  });
}

function update(req, res) {
  var id = auth.getUserId(req);

  _userModel2.default.findOne({
    _id: id
  }, function (error, user) {
    if (error) {
      return res.status(500).json();
    }

    if (!user) {
      return res.status(404).json();
    }

    var task = new _taskModel2.default(req.body.task);
    task.author = user._id;
    task.dueDate = (0, _moment2.default)(task.dueDate);

    _taskModel2.default.findByIdAndUpdate({
      _id: task._id
    }, task, function (error) {
      if (error) {
        return res.status(500).json();
      }

      if (!task) {
        return res.status(404).json();
      }

      return res.status(204).json();
    });
  });
}

function remove(req, res) {
  var id = auth.getUserId(req);

  _taskModel2.default.findOne({
    _id: req.params.id
  }, function (error, task) {
    if (error) {
      return res.status(500).json();
    }

    if (!task) {
      return res.status(404).json();
    }

    if (task.author._id.toString() !== id) {
      return res.status(403).json({
        message: "Not allowed to delete another user's task."
      });
    }

    _taskModel2.default.deleteOne({
      _id: req.params.id
    }, function (error) {
      if (error) {
        return res.status(500).json();
      }

      return res.status(204).json();
    });
  });
}

function show(req, res) {
  //Get task by id
  _taskModel2.default.findOne({
    _id: req.params.id
  }, function (error, task) {
    if (error) {
      return res.status(500).json();
    }

    if (!task) {
      return res.status(404).json();
    }

    return res.status(200).json({
      task: task
    });
  });
}