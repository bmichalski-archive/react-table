'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DefaultOpts = require('./Store/DefaultOpts');

var _DefaultOpts2 = _interopRequireDefault(_DefaultOpts);

var _DefaultState = require('./Store/DefaultState');

var _DefaultState2 = _interopRequireDefault(_DefaultState);

var _Reducer = require('./Store/Reducer');

var _Reducer2 = _interopRequireDefault(_Reducer);

var _Components = require('./Component/Components');

var _Components2 = _interopRequireDefault(_Components);

var _ActionType = require('./Action/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TableModule = function TableModule(opts) {
  var _actions;

  var actions = (_actions = {}, _defineProperty(_actions, _ActionType2.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_PROPS, _ActionType2.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_PROPS), _defineProperty(_actions, _ActionType2.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_BODYS, _ActionType2.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_BODYS), _actions);

  return {
    defaultOpts: _DefaultOpts2.default,
    defaultState: _DefaultState2.default,
    reducer: _Reducer2.default,
    components: _Components2.default,
    actions: actions,
    boot: function boot(dispatch) {
      if (undefined !== opts) {
        if (undefined !== opts.head) {
          dispatch({
            type: _ActionType2.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_HEAD,
            head: opts.head
          });
        }

        dispatch({
          type: _ActionType2.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_PROPS,
          props: {
            className: opts.className
          }
        });
      }
    }
  };
};

TableModule.moduleName = 'table';

exports.default = TableModule;