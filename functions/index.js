const functions = require('firebase-functions');
const express = require('express');
const hbs = require('express-handlebars');
const app = express();

const routes = require('./controller/routes');

// Handlebars middleware.
app.engine('handlebars', hbs({defaultLayout: 'index'}));
app.set('view engine', 'handlebars');

// Routes
app.use('/api', routes);

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
