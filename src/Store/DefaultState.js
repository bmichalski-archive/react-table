import Immutable from 'immutable'

export default (opts) => {
  const defaultState = Immutable.fromJS({
    opts: {
      table: {
        getData: opts.getData,
        renderCell: opts.renderCell
      }
    },
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
      sortContext: undefined,
      head: {
        rows: {}
      },
      body: {
        rows: {}
      }
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
