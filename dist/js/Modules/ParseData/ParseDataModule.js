'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionType = require('../Data/Action/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

var _ActionType3 = require('../Table/Action/ActionType');

var _ActionType4 = _interopRequireDefault(_ActionType3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ParseDataModule = function ParseDataModule(opts) {
  return {
    listeners: function listeners() {
      return _defineProperty({}, _ActionType2.default.DATA_REPLACE_DATA, function (dispatch, action) {
        var bodys = opts.updateBodys(action.data);

        dispatch({
          type: _ActionType4.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_BODYS,
          bodys: bodys
        });
      });
    }
  };
};

ParseDataModule.moduleName = 'parseData';

exports.default = ParseDataModule;