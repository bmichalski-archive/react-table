import { connect } from 'react-redux'
import Paginator from '../Presentational/Paginator'
import paginatorActionCreator from '../../Action/Creator/PaginatorActionCreator'

export default connect(
  (state) => {
    const paginator = state.get('paginator')

    return {
      buttons: paginator.get('buttons').toJS(),
      showButtons: paginator.get('showButtons'),
      goToPageDisabled: paginator.get('goToPageDisabled'),
      totalPages: paginator.get('totalPages'),
      page: paginator.get('page'),
      pageSize: paginator.get('pageSize'),
      qFieldValue: paginator.get('qFieldValue'),
      goToPageValue: paginator.get('goToPageValue')
    }
  },
  paginatorActionCreator
)(Paginator)
