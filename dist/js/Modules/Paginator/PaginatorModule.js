'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaginatorModule = function PaginatorModule() {
  return {

    beforeTableComponents: function beforeTableComponents() {
      return _react2.default.createElement(
        'div',
        null,
        'test'
      );
    }
  };
};

PaginatorModule.moduleName = 'paginator';

exports.default = PaginatorModule;