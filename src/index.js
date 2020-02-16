import express from "express";
import fetch from "node-fetch";
import React from "react";
import { renderToString } from "react-dom/server";

import HomeRoot from "./roots/HomeRoot";
import AboutRoot from "./roots/AboutRoot";
import WorkRoot from "./roots/WorkRoot";

import { ServerStyleSheet } from 'styled-components';

import fs from 'fs';
import compression from 'compression';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

import config from './config';

const Cryptr = require('cryptr');
const cryptr = new Cryptr(config.key);

var PORT = process.env.PORT || 3003;

const app = express();
app.use(compression());
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

var dataObj = {},
homeBundle = "",
aboutBundle = "",
workBundle = "";

fs.readFile('./dist/js/home.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  homeBundle = data || "";
})
fs.readFile('./dist/js/about.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  aboutBundle = data || "";
})
fs.readFile('./dist/js/work.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  workBundle = data || "";
})

app.get('/', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, HomeRoot, "home"));
});
app.get('/home', (req, res) => {
  res.redirect('/');
});
app.get('/about', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, aboutBundle, AboutRoot, "about"));
});
app.get('/work', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, workBundle, WorkRoot, "work"));
});

app.post('/emailer', (req, res) => {
  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: cryptr.decrypt(config.email),
      pass: cryptr.decrypt(config.emailerPW)
    }
  });

  transporter.sendMail({
    from: req.body.email,
    to: cryptr.decrypt(config.email),
    subject: 'Interior Design Inquiry',
    html: `
      <h3>Hi Lars!</h3>
      <h3>The following email, ${req.body.email}, has a message for you and it can be read below.</h3>
      <h3>Message:</h3>
      <h3>${req.body.message}</h3>
    `
  }, (error, info) => {
    if (error) res.send({error: error});
    else res.send({response: info});
  });
})

app.get('/health', (req, res) => res.send('OK'));

app.listen( PORT, () => {
  console.log('Running on http://localhost:' + PORT)
});


// functions!!!!!!!!!!!!!

function getQueries(req, res){
  const qOb = {};
  const queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];
  if(queries.length){
    queries.forEach((x) => {
        var y = x.split('=');
        qOb[y[0]] = y[1];
    });
  }
  return qOb;
}

function fetcher(url){
	return fetch(url)
    .then((response) => {
        if(response.status !== 200) throw Error(response.statusText);
        return response.json();
    }).then((json) => {
        return json;
    }).catch(errHandle)
}

function returnHTML(data, bundle, Page, title){
    const dataString = JSON.stringify(data);
    const sheet = new ServerStyleSheet();
    const body = renderToString(sheet.collectStyles(<Page data={data}/>));
    const styles = sheet.getStyleTags();

    return `
            <html lang="en">
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>${title}</title>
                <meta name="Description" content="${title}">
                <style>
                  body { margin: 0; font-family: Helvetica; }
                  a { text-decoration: none; color: #000; }
                </style>
                <link href="https://fonts.googleapis.com/css?family=Noto+Serif+JP&display=swap" rel="stylesheet">
                ${styles}
              </head>
              <body>
                <script>window.os = window.os || {};</script>
                <script>window.__DATA__=${dataString}</script>
                <div id="app" role="main">${body}</div>
                <script>${bundle}</script>
              </body>
            </html>
          `;
}

function errHandle(err){
    console.log(err);
}
