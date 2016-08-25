import { connect } from 'react-redux'
import PresentationalAfterTableLayout from '../Presentational/AfterTableLayout'

export default connect(
  (state) => {
    const slot = state.get('afterTable').get('state').get('slot')

    return {
      slot
    }
  }
)(PresentationalAfterTableLayout)