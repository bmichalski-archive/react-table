'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MakeModule = require('../../Common/MakeModule');

var _MakeModule2 = _interopRequireDefault(_MakeModule);

var _ActionType = require('../GoToPage/Action/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

var _ActionType3 = require('../AsyncData/Action/ActionType');

var _ActionType4 = _interopRequireDefault(_ActionType3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (0, _MakeModule2.default)('goToPageAsyncDataModule', function () {
  return {
    listeners: function listeners() {
      return _defineProperty({}, _ActionType2.default.GO_TO_PAGE_UPDATE_GO_TO_PAGE, function (action, dispatch) {
        if (true === action.noAsyncDataUpdate) {
          return;
        }

        dispatch({
          type: _ActionType4.default.ASYNC_UPDATE_OPTIONS,
          options: {
            page: action.page
          }
        });

        dispatch({
          type: _ActionType4.default.ASYNC_DATA_UPDATE_DATA
        });
      });
    }
  };
});