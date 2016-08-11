"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isInteger = function isInteger(nb) {
  return nb === parseInt(nb, 10);
};

var isPositiveInteger = function isPositiveInteger(nb) {
  return isInteger(nb) && nb > 0;
};

exports.isInteger = isInteger;
exports.isPositiveInteger = isPositiveInteger;