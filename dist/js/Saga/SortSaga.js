'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxSaga = require('redux-saga');

var _ActionType = require('../Action/Type/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

var _effects = require('redux-saga/effects');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [doToggleSortSaga, updateSortContextSaga, toggleSortSaga].map(regeneratorRuntime.mark);

var getIconClassName = function getIconClassName(sortContext, name) {
  var className = 'glyphicon glyphicon-';

  if (undefined !== sortContext && sortContext.sort === name) {
    if (sortContext.order === 'asc') {
      className += 'arrow-up';
    } else {
      className += 'arrow-down';
    }
  } else {
    className += 'sort';
  }

  return className;
};

var isCurrentSort = function isCurrentSort(sortContext, name) {
  return undefined !== sortContext && sortContext.sort === name;
};

function doToggleSortSaga(getState, action) {
  var state, defaultOrder, sortContext, newOrder;
  return regeneratorRuntime.wrap(function doToggleSortSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          state = getState();

          // const defaultOrder = undefined === defaultOrder ? 'desc' : defaultOrder

          defaultOrder = 'desc';
          sortContext = state.get('table').get('sortContext');
          newOrder = void 0;


          if (undefined !== sortContext && action.name === sortContext.get('sort')) {
            if (sortContext.get('order') === 'asc') {
              newOrder = 'desc';
            } else {
              newOrder = 'asc';
            }
          } else {
            newOrder = defaultOrder;
          }

          _context.next = 7;
          return (0, _effects.put)({
            type: _ActionType2.default.UPDATE_SORT_CONTEXT,
            sortContext: {
              order: newOrder,
              sort: action.name
            }
          });

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

function updateSortContextSaga(getState, stateAwareRouting) {
  return regeneratorRuntime.wrap(function updateSortContextSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return [(0, _reduxSaga.takeEvery)(_ActionType2.default.UPDATE_SORT_CONTEXT, stateAwareRouting.navigateToPage), (0, _reduxSaga.takeEvery)(_ActionType2.default.UPDATE_SORT_CONTEXT, regeneratorRuntime.mark(function _callee(action) {
            var sortContext, rows;
            return regeneratorRuntime.wrap(function _callee$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    sortContext = action.sortContext;
                    rows = getState().get('table').get('head').get('rows').toJS();


                    _lodash2.default.forEach(rows, function (row) {
                      _lodash2.default.forEach(row, function (cell) {
                        cell.isCurrentSort = isCurrentSort(sortContext, cell.name);
                        cell.iconClassName = getIconClassName(sortContext, cell.name);
                      });
                    });

                    _context2.next = 5;
                    return (0, _effects.put)({
                      type: _ActionType2.default.UPDATE_HEAD_ROWS,
                      rows: rows
                    });

                  case 5:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee, this);
          }))];

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[1], this);
}

function toggleSortSaga(getState) {
  return regeneratorRuntime.wrap(function toggleSortSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.delegateYield((0, _reduxSaga.takeEvery)(_ActionType2.default.TOGGLE_SORT, doToggleSortSaga.bind(undefined, getState)), 't0', 1);

        case 1:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[2], this);
}

var getSortSaga = function getSortSaga(getState, stateAwareRouting) {
  return [updateSortContextSaga(getState, stateAwareRouting), toggleSortSaga(getState)];
};

exports.default = getSortSaga;