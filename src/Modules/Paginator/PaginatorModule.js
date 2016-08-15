import React from 'react'

const PaginatorModule = () => {
  return {
    
    beforeTableComponents: () => {
      return (
        <div>test</div>
      )
    }
  }
}

PaginatorModule.moduleName = 'paginator'

export default PaginatorModule