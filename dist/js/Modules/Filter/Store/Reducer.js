'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DefaultState = require('./DefaultState');

var _DefaultState2 = _interopRequireDefault(_DefaultState);

var _ActionType = require('../Action/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? _DefaultState2.default : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _ActionType2.default.FILTER_UPDATE_Q_FIELD_VALUE:
      return state.mergeIn(['state'], { qFieldValue: action.qFieldValue });
    case _ActionType2.default.FILTER_RESET_Q_FIELD_VALUE:
      return state.mergeIn(['state'], { qFieldValue: '' });
    default:
      return state;
  }
};