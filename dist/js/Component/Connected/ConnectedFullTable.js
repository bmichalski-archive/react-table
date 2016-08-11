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

var _ConnectedTableHeadTh = require('./ConnectedTableHeadTh');

var _ConnectedTableHeadTh2 = _interopRequireDefault(_ConnectedTableHeadTh);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getChildren = function getChildren(props) {
  var reactTableHead = _react2.default.Children.only(props.children);
  var reactTableHeadTr = _react2.default.Children.only(reactTableHead.props.children);

  //TODO Check children classes

  return _react2.default.cloneElement(reactTableHead, {
    children: _react2.default.cloneElement(reactTableHeadTr, {
      children: _react2.default.Children.map(reactTableHeadTr.props.children, function (reactTableHeadTh) {
        return _react2.default.createElement(_ConnectedTableHeadTh2.default, reactTableHeadTh.props);
      })
    })
  });
};

exports.default = function (props) {
  return (0, _reactRedux.connect)(function (state) {
    return {
      loading: state.get('loading'),
      initialized: state.get('initialized'),
      errorLoadingData: state.get('errorLoadingData'),
      errorLoadingDataMessage: state.get('errorLoadingDataMessage'),
      loadingMessage: state.get('loadingMessage'),
      table: state.get('table').toJS(),
      children: getChildren(props)
    };
  }, _ActionCreator2.default)(_FullTable2.default);
};