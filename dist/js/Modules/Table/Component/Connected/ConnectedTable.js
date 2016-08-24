'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _ContainerTable = require('../Container/ContainerTable');

var _ContainerTable2 = _interopRequireDefault(_ContainerTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(function (state) {
  var viewModel = state.get('table').get('computedViewModel');

  return {
    props: viewModel.get('props').toJS(),
    head: viewModel.get('head').toJS(),
    bodys: viewModel.get('bodys').toJS()
  };
})(_ContainerTable2.default);