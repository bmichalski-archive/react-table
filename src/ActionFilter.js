import assert from 'assert'

export default () => {
  return {
    actionFilter: function(actionFiltersCallbacks) {
      return store => next => action => {
        if (undefined === action) {
          return
        }

        const callbacks = actionFiltersCallbacks[action.type]

        if (undefined !== callbacks) {
          callbacks.forEach((cb) => {
            action = cb(action, this.store.dispatch, this.store.getState, this.store)

            assert.notStrictEqual(undefined, action)
          })
        }

        return next(action)
      }
    }
  }
}
