"use strict";
var PropTypes = require("prop-types")

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _DateTimePickerDateJs = require("./DateTimePickerDate.js");

var _DateTimePickerDateJs2 = _interopRequireDefault(_DateTimePickerDateJs);

var _DateTimePickerTimeJs = require("./DateTimePickerTime.js");

var _DateTimePickerTimeJs2 = _interopRequireDefault(_DateTimePickerTimeJs);

var _ConstantsJs = require("./Constants.js");

var _ConstantsJs2 = _interopRequireDefault(_ConstantsJs);

var DateTimePicker = (function (_Component) {
  _inherits(DateTimePicker, _Component);

  function DateTimePicker() {
    var _this = this;

    _classCallCheck(this, DateTimePicker);

    _get(Object.getPrototypeOf(DateTimePicker.prototype), "constructor", this).apply(this, arguments);

    this.renderDatePicker = function () {
      if (_this.props.showDatePicker) {
        return _react2["default"].createElement(
          "li",
          null,
          _react2["default"].createElement(_DateTimePickerDateJs2["default"], {
            addDecade: _this.props.addDecade,
            addMonth: _this.props.addMonth,
            addYear: _this.props.addYear,
            daysOfWeekDisabled: _this.props.daysOfWeekDisabled,
            maxDate: _this.props.maxDate,
            minDate: _this.props.minDate,
            selectedDate: _this.props.selectedDate,
            setSelectedDate: _this.props.setSelectedDate,
            setViewMonth: _this.props.setViewMonth,
            setViewYear: _this.props.setViewYear,
            showToday: _this.props.showToday,
            subtractDecade: _this.props.subtractDecade,
            subtractMonth: _this.props.subtractMonth,
            subtractYear: _this.props.subtractYear,
            viewDate: _this.props.viewDate,
            viewMode: _this.props.viewMode
          })
        );
      }
    };

    this.renderTimePicker = function () {
      if (_this.props.showTimePicker) {
        return _react2["default"].createElement(
          "li",
          null,
          _react2["default"].createElement(_DateTimePickerTimeJs2["default"], {
            addHour: _this.props.addHour,
            addMinute: _this.props.addMinute,
            mode: _this.props.mode,
            selectedDate: _this.props.selectedDate,
            setSelectedHour: _this.props.setSelectedHour,
            setSelectedMinute: _this.props.setSelectedMinute,
            subtractHour: _this.props.subtractHour,
            subtractMinute: _this.props.subtractMinute,
            togglePeriod: _this.props.togglePeriod,
            viewDate: _this.props.viewDate
          })
        );
      }
    };

    this.renderSwitchButton = function () {
      return _this.props.mode === _ConstantsJs2["default"].MODE_DATETIME ? _react2["default"].createElement(
        "li",
        null,
        _react2["default"].createElement(
          "span",
          { className: "btn picker-switch", onClick: _this.props.togglePicker, style: { width: "100%" } },
          _react2["default"].createElement("span", { className: (0, _classnames2["default"])("glyphicon", _this.props.showTimePicker ? "glyphicon-calendar" : "glyphicon-time") })
        )
      ) : null;
    };
  }

  _createClass(DateTimePicker, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: (0, _classnames2["default"])(this.props.widgetClasses), style: this.props.widgetStyle },
        _react2["default"].createElement(
          "ul",
          { className: "list-unstyled" },
          this.renderDatePicker(),
          this.renderSwitchButton(),
          this.renderTimePicker()
        )
      );
    }
  }], [{
    key: "propTypes",
    value: {
      showDatePicker: PropTypes.bool,
      showTimePicker: PropTypes.bool,
      subtractMonth: PropTypes.func.isRequired,
      addMonth: PropTypes.func.isRequired,
      viewDate: PropTypes.object.isRequired,
      selectedDate: PropTypes.object.isRequired,
      showToday: PropTypes.bool,
      viewMode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      mode: PropTypes.oneOf([_ConstantsJs2["default"].MODE_DATE, _ConstantsJs2["default"].MODE_DATETIME, _ConstantsJs2["default"].MODE_TIME]),
      daysOfWeekDisabled: PropTypes.array,
      setSelectedDate: PropTypes.func.isRequired,
      subtractYear: PropTypes.func.isRequired,
      addYear: PropTypes.func.isRequired,
      setViewMonth: PropTypes.func.isRequired,
      setViewYear: PropTypes.func.isRequired,
      subtractHour: PropTypes.func.isRequired,
      addHour: PropTypes.func.isRequired,
      subtractMinute: PropTypes.func.isRequired,
      addMinute: PropTypes.func.isRequired,
      addDecade: PropTypes.func.isRequired,
      subtractDecade: PropTypes.func.isRequired,
      togglePeriod: PropTypes.func.isRequired,
      minDate: PropTypes.object,
      maxDate: PropTypes.object,
      widgetClasses: PropTypes.object,
      widgetStyle: PropTypes.object,
      togglePicker: PropTypes.func,
      setSelectedHour: PropTypes.func,
      setSelectedMinute: PropTypes.func
    },
    enumerable: true
  }]);

  return DateTimePicker;
})(_react.Component);

exports["default"] = DateTimePicker;
module.exports = exports["default"];
