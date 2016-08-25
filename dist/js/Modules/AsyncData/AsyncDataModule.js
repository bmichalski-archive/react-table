'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionType = require('./Action/ActionType');

var _ActionType2 = _interopRequireDefault(_ActionType);

var _ActionType3 = require('../Data/Action/ActionType');

var _ActionType4 = _interopRequireDefault(_ActionType3);

var _ActionType5 = require('../TableWrapper/Action/ActionType');

var _ActionType6 = _interopRequireDefault(_ActionType5);

var _Reducer = require('./Store/Reducer');

var _Reducer2 = _interopRequireDefault(_Reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setTableWrapperContentErrorLoadingData = function setTableWrapperContentErrorLoadingData(dispatch) {
  dispatch({
    type: _ActionType6.default.TABLE_WRAPPER_SET_OVERRIDE_TABLE_WITH,
    overrideTableWith: 'Error loading data.'
  });
};

var setTableWrapperContentLoadingOnBoot = function setTableWrapperContentLoadingOnBoot(dispatch) {
  dispatch({
    type: _ActionType6.default.TABLE_WRAPPER_SET_OVERRIDE_TABLE_WITH,
    overrideTableWith: 'Loading...'
  });
};

var setTableWrapperContentLoading = function setTableWrapperContentLoading(dispatch) {
  dispatch({
    type: _ActionType6.default.TABLE_WRAPPER_SET_OVERRIDE_TABLE_INNER_AND_AFTER_TABLE_LAYOUT,
    overrideTableInnerAndAfterTableLayoutWith: 'Loading...'
  });
};

var makeScheduleFetchData = function makeScheduleFetchData() {
  var promise = undefined;
  var tableWrapperOverrideUnset = false;

  return function (getFetchDataPromise, dispatch, getState) {
    if (undefined !== promise) {
      promise.cancel();
    }

    setTableWrapperContentLoading(dispatch);

    var asyncDataState = getState().get('asyncData').get('state').get('options').toJS();

    promise = getFetchDataPromise(asyncDataState);

    promise.then(function (data) {
      dispatch({
        type: _ActionType4.default.DATA_REPLACE_DATA,
        data: data
      });
    }).then(function () {
      dispatch({
        type: _ActionType6.default.TABLE_WRAPPER_UNSET_OVERRIDE_TABLE_INNER_AND_AFTER_TABLE_LAYOUT
      });

      if (tableWrapperOverrideUnset) {
        return;
      }

      tableWrapperOverrideUnset = true;

      dispatch({
        type: _ActionType6.default.TABLE_WRAPPER_UNSET_OVERRIDE_TABLE_WITH
      });
    }).catch(function (e) {
      setTableWrapperContentErrorLoadingData(dispatch);

      throw e;
    }).done();
  };
};

var updateData = function updateData(dispatch) {
  dispatch({
    type: _ActionType2.default.ASYNC_DATA_UPDATE_DATA
  });
};

var AsyncDataModule = function AsyncDataModule(opts) {
  var scheduleFetchData = makeScheduleFetchData();

  return {
    reducer: _Reducer2.default,
    boot: function boot(dispatch) {
      setTableWrapperContentLoadingOnBoot(dispatch);
      updateData(dispatch);
    },
    listeners: function listeners() {
      return _defineProperty({}, _ActionType2.default.ASYNC_DATA_UPDATE_DATA, function (action, dispatch, getState) {
        scheduleFetchData(opts.fetchData, dispatch, getState);
      });
    }
  };
};

AsyncDataModule.moduleName = 'asyncData';

exports.default = AsyncDataModule;