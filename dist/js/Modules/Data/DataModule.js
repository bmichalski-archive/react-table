'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Reducer = require('./Store/Reducer');

var _Reducer2 = _interopRequireDefault(_Reducer);

var _ActionType = require('./Action/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DataModule = function DataModule() {
  var actions = {};

  actions[_ActionType2.default.DATA_REPLACE_DATA] = _ActionType2.default.DATA_REPLACE_DATA;

  return {
    reducer: _Reducer2.default,
    actions: actions
  };
};

DataModule.moduleName = 'data';

exports.default = DataModule;