import DataActionType from '../Data/Action/ActionType'
import TableActionType from '../Table/Action/ActionType'

function tableReplaceComputedViewModelBodys(dispatch, bodys) {
  dispatch({
    type: TableActionType.TABLE_REPLACE_COMPUTED_VIEW_MODEL_BODYS,
    bodys: bodys
  })
}

const ParseDataModule = (opts) => {
  return {
    listeners: () => {
      return {
        [DataActionType.DATA_REPLACE_DATA]: (action, dispatch) => {
          tableReplaceComputedViewModelBodys(
            dispatch,
            opts.updateBodys(action.data)
          )
        }
      }
    }
  }
}

ParseDataModule.moduleName = 'parseData'

export default ParseDataModule