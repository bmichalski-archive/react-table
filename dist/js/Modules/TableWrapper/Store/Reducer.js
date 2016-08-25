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
    overrideTable: false,
    overrideTableWith: undefined
  }
});

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _ActionType2.default.TABLE_WRAPPER_SET_OVERRIDE_TABLE_WITH:
      return state.mergeIn(['state'], {
        overrideTable: true,
        overrideTableWith: action.overrideTableWith
      });
    case _ActionType2.default.TABLE_WRAPPER_UNSET_OVERRIDE_TABLE_WITH:
      return state.mergeIn(['state'], {
        overrideTable: false,
        overrideTableWith: undefined
      });
    case _ActionType2.default.TABLE_WRAPPER_SET_OVERRIDE_TABLE_INNER_AND_AFTER_TABLE_LAYOUT:
      return state.mergeIn(['state'], {
        overrideTableInnerAndAfterTableLayout: true,
        overrideTableInnerAndAfterTableLayoutWith: action.overrideTableInnerAndAfterTableLayoutWith
      });
    case _ActionType2.default.TABLE_WRAPPER_UNSET_OVERRIDE_TABLE_INNER_AND_AFTER_TABLE_LAYOUT:
      return state.mergeIn(['state'], {
        overrideTableInnerAndAfterTableLayout: false,
        overrideTableInnerAndAfterTableLayoutWith: undefined
      });
    case _ActionType2.default.TABLE_WRAPPER_SET_BEFORE_TABLE_COMPONENTS:
      return state.setIn(['state', 'beforeTableComponents'], _immutable2.default.fromJS(action.beforeTableComponents));
    default:
      return state;
  }
};