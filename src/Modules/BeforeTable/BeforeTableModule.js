import reducer from './Store/Reducer'
import BeforeTableLayout from './Component/Connected/ConnectedBeforeTableLayout'

const BeforeTableModule = () => {
  return {
    reducer,
    components: {
      BeforeTableLayout
    }
  }
}

BeforeTableModule.moduleName = 'beforeTable'

export default BeforeTableModule