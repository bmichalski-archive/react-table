const Router = ReactRouter.Router
const Route = ReactRouter.Route

ReactDOM.render(
  (
    <Router history={ReactRouter.browserHistory}>
      <Route path="/" component={TableWrapper}>
        <Route path="*" component={TableWrapper} />
      </Route>
    </Router>
  ),
  document.getElementById('main-container')
)

document.getElementById('row-clicked').innerHTML = 'Row clicked:'