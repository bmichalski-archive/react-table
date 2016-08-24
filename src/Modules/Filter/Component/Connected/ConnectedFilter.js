import { connect } from 'react-redux'
import FilterActionType from '../../Action/ActionType'
import Filter from '../Presentational/Filter'

export default connect(
  (state) => {
    const filterState = state.get('filter').get('state').toJS()

    return {
      qFieldValue: filterState.qFieldValue
    }
  },
  {
    handleQChanged: (event) => {
      return {
        type: FilterActionType.FILTER_UPDATE_Q_FIELD_VALUE,
        qFieldValue: event.target.value
      }
    },
    resetButtonClicked: () => {
      return {
        type: FilterActionType.FILTER_RESET_Q_FIELD_VALUE
      }
    }
  }
)(Filter)