import defaultState from './DefaultState'
import PageSizeActionType from '../Action/ActionType'

export default (state = defaultState, action) => {
  switch (action.type) {
    case PageSizeActionType.PAGE_SIZE_UPDATE_PAGE_SIZE:
      return state.mergeIn(['state'], { pageSize: action.pageSize })
    default:
      return state
  }
}