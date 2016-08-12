'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionType = require('../Action/Type/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

var _reduxSaga = require('redux-saga');

var _effects = require('redux-saga/effects');

var _Routing = require('../Routing/Routing');

var _Routing2 = _interopRequireDefault(_Routing);

var _StateAwareRouting = require('../Routing/StateAwareRouting');

var _StateAwareRouting2 = _interopRequireDefault(_StateAwareRouting);

var _SortSaga = require('./SortSaga');

var _SortSaga2 = _interopRequireDefault(_SortSaga);

var _PaginatorSaga = require('./PaginatorSaga');

var _PaginatorSaga2 = _interopRequireDefault(_PaginatorSaga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [updateDataAsync, initLocation, initLocationSaga, navigateToPageSaga].map(regeneratorRuntime.mark);

var startLoading = function startLoading() {
  return {
    type: _ActionType2.default.LOADING,
    loading: true
  };
};

var stopLoading = function stopLoading() {
  return {
    type: _ActionType2.default.LOADING,
    loading: false
  };
};

var initialize = function initialize() {
  return {
    type: _ActionType2.default.INITIALIZE
  };
};

var errorLoadingData = function errorLoadingData() {
  return {
    type: _ActionType2.default.ERROR_LOADING_DATA
  };
};

var updateData = function updateData(data) {
  return {
    type: _ActionType2.default.UPDATE_DATA,
    data: data.result,
    total: data.info.total,
    filteredTotal: data.info.filteredTotal
  };
};

function updateDataAsync(getState) {
  var _this = this;

  var state, _state$get$toJS, page, pageSize, q, sortContext;

  return regeneratorRuntime.wrap(function updateDataAsync$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.put)(startLoading());

        case 2:
          state = getState();
          _state$get$toJS = state.get('paginator').toJS();
          page = _state$get$toJS.page;
          pageSize = _state$get$toJS.pageSize;
          q = _state$get$toJS.q;
          sortContext = state.get('table').get('sortContext');
          _context2.prev = 8;
          return _context2.delegateYield(regeneratorRuntime.mark(function _callee() {
            var doGetData, opts, newPromise, data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    doGetData = state.get('table').get('getData');
                    opts = {
                      page: page,
                      pageSize: pageSize,
                      q: q,
                      sort: undefined === sortContext ? sortContext : sortContext.toJS()
                    };
                    newPromise = doGetData(opts);


                    newPromise[_reduxSaga.CANCEL] = function () {
                      newPromise.cancel();
                    };

                    _context.next = 6;
                    return (0, _effects.call)(function () {
                      return newPromise;
                    });

                  case 6:
                    data = _context.sent;
                    _context.next = 9;
                    return [(0, _effects.put)(initialize()), (0, _effects.put)(updateData(data))];

                  case 9:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, _this);
          })(), 't0', 10);

        case 10:
          _context2.next = 17;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t1 = _context2['catch'](8);
          _context2.next = 16;
          return (0, _effects.put)(errorLoadingData());

        case 16:
          throw _context2.t1;

        case 17:
          _context2.prev = 17;
          _context2.next = 20;
          return (0, _effects.put)(stopLoading());

        case 20:
          return _context2.finish(17);

        case 21:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[0], this, [[8, 12, 17, 21]]);
}

function initLocation(action) {
  var location, query, page, pageSize, q;
  return regeneratorRuntime.wrap(function initLocation$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          location = action.location;
          query = location.query;
          page = void 0, pageSize = void 0, q = void 0;


          page = query.page === undefined ? 1 : parseInt(query.page, 10);
          pageSize = query.pageSize === undefined ? 10 : parseInt(query.pageSize, 10);

          if (undefined === query.q || '' === query.q) {
            q = '';
          } else {
            q = query.q;
          }

          _context3.next = 8;
          return [(0, _effects.put)({ type: _ActionType2.default.UPDATE_Q, q: q }), (0, _effects.put)({ type: _ActionType2.default.UPDATE_PAGE, page: page }), (0, _effects.put)({ type: _ActionType2.default.UPDATE_PAGE_SIZE, pageSize: pageSize }), (0, _effects.put)({ type: _ActionType2.default.INIT_Q_FIELD_VALUE, qFieldValue: q }), (0, _effects.put)({ type: _ActionType2.default.UPDATE_SORT_CONTEXT, sortContext: query.sort })];

        case 8:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[1], this);
}

function initLocationSaga() {
  return regeneratorRuntime.wrap(function initLocationSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.delegateYield((0, _reduxSaga.takeEvery)(_ActionType2.default.INIT_LOCATION, initLocation), 't0', 1);

        case 1:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[2], this);
}

function navigateToPageSaga(getState) {
  return regeneratorRuntime.wrap(function navigateToPageSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.delegateYield((0, _reduxSaga.takeLatest)(_ActionType2.default.NAVIGATE_TO_PAGE, updateDataAsync.bind(undefined, getState)), 't0', 1);

        case 1:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked[3], this);
}

var getMainSaga = function getMainSaga(getState, history) {
  var stateAwareRouting = (0, _StateAwareRouting2.default)(getState, (0, _Routing2.default)(history));

  return [initLocationSaga(getState), navigateToPageSaga(getState), (0, _SortSaga2.default)(getState, stateAwareRouting), (0, _PaginatorSaga2.default)(getState, stateAwareRouting)];
};

exports.default = getMainSaga;