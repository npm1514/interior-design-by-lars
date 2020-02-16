"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkText = exports.SquareLink = exports.LinkSquare = exports.Paralax = exports.SplitDiv = exports.FlexSplit = exports.Footer = exports.BottomWrap = exports.MenuWrap = exports.DesktopHeader = exports.MobileHeader = exports.Header = exports.Subtitle = exports.Button = exports.Title = exports.PageContent = exports.PageWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n    font-family: 'Noto Serif JP', serif;\n    font-size: 24px;\n    text-align: center;\n    color: #333;\n    background-color: #ffffff80;\n    padding: 12px;\n    height: max-content;\n    font-weight: 100;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n  "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n\n  "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    width: calc(100vw - 48px);\n    height: calc(100vw - 48px);\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n    position: relative;\n    @media(min-width: 600px){\n      width: calc(50vw - 56px);\n      height: calc(50vw - 56px);\n    }\n    &:hover {\n      cursor: pointer;\n    }\n    &:hover h1 {\n      background-color: #ffffff50;\n    }\n  "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 550px;\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n  "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    img {\n      margin-bottom: 16px;\n    }\n    @media (min-width: 600px){\n      width: calc(50% - 8px);\n    }\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    flex-direction: column;\n    margin-top: 100px;\n    input {\n      width: 100%;\n      padding: 16px;\n      display: block;\n      margin: 16px 0;\n      font-size: 15px;\n      border: 1px solid #eee;\n      font-family: 'Noto Serif JP', serif;\n    }\n    textarea {\n      width: 100%;\n      padding: 16px;\n      display: block;\n      margin: 16px 0;\n      font-size: 15px;\n      border: 1px solid #eee;\n      font-family: 'Noto Serif JP', serif;\n    }\n    p {\n      font-size: 16px;\n      letter-spacing: 0em;\n      font-family: 'Noto Serif JP', serif;\n      font-weight: 400;\n      font-style: normal;\n      font-size: 15px;\n      letter-spacing: .05em;\n      line-height: 2em;\n      text-transform: none;\n      color: rgba(51,51,51,.5);\n      margin: 4px 0;\n      margin-right: 32px;\n    }\n    div:nth-child(2){\n      margin-top: 100px;\n    }\n    @media (min-width: 600px){\n      flex-direction: row;\n      div:nth-child(2){\n        margin-top: 0;\n      }\n    }\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    font-family: 'Noto Serif JP', serif;\n    font-size: 16px;\n    text-align: center;\n    padding: 16px 0;\n    display: flex;\n    margin-top: 100px;\n    justify-content: center;\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    position: absolute;\n    bottom: -68px;\n    display: flex;\n    justify-content: center;\n    a {\n      margin: 0 10px;\n      font-family: 'Noto Serif JP', serif;\n      color: #fff;\n    }\n    a:hover {\n      cursor: pointer;\n      color: #ffffff66;\n    }\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    left:0;\n    top: 2.5px;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    display: none;\n    position: relative;\n    @media (min-width: 600px){\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    display: block;\n    height: 52px;\n    position: relative;\n    @media (min-width: 600px){\n      display: none;\n    }\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 52px;\n    @media(min-width: 600px){\n      height: 130px;\n    }\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    font-family: 'Noto Serif JP', serif;\n    font-size: 16px;\n    text-align: left;\n    color: #333;\n    font-weight: 100;\n    line-height: 3;\n    @media (min-width: 350px){\n      font-size: 18px;\n    }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    font-family: 'Noto Serif JP', serif;\n    text-align: center;\n    color: #333;\n    font-weight: 100;\n    margin: 0;\n    font-size: 12px;\n    padding: 8px 16px;\n    background: #00000009;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    font-family: 'Noto Serif JP', serif;\n    font-size: 18px;\n    text-align: center;\n    color: #333;\n    margin: 8px 24px;\n    font-weight: 100;\n    @media (min-width: 350px){\n      font-size: 20px;\n    }\n  "]);

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

var Title = _styledComponents["default"].h1(_templateObject3());

exports.Title = Title;

var Button = _styledComponents["default"].button(_templateObject4());

exports.Button = Button;

var Subtitle = _styledComponents["default"].h2(_templateObject5()); //header


exports.Subtitle = Subtitle;

var Header = _styledComponents["default"].header(_templateObject6());

exports.Header = Header;

var MobileHeader = _styledComponents["default"].div(_templateObject7());

exports.MobileHeader = MobileHeader;

var DesktopHeader = _styledComponents["default"].div(_templateObject8());

exports.DesktopHeader = DesktopHeader;

var MenuWrap = _styledComponents["default"].div(_templateObject9());

exports.MenuWrap = MenuWrap;

var BottomWrap = _styledComponents["default"].div(_templateObject10()); //Footer


exports.BottomWrap = BottomWrap;

var Footer = _styledComponents["default"].footer(_templateObject11());

exports.Footer = Footer;

var FlexSplit = _styledComponents["default"].div(_templateObject12());

exports.FlexSplit = FlexSplit;

var SplitDiv = _styledComponents["default"].div(_templateObject13());

exports.SplitDiv = SplitDiv;

var Paralax = _styledComponents["default"].div(_templateObject14());

exports.Paralax = Paralax;

var LinkSquare = _styledComponents["default"].div(_templateObject15());

exports.LinkSquare = LinkSquare;

var SquareLink = _styledComponents["default"].a(_templateObject16());

exports.SquareLink = SquareLink;

var LinkText = _styledComponents["default"].h1(_templateObject17());

exports.LinkText = LinkText;