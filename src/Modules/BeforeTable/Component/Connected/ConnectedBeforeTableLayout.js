import { connect } from 'react-redux'
import PresentationalBeforeTableLayout from '../Presentational/BeforeTableLayout'

export default connect(
  (state) => {
    const rows = state.get('beforeTable').get('state').get('rows').toJS()

    return {
      rows
    }
  }
)(PresentationalBeforeTableLayout)