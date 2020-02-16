"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

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

var TemporaryDrawer =
/*#__PURE__*/
function (_Component) {
  _inherits(TemporaryDrawer, _Component);

  function TemporaryDrawer(props) {
    var _this;

    _classCallCheck(this, TemporaryDrawer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TemporaryDrawer).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggleDrawer", function (side, open) {
      return function (event) {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }

        _this.setState({
          left: open
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "sideList", function (side) {
      return _react["default"].createElement("div", {
        role: "presentation",
        onClick: _this.toggleDrawer(side, false),
        onKeyDown: _this.toggleDrawer(side, false)
      }, _react["default"].createElement(_core.List, null, ['Inbox', 'Starred', 'Send email', 'Drafts'].map(function (text, index) {
        return _react["default"].createElement(_core.ListItem, {
          button: true,
          key: text
        }, _react["default"].createElement(_core.ListItemIcon, null, index % 2 === 0 ? _react["default"].createElement(_icons.InboxIcon, null) : _react["default"].createElement(_icons.MailIcon, null)), _react["default"].createElement(_core.ListItemText, {
          primary: text
        }));
      })), _react["default"].createElement(_core.Divider, null), _react["default"].createElement(_core.List, null, ['All mail', 'Trash', 'Spam'].map(function (text, index) {
        return _react["default"].createElement(_core.ListItem, {
          button: true,
          key: text
        }, _react["default"].createElement(_core.ListItemIcon, null, index % 2 === 0 ? _react["default"].createElement(_icons.InboxIcon, null) : _react["default"].createElement(_icons.MailIcon, null)), _react["default"].createElement(_core.ListItemText, {
          primary: text
        }));
      })));
    });

    _this.state = {
      left: false
    };
    return _this;
  }

  _createClass(TemporaryDrawer, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", null, _react["default"].createElement(_core.Button, {
        onClick: this.toggleDrawer('left', true)
      }, "Open Left"), _react["default"].createElement(_core.Drawer, {
        anchor: "left",
        open: this.state.left,
        onClose: this.toggleDrawer('left', false)
      }, this.sideList('left')));
    }
  }]);

  return TemporaryDrawer;
}(_react.Component);

var _default = TemporaryDrawer;
exports["default"] = _default;