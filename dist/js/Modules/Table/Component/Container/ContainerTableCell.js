'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableHeading = exports.TableData = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableData = require('../Presentational/TableData');

var _TableData2 = _interopRequireDefault(_TableData);

var _TableHeading = require('../Presentational/TableHeading');

var _TableHeading2 = _interopRequireDefault(_TableHeading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeContainerTableCell = function makeContainerTableCell(ThOrTd) {
  return function (props) {
    return _react2.default.createElement(
      ThOrTd,
      { props: props.props },
      props.content
    );
  };
};

var TableData = makeContainerTableCell(_TableData2.default);
var TableHeading = makeContainerTableCell(_TableHeading2.default);

exports.TableData = TableData;
exports.TableHeading = TableHeading;