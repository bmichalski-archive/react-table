'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _ActionType = require('../../Action/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

var _SortIcon = require('../Presentational/SortIcon');

var _SortIcon2 = _interopRequireDefault(_SortIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(undefined, {
  handleResetSortContextClicked: function handleResetSortContextClicked(event) {
    event.preventDefault();

    return {
      type: _ActionType2.default.SORT_RESET_SORT_STATE
    };
  }
})(_SortIcon2.default);