import React from 'react'
import ActionType from '../Action/Type/ActionType'
import { takeEvery, takeLatest, CANCEL } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import makeRouting from '../Routing/Routing'
import makeStateAwareRouting from '../Routing/StateAwareRouting'
import getSortSaga from './SortSaga'
import getPaginatorSaga from './PaginatorSaga'

const startLoading = () => {
  return {
    type: ActionType.LOADING,
    loading: true
  }
}

const stopLoading = () => {
  return {
    type: ActionType.LOADING,
    loading: false
  }
}

const initialize = () => {
  return {
    type: ActionType.INITIALIZE
  }
}

const errorLoadingData = () => {
  return {
    type: ActionType.ERROR_LOADING_DATA
  }
}

const updateData = (data) => {
  return {
    type: ActionType.UPDATE_DATA,
    data: data.result,
    total: data.info.total,
    filteredTotal: data.info.filteredTotal
  }
}

function* updateDataAsync(getState) {
  yield put(startLoading())

  const state = getState()

  const { page, pageSize, q } = state.get('paginator').toJS()
  const sortContext = state.get('table').get('sortContext')

  try {
    const doGetData = state.get('opts').get('table').get('getData')

    const opts = {
      page,
      pageSize,
      q,
      sort: undefined === sortContext ? sortContext : sortContext.toJS()
    }

    const newPromise = doGetData(opts)

    newPromise[CANCEL] = () => { newPromise.cancel() }

    const data = yield call(() => newPromise)

    yield [
      put(initialize()),
      put(updateData(data))
    ]
  } catch (e) {
    yield put(errorLoadingData())

    throw e
  } finally {
    yield put(stopLoading())
  }
}

function* initLocation(action) {
  const location = action.location
  const query = location.query

  let page, pageSize, q

  page = query.page === undefined ? 1 : parseInt(query.page, 10)
  pageSize = query.pageSize === undefined ? 10 : parseInt(query.pageSize, 10)

  if (undefined === query.q || '' === query.q) {
    q = ''
  } else {
    q = query.q
  }

  yield [
    put({ type: ActionType.UPDATE_Q, q }),
    put({ type: ActionType.UPDATE_PAGE, page }),
    put({ type: ActionType.UPDATE_PAGE_SIZE, pageSize }),
    put({ type: ActionType.INIT_Q_FIELD_VALUE, qFieldValue: q }),
    put({ type: ActionType.UPDATE_SORT_CONTEXT, sortContext: query.sort })
  ]
}

function *initLocationSaga() {
  yield* takeEvery(ActionType.INIT_LOCATION, initLocation)
}

function *navigateToPageSaga(getState) {
  yield* takeLatest(ActionType.NAVIGATE_TO_PAGE, updateDataAsync.bind(undefined, getState))
}

function *tableHeadInitChildrenSaga() {
  yield *takeEvery(ActionType.TABLE_HEAD_INIT_CHILDREN, function *(action) {
    const rows = {}

    const theadChild = React.Children.only(action.children)

    React.Children.forEach(theadChild.props.children, (rowChild, rowIndex) => {
      const row = {}

      React.Children.forEach(rowChild.props.children, (cellChild, cellIndex) => {
        row[cellIndex] = {
          name: cellChild.props.name,
          className: cellChild.props.sortable ? 'sortable' : ''
        }
      })

      rows[rowIndex] = row
    })

    yield put({
      type: ActionType.UPDATE_HEAD_ROWS,
      rows
    })
  })
}

const getMainSaga = (getState, history) => {
  const stateAwareRouting = makeStateAwareRouting(getState, makeRouting(history))

  return [
    initLocationSaga(getState),
    navigateToPageSaga(getState),
    getSortSaga(getState, stateAwareRouting),
    getPaginatorSaga(getState, stateAwareRouting),
    tableHeadInitChildrenSaga(getState)
  ]
}

export default getMainSaga