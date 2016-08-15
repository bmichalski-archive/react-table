import ActionType from './Action/ActionType'
import DataModuleActionType from '../Data/Action/ActionType'

const AsyncDataModule = (opts) => {
  const actions = {}

  let promise = undefined

  const fetchData = (dispatch) => {
    if (undefined !== promise) {
      promise.cancel()
    }

    promise = opts.fetchData()

    promise.then((data) => {
      dispatch({
        type: DataModuleActionType.DATA_REPLACE_DATA,
        data
      })
    })
  }

  actions[ActionType.ASYNC_DATA_UPDATE_DATA] = ActionType.ASYNC_DATA_UPDATE_DATA

  return {
    actions: actions,
    boot: (dispatch) => {
      dispatch({
        type: ActionType.ASYNC_DATA_UPDATE_DATA
      })
    },
    listeners: () => {
      return {
        [ActionType.ASYNC_DATA_UPDATE_DATA]: (dispatch) => {
          fetchData(dispatch)
        }
      }
    }
  }
}

AsyncDataModule.moduleName = 'asyncData'

export default AsyncDataModule