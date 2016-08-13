import { takeEvery } from 'redux-saga'
import ActionType from '../Action/Type/ActionType'
import { put } from 'redux-saga/effects'
import _ from 'lodash'

const getIconClassName = (sortContext, name) => {
  let className = 'glyphicon glyphicon-'

  if (undefined !== sortContext && sortContext.sort === name) {
    if (sortContext.order === 'asc') {
      className += 'arrow-up'
    } else {
      className += 'arrow-down'
    }
  } else {
    className += 'sort'
  }

  return className
}

const isCurrentSort = (sortContext, name) => {
  return undefined !== sortContext && sortContext.sort === name
}

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

function *updateSortContextSaga(getState, stateAwareRouting) {
  yield [
    takeEvery(ActionType.UPDATE_SORT_CONTEXT, stateAwareRouting.navigateToPage),
    takeEvery(ActionType.UPDATE_SORT_CONTEXT, function *(action) {
      console.log(action)
      const sortContext = action.sortContext
      const rows = getState().get('table').get('head').get('rows').toJS()

      _.forEach(rows, (row) => {
        _.forEach(row, (cell) => {
          cell.isCurrentSort = isCurrentSort(sortContext, cell.name)
          cell.iconClassName = getIconClassName(sortContext, cell.name)
        })
      })

      yield put({
        type: ActionType.UPDATE_HEAD_ROWS,
        rows
      })
    })
  ]
}

function *toggleSortSaga(getState) {
  yield *takeEvery(ActionType.TOGGLE_SORT, doToggleSortSaga.bind(undefined, getState))
}

const getSortSaga = (getState, stateAwareRouting) => {
  return [
    updateSortContextSaga(getState, stateAwareRouting),
    toggleSortSaga(getState)
  ]
}

export default getSortSaga