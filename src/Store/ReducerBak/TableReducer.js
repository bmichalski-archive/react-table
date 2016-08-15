import ActionType from '../../Action/Type/ActionType'
import Immutable from 'immutable'

export default (state, action) => {
  switch(action.type) {
    case ActionType.UPDATE_SORT_CONTEXT:
      return state.merge({
        sortContext: action.sortContext
      })
    case ActionType.UPDATE_DATA:
      return state.merge({
        data: action.data,
        total: action.total,
        filteredTotal: action.filteredTotal
      })
    case ActionType.UPDATE_HEAD_CELL:
      return state.mergeIn(['head', 'rows', action.rowIndex, action.cellIndex], action.cell)
    case ActionType.UPDATE_HEAD_ROWS:
      return state.setIn(['head', 'rows'], Immutable.fromJS(action.rows))
    case ActionType.UPDATE_BODY_ROWS:
      return state.setIn(['body', 'rows'], action.rows)
    default:
      return state
  }
}
