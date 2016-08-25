import { connect } from 'react-redux'
import PresentationalPagination from '../Presentational/Pagination'

export default connect(
  (state) => {
    const paginatorComputedViewModel = state.get('paginator').get('computedViewModel').toJS()

    const buttons = paginatorComputedViewModel.buttons
    const showButtons = paginatorComputedViewModel.showButtons

    return {
      buttons,
      showButtons
    }
  }
)(PresentationalPagination)