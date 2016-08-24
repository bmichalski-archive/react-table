import defaultState from './DefaultState'
import ActionType from '../Action/ActionType'
import Immutable from 'immutable'

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionType.SORT_UPDATE_COMPUTED_VIEW_MODEL_CELLS:
      return state.setIn(['computedViewModel', 'cells'], Immutable.fromJS(action.cells))
    case ActionType.SORT_UPDATE_SORT_STATE:
      return state.setIn(['state'], Immutable.fromJS(action.state))
    default:
      return state
  }
}