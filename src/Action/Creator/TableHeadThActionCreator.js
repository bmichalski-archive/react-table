import ActionType from '../Type/ActionType'

function resetSortContext() {
  return {
    type: ActionType.UPDATE_SORT_CONTEXT,
    sortContext: undefined
  }
}

function toggleSort(name) {
  return {
    type: ActionType.TOGGLE_SORT,
    name
  }
}

export default {
  toggleSort,
  resetSortContext
}