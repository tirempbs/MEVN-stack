"use strict";

var _interopRequireDefault3 = require("C:\\Users\\TiremBareno-Sosna\\Development\\mevn-stack\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

var _interopRequireDefault2 = _interopRequireDefault3(require("C:\\Users\\TiremBareno-Sosna\\Development\\mevn-stack\\node_modules\\@babel\\runtime-corejs2/helpers/esm/interopRequireDefault"));

var _express = require("express");

var _express2 = (0, _interopRequireDefault2.default)(_express);

var _routes = require("./routes");

var _env = require("./config/env");

var _db = require("./config/db");

var app = (0, _express2.default)();
var port = 3000;
(0, _env.setEnvironment)(app);
(0, _db.connectToDB)();
(0, _routes.registerRoutes)(app);
app.get('/', function (req, res) {
  if (process.env.NODE_ENV !== 'production') {
    return res.send('Running server in development mode.');
  } else {
    return res.sendFile('index.html', {
      root: __dirname + '/../dist'
    });
  }
});
app.listen(port, function () {
  console.log("MEVN app listening on port ".concat(port, " in ") + process.env.NODE_ENV + ' mode !');
});