import Immutable from 'immutable'

/**
 * sort structure:
 *   {
 *     sort: undefined, //string, field name
 *     order: undefined //string, asc or desc
 *   }
 *
 * @returns {Immutable.Map}
 */
export default () => {
  const defaultState = Immutable.fromJS({
    // opts: {
    //   paginator: {
    //     debounce: {
    //       timeout: undefined
    //     }
    //   }
    // },
    // context: {
    //   location: undefined
    // },
    // sort: undefined,
    // paginator: {
    //   state: {
    //     showButtons: false,
    //     isGoToPageDisabled: true,
    //     isFirstDisabled: true,
    //     isLastDisabled: true,
    //     isPreviousDisabled: true,
    //     isNextDisabled: true,
    //     fields: {
    //       q: '',
    //       goToPage: ''
    //     }
    //   },
    //   computedViewModel: {
    //     buttons: []
    //   },
    //   data: {
    //     totalPages: 0,
    //     totalResult: 0,
    //     page: 0,
    //     pageSize: 0,
    //     q: ''
    //   }
    // }
  })

  return defaultState
}
