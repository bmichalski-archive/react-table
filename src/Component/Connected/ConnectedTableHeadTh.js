import PresentationalTableHeadTh from '../Presentational/TableHeadTh'
import tableHeadThActionCreator from '../../Action/Creator/TableHeadThActionCreator'
import { connect } from 'react-redux'

export default connect(
  (state, props) => {
    const rows = state.get('table').get('head').get('rows').toJS()

    let className = ''
    let isCurrentSort = false
    let iconClassName = ''

    if (undefined !== rows[props.rowIndex] && undefined !== rows[props.rowIndex][props.cellIndex]) {
      className = rows[props.rowIndex][props.cellIndex].className
      isCurrentSort = rows[props.rowIndex][props.cellIndex].isCurrentSort
      iconClassName = rows[props.rowIndex][props.cellIndex].iconClassName
    }

    return {
      className,
      isCurrentSort,
      iconClassName
    }
  },
  tableHeadThActionCreator
)(PresentationalTableHeadTh)
