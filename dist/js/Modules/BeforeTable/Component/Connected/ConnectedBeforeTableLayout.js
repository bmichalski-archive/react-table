'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _BeforeTableLayout = require('../Presentational/BeforeTableLayout');

var _BeforeTableLayout2 = _interopRequireDefault(_BeforeTableLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(function (state) {
  var rows = state.get('beforeTable').get('state').get('rows').toJS();

  return {
    rows: rows
  };
})(_BeforeTableLayout2.default);