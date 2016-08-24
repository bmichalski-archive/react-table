'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxImmutable = require('redux-immutable');

var _DefaultState = require('./DefaultState');

var _DefaultState2 = _interopRequireDefault(_DefaultState);

var _ComputeViewModelReducer = require('./ComputeViewModelReducer');

var _ComputeViewModelReducer2 = _interopRequireDefault(_ComputeViewModelReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? _DefaultState2.default : arguments[0];
  var action = arguments[1];

  return (0, _reduxImmutable.combineReducers)({
    computedViewModel: _ComputeViewModelReducer2.default,
    state: function state(s) {
      return s;
    }
  })(state, action);
};