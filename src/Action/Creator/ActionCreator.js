import ActionType from '../Type/ActionType'

function onTableBodyCellClicked(rowData, cellIndex, rowIndex) {
  return {
    type: ActionType.TABLE_BODY_CELL_CLICKED,
    rowData,
    cellIndex,
    rowIndex
  }
}

export default { onTableBodyCellClicked }