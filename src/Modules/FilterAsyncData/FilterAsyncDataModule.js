import makeModule from '../../Common/MakeModule'
import FilterActionType from '../Filter/Action/ActionType'
import AsyncDataActionType from '../AsyncData/Action/ActionType'


const makeOnFilterUpdateQFieldValue = () => {
  let updateQFieldValueTimeout = undefined

  return (overrideDelay, action, dispatch) => {
    if (undefined !== updateQFieldValueTimeout) {
      clearTimeout(updateQFieldValueTimeout)
    }

    /**
     * Taking snapshot of value,
     * important to get action.qFieldValue as it was when invoking function,
     * not as it will be 300 ms later
     */
    const rawQValue = action.qFieldValue
    const q = '' === rawQValue ? undefined : rawQValue

    let delay = undefined

    if (undefined === overrideDelay) {
      if (undefined === action.delay) {
        delay = 300
      } else {
        delay = action.delay
      }
    } else {
      delay = overrideDelay
    }

    const doUpdate = () => {
      dispatch({
        type: AsyncDataActionType.ASYNC_UPDATE_OPTIONS,
        options: {
          q: q
        }
      })

      dispatch({
        type: AsyncDataActionType.ASYNC_DATA_UPDATE_DATA
      })
    }

    if (0 === delay) {
      updateQFieldValueTimeout = undefined

      doUpdate()
    } else {
      updateQFieldValueTimeout = setTimeout(doUpdate, delay)
    }
  }
}

export default makeModule(
  'filterAsyncData',
  () => {
    const onFilterUpdateQFieldValue = makeOnFilterUpdateQFieldValue()

    return {
      listeners: () => {
        return {
          [FilterActionType.FILTER_UPDATE_Q_FIELD_VALUE]: onFilterUpdateQFieldValue.bind(undefined, undefined),
          [FilterActionType.FILTER_RESET_Q_FIELD_VALUE]: onFilterUpdateQFieldValue.bind(undefined, 0)
        }
      }
    }
  }
)