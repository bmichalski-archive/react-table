import React from 'react'
import PresentationalFullTable from '../Presentational/FullTable'
import actionCreator from '../../Action/Creator/ActionCreator'
import { connect } from 'react-redux'
import TableHeadThWrapper from './ConnectedTableHeadTh'

const getChildren = (props) => {
  const reactTableHead = React.Children.only(props.children)
  const reactTableHeadTr = React.Children.only(reactTableHead.props.children)

  //TODO Check children classes

  return React.cloneElement(
    reactTableHead,
    {
      children: React.cloneElement(
        reactTableHeadTr,
        {
          children: React.Children.map(reactTableHeadTr.props.children, (reactTableHeadTh) => {
            return (
              <TableHeadThWrapper {...reactTableHeadTh.props} />
            )
          })
        }
      )
    }
  )
}

export default (props) => {
  return connect(
    (state) => {
      return {
        loading: state.get('loading'),
        initialized: state.get('initialized'),
        errorLoadingData: state.get('errorLoadingData'),
        errorLoadingDataMessage: state.get('errorLoadingDataMessage'),
        loadingMessage: state.get('loadingMessage'),
        table: state.get('table').toJS(),
        children: getChildren(props)
      }
    },
    actionCreator
  )(
    PresentationalFullTable
  )
}
