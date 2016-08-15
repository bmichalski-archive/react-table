import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import getDefaultState from './DefaultState'
import paginatorReducer from 'ReducerBak/PaginatorReducer'
import tableReducer from 'ReducerBak/TableReducer'
import rootReducer from 'ReducerBak/RootReducer'

export default () => {
  const defaultState = getDefaultState()

  const reducer = (state = defaultState, action) => {
    return rootReducer(state, action).merge({
      table: tableReducer(state.get('table'), action),
      paginator: paginatorReducer(state.get('paginator'), action)
    })
  }

  const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
  )

  return store
}
