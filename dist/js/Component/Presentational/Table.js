'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableRow = require('./TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = function Table(props) {
  if (0 === props.data.length) {
    return _react2.default.createElement(
      'div',
      null,
      props.emptyTableMessage
    );
  }

  var rows = [];

  props.data.forEach(function (data, rowIndex) {
    var rowProps = props.body.rows[rowIndex];
    var className = undefined === rowProps ? undefined : rowProps.className;
    var cells = undefined === rowProps || undefined === rowProps.cells ? {} : rowProps.cells;

    rows.push(_react2.default.createElement(_TableRow2.default, {
      key: rowIndex,
      className: className,
      data: data,
      rowIndex: rowIndex,
      cells: cells,
      onTableBodyCellClicked: props.onTableBodyCellClicked,
      renderCell: props.renderCell,
      isCellClickable: props.isCellClickable }));
  });

  return _react2.default.createElement(
    'table',
    { className: props.tableClassName },
    props.children,
    _react2.default.createElement(
      'tbody',
      null,
      rows
    )
  );
};

Table.propTypes = {
  data: _react.PropTypes.array.isRequired,
  body: _react.PropTypes.shape({
    rows: _react.PropTypes.object.isRequired
  }).isRequired,
  emptyTableMessage: _react.PropTypes.string.isRequired,
  tableClassName: _react.PropTypes.string.isRequired,
  renderCell: _react.PropTypes.func,
  onCellClicked: _react.PropTypes.func
};

Table.defaultProps = {
  emptyTableMessage: 'No data to display with given parameters.',
  tableClassName: 'table table-bordered'
};

exports.default = Table;