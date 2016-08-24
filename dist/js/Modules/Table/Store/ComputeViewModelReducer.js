'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionType = require('../Action/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (state, action) {
  switch (action.type) {
    case _ActionType2.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_PROPS:
      return state.setIn(['props'], _immutable2.default.fromJS(action.props));
    case _ActionType2.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_HEAD:
      return state.setIn(['head'], _immutable2.default.fromJS(action.head));
    case _ActionType2.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_BODYS:
      return state.setIn(['bodys'], _immutable2.default.fromJS(action.bodys));
    default:
      return state;
  }
};