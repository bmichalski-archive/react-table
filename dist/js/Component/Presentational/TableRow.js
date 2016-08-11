'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Common = require('../../Common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableRow = function TableRow(props) {
  var getClassName = function getClassName(rowData, cellIndex, rowIndex) {
    return props.isCellClickable(rowData, cellIndex, rowIndex) ? 'clickable' : '';
  };

  var rowData = props.data;

  return _react2.default.createElement(
    'tr',
    null,
    function () {
      var tds = [];

      rowData.forEach(function (cellData, cellIndex) {
        tds.push(_react2.default.createElement(
          'td',
          {
            key: cellIndex,
            className: getClassName(rowData, cellIndex, props.rowIndex),
            onClick: props.onCellClicked.bind(undefined, rowData, cellIndex, props.rowIndex) },
          props.renderCell(cellData, cellIndex, props.rowIndex)
        ));
      });

      return tds;
    }()
  );
};

TableRow.propTypes = {
  rowIndex: function rowIndex(props, propName) {
    var prop = props[propName];

    if (!(0, _Common.isInteger)(prop)) {
      throw new Error('Invalid rowIndex, expecting number, got ' + prop);
    }
  },
  renderCell: _react.PropTypes.func.isRequired,
  onCellClicked: _react.PropTypes.func.isRequired,
  data: _react.PropTypes.array.isRequired
};

TableRow.defaultProps = {
  renderCell: function renderCell(data) {
    return data;
  },
  onCellClicked: function onCellClicked() {
    return;
  },
  isCellClickable: function isCellClickable() {
    return true;
  }
};

exports.default = TableRow;