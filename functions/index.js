const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const hbs = require('express-handlebars');
admin.initializeApp(functions.config().firebase);

// Get rid of timestamp warning.
admin.firestore().settings( { timestampsInSnapshots: true });
const db = admin.firestore();

const app = express();

async function getData() {
  return await db.collection('activities').get()
    .then(snap => {
      let arr = [];
      snap.forEach(doc => {
        arr.push(doc.id);
      });
      return arr;
    })
    .catch(err => console.log(err));
}

// Handlebars middleware.
app.engine('handlebars', hbs({defaultLayout: 'index'}));
app.set('view engine', 'handlebars');

// Routes
getData().then(arr => {
  app.get('/partner', (req, res) => {
    res.render('home', {
      data: arr
    });
  });
});

exports.app = functions.https.onRequest(app);
