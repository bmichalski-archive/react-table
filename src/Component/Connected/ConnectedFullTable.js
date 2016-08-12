import React from 'react'
import PresentationalFullTable from '../Presentational/FullTable'
import actionCreator from '../../Action/Creator/ActionCreator'
import { connect } from 'react-redux'

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
        children: props.children
      }
    },
    actionCreator
  )(
    PresentationalFullTable
  )
}
