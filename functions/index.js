const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
admin.initializeApp(functions.config().firebase);

// Get rid of timestamp warning.
admin.firestore().settings({ timestampsInSnapshots: true });
const db = admin.firestore();

const app = express();

// Get options for search form.
async function getOptions() {
  const activities = await db.collection('activities').get()
    .then(snap => {
      let arr = [];
      snap.forEach(doc => {
        arr.push({id: doc.id, text: doc.data().text});
      });
      arr.unshift({id: 'all', text: 'All'});
      return arr;
    })
    .catch(err => console.log(err));

  const locations = await db.collection('facilities-pune').get()
    .then(snap => {
      let arr = [];
      snap.forEach(doc => {
        arr.push({id: doc.id, text: doc.data().text});
      });
      arr.unshift({id: 'all', text: 'All'});
      return arr;
    })
    .catch(err => console.log(err));
  
  const both = await {activities, locations};
  return both;
}

// Handlebars middleware.
app.engine('handlebars', hbs({defaultLayout: 'index'}));
app.set('view engine', 'handlebars');

// Routes
app.get('/partner', async (req, res) => {
  res.render('home', {
    data: await getOptions()
  });
});

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
