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

var _ActionType5 = require('../GoToPage/Action/ActionType');

var _ActionType6 = _interopRequireDefault(_ActionType5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (0, _MakeModule2.default)('goToPageAsyncDataRouting', function () {
  return {
    listeners: function listeners() {
      return _defineProperty({}, _ActionType2.default.ASYNC_UPDATE_OPTIONS, function (action, dispatch) {
        if ('page' in action.options) {
          var page = 1 === action.options.page ? undefined : action.options.page;

          dispatch({
            type: _ActionType4.default.ROUTING_UPDATE_ROUTE,
            queryParams: {
              page: page
            }
          });
        }
      });
    },
    boot: function boot(dispatch, getState) {
      var query = getState().get('opts').get('routing').toJS().location.query;
      var page = undefined === query.page ? undefined : parseInt(query.page, 10);

      dispatch({
        type: _ActionType6.default.GO_TO_PAGE_UPDATE_GO_TO_PAGE,
        page: page
      });
    }
  };
});