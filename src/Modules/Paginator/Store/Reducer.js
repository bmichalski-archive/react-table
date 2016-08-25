import defaultState from './DefaultState'
import PaginatorActionType from '../Action/ActionType'

export default (state = defaultState, action) => {
  switch (action.type) {
    case PaginatorActionType.PAGINATOR_REPLACE_COMPUTED_VIEW_MODEL_BUTTONS:
      return state.mergeIn(
        [ 'computedViewModel' ],
        {
          buttons: action.buttons,
          showButtons: action.showButtons
        }
      )
    default:
      return state
  }
}