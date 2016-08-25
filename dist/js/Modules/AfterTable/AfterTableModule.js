'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Reducer = require('./Store/Reducer');

var _Reducer2 = _interopRequireDefault(_Reducer);

var _ConnectedBeforeAfterLayout = require('./Component/Connected/ConnectedBeforeAfterLayout');

var _ConnectedBeforeAfterLayout2 = _interopRequireDefault(_ConnectedBeforeAfterLayout);

var _MakeModule = require('../../Common/MakeModule');

var _MakeModule2 = _interopRequireDefault(_MakeModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _MakeModule2.default)('afterTable', function () {
  return {
    reducer: _Reducer2.default,
    components: {
      AfterTableLayout: _ConnectedBeforeAfterLayout2.default
    }
  };
});