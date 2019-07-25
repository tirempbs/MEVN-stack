"use strict";

var _interopRequireDefault3 = require("C:\\Users\\TiremBareno-Sosna\\Development\\mevn-stack\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

var _interopRequireDefault2 = _interopRequireDefault3(require("C:\\Users\\TiremBareno-Sosna\\Development\\mevn-stack\\node_modules\\@babel\\runtime-corejs2/helpers/esm/interopRequireDefault"));

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StringUtil = undefined;

var _classCallCheck2 = require("C:\\Users\\TiremBareno-Sosna\\Development\\mevn-stack\\node_modules\\@babel\\runtime-corejs2/helpers/esm/classCallCheck");

var _classCallCheck3 = (0, _interopRequireDefault2.default)(_classCallCheck2);

var _createClass2 = require("C:\\Users\\TiremBareno-Sosna\\Development\\mevn-stack\\node_modules\\@babel\\runtime-corejs2/helpers/esm/createClass");

var _createClass3 = (0, _interopRequireDefault2.default)(_createClass2);

var StringUtil =
/*#__PURE__*/
exports.StringUtil = function () {
  function StringUtil() {
    (0, _classCallCheck3.default)(this, StringUtil);
  }

  (0, _createClass3.default)(StringUtil, null, [{
    key: "isEmpty",
    value: function isEmpty(value) {
      return !value || !value.trim();
    }
  }, {
    key: "capitalize",
    value: function capitalize(word) {
      return word.charAt(0).toUpperCase();
    }
  }]);
  return StringUtil;
}();