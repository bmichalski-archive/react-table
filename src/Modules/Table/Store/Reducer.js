import {combineReducers} from 'redux-immutable'
import defaultState from './DefaultState'
import computeViewModelReducer from './ComputeViewModelReducer'

export default (state = defaultState, action) => {
  return combineReducers({
    computedViewModel: computeViewModelReducer,
    state: s => s
  })(state, action)
}