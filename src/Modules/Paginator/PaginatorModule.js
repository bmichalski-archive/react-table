import makeModule from '../../Common/MakeModule'
import reducer from './Store/Reducer'
import DataModuleActionType from '../Data/Action/ActionType'
import PaginatorActionType from './Action/ActionType'
import GoToPageActionType from '../GoToPage/Action/ActionType'
import React from 'react'

const getClassName = (page, buttonPage) => {
  return page === buttonPage ? 'current' : null
}

export default makeModule(
  'paginator',
  () => {
    return {
      reducer,
      listeners: () => {
        return {
          [DataModuleActionType.DATA_REPLACE_DATA]: (action, dispatch, getState) => {
            const options = getState().get('asyncData').get('state').get('options').toJS()

            const makeLinkFromState = (page) => {
              return getState().get('routing').get('makeLink')(getState, { page: page })
            }

            const filteredTotal = action.data.info.filteredTotal
            const page = undefined === options.page ? 1 : options.page
            const pageSize = undefined === options.pageSize ? 10 : options.pageSize

            const totalPages = Math.ceil(filteredTotal / pageSize)

            const firstDisabled = page <= 1
            const lastDisabled = page >= totalPages
            const previousDisabled = firstDisabled
            const nextDisabled = lastDisabled

            const maximumPages = 10

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

            buttons.forEach((button) => {
              button.handleClick = (page, event) => {
                event.preventDefault()

                if (!button.disabled) {
                  dispatch({
                    type: GoToPageActionType.GO_TO_PAGE_UPDATE_GO_TO_PAGE,
                    page: page
                  })
                }
              }
            })

            dispatch({
              type: PaginatorActionType.PAGINATOR_REPLACE_COMPUTED_VIEW_MODEL_BUTTONS,
              buttons: buttons
            })
          }
        }
      }
    }
  }
)