'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionType = require('../../Action/Type/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

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
    default:
      return state;
  }
};