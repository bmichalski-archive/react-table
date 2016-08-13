'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FullTable = require('../Presentational/FullTable');

var _FullTable2 = _interopRequireDefault(_FullTable);

var _ActionCreator = require('../../Action/Creator/ActionCreator');

var _ActionCreator2 = _interopRequireDefault(_ActionCreator);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    loading: state.get('loading'),
    initialized: state.get('initialized'),
    errorLoadingData: state.get('errorLoadingData'),
    errorLoadingDataMessage: state.get('errorLoadingDataMessage'),
    loadingMessage: state.get('loadingMessage'),
    table: state.get('table').toJS(),
    renderCell: state.get('opts').get('table').get('renderCell')
  };
}, _ActionCreator2.default)(_FullTable2.default);