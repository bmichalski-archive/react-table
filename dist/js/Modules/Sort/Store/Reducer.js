'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DefaultState = require('./DefaultState');

var _DefaultState2 = _interopRequireDefault(_DefaultState);

var _ActionType = require('../Action/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? _DefaultState2.default : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _ActionType2.default.SORT_UPDATE_COMPUTED_VIEW_MODEL_CELLS:
      return state.setIn(['computedViewModel', 'cells'], _immutable2.default.fromJS(action.cells));
    case _ActionType2.default.SORT_UPDATE_SORT_STATE:
      return state.setIn(['state'], _immutable2.default.fromJS(action.state));
    default:
      return state;
  }
};