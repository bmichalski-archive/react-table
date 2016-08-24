import defaultState from './DefaultState'
import RoutingActionType from '../Action/ActionType'

export default (state = defaultState, action) => {
  switch (action.type) {
    case RoutingActionType.SET_MAKE_LINK:
      return state.set('makeLink', action.makeLink)
    case RoutingActionType.SET_PREVIOUS_LOCATION_QUERY:
      return state.mergeIn([ 'state' ], { previousLocationQuery: action.previousLocationQuery })
    default:
      return state
  }
}