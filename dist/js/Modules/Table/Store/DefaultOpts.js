'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UndefinedFunction = require('../../../Common/UndefinedFunction');

var _UndefinedFunction2 = _interopRequireDefault(_UndefinedFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getData: _UndefinedFunction2.default.bind('table.getData'),
  renderCell: _UndefinedFunction2.default.bind('table.renderCell'),
  messages: {
    data: {
      errorLoading: 'Error loading data.',
      loadingMessage: 'Loading data...'
    }
  }
};