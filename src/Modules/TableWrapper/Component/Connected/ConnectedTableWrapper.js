import { connect } from 'react-redux'
import PresentationalTableWrapper from '../Presentational/TableWrapper'

export default connect(
  (state) => {
    const common = state.get('common')
    const tableWrapperState = state.get('tableWrapper').get('state')

    // const beforeTableComponents = state.get('beforeTable').get('components').toJS()

    return {
      Table: common.get('components').get('table').toJS().Table,
      BeforeTableLayout: common.get('components').get('beforeTable').toJS().BeforeTableLayout,
      overrideTable: tableWrapperState.get('overrideTable'),
      overrideTableWith: tableWrapperState.get('overrideTableWith')
    }
  }
)(PresentationalTableWrapper)
