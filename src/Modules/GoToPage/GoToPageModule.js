import makeModule from '../../Common/MakeModule'
import reducer from './Store/Reducer'
import GoToPageActionType from './Action/ActionType'

function isPositiveInteger(value) {
  return /^[0-9]+$/.test(value) && value >= 1
}

const onFieldValueChangedEvent = (action, dispatch) => {
  const value = action.goToPageFieldValue

  if (!('' === value || isPositiveInteger(value))) {
    return
  }

  dispatch({
    type: GoToPageActionType.GO_TO_PAGE_UPDATE_GO_TO_PAGE_FIELD_VALUE,
    goToPageFieldValue: value
  })
}

function getPageFromGetState(getState) {
  const goToPageState = getState().get('goToPage').get('state').toJS()
  const goToPageFieldValue = goToPageState.goToPageFieldValue

  return '' === goToPageFieldValue ? undefined : parseInt(goToPageFieldValue, 10)
}

function dispatchGoToPageUpdateGoToPageFromGetState(dispatch, getState) {
  const page = getPageFromGetState(getState)

  dispatch({
    type: GoToPageActionType.GO_TO_PAGE_UPDATE_GO_TO_PAGE,
    page
  })
}

export default makeModule(
  'goToPage',
  () => {
    return {
      reducer,
      listeners: () => {
        return {
          [GoToPageActionType.GO_TO_PAGE_FIELD_VALUE_CHANGED_EVENT]: onFieldValueChangedEvent,
          [GoToPageActionType.GO_TO_PAGE_KEY_DOWN_EVENT]: (action, dispatch, getState) => {
            if (13 !== action.keyCode) {
              return
            }

            dispatchGoToPageUpdateGoToPageFromGetState(dispatch, getState)
          },
          [GoToPageActionType.GO_TO_PAGE_GO_BUTTON_CLICKED_EVENT]: (action, dispatch, getState) => {
            dispatchGoToPageUpdateGoToPageFromGetState(dispatch, getState)
          }
        }
      }
    }
  }
)