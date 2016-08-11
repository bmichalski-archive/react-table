'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Paginator = function Paginator(props) {
  var handleClick = function handleClick(page, disabled, event) {
    event.preventDefault();

    if (disabled) {
      return;
    }

    props.updatePage(page);
  };

  var handlePageSizeChange = function handlePageSizeChange(event) {
    props.updatePageSize(parseInt(event.target.value, 10));
  };

  var handleGoToPageChanged = function handleGoToPageChanged(event) {
    var rawValue = event.target.value;

    if ('' === rawValue) {
      props.updateGoToPageValue('');
    } else if (/^[0-9]+$/.test(rawValue) && rawValue >= 1) {
      props.updateGoToPageValue(parseInt(rawValue, 10));
    }
  };

  var handleGoToPageKeyDown = function handleGoToPageKeyDown(event) {
    if (13 === event.keyCode) {
      event.preventDefault();

      if (props.goToPageDisabled) {
        return;
      }

      props.updatePage(props.goToPageValue);
    }
  };

  var handleQChanged = function handleQChanged(event) {
    props.updateQFieldValue(event.target.value);
  };

  var handleGoToPageGoButtonClicked = function handleGoToPageGoButtonClicked(event) {
    event.preventDefault();

    if (props.goToPageDisabled) {
      return;
    }

    props.updatePage(props.goToPageValue);
  };

  var hasFilteringFeature = props.filtering;
  var hasGoToFeature = props.goTo;
  var hasPageSizeSelectorFeature = props.pageSizeSelector;

  var paginationFields = function () {
    if (!(hasPageSizeSelectorFeature || hasGoToFeature || hasFilteringFeature)) {
      return;
    }

    return _react2.default.createElement(
      'div',
      { className: 'row' },
      function () {
        if (hasFilteringFeature) {
          return _react2.default.createElement(
            'div',
            { className: 'col-md-5' },
            _react2.default.createElement(
              'label',
              null,
              'Filter',
              _react2.default.createElement('input', {
                type: 'text',
                className: 'form-control',
                value: props.qFieldValue,
                placeholder: 'Filter:',
                onChange: handleQChanged })
            )
          );
        }
      }(),
      function () {
        if (hasGoToFeature) {
          return _react2.default.createElement(
            'div',
            { className: 'col-md-4' },
            _react2.default.createElement(
              'div',
              { className: 'page-selector form-group' },
              _react2.default.createElement(
                'label',
                null,
                'Go to page',
                _react2.default.createElement(
                  'div',
                  { className: 'input-group' },
                  _react2.default.createElement('input', {
                    type: 'text',
                    className: 'form-control',
                    placeholder: 'Page:',
                    value: props.goToPageValue,
                    onChange: handleGoToPageChanged,
                    onKeyDown: handleGoToPageKeyDown }),
                  _react2.default.createElement(
                    'div',
                    { className: 'input-group-btn' },
                    _react2.default.createElement(
                      'button',
                      {
                        className: 'btn btn-default ',
                        disabled: props.goToPageDisabled,
                        onClick: handleGoToPageGoButtonClicked },
                      'Go'
                    )
                  )
                )
              )
            )
          );
        }
      }(),
      function () {
        if (hasPageSizeSelectorFeature) {
          return _react2.default.createElement(
            'div',
            { className: 'col-md-3' },
            _react2.default.createElement(
              'div',
              { className: 'page-size-selector form-group' },
              _react2.default.createElement(
                'label',
                null,
                'Page size ',
                _react2.default.createElement(
                  'select',
                  {
                    className: 'form-control',
                    value: props.pageSize,
                    onChange: handlePageSizeChange },
                  _react2.default.createElement(
                    'option',
                    { value: 10 },
                    '10'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 25 },
                    '25'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 50 },
                    '50'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 100 },
                    '100'
                  )
                )
              )
            )
          );
        }
      }()
    );
  }();

  return _react2.default.createElement(
    'div',
    { className: 'paginator-wrapper' },
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-md-4' },
        paginationFields
      ),
      function () {
        if (props.showButtons) {
          return _react2.default.createElement(
            'div',
            { className: 'col-md-8' },
            _react2.default.createElement(
              'ul',
              { className: 'pagination pull-right' },
              function () {
                var rows = [];

                var addPageButton = function addPageButton(page, key, content, link, className, disabled) {
                  rows.push(_react2.default.createElement(
                    'li',
                    {
                      key: key,
                      className: className },
                    _react2.default.createElement(
                      'a',
                      {
                        disabled: disabled,
                        href: link,
                        onClick: handleClick.bind(undefined, page, disabled) },
                      _react2.default.createElement(
                        'span',
                        null,
                        content
                      )
                    )
                  ));
                };

                props.buttons.forEach(function (button) {
                  addPageButton(button.page, button.key, button.content, button.link, button.className, button.disabled);
                });

                return rows;
              }()
            )
          );
        }
      }()
    )
  );
};

Paginator.propTypes = {
  buttons: _react.PropTypes.array.isRequired,
  showButtons: _react.PropTypes.bool.isRequired,
  goToPageDisabled: _react.PropTypes.bool.isRequired,
  page: _react.PropTypes.number.isRequired,
  pageSize: _react.PropTypes.number.isRequired,
  qFieldValue: _react.PropTypes.string.isRequired,
  goToPageValue: _react.PropTypes.any.isRequired,
  updateQFieldValue: _react.PropTypes.func.isRequired,
  updateGoToPageValue: _react.PropTypes.func.isRequired,
  updatePageSize: _react.PropTypes.func.isRequired,
  updatePage: _react.PropTypes.func.isRequired,
  pageSizeSelector: _react.PropTypes.bool.isRequired,
  goTo: _react.PropTypes.bool.isRequired,
  filtering: _react.PropTypes.bool.isRequired
};

Paginator.defaultProps = {
  pageSizeSelector: false,
  goTo: false,
  filtering: false
};

exports.default = Paginator;