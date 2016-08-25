import defaultState from './DefaultState'
import AfterTableActionType from '../Action/ActionType'

export default (state = defaultState, action) => {
  switch (action.type) {
    case AfterTableActionType.AFTER_TABLE_REGISTER_COMPONENT:
      return state.setIn(
        [ 'state', 'slot' ],
        action.component
      )
    default:
      return state
  }
}