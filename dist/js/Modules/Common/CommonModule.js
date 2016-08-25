'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Reducer = require('./Store/Reducer');

var _Reducer2 = _interopRequireDefault(_Reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommonModule = function CommonModule() {
  return {
    reducer: _Reducer2.default
  };
};

CommonModule.moduleName = 'common';

exports.default = CommonModule;