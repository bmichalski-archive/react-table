'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _DefaultState = require('./DefaultState');

var _DefaultState2 = _interopRequireDefault(_DefaultState);

var _PaginatorReducer = require('ReducerBak/PaginatorReducer');

var _PaginatorReducer2 = _interopRequireDefault(_PaginatorReducer);

var _TableReducer = require('ReducerBak/TableReducer');

var _TableReducer2 = _interopRequireDefault(_TableReducer);

var _RootReducer = require('ReducerBak/RootReducer');

var _RootReducer2 = _interopRequireDefault(_RootReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var defaultState = (0, _DefaultState2.default)();

  var reducer = function reducer() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
    var action = arguments[1];

    return (0, _RootReducer2.default)(state, action).merge({
      table: (0, _TableReducer2.default)(state.get('table'), action),
      paginator: (0, _PaginatorReducer2.default)(state.get('paginator'), action)
    });
  };

  var store = (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default));

  return store;
};