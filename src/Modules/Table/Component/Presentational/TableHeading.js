import React from 'react'

export default (props) => {
  return (
    <th {...props.props}>
      {props.children}
    </th>
  )
}