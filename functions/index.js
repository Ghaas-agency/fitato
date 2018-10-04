const functions = require('firebase-functions');
const express = require('express');

const app = express();

app.get('/test', (req, res) => {
  res.send('Hello');
})

exports.helloWorld = functions.https.onRequest(app);
