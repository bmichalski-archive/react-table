import { useRouterHistory } from 'react-router'
import { createHistory } from 'history'
import qs from 'qs'
import Promise from 'bluebird'
import getStore from '../Store/Store'
import getMainSaga from '../Saga/MainSaga'
import createSagaMiddleware from 'redux-saga'

Promise.config({
  warnings: true,
  longStackTraces: true,
  cancellation: true
})

export default (opts, cb) => {
  const browserHistory = useRouterHistory(createHistory)({
    parseQueryString: qs.parse,
    stringifyQuery: qs.stringify
  })

  const sagaMiddleware = createSagaMiddleware()

  const store = getStore(opts, sagaMiddleware)

  let sagas = [
    getMainSaga(store.getState, browserHistory)
  ]

  if (undefined !== opts.getSagas) {
    sagas = sagas.concat(opts.getSagas(store.getState))
  }

  function* rootSaga() {
    yield sagas
  }

  sagaMiddleware.run(rootSaga)

  return cb(browserHistory, store)
}