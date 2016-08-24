import Immutable from 'immutable'
import CommonActionType from '../Action/ActionType'
import defaultState from './DefaultState'

export default (state = defaultState, action) => {
  switch (action.type) {
    case CommonActionType.COMMON_SET_COMPONENTS:
      return state.setIn([ 'components' ], Immutable.fromJS(action.components))
    default:
      return state
  }
}