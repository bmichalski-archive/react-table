'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionType = require('./Action/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

var _ActionType3 = require('../Data/Action/ActionType');

var _ActionType4 = _interopRequireDefault(_ActionType3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AsyncDataModule = function AsyncDataModule(opts) {
  var actions = {};

  var promise = undefined;

  var fetchData = function fetchData(dispatch) {
    if (undefined !== promise) {
      promise.cancel();
    }

    promise = opts.fetchData();

    promise.then(function (data) {
      dispatch({
        type: _ActionType4.default.DATA_REPLACE_DATA,
        data: data
      });
    });
  };

  actions[_ActionType2.default.ASYNC_DATA_UPDATE_DATA] = _ActionType2.default.ASYNC_DATA_UPDATE_DATA;

  return {
    actions: actions,
    boot: function boot(dispatch) {
      dispatch({
        type: _ActionType2.default.ASYNC_DATA_UPDATE_DATA
      });
    },
    listeners: function listeners() {
      return _defineProperty({}, _ActionType2.default.ASYNC_DATA_UPDATE_DATA, function (dispatch) {
        fetchData(dispatch);
      });
    }
  };
};

AsyncDataModule.moduleName = 'asyncData';

exports.default = AsyncDataModule;