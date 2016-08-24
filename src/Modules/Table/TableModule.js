import reducer from './Store/Reducer'
import components from './Component/Components'
import TableActionType from './Action/ActionType'

const tableReplaceComputedViewModelHead = (dispatch, head) => {
  if (undefined !== head) {
    dispatch({
      type: TableActionType.TABLE_REPLACE_COMPUTED_VIEW_MODEL_HEAD,
      head: head
    })
  }
}

const tableReplaceComputedViewModelProps = (dispatch, className) => {
  dispatch({
    type: TableActionType.TABLE_REPLACE_COMPUTED_VIEW_MODEL_PROPS,
    props: {
      className: className
    }
  })
}

const TableModule = (opts) => {
  const boot = function (dispatch) {
    if (undefined !== opts) {
      tableReplaceComputedViewModelHead(dispatch, opts.head)
      tableReplaceComputedViewModelProps(dispatch, opts.className)
    }
  }

  return {
    reducer: reducer,
    components: components,
    boot
  }
}

TableModule.moduleName = 'table'

export default TableModule