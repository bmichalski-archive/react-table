import ActionType from '../Action/ActionType'
import Immutable from 'immutable'

export default (state, action) => {
  switch (action.type) {
    case ActionType.TABLE_REPLACE_COMPUTED_VIEW_MODEL_PROPS:
      return state.setIn(['props'], Immutable.fromJS(action.props))
    case ActionType.TABLE_REPLACE_COMPUTED_VIEW_MODEL_HEAD:
      return state.setIn(['head'], Immutable.fromJS(action.head))
    case ActionType.TABLE_REPLACE_COMPUTED_VIEW_MODEL_BODYS:
      return state.setIn(['bodys'], Immutable.fromJS(action.bodys))
    default:
      return state
  }
}