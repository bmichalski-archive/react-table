export default (actionListenerCallbacks) => {
  return store => next => action => {
    const result = next(action)

    const callbacks = actionListenerCallbacks[action.type]

    if (undefined !== callbacks) {
      callbacks.forEach((cb) => {
        cb(store.dispatch, action)
      })
    }

    return result
  }
}