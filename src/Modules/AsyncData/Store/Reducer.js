import Immutable from 'immutable'
import ActionType from '../Action/ActionType'

const defaultState = Immutable.fromJS({
  state: {
    options: {}
  }
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionType.ASYNC_UPDATE_OPTIONS:
      return state.mergeIn(['state', 'options'], action.options)
    default:
      return state
  }
}