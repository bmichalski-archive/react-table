'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Table = require('./Table');

var _Table2 = _interopRequireDefault(_Table);

var _ConnectedPaginator = require('../Connected/ConnectedPaginator');

var _ConnectedPaginator2 = _interopRequireDefault(_ConnectedPaginator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FullTable = function FullTable(props) {
  if (props.errorLoadingData) {
    return _react2.default.createElement(
      'div',
      null,
      props.errorLoadingDataMessage
    );
  }

  if (!props.initialized && props.loading) {
    return _react2.default.createElement(
      'div',
      null,
      props.loadingMessage
    );
  }

  return _react2.default.createElement(
    'div',
    { className: 'table-wrapper' },
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-md-12' },
        _react2.default.createElement(_ConnectedPaginator2.default, {
          paginator: props.paginator,
          pageSizeSelector: true,
          goTo: true,
          filtering: true })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-md-12' },
        function () {
          if (props.loading) {
            return _react2.default.createElement(
              'div',
              null,
              props.loadingMessage
            );
          }

          return _react2.default.createElement(
            _Table2.default,
            {
              data: props.table.data,
              body: props.table.body,
              renderCell: props.renderCell,
              onTableBodyCellClicked: props.onTableBodyCellClicked,
              emptyTableMessage: props.table.emptyTableMessage,
              tableClassName: props.table.tableClassName,
              isCellClickable: props.table.isCellClickable },
            props.children
          );
        }()
      )
    ),
    function () {
      if (!props.loading) {
        return _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement(_ConnectedPaginator2.default, {
              paginator: props.paginator })
          )
        );
      }
    }()
  );
};

FullTable.propTypes = {
  table: _react.PropTypes.object.isRequired,
  renderCell: _react.PropTypes.func,
  onTableBodyCellClicked: _react.PropTypes.func,
  initialized: _react.PropTypes.bool.isRequired,
  loading: _react.PropTypes.bool.isRequired,
  errorLoadingData: _react.PropTypes.bool.isRequired,
  errorLoadingDataMessage: _react.PropTypes.string.isRequired,
  loadingMessage: _react.PropTypes.string.isRequired
};

exports.default = FullTable;