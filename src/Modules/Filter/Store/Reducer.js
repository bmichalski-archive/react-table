import defaultState from './DefaultState'
import FilterActionType from '../Action/ActionType'

export default (state = defaultState, action) => {
  switch (action.type) {
    case FilterActionType.FILTER_UPDATE_Q_FIELD_VALUE:
      return state.mergeIn(['state'], { qFieldValue: action.qFieldValue })
    case FilterActionType.FILTER_RESET_Q_FIELD_VALUE:
      return state.mergeIn(['state'], { qFieldValue: '' })
    default:
      return state
  }
}