'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _AfterTableLayout = require('../Presentational/AfterTableLayout');

var _AfterTableLayout2 = _interopRequireDefault(_AfterTableLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(function (state) {
  var slot = state.get('afterTable').get('state').get('slot');

  return {
    slot: slot
  };
})(_AfterTableLayout2.default);