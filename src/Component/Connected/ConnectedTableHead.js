import React from 'react'
import { connect } from 'react-redux'
import PresentationalTableHead from '../Presentational/TableHead'
import tableHeadActionCreator from '../../Action/Creator/TableHeadActionCreator'

export default connect(
  (state, props) => {
    const children = []

    React.Children.forEach(props.children, (child, i) => {
      children.push(
        React.cloneElement(child, { key: i, rowIndex: i })
      )
    })

    return {
      children: children
    }
  },
  tableHeadActionCreator
)(PresentationalTableHead)