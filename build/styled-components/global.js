"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = exports.BottomWrap = exports.MenuWrap = exports.DesktopHeader = exports.MobileHeader = exports.Header = exports.Title = exports.PageContent = exports.PageWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    font-family: 'Noto Serif JP', serif;\n    font-size: 16px;\n    text-align: center;\n    padding: 16px 0;\n    display: flex;\n    justify-content: center;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    position: absolute;\n    bottom: -68px;\n    display: flex;\n    justify-content: center;\n    a {\n      margin: 0 10px;\n      font-family: 'Noto Serif JP', serif;\n      color: #fff;\n    }\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    left:0;\n    top: 2.5px;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    display: none;\n    position: relative;\n    @media (min-width: 600px){\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    display: block;\n    height: 52px;\n    position: relative;\n    @media (min-width: 600px){\n      display: none;\n    }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 52px;\n    @media(min-width: 600px){\n      height: 130px;\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    font-family: 'Noto Serif JP', serif;\n    font-size: 18px;\n    text-align: center;\n    color: #333;\n    margin: 0 24px;\n    font-weight: 100;\n    @media (min-width: 350px){\n      font-size: 20px;\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    min-height: 100vh;\n    text-align: center;\n    img {\n      width: 100%;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: calc(100% - 48px);\n    margin: 24px;\n    min-height: 100vh;\n    @media(min-width: 600px){\n      margin: 48px;\n      width: calc(100% - 96px);\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//page
var PageWrapper = _styledComponents["default"].div(_templateObject());

exports.PageWrapper = PageWrapper;

var PageContent = _styledComponents["default"].div(_templateObject2());

exports.PageContent = PageContent;

var Title = _styledComponents["default"].h1(_templateObject3()); //header


exports.Title = Title;

var Header = _styledComponents["default"].header(_templateObject4());

exports.Header = Header;

var MobileHeader = _styledComponents["default"].div(_templateObject5());

exports.MobileHeader = MobileHeader;

var DesktopHeader = _styledComponents["default"].div(_templateObject6());

exports.DesktopHeader = DesktopHeader;

var MenuWrap = _styledComponents["default"].div(_templateObject7());

exports.MenuWrap = MenuWrap;

var BottomWrap = _styledComponents["default"].div(_templateObject8()); //Footer


exports.BottomWrap = BottomWrap;

var Footer = _styledComponents["default"].footer(_templateObject9());

exports.Footer = Footer;