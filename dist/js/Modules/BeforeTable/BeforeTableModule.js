'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Reducer = require('./Store/Reducer');

var _Reducer2 = _interopRequireDefault(_Reducer);

var _ConnectedBeforeTableLayout = require('./Component/Connected/ConnectedBeforeTableLayout');

var _ConnectedBeforeTableLayout2 = _interopRequireDefault(_ConnectedBeforeTableLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BeforeTableModule = function BeforeTableModule() {
  return {
    reducer: _Reducer2.default,
    components: {
      BeforeTableLayout: _ConnectedBeforeTableLayout2.default
    }
  };
};

BeforeTableModule.moduleName = 'beforeTable';

exports.default = BeforeTableModule;