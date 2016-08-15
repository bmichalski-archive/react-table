import React from 'react'

export default (props) => {
  return (
    <td {...props.props}>
      {props.children}
    </td>
  )
}