'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableHeadTh = function TableHeadTh(props) {
  var isCurrentSort = function isCurrentSort() {
    return undefined !== props.sortContext && props.sortContext.sort === props.name;
  };

  var getIcon = function getIcon() {
    var sortContext = props.sortContext;
    var className = 'glyphicon glyphicon-';

    if (undefined !== sortContext && sortContext.sort === props.name) {
      if (sortContext.order === 'asc') {
        className += 'arrow-up';
      } else {
        className += 'arrow-down';
      }
    } else {
      className += 'sort';
    }

    return _react2.default.createElement('i', { className: className });
  };

  var getClassName = function getClassName() {
    return props.sortable ? 'sortable' : '';
  };

  var handleOnClick = function handleOnClick() {
    var sortableProp = props.sortable;

    if (sortableProp) {
      props.toggleSort(props.name);
    }
  };

  var handleResetSortContextClicked = function handleResetSortContextClicked(event) {
    event.stopPropagation();

    props.resetSortContext();
  };

  return _react2.default.createElement(
    'th',
    {
      className: getClassName(),
      onClick: handleOnClick },
    props.children,
    function () {
      if (props.sortable) {
        return _react2.default.createElement(
          'div',
          { className: 'pull-right' },
          function () {
            if (isCurrentSort()) {
              return _react2.default.createElement('i', {
                className: 'glyphicon glyphicon-remove',
                onClick: handleResetSortContextClicked });
            }
          }(),
          ' ',
          getIcon()
        );
      }
    }()
  );
};

TableHeadTh.propTypes = {
  sortable: _react.PropTypes.any.isRequired,
  name: _react.PropTypes.string,
  toggleSort: _react.PropTypes.func, //.isRequired
  resetSortContext: _react.PropTypes.func,
  sortContext: _react.PropTypes.shape({
    sort: _react.PropTypes.string,
    order: _react.PropTypes.string
  }) //.isRequired
};

TableHeadTh.defaultProps = {
  sortable: false
};

exports.default = TableHeadTh;