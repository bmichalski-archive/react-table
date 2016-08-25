import ActionType from './Action/ActionType'
import DataModuleActionType from '../Data/Action/ActionType'
import TableWrapperActionType from '../TableWrapper/Action/ActionType'
import reducer from './Store/Reducer'

const setTableWrapperContentErrorLoadingData = (dispatch) => {
  dispatch({
    type: TableWrapperActionType.TABLE_WRAPPER_SET_OVERRIDE_TABLE_WITH,
    overrideTableWith: 'Error loading data.'
  })
}

const setTableWrapperContentLoading = (dispatch) => {
  dispatch({
    type: TableWrapperActionType.TABLE_WRAPPER_SET_OVERRIDE_TABLE_WITH,
    overrideTableWith: 'Loading...'
  })
}

const makeScheduleFetchData = () => {
  let promise = undefined
  let tableWrapperOverrideUnset = false

  return (getFetchDataPromise, dispatch, getState) => {
    if (undefined !== promise) {
      promise.cancel()
    }

    const asyncDataState = getState().get('asyncData').get('state').get('options').toJS()

    promise = getFetchDataPromise(asyncDataState)

    promise.then((data) => {
      dispatch({
        type: DataModuleActionType.DATA_REPLACE_DATA,
        data
      })
    }).then(() => {
      if (tableWrapperOverrideUnset) {
        return
      }

      tableWrapperOverrideUnset = true

      dispatch({
        type: TableWrapperActionType.TABLE_WRAPPER_UNSET_OVERRIDE_TABLE_WITH
      })
    }).catch((e) => {
      setTableWrapperContentErrorLoadingData(dispatch)

      throw e
    }).done()
  }
}

const updateData = (dispatch) => {
  dispatch({
    type: ActionType.ASYNC_DATA_UPDATE_DATA
  })
}

const AsyncDataModule = (opts) => {
  const scheduleFetchData = makeScheduleFetchData()

  return {
    reducer: reducer,
    boot: (dispatch) => {
      setTableWrapperContentLoading(dispatch)
      updateData(dispatch)
    },
    listeners: () => {
      return {
        [ActionType.ASYNC_DATA_UPDATE_DATA]: (action, dispatch, getState) => {
          scheduleFetchData(opts.fetchData, dispatch, getState)
        }
      }
    }
  }
}

AsyncDataModule.moduleName = 'asyncData'

export default AsyncDataModule