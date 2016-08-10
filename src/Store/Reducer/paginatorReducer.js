import ActionType from '../../Action/Type/ActionType'

export default (state, action) => {
  switch(action.type) {
    case ActionType.UPDATE_GO_TO_PAGE_DISABLED:
      return state.merge({
        goToPageDisabled: action.goToPageDisabled
      })
    case ActionType.UPDATE_TOTAL_RESULT_AND_PAGES_AND_LINKS:
      return state.merge({
        buttons: action.buttons,
        showButtons: action.showButtons,
        firstDisabled: action.firstDisabled,
        lastDisabled: action.lastDisabled,
        previousDisabled: action.previousDisabled,
        nextDisabled: action.nextDisabled,
        totalResult: action.totalResult,
        totalPages: action.totalPages
      })
    case ActionType.START_DEBOUNCE_Q:
      return state.mergeIn([ 'debounce' ], { timeout: action.timeout })
    case ActionType.INIT_Q_FIELD_VALUE:
    case ActionType.UPDATE_Q_FIELD_VALUE:
      return state.merge({ qFieldValue: action.qFieldValue })
    case ActionType.UPDATE_Q:
      return state.merge({ q: action.q })
    case ActionType.UPDATE_GO_TO_PAGE_VALUE:
      return state.merge({ goToPageValue: action.goToPageValue })
    case ActionType.UPDATE_PAGE_SIZE:
      return state.merge({ pageSize: action.pageSize })
    case ActionType.UPDATE_PAGE:
      return state.merge({ page: action.page })
    default:
      return state
  }
}
