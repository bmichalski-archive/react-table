import PresentationalTable from './Presentational/Table'
import PresentationalTableBody from './Presentational/TableBody'
import PresentationalTableRow from './Presentational/TableRow'

import ConnectedTable from './Connected/ConnectedTable'

export default {
  Presentational: {
    Table: PresentationalTable,
    TableBody: PresentationalTableBody,
    TableRow: PresentationalTableRow
  },
  Connected: {
    Table: ConnectedTable
  },
  Table: ConnectedTable
}