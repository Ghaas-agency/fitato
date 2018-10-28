const functions = require('firebase-functions');
const express = require('express');

const path = require('path');
const basicAuth = require('express-basic-auth');

const app = express();

// Controllers
const api = require('./controller/api');
const client = require('./controller/client');

// Pug middleware.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Routes
app.use('/api', basicAuth({
  users: { 'akshay': 'secret' },
  unauthorizedResponse: getUnauthorizedResponse
}), api);
app.use('/partner', client);

// Sends reponse when route authorization fails.
function getUnauthorizedResponse(req) {
  return req.auth
    ? ('Error 401: Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected.')
    : 'Error 401: Unauthorized access.';
}

// Handle 404 error
app.use((req, res, next) => {
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

exports.app = functions.https.onRequest(app);
