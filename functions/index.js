const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const hbs = require('express-handlebars');
admin.initializeApp(functions.config().firebase);

const app = express();

const db = admin.firestore();

db.collection('activities').get()
  .then(snap => {
    snap.forEach(doc => {
      /* console.log(doc.id); */
    });
  })
  .catch(err => console.log(err));


// Handlebars middleware.
app.engine('handlebars', hbs({defaultLayout: 'index'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home');
});

exports.app = functions.https.onRequest(app);
