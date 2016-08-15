import defaultOpts from './Store/DefaultOpts'
import defaultState from './Store/DefaultState'
import reducer from './Store/Reducer'
import components from './Component/Components'
import ActionType from './Action/ActionType'

const TableModule = (opts) => {
  const actions = {
    [ActionType.TABLE_REPLACE_COMPUTED_VIEW_MODEL_PROPS]: ActionType.TABLE_REPLACE_COMPUTED_VIEW_MODEL_PROPS,
    [ActionType.TABLE_REPLACE_COMPUTED_VIEW_MODEL_BODYS]: ActionType.TABLE_REPLACE_COMPUTED_VIEW_MODEL_BODYS
  }

  return {
    defaultOpts: defaultOpts,
    defaultState: defaultState,
    reducer: reducer,
    components: components,
    actions: actions,
    boot: (dispatch) => {
      if (undefined !== opts) {
        if (undefined !== opts.head) {
          dispatch({
            type: ActionType.TABLE_REPLACE_COMPUTED_VIEW_MODEL_HEAD,
            head: opts.head
          })
        }

        dispatch({
          type: ActionType.TABLE_REPLACE_COMPUTED_VIEW_MODEL_PROPS,
          props: {
            className: opts.className
          }
        })
      }
    }
  }
}

TableModule.moduleName = 'table'

export default TableModule