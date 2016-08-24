'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (functionName) {
  throw new Error('Call to undefined state function "' + functionName + '".');
};