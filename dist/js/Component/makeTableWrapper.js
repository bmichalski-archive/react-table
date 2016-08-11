'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouter = require('react-router');

var _history = require('history');

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_bluebird2.default.config({
  warnings: true,
  longStackTraces: true,
  cancellation: true
});

exports.default = function (cb) {
  var browserHistory = (0, _reactRouter.useRouterHistory)(_history.createHistory)({
    parseQueryString: _qs2.default.parse,
    stringifyQuery: _qs2.default.stringify
  });

  cb(browserHistory, _reactDom.render);
};