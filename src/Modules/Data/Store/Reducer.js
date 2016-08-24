import Immutable from 'immutable'
import DataActionType from '../Action/ActionType'
import defaultState from './DefaultState'

export default (state = defaultState, action) => {
  switch (action.type) {
    case DataActionType.DATA_REPLACE_DATA:
      return state.setIn(['data'], Immutable.fromJS(action.data))
    default:
      return state
  }
}