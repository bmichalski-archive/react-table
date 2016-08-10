import ActionType from '../Action/Type/ActionType'
import { put } from 'redux-saga/effects'

function makeLinkFromState(makeLink, getState, pageOverride) {
  const state = getState()

  const location = state.get('location').toJS()
  const { page: paginatorPage, pageSize, q } = state.get('paginator').toJS()
  const immutableSortContext = state.get('table').get('sortContext')

  let sortContext

  if (undefined === immutableSortContext) {
    sortContext = undefined
  } else {
    sortContext = immutableSortContext.toJS()
  }

  let page

  if (undefined === pageOverride) {
    page = paginatorPage
  } else {
    page = pageOverride
  }

  return makeLink(location, page, pageSize, q, sortContext)
}

function* navigateToPage(makeLink, goToPage, getState) {
  goToPage(
    makeLinkFromState(makeLink, getState)
  )

  yield put({ type: ActionType.NAVIGATE_TO_PAGE })
}

const makeStateAwareRouting = (getState, routing) => {
  return {
    navigateToPage: navigateToPage.bind(undefined, routing.makeLink, routing.goToPage, getState),
    makeLinkFromState: makeLinkFromState.bind(undefined, routing.makeLink, getState)
  }
}

export default makeStateAwareRouting