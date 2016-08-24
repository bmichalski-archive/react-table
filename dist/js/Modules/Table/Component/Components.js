'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Table = require('./Presentational/Table');

var _Table2 = _interopRequireDefault(_Table);

var _TableBody = require('./Presentational/TableBody');

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableRow = require('./Presentational/TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

var _ConnectedTable = require('./Connected/ConnectedTable');

var _ConnectedTable2 = _interopRequireDefault(_ConnectedTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Presentational: {
    Table: _Table2.default,
    TableBody: _TableBody2.default,
    TableRow: _TableRow2.default
  },
  Connected: {
    Table: _ConnectedTable2.default
  },
  Table: _ConnectedTable2.default
};