import {combineReducers} from 'redux-immutable'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import assert from 'assert'
import makeActionFilterObj from './ActionFilter'
import actionListener from './ActionListener'
import _ from 'lodash'

export default (opts, ...modules) => {
  const reducers = {}
  const components = {}
  const actionFilterCallbacks = {}
  const actionListenerCallbacks = {}
  const bootFunctions = {}
  const beforeTableComponents = []

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
      bootFunctions[moduleName] = moduleDefinition.boot
    }

    if (undefined !== moduleDefinition.filters) {
      _.forEach(moduleDefinition.filters(), (filter, key) => {
        if (undefined === actionFilterCallbacks[key]) {
          actionFilterCallbacks[key] = []
        }

        actionFilterCallbacks[key].push(filter)
      })
    }

    if (undefined !== moduleDefinition.listeners) {
      _.forEach(moduleDefinition.listeners(), (listener, key) => {
        if (undefined === actionListenerCallbacks[key]) {
          actionListenerCallbacks[key] = []
        }

        actionListenerCallbacks[key].push(listener)
      })
    }

    if (undefined !== moduleDefinition.beforeTableComponents) {
      beforeTableComponents.push(
        moduleDefinition.beforeTableComponents()
      )
    }
  })

  const actionFilterObj = makeActionFilterObj()

  const store = createStore(
    combineReducers(reducers),
    compose(
      applyMiddleware(
        actionFilterObj.actionFilter.call(actionFilterObj, actionFilterCallbacks),
        actionListener(actionListenerCallbacks),
        thunkMiddleware
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  actionFilterObj.store = store

  _.forEach(bootFunctions, (bootFunction) => {
    bootFunction(store.dispatch)
  })

  //Test

  //End tests

  return {
    store,
    components,
    beforeTableComponents
  }
}