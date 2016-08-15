import Immutable from 'immutable'
import ActionType from '../Action/ActionType'

const defaultState = Immutable.fromJS({})

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionType.DATA_REPLACE_DATA:
      return state.setIn(['data'], Immutable.fromJS(action.data))
    default:
      return state
  }
}