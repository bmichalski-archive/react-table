'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionType = require('../Type/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resetSortContext() {
  return {
    type: _ActionType2.default.UPDATE_SORT_CONTEXT,
    sortContext: undefined
  };
}

function toggleSort(name) {
  return {
    type: _ActionType2.default.TOGGLE_SORT,
    name: name
  };
}

exports.default = {
  toggleSort: toggleSort,
  resetSortContext: resetSortContext
};