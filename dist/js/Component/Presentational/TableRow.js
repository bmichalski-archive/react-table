'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Common = require('../../Common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableRow = function TableRow(props) {
  var rowData = props.data;

  return _react2.default.createElement(
    'tr',
    { className: props.className },
    function () {
      var tds = [];

      rowData.forEach(function (cellData, cellIndex) {
        var cellProps = props.cells[cellIndex];
        var className = undefined === cellProps ? undefined : cellProps.className;

        tds.push(_react2.default.createElement(
          'td',
          {
            key: cellIndex,
            className: className,
            onClick: props.onTableBodyCellClicked.bind(undefined, rowData, cellIndex, props.rowIndex) },
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
  onTableBodyCellClicked: _react.PropTypes.func.isRequired,
  data: _react.PropTypes.array.isRequired,
  className: _react.PropTypes.string,
  cells: _react.PropTypes.object.isRequired
};

TableRow.defaultProps = {
  renderCell: function renderCell(data) {
    return data;
  }
};

exports.default = TableRow;