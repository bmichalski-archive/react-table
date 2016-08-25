'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Reducer = require('./Store/Reducer');

var _Reducer2 = _interopRequireDefault(_Reducer);

var _Components = require('./Component/Components');

var _Components2 = _interopRequireDefault(_Components);

var _ActionType = require('./Action/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableReplaceComputedViewModelHead = function tableReplaceComputedViewModelHead(dispatch, head) {
  if (undefined !== head) {
    dispatch({
      type: _ActionType2.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_HEAD,
      head: head
    });
  }
};

var tableReplaceComputedViewModelProps = function tableReplaceComputedViewModelProps(dispatch, className) {
  dispatch({
    type: _ActionType2.default.TABLE_REPLACE_COMPUTED_VIEW_MODEL_PROPS,
    props: {
      className: className
    }
  });
};

var TableModule = function TableModule(opts) {
  var boot = function boot(dispatch) {
    if (undefined !== opts) {
      tableReplaceComputedViewModelHead(dispatch, opts.head);
      tableReplaceComputedViewModelProps(dispatch, opts.className);
    }
  };

  return {
    reducer: _Reducer2.default,
    components: _Components2.default,
    boot: boot
  };
};

TableModule.moduleName = 'table';

exports.default = TableModule;