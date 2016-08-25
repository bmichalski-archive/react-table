"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (moduleName, makeModuleDefinition) {
  var Module = makeModuleDefinition;

  Module.moduleName = moduleName;

  return Module;
};