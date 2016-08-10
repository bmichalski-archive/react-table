import { useRouterHistory } from 'react-router'
import { createHistory } from 'history'
import qs from 'qs'
import Promise from 'bluebird'
import { render } from 'react-dom'

Promise.config({
  warnings: true,
  longStackTraces: true,
  cancellation: true
})

export default (cb) => {
  const browserHistory = useRouterHistory(createHistory)({
    parseQueryString: qs.parse,
    stringifyQuery: qs.stringify
  })

  cb(browserHistory, render)
}