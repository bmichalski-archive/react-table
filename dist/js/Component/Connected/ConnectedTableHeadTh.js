'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TableHeadTh = require('../Presentational/TableHeadTh');

var _TableHeadTh2 = _interopRequireDefault(_TableHeadTh);

var _TableHeadThActionCreator = require('../../Action/Creator/TableHeadThActionCreator');

var _TableHeadThActionCreator2 = _interopRequireDefault(_TableHeadThActionCreator);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(function (state, props) {
  var rows = state.get('table').get('head').get('rows').toJS();

  var className = '';
  var isCurrentSort = false;
  var iconClassName = '';

  if (undefined !== rows[props.rowIndex] && undefined !== rows[props.rowIndex][props.cellIndex]) {
    className = rows[props.rowIndex][props.cellIndex].className;
    isCurrentSort = rows[props.rowIndex][props.cellIndex].isCurrentSort;
    iconClassName = rows[props.rowIndex][props.cellIndex].iconClassName;
  }

  return {
    className: className,
    isCurrentSort: isCurrentSort,
    iconClassName: iconClassName
  };
}, _TableHeadThActionCreator2.default)(_TableHeadTh2.default);