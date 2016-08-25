import { connect } from 'react-redux'
import PresentationalTableWrapper from '../Presentational/TableWrapper'

export default connect(
  (state) => {
    const common = state.get('common')
    const tableWrapperState = state.get('tableWrapper').get('state')

    return {
      Table: common.get('components').get('table').toJS().Table,
      BeforeTableLayout: common.get('components').get('beforeTable').toJS().BeforeTableLayout,
      AfterTableLayout: common.get('components').get('afterTable').toJS().AfterTableLayout,
      overrideTable: tableWrapperState.get('overrideTable'),
      overrideTableWith: tableWrapperState.get('overrideTableWith'),
      overrideTableInnerAndAfterTableLayout: tableWrapperState.get('overrideTableInnerAndAfterTableLayout'),
      overrideTableInnerAndAfterTableLayoutWith: tableWrapperState.get('overrideTableInnerAndAfterTableLayoutWith')
    }
  }
)(PresentationalTableWrapper)
