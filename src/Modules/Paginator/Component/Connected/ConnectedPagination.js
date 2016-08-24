import { connect } from 'react-redux'
import PresentationalPagination from '../Presentational/Pagination'

export default connect(
  (state) => {
    const buttons = state.get('paginator').get('computedViewModel').get('buttons').toJS()

    return {
      buttons: buttons
    }
  }
)(PresentationalPagination)