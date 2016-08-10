import { takeEvery } from 'redux-saga'
import ActionType from '../Action/Type/ActionType'
import { put } from 'redux-saga/effects'

function *doToggleSortSaga(getState, action) {
  const state = getState()

  // const defaultOrder = undefined === defaultOrder ? 'desc' : defaultOrder
  const defaultOrder = 'desc'
  const sortContext = state.get('table').get('sortContext')
  let newOrder

  if (undefined !== sortContext && action.name === sortContext.get('sort')) {
    if (sortContext.get('order') === 'asc') {
      newOrder = 'desc'
    } else {
      newOrder = 'asc'
    }
  } else {
    newOrder = defaultOrder
  }

  yield put({
    type: ActionType.UPDATE_SORT_CONTEXT,
    sortContext: {
      order: newOrder,
      sort: action.name
    }
  })
}

function *updateSortContextSaga(stateAwareRouting) {
  yield *takeEvery(ActionType.UPDATE_SORT_CONTEXT, stateAwareRouting.navigateToPage)
}

function *toggleSortSaga(getState) {
  yield *takeEvery(ActionType.TOGGLE_SORT, doToggleSortSaga.bind(undefined, getState))
}

const getSortSaga = (getState, stateAwareRouting) => {
  return [
    updateSortContextSaga(stateAwareRouting),
    toggleSortSaga(getState)
  ]
}

export default getSortSaga