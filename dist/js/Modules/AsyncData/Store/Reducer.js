'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _ActionType = require('../Action/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = _immutable2.default.fromJS({
  state: {
    options: {}
  }
});

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _ActionType2.default.ASYNC_UPDATE_OPTIONS:
      return state.mergeIn(['state', 'options'], action.options);
    default:
      return state;
  }
};