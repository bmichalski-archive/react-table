import reducer from './Store/Reducer'

const CommonModule = () => {
  return {
    reducer: reducer
  }
}

CommonModule.moduleName = 'common'

export default CommonModule