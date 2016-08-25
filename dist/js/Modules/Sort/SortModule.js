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

var _ActionType5 = require('../Routing/Action/ActionType');

var _ActionType6 = _interopRequireDefault(_ActionType5);

var _ConnectedSortIcon = require('./Component/Connected/ConnectedSortIcon');

var _ConnectedSortIcon2 = _interopRequireDefault(_ConnectedSortIcon);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _DefaultState = require('./Store/DefaultState');

var _DefaultState2 = _interopRequireDefault(_DefaultState);

var _ActionType7 = require('../AsyncData/Action/ActionType');

var _ActionType8 = _interopRequireDefault(_ActionType7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SortModule = function SortModule(opts) {
  function getSortableColumns() {
    return opts.sortableColumns;
  }

  return {
    defaultState: _DefaultState2.default,
    reducer: _Reducer2.default,
    listeners: function listeners() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, _ActionType2.default.SORT_TOGGLE_SORT, function (action, dispatch, getState) {
        var state = getState();

        var previousSortState = state.get('sort').get('state').toJS();

        var order = undefined;

        var defaultOrder = 'asc';

        if (previousSortState.sort !== action.sort) {
          order = defaultOrder;
        } else if ('asc' === previousSortState.order) {
          order = 'desc';
        } else if ('desc' === previousSortState.order) {
          order = 'asc';
        } else {
          throw new Error('Unsupported sortState.order "' + previousSortState.order + '"');
        }

        dispatch({
          type: _ActionType2.default.SORT_UPDATE_SORT_STATE,
          state: {
            sort: action.sort,
            order: order
          }
        });
      }), _defineProperty(_ref, _ActionType2.default.SORT_RESET_SORT_STATE, function (action, dispatch) {
        dispatch({
          type: _ActionType2.default.SORT_UPDATE_SORT_STATE,
          state: {
            sort: undefined,
            order: undefined
          }
        });
      }), _defineProperty(_ref, _ActionType2.default.SORT_UPDATE_SORT_STATE, function (action, dispatch, getState) {
        var state = getState();

        var sortState = action.state;

        var tableComputedViewModel = state.get('table').get('computedViewModel').toJS();

        function getIconClassName(cell) {
          var base = 'sort glyphicon';

          if (cell.name === sortState.sort) {
            if ('asc' === sortState.order) {
              return base + ' glyphicon-arrow-up';
            } else if ('desc' === sortState.order) {
              return base + ' glyphicon-arrow-down';
            } else {
              throw new Error('Unexpected action.order "' + sortState.order + '".');
            }
          }

          return base + ' glyphicon-sort';
        }

        function getShowRemoveIcon(cell) {
          var sortState = action.state;

          return cell.name === sortState.sort;
        }

        var viewModelCells = tableComputedViewModel.head.rows[0].cells.map(function (cell) {
          return {
            iconClassName: getIconClassName(cell),
            showRemoveIcon: getShowRemoveIcon(cell)
          };
        });

        dispatch({
          type: _ActionType2.default.SORT_UPDATE_COMPUTED_VIEW_MODEL_CELLS,
          cells: viewModelCells
        });

        dispatch({
          type: _ActionType6.default.ROUTING_UPDATE_ROUTE,
          queryParams: action.state
        });

        if (undefined !== sortState.sort && undefined !== sortState.order) {
          dispatch({
            type: _ActionType8.default.ASYNC_UPDATE_OPTIONS,
            options: {
              sort: {
                sort: sortState.sort,
                order: sortState.order
              }
            }
          });
        } else {
          dispatch({
            type: _ActionType8.default.ASYNC_UPDATE_OPTIONS,
            options: {
              sort: undefined
            }
          });
        }

        dispatch({
          type: _ActionType8.default.ASYNC_DATA_UPDATE_DATA
        });
      }), _ref;
    },
    filters: function filters() {
      var sortableColumns = getSortableColumns();

      return _defineProperty({}, _ActionType4.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_HEAD, function (action, dispatch, getState, store) {
        if (action.head.rows.length > 1) {
          throw new Error('Unsupported multi-rows header.');
        }

        action.head.rows[0].cells.forEach(function (cell, cellIndex) {
          if (sortableColumns.indexOf(cell.name) !== -1) {
            var className = void 0;

            if (undefined !== cell.props && undefined !== cell.props.className) {
              className = cell.props.className + ' sortable';
            } else {
              className = 'sortable';
            }

            _lodash2.default.merge(cell, {
              props: {
                onClick: function onClick(event) {
                  event.preventDefault();

                  dispatch({
                    type: _ActionType2.default.SORT_TOGGLE_SORT,
                    sort: cell.name
                  });
                },
                className: className
              }
            });

            cell.content = [cell.content, _react2.default.createElement(_ConnectedSortIcon2.default, {
              key: 'sortIcon',
              cellIndex: cellIndex,
              store: store })];
          }
        });

        return action;
      });
    },
    boot: function boot(dispatch, getState) {
      var sortState = {};
      var query = getState().get('opts').get('routing').toJS().location.query;

      if (undefined !== query.sort && undefined !== query.order) {
        sortState.sort = query.sort;
        sortState.order = query.order;
      }

      dispatch({
        type: _ActionType2.default.SORT_UPDATE_SORT_STATE,
        state: sortState
      });
    }
  };
};

SortModule.moduleName = 'sort';

exports.default = SortModule;