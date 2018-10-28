const functions = require('firebase-functions');
const express = require('express');
const hbs = require('express-handlebars');
const basicAuth = require('express-basic-auth');

const app = express();

const api = require('./controller/api');
const client = require('./controller/client');

// Handlebars middleware.
app.engine('handlebars', hbs({defaultLayout: 'index'}));
app.set('view engine', 'handlebars');

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
