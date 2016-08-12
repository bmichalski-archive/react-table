import Immutable from 'immutable'

export default (sagaMiddleware, opts) => {
  const defaultState = Immutable.fromJS({
    saga: sagaMiddleware,
    location: undefined,
    loading: false,
    initialized: false,
    errorLoadingData: false,
    errorLoadingDataMessage: 'Error loading data.',
    loadingMessage: 'Loading data...',
    table: {
      data: [],
      total: 0,
      filteredTotal: 0,
      onCellClicked: opts.onCellClicked,
      getData: opts.getData,
      renderCell: opts.renderCell,
      sortContext: undefined
    },
    paginator: {
      buttons: [],
      showButtons: false,
      goToPageDisabled: true,
      firstDisabled: true,
      lastDisabled: true,
      previousDisabled: true,
      nextDisabled: true,
      totalPages: 0,
      totalResult: 0,
      page: 0,
      pageSize: 0,
      q: '',
      qFieldValue: '',
      goToPageValue: '',
      debounce: {
        timeout: undefined
      }
    }
  })

  return defaultState
}
