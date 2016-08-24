import defaultState from './DefaultState'
import BeforeTableActionType from '../Action/ActionType'

export default (state = defaultState, action) => {
  switch (action.type) {
    case BeforeTableActionType.BEFORE_TABLE_REGISTER_COMPONENT:
      let temp = state.setIn(
        [ 'state', 'rows', action.row, 'slots', action.slot ],
        action.component
      )

      return temp
    default:
      return state
  }
}