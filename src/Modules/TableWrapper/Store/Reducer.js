import Immutable from 'immutable'
import TableWrapperActionType from '../Action/ActionType'

const defaultState = Immutable.fromJS({
  state: {
    overrideTable: false,
    overrideTableWith: undefined
  }
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case TableWrapperActionType.TABLE_WRAPPER_SET_OVERRIDE_TABLE_WITH:
      return state.mergeIn(['state'], {
        overrideTable: true,
        overrideTableWith: action.overrideTableWith
      })
    case TableWrapperActionType.TABLE_WRAPPER_UNSET_OVERRIDE_TABLE_WITH:
      return state.mergeIn(['state'], {
        overrideTable: false,
        overrideTableWith: undefined
      })
    case TableWrapperActionType.TABLE_WRAPPER_SET_BEFORE_TABLE_COMPONENTS:
      return state.setIn([ 'state', 'beforeTableComponents' ], Immutable.fromJS(action.beforeTableComponents))
    default:
      return state
  }
}