import React from 'react'
import { connect } from 'react-redux'
import PresentationalTableHeadRow from '../Presentational/TableHeadRow'

export default connect(
  (state, props) => {
    const children = []

    React.Children.forEach(props.children, (child, i) => {
      children.push(
        React.cloneElement(child, { key: i, rowIndex: props.rowIndex, cellIndex: i })
      )
    })

    return {
      children: children
    }
  }
)(PresentationalTableHeadRow)