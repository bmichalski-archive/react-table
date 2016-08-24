import TableWrapper from './Component/Connected/ConnectedTableWrapper'
import reducer from './Store/Reducer'

const TableWrapperModule = (opts) => {
  return {
    reducer: reducer,
    components: {
      TableWrapper
    }
  }
}

TableWrapperModule.moduleName = 'tableWrapper'

export default TableWrapperModule