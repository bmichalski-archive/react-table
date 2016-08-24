import defaultState from './DefaultState'
import GoToPageActionType from '../Action/ActionType'

export default (state = defaultState, action) => {
  switch (action.type) {
    case GoToPageActionType.GO_TO_PAGE_UPDATE_GO_TO_PAGE_FIELD_VALUE:
      return state.mergeIn(['state'], { goToPageFieldValue: action.goToPageFieldValue })
    case GoToPageActionType.GO_TO_PAGE_UPDATE_GO_TO_PAGE:
      return state.mergeIn(['state'], { goToPage: action.goToPage })
    default:
      return state
  }
}