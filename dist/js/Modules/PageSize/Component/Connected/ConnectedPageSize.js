'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _ActionType = require('../../Action/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

var _PageSize = require('../Presentational/PageSize');

var _PageSize2 = _interopRequireDefault(_PageSize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(function (state) {
  var pageSizeState = state.get('pageSize').get('state').toJS();

  return {
    pageSize: pageSizeState.pageSize
  };
}, {
  handlePageSizeChange: function handlePageSizeChange(event) {
    return {
      type: _ActionType2.default.PAGE_SIZE_UPDATE_PAGE_SIZE,
      pageSize: parseInt(event.target.value, 10)
    };
  }
})(_PageSize2.default);