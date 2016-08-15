import ActionType from '../../Action/Type/ActionType'

export default (state, action) => {
  switch(action.type) {
    case ActionType.INIT_LOCATION:
    case ActionType.UPDATE_LOCATION:
      return state.merge({ location: action.location })
    case ActionType.INITIALIZE:
      return state.merge({ initialized: true })
    case ActionType.LOADING:
      return state.merge({ loading: action.loading })
    case ActionType.ERROR_LOADING_DATA:
      return state.merge({ errorLoadingData: true })
    default:
      return state
  }
}