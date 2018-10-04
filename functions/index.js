const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const hbs = require('express-handlebars');
admin.initializeApp(functions.config().firebase);

// Get rid of timestamp warning.
admin.firestore().settings( { timestampsInSnapshots: true });

const app = express();

const db = admin.firestore();

db.collection('activities').get()
  .then(snap => {
    let arr = [];
    snap.forEach(doc => {
      arr.push(doc.id);
    });
    console.log(arr);
    return arr;
  })
  .catch(err => console.log(err));

console.log('it ran');

// Handlebars middleware.
app.engine('handlebars', hbs({defaultLayout: 'index'}));
app.set('view engine', 'handlebars');

app.get('/partners', (req, res) => {
  res.render('home');
});

exports.app = functions.https.onRequest(app);
