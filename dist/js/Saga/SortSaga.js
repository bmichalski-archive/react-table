'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxSaga = require('redux-saga');

var _ActionType = require('../Action/Type/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

var _effects = require('redux-saga/effects');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [doToggleSortSaga, updateSortContextSaga, toggleSortSaga].map(regeneratorRuntime.mark);

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

function updateSortContextSaga(stateAwareRouting) {
  return regeneratorRuntime.wrap(function updateSortContextSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.delegateYield((0, _reduxSaga.takeEvery)(_ActionType2.default.UPDATE_SORT_CONTEXT, stateAwareRouting.navigateToPage), 't0', 1);

        case 1:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}

function toggleSortSaga(getState) {
  return regeneratorRuntime.wrap(function toggleSortSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.delegateYield((0, _reduxSaga.takeEvery)(_ActionType2.default.TOGGLE_SORT, doToggleSortSaga.bind(undefined, getState)), 't0', 1);

        case 1:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this);
}

var getSortSaga = function getSortSaga(getState, stateAwareRouting) {
  return [updateSortContextSaga(stateAwareRouting), toggleSortSaga(getState)];
};

exports.default = getSortSaga;