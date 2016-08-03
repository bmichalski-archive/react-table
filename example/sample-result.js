var sampleResult = (function() {
  var result = [
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
        content: React.createElement('i', { className: 'glyphicon glyphicon-ok' })
      },
      {
        content: React.createElement('i', { className: 'glyphicon glyphicon-star' })
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

  return result
})()