"use strict";

var _interopRequireDefault = require("C:\\Users\\TiremBareno-Sosna\\Development\\mevn-stack\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _routes = require("./routes");

// const express = require('express')
var app = (0, _express.default)();
var port = 3000;
(0, _routes.registerRoutes)(app);
app.get('/', function (req, res) {
  return res.send('Hello World!');
});
app.listen(port, function () {
  return console.log("MEVN app listening on port ".concat(port, "!"));
});