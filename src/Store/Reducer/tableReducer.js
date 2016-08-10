import ActionType from '../../Action/Type/ActionType'

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
        totalFiltered: action.totalFiltered
      })
    default:
      return state
  }
}
