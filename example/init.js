"use strict";

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

ReactDOM.render(React.createElement(
  Router,
  { history: ReactRouter.browserHistory },
  React.createElement(
    Route,
    { path: "/", component: TableWrapper },
    React.createElement(Route, { path: "*", component: TableWrapper })
  )
), document.getElementById('main-container'));

document.getElementById('row-clicked').innerHTML = 'Row clicked:';