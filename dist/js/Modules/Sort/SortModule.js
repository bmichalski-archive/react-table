'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Reducer = require('./Store/Reducer');

var _Reducer2 = _interopRequireDefault(_Reducer);

var _ActionType = require('./Action/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

var _ActionType3 = require('../Table/Action/ActionType');

var _ActionType4 = _interopRequireDefault(_ActionType3);

var _ConnectedSortIcon = require('./Component/Connected/ConnectedSortIcon');

var _ConnectedSortIcon2 = _interopRequireDefault(_ConnectedSortIcon);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SortModule = function SortModule(opts) {
  function getSortableColumns() {
    return opts.sortableColumns;
  }

  return {
    reducer: _Reducer2.default,
    listeners: function listeners() {
      return _defineProperty({}, _ActionType2.default.SORT_RESET_SORT_STATE, function (dispatch) {});
    },
    filters: function filters() {
      var sortableColumns = getSortableColumns();

      return _defineProperty({}, _ActionType4.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_HEAD, function (action, store) {
        if (action.head.rows.length > 1) {
          throw new Error('Unsupported multi-rows header.');
        }

        action.head.rows[0].cells.forEach(function (cell) {
          if (sortableColumns.indexOf(cell.name) !== -1) {
            var className = void 0;

            if (undefined !== cell.props && undefined !== cell.props.className) {
              className = cell.props.className + ' sortable';
            } else {
              className = 'sortable';
            }

            cell.props = {
              className: className
            };

            cell.content = [cell.content, _react2.default.createElement(_ConnectedSortIcon2.default, {
              key: 'sortIcon',
              store: store,
              iconClassName: "glyphicon glyphicon-arrow-up",
              showRemoveIcon: true })];
          }
        });

        return action;
      });
    }
  };
};

SortModule.moduleName = 'sort';

exports.default = SortModule;