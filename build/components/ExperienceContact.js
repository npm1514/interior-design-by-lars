"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _global = require("../styled-components/global");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ExperienceContactComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(ExperienceContactComponent, _Component);

  function ExperienceContactComponent(props) {
    var _this;

    _classCallCheck(this, ExperienceContactComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExperienceContactComponent).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "changeState", function (e, prop) {
      var obj = {};
      obj[prop] = e.target.value;

      _this.setState(obj);
    });

    _defineProperty(_assertThisInitialized(_this), "displayMessage", function (message) {
      _this.setState({
        displayedMessage: message
      }, function () {
        setTimeout(function () {
          _this.setState({
            displayedMessage: ""
          });
        }, 4000);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "sendEmail", function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          email = _this$state.email,
          message = _this$state.message;
      var data = {
        email: email,
        message: message
      };
      fetch('/emailer', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        _this.setState({
          email: "",
          message: ""
        });

        _this.displayMessage("An email has been sent to Lars. She will respond with any further correspondance.");
      })["catch"](function (err) {
        return console.error(err);
      });
    });

    _this.state = {
      email: "",
      message: "",
      displayedMessage: ""
    };
    return _this;
  }

  _createClass(ExperienceContactComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          email = _this$state2.email,
          message = _this$state2.message,
          displayedMessage = _this$state2.displayedMessage;
      return _react["default"].createElement("div", null, _react["default"].createElement(_global.FlexSplit, null, _react["default"].createElement(_global.SplitDiv, null, _react["default"].createElement(_global.Subtitle, null, "Work Experience"), _react["default"].createElement("p", null, "Designer/Sales - Anasazi Stone"), _react["default"].createElement("p", null, "Residential Tile Design"), _react["default"].createElement("p", null, "Assistant Landscape Designer - Organic Earth Designs"), _react["default"].createElement("p", null, "Floral Arrangement, Wedding Reception Design"), _react["default"].createElement("p", null, "Interior Design Intern - Osmond Design"), _react["default"].createElement("p", null, "Spatial Design and Organization")), _react["default"].createElement(_global.SplitDiv, null, _react["default"].createElement(_global.Subtitle, null, "Contact"), _react["default"].createElement("p", null, "slarsrobertson@gmail.com"), _react["default"].createElement("p", null, "385-274-8887"), _react["default"].createElement("form", {
        onSubmit: this.sendEmail
      }, _react["default"].createElement("input", {
        value: email,
        onChange: function onChange(e) {
          _this2.changeState(e, "email");
        },
        placeholder: "Email Address",
        type: "email"
      }), _react["default"].createElement("textarea", {
        value: message,
        onChange: function onChange(e) {
          _this2.changeState(e, "message");
        },
        placeholder: "Message"
      }), _react["default"].createElement(_global.Button, {
        type: "submit"
      }, "SUBMIT")))), displayedMessage && _react["default"].createElement(_global.Title, {
        style: {
          color: "#000"
        }
      }, displayedMessage));
    }
  }]);

  return ExperienceContactComponent;
}(_react.Component);

var _default = ExperienceContactComponent;
exports["default"] = _default;