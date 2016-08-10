import React from 'react'

const result = [
  [
    {
      content: 0
    },
    {
      content: 'Foo'
    },
    {
      content: 'Bar'
    }
  ],
  [
    {
      content: 1
    },
    {
      content: 'Baz'
    },
    {
      content: 'Qux'
    }
  ],
  [
    {
      content: 2
    },
    {
      content: (<i className="glyphicon glyphicon-ok"></i>)
    },
    {
      content: (<i className="glyphicon glyphicon-star"></i>)
    }
  ]
]

for(var i = 3; i < 153; i += 1) {
  result.push(
    [
      {
        content: i
      },
      {
        content: 'Foo'
      },
      {
        content: 'Bar'
      }
    ]
  )
}

export default result