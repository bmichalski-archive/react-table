import { takeEvery } from 'redux-saga'
import ActionType from '../Action/Type/ActionType'
import { isPositiveInteger } from '../Common'
import { put } from 'redux-saga/effects'
import React from 'react'

function *updateGoToPageDisabled(getState) {
  const goToPageValue = getState().get('paginator').get('goToPageValue')
  const goToPageDisabled = !(isPositiveInteger(goToPageValue) && goToPageValue >= 1)

  yield put(
    {
      type: ActionType.UPDATE_GO_TO_PAGE_DISABLED,
      goToPageDisabled
    }
  )
}

function getClassName(page, buttonPage) {
  return page === buttonPage ? 'current' : null
}

function *updatePaginator(getState, makeLinkFromState) {
  const state = getState()

  const paginator = state.get('paginator')

  const filteredTotal = state.get('table').get('filteredTotal')
  const page = paginator.get('page')
  const pageSize = paginator.get('pageSize')

  const totalPages = Math.ceil(filteredTotal / pageSize)

  const firstDisabled = page <= 1
  const lastDisabled = page >= totalPages
  const previousDisabled = firstDisabled
  const nextDisabled = lastDisabled

  const maximumPages = 10

  const location = state.get('location').toJS()
  const q = paginator.get('q')
  const buttons = []

  let showButtons

  function addButtons(from, to) {
    const previousPage = page - 1
    const nextPage = page + 1
    const lastPage = totalPages

    showButtons = to > 1

    buttons.push({
      key: 'first',
      page: 1,
      content: (<span>&laquo;</span>),
      link: firstDisabled ? '' : makeLinkFromState(1),
      disabled: firstDisabled,
      className: firstDisabled ? 'disabled' : undefined
    })

    buttons.push({
      key: 'previous',
      page: previousPage,
      content: (<span>&lsaquo;</span>),
      link: previousDisabled ? '' : makeLinkFromState(previousPage),
      disabled: previousDisabled,
      className: previousDisabled ? 'disabled' : undefined
    })

    for (let i = from - 1; i < to; i += 1) {
      const buttonPage = i + 1

      buttons.push({
        page: buttonPage,
        key: buttonPage,
        content: buttonPage,
        link: makeLinkFromState(buttonPage),
        disabled: false,
        className: getClassName(page, buttonPage)
      })
    }

    buttons.push({
      key: 'next',
      page: nextPage,
      content: (<span>&rsaquo;</span>),
      link: nextDisabled ? '' : makeLinkFromState(nextPage),
      disabled: nextDisabled,
      className: nextDisabled ? 'disabled' : undefined
    })

    buttons.push({
      key: 'last',
      page: lastPage,
      content: (<span>&raquo;</span>),
      link: lastDisabled ? '' : makeLinkFromState(lastPage),
      disabled: lastDisabled,
      className: lastDisabled ? 'disabled' : undefined
    })
  }

  if (totalPages <= maximumPages) {
    addButtons(1, totalPages)
  } else {
    const mid = maximumPages / 2 + 1

    if (page <= mid) {
      addButtons(1, maximumPages)
    } else if (page >= (totalPages - (mid - 2))) {
      addButtons(
        totalPages - (maximumPages - 1),
        totalPages
      )
    } else {
      const paginatorLastPage = page + (mid - 2)

      addButtons(
        page - (mid - 1),
        paginatorLastPage < totalPages ? paginatorLastPage : totalPages
      )
    }
  }

  yield put(
    {
      type: ActionType.UPDATE_TOTAL_RESULT_AND_PAGES_AND_LINKS,
      buttons,
      showButtons,
      firstDisabled,
      lastDisabled,
      nextDisabled,
      previousDisabled,
      totalPages,
      totalResult: filteredTotal
    }
  )
}

function *updateQSaga(stateAwareRouting) {
  yield* takeEvery(ActionType.UPDATE_Q, stateAwareRouting.navigateToPage)
}

function *updatePageSaga(getState, stateAwareRouting) {
  yield [
    takeEvery(ActionType.UPDATE_PAGE, stateAwareRouting.navigateToPage),
    takeEvery(ActionType.UPDATE_PAGE, updatePaginator.bind(undefined, getState, stateAwareRouting.makeLinkFromState))
  ]
}

function *updatePageSizeSaga(getState, stateAwareRouting) {
  yield [
    takeEvery(ActionType.UPDATE_PAGE_SIZE, stateAwareRouting.navigateToPage),
    takeEvery(ActionType.UPDATE_PAGE_SIZE, updatePaginator.bind(undefined, getState, stateAwareRouting.makeLinkFromState))
  ]
}

function *updateGoToPageValueSaga(getState) {
  yield *takeEvery(ActionType.UPDATE_GO_TO_PAGE_VALUE, updateGoToPageDisabled.bind(undefined, getState))
}

function *updateSortContextSaga(getState, stateAwareRouting) {
  yield *takeEvery(ActionType.UPDATE_SORT_CONTEXT, updatePaginator.bind(undefined, getState, stateAwareRouting.makeLinkFromState))
}

function *updateDataSaga(getState, stateRouting) {
  yield *takeEvery(ActionType.UPDATE_DATA, updatePaginator.bind(undefined, getState, stateRouting.makeLinkFromState))
}

const getPaginatorSaga = (getState, stateAwareRouting) => {
  return [
    updateQSaga(stateAwareRouting),
    updatePageSaga(getState, stateAwareRouting),
    updatePageSizeSaga(getState, stateAwareRouting),
    updateGoToPageValueSaga(getState),
    updateSortContextSaga(getState, stateAwareRouting),
    updateDataSaga(getState, stateAwareRouting)
  ]
}

export default getPaginatorSaga