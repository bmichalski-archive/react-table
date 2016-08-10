import ActionType from '../Type/ActionType'

function startDebounceQ(timeout) {
  return {
    type: ActionType.START_DEBOUNCE_Q,
    timeout: timeout
  }
}

function updateGoToPageValue(goToPageValue) {
  return {
    type: ActionType.UPDATE_GO_TO_PAGE_VALUE,
    goToPageValue
  }
}

function updatePage(page) {
  return {
    type: ActionType.UPDATE_PAGE,
    page
  }
}

function updatePageSize(pageSize) {
  return (dispatch) => {
    dispatch({
      type: ActionType.UPDATE_PAGE_SIZE,
      pageSize
    })

    dispatch(updatePage(1))
    dispatch(updateGoToPageValue(''))
  }
}

function updateQ(q) {
  return (dispatch, getState) => {
    clearTimeout(
      getState().get('paginator').get('debounce').get('timeout')
    )

    dispatch(startDebounceQ(
      setTimeout(() => {
        dispatch({
          type: ActionType.UPDATE_Q,
          q
        })

        dispatch(updatePage(1))
        dispatch(updateGoToPageValue(''))
      }, 300)
    ))
  }
}

function doUpdateQFieldValue(qFieldValue) {
  return {
    type: ActionType.UPDATE_Q_FIELD_VALUE,
    qFieldValue: qFieldValue
  }
}

function updateQFieldValue(qFieldValue) {
  return (dispatch) => {
    dispatch(doUpdateQFieldValue(qFieldValue))

    dispatch(updateQ(qFieldValue))
  }
}

export default {
  updateQFieldValue,
  updateGoToPageValue,
  updatePageSize,
  updatePage
}