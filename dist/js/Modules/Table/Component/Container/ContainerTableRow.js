'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableRow = require('../Presentational/TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

var _ContainerTableCell = require('../Container/ContainerTableCell');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var getCellType = function getCellType(cell) {
    return cell.type === 'HEADING' ? _ContainerTableCell.TableHeading : _ContainerTableCell.TableData;
  };

  var renderCells = function renderCells() {
    return props.cells.map(function (cell, i) {
      var CellType = getCellType(cell);

      return _react2.default.createElement(CellType, { key: i, content: cell.content, props: cell.props });
    });
  };

  return _react2.default.createElement(
    _TableRow2.default,
    { props: props.props },
    renderCells()
  );
};