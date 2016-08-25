'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _Pagination = require('../Presentational/Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(function (state) {
  var paginatorComputedViewModel = state.get('paginator').get('computedViewModel').toJS();

  var buttons = paginatorComputedViewModel.buttons;
  var showButtons = paginatorComputedViewModel.showButtons;

  return {
    buttons: buttons,
    showButtons: showButtons
  };
})(_Pagination2.default);