import Immutable from 'immutable'

export default Immutable.fromJS({
  state: {
    isDataLoading: false,
    hasDataBeenInitialized: false,
    hasBeenErrorLoadingData: false
  },
  computedViewModel: {
    props: {},
    head: {
      rows: []
    },
    bodys: []
  }
})