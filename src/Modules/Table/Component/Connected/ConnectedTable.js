import { connect } from 'react-redux'
import ContainerTable from '../Container/ContainerTable'

export default connect(
  (state) => {
    const viewModel = state.get('table').get('computedViewModel')

    return {
      props: viewModel.get('props').toJS(),
      head: viewModel.get('head').toJS(),
      bodys: viewModel.get('bodys').toJS()
    }
  }
)(ContainerTable)