'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionType = require('../Type/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onTableBodyCellClicked(rowData, cellIndex, rowIndex) {
  return {
    type: _ActionType2.default.TABLE_BODY_CELL_CLICKED,
    rowData: rowData,
    cellIndex: cellIndex,
    rowIndex: rowIndex
  };
}

exports.default = { onTableBodyCellClicked: onTableBodyCellClicked };