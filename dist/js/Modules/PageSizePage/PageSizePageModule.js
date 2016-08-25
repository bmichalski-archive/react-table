'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MakeModule = require('../../Common/MakeModule');

var _MakeModule2 = _interopRequireDefault(_MakeModule);

var _ActionType = require('../PageSize/Action/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

var _ActionType3 = require('../GoToPage/Action/ActionType');

var _ActionType4 = _interopRequireDefault(_ActionType3);

var _ActionType5 = require('../AsyncData/Action/ActionType');

var _ActionType6 = _interopRequireDefault(_ActionType5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (0, _MakeModule2.default)('pageSizePage', function () {
  return {
    preListeners: function preListeners() {
      return _defineProperty({}, _ActionType2.default.PAGE_SIZE_UPDATE_PAGE_SIZE, function (action, dispatch) {
        if (true !== action.boot) {
          dispatch({
            type: _ActionType4.default.GO_TO_PAGE_UPDATE_GO_TO_PAGE_FIELD_VALUE,
            goToPageFieldValue: ''
          });

          dispatch({
            type: _ActionType6.default.ASYNC_UPDATE_OPTIONS,
            options: {
              page: undefined
            }
          });

          dispatch({
            type: _ActionType4.default.GO_TO_PAGE_UPDATE_GO_TO_PAGE,
            page: 1,
            noAsyncDataUpdate: true
          });
        }
      });
    }
  };
});