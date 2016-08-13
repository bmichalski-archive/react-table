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

var _Store = require('../Store/Store');

var _Store2 = _interopRequireDefault(_Store);

var _MainSaga = require('../Saga/MainSaga');

var _MainSaga2 = _interopRequireDefault(_MainSaga);

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_bluebird2.default.config({
  warnings: true,
  longStackTraces: true,
  cancellation: true
});

exports.default = function (opts, cb) {
  var _marked = [rootSaga].map(regeneratorRuntime.mark);

  var browserHistory = (0, _reactRouter.useRouterHistory)(_history.createHistory)({
    parseQueryString: _qs2.default.parse,
    stringifyQuery: _qs2.default.stringify
  });

  var sagaMiddleware = (0, _reduxSaga2.default)();

  var store = (0, _Store2.default)(opts, sagaMiddleware);

  var sagas = [(0, _MainSaga2.default)(store.getState, browserHistory)];

  if (undefined !== opts.getSagas) {
    sagas = sagas.concat(opts.getSagas(store.getState));
  }

  function rootSaga() {
    return regeneratorRuntime.wrap(function rootSaga$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return sagas;

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _marked[0], this);
  }

  sagaMiddleware.run(rootSaga);

  return cb(browserHistory, store);
};