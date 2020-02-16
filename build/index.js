"use strict";

var _express = _interopRequireDefault(require("express"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _HomeRoot = _interopRequireDefault(require("./roots/HomeRoot"));

var _AboutRoot = _interopRequireDefault(require("./roots/AboutRoot"));

var _WorkRoot = _interopRequireDefault(require("./roots/WorkRoot"));

var _styledComponents = require("styled-components");

var _fs = _interopRequireDefault(require("fs"));

var _compression = _interopRequireDefault(require("compression"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _path = _interopRequireDefault(require("path"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Cryptr = require('cryptr');

var cryptr = new Cryptr(_config["default"].key);
var PORT = process.env.PORT || 3003;
var app = (0, _express["default"])();
app.use((0, _compression["default"])());
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded());
var dataObj = {},
    homeBundle = "",
    aboutBundle = "",
    workBundle = "";

_fs["default"].readFile('./dist/js/home.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  homeBundle = data || "";
});

_fs["default"].readFile('./dist/js/about.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  aboutBundle = data || "";
});

_fs["default"].readFile('./dist/js/work.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  workBundle = data || "";
});

app.get('/', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, _HomeRoot["default"], "home"));
});
app.get('/home', function (req, res) {
  res.redirect('/');
});
app.get('/about', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, aboutBundle, _AboutRoot["default"], "about"));
});
app.get('/work', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, workBundle, _WorkRoot["default"], "work"));
});
app.get('/images/:id', function (req, res) {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(_path["default"].join(__dirname, '../images/' + req.params.id));
});
app.post('/emailer', function (req, res) {
  var transporter = _nodemailer["default"].createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: cryptr.decrypt(_config["default"].email),
      pass: cryptr.decrypt(_config["default"].emailerPW)
    }
  });

  transporter.sendMail({
    from: req.body.email,
    to: cryptr.decrypt(_config["default"].email),
    subject: 'Interior Design Inquiry',
    html: "\n      <h3>Hi Lars!</h3>\n      <h3>The following email, ".concat(req.body.email, ", has a message for you and it can be read below.</h3>\n      <h3>Message:</h3>\n      <h3>").concat(req.body.message, "</h3>\n    ")
  }, function (error, info) {
    if (error) res.send({
      error: error
    });else res.send({
      response: info
    });
  });
});
app.get('/health', function (req, res) {
  return res.send('OK');
});
app.listen(PORT, function () {
  console.log('Running on http://localhost:' + PORT);
}); // functions!!!!!!!!!!!!!

function getQueries(req, res) {
  var qOb = {};
  var queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];

  if (queries.length) {
    queries.forEach(function (x) {
      var y = x.split('=');
      qOb[y[0]] = y[1];
    });
  }

  return qOb;
}

function fetcher(url) {
  return (0, _nodeFetch["default"])(url).then(function (response) {
    if (response.status !== 200) throw Error(response.statusText);
    return response.json();
  }).then(function (json) {
    return json;
  })["catch"](errHandle);
}

function returnHTML(data, bundle, Page, title) {
  var dataString = JSON.stringify(data);
  var sheet = new _styledComponents.ServerStyleSheet();
  var body = (0, _server.renderToString)(sheet.collectStyles(_react["default"].createElement(Page, {
    data: data
  })));
  var styles = sheet.getStyleTags();
  return "\n            <html lang=\"en\">\n              <head>\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n                <title>".concat(title, "</title>\n                <meta name=\"Description\" content=\"").concat(title, "\">\n                <style>\n                  body { margin: 0; font-family: Helvetica; }\n                  a { text-decoration: none; color: #000; }\n                </style>\n                <link href=\"https://fonts.googleapis.com/css?family=Noto+Serif+JP&display=swap\" rel=\"stylesheet\">\n                ").concat(styles, "\n              </head>\n              <body>\n                <script>window.os = window.os || {};</script>\n                <script>window.__DATA__=").concat(dataString, "</script>\n                <div id=\"app\" role=\"main\">").concat(body, "</div>\n                <script>").concat(bundle, "</script>\n              </body>\n            </html>\n          ");
}

function errHandle(err) {
  console.log(err);
}