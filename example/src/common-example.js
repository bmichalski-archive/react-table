import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import DemoTableWrapper from './DemoTableWrapper'
import Promise from 'bluebird'

Promise.config({
  warnings: true,
  longStackTraces: true,
  cancellation: true
})

export default (sampleResult, loadingDelay = 200) => {
  const Component = (props) => {
    return (
      <DemoTableWrapper
        sampleResult={sampleResult}
        {...props}
        loadingDelay={loadingDelay} />
    )
  }

  render(
    (
      <Router history={browserHistory}>
        <Route path="/" component={Component}>
          <Route path="*" component={Component} />
        </Route>
      </Router>
    ),
    document.getElementById('main-container')
  )

  document.getElementById('row-clicked').innerHTML = 'Row clicked:'
}