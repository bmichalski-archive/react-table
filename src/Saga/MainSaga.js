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
    totalFiltered: data.info.totalFiltered
  }
}

function* updateDataAsync(getState) {
  yield put(startLoading())

  const state = getState()

  const { page, pageSize, q } = state.get('paginator').toJS()

  try {
    const doGetData = state.get('table').get('getData')

    const newPromise = doGetData(page, pageSize, q)

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

const getMainSaga = (getState, history) => {
  const stateAwareRouting = makeStateAwareRouting(getState, makeRouting(history))

  return [
    initLocationSaga(getState),
    navigateToPageSaga(getState),
    getSortSaga(getState, stateAwareRouting),
    getPaginatorSaga(getState, stateAwareRouting)
  ]
}

export default getMainSaga