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

var _ActionType5 = require('../Filter/Action/ActionType');

var _ActionType6 = _interopRequireDefault(_ActionType5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (0, _MakeModule2.default)('filterRouting', function () {
  return {
    listeners: function listeners() {
      return _defineProperty({}, _ActionType2.default.ASYNC_UPDATE_OPTIONS, function (action, dispatch) {
        if ('q' in action.options) {
          dispatch({
            type: _ActionType4.default.ROUTING_UPDATE_ROUTE,
            queryParams: {
              q: action.options.q
            }
          });
        }
      });
    },
    boot: function boot(dispatch, getState) {
      var query = getState().get('opts').get('routing').toJS().location.query;
      var qFieldValue = undefined === query.q ? '' : query.q;

      dispatch({
        type: _ActionType6.default.FILTER_UPDATE_Q_FIELD_VALUE,
        qFieldValue: qFieldValue,
        delay: 0,
        boot: true
      });
    }
  };
});