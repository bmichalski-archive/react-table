'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionType = require('../../Action/Type/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (state, action) {
  switch (action.type) {
    case _ActionType2.default.UPDATE_SORT_CONTEXT:
      return state.merge({
        sortContext: action.sortContext
      });
    case _ActionType2.default.UPDATE_DATA:
      return state.merge({
        data: action.data,
        total: action.total,
        filteredTotal: action.filteredTotal
      });
    case _ActionType2.default.UPDATE_HEAD_CELL:
      return state.mergeIn(['head', 'rows', action.rowIndex, action.cellIndex], action.cell);
    case _ActionType2.default.UPDATE_HEAD_ROWS:
      return state.setIn(['head', 'rows'], _immutable2.default.fromJS(action.rows));
    case _ActionType2.default.UPDATE_BODY_ROWS:
      return state.setIn(['body', 'rows'], action.rows);
    default:
      return state;
  }
};