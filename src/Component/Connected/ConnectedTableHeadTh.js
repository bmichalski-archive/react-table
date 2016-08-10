import PresentationalTableHeadTh from '../Presentational/TableHeadTh'
import tableHeadThActionCreator from '../../Action/Creator/TableHeadThActionCreator'
import { connect } from 'react-redux'

export default connect(
  (state) => {
    const immutableSortContext = state.get('table').get('sortContext')

    let sortContext

    if (undefined === immutableSortContext) {
      sortContext = undefined
    } else {
      sortContext = immutableSortContext.toJS()
    }

    return {
      sortContext: sortContext
    }
  },
  tableHeadThActionCreator
)(PresentationalTableHeadTh)
