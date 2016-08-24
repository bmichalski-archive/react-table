export default (preActionHandlingCallbacks, postActionHandlingCallbacks) => {
  return store => next => action => {
    const preCb = preActionHandlingCallbacks[action.type]
    const postCb = postActionHandlingCallbacks[action.type]

    if (undefined !== preCb) {
      preCb.forEach((cb) => {
        cb(action, store.dispatch, store.getState)
      })
    }

    const result = next(action)

    if (undefined !== postCb) {
      postCb.forEach((cb) => {
        cb(action, store.dispatch, store.getState)
      })
    }

    return result
  }
}