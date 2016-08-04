'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableWrapper = function (_React$Component) {
  _inherits(TableWrapper, _React$Component);

  function TableWrapper(props) {
    _classCallCheck(this, TableWrapper);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TableWrapper).call(this, props));

    _this.paginator = new ReactRouterPaginator(_this.props.location);
    return _this;
  }

  _createClass(TableWrapper, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.paginator.location = newProps.location;
    }
  }, {
    key: 'getData',
    value: function getData() {
      var from = (this.paginator.page - 1) * this.paginator.pageSize;
      var end = from + this.paginator.pageSize;

      return new Promise(function (resolve) {
        resolve({
          result: sampleResult.slice(from, end),
          info: {
            total: sampleResult.length * 2,
            totalFiltered: sampleResult.length
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        Table,
        {
          onCellClicked: TableWrapper.onCellClicked,
          getData: this.getData.bind(this),
          renderCell: function renderCell(data) {
            return data.content;
          },
          paginator: this.paginator },
        React.createElement(
          TableHead,
          null,
          React.createElement(
            TableHeadRow,
            null,
            React.createElement(
              TableHeadTh,
              null,
              'Id'
            ),
            React.createElement(
              TableHeadTh,
              null,
              'First column'
            ),
            React.createElement(
              TableHeadTh,
              null,
              'Second column'
            )
          )
        )
      );
    }
  }], [{
    key: 'onCellClicked',
    value: function onCellClicked(data, cellIndex, rowIndex) {
      var str = JSON.stringify({ cellIndex: cellIndex, rowIndex: rowIndex, data: data });

      document.getElementById('row-clicked').innerHTML = 'Row clicked: ' + str;
    }
  }]);

  return TableWrapper;
}(React.Component);

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

ReactDOM.render(React.createElement(
  Router,
  { history: ReactRouter.browserHistory },
  React.createElement(
    Route,
    { path: '/', component: TableWrapper },
    React.createElement(Route, { path: '*', component: TableWrapper })
  )
), document.getElementById('main-container'));

document.getElementById('row-clicked').innerHTML = 'Row clicked:';