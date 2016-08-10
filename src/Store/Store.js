import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import getDefaultState from './DefaultState'
import createSagaMiddleware from 'redux-saga'
import paginatorReducer from './Reducer/PaginatorReducer'
import tableReducer from './Reducer/TableReducer'
import rootReducer from './Reducer/RootReducer'

export default (opts) => {
  const sagaMiddleware = createSagaMiddleware()
  const defaultState = getDefaultState(sagaMiddleware, opts)

  const reducer = (state = defaultState, action) => {
    return rootReducer(state, action).merge({
      table: tableReducer(state.get('table'), action),
      paginator: paginatorReducer(state.get('paginator'), action)
    })
  }

  const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware, sagaMiddleware)
  )

  return store
}
