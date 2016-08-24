import makeModule from '../../Common/MakeModule'
import reducer from './Store/Reducer'

export default makeModule(
  'pageSize',
  () => {
    return {
      reducer
    }
  }
)