'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _TableWrapper = require('../Presentational/TableWrapper');

var _TableWrapper2 = _interopRequireDefault(_TableWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(function (state) {
  var common = state.get('common');
  var tableWrapperState = state.get('tableWrapper').get('state');

  return {
    Table: common.get('components').get('table').toJS().Table,
    BeforeTableLayout: common.get('components').get('beforeTable').toJS().BeforeTableLayout,
    AfterTableLayout: common.get('components').get('afterTable').toJS().AfterTableLayout,
    overrideTable: tableWrapperState.get('overrideTable'),
    overrideTableWith: tableWrapperState.get('overrideTableWith'),
    overrideTableInnerAndAfterTableLayout: tableWrapperState.get('overrideTableInnerAndAfterTableLayout'),
    overrideTableInnerAndAfterTableLayoutWith: tableWrapperState.get('overrideTableInnerAndAfterTableLayoutWith')
  };
})(_TableWrapper2.default);