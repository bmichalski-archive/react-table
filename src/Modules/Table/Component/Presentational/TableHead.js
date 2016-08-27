import React from 'react'

export default (props) => {
  return (
    <thead {...props.props}>
      {props.children}
    </thead>
  )
}
