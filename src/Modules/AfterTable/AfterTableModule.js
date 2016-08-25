import reducer from './Store/Reducer'
import AfterTableLayout from './Component/Connected/ConnectedBeforeAfterLayout'
import makeModule from '../../Common/MakeModule'

export default makeModule(
  'afterTable',
  () => {
    return {
      reducer,
      components: {
        AfterTableLayout
      }
    }
  }
)
