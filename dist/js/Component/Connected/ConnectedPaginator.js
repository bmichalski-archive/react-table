'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _Paginator = require('../Presentational/Paginator');

var _Paginator2 = _interopRequireDefault(_Paginator);

var _PaginatorActionCreator = require('../../Action/Creator/PaginatorActionCreator');

var _PaginatorActionCreator2 = _interopRequireDefault(_PaginatorActionCreator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(function (state) {
  var paginator = state.get('paginator');

  return {
    buttons: paginator.get('buttons').toJS(),
    showButtons: paginator.get('showButtons'),
    goToPageDisabled: paginator.get('goToPageDisabled'),
    totalPages: paginator.get('totalPages'),
    page: paginator.get('page'),
    pageSize: paginator.get('pageSize'),
    qFieldValue: paginator.get('qFieldValue'),
    goToPageValue: paginator.get('goToPageValue')
  };
}, _PaginatorActionCreator2.default)(_Paginator2.default);