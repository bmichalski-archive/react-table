'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MakeModule = require('../../Common/MakeModule');

var _MakeModule2 = _interopRequireDefault(_MakeModule);

var _ActionType = require('../AsyncData/Action/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

var _ActionType3 = require('../Routing/Action/ActionType');

var _ActionType4 = _interopRequireDefault(_ActionType3);

var _ActionType5 = require('../PageSize/Action/ActionType');

var _ActionType6 = _interopRequireDefault(_ActionType5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (0, _MakeModule2.default)('pageSizeAsyncDataRouting', function () {
  return {
    listeners: function listeners() {
      return _defineProperty({}, _ActionType2.default.ASYNC_UPDATE_OPTIONS, function (action, dispatch) {
        if ('pageSize' in action.options) {
          var pageSize = 10 === action.options.pageSize ? undefined : action.options.pageSize;

          dispatch({
            type: _ActionType4.default.ROUTING_UPDATE_ROUTE,
            queryParams: {
              pageSize: pageSize
            }
          });
        }
      });
    },
    boot: function boot(dispatch, getState) {
      var query = getState().get('opts').get('routing').toJS().location.query;

      var pageSize = undefined === query.pageSize ? 10 : parseInt(query.pageSize, 10);

      dispatch({
        type: _ActionType6.default.PAGE_SIZE_UPDATE_PAGE_SIZE,
        pageSize: pageSize,
        boot: true
      });
    }
  };
});