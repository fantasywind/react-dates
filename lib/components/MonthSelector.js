Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _reactMomentProptypes = require('react-moment-proptypes');

var _reactMomentProptypes2 = _interopRequireDefault(_reactMomentProptypes);

var _airbnbPropTypes = require('airbnb-prop-types');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _defaultPhrases = require('../defaultPhrases');

var _getPhrasePropTypes = require('../utils/getPhrasePropTypes');

var _getPhrasePropTypes2 = _interopRequireDefault(_getPhrasePropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
  month: _reactMomentProptypes2['default'].momentObj,
  onMonthSelect: _propTypes2['default'].func,
  onYearSelect: _propTypes2['default'].func,

  // internationalization
  phrases: _propTypes2['default'].shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.CalendarDayPhrases))
});

var defaultProps = {
  month: (0, _moment2['default'])(),
  onMonthSelect: function () {
    function onMonthSelect() {}

    return onMonthSelect;
  }(),
  onYearSelect: function () {
    function onYearSelect() {}

    return onYearSelect;
  }(),


  // internationalization
  phrases: _defaultPhrases.CalendarDayPhrases
};

var MonthSelector = function (_React$Component) {
  _inherits(MonthSelector, _React$Component);

  function MonthSelector() {
    _classCallCheck(this, MonthSelector);

    return _possibleConstructorReturn(this, (MonthSelector.__proto__ || Object.getPrototypeOf(MonthSelector)).apply(this, arguments));
  }

  _createClass(MonthSelector, [{
    key: 'shouldComponentUpdate',
    value: function () {
      function shouldComponentUpdate(nextProps, nextState) {
        return (0, _reactAddonsShallowCompare2['default'])(this, nextProps, nextState);
      }

      return shouldComponentUpdate;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props = this.props,
            month = _props.month,
            onMonthSelect = _props.onMonthSelect,
            onYearSelect = _props.onYearSelect;


        var className = (0, _classnames2['default'])('MonthSelector');
        var selectableYears = [];
        var currentYear = month.get('year');
        for (var i = 50; i >= 1; i -= 1) {
          selectableYears.push(currentYear - i);
        }
        selectableYears.push(currentYear);
        for (var _i = 1; _i <= 5; _i += 1) {
          selectableYears.push(currentYear + _i);
        }

        return _react2['default'].createElement(
          'div',
          { className: className },
          _react2['default'].createElement(
            'select',
            { onChange: function () {
                function onChange(e) {
                  return onMonthSelect(month, e.target.value);
                }

                return onChange;
              }(), value: month.get('month'), className: 'MonthSelector__month_select' },
            _react2['default'].createElement(
              'option',
              { value: 0 },
              'January'
            ),
            _react2['default'].createElement(
              'option',
              { value: 1 },
              'February'
            ),
            _react2['default'].createElement(
              'option',
              { value: 2 },
              'March'
            ),
            _react2['default'].createElement(
              'option',
              { value: 3 },
              'April'
            ),
            _react2['default'].createElement(
              'option',
              { value: 4 },
              'May'
            ),
            _react2['default'].createElement(
              'option',
              { value: 5 },
              'June'
            ),
            _react2['default'].createElement(
              'option',
              { value: 6 },
              'July'
            ),
            _react2['default'].createElement(
              'option',
              { value: 7 },
              'August'
            ),
            _react2['default'].createElement(
              'option',
              { value: 8 },
              'September'
            ),
            _react2['default'].createElement(
              'option',
              { value: 9 },
              'October'
            ),
            _react2['default'].createElement(
              'option',
              { value: 10 },
              'November'
            ),
            _react2['default'].createElement(
              'option',
              { value: 11 },
              'December'
            )
          ),
          _react2['default'].createElement(
            'select',
            { onChange: function () {
                function onChange(e) {
                  return onYearSelect(month, e.target.value);
                }

                return onChange;
              }(), value: month.get('year'), className: 'MonthSelector__year_select' },
            selectableYears.map(function (year) {
              return _react2['default'].createElement(
                'option',
                { value: year, key: year },
                year
              );
            })
          )
        );
      }

      return render;
    }()
  }]);

  return MonthSelector;
}(_react2['default'].Component);

exports['default'] = MonthSelector;


MonthSelector.propTypes = propTypes;
MonthSelector.defaultProps = defaultProps;