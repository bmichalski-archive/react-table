import TableWrapper from './Component/Connected/ConnectedTableWrapper'
import reducer from './Store/Reducer'
import makeModule from '../../Common/MakeModule'

export default makeModule(
  'tableWrapper',
  () => {
    return {
      reducer,
      components: {
        TableWrapper
      }
    }
  }
)
