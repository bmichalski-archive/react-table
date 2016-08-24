import {combineReducers} from 'redux-immutable'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import assert from 'assert'
import makeActionFilterObj from './ActionFilter'
import actionListener from './ActionListener'
import _ from 'lodash'
import Immutable from 'immutable'
import CommonActionType from './Modules/Common/Action/ActionType'

export default (opts, ...modules) => {
  const reducers = {}
  const components = {}
  const actionFilterCallbacks = {}
  const preActionHandlingCallbacks = {}
  const postActionHandlingCallbacks = {}
  const bootFunctions = []

  modules.forEach((module) => {
    const moduleDefinition = module(opts[module.moduleName])
    const moduleName = module.moduleName

    assert.notStrictEqual(undefined, moduleName, 'Missing module name.')
    assert.notStrictEqual(null, moduleName, 'Missing module name.')
    assert.notStrictEqual('', moduleName, 'Missing module name.')

    if (undefined === moduleDefinition.reducer) {
      reducers[moduleName] = (state = {}) => {
        return state
      }
    } else {
      reducers[moduleName] = moduleDefinition.reducer
    }

    if (undefined !== moduleDefinition.components) {
      components[moduleName] = moduleDefinition.components
    }

    if (undefined !== moduleDefinition.boot) {
      bootFunctions.push(moduleDefinition.boot)
    }

    if (undefined !== moduleDefinition.filters) {
      _.forEach(moduleDefinition.filters(), (filter, key) => {
        if (undefined === actionFilterCallbacks[key]) {
          actionFilterCallbacks[key] = []
        }

        actionFilterCallbacks[key].push(filter)
      })
    }

    if (undefined !== moduleDefinition.preListeners) {
      _.forEach(moduleDefinition.preListeners(), (listener, key) => {
        if (undefined === preActionHandlingCallbacks[key]) {
          preActionHandlingCallbacks[key] = []
        }

        preActionHandlingCallbacks[key].push(listener)
      })
    }

    if (undefined !== moduleDefinition.listeners) {
      _.forEach(moduleDefinition.listeners(), (listener, key) => {
        if (undefined === postActionHandlingCallbacks[key]) {
          postActionHandlingCallbacks[key] = []
        }

        postActionHandlingCallbacks[key].push(listener)
      })
    }
  })

  const actionFilterObj = makeActionFilterObj()

  const OPTS_INIT = 'OPTS_INIT'

  const optsReducer = (state = Immutable.fromJS({}), action) => {
    switch (action.type) {
      case OPTS_INIT:
        return state.merge(action.opts)
      default:
        return state
    }
  }

  const store = createStore(
    combineReducers({
      ...reducers,
      opts: optsReducer
    }),
    compose(
      applyMiddleware(
        actionFilterObj.actionFilter.call(actionFilterObj, actionFilterCallbacks),
        actionListener(preActionHandlingCallbacks, postActionHandlingCallbacks),
        thunkMiddleware
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  store.dispatch({
    type: OPTS_INIT,
    opts: opts
  })

  store.dispatch({
    type: CommonActionType.COMMON_SET_COMPONENTS,
    components
  })

  actionFilterObj.store = store

  bootFunctions.forEach((bootFunction) => {
    bootFunction(store.dispatch, store.getState)
  })

  //Test

  //End tests

  return store
}