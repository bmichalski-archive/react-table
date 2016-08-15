import DataActionType from '../Data/Action/ActionType'
import TableActionType from '../Table/Action/ActionType'

const ParseDataModule = (opts) => {
  return {
    listeners: () => {
      return {
        [DataActionType.DATA_REPLACE_DATA]: (dispatch, action) => {
          const bodys = opts.updateBodys(action.data)

          dispatch({
            type: TableActionType.TABLE_REPLACE_COMPUTED_VIEW_MODEL_BODYS,
            bodys: bodys
          })
        }
      }
    }
  }
}

ParseDataModule.moduleName = 'parseData'

export default ParseDataModule