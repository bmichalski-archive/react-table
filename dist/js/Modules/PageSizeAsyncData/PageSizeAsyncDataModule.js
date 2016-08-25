'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MakeModule = require('../../Common/MakeModule');

var _MakeModule2 = _interopRequireDefault(_MakeModule);

var _ActionType = require('../PageSize/Action/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

var _ActionType3 = require('../AsyncData/Action/ActionType');

var _ActionType4 = _interopRequireDefault(_ActionType3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getPageSizeFromRawPageSize(rawPageSize) {
  return parseInt(rawPageSize, 10);
}

exports.default = (0, _MakeModule2.default)('pageSizeAsyncData', function () {
  return {
    listeners: function listeners() {
      return _defineProperty({}, _ActionType2.default.PAGE_SIZE_UPDATE_PAGE_SIZE, function (action, dispatch) {
        dispatch({
          type: _ActionType4.default.ASYNC_UPDATE_OPTIONS,
          options: {
            pageSize: getPageSizeFromRawPageSize(action.pageSize)
          }
        });

        dispatch({
          type: _ActionType4.default.ASYNC_DATA_UPDATE_DATA
        });
      });
    }
  };
});