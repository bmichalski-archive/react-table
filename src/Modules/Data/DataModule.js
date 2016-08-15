import reducer from './Store/Reducer'
import ActionType from './Action/ActionType'

const DataModule = () => {
  const actions = {}

  actions[ActionType.DATA_REPLACE_DATA] = ActionType.DATA_REPLACE_DATA

  return {
    reducer: reducer,
    actions: actions
  }
}

DataModule.moduleName = 'data'

export default DataModule